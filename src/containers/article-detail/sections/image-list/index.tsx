import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {useMediaQuery} from "@mui/material";
import {createTheme} from "@mui/material/styles";


export function Images() {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        },
    })
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <ImagesSection className="images">
            <div>Ảnh trong bài</div>
            <ImageList cols={matchDownMd ? 3 : 5 } gap={16}>
                {Array(20).fill(1).map((el, i) =>
                    <ImageListItem key={el}>
                        <img
                            src="https://imgproxy7.tinhte.vn/F4Jjgba2dkL4FrLsPiHTutAMm5CqioGYWLm_KVWz48k/h:216/plain/https://photo2.tinhte.vn/data/attachment-files/2024/04/8300308_cover-windows-11-delaylockinterval-tinhte.jpg"
                            loading="lazy"
                        />
                    </ImageListItem>
                )}
            </ImageList>
        </ImagesSection>
    );
}

const ImagesSection = styled.div`
    margin-bottom: 32px;
    &>div {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 18px;
        color: ${themeColor('black')};
        margin-bottom: 16px;
    }
`;