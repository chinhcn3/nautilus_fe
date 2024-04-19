import {useHomePageContext} from '@/containers/home-page/home-provider';
import {SectionHeading} from '@/containers/home-page/components/section-heading';
import SaleIcon from './../../assets/ic-sale.svg';
import {Container, Stack} from '@mui/material';
import {Swiper, SwiperSlide} from 'swiper/react';
import {CommonImage} from '@/containers/home-page/components/common-image';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import Typography from '@mui/material/Typography';
import {TopicWrapper} from '@/containers/home-page/components/topic/topic-wrapper';

export function DealTopicsSection() {
  const {home} = useHomePageContext();
  const dealTopics = home.deal_topics || [];

  return (
    <Sales>
      <Container maxWidth="xl" sx={{px: {xs: 1, md: 2}}}>
        <SectionHeading classItem="grey" title="Giá tốt mỗi ngày" />
        <Swiper
          spaceBetween={60}
          slidesPerView={4}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 16
            },
            831: {
              slidesPerView: 4,
              spaceBetween: 60
            }
          }}>
          {dealTopics?.map((topic) => {
            return (
              <SwiperSlide key={topic.id}>
                <TopicWrapper topic={topic}>
                  <Stack direction="column" spacing={2}>
                    <CommonImage src={topic.thumbnail} alt="list image" />
                    <Stack spacing={{xs: 1, md: 4}}>
                      <Stack alignItems="center" direction="row" spacing={1}>
                        <SaleIconWrapper>
                          <SaleIcon />
                        </SaleIconWrapper>
                        <SaleTitle>{topic.title}</SaleTitle>
                      </Stack>
                    </Stack>
                  </Stack>
                </TopicWrapper>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Sales>
  );
}

const Sales = styled.div`
  padding: 40px 0 0;
  background: ${themeColor('white2')};
  margin-top: 0;
  min-width: 45px;
`;

const SaleIconWrapper = styled.div`
  padding-right: 8px;
`;

const SaleTitle = styled(Typography)`
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  color: ${themeColor('black')};
  font-weight: bold;
  line-height: 150%;
  padding-bottom: 8px;
`;
