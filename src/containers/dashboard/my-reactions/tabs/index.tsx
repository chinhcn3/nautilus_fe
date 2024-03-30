import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import {
  MyReactionsContext,
  TMyReactionsTab,
} from '@/containers/dashboard/my-reactions/provider';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';

export function MyReactionsTabs() {
  const selectedTab = MyReactionsContext.useSelector(state => state.selectedTab)
  const setTab = MyReactionsContext.useSelector(state => state.setTab)

  return (
    <STabs value={selectedTab} onChange={(_, value) => setTab(value as TMyReactionsTab)} aria-label="basic tabs example">
      <Tab label="Tương tác của tôi" value={'SEND' satisfies TMyReactionsTab}/>
      <Tab label="Tương tác đến tôi" value={'RECEIVE' satisfies TMyReactionsTab} />
    </STabs>
  );
}

const STabs = styled(Tabs)`
    border-bottom: 2px solid ${themeColor('text_200')};
    .MuiTab-root {
        font-weight: 700;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        text-transform: none;
        padding: 4px 12px;
        &.Mui-selected {
            background: ${themeColor('secondary')};
            color: white;
            border-bottom: none;
        }    
    }
    .MuiTabs-indicator {
        display: none;
    }
    
`
