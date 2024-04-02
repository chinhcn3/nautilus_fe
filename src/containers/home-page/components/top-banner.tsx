import Banner from '@/containers/home-page/assets/banner-icon.svg';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import {SectionContainer} from '@/containers/home-page/components/section-container';
import {Container} from "@mui/material";

export function TopBanner() {
    return (
        <Container maxWidth="xl" sx={{px: {xs: 1, md: 2}}}>
            <Grid item xs={12} >
                <BannerWrapper href="#">
                    <Banner/>
                </BannerWrapper>
            </Grid>
        </Container>
    );
}

const BannerWrapper = styled.a`
    display: block;
    width: 100%;

    svg {
        width: 100%;
    }
`;
