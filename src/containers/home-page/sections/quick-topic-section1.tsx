import type {contentdto_TopicResp} from '@/common/openapi';
import {useHomePageContext} from '@/containers/home-page/home-provider';
import {HomeSectionTitle} from '@/components/home-section-title';
import {themeColor} from '@/common/configs/theme';
import styled from '@emotion/styled';

export function QuickTopicSection1() {
  const {home} = useHomePageContext();

  return (
    <QuickTopicContainer>
      <QuickTopicTitle>
        <HomeSectionTitle title="Chủ đề nhanh" fontSize={32} lineHeight={36} isDark />
        <div className="add-button">Thêm bài mới</div>
      </QuickTopicTitle>
      <QuickTopicList>
        {home.quick_topics?.map((topic: contentdto_TopicResp) => {
          return (
            <div className="topic" key={topic.id}>
              <img src={topic.image} alt={''} />
              <span>{topic.title}</span>
            </div>
          );
        })}
      </QuickTopicList>
    </QuickTopicContainer>
  );
}

const QuickTopicTitle = styled.div`
  display: flex;
  justify-content: space-between;

  .add-button {
    display: inline-flex;
    padding: 16px 40px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 6px;
    background: #63e7f0;

    color: ${themeColor('white')};
    font-family: Roboto Condensed, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;

    @media (max-width: 768px) {
      padding: 8px 16px;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

const QuickTopicList = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  overflow-x: scroll;
  padding: 40px 0 50px 0;
  margin-bottom: 40px;

  @media (min-width: 701px) and (max-width: 1120px) {
    padding: 30px 0 40px 0;
    margin-bottom: 30px;
    overflow-x: scroll;
  }

  @media (max-width: 700px) {
    padding: 20px 0 30px 0;
    margin-bottom: 20px;
    overflow-x: scroll;
  }

  .topic {
    position: relative;
    width: 260px;
    min-width: 171px;
    height: 248px;
    border-radius: 4px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.8) 94.23%),
      url('https://www.w3schools.com/tags/img_girl.jpg'), lightgray 50% / cover no-repeat;

    img {
      position: absolute;
      width: 72px;
      height: 72px;
      flex-shrink: 0;
      top: 28px;
      left: 28px;
      border-radius: 64px;
      background: lightgray 50% / cover no-repeat;
      border: 2px solid #ffe455;
    }

    span {
      position: absolute;
      color: #fff;
      font-family: Roboto Condensed, sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
      bottom: 16px;
      left: 24px;
      line-clamp: 2;
      overflow: hidden;
    }
  }

  @media (min-width: 701px) and (max-width: 1120px) {
    .topic {
      width: 200px;
      min-width: 200px;
      height: 290px;

      img {
        width: 56px;
        height: 56px;
        top: 22px;
        left: 22px;
      }

      span {
        font-size: 20px;
        line-height: 28px;
        bottom: 12px;
        left: 20px;
      }
    }
  }

  @media (max-width: 700px) {
    .topic {
      width: 160px;
      min-width: 160px;
      height: 232px;

      img {
        width: 48px;
        height: 48px;
        top: 18px;
        left: 18px;
      }

      span {
        font-size: 16px;
        line-height: 24px;
        bottom: 10px;
        left: 16px;
      }
    }
  }
`;

const QuickTopicContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px 40px 40px;

  @media (max-width: 768px) {
    padding: 0 20px 20px 20px;
  }
`;
