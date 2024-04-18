import Banner from '@/containers/home-page/assets/banner-icon.svg';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import {SectionContainer} from '@/containers/home-page/components/section-container';
import {Container} from "@mui/material";

export function TopBanner() {
    return (
        <Container maxWidth="xl" sx={{px: {xs: 1, md: 2}}}>
            <BannerWrapper href="#">
                <Banner/>
            </BannerWrapper>
        </Container>
    );
}

const BannerWrapper = styled.a`
    display: block;
    width: 100%;
    margin-top: 24px;
    
    svg {
        width: 100%;
    }
`;
