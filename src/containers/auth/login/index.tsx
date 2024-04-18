'use client';

import styled from '@emotion/styled';
import {signIn} from 'next-auth/react';
import {themeColor} from '@/common/configs/theme';
import {darken} from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

export function LoginModal(props: {isOpen?: boolean; onClose?: () => any}) {
  const {isOpen = false} = props;

  return (
    <Modal open={isOpen} onClose={props.onClose} closeAfterTransition>
      <Fade in={isOpen}>
        <Wrapper>
          <InfoSide>
            <div className="main">
              <h3>Bằng việc đăng nhập, bạn đồng ý với</h3>
              <div className="policy">
                <a href="#">Điều khoản dịch vụ</a>
                <div className="line"></div>
                <a href="#">Chính sách Quyền riêng tư</a>
              </div>
              <div className="grid-body">
                <div
                  role="button"
                  className={'login-button google'}
                  onClick={() => signIn('google')}>
                  {GoogleIconElement}
                  <span>Đăng nhập bằng Google</span>
                </div>
                <div
                  role="button"
                  className={'login-button facebook'}
                  onClick={() => signIn('facebook')}>
                  {FacebookIconElement}
                  <span>Đăng nhập bằng Facebook</span>
                </div>
              </div>
            </div>
          </InfoSide>
          <LoginSide>
            <div className="">
              <div className="title">Sau khi đăng nhập bạn có thể</div>
              <div className="info">
                {CheckedIcon}
                <p>
                  <strong>Chia sẻ</strong> bài viết của chính bạn
                </p>
              </div>
              <div className="info">
                {CheckedIcon}
                <p>
                  <strong>Bình luận</strong> trong bài viết
                </p>
              </div>
              <div className="info">
                {CheckedIcon}
                <p>
                  <strong>Nhận thông báo</strong> mới từ tác giả và người bình luận mà bạn yêu thích
                </p>
              </div>
              <div className="info">
                {CheckedIcon}
                <p>
                  <strong>Lưu trữ</strong> những bài viết yêu thích
                </p>
              </div>
              <div className="info">
                {CheckedIcon}
                <p>
                  <strong>Tham gia</strong> các chương trình may mắn
                </p>
              </div>
            </div>
          </LoginSide>
        </Wrapper>
      </Fade>
    </Modal>
  );
}

const Wrapper = styled.div`
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(min-content, max-content);

  position: relative;
  top: 72px;
  right: 40px;
  width: 400px;
  max-width: 400px;
  position: absolute;
  background: white;
  border-radius: 6px;
  overflow: hidden;
  @media (max-width: 700px) {
    width: calc(100vw - 32px);
    top: 72px;
    right: 16px;
  }
`;

const InfoSide = styled.div`
  padding: 32px;

  h1 {
    font-weight: 700;
    line-height: 56px;
    font-size: 48px;
    margin-bottom: 24px;
  }
  h3 {
    font-size: 14px;
    color: #aeaeae;
    font-weight: 400;
  }

  .main {
    .policy {
      display: flex;
      margin-top: 8px;
      flex-wrap: wrap;
    }
    a {
      font-size: 14px;
      font-weight: 500;
      color: #4b40d4;
    }
    .line {
      border-left: 1px solid #dedede;
      margin: 0 10px;
      height: 16px;
    }
  }

  .login-button {
    margin-top: 24px;
    padding: 8px 24px;
    text-align: center;
    font-weight: 500;
    line-height: 32px;
    color: #000;
    font-size: 16px;
    border: 1px solid #dedede;
    background: white;

    display: flex;
    place-content: center center;
    align-items: center;
    gap: 8px;
    transition: 0.3s;

    svg {
      display: block;
    }

    &.facebook {
      margin-top: 8px;
      &:hover {
        background: ${darken('#ffffff', 0.05)};
      }
    }
    &.google {
      &:hover {
        background: ${darken('#ffffff', 0.05)};
      }
    }
  }

  > .footer {
    margin-top: 126px;
    color: #3c3c3c;
  }
`;

