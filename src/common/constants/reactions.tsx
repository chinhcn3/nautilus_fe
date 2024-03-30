export const reactionVerbs = ['LIKE', 'DISLIKE', 'SAD', 'ANGRY', 'LAUGH', 'CLAP'] as const;
export type TReactionVerb = typeof reactionVerbs[number];

export const reactionVerbsWithIcon: Record<TReactionVerb, string> = {
  LIKE: '👍',
  DISLIKE: '👎',
  SAD: '😔',
  ANGRY: ':😠',
  CLAP: '👏',
  LAUGH: '😆'
};
