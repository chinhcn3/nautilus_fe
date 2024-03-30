import {Pagination} from '@/components/mui/pagination';
import {AdminUsersContext} from '@/containers/dashboard/admin/users/context';

export function AdminUsersPagination() {
  const isLastPage = AdminUsersContext.useSelector((state) => state.isLastPage);
  return <Pagination isLastPage={isLastPage} />;
}
