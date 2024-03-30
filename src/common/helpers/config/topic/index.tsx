import {useSessionConfig} from '@/common/helpers/authentication/session-instance';
import {config_TopicContentCnf} from '../../../openapi';
import defaults from 'lodash/defaults';

export function useTopicContentCnf(): Required<config_TopicContentCnf> {
  const config = useSessionConfig();
  const topicCnf = config?.content?.topic;

  return defaults(topicCnf, {
    title_min_len: 10,
    title_max_len: 100,
    long_title_min_len: 100,
    long_title_max_len: 300,
    content_min_len: 0,
    content_max_len: 200000
  } satisfies Required<config_TopicContentCnf>);
}