const LoginSide = styled.div`
  padding: 32px;
  background: ${themeColor('lightBackground')};
  .title {
    font-size: 16px;
    margin-bottom: 16px;
  }
  .info {
    margin-top: 8px;
    font-size: 16px;
    line-height: 24px;

    display: flex;
    gap: 8px;
    strong {
      color: #4b40d4;
      font-weight: 600;
    }
    > svg {
      flex-shrink: 0;
      margin-top: 2px;
    }
  }
`;

// const CloseButton = (props: SVGProps<any>) => (
//   <svg
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     {...props}>
//     <path
//       d="M6.39941 18.3074L5.69141 17.5994L11.2914 11.9994L5.69141 6.39941L6.39941 5.69141L11.9994 11.2914L17.5994 5.69141L18.3074 6.39941L12.7074 11.9994L18.3074 17.5994L17.5994 18.3074L11.9994 12.7074L6.39941 18.3074Z"
//       fill="#757575"
//       fillOpacity="0.5"
//     />
//   </svg>
// );

const FacebookIconElement = (
  <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.3346 9.99935C18.3346 5.39935 14.6013 1.66602 10.0013 1.66602C5.4013 1.66602 1.66797 5.39935 1.66797 9.99935C1.66797 14.0327 4.53464 17.391 8.33464 18.166V12.4993H6.66797V9.99935H8.33464V7.91602C8.33464 6.30768 9.64297 4.99935 11.2513 4.99935H13.3346V7.49935H11.668C11.2096 7.49935 10.8346 7.87435 10.8346 8.33268V9.99935H13.3346V12.4993H10.8346V18.291C15.043 17.8743 18.3346 14.3243 18.3346 9.99935Z"
      fill="#4267B2"
    />
  </svg>
);

const GoogleIconElement = (
  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.6726 8.36727H18.0013V8.33268H10.5013V11.666H15.2109C14.5238 13.6064 12.6776 14.9993 10.5013 14.9993C7.74005 14.9993 5.5013 12.7606 5.5013 9.99935C5.5013 7.2381 7.74005 4.99935 10.5013 4.99935C11.7759 4.99935 12.9355 5.48018 13.8184 6.2656L16.1755 3.90852C14.6871 2.52143 12.6963 1.66602 10.5013 1.66602C5.89922 1.66602 2.16797 5.39727 2.16797 9.99935C2.16797 14.6014 5.89922 18.3327 10.5013 18.3327C15.1034 18.3327 18.8346 14.6014 18.8346 9.99935C18.8346 9.4406 18.7771 8.89518 18.6726 8.36727Z"
      fill="#FFC107"
    />
    <path
      d="M3.12891 6.1206L5.86682 8.12852C6.60766 6.29435 8.40182 4.99935 10.5014 4.99935C11.776 4.99935 12.9356 5.48018 13.8185 6.2656L16.1756 3.90852C14.6872 2.52143 12.6964 1.66602 10.5014 1.66602C7.30057 1.66602 4.52474 3.4731 3.12891 6.1206Z"
      fill="#FF3D00"
    />
    <path
      d="M10.5008 18.3336C12.6533 18.3336 14.6091 17.5099 16.0879 16.1703L13.5087 13.9878C12.6439 14.6454 11.5872 15.0011 10.5008 15.0003C8.33328 15.0003 6.49286 13.6182 5.79953 11.6895L3.08203 13.7832C4.4612 16.482 7.26203 18.3336 10.5008 18.3336Z"
      fill="#4CAF50"
    />
    <path
      d="M18.6713 8.36857H18V8.33398H10.5V11.6673H15.2096C14.8809 12.5908 14.2889 13.3978 13.5067 13.9886L13.5079 13.9877L16.0871 16.1702C15.9046 16.3361 18.8333 14.1673 18.8333 10.0007C18.8333 9.4419 18.7758 8.89648 18.6713 8.36857Z"
      fill="#1976D2"
    />
  </svg>
);

