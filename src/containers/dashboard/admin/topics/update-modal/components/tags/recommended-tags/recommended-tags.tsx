import Stack from '@mui/system/Stack';
import Chip from '@mui/material/Chip';
import {useRecommendedTags} from '@/containers/dashboard/admin/topics/update-modal/components/tags/recommended-tags/use-recommended-tags';
import {UpdateModalContext} from '@/containers/dashboard/admin/topics/update-modal/provider';
import defaultTo from 'lodash/defaultTo';
import {useWatch} from 'react-hook-form';
import {useCallback} from 'react';

export function RecommendedTags() {
  const {recommendedTags} = useRecommendedTags();
  return (
    <Stack direction={'row'} spacing={1} flexWrap={'wrap'} useFlexGap>
      {recommendedTags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </Stack>
  );
}

function useTag(tag: string) {
  const form = UpdateModalContext.useForm();
  const currentTags = defaultTo(useWatch({control: form.control, name: 'tags'}), []);

  return {
    onClick: useCallback(() => {
      form.setValue('tags', [...currentTags, tag]);
    }, [currentTags])
  };
}

function Tag({tag}: {tag: string}) {
  const {onClick} = useTag(tag);
  return <Chip key={tag} label={tag} onClick={onClick} />;
}
