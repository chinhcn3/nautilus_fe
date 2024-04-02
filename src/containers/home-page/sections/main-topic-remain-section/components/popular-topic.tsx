import AdsBanner from './../../../assets/banner-ads-vertical.svg';
import ViewMoreIcon from './../../../assets/ic-viewmore.svg';
import {type entity_HashTag} from '@/common/openapi';
import {useHomePageContext} from '@/containers/home-page/home-provider';
import styled from "@emotion/styled";

export function PopularTopic() {
    const {home} = useHomePageContext();
    const hashTags = home.top_hash_tags || [];

    return (
        <PopularRight>
            <div className="popular-topic">
                <h4>Chủ đề phổ biến</h4>
                <ul>
                    {hashTags?.map((hashTag: entity_HashTag) => {
                        return (
                            <li key={hashTag.key}>
                                <a href="#" className="d-block">
                                    <span style={{backgroundImage: "url(https://imgproxy4.tinhte.vn/PMij55sUHLdNSYmh1p_Vbb-BInXnMNIAUWuVEqU_7qo/h:232/plain/https://s3.cloud.cmctelecom.vn/tinhte2/2019/01/4544978_og.jpg)"}} className="hastag">
                                        <span>{hashTag.name}</span>
                                    </span>
                                    {/*<img src={hashTag.image} alt="topic img" className="img-fluid"/>*/}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <div className="viewmore-wrap">
                    <div className="viewmore">
                        <a href="#">
                            Xem thêm <ViewMoreIcon/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="popular-banner">
                <AdsBanner/>
            </div>
        </PopularRight>
    );
}

const PopularRight = styled.div`
    
    .popular-topic {
        border: 1px solid #dedede;
        padding: 24px;
        border-radius: 4px;
        
        ul {
            list-style: none;
            
            li {
                margin-bottom: 24px;
            }
        }
        
        h4 {
            font-size: 32px;
            font-family: "Anton", sans-serif;
            text-transform: uppercase;
            margin-bottom: 24px;

            @media screen and (max-width: 821px){
                font-size: 24px;
            }
        }

        .hastag {
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-repeat: no-repeat;
            width: 100%;
            text-align: center;
            border-radius: 4px;
            background-size: 100%;
            background-position: center;
            
            span {
                font-weight: 600;
                font-size: 20px;
                color: white;
            }
        }

        .viewmore{
            display: flex;
            justify-content: center;
            
            a {
                color: #4b40d4;
                font-weight: 500;
                display: flex;
                align-items: center;
            }
        } 

        @media screen and (max-width: 821px){
            padding: 16px;
            
            ul {
                display: flex;
                flex-wrap: wrap;
                margin: 0 -8px;
                
                li {
                    padding: 0 8px;
                    flex: 0 0 50%;
                    margin: 0 0 16px;
                }
            }

            .popular-banner {
                display: none;
            }

            .viewmore-wrap .viewmore {
                display: none;
            }
        }
    }

    .popular-banner * {
        margin-top: 40px;
        width: 100%;

        @media screen and (max-width: 821px) {
            display: none;
        }
    }
    
`