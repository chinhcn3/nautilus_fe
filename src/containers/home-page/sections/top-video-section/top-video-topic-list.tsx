import type {contentdto_TopicResp} from '@/common/openapi';
import {DEFAULT_IMAGE} from '@/containers/home-page/constant';
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";

export function TopVideoTopicList({topics}: { topics: Array<contentdto_TopicResp> }) {
    return (
        <Grid item xl={4} xs={12}>
            <HomeVideosRight className="home-videos-right">
                {topics?.slice(1, 5).map((topic) => {
                    return (
                        <div key={topic.id} className="lucky-item">
                            <HomeVideoListIem className="d-flex flex-wrap">
                                <a href="#" className="d-block img-thumb">
                                    <img
                                        src={topic?.thumbnail || DEFAULT_IMAGE}
                                        alt="lucky img"
                                        className="img-fluid"
                                    />
                                </a>
                                <a href="#" className="d-block text">
                                    {topic.title}
                                </a>
                            </HomeVideoListIem>
                        </div>
                    );
                })}
            </HomeVideosRight>
        </Grid>
    );
}
const HomeVideosRight = styled.div`
    width: 100%;
    background-color: rgba(75, 64, 212, 0.3);
    overflow-y: auto;
    height: 100%;
    
    .lucky-item {
        transition: all 0.2s ease;
        border-right: 4px solid transparent;
        margin-top: 0;
        padding: 16px;
        
        &:first-child {
            margin-top: 0;
        }

        .img-thumb {
            overflow: hidden;
            flex: 1 0 177px;
            
            img {
                width: 100%;
                height: 100px;
                object-fit: cover;
                border-radius: 4px;
            }
        }

        .text {
            font-family: 'Roboto', sans-serif;
            font-size: 18px;
            font-weight: 600;
            line-height: 150%;
            margin-left: 16px;
        }
        
    }
    
    @media screen and (max-width: 576px) {
        margin-left: 0;
        overflow: hidden;
        max-height: initial;
        
    }
`;

const HomeVideoListIem = styled.a`
    display: flex;
`