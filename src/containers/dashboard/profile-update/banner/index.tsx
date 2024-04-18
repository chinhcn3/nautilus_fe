import styled from '@emotion/styled';
import {useProfileContext} from '@/containers/dashboard/layout-container/profile-context';
import background from './assets/background.png';
import {Avatar} from './avatar';
import {Specs} from './specs';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {useIsSmUp} from '@/components/packages/mui/responsive';

export function Banner() {
  const {user} = useProfileContext();
  const isSmUp = useIsSmUp();

  return (
    <BannerWrapper>
      <Grid container spacing={2} alignItems={'center'}>
        <Grid item xs={12} md={'auto'} sx={{display: 'flex', placeContent: 'center'}}>
          <Box sx={{position: 'relative', width: 100, height: 100}}>
            <Avatar />
          </Box>
        </Grid>

        <Grid
          item
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: isSmUp ? 'flex-start' : 'center',
            justifyContent: isSmUp ? 'flex-start' : 'center'
          }}>
          <Name>{user.nick_name}</Name>
          <Specs />
        </Grid>
      </Grid>
    </BannerWrapper>
  );
}

const BannerWrapper = styled.div`
  background-image: url(${background.src});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  padding: 28px 32px;

  display: flex;
  align-items: center;
  column-gap: 24px;
`;

const Name = styled.h1`
  font-size: 24px;
  margin-bottom: 8px;
`;
