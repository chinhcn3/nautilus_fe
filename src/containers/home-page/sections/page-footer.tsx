import {themeColor} from '@/common/configs/theme';
import styled from '@emotion/styled';
import FacebookFooter from './../assets/facebook_footer.svg';
import YoutubeFooter from './../assets/youtube_footer.svg';
import SearchFooter from './../assets/search_footer.svg';

export function HomeFooter() {
  return (
    <HomeFooterContainer>
      <div className="about-us">
        <div className="logo">LOGO</div>
        <div className="introduce">
          Tại Brand, chúng tôi là nơi thể hiện tương lai được thực hiện. Đây là nguồn thông tin và ý
          tưởng thiết yếu giúp bạn hiểu được một thế giới đang chuyển đổi liên tục
        </div>
        <div className="social-icons">
          <FacebookFooter />
          <YoutubeFooter />
          <SearchFooter />
        </div>
      </div>
      <div className="short-link">
        <div className="link-column">
          <div className="title">Topics</div>
          <div className="item-list">
            <a>Gaming</a>
            <a>Gear</a>
            <a>Entertainment</a>
            <a>Tomorrow</a>
            <a>Deals</a>
            <a>News</a>
            <a>Video</a>
            <a>Postcasts</a>
          </div>
        </div>

        <div className="link-column">
          <div className="title">About us</div>
          <div className="item-list">
            <a>Về chúng tôi</a>
            <a>Liên hệ</a>
            <a>Quảng cáo</a>
            <a>Điều khoản sử dụng</a>
            <a>Cookies</a>
          </div>
        </div>

        <div className="link-column">
          <div className="item-list" style={{marginTop: '40px'}}>
            <a>RSS</a>
            <a>Chính sách bảo mật</a>
            <a>F&A</a>
            <a>Trợ giúp</a>
            <a>Góp ý</a>
          </div>
        </div>
      </div>
    </HomeFooterContainer>
  );
}

const HomeFooterContainer = styled.div`
  background: ${themeColor('darkBackground')};
  padding: 32px 0 0 0;
  display: flex;

  @media (min-width: 701px) and (max-width: 1120px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }

  .about-us {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 50%;
    padding: 0 96px 0 96px;

    .logo {
      color: #3378ff;
      font-family: Darker Grotesque, sans-serif;
      font-size: 34px;
      font-style: normal;
      font-weight: 900;
      line-height: 28px;
    }
    .introduce {
      color: #b4bccd;
      font-family: Plus Jakarta Sans, sans-serif;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px;
    }

    .social-icons {
      gap: 24px;
      display: flex;
    }
  }
  .short-link {
    width: 50%;
    display: flex;
    padding-bottom: 88px;
    .link-column {
      width: 33.33%;

      .title {
        color: #fff;
        font-family: Darker Grotesque, sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 1.6px;
        text-transform: uppercase;
        padding-bottom: 18px;
      }

      .item-list {
        gap: 4px;
        display: flex;
        flex-direction: column;
        a {
          color: #8b8c8f;
          font-family: Darker Grotesque, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: 24px;
        }
      }
    }
  }
`;
