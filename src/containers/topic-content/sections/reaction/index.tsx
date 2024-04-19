import Stack from '@mui/system/Stack';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import {CommentDetailIcon, LikeDetailIcon, WarningIcon} from '@/containers/page-container/page-header/icons';


export function Reaction() {
    return (
        <Stack sx={{mb: 3}} direction={{md:'row'}} justifyContent="space-between">
            <Stack sx={{width: {xs: '100%', lg:'fit-content'}}} direction='row' spacing={1}>
                <Btn>
                    <span><LikeDetailIcon/>Thích</span>
                </Btn>
                <Btn>
                    <span><CommentDetailIcon/>Bình luận</span>
                </Btn>
                <Btn>
                    <span><WarningIcon/><span className="text">Báo xấu</span></span>
                </Btn>
            </Stack>
            <Stack></Stack>
        </Stack>
    );
}

const Btn = styled.div`
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 16px;
    height: 48px;
    line-height: 48px;
    width: 160px;
    display: flex;
    align-items: center;
    background-color: ${themeColor('lightBackground')};
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    
    @media screen and (max-width: 600px) {
        flex: 1 0 calc((100% - 72px)/2);
        &:last-child {
            flex: 1 0 48px;
        }
    }
    
    span {
        display: flex;
        align-items: center;
        gap: 8px;
        
        &.text {
            @media screen and (max-width: 600px) {
               display: none;
            }
        }
    }
`;
