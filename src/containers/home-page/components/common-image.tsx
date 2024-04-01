import styled from '@emotion/styled';

export function CommonImage({src, alt, classItem}: {src?: string; alt?: string; classItem?:string}) {
  return <LinkImage className={classItem} href="#"><ImageWrapper src={src} alt={alt} /></LinkImage>;
}

const ImageWrapper = styled.img`
  display: block;
  width: 100%;
  
  @media screen and (max-width: 821px) {
    border-radius: 4px;
    height: 100%;
    object-fit: cover;
  }
`;

const LinkImage = styled.a`
  border-radius: 4px;
  margin-bottom: 16px;
  overflow: hidden;
  
  &.list-img-xl {
    flex: 1 0 40%;
    
    img {
      border-radius: 4px;
    }
  }

  &.bigMainTopic {
    border-radius: 8px;
    flex: 1 0 100%;
    
    img {
      min-height: 500px;
      border-radius: 4px;

      @media screen and (max-width: 821px) {
        min-height: unset;
      }
    }
  }
  
  @media screen and (max-width: 821px) {
    border-radius: 4px;
    flex: 1 0 120px;
  }
`;