// const CommentElement = (
//   <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path
//       d="M5.82952 14.9611C6.80519 15.4808 7.89401 15.7518 8.99945 15.7499C12.7274 15.7499 15.7494 12.7279 15.7494 8.99993C15.7494 5.272 12.7274 2.24993 8.99945 2.24993C5.27152 2.24993 2.24945 5.272 2.24945 8.99993C2.24945 10.1474 2.53552 11.2268 3.03952 12.1718C3.15711 12.3919 3.18476 12.6491 3.11666 12.8892L2.32338 15.6773L5.11209 14.8846C5.35213 14.8163 5.60929 14.8438 5.82952 14.9611ZM8.99945 16.7142C7.73567 16.716 6.49096 16.406 5.37566 15.8116L2.30924 16.684C2.17158 16.7231 2.02599 16.7247 1.88749 16.6887C1.749 16.6527 1.62263 16.5804 1.52144 16.4792C1.42026 16.378 1.34793 16.2517 1.31193 16.1132C1.27593 15.9747 1.27756 15.8291 1.31666 15.6914L2.18838 12.625C1.5936 11.5094 1.28335 10.2642 1.28516 8.99993C1.28516 4.73972 4.73924 1.28564 8.99945 1.28564C13.2597 1.28564 16.7137 4.73972 16.7137 8.99993C16.7137 13.2601 13.2597 16.7142 8.99945 16.7142ZM6.10659 7.5535C6.10659 7.42563 6.15739 7.30299 6.24781 7.21258C6.33823 7.12216 6.46086 7.07136 6.58874 7.07136H11.4102C11.538 7.07136 11.6607 7.12216 11.7511 7.21258C11.8415 7.30299 11.8923 7.42563 11.8923 7.5535C11.8923 7.68137 11.8415 7.80401 11.7511 7.89443C11.6607 7.98485 11.538 8.03564 11.4102 8.03564H6.58874C6.46086 8.03564 6.33823 7.98485 6.24781 7.89443C6.15739 7.80401 6.10659 7.68137 6.10659 7.5535ZM6.10659 10.4464C6.10659 10.3185 6.15739 10.1959 6.24781 10.1054C6.33823 10.015 6.46086 9.96422 6.58874 9.96422H9.48159C9.60946 9.96422 9.7321 10.015 9.82252 10.1054C9.91294 10.1959 9.96374 10.3185 9.96374 10.4464C9.96374 10.5742 9.91294 10.6969 9.82252 10.7873C9.7321 10.8777 9.60946 10.9285 9.48159 10.9285H6.58874C6.46086 10.9285 6.33823 10.8777 6.24781 10.7873C6.15739 10.6969 6.10659 10.5742 6.10659 10.4464Z"
//       fill="black"
//     />
//   </svg>
// );

