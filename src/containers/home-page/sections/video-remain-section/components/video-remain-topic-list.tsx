import {useHomePageContext} from '@/containers/home-page/home-provider';
import Grid from "@mui/material/Grid";
import {Stack} from "@mui/material";
import {CommonImage} from "@/containers/home-page/components/common-image";
import {TopicCategory} from "@/containers/home-page/components/topic/topic-category";
import {TopicTitle} from "@/containers/home-page/components/topic/topic-title";
import {TopicDescription} from "@/containers/home-page/components/topic/topic-description";
import {TopicAuthor} from "@/containers/home-page/components/topic/topic-author";
import styled from "@emotion/styled";

export function VideoRemainTopicList() {
    const {home} = useHomePageContext();
    const topVideos = home.main_topics || [];
    return (
        <Grid item xs={9} className="review-outstanding-left">
            <div className="review-outstanding-content">
                <Stack spacing={4}>
                    {topVideos?.slice(6, 11)?.map((topic) => {
                        return (
                            <Stack key={topic.id} direction='row' spacing={2}>
                                <CommonImage classItem="list-img-xl" src="https://photo2.tinhte.vn/data/attachment-files/2023/11/8174383_cover-intel-itanium-ia-64-linux-kernel-tinhte.jpg" alt="list image"/>
                                <Stack spacing={{xs: 1, md:'auto'}}>
                                    <Stack spacing={1}>
                                        <TopicCategory topic={topic}/>
                                        <TopicTitle title={topic.title}/>
                                        <TopicDescription classItem="d-none" style={{'color': 'black'}} description={topic.long_title} />
                                    </Stack>
                                    <TopicAuthor topic={topic} isDarkMode={false}/>
                                </Stack>
                            </Stack>
                        );
                    })}
                </Stack>
            </div>
            <ViewMore className="viewmore">
                <button>Xem thêm</button>
            </ViewMore>
        </Grid>
    );
}

const ViewMore = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    
    button {
        width: 180px;
        height: 56px;
        background-color: #4b40d4;
        color: #fff;
        border-radius: 4px;
        border: none;
    }
`