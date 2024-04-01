import {useHomePageContext} from '@/containers/home-page/home-provider';
import {SectionHeading} from '@/containers/home-page/components/section-heading';
import {useTopicData} from '@/containers/home-page/hooks/use-topic-data';
import {TopicAuthor} from '@/components/topic-author';
import PrevIcon from './../../assets/ic-pre-small.svg';
import NextIcon from './../../assets/ic-next-small.svg';
import {Container, Stack} from "@mui/material";
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import {CommonImage} from "@/containers/home-page/components/common-image";
import {ArticleCategory} from "@/containers/home-page/components/article/article-category";
import {ArticleTitle} from "@/containers/home-page/components/article/article-title";
import {ArticleAuth} from "@/containers/home-page/components/article/article-auth";
import styled from "@emotion/styled";

export function LastReviewSection() {
    const {home} = useHomePageContext();
    const {getTopicCate} = useTopicData();
    const lastReviewTopics = home.last_review_topics || [];
    return (
        <ReviewLatest className="review-latest">
            <Container maxWidth="xl">
                <SectionHeading classItem="grey" title="Review mới nhất"/>
                <Swiper
                    spaceBetween={24}
                    slidesPerView={3}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.5,
                        },
                        831: {
                            slidesPerView: 3
                        }
                    }}
                >
                    {lastReviewTopics?.map((topic) => {
                        return (
                            <SwiperSlide>
                                <Stack direction='column' spacing={2}>
                                    <CommonImage src={topic?.thumbnail} alt="list image"/>
                                    <Stack spacing={1}>
                                        <ArticleCategory topic={topic}/>
                                        <ArticleTitle title={topic.title}/>
                                        <ArticleAuth topic={topic} isDarkMode={false}/>
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
    background: #F5F5F5;
    margin-top: 0;
`