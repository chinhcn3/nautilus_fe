'use client';

import styled from '@emotion/styled';
import {PageContent} from '@/containers/page-container';
import type {topicdto_GetTopicDataResp} from '@/common/openapi';
import {TopicTitle} from '@/components/topic-title';
import {Container, Divider, Stack} from "@mui/material";
import {TopicLeftDetail} from 'src/containers/topic-content/sections/topic-left-detail';
import Grid from "@mui/material/Grid";
import AdsBanner from './../home-page/assets/banner-ads-vertical.svg';
import {themeColor} from "@/common/configs/theme";
import {BookarkIcon, FacebookIcon, TwitterIcon} from '@/containers/page-container/page-header/icons';
import {TopicCategory} from '@/containers/topic-content/components/article/topic-category';
import {TopicAuthContent} from '@/containers/topic-content/components/article/topic-auth';
import {OutStanding} from '@/containers/topic-content/sections/outstanding';

export async function TopicContent({topicData}: { topicData?: topicdto_GetTopicDataResp }) {
  return (
    <PageContent>
      <Container sx={{py: 5}} maxWidth="xl">
        <BannerTop></BannerTop>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={9}>
            <TitleBox spacing={3}>
              <Stack spacing={1}>
                <TopicCategory topicData={topicData}/>
                <TopicTitle topic={topicData?.topic} fontSize={32} lineHeight={48} isDark={true}/>
              </Stack>
              <Stack justifyContent="space-between" alignItems="center" direction="row">
                <TopicAuthContent topicData={topicData}/>
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
          <Grid item xs={12} sm={9}>
            <TopicLeftDetail topicData={topicData || {}}/>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Banner>
              <AdsBanner/>
            </Banner>
            <OutStanding/>
          </Grid>
        </Grid>
      </Container>
    </PageContent>
  );
}

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
    padding: 32px;
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