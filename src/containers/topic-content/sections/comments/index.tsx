'use client';

import Stack from '@mui/system/Stack';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import Avatar from '@mui/material/Avatar';
import {Button, IconButton} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  ArrowBendDownRightIcon,
  LikeDetailIcon
} from '@/containers/page-container/page-header/icons';
import {WriteCommentSection} from './WriteCommentSection';
import {TopicExtraContext} from '@/components/topic/TopicExtraProvider';

export function Comments() {
  const numberOfComments = TopicExtraContext.useSelector(
    (state) => state.fetchTopicExtraState.value?.topic_stats?.comments ?? 0
  );
  return (
    <SectionDetail>
      <h3>Bình luận ({numberOfComments})</h3>
      <Stack spacing={5}>
        <WriteCommentSection />
        <div className="comments-other">
          <Stack spacing={2}>
            <Stack justifyContent="space-between" direction="row">
              <Stack alignItems="center" direction="row" spacing={1}>
                <Avatar sx={{width: 40, height: 40}}>
                  <AvatarImg src="https://i.cbc.ca/1.6835834.1683556421!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_940/messi-lionel-230430-1180.jpg" />
                </Avatar>
                <Stack spacing={1}>
                  <Name>TwiddleVondu</Name>
                  <Time>1 giờ trước</Time>
                </Stack>
              </Stack>
              <ButtonMore>
                <IconButton className="more-btn">
                  <MoreVertIcon />
                </IconButton>
              </ButtonMore>
            </Stack>
            <GroupComment spacing={3}>
              <CommentContent spacing={2}>
                <span>
                  Điều này là một tin tức khá đáng buồn với những người dùng iOS ở châu Âu. Tôi đã
                  quen dùng những chợ ứng dụng bên thứ 3 để tải các ứng dụng không có sẵn trên App
                  Store chính thức. Việc này giờ đây sẽ gây khó khăn cho tôi trong việc truy cập các
                  ứng dụng mà tôi cần. Hy vọng có giải pháp thay thế hoặc sự thay đổi trong tương
                  lai để người dùng có thể tiếp tục trải nghiệm đầy đủ các tính năng của iOS.
                </span>
                <Stack alignItems="center" direction="row" spacing={5}>
                  <Button size="small" variant="text" startIcon={<LikeDetailIcon />}>
                    Thích
                  </Button>
                  <Button size="small" variant="text">
                    Trả lời
                  </Button>
                </Stack>
              </CommentContent>
              <CommentChild alignItems={'flex-start'} spacing={3}>
                <ReadMoreOld variant="text" startIcon={<ArrowBendDownRightIcon />}>
                  Xem thêm trả lời cũ hơn
                </ReadMoreOld>
                <Stack spacing={2}>
                  <Stack justifyContent="space-between" direction="row">
                    <Stack alignItems="center" direction="row" spacing={1}>
                      <Avatar sx={{width: 40, height: 40}}>
                        <AvatarImg src="https://i.cbc.ca/1.6835834.1683556421!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_940/messi-lionel-230430-1180.jpg" />
                      </Avatar>
                      <Stack spacing={1}>
                        <Name>TwiddleVondu</Name>
                        <Time>1 giờ trước</Time>
                      </Stack>
                    </Stack>
                    <ButtonMore>
                      <IconButton className="more-btn">
                        <MoreVertIcon />
                      </IconButton>
                    </ButtonMore>
                  </Stack>
                  <CommentContent spacing={2}>
                    <span>
                      Điều này là một tin tức khá đáng buồn với những người dùng iOS ở châu Âu. Tôi
                      đã quen dùng những chợ ứng dụng bên thứ 3 để tải các ứng dụng không có sẵn
                      trên App Store chính thức. Việc này giờ đây sẽ gây khó khăn cho tôi trong việc
                      truy cập các ứng dụng mà tôi cần. Hy vọng có giải pháp thay thế hoặc sự thay
                      đổi trong tương lai để người dùng có thể tiếp tục trải nghiệm đầy đủ các tính
                      năng của iOS.
                    </span>
                    <Stack alignItems="center" direction="row" spacing={5}>
                      <Button size="small" variant="text" startIcon={<LikeDetailIcon />}>
                        Thích
                      </Button>
                      <Button size="small" variant="text">
                        Trả lời
                      </Button>
                    </Stack>
                  </CommentContent>
                </Stack>
              </CommentChild>
            </GroupComment>
          </Stack>
        </div>
      </Stack>
    </SectionDetail>
  );
}

const SectionDetail = styled.div`
  margin-bottom: 40px;
  font-family: 'Inter', sans-serif;
  padding-bottom: 40px;
  position: relative;

  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    margin-bottom: 24px;
  }

  a.title {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    color: ${themeColor('primary')};
  }

  &.doted {
    border-bottom: 2px dotted rgba(17, 17, 17, 0.6);

    &:before {
      content: '';
      border-bottom: 2px dotted rgba(17, 17, 17, 0.6);
      height: 0;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: -6px;
    }

    &:after {
      content: '';
      border-bottom: 2px dotted rgba(17, 17, 17, 0.6);
      height: 0;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: -10px;
    }
  }
`;

const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Name = styled.span`
  font-size: 16px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  color: ${themeColor('black')};
`;

const Time = styled.span`
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  color: ${themeColor('subtitle')};
  font-size: 14px;
`;
const CommentContent = styled(Stack)`
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  color: ${themeColor('black')};
  font-size: 18px;
  line-height: 150%;
  padding: 16px;
  border: 1px solid ${themeColor('border')};
  border-radius: 4px;
  background-color: ${themeColor('f9')};

  button {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    color: ${themeColor('primary')};
    font-size: 16px;
    text-transform: initial;

    svg {
      path {
        stroke: ${themeColor('primary')};
      }
    }
  }
`;

const ButtonMore = styled.div``;
const GroupComment = styled(Stack)``;
const ReadMoreOld = styled(Button)`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  color: ${themeColor('primary')};
  font-size: 16px;
  text-transform: initial;
  text-align: left;
`;
const CommentChild = styled(Stack)`
  padding-left: 48px;
`;
