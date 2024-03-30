import Button from '@mui/material/Button';
import {useState} from 'react';
import {LoginModal} from '@/containers/auth/login';

export function LoginButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button className={'btn-login'} onClick={() => setIsOpen(true)}>
        ĐĂNG NHẬP
      </Button>
      <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
