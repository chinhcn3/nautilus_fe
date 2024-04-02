import AdsBanner from './../../assets/banner-ads-horizontal.svg';
import {
    MainRemainTopicList
} from '@/containers/home-page/sections/main-topic-remain-section/components/main-remain-topic-list';
import {PopularTopic} from '@/containers/home-page/sections/main-topic-remain-section/components/popular-topic';
import {Container} from "@mui/material";
import Grid from '@mui/material/Grid';
import styled from "@emotion/styled";

export function MainTopicRemainSection() {
    return (
        <Popular className="popular">
            <Container maxWidth="xl" sx={{px: {xs: 1, md: 2}}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={9}>
                        <div className="popular-left">
                            <div className="ad-banner">
                                <AdsBanner/>
                            </div>
                            <MainRemainTopicList/>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <PopularTopic/>
                    </Grid>
                </Grid>
            </Container>
        </Popular>
    );
}
const Popular = styled.div`
    padding: 40px 0 0;
    background: #F5F5F5;
    margin-top: 0;
    
    .ad-banner * {
        width: 100%;
        
        @media screen and (max-width: 821px) {
            display: none;
        }
    }
`