import Stack from '@mui/material/Stack';
import {NodeViewRendererProps} from '@tiptap/core';
import {NodeViewWrapper} from '@tiptap/react';
import {Grid, Typography} from '@mui/material';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import {useImagesInsideEditor} from '@/components/packages/tiptap/helpers/useImagesInsideEditor';
import {LightboxContext} from '@/containers/topic-content/Content/LightboxContext';

export function ImagesInsideTopicComponent(props: NodeViewRendererProps) {
  const imageNodes = useImagesInsideEditor(props.editor);

  const openLightbox = LightboxContext.useSelector((state) => state.openLightboxByIndex);

  return (
    <NodeViewWrapper>
      <Stack direction={'column'} rowGap={1}>
        <Title>Ảnh trong bài</Title>
        <Grid container spacing={1}>
          {imageNodes.map((nodePos, index) => {
            const attrs = nodePos.node.attrs;

            return (
              <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                <ImageWrapper onClick={() => openLightbox?.(index)}>
                  {/* eslint-disable @next/next/no-img-element */}
                  <SImg src={attrs.src} alt={attrs.alt} />
                </ImageWrapper>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </NodeViewWrapper>
  );
}

const Title = styled(Typography)`
  font-size: 18px;
  color: ${themeColor('black')};
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1.77778 / 1;
  background-color: ${themeColor('grey1')};
`;

const SImg = styled.img`
  object-fit: contain;
  object-position: center;
`;
