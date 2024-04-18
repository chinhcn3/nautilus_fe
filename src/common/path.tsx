export const paths = [
  "/[cat-slug]",
  "/auth",
  "/compose",
  "/content/[slug]",
  "/dashboard/admin/comments",
  "/dashboard/admin/reported-comments",
  "/dashboard/admin/topics",
  "/dashboard/admin/users",
  "/dashboard/admin/violations",
  "/dashboard/comments",
  "/dashboard/following-users",
  "/dashboard",
  "/dashboard/reactions",
  "/dashboard/saved-topics",
  "/dashboard/settings",
  "/dashboard/topics",
  ""
] as const;
  
export type TPath = typeof paths[number];

export enum EPath {
  "/[cat-slug]" = "/[cat-slug]",
  "/auth" = "/auth",
  "/compose" = "/compose",
  "/content/[slug]" = "/content/[slug]",
  "/dashboard/admin/comments" = "/dashboard/admin/comments",
  "/dashboard/admin/reported-comments" = "/dashboard/admin/reported-comments",
  "/dashboard/admin/topics" = "/dashboard/admin/topics",
  "/dashboard/admin/users" = "/dashboard/admin/users",
  "/dashboard/admin/violations" = "/dashboard/admin/violations",
  "/dashboard/comments" = "/dashboard/comments",
  "/dashboard/following-users" = "/dashboard/following-users",
  "/dashboard" = "/dashboard",
  "/dashboard/reactions" = "/dashboard/reactions",
  "/dashboard/saved-topics" = "/dashboard/saved-topics",
  "/dashboard/settings" = "/dashboard/settings",
  "/dashboard/topics" = "/dashboard/topics",
  "" = ""
}
