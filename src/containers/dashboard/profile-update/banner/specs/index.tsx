import {useProfileContext} from '@/containers/dashboard/layout-container/profile-context';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import {useMemo} from 'react';
import {differenceInYears} from 'date-fns';
import Grid from '@mui/material/Grid';
import {useIsSmUp} from '@/components/packages/mui/responsive';

function useValues() {
  const {user} = useProfileContext();
  const age = useMemo(() => differenceInYears(user.member_at!, new Date()), [user]);
  return {user, age};
}

export function Specs() {
  const {user, age} = useValues();
  const isSmUp = useIsSmUp();
  const takenReactions = user.stats?.taken_reactions;

  /**
   * @see https://techrv.slack.com/archives/C063JKBMMRT/p1712475772037209
   */
  const totalLikes = Number(takenReactions?.likes ?? 0) + Number(takenReactions?.claps ?? 0);
  const totalDislikes = Number(takenReactions?.dislikes ?? 0);

  return (
    <>
      <InlineSpecs
        container
        rowSpacing={1}
        columnSpacing={2}
        justifyContent={isSmUp ? 'flex-start' : 'center'}>
        <Grid item className="spec">
          <span className="label">Cấp độ: </span>
          <span className="value">{user.level_vi}</span>
        </Grid>
        <Grid item className="spec">
          <span className="label">Điểm uy tín: </span>
          <span className="value">{user.points}</span>
        </Grid>
        <Grid item className="spec">
          <span className="label">Điểm thưởng: </span>
          <span className="value">{user.kudos}</span>
        </Grid>
        <Grid item className="spec">
          <span className="label">Tuổi TechRV: </span>
          <span className="value">{age}</span>
        </Grid>
      </InlineSpecs>
      <BoxedSpecs container spacing={2}>
        <Grid item xs={6} md={2}>
          <div className="box">
            <div className="label">Bài viết</div>
            <div className="value">{user.stats?.topics ?? 0}</div>
          </div>
        </Grid>
        <Grid item xs={6} md={2}>
          <div className="box">
            <div className="label">Bình luận</div>
            <div className="value">{user.stats?.comments ?? 0}</div>
          </div>
        </Grid>
        <Grid item xs={6} md={2}>
          <div className="box">
            <div className="label">Lượt thích</div>
            <div className="value">{totalLikes}</div>
          </div>
        </Grid>
        <Grid item xs={6} md={2}>
          <div className="box">
            <div className="label">Lượt phản đối</div>
            <div className="value">{totalDislikes}</div>
          </div>
        </Grid>
      </BoxedSpecs>
    </>
  );
}

const InlineSpecs = styled(Grid)`
  > .spec {
    font-size: 14px;

    > .label {
      font-weight: 700;
    }
  }
`;

const BoxedSpecs = styled(Grid)`
  margin-top: 8px;

  .box {
    padding: 4px 16px;
    text-align: center;
    background-color: ${themeColor('white')}88;
    display: inline-block;
    border-radius: 8px;
    width: 100%;
    height: 100%;

    > . label {
      font-size: 12px;
      line-height: 14px;
    }

    > .value {
      font-size: 16px;
      font-weight: 700;
    }
  }
`;
