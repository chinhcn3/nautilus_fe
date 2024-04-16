'use client';

import styled from '@emotion/styled';
import {PageContent} from '@/containers/page-container';
import type {topicdto_GetTopicDataResp} from '@/common/openapi';
import {TopicTitle} from '@/components/topic-title';
import {Container, Divider, Stack} from "@mui/material";
import {ArticleLeftDetail} from 'src/containers/article-detail/sections/article-left-detail';
import {Index as Outstanding} from '@/containers/article-detail/sections/outstanding';
import Grid from "@mui/material/Grid";
import AdsBanner from './../home-page/assets/banner-ads-vertical.svg';
import {ArticleCategory} from "@/containers/article-detail/components/article/article-category";
import {ArticleAuthDatail} from "@/containers/article-detail/components/article/article-auth";
import {BookarkIcon, FacebookIcon, TwitterIcon} from "@/containers/dashboard/layout-container/sidebar/icons";
import {themeColor} from "@/common/configs/theme";

export async function ArticleDetail({topicData}: { topicData?: topicdto_GetTopicDataResp }) {
    return (
        <PageContent>
            <Container maxWidth="xl" sx={{px: {xs: 0, lg: 2}}}>
                <BannerTop/>
            </Container>
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={9}>
                        <TitleBox spacing={3}>
                            <Stack spacing={1}>
                                <ArticleCategory topicData={topicData}/>
                                <TopicTitle topic={topicData?.topic} fontSize={32} lineHeight={48} isDark={true}/>
                            </Stack>
                            <Stack justifyContent="space-between" alignItems="center" direction="row">
                                <ArticleAuthDatail topicData={topicData} isDarkMode={false}/>
                                <Stack alignItems="center" direction="row" spacing={2}>
                                    <Bookmask spacing={1} direction="row" alignItems="center">
                                        <BookarkIcon/>
                                        Lưu bài viết
                                    </Bookmask>
                                    <Divider orientation="vertical" variant="fullWidth" flexItem />
                                    <Bookmask className="black" spacing={1} direction="row" alignItems="center">Chia sẻ<FacebookIcon/><TwitterIcon/></Bookmask>
                                </Stack>
                            </Stack>
                        </TitleBox>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <ArticleLeftDetail topicData={topicData || {}}/>
                    </Grid>
                    <Grid item xs={12} md={3} sx={{display:{xs: 'none', md: 'block'}}}>
                        <Banner>
                            <AdsBanner/>
                        </Banner>
                        <Outstanding/>
                    </Grid>
                </Grid>
            </Container>
        </PageContent>
    );
}

const ContentWrapper = styled.div`
    padding: 40px 0;
`;

const Banner = styled.div`
    width: 100%;
    
    & * {
        width: 100%;
    }
    
    @media screen and (max-width: 821px) {
        display: none;
    }
`;

const BannerTop = styled.div`
    min-height: 286px;
    width: 100%;
    background-color: #0D1828;
`
const TitleBox = styled(Stack)`
    padding: 32px 48px 0;
    
    @media screen and (max-width: 600px) {
        padding: 16px 0 0;
    }
`
const Bookmask = styled(Stack)`
    gap: 8px;
    font-size: 16px;
    font-weight: 500;
    color: ${themeColor('primary')};
    
    &.black {
        color: ${themeColor('black')} ;
    }
`