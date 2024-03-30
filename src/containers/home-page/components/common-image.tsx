import styled from '@emotion/styled';

export function CommonImage({src, alt}: {src?: string; alt?: string}) {
  return <ImageWrapper src={src} alt={alt} />;
}

const ImageWrapper = styled.img`
  display: block;
  border-radius: 8px;
  width: 100%;
`;
