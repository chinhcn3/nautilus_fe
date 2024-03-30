import styled from '@emotion/styled';

export function ButtonLoadMore({title}: {title?: string}) {
  return <ButtonLoadMoreContainer>{title}</ButtonLoadMoreContainer>;
}

const ButtonLoadMoreContainer = styled.button`
  display: flex;
  padding: 16px 40px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  background: #0f1c36;
  color: #fff;
  font-family: Roboto Condensed, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;

  @media (min-width: 701px) and (max-width: 1120px) {
    padding: 12px 24px;
    font-size: 20px;
    line-height: 28px;
  }
  @media (max-width: 700px) {
    padding: 8px 16px;
    font-size: 16px;
    line-height: 24px;
  }
`;
