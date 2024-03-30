import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import {useMyTopicsSelector} from '@/containers/dashboard/my-topics/provider';
import TableBody from '@mui/material/TableBody';
import {MyTopicsTableRow} from '@/containers/dashboard/my-topics/table/row';

export function MyTopicsTable() {
  const {value} = useMyTopicsSelector((state) => state.fetchTopicsState);

  return (
    <TableContainer sx={{minHeight: 320}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Bài viết</TableCell>
            <TableCell>Danh mục</TableCell>
            <TableCell>Ngày tạo</TableCell>
            <TableCell>Trạng thái</TableCell>
            <TableCell>Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {value?.data?.topics?.map((topic) => {
            return <MyTopicsTableRow key={topic.id} topic={topic} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
