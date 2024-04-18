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

export function LastReviewTopicsSection() {
  const {home} = useHomePageContext();
  const lastReviewTopics = home.last_review_topics || [];
  return (
    <ReviewLatest className="review-latest">
      <Container maxWidth="xl" sx={{pl: {xs: 1, md: 2}, pr: {xs: 0, md: 2}}}>
        <SectionHeading classItem="grey" title="Review mới nhất" />
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
              <SwiperSlide key={topic.id}>
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
            );
          })}
        </Swiper>
      </Container>
    </ReviewLatest>
  );
}

const ReviewLatest = styled.div`
  padding: 40px 0 0;
  background: ${themeColor('white2')};
  margin-top: 0;
`;
