import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import {CSSProperties} from 'react';

export function ArticleTitle({title, style, classItem, color}: { title?: string; style?: CSSProperties; classItem?: string; color?: string}) {
    const colorTitle:string = color || 'black';
    return <a href="#"><Title className={classItem} $color={themeColor(colorTitle)} style={style}>{title}</Title></a>;
}

const Title = styled.span<{ $color?: string }>`
    font-weight: bold;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    line-height: 150%;
    color: ${props =>props.$color};
    margin: 8px 0;
    display: block;
    
    @media screen and (max-width: 821px) {
        font-size: 16px;
        
        &.bigTitle {
            font-size: 20px !important;
        }
    }
`;
