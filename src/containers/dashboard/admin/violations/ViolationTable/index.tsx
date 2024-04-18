import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import {ViolationContext} from '@/containers/dashboard/admin/violations/ViolationContext';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import {UserAvatar} from '@/components/user/avatar';
import ListItemText from '@mui/material/ListItemText';
import {format} from 'date-fns/format';

export function ViolationTable() {
  return (
    <TableContainer sx={{minHeight: 320}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell>Source Object ID</TableCell>
            <TableCell>Thời gian</TableCell>
            <TableCell>Lý do</TableCell>
          </TableRow>
        </TableHead>
        <Body />
      </Table>
    </TableContainer>
  );
}

function Body() {
  const violations = ViolationContext.useSelector(
    (state) => state.fetchListViolationState.value?.violations
  );
  const getUser = ViolationContext.useSelector((state) => state.getUser);
  return (
    <TableBody>
      {violations?.map((violation) => {
        const user = getUser(violation.user_id);
        return (
          <TableRow key={violation.id}>
            <TableCell>
              <ListItem>
                <ListItemAvatar>
                  <UserAvatar user={user!} />
                </ListItemAvatar>
                <ListItemText primary={user?.nick_name} secondary={user?.full_name} />
              </ListItem>
            </TableCell>
            <TableCell>{violation.source_object_id}</TableCell>
            <TableCell>{format(violation.created_at!, 'dd/MM/yyyy HH:mm:ss')}</TableCell>
            <TableCell>{violation.type}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}
