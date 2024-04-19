import Stack from '@mui/system/Stack';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import Link from "next/link";


export function RelatedTopics() {
    return (
        <SectionDetail className="doted">
            <h3>Chủ đề liên quan</h3>
            <Stack flexWrap="wrap" useFlexGap direction="row" spacing={2}>
                <Hastag href=''>#phone</Hastag>
                <Hastag href=''>#IOS</Hastag>
                <Hastag href=''>#app</Hastag>
                <Hastag href=''>#phone</Hastag>
                <Hastag href=''>#IOS</Hastag>
                <Hastag href=''>#app</Hastag>
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
const Hastag = styled(Link)`
    padding: 8px 24px;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: ${themeColor('primary')};
    border: 1px solid ${themeColor('primary')};
    border-radius: 4px;
`;
