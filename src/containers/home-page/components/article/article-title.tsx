import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import {CSSProperties} from 'react';

export function ArticleTitle({title, style, classItem}: { title?: string; style?: CSSProperties; classItem?: string }) {
    return <a href="#"><Title className={classItem} style={style}>{title}</Title></a>;
}

const Title = styled.span<{ $size?: boolean }>`
    font-weight: bold;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    line-height: 150%;
    color: ${themeColor('black')};

    @media screen and (max-width: 821px) {
        font-size: 16px;
        
        &.bigTitle {
            font-size: 20px !important;
        }
    }
`;
