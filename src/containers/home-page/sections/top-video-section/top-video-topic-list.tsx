import type {contentdto_TopicResp} from '@/common/openapi';
import {DEFAULT_IMAGE} from '@/containers/home-page/constant';
import Grid from "@mui/material/Grid";

export function TopVideoTopicList({topics}: { topics: Array<contentdto_TopicResp> }) {
    return (
        <Grid item xl={4} xs={12}>
            <div className="home-videos-right">
                <div>
                    {topics?.slice(1, 10).map((topic) => {
                        return (
                            <div key={topic.id} className="lucky-item">
                                <div className="d-flex flex-wrap">
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
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Grid>
    );
}
