import {useHomePageContext} from '@/containers/home-page/home-provider';
import {SectionHeading} from '@/containers/home-page/components/section-heading';
import {useTopicData} from '@/containers/home-page/hooks/use-topic-data';
import {TopicAuthor} from '@/components/topic-author';
import PrevIcon from './../../assets/ic-pre-small.svg';
import NextIcon from './../../assets/ic-next-small.svg';
import {Container} from "@mui/material";

export function LastReviewSection() {
  const {home} = useHomePageContext();
  const {getTopicCate} = useTopicData();
  const lastReviewTopics = home.last_review_topics || [];
  return (
    <div className="review-latest">
      <Container maxWidth="xl">
        <SectionHeading title="Review mới nhất" />
        <div className="carousel-wrap">
          <button className="btn-prev">
            <PrevIcon />
          </button>
          <div className="carousel-container">
            {lastReviewTopics?.map((topic) => {
              return (
                <div key={topic?.id} className="carousel-item">
                  <div className="news-card">
                    <a href="#" className="d-block news-card-img">
                      <img src={topic?.thumbnail} alt="news image" className="img-fluid" />
                    </a>
                    <div className="news-card-body">
                      <div className="news-card-meta">
                        <span>{getTopicCate(topic)}</span>
                        <span>{topic?.published_at}</span>
                      </div>
                      <h3 className="news-card-title">
                        <a href="#" className="d-block">
                          {topic?.title}
                        </a>
                      </h3>
                      <TopicAuthor topic={topic} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="btn-next">
            <NextIcon />
          </button>
        </div>
      </Container>
    </div>
  );
}
