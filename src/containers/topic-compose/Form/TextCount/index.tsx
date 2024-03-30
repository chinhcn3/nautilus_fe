import {Path, useWatch} from 'react-hook-form';
import {TopicComposeContext} from '@/containers/topic-compose/context';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import {CreateTopicReq} from '../../helpers/useCreateTopicReqSchema';

export interface TextCountProps {
  name: Path<CreateTopicReq>;
  maximum?: number;
}

export function TextCount({name, maximum}: TextCountProps) {
  const form = TopicComposeContext.useSelector((state) => state.form);
  const value = useWatch({
    name,
    control: form.control
  });

  return (
    <STypo>
      {~~Number(value?.length)}/{maximum}
    </STypo>
  );
}

const STypo = styled(Typography)`
  color: ${themeColor('subtitle')};
  font-size: 14px;
  line-height: 16px;
`;
