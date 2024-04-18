import PlayIcon from '@/containers/home-page/assets/ic-player.svg';
import {contentdto_TopicResp} from '@/common/openapi/models/contentdto_TopicResp';
import {DEFAULT_IMAGE} from '@/containers/home-page/constant';
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";

export function BigVideoTopic({topic}: { topic?: contentdto_TopicResp }) {
    return (
        <Grid item xl={8}>
            <VideoLeft className="video-left">
                <div className="video-img">
                    <img src={topic?.thumbnail || DEFAULT_IMAGE} className="img-fluid" alt={'video image'}/>
                    <div className="video-left-title">
                        <span><PlayIcon/></span>
                        <h3><a href="#">{topic?.title}</a></h3>
                    </div>
                </div>
            </VideoLeft>
        </Grid>
    );
}

const VideoLeft = styled.div`
    .video-img {
        position: relative;
        border-radius: 8px 0 0 8px;
        overflow: hidden;
        
        img {
            max-width: 100%;
            display: block;
        }
    }
    
    .video-left-title {
        position: absolute;
        bottom: 0;
        padding: 24px;
        display: flex;
        gap: 24px;
        align-items: center;
    }
    
    .video-img h3>a {
        font-size: 32px;
        color: #fff;
        font-family: 'Roboto', sans-serif;
    }

    @media screen and (max-width: 821px) {
        .video-left-title {
            display: none;
        }

        .video-img {
            border-radius: 6px 6px 0 0;
            
            img {
                max-width: 100%;
                display: block;
            }
            
        }
    }
`;
