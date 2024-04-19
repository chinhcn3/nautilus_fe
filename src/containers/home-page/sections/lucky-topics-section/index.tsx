import {SectionHeading} from '@/containers/home-page/components/section-heading';
import {BigLuckyGift} from '@/containers/home-page/sections/lucky-topics-section/components/big-lucky-gift';
import {useHomePageContext} from '@/containers/home-page/home-provider';
import Grid from '@mui/material/Grid';
import {Container} from '@mui/material';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import {TopicWrapper} from '@/containers/home-page/components/topic/topic-wrapper';

export function LuckyTopicsSection() {
  const {home} = useHomePageContext();
  const luckyGiftTopics = home.lucky_gift_topics || [];

  return (
    <Lucky className="lucky">
      <Container maxWidth="xl" sx={{px: {xs: 1, md: 2}}}>
        <SectionHeading classItem="grey" title="Đi tìm may mắn" />
        <Grid container spacing={3}>
          <BigLuckyGift topic={luckyGiftTopics?.[0]} />
          <Grid item xs={12} md={4}>
            <div className="lucky-right">
              <h4 className="font-weight-bold">Sự kiện hàng ngày</h4>
              {luckyGiftTopics?.slice(1, 6)?.map((topic) => {
                return (
                  <TopicWrapper topic={topic} key={topic.id}>
                    <div className="lucky-item">
                      <LuckyItem>
                        <a href="#" className="d-block img-thumb">
                          <img src={topic?.thumbnail} alt="lucky img" className="img-fluid" />
                        </a>
                        <a href="#" className="d-block text">
                          {topic?.title}
                        </a>
                      </LuckyItem>
                    </div>
                  </TopicWrapper>
                );
              })}
            </div>
          </Grid>
        </Grid>
      </Container>
    </Lucky>
  );
}

const LuckyItem = styled.div`
  display: flex;
`;

const Lucky = styled.div`
  padding: 40px 0 0;
  background-color: ${themeColor('white2')};
  margin-top: 0;

  @media screen and (max-width: 821px) {
    padding: 16px 0;
  }

  .lucky-left {
    border-radius: 8px;
    overflow: hidden;
  }

  .lucky-big-thumbnail {
    position: relative;

    .img-fluid {
      max-width: 100%;
      display: block;
    }

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      background-image: linear-gradient(rgba(75, 64, 212, 0), #4b40d4);
      width: 100%;
      height: 100%;
    }
  }

  .lucky-content {
    background-color: #4b40d4;
    color: #fff;
    padding: 32px;
    border-radius: 0 0 8px 8px;
    justify-content: space-between;
    display: flex;

    span {
      color: white;
      font-weight: 500;
    }

    h4 {
      color: white;
      font-size: 36px;
      margin: 8px 0 16px;
      font-weight: bold;
      gap: 8px;
      font-family: 'Roboto', sans-serif;
      display: flex;
      align-items: center;
    }

    p {
      color: white;
      font-size: 18px;
      line-height: 22px;
    }

    .content-right {
      .join {
        background-color: #fff;
        font-size: 20px;
        color: #4b40d4;
        display: inline-block;
        text-transform: uppercase;
        font-weight: bold;
        padding: 0 20px;
        border-radius: 4px;
        line-height: 64px;
      }

      .condition {
        font-size: 18px;
        line-height: 22px;
        color: #fff;
        display: block;
        text-decoration: underline;
        text-align: center;
        margin-top: 16px;
      }
    }
  }

  .lucky-item .text {
    font-size: 18px;
    font-weight: 600;
    line-height: 150%;
    margin-left: 16px;

    @media screen and (max-width: 821px) {
      color: #4b40d4;
    }
  }

  .lucky-right {
    background-color: #fff;
    border-radius: 8px;
    padding: 24px;
    overflow: hidden;
    height: 100%;

    h4 {
      font-size: 20px;
      font-weight: 600;
    }

    .lucky-item {
      margin-top: 24px;

      .img-thumb {
        overflow: hidden;
        border-radius: 4px;
        flex: 1 0 177px;

        img {
          max-width: 100%;
          display: block;
        }

        @media screen and (max-width: 821px) {
          display: none;
        }
      }
    }
  }

  @media screen and (max-width: 821px) {
    padding: 24px 0 0;

    .lucky-content {
      padding: 16px;
      flex-direction: column;
      align-items: center;

      span {
        font-size: 14px;
      }

      h4 {
        font-size: 20px;
      }

      svg {
        transform: scale(0.75);
      }

      p {
        font-size: 16px;
        line-height: 19px;
      }

      .content-right {
        width: 100%;

        .join {
          width: 100%;
          margin-top: 16px;
          text-align: center;
          line-height: 56px;
          font-size: 18px;
        }

        .condition {
          line-height: 19px;
          font-size: 16px;
          margin-top: 16px;
        }
      }
    }

    .lucky-item .text {
      margin-left: 0;
    }
  }
`;
