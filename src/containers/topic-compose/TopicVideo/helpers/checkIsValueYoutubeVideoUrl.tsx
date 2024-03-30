export function checkIsValueYoutubeVideoUrl(url?: string) {
  if (!url) return false;

  try {
    const parsedUrl = new URL(url);
    if (!parsedUrl.host.endsWith('youtube.com')) return false;

    const videoId = parsedUrl.searchParams.get('v');
    if (!videoId) return false;

    return true;
  } catch (e) {
    return false;
  }
}
