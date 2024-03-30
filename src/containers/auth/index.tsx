import styled from '@emotion/styled';
import {LoginModal} from '@/containers/auth/login';

export function AuthPage() {
  return (
    <PageContainer>
      <LoginModal />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 100%;
`;
