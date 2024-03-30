import {SectionHeading} from '@/containers/home-page/components/section-heading';
import AddIcon from './../../assets/ic-add.svg';
import NextIcon from './../../assets/ic-next.svg';
import {useTopicData} from '@/containers/home-page/hooks/use-topic-data';
import {contentdto_TopicResp} from '@/common/openapi';

export function QuickTopicSection() {
  const {getTopicUser} = useTopicData();

  return (
    <div className="funs">
      <div className="container">
        <SectionHeading title="Góp vui" />
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
                  <img src={topic?.thumbnail} alt="fun image" className="img-thumb" />
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
            <NextIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
