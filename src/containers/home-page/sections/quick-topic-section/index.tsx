import {SectionHeading} from '@/containers/home-page/components/section-heading';
import AddIcon from './../../assets/ic-add.svg';
import NextIcon from './../../assets/ic-next.svg';
import {useTopicData} from '@/containers/home-page/hooks/use-topic-data';
import {contentdto_TopicResp} from '@/common/openapi';
import {Container} from "@mui/material";
import styled from "@emotion/styled";

export function QuickTopicSection() {
    const {getTopicUser} = useTopicData();

    return (
        <Funs className="funs">
            <Container maxWidth="xl">
                <SectionHeading classItem="grey" title="Góp vui"/>
                <div className="funs-content carousel-wrap">
                    <div className="carousel-container">
                        <a href="#" className="carousel-item">
                            <div className="add-icon">
                                <AddIcon
                                    className="img-circle img-fluid"
                                    style={{marginTop: '50%', marginLeft: '35%'}}
                                />
                                <span>Tạo chủ đề của bạn</span>
                            </div>
                        </a>
                        {[]?.map((topic: contentdto_TopicResp) => {
                            return (
                                <a key={topic?.id} href="#" className="carousel-item">
                                    <img src={topic?.thumbnail} alt="fun image" className="img-thumb"/>
                                    <img
                                        src={getTopicUser(topic)?.avatar}
                                        alt="avatar"
                                        className="img-circle avatar"
                                    />
                                    <h5>{topic.title}</h5>
                                </a>
                            );
                        })}
                    </div>
                    <button className="btn-next">
                        <NextIcon/>
                    </button>
                </div>
            </Container>
        </Funs>
    );
}
const Funs = styled.div`
    padding: 40px 0 0;
    background: #F5F5F5;
    margin-top: 0;
    
    .funs-content {
        position: relative;
        
        .carousel-container {
            flex: 0 0 180px;
            display: flex;
            overflow-x: scroll;
            overflow-y: hidden;
        }
        
        &.carousel-wrap  {
            .btn-next, .btn-prev {
                position: absolute;
                right: -20px;
                z-index: 10;
                top: 50%;
                transform: translateY(-50%);
                background-color: #fff;
                border-radius: 100%;
                border: 0;
                cursor: pointer;
                transition: all 0.2s ease;
                width: 48px;
                height: 48px;
            }
        }
        
        button:hover {
            opacity: 0.85;
        }
    }

    .carousel-item {
        position: relative;
        height: 100%;
        display: block;
        min-height: 320px;
        min-width: 180px;
        margin-right: 24px;
        
        &:last-child {
            margin-right: 0;
        }
        
        &:first-child {
            border: 2px dashed #4b40d4;
            border-radius: 4px;
            display: block;
            
            .add-icon {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                min-height: 100%;
                width: 100%;

                span {
                    display: block;
                    color: #4b40d4;
                    margin-top: 16px;
                    text-align: center;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    padding: 0 8px;
                }
            }
        }
    }
`