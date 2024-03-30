import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import {UpdateModalContext} from '@/containers/dashboard/admin/topics/update-modal/provider';

export function IsLuckyDraw() {
  const [isLuckyDraw, setLuckyDraw] = UpdateModalContext.useSelector((state) => [
    state.isLuckyDraw,
    state.setLuckyDraw
  ]);
  return (
    <FormGroup
      onChange={(e) => {
        return setLuckyDraw((e.nativeEvent.target as HTMLInputElement).checked);
      }}>
      <FormControlLabel
        control={<Checkbox value={isLuckyDraw} color={'secondary'} />}
        label={<SLabel>Chương trình trúng thưởng</SLabel>}
      />
    </FormGroup>
  );
}

const SLabel = styled.span`
  font-size: 22px;
  color: ${themeColor('secondary')};
`;
