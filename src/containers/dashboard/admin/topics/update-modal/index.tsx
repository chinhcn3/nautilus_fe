import Modal from '@mui/material/Modal';
import {UpdateModalContext} from '@/containers/dashboard/admin/topics/update-modal/provider';
import Typography from '@mui/material/Typography';
import {ReactNode} from 'react';
import styled from '@emotion/styled';
import {ModalContentWrapper} from '@/components/mui/modal';
import {CategorySelect} from '@/containers/dashboard/admin/topics/update-modal/components/category-select';
import {Tags} from '@/containers/dashboard/admin/topics/update-modal/components/tags';
import {PinTopic} from '@/containers/dashboard/admin/topics/update-modal/components/pin-topic';
import {Bonus} from '@/containers/dashboard/admin/topics/update-modal/components/bonus';
import {Type} from '@/containers/dashboard/admin/topics/update-modal/components/type';
import {IsLuckyDraw} from '@/containers/dashboard/admin/topics/update-modal/components/is-lucky-draw';
import {LuckyDraw} from '@/containers/dashboard/admin/topics/update-modal/components/lucky-draw';
import {Configurations} from '@/containers/dashboard/admin/topics/update-modal/components/configurations';
import {SubmitButton} from '@/components/mui/button';
import {LoadingButton} from '@mui/lab';

type UpdateTopicModalProps = typeof UpdateModalContext.__ProviderProps;
export function UpdateTopicModal({topic, onCloseRequest, modalProps}: UpdateTopicModalProps) {
  return (
    <UpdateModalContext.Provider
      topic={topic}
      modalProps={modalProps}
      onCloseRequest={onCloseRequest}>
      <ModalWrapper>
        <FieldsWrapper>
          <CategorySelect />
          <Tags />
          <PinTopic />
          <Bonus />
          <Type />
          <Configurations />
          <IsLuckyDraw />
          <LuckyDraw />
        </FieldsWrapper>
      </ModalWrapper>
    </UpdateModalContext.Provider>
  );
}

function ModalWrapper({children}: {children: ReactNode}) {
  const modalProps = UpdateModalContext.useSelector((state) => state.modalProps);
  const topic = UpdateModalContext.useSelector((state) => state.topic);
  return (
    <Modal keepMounted={false} {...modalProps}>
      <Box>
        <Header>
          <Typography variant="h5">{topic.title}</Typography>
        </Header>
        {children}

        <Footer>
          <Submit />
        </Footer>
      </Box>
    </Modal>
  );
}

function Submit() {
  const [updateState, update] = UpdateModalContext.useSelector((state) => [
    state.updateState,
    state.update
  ]);
  return (
    <SSubmitButton onClick={update} loading={updateState.loading} disabled={updateState.loading}>
      Approve
    </SSubmitButton>
  );
}

const SSubmitButton = SubmitButton.withComponent(LoadingButton);

const Box = styled(ModalContentWrapper)`
  width: 832px;
`;

const Header = styled.div`
  margin-bottom: 24px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: end;
  padding: 16px 0 0;
`;

const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
