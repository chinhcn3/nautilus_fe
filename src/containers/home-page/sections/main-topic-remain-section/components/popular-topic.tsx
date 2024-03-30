import AdsBanner from './../../../assets/banner-ads-vertical.svg';
import ViewMoreIcon from './../../../assets/ic-viewmore.svg';
import {type entity_HashTag} from '@/common/openapi';
import {useHomePageContext} from '@/containers/home-page/home-provider';

export function PopularTopic() {
  const {home} = useHomePageContext();
  const hashTags = home.top_hash_tags || [];

  return (
    <div className="col-sm-3 popular-right">
      <div className="col">
        <div className="popular-topic">
          <h4>Chủ đề phổ biến</h4>
          <ul>
            {hashTags?.map((hashTag: entity_HashTag) => {
              return (
                <li key={hashTag.key}>
                  <a href="#" className="d-block">
                    <img src={hashTag.image} alt="topic img" className="img-fluid" />
                    <span>{hashTag.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="viewmore-wrap">
            <div className="viewmore d-flex justify-content-center">
              <a href="#" className="d-flex align-items-center">
                Xem thêm <ViewMoreIcon/>
              </a>
            </div>
          </div>
        </div>

        <div className="popular-banner">
          <AdsBanner />
        </div>
      </div>
    </div>
  );
}
