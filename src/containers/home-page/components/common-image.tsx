import styled from '@emotion/styled';

export function CommonImage({src, alt}: {src?: string; alt?: string}) {
  return <LinkImage href="#"><ImageWrapper src={src} alt={alt} /></LinkImage>;
}

const ImageWrapper = styled.img`
  display: block;
  border-radius: 8px;
  width: 100%;
  @media screen and (max-width: 821px) {
    border-radius: 4px;
  }
`;

const LinkImage = styled.a`
  @media screen and (max-width: 821px) {
    flex: 1 0 120px;
  }
`;
