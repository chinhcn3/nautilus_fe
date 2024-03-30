import {useProfileContext} from '@/containers/dashboard/layout-container/profile-context';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import {useMemo} from 'react';
import {differenceInYears} from 'date-fns';

function useValues() {
  const {user} = useProfileContext();
  const age = useMemo(() => differenceInYears(user.member_at!, new Date()), [user]);
  return {user, age};
}

export function Specs() {
  const {user, age} = useValues();
  return (
    <>
      <InlineSpecs>
        <div className="spec">
          <span className="label">Cấp độ: </span>
          <span className="value">{user.level_vi}</span>
        </div>
        <div className="dot" />
        <div className="spec">
          <span className="label">Điểm uy tín: </span>
          <span className="value">{user.points}</span>
        </div>
        <div className="dot" />
        <div className="spec">
          <span className="label">Điểm thưởng: </span>
          <span className="value">{user.kudos}</span>
        </div>
        <div className="dot" />
        <div className="spec">
          <span className="label">Tuổi TechRV: </span>
          <span className="value">{age}</span>
        </div>
      </InlineSpecs>
      <BoxedSpecs>
        <div className="box">
          <div className="label">Bài viết</div>
          <div className="value">20</div>
        </div>
        <div className="box">
          <div className="label">Bình luận</div>
          <div className="value">50</div>
        </div>
        <div className="box">
          <div className="label">Lượt thích</div>
          <div className="value">300</div>
        </div>
        <div className="box">
          <div className="label">Lượt phản đối</div>
          <div className="value">3000</div>
        </div>
      </BoxedSpecs>
    </>
  );
}

const InlineSpecs = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;

  > .spec {
    font-size: 14px;

    > .label {
      font-weight: 700;
    }
  }
  > .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${themeColor('black')};
    margin-top: 6px;
  }
`;

const BoxedSpecs = styled.div`
  display: flex;
  margin-top: 12px;
  gap: 16px;
  > .box {
    padding: 4px 20px;
    text-align: center;
    background-color: ${themeColor('white')}88;
    display: inline-block;
    border-radius: 8px;
    > .label {
      font-size: 12px;
      line-height: 14px;
    }
    > .value {
      font-size: 16px;
      font-weight: 700;
    }
  }
`;
