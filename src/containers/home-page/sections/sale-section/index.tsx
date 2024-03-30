import {useHomePageContext} from '@/containers/home-page/home-provider';
import {SectionHeading} from '@/containers/home-page/components/section-heading';
import PrevIcon from './../../assets/ic-pre-small.svg';
import NextIcon from './../../assets/ic-next-small.svg';
import SaleIcon from './../../assets/ic-sale.svg';

export function SaleSection() {
  const {home} = useHomePageContext();
  const dealTopics = home.deal_topics || [];

  return (
    <div className="sales">
      <div className="container">
        <SectionHeading title="Giá tốt mỗi ngày" />
        <div className="carousel-wrap">
          <button className="btn-prev">
            <PrevIcon />
          </button>
          <div className="carousel-container">
            {dealTopics?.map((topic) => {
              return (
                <div key={topic.id} className="carousel-item">
                  <div className="news-card">
                    <a href="#" className="d-block w-100 news-card-img">
                      <img src={topic.thumbnail} alt="news image" className="img-fluid" />
                    </a>
                    <div className="news-card-body">
                      <h3 className="news-card-title">
                        <a href="#" className="d-block">
                          <SaleIcon alt="icon sale" className="icon-sale" />
                          {topic.title}
                        </a>
                      </h3>
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
      </div>
    </div>
  );
}
