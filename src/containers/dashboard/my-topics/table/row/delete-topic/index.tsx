import Button from '@mui/material/Button';
import {admintopicdto_TopicResp} from '@/common/openapi';
import {useMyTopicsSelector} from '@/containers/dashboard/my-topics/provider';

export function DeleteTopic({topic}: {topic: admintopicdto_TopicResp}) {
  const deleteTopic = useMyTopicsSelector((state) => state.deleteTopic);
  return (
    <Button variant={'text'} startIcon={<TrashIcon />} onClick={() => deleteTopic(topic.id!)} />
  );
}

const TrashIcon = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.33337 9.16669V14.1667"
        stroke="#0D1828"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6667 9.16669V14.1667"
        stroke="#0D1828"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33337 5.83331H16.6667"
        stroke="#0D1828"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 5.83331H10H15V15C15 16.3807 13.8807 17.5 12.5 17.5H7.5C6.11929 17.5 5 16.3807 5 15V5.83331Z"
        stroke="#0D1828"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 4.16667C7.5 3.24619 8.24619 2.5 9.16667 2.5H10.8333C11.7538 2.5 12.5 3.24619 12.5 4.16667V5.83333H7.5V4.16667Z"
        stroke="#0D1828"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
