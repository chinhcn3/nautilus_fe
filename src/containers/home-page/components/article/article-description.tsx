import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import {CSSProperties} from 'react';

export function ArticleDescription({description, style, classItem}: { description?: string; style?: CSSProperties; classItem?: string}) {

    return <Description className={classItem} style={style}>{description}</Description>;
}

const Description = styled.span`
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    margin-bottom: 16px;

    @media screen and (max-width: 821px) {
        font-size: 16px;
        
        &.d-none {
            display: none;
        }
    }
`;
