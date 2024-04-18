import {mergeAttributes, Node} from '@tiptap/core';
import {NodeViewRendererProps, NodeViewWrapper, ReactNodeViewRenderer} from '@tiptap/react';
import {getLinkPreview} from 'link-preview-js';
import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import {themeColor} from '@/common/configs/theme';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import LockIcon from '@mui/icons-material/Lock';
import Stack from '@mui/system/Stack';

export type LinkPreviewOptions = Awaited<ReturnType<typeof getLinkPreview>>;

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    linkPreview: {
      addLinkPreview: (linkPreview: LinkPreviewOptions) => ReturnType;
    };
  }
}

export const LinkPreviewExtension = Node.create<LinkPreviewOptions>({
  name: 'link-preview',
  draggable: true,
  inline() {
    return false;
  },
  group() {
    return 'block';
  },
  parseHTML() {
    return [
      {
        tag: 'link-preview'
      }
    ];
  },
  addCommands() {
    return {
      addLinkPreview:
        (options: LinkPreviewOptions) =>
        ({commands}) => {
          return commands.insertContent({
            type: 'link-preview',
            attrs: {
              data: JSON.stringify(options)
            }
          });
        }
    };
  },

  addAttributes() {
    return {
      data: JSON.stringify(this.options)
    };
  },

  renderHTML({HTMLAttributes}) {
    return ['link-preview', mergeAttributes({}, HTMLAttributes)];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component);
  }
});

const Component = (props: NodeViewRendererProps) => {
  try {
    const parsedData = JSON.parse(props.node.attrs.data) as Awaited<
      ReturnType<typeof getLinkPreview>
    >;

    const image = 'images' in parsedData ? parsedData.images[0] : undefined;

    const title = 'title' in parsedData ? parsedData.title : parsedData.url;
    const description = 'description' in parsedData ? parsedData.description : '';
    const url = new URL(parsedData.url);

    return (
      <NodeViewWrapper className={'Link Preview'}>
        <WrappedLink href={parsedData.url} title={title} target={'_blank'}>
          <Wrapper>
            <Grid container spacing={2} alignItems={'center'}>
              {image && (
                <Grid item xs={12} sm={4} md={3} lg={2}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={title}
                    style={{
                      width: '100%',
                      aspectRatio: 16 / 9,
                      objectFit: 'contain',
                      objectPosition: 'center'
                    }}
                  />
                </Grid>
              )}
              <Grid item flex={1}>
                <Title>{title}</Title>
                <Description variant={'subtitle1'}>{description}</Description>
                <Stack direction={'row'} spacing={0} alignItems={'center'} mt={1}>
                  {url.protocol === 'https:' && <SLockIcon />}
                  <Hostname variant={'body2'}>{url.hostname}</Hostname>
                </Stack>
              </Grid>
            </Grid>
          </Wrapper>
        </WrappedLink>
      </NodeViewWrapper>
    );
  } catch (e) {
    return null;
  }
};

const WrappedLink = styled(Link)`
  width: 100%;

  &:hover {
    text-decoration: none !important;
  }
`;

const Wrapper = styled(Grid)`
  background: ${themeColor('success_200')};
  border: 1px solid ${themeColor('success')};
  padding: 24px;
`;

const Title = styled(Typography)`
  color: ${themeColor('black')};
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
`;

const Description = styled(Typography)`
  color: ${themeColor('grey')};
`;

const SLockIcon = styled(LockIcon)`
  width: 16px;
  height: 16px;
  color: ${themeColor('secondary')};
`;

const Hostname = styled(Typography)`
  color: ${themeColor('secondary')};
  display: block;
`;
