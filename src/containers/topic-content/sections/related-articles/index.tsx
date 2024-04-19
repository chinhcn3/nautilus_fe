import Stack from '@mui/system/Stack';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import Link from "next/link";


export function RelatedArticles() {
    return (
        <SectionDetail className="doted">
            <h3>Bài viết liên quan</h3>
            <Stack spacing={{xs: 2, lg:3}}>
                <Link className="title" href=''>Thị trường card đồ họa PC tăng 32%, AMD tăng 17%, Nvidia tăng
                    4.7%</Link>
                <Link className="title" href=''>Troll Facebook sập: Elon Musk đăng status, FreePik tặng mã
                    Premium tạo ảnh bằng AI,...</Link>
                <Link className="title" href=''>Không có quạt tản nhiệt, điểm benchmark GPU MacBook Air M3 không
                    khác gì MacBook Pro 14 inch</Link>
                <Link className="title" href=''>Vì sao Apple bị liên minh châu Âu phạt tới 2 tỷ USD, rồi phải
                    đổi cả quy định của App Store?</Link>
                <Link className="title" href=''>Trải nghiệm xem Immersive video và phim 3D trên Vision Pro: đây
                    là cái đáng giá nhất</Link>
            </Stack>
        </SectionDetail>
    );
}

const SectionDetail = styled.div`
    margin-bottom: 40px;
    font-family: 'Inter', sans-serif;
    padding-bottom: 40px;
    position: relative;
    
    @media screen and (max-width: 600px) {
        margin-bottom: 32px;
        padding-bottom: 32px;
    }

    h3 {
        font-weight: 600;
        font-size: 20px;
        line-height: 150%;
        margin-bottom: 24px;
        
        @media screen and (max-width: 600px) {
            font-size: 18px;
            margin-bottom: 16px;
        }
    }

    a.title {
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
        color: ${themeColor('primary')};
        
        @media screen and (max-width: 600px) {
            font-size: 16px;
        }
    }

    &.doted {
        border-bottom: 2px dotted rgba(17, 17, 17, 0.6);

        &:before {
            content: '';
            border-bottom: 2px dotted rgba(17, 17, 17, 0.6);
            height: 0;
            width: 100%;
            position: absolute;
            left: 0;
            bottom: -6px;
        }

        &:after {
            content: '';
            border-bottom: 2px dotted rgba(17, 17, 17, 0.6);
            height: 0;
            width: 100%;
            position: absolute;
            left: 0;
            bottom: -10px;
        }
    }
`;
