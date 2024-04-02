import ViewMoreIcon from './../assets/ic-viewmore.svg';
import styled from "@emotion/styled";
import {themeColor} from "@/common/configs/theme";

export function SectionHeading({title, classItem}: {title?: string; classItem?: string}) {
  return (
    <Heading className={"heading " + classItem}>
      <h2>{title}</h2>
      <hr />
      <a href="#" className="view-more d-flex align-items-center">
        <span>Xem thêm</span>
        <ViewMoreIcon />
      </a>
    </Heading>
  );
}

const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    margin-bottom: 24px;
    
    hr {
        width: 100%;
        height: 4px;
        background-color: ${themeColor('primary')};
        border: 0;
    }
    
    h2 {
        font-family: "Anton", sans-serif;
        text-transform: uppercase;
        font-size: 40px;
        position: relative;
        z-index: 2;
        background-color: white;
        padding-right: 24px;
        flex-shrink: 0;
    }

    .view-more {
        display: flex;
        align-items: center;
        color: ${themeColor('primary')};
        background-color: white;
        position: relative;
        z-index: 2;
        padding-left: 24px;
        flex-shrink: 0;
        
         span {
             color: ${themeColor('primary')};
             margin-right: 8px;
             font-weight: 500;
         }
    }
    
    &.grey {
        h2, .view-more {
            background-color: ${themeColor('white')}
        }
    }
    
    &.primary_500 {
        h2, .view-more {
            background-color: ${themeColor('primary_500')};
        }
    }
    
    @media screen and (max-width: 821px) {
        h2 {
            font-size: 24px;
        }
        
        .view-more {
            color: #4b40d4;
            background-color: white;
            position: relative;
            z-index: 2;
            padding-left: 24px;
            flex-shrink: 0;

            span {
                font-size: 14px;
            }

            svg {
                transform: scale(0.75);
            }
        }
       
    }
`

