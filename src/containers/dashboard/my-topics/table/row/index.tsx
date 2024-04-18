import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import {BoldText} from '@/components/mui/typography';
import {useMyTopicsSelector} from '@/containers/dashboard/my-topics/provider';
import styled from '@emotion/styled';
import {themeColor} from '@/common/configs/theme';
import {format} from 'date-fns';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Chip, {ChipProps} from '@mui/material/Chip';
import {apiTopicStatusesWithLocale, TApiTopicStatus} from '@/common/constants/topic-status';
import {admintopicdto_TopicResp} from '@/common/openapi';
import {DeleteTopic} from '@/containers/dashboard/my-topics/table/row/delete-topic';
import Link from 'next/link';
import {getTopicDetailPath} from '@/common/helpers/router';

export function MyTopicsTableRow({topic}: {topic: admintopicdto_TopicResp}) {
  const category = useMyTopicsSelector((state) => state.getCategory(topic.category_id));

  return (
    <TableRow key={topic.id}>
      <TableCell>
        <BoldText>{topic.id}</BoldText>
      </TableCell>
      <TableCell>
        <TopicWrapper>
          <img src={topic.image} alt={topic.title} />
          <Link href={getTopicDetailPath(topic)}>
            <BoldText>{topic.title}</BoldText>
            <p className={'desc'}>{topic.long_title}</p>
          </Link>
        </TopicWrapper>
      </TableCell>
      <TableCell>
        <BoldText>{category?.name_vi}</BoldText>
      </TableCell>
      <TableCell>{topic.created_at && format(topic.created_at, 'dd/MM/yyyy')}</TableCell>
      <TableCell>
        <Chip
          label={apiTopicStatusesWithLocale[topic.status as NonNullable<TApiTopicStatus>]}
          color={getChipColor(topic.status as NonNullable<TApiTopicStatus>)}
        />
      </TableCell>
      <TableCell>
        <ButtonGroup>
          <Button variant={'text'} startIcon={<EditIcon />} href={`/compose?id=${topic.id}`} />
          <DeleteTopic topic={topic} />
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
}

function getChipColor(status: NonNullable<TApiTopicStatus>) {
  const map: Record<NonNullable<TApiTopicStatus>, ChipProps['color']> = {
    '': 'warning',
    OK: 'success',
    DELETED: 'error',
    REJECTED: 'error'
  };

  return map[status];
}

const TopicWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    width: 116px;
    height: 100px;
    object-fit: contain;
    background: ${themeColor('lightBackground')};
    border-radius: 4px;
  }

  .desc {
    margin-top: 8px;
  }
`;

const EditIcon = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_81_905)">
        <path
          d="M1.66663 10C1.66663 13.9284 1.66663 15.8926 2.88702 17.1129C4.1074 18.3334 6.07158 18.3334 9.99996 18.3334C13.9283 18.3334 15.8925 18.3334 17.1129 17.1129C18.3333 15.8926 18.3333 13.9284 18.3333 10V8.75002M11.25 1.66669H9.99996C6.07158 1.66669 4.1074 1.66669 2.88702 2.88708C2.07557 3.69853 1.80366 4.83881 1.71254 6.66669"
          stroke="#0D1828"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M13.8766 2.87924L14.4174 2.33856C15.3132 1.44273 16.7656 1.44273 17.6615 2.33856C18.5572 3.23439 18.5572 4.68681 17.6615 5.58264L17.1207 6.12331M13.8766 2.87924C13.8766 2.87924 13.9442 4.02818 14.958 5.04196C15.9718 6.05573 17.1207 6.12331 17.1207 6.12331M13.8766 2.87924L8.90596 7.84996C8.56929 8.18664 8.40096 8.35494 8.25615 8.54061C8.08537 8.75952 7.93895 8.99644 7.81949 9.24711C7.71822 9.45961 7.64294 9.68544 7.49237 10.1372L7.01031 11.5834M17.1207 6.12331L14.6354 8.60869M7.01031 11.5834L6.69839 12.5191C6.62429 12.7414 6.68214 12.9864 6.84783 13.1522C7.01351 13.3179 7.25859 13.3757 7.48087 13.3016L8.41663 12.9897M7.01031 11.5834L8.41663 12.9897M12.15 11.094C11.8134 11.4307 11.645 11.599 11.4594 11.7439C11.2405 11.9146 11.0035 12.061 10.7529 12.1805C10.5404 12.2818 10.3145 12.357 9.86279 12.5076L8.41663 12.9897"
          stroke="#0D1828"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_81_905">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