// const NotiElement = (
//   <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path
//       d="M13.6005 8.25C14.0363 12.2812 15.75 13.5 15.75 13.5H2.25C2.25 13.5 4.5 11.9002 4.5 6.3C4.5 5.02725 4.974 3.80625 5.81775 2.90625C6.66225 2.00625 7.8075 1.5 9 1.5C9.25275 1.5 9.504 1.5225 9.75 1.5675M10.2975 15.75C10.1658 15.9775 9.97659 16.1664 9.74886 16.2977C9.52112 16.429 9.26287 16.4981 9 16.4981C8.73713 16.4981 8.47888 16.429 8.25114 16.2977C8.02341 16.1664 7.83421 15.9775 7.7025 15.75M14.25 6C14.8467 6 15.419 5.76295 15.841 5.34099C16.2629 4.91903 16.5 4.34674 16.5 3.75C16.5 3.15326 16.2629 2.58097 15.841 2.15901C15.419 1.73705 14.8467 1.5 14.25 1.5C13.6533 1.5 13.081 1.73705 12.659 2.15901C12.2371 2.58097 12 3.15326 12 3.75C12 4.34674 12.2371 4.91903 12.659 5.34099C13.081 5.76295 13.6533 6 14.25 6Z"
//       stroke="black"
//       strokeWidth="1.125"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const BookmarkElement = (
//   <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path
//       fillRule="evenodd"
//       clipRule="evenodd"
//       d="M4.99991 2.00024H12.9995C13.5299 2.00024 14.0386 2.21095 14.4137 2.586C14.7887 2.96106 14.9994 3.46974 14.9994 4.00015V13.9997C14.9994 14.5301 14.7887 15.0388 14.4137 15.4138C14.0386 15.7889 13.5299 15.9996 12.9995 15.9996H4.99991C4.4695 15.9996 3.96081 15.7889 3.58576 15.4138C3.2107 15.0388 3 14.5301 3 13.9997V4.00015C3 3.46974 3.2107 2.96106 3.58576 2.586C3.96081 2.21095 4.4695 2.00024 4.99991 2.00024Z"
//       stroke="black"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       fillRule="evenodd"
//       clipRule="evenodd"
//       d="M6 2.00024H9.99981V7.01201L7.99991 5.0001L6 7.01201V2.00024Z"
//       stroke="black"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const NewsElement = (
//   <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//     <path
//       d="M18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V6.25a2.25 2.25 0 0 1 2.096-2.245L4.25 4h12.5a2.25 2.25 0 0 1 2.245 2.096L19 6.25V7h.75a2.25 2.25 0 0 1 2.245 2.096L22 9.25v7.5a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25h13.5Zm-13.5-1.5h13.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143v-7.5a.75.75 0 0 0-.648-.743L19.75 8.5H19v7.75a.75.75 0 0 1-.648.743L18.25 17a.75.75 0 0 1-.743-.648l-.007-.102v-10a.75.75 0 0 0-.648-.743L16.75 5.5H4.25a.75.75 0 0 0-.743.648L3.5 6.25v10.5a1.75 1.75 0 0 0 1.606 1.744l.144.006h13.5-13.5Zm6.996-4h3.006a.75.75 0 0 1 .102 1.493l-.102.007h-3.006a.75.75 0 0 1-.102-1.493l.102-.007h3.006-3.006Zm-3.003-3.495a.75.75 0 0 1 .75.75v3.495a.75.75 0 0 1-.75.75H5.748a.75.75 0 0 1-.75-.75v-3.495a.75.75 0 0 1 .75-.75h3.495Zm-.75 1.5H6.498V14.5h1.995v-1.995Zm3.753-1.5h3.006a.75.75 0 0 1 .102 1.493l-.102.007h-3.006a.75.75 0 0 1-.102-1.494l.102-.006h3.006-3.006ZM5.748 7.502h9.504a.75.75 0 0 1 .102 1.494l-.102.006H5.748a.75.75 0 0 1-.102-1.493l.102-.007h9.504-9.504Z"
//       fill="black"
//     />
//   </svg>
// );

const CheckedIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.747 9.41506 20.7188 6.93684 18.891 5.10901C17.0632 3.28118 14.5849 2.25299 12 2.25ZM16.6436 10.2927L11.1431 15.5427C11.0032 15.6758 10.8176 15.75 10.6245 15.75C10.4315 15.75 10.2458 15.6758 10.106 15.5427L7.35645 12.9177C7.2128 12.7801 7.12965 12.5911 7.12524 12.3923C7.12084 12.1934 7.19555 12.0009 7.33297 11.8571C7.47038 11.7133 7.65927 11.6299 7.85813 11.6252C8.05699 11.6206 8.24956 11.695 8.39356 11.8323L10.6245 13.9629L15.6064 9.20728C15.7504 9.07004 15.943 8.99558 16.1419 9.00023C16.3407 9.00489 16.5296 9.08828 16.667 9.2321C16.8045 9.37592 16.8792 9.56841 16.8748 9.76727C16.8704 9.96614 16.7872 10.1551 16.6436 10.2927Z"
      fill="#4B40D4"
    />
  </svg>
);
