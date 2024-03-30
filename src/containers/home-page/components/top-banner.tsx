import Banner from '@/containers/home-page/assets/banner-icon.svg';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import {SectionContainer} from '@/containers/home-page/components/section-container';

export function TopBanner() {
  return (
    <SectionContainer>
      <Grid item xs={24}>
        <BannerWrapper href="#">
          <Banner />
        </BannerWrapper>
      </Grid>
    </SectionContainer>
  );
}

const BannerWrapper = styled.a`
  display: block;
  width: 100%;
  img {
    width: 100%;
  }
`;
