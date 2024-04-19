import styled from '@emotion/styled';

export function CommonImage({
  src,
  alt,
  classItem
}: {
  src?: string;
  alt?: string;
  classItem?: string;
}) {
  return (
    <LinkImage className={classItem}>
      <ImageWrapper src={src} alt={alt} />
    </LinkImage>
  );
}

const ImageWrapper = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 4px;

  @media screen and (max-width: 821px) {
    height: auto;
    position: relative;
  }
`;

const LinkImage = styled.a`
  position: relative;
  width: 100%;
  padding-bottom: 56%;
  overflow: hidden;
  display: block;
  line-height: 0;
  border-radius: 4px;

  &.border-left {
    max-width: 100%;
    flex: 1 0 100%;

    img {
      border-radius: 8px 0 0 8px;
      @media screen and (max-width: 821px) {
        border-radius: 6px 6px 0 0;
      }
    }
  }

  &.list-img-xl {
    flex: 1 0 40%;
    padding-bottom: 22.6%;
    max-width: 40%;

    img {
      border-radius: 4px;
    }

    @media screen and (max-width: 821px) {
      flex: 1 0 32%;
      padding-bottom: 0;
      max-width: 32%;
    }
  }

  &.bigMainTopic {
    border-radius: 8px;
    flex: 1 0 100%;
    width: 100%;
    padding-bottom: 75%;
    max-width: 100%;

    @media screen and (max-width: 821px) {
      padding-bottom: 60%;
      border-radius: 4px;

      img {
        position: absolute;
        height: 100%;
      }
    }
  }

  @media screen and (max-width: 821px) {
    padding-bottom: 0;

    &.xs-horizontal {
      flex: 1 0 32%;
      max-width: 32%;
    }
  }
`;
