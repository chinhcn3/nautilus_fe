import {MenuItem} from '@/containers/dashboard/layout-container/sidebar/menu-item';
import * as Icons from '@/containers/dashboard/layout-container/sidebar/icons';
import {useOpenSupportModal} from '@/common/hooks/useSupportModal';

export function SupportButton() {
  const open = useOpenSupportModal();
  return (
    <MenuItem
      icon={<Icons.SupportIcon />}
      label={'Liên hện hỗ trợ'}
      active={true}
      secondary={true}
      onClick={open}
    />
  );
}
