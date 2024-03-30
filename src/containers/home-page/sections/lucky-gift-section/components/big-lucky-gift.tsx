import {contentdto_TopicResp} from '@/common/openapi';
import GiftIcon from './../../../assets/ic-gift.svg';

export function BigLuckyGift({topic}: {topic: contentdto_TopicResp}) {
  return (
    <div className="col-sm-8">
      <div className="col lucky-left">
        <div className="lucky-big">
          <img src={topic?.thumbnail} alt="" className="img-fluid" />
          <div className="d-flex justify-content-between lucky-content">
            <div className="content-left">
              <span>Sự kiện tháng</span>
              <h4 className="d-flex align-items-center">
                <GiftIcon /> {topic?.title}
              </h4>
              <p>{topic?.long_title}</p>
            </div>
            <div className="content-right">
              <a href="#" className="join">
                Tham Gia trúng thưởng
              </a>
              <a href="#" className="condition">
                Thể lệ &amp; Điều kiện
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
