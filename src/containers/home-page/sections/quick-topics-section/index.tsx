import {SectionHeading} from '@/containers/home-page/components/section-heading';
import AddIcon from './../../assets/ic-add.svg';
import {contentdto_TopicResp} from '@/common/openapi';
import {Container} from '@mui/material';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import {Swiper, SwiperSlide} from 'swiper/react';
import Grid from '@mui/material/Grid';
import {useHomePageContext} from '@/containers/home-page/home-provider';
import {TopicWrapper} from '@/containers/home-page/components/topic/topic-wrapper';

export function QuickTopicsSection() {
  const {home} = useHomePageContext();
  const quickTopics = home.quick_topics || [];
  return (
    <Funs className="funs">
      <Container maxWidth="xl" sx={{px: {xs: 1, md: 2}}}>
        <SectionHeading classItem="grey" title="Chia sẻ nhanh" />
        <Grid container spacing={{md: 3, xs: 1}}>
          <Grid item md={1.5} xs={3.62}>
            <a href="#" className="carousel-item first">
              <div className="add-icon">
                <div>
                  <AddIcon style={{margin: '0 auto', display: 'block'}} />
                  <span>Tạo chủ đề của bạn</span>
                </div>
              </div>
            </a>
          </Grid>
          <Grid item md={10.5} xs={8.38}>
            <Swiper
              style={{height: '100%'}}
              spaceBetween={24}
              slidesPerView={7}
              breakpoints={{
                0: {
                  slidesPerView: 2.3,
                  spaceBetween: 8
                },
                831: {
                  slidesPerView: 7,
                  spaceBetween: 24
                }
              }}>
              {quickTopics?.map((topic: contentdto_TopicResp) => {
                return (
                  <TopicWrapper key={topic.id} topic={topic}>
                    <SwiperSlide>
                      <a className="carousel-item">
                        <img
                          src={
                            'https://photo2.tinhte.vn/data/attachment-files/2023/11/8175013_yamaha-mt-09-sp-2024-29-cover.jpg'
                          }
                          alt="fun image"
                          className="img-thumb"
                        />
                        <img
                          src="https://photo2.tinhte.vn/data/avatars/m/2931/2931239.jpg?1659283042"
                          alt="avatar"
                          className="img-circle avatar"
                        />
                        <h5>{topic.title}</h5>
                      </a>
                    </SwiperSlide>
                  </TopicWrapper>
                );
              })}
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </Funs>
  );
}

const Funs = styled.div`
  padding: 40px 0 0;
  background-color: ${themeColor('white2')};
  margin-top: 0;

  @media screen and (max-width: 821px) {
    padding: 16px 0;
  }

  .funs-content {
    position: relative;

    .carousel-container {
      flex: 0 0 180px;
      display: flex;
      overflow-x: scroll;
      overflow-y: hidden;
    }

    &.carousel-wrap {
      .btn-next,
      .btn-prev {
        position: absolute;
        right: -20px;
        z-index: 10;
        top: 50%;
        transform: translateY(-50%);
        background-color: #fff;
        border-radius: 100%;
        border: 0;
        cursor: pointer;
        transition: all 0.2s ease;
        width: 48px;
        height: 48px;
      }
    }

    button:hover {
      opacity: 0.85;
    }
  }

  .carousel-item {
    position: relative;
    width: 100%;
    padding-top: 178%;
    border-radius: 4px;
    overflow: hidden;
    display: block;
    height: 100%;

    h5 {
      font-size: 14px;
      font-weight: 500;
      color: ${themeColor('white')};
      position: absolute;
      bottom: 16px;
      left: 16px;
    }

    img {
      object-fit: cover;

      &.img-thumb {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
      }

      &.avatar {
        width: 48px;
        height: 48px;
        object-fit: cover;
        border-radius: 50%;
        position: absolute;
        left: 16px;
        top: 16px;
      }
    }

    &.first {
      border: 2px dashed #4b40d4;
      border-radius: 4px;
      display: block;

      .add-icon {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 100%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;

        span {
          display: block;
          color: #4b40d4;
          margin-top: 8px;
          text-align: center;
          width: 100%;
          padding: 0 8px;
        }
      }
    }
  }
`;
