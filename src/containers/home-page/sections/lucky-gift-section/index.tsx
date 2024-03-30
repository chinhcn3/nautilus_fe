import {SectionHeading} from '@/containers/home-page/components/section-heading';
import {BigLuckyGift} from '@/containers/home-page/sections/lucky-gift-section/components/big-lucky-gift';
import {useHomePageContext} from '@/containers/home-page/home-provider';

export function LuckyGiftSection() {
  const {home} = useHomePageContext();
  const luckyGiftTopics = home.lucky_gift_topics || [];

  return (
    <div className="lucky">
      <div className="container">
        <SectionHeading title="Đi tìm may mắn" />
        <div className="row gutter-24px">
          <BigLuckyGift topic={luckyGiftTopics?.[0]} />
          <div className="col-sm-4">
            <div className="col lucky-right">
              <h4 className="font-weight-bold">Sự kiện hàng ngày</h4>
              {luckyGiftTopics?.slice(1, 5)?.map((topic) => {
                return (
                  <div key={topic.id} className="lucky-item">
                    <div className="d-flex">
                      <a href="#" className="d-block img-thumb">
                        <img src={topic?.thumbnail} alt="lucky img" className="img-fluid" />
                      </a>
                      <a href="#" className="d-block text">
                        {topic?.title}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
