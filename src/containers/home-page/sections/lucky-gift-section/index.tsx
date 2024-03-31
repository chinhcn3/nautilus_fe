import {SectionHeading} from '@/containers/home-page/components/section-heading';
import {BigLuckyGift} from '@/containers/home-page/sections/lucky-gift-section/components/big-lucky-gift';
import {useHomePageContext} from '@/containers/home-page/home-provider';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
import styled from "@emotion/styled";

export function LuckyGiftSection() {
    const {home} = useHomePageContext();
    const luckyGiftTopics = home.lucky_gift_topics || [];

    return (
        <Lucky className="lucky">
            <Container maxWidth="xl">
                <SectionHeading classItem="grey" title="Đi tìm may mắn"/>
                <Grid container spacing={3}>
                    <BigLuckyGift topic={luckyGiftTopics?.[0]}/>
                    <Grid item xs={12} md={4}>
                        <div className="lucky-right">
                            <h4 className="font-weight-bold">Sự kiện hàng ngày</h4>
                            {luckyGiftTopics?.slice(1, 6)?.map((topic) => {
                                return (
                                    <div key={topic.id} className="lucky-item">
                                        <div className="d-flex">
                                            <a href="#" className="d-block img-thumb">
                                                <img src={topic?.thumbnail} alt="lucky img" className="img-fluid"/>
                                            </a>
                                            <a href="#" className="d-block text">
                                                {topic?.title}
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Lucky>
    );
}

const Lucky = styled.div`

    padding: 40px 0 0;
    background: #F5F5F5;
    margin-top: 0;

    .lucky-left {
        border-radius: 8px;
        overflow: hidden;
    }

    .lucky-big-thumbnail {
        position: relative;
    }

    .lucky-content {
        background-color: #4b40d4;
        color: #fff;
        padding: 32px;
        border-radius: 0 0 8px 8px;

        span {
            color: white;
            font-weight: 500;
        }

        h4 {
            color: white;
            font-size: 36px;
            margin: 8px 0 16px;
            font-weight: bold;
            gap: 8px;
            font-family: 'Roboto', sans-serif;
        }

        p {
            color: white;
            font-size: 18px;
            line-height: 22px;
        }

        .content-right {
            .join {
                background-color: #fff;
                font-size: 20px;
                color: #4b40d4;
                display: inline-block;
                text-transform: uppercase;
                font-weight: bold;
                padding: 0 20px;
                border-radius: 4px;
                line-height: 64px;
            }

            .condition {
                font-size: 18px;
                line-height: 22px;
                color: #fff;
                display: block;
                text-decoration: underline;
                text-align: center;
                margin-top: 16px;
            }
        } 
    }
    
    .lucky-item .text {
        font-size: 18px;
        font-weight: 600;
        line-height: 150%;
        margin-left: 16px;
    }
    
    @media screen and (max-width: 821px) {
        padding: 24px 0 0;

        .lucky-content {
            padding: 16px;

            span {
                font-size: 14px;
            }

            h4 {
                font-size: 20px;
            }

            svg {
                transform: scale(0.75);
            }

            p {
                font-size: 16px;
                line-height: 19px;
            }

            .content-right {
                width: 100%;
                
                .join {
                    width: 100%;
                    margin-top: 16px;
                    text-align: center;
                    line-height: 56px;
                    font-size: 18px;
                }
                
                .condition {
                    line-height: 19px;
                    font-size: 16px;
                    margin-top: 16px;
                }
                
            }
        }

        .lucky-item .text {
            margin-left: 0;
        }
    }
`;

