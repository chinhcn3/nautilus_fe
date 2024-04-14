import Stack from '@mui/system/Stack';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {CommentDetailIcon, LikeDetailIcon, WarningIcon} from "@/containers/dashboard/layout-container/sidebar/icons";


export function Reaction() {
    return (
        <Stack sx={{mb: 3}} direction="row" justifyContent="space-between">
            <Stack direction="row" spacing={1}>
                <Btn>
                    <span><LikeDetailIcon/>Thích</span>
                </Btn>
                <Btn>
                    <span><CommentDetailIcon/>Bình luận</span>
                </Btn>
                <Btn>
                    <span><WarningIcon/>Báo xấu</span>
                </Btn>
            </Stack>
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
    
    span {
        display: flex;
        align-items: center;
        gap: 8px;
    }
`;
