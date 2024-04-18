'use client';

import styled from '@emotion/styled';
import {PageContent} from '@/containers/page-container';
import type {topicdto_GetTopicDataResp} from '@/common/openapi';
import {TopicTitle} from '@/components/topic-title';
import {Container, Divider, IconButton, Stack} from "@mui/material";
import {ArticleLeftDetail} from 'src/containers/article-detail/sections/article-left-detail';
import {Index as Outstanding} from '@/containers/article-detail/sections/outstanding';
import Grid from "@mui/material/Grid";
import AdsBanner from './../home-page/assets/banner-ads-vertical.svg';
import {ArticleCategory} from "@/containers/article-detail/components/article/article-category";
import {ArticleAuthDatail} from "@/containers/article-detail/components/article/article-auth";
import {BookarkIcon, FacebookIcon, ShareIcon, TwitterIcon} from "@/containers/dashboard/layout-container/sidebar/icons";
import {themeColor} from "@/common/configs/theme";
import Button from "@mui/material/Button";

export async function ArticleDetail({topicData}: { topicData?: topicdto_GetTopicDataResp }) {
    return (
        <PageContent>
            <Container maxWidth="xl" sx={{px: {xs: 0, lg: 2}}}>
                <BannerTop/>
            </Container>
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={9}>
                        <TitleBox spacing={{xs:2, md: 3}}>
                            <Stack spacing={1}>
                                <ArticleCategory topicData={topicData}/>
                                <TopicTitle topic={topicData?.topic} fontSize={32} lineHeight={48} isDark={true}/>
                            </Stack>
                            <Stack justifyContent="space-between" alignItems="center" direction="row">
                                <ArticleAuthDatail topicData={topicData} isDarkMode={false}/>
                                <Share alignItems="center" direction="row" spacing={{xs: 0, sm:2}}>
                                    <Button className="button-share">
                                        <span className="share-icon">
                                            <BookarkIcon/>
                                        </span>
                                        <span>Lưu bài viết</span>
                                    </Button>
                                    <Divider sx={{display: {xs: 'none', sm:'block'}}} orientation="vertical" variant="fullWidth" flexItem />
                                    <Social className="black" spacing={{xs: 0, sm:2}} direction="row" alignItems="center">
                                        <span>Chia sẻ</span>
                                        <IconButton sx={{display: {xs: 'none', sm:'inline-flex'}}}><FacebookIcon/></IconButton>
                                        <IconButton sx={{display: {xs: 'none', sm:'inline-flex'}}}><TwitterIcon/></IconButton>
                                        <IconButton sx={{display: {xs: 'inline-flex', sm:'none'}}}><ShareIcon/></IconButton>
                                    </Social>
                                </Share>
                            </Stack>
                        </TitleBox>
                    </Grid>
                    <Grid item xs={12} md={8} lg={9}>
                        <ArticleLeftDetail topicData={topicData || {}}/>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3} sx={{display:{xs: 'none', md: 'block'}}}>
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
    padding: 16px 0 0;
    
    @media screen and (min-width: 900px) {
        padding: 32px 48px 0;
    }
`
const Social = styled(Stack)`
    font-size: 16px;
    font-weight: 500;
    color: ${themeColor('primary')};
    
    &.black {
        color: ${themeColor('black')} ;
    }
    
    button {
        padding: 0;
        
        @media screen and (max-width: 600px) {
            padding: 8px;
            border-radius: 50%;
            border: 1px solid ${themeColor('border')};
        }
    }
    
    &>span {
        @media screen and (max-width: 600px) {
            display: none;
        }
    }
`
const Share = styled(Stack)`
    .button-share {
        padding: 0;
        
        span {
            font-size: 16px;
            text-transform: initial;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            line-height: 1;
            
            @media screen and (max-width: 600px) {
                display: none;
            }
            
        }
        
        &:hover {
            background-color: transparent;
        }
        
        .share-icon {
            margin-right: 8px;
            line-height: 1;
            
            @media screen and (max-width: 600px) {
                margin-right: 0;
                height: 40px;
                border: 1px solid #ddd;
                border-radius: 50%;
                width: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                
                &>svg {
                    path {
                        stroke: ${themeColor('black')};
                    }
                }
            }
            &:hover {
                background-color: transparent;
            }
        }
    }
`