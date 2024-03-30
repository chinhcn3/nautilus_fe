import Grid from '@mui/material/Grid';
import {BootstrapInput} from '@/components/mui/input/BootstrapInput';
import {SupportModalContext} from '@/containers/support-modal/SupportModalContext';
import styled from '@emotion/styled';
import {FilledButton} from '@/components/mui/button/FilledButton';
import {ClassNames} from '@emotion/react';
import {useWatch} from 'react-hook-form';

export function Form() {
  const form = SupportModalContext.useSelector((state) => state.form);
  const sendRequest = SupportModalContext.useSelector((state) => state.sendRequest);
  const sendRequestState = SupportModalContext.useSelector((state) => state.sendRequestState);
  const {
    formState: {errors}
  } = form;

  // IDK why the input doesn't update without this?
  useWatch({control: form.control});

  return (
    <form onSubmit={form.handleSubmit(sendRequest)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <BootstrapInput
            label={'Tên'}
            {...form.register('full_name')}
            errorMessage={errors.full_name?.message}
          />
        </Grid>

        <Grid item xs={6}>
          <BootstrapInput
            label={'Email'}
            {...form.register('email')}
            errorMessage={errors.email?.message}
          />
        </Grid>

        <Grid item xs={6}>
          <BootstrapInput
            label={'Số điện thoại'}
            {...form.register('phone_number')}
            errorMessage={errors.phone_number?.message}
          />
        </Grid>

        <Grid item xs={12}>
          <BootstrapInput
            label={'Tiêu đề'}
            placeholder={'Nhập tiêu đề của yêu cầu, lời nhắn của bạn'}
            {...form.register('title')}
            errorMessage={errors.title?.message}
          />
        </Grid>

        <Grid item xs={12}>
          <ClassNames>
            {({css}) => (
              <BootstrapInput
                label={'Nội dung'}
                inputProps={{
                  multiline: true,
                  minRows: 6,
                  classes: {input: css({resize: 'vertical'})}
                }}
                {...form.register('content')}
                errorMessage={errors.content?.message}
              />
            )}
          </ClassNames>
        </Grid>

        <Grid item xs={12} mt={1}>
          <SSubmitButton
            type={'submit'}
            loading={sendRequestState.loading}
            disabled={sendRequestState.loading}>
            Gửi
          </SSubmitButton>
        </Grid>
      </Grid>
    </form>
  );
}

const SSubmitButton = styled(FilledButton)`
  width: 100%;
`;
