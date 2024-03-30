import {checkIsValueYoutubeVideoUrl} from '@/containers/topic-compose/TopicVideo/helpers/checkIsValueYoutubeVideoUrl';

/**
 * @param url any video url
 * @see https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
 */
export function getYoutubeVideoImageUrl(url: string) {
  if (!checkIsValueYoutubeVideoUrl(url)) throw new Error('URL is not a valid Youtube video URL');
  const parsedUrl = new URL(url);
  parsedUrl.host = 'img.youtube.com';
  const videoId = parsedUrl.searchParams.get('v');
  parsedUrl.pathname = `/vi/${videoId}/hqdefault.jpg`;
  [...parsedUrl.searchParams.entries()].forEach(([key]) => parsedUrl.searchParams.delete(key));
  return parsedUrl.toString();
}
