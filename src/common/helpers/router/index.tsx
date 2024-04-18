export function getTopicDetailPath(props: {slug?: string; id?: number}) {
  return `/content/${props.slug}-${props.id}`;
}

export function getTopicEditPath(props: {id?: number}) {
  return `/compose?id=${props.id}`;
}
