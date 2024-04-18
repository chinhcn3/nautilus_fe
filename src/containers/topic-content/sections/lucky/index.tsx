import Stack from '@mui/system/Stack';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';


export function Lucky() {
    return (
        <StackLucky spacing={2} alignItems="center">
            <Join href="">Tham gia trúng thưởng</Join>
            <LinkItem className="" href="">Thể lệ & Điều kiện</LinkItem>
            <div>Bạn và <LinkItem className="" href="">123 người khác</LinkItem> đã tham gia chương trình này.
            </div>
        </StackLucky>
    );
}

const StackLucky = styled(Stack)`
    border-radius: 8px;
    border: 2px dashed ${themeColor('primary')};
    padding: 32px;
    font-family: 'Inter', sans-serif;
    margin-bottom: 32px;

    & > div {
        font-size: 16px;
        font-weight: 500;
        color: ${themeColor('black')};
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
`;

const LinkItem = styled.a`
    color: ${themeColor('primary_blue')};
`;
