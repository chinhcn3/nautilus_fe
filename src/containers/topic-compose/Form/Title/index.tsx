import {BootstrapInput} from '@/components/mui/input/BootstrapInput';
import {TopicComposeContext} from '@/containers/topic-compose/context';
import {useRegisterWithErrorMessage} from '@/common/helpers/react-hook-form';
import {TextCount} from '@/containers/topic-compose/Form/TextCount';
import {useTopicContentCnf} from '@/common/helpers/config/topic';
import {withCustomClassname} from '@/components/packages/emotion/styled-custom-className';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';

export function Title() {
  const form = TopicComposeContext.useSelector((state) => state.form);
  const inputProps = useRegisterWithErrorMessage(form, 'title');
  const cnf = useTopicContentCnf();

  return (
    <SInput
      label={'Tiêu đề'}
      placeholder={'Nhập tiêu đề bài viết'}
      {...inputProps}
      rightErrorMessage={<TextCount name={'title'} maximum={cnf.title_max_len} />}
    />
  );
}

const SInput = styled(withCustomClassname(BootstrapInput, 'inputProps.className'))`
  font-size: 32px;
  color: ${themeColor('subtitle')};
  line-height: 38px;
`;
