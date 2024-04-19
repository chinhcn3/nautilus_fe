import {useHomePageContext} from '@/containers/home-page/home-provider';
import {SectionHeading} from '@/containers/home-page/components/section-heading';
import {Container, Stack} from '@mui/material';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import {CommonImage} from '@/containers/home-page/components/common-image';
import {TopicCategory} from '@/containers/home-page/components/topic/topic-category';
import {TopicTitle} from '@/containers/home-page/components/topic/topic-title';
import {TopicAuthor} from '@/containers/home-page/components/topic/topic-author';
import styled from '@emotion/styled';
import {themeColor} from "@/common/configs/theme";
import {TopicWrapper} from '@/containers/home-page/components/topic/topic-wrapper';

export function LastReviewTopicsSection() {
  const {home} = useHomePageContext();
  const lastReviewTopics = home.last_review_topics || [];
  return (
    <ReviewLatest className="review-latest">
      <Container maxWidth="xl" sx={{pl: {xs: 1, md: 2}, pr: {xs: 0, md: 2}}}>
        <SectionHeading title="Review mới nhất" />
        <Swiper
          spaceBetween={24}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 16
            },
            831: {
              slidesPerView: 3
            }
          }}>
          {lastReviewTopics?.map((topic) => {
            return (
              <TopicWrapper topic={topic} key={topic.id}>
              <SwiperSlide>
                <Stack direction="column" spacing={2}>
                  <CommonImage src={topic?.thumbnail} alt="list image" />
                  <Stack spacing={{xs: 1, md: 4}}>
                    <Stack spacing={1}>
                      <TopicCategory topic={topic} />
                      <TopicTitle title={topic.title} />
                    </Stack>
                    <TopicAuthor topic={topic} isDarkMode={false} />
                  </Stack>
                </Stack>
              </SwiperSlide>
              </TopicWrapper>
            );
          })}
        </Swiper>
      </Container>
    </ReviewLatest>
  );
}

const ReviewLatest = styled.div`
  padding: 40px 0 50px;
  margin-top: 0;
`;
