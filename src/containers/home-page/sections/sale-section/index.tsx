import {useHomePageContext} from '@/containers/home-page/home-provider';
import {SectionHeading} from '@/containers/home-page/components/section-heading';
import SaleIcon from './../../assets/ic-sale.svg';
import {Container, Stack} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {CommonImage} from "@/containers/home-page/components/common-image";
import styled from "@emotion/styled";
import {themeColor} from "@/common/configs/theme";
import Link from "next/link";
export function SaleSection() {
    const {home} = useHomePageContext();
    const dealTopics = home.deal_topics || [];

    return (
        <Sales>
            <Container maxWidth="xl" sx={{px: {xs: 1, md: 2}}}>
                <SectionHeading classItem="grey" title="Giá tốt mỗi ngày"/>
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
                    {dealTopics?.map((topic) => {
                        return (
                            <SwiperSlide key={topic.id}>
                                <Stack direction="column" spacing={2}>
                                    <CommonImage src={topic?.thumbnail} alt="list image" />
                                    <Stack spacing={{xs: 1, md: 4}}>
                                        <Stack alignItems="center" direction="row" spacing={1}>
                                            <SaleIcon className="icon-sale"/>
                                            <SaleTitle href="">Tổng hợp khuyến mãi 13/03/2024</SaleTitle>
                                        </Stack>
                                    </Stack>
                                </Stack>
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
`;

const SaleTitle = styled(Link)`
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    color: ${themeColor('black')};
    font-weight: bold;
    line-height: 150%;
`;
