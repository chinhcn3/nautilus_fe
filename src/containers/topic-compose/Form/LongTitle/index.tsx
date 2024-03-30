import {BootstrapInput} from '@/components/mui/input/BootstrapInput';
import {TopicComposeContext} from '@/containers/topic-compose/context';
import {useRegisterWithErrorMessage} from '@/common/helpers/react-hook-form';
import {TextCount} from '@/containers/topic-compose/Form/TextCount';
import {useTopicContentCnf} from '@/common/helpers/config/topic';

export function LongTitle() {
  const form = TopicComposeContext.useSelector((state) => state.form);
  const inputProps = useRegisterWithErrorMessage(form, 'long_title');
  const cnf = useTopicContentCnf();

  return (
    <BootstrapInput
      label={'Mô tả ngắn'}
      placeholder={'Mô tả ngắn'}
      inputProps={{multiline: true, minRows: 4}}
      {...inputProps}
      rightErrorMessage={<TextCount name={'long_title'} maximum={cnf.long_title_max_len} />}
    />
  );
}
