import type {contentdto_TopicResp} from '@/common/openapi';
import {DEFAULT_IMAGE} from '@/containers/home-page/constant';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import Link from 'next/link';
import {TopicWrapper} from '@/containers/home-page/components/topic/topic-wrapper';

export function TopVideoTopicsList({topics}: {topics: Array<contentdto_TopicResp>}) {
  return (
    <Grid item md={4} xs={12}>
      <HomeVideosRight className="home-videos-right">
        {topics?.slice(1, 10).map((topic, index) => {
          return (
            <div key={topic.id} className={'lucky-item' + (index === 1 ? ' active' : '')}>
              <TopicWrapper topic={topic}>
                <HomeVideoListItem>
                  <Link href="#" className="img-thumb">
                    <img
                      src={topic?.thumbnail || DEFAULT_IMAGE}
                      alt="lucky img"
                      className="img-fluid"
                    />
                  </Link>
                  <Link href="#" className="d-block text">
                    {topic.title}
                  </Link>
                </HomeVideoListItem>
              </TopicWrapper>
            </div>
          );
        })}
      </HomeVideosRight>
    </Grid>
  );
}
const HomeVideosRight = styled.div`
  width: 100%;
  background-color: ${themeColor('white')};
  overflow-y: auto;
  height: 100%;
  border-radius: 0 16px 16px 0;

  .lucky-item {
    transition: all 0.2s ease;
    border-right: 4px solid transparent;
    margin-top: 0;
    padding: 16px;

    &:first-child {
      margin-top: 0;
    }

    &.active,
    &:hover {
      background-color: ${themeColor('primary_2')};
      border-right: 4px solid ${themeColor('primary')};
    }

    .img-thumb {
      overflow: hidden;
      flex: 1 0 40%;

      @media screen and (max-width: 821px) {
        flex: 1 0 32%;
      }

      img {
        width: 100%;
        border-radius: 4px;
      }
    }

    .text {
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      font-weight: 600;
      line-height: 150%;
      margin-left: 16px;

      @media screen and (max-width: 821px) {
        font-size: 16px;
      }
    }
  }

  @media screen and (max-width: 821px) {
    margin-left: 0;
    overflow: hidden;
    max-height: initial;
    border-radius: 0 0 4px 4px;
  }
`;

const HomeVideoListItem = styled.div`
  display: flex;
`;
