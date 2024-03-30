import {notificationdto_NotificationSettingResp} from '../openapi';
import {Simplify} from 'type-fest';

export type TNotificationSetting = Simplify<keyof notificationdto_NotificationSettingResp>;
export const notificationSettingsWithLocales: Record<TNotificationSetting, string> = {
  on_saved_topic: 'Bài viết theo dõi',
  on_following_user: 'Tác giả theo dõi',
  on_comment_reply: 'Bình luận có trả lời',
  on_comment_react: 'Bình luận có tương tác',
  on_content_approval: 'Nội dung được duyệt hoặc từ chối',
  on_user_update: 'Cập nhật của user',
  on_advertisement: 'Thông tin quảng cáo'
};
