import {themeColor} from '@/common/configs/theme';
import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import LogoFooter from '@/components/assets/logo-footer.svg';
import Typography from '@mui/material/Typography';
import FaceFooter from '@/components/assets/ic-face-footer.svg';
import XFooter from '@/components/assets/ic-x-footer.svg';
import LinkedinFooter from '@/components/assets/ic-linkedin-footer.svg';
import InstagramFooter from '@/components/assets/ic-instagram-footer.svg';
import {Container} from "@mui/material";

export function PageFooter() {
  return (
    <Footer>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} sm={5}>
            <FooterLeft>
              <a href="#">
                <LogoFooter alt="logo footer" className="img-fluid" />
                <Typography style={{marginTop: '16px'}}>
                  Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </Typography>
                <SocialContainer>
                  <FaceFooter />
                  <SocialIcon>
                    <XFooter />
                  </SocialIcon>
                  <SocialIcon>
                    <LinkedinFooter />
                  </SocialIcon>
                  <SocialIcon>
                    <InstagramFooter />
                  </SocialIcon>
                </SocialContainer>
              </a>
            </FooterLeft>
          </Grid>
          <Grid item xs={12} sm={7}>
            <FooterRight>
              <div className="footer-column">
                <h3>Topics</h3>
                <a href="#">Gaming</a>
                <a href="#">Gear</a>
                <a href="#">Entertainment</a>
                <a href="#">Tomorrow</a>
                <a href="#">Deals</a>
                <a href="#">News</a>
                <a href="#">Video</a>
                <a href="#">Postcasts</a>
              </div>

              <div className="footer-column">
                <h3>About us</h3>
                <a href="#">Về chúng tôi</a>
                <a href="#">Liên hệ</a>
                <a href="#">Quảng cáo</a>
                <a href="#">Điều khoản sử dụng</a>
                <a href="#">Cookies</a>
              </div>

              <div className="footer-column">
                <h3>&nbsp;</h3>
                <a href="#">RSS</a>
                <a href="#">Chính sách bảo mật</a>
                <a href="#">F&amp;A</a>
                <a href="#">Trợ giúp</a>
                <a href="#">Góp ý</a>
              </div>
            </FooterRight>
          </Grid>
        </Grid>
      </Container>
    </Footer>
  );
}

const Footer = styled.footer`
  background-color: ${themeColor('primary')};
  color: ${themeColor('white')};
  padding: 40px 0;
  margin-top: 60px;

  .container {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
  }
`;

const FooterLeft = styled.div`
  .img-fluid {
    max-width: 100%;
    display: block;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  margin-top: 40px;
`;
const SocialIcon = styled.a`
  display: block;
  position: relative;
  margin-left: 32px;

  :before {
    position: absolute;
    display: block;
    content: '';
    width: 2px;
    height: 18px;
    background-color: rgb(255, 255, 255);
    top: 12px;
    left: -15px;
  }
`;

const FooterRight = styled.div`
  display: flex;
  padding-left: 12px;
  padding-right: 12px;

  .footer-column {
    min-width: 250px;
    margin-right: 24px;
    display: flex;
    flex-direction: column;
  }
  h3 {
    color: rgb(255, 255, 255);
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  a {
    color: rgb(255, 255, 255);
    margin-bottom: 16px;
    display: inline-block;
    text-decoration: none;
  }
`;
