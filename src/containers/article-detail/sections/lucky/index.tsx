import Stack from '@mui/system/Stack';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';


export function Lucky() {
    return (
        <StackLucky spacing={2} alignItems="center">
            <Join href="">Tham gia trúng thưởng</Join>
            <LinkItem className="" href="">Thể lệ & Điều kiện</LinkItem>
            <div>Bạn và <LinkItem className="" href="">123 người khác</LinkItem> đã tham gia chương trình này.</div>
        </StackLucky>
    );
}

const StackLucky = styled(Stack)`
    border-radius: 8px;
    border: 2px dashed ${themeColor('primary')};
    padding: 32px;
    font-family: 'Inter', sans-serif;
    margin-bottom: 32px;
    
    @media screen and (max-width: 600px) {
        padding: 24px;
    }
    
    & > div {
        font-size: 16px;
        font-weight: 500;
        color: ${themeColor('black')};
        text-align: center;
        
        @media screen and (max-width: 600px) {
            max-width: 277px;
        }
    }
`;

const Join = styled.a`
    width: 100%;
    max-width: 409px;
    height: 64px;
    line-height: 64px;
    display: block;
    border-radius: 8px;
    background-color: ${themeColor('primary')};
    text-align: center;
    font-weight: 600;
    color: ${themeColor('white')};
    text-transform: uppercase;
    font-size: 24px;
    
    @media screen and (max-width: 600px) {
        height: 56px;
        line-height: 56px;
        font-size: 18px;
       max-width: 100%;
    }
`;

const LinkItem = styled.a`
    color: ${themeColor('primary_blue')};
    font-weight: 500;
    font-size: 16px;
`;
