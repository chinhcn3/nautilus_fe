# ----------------------------------------------------
# Stage 1: Building the code
FROM node:lts-alpine as build_base

WORKDIR /app

# Copy package.json and package-lock.json/yarn.lock files
COPY package*.json yarn.lock ./
COPY ./patches ./patches

RUN apk update && apk add --no-cache libc6-compat \
    && yarn install --frozen-lockfile \
    && yarn cache clean


# ----------------------------------------------------
# Stage 2: Building the code
FROM node:lts-alpine as builder

WORKDIR /app
ENV NODE_ENV=production

COPY --from=build_base /app/node_modules ./node_modules
COPY . .

RUN wget -O - https://gobinaries.com/tj/node-prune | sh \
    && yarn build \
    && cd .next/standalone \
    && node-prune


# ----------------------------------------------------
# Stage 3: Running the code in production mode with a minimal base image
FROM node:lts-alpine as runner

WORKDIR /app
ENV NODE_ENV=production

# Copy only necessary files from builder stage to keep image size small
#COPY --from=builder /app/package.json ./
#COPY --from=builder /app/.next ./.next
#COPY --from=builder /app/node_modules ./node_modules

# Standalone mode of NextJS only needs these
COPY --from=builder /app/.env.development.remote ./.env.development
COPY --from=builder /app/.env.production.remote ./.env.production
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]
