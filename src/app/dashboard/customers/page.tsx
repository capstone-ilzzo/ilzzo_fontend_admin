import * as React from 'react';
import type { Metadata } from 'next';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import dayjs from 'dayjs';

import { config } from '@/config';
import { CustomersFilters } from '@/components/dashboard/customer/customers-filters';
import { CustomersTable } from '@/components/dashboard/customer/customers-table';
import type { Customer } from '@/components/dashboard/customer/customers-table';

export const metadata = { title: `Detected Threats | Dashboard | ${config.site.name}` } satisfies Metadata;

const customers = [
  {
    id: 'USR-010',
    name: 'Log1',
    avatar: '/assets/avatar-10.png',
    email: 'alcides.antonio@devias.io',
    phone: '908-691-3242',
    address: '조치 중',
    createdAt: dayjs().subtract(2, 'hours').toDate(),
    url : `https://ilzzo-forensic-artifact.s3.ap-northeast-2.amazonaws.com/i-0a8940225e7a32b18/2024-05-07_21%3A00%3A00/result.txt?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLW5vcnRoZWFzdC0yIkgwRgIhAKhRKF5ObB2ACh%2BvdhClDR0UN3133SUOYnXTw8T5FDFBAiEAwctmylz3GKEBa1F%2B0lIG6%2BBi9921X3KQ5%2F0l4qd%2FkYoq6AIIPRAAGgw5MDU0MTgzMzY0NTMiDNkisbvNY4mg4j1EbSrFAnOgwZ4lChf3sSFOu5MAUJMecmk6OyHI3PGeKQC4DRajORWk8YBqAVsEOk%2F33wNZXd3CnrwEW7zW0zfGKqRUP8DO342vP3Bvit3Rud7vETPyDjdXrk%2FE5E5KWpuYAt%2Bbgio42jRHXdgTtqWOoofWdiMm%2B%2F47iVa15wlSchKF9yda3hPPDbcGd5uGB4Eyoodh7pv5LTWNikEzhwSjZJ7Hei7BdH4%2FfmrnGi%2By9vVqG25psUFxN2phd%2FcVCD%2B2l3ROhaE3WaOuYR1%2BUy6XW2w5KEKX8YCh9%2FCTgbfchqr0C4ikh4Srw6abQijHUQ9owatHzj0ymuCUtWrbwJ3SmohBuWPvp7zfQqrQsqVTz9Mbv%2B79GyX9ygd7veFvyrVsKReIo4v6UAsgr%2F00EQcOxTHjiTePimlKIKEgr%2FV0P1tkyL3lqjOar0cwkomwsgY6sgIdPqcBRuvzniimg%2BiTvAG%2Fi4mFBaX3bpJb9IC0be7OG0CaT1rSXqCUadoO4IRGVOJK6778CUt%2FSd0a4FQoq%2FPlMF754472%2FlTMYvuUKmFZgkvEPpKLVekSPKX32ehJaDdKeKCjyt8vNicBaNVHf2iKJ7MC5HfeEEKzskZfCEkaDkxDwbg3BAunqEU4obHbTpHTiQuGyYaKBS3wz7K85dxCshieg8FCIVEDqFAZhQSRkchJhCVgzYGuFRJa5cUMpU%2F9lIjFOhfuC0rBuYQncox2Oct1EtUVZ5R%2FdZlcCeKxNZn%2BoUx0r7NcCSmrH4r9ClYaTVmHC1pztujE%2BhdeGZPHaG%2BVKI77HWLqz4HcO9aGoAUt92a1HWlFiEeSaq8OWHZkD5DyFcvy1uLAhdmYKqVE6dk%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240521T040612Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIA5FTZDNDCU7KRRFGE%2F20240521%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=65000274889d6653bb8279a3b5c03b94b03142fe30e0bba3f5bc9b216fb374a5`,
  },
  {
    id: 'USR-009',
    name: 'Log2',
    avatar: '/assets/avatar-9.png',
    email: 'marcus.finn@devias.io',
    phone: '415-907-2647',
    address: '조치 중',
    createdAt: dayjs().subtract(2, 'hours').toDate(),
    url : `https://ilzzo-forensic-artifact.s3.ap-northeast-2.amazonaws.com/i-0a8940225e7a32b18/2024-05-07_21%3A00%3A00/result.txt?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLW5vcnRoZWFzdC0yIkgwRgIhAKhRKF5ObB2ACh%2BvdhClDR0UN3133SUOYnXTw8T5FDFBAiEAwctmylz3GKEBa1F%2B0lIG6%2BBi9921X3KQ5%2F0l4qd%2FkYoq6AIIPRAAGgw5MDU0MTgzMzY0NTMiDNkisbvNY4mg4j1EbSrFAnOgwZ4lChf3sSFOu5MAUJMecmk6OyHI3PGeKQC4DRajORWk8YBqAVsEOk%2F33wNZXd3CnrwEW7zW0zfGKqRUP8DO342vP3Bvit3Rud7vETPyDjdXrk%2FE5E5KWpuYAt%2Bbgio42jRHXdgTtqWOoofWdiMm%2B%2F47iVa15wlSchKF9yda3hPPDbcGd5uGB4Eyoodh7pv5LTWNikEzhwSjZJ7Hei7BdH4%2FfmrnGi%2By9vVqG25psUFxN2phd%2FcVCD%2B2l3ROhaE3WaOuYR1%2BUy6XW2w5KEKX8YCh9%2FCTgbfchqr0C4ikh4Srw6abQijHUQ9owatHzj0ymuCUtWrbwJ3SmohBuWPvp7zfQqrQsqVTz9Mbv%2B79GyX9ygd7veFvyrVsKReIo4v6UAsgr%2F00EQcOxTHjiTePimlKIKEgr%2FV0P1tkyL3lqjOar0cwkomwsgY6sgIdPqcBRuvzniimg%2BiTvAG%2Fi4mFBaX3bpJb9IC0be7OG0CaT1rSXqCUadoO4IRGVOJK6778CUt%2FSd0a4FQoq%2FPlMF754472%2FlTMYvuUKmFZgkvEPpKLVekSPKX32ehJaDdKeKCjyt8vNicBaNVHf2iKJ7MC5HfeEEKzskZfCEkaDkxDwbg3BAunqEU4obHbTpHTiQuGyYaKBS3wz7K85dxCshieg8FCIVEDqFAZhQSRkchJhCVgzYGuFRJa5cUMpU%2F9lIjFOhfuC0rBuYQncox2Oct1EtUVZ5R%2FdZlcCeKxNZn%2BoUx0r7NcCSmrH4r9ClYaTVmHC1pztujE%2BhdeGZPHaG%2BVKI77HWLqz4HcO9aGoAUt92a1HWlFiEeSaq8OWHZkD5DyFcvy1uLAhdmYKqVE6dk%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240521T040612Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIA5FTZDNDCU7KRRFGE%2F20240521%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=65000274889d6653bb8279a3b5c03b94b03142fe30e0bba3f5bc9b216fb374a5`,
  },
  {
    id: 'USR-008',
    name: 'Log3',
    avatar: '/assets/avatar-8.png',
    email: 'jie.yan.song@devias.io',
    phone: '770-635-2682',
    address: '격리됨',
    createdAt: dayjs().subtract(2, 'hours').toDate(),
    url : `https://ilzzo-forensic-artifact.s3.ap-northeast-2.amazonaws.com/i-0a8940225e7a32b18/2024-05-07_21%3A00%3A00/result.txt?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLW5vcnRoZWFzdC0yIkgwRgIhAKhRKF5ObB2ACh%2BvdhClDR0UN3133SUOYnXTw8T5FDFBAiEAwctmylz3GKEBa1F%2B0lIG6%2BBi9921X3KQ5%2F0l4qd%2FkYoq6AIIPRAAGgw5MDU0MTgzMzY0NTMiDNkisbvNY4mg4j1EbSrFAnOgwZ4lChf3sSFOu5MAUJMecmk6OyHI3PGeKQC4DRajORWk8YBqAVsEOk%2F33wNZXd3CnrwEW7zW0zfGKqRUP8DO342vP3Bvit3Rud7vETPyDjdXrk%2FE5E5KWpuYAt%2Bbgio42jRHXdgTtqWOoofWdiMm%2B%2F47iVa15wlSchKF9yda3hPPDbcGd5uGB4Eyoodh7pv5LTWNikEzhwSjZJ7Hei7BdH4%2FfmrnGi%2By9vVqG25psUFxN2phd%2FcVCD%2B2l3ROhaE3WaOuYR1%2BUy6XW2w5KEKX8YCh9%2FCTgbfchqr0C4ikh4Srw6abQijHUQ9owatHzj0ymuCUtWrbwJ3SmohBuWPvp7zfQqrQsqVTz9Mbv%2B79GyX9ygd7veFvyrVsKReIo4v6UAsgr%2F00EQcOxTHjiTePimlKIKEgr%2FV0P1tkyL3lqjOar0cwkomwsgY6sgIdPqcBRuvzniimg%2BiTvAG%2Fi4mFBaX3bpJb9IC0be7OG0CaT1rSXqCUadoO4IRGVOJK6778CUt%2FSd0a4FQoq%2FPlMF754472%2FlTMYvuUKmFZgkvEPpKLVekSPKX32ehJaDdKeKCjyt8vNicBaNVHf2iKJ7MC5HfeEEKzskZfCEkaDkxDwbg3BAunqEU4obHbTpHTiQuGyYaKBS3wz7K85dxCshieg8FCIVEDqFAZhQSRkchJhCVgzYGuFRJa5cUMpU%2F9lIjFOhfuC0rBuYQncox2Oct1EtUVZ5R%2FdZlcCeKxNZn%2BoUx0r7NcCSmrH4r9ClYaTVmHC1pztujE%2BhdeGZPHaG%2BVKI77HWLqz4HcO9aGoAUt92a1HWlFiEeSaq8OWHZkD5DyFcvy1uLAhdmYKqVE6dk%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240521T040612Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIA5FTZDNDCU7KRRFGE%2F20240521%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=65000274889d6653bb8279a3b5c03b94b03142fe30e0bba3f5bc9b216fb374a5`,
  },
  {
    id: 'USR-007',
    name: 'Log4',
    avatar: '/assets/avatar-7.png',
    email: 'nasimiyu.danai@devias.io',
    phone: '801-301-7894',
    address: '격리됨',
    createdAt: dayjs().subtract(2, 'hours').toDate(),
    url : `https://ilzzo-forensic-artifact.s3.ap-northeast-2.amazonaws.com/i-0a8940225e7a32b18/2024-05-07_21%3A00%3A00/result.txt?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLW5vcnRoZWFzdC0yIkgwRgIhAKhRKF5ObB2ACh%2BvdhClDR0UN3133SUOYnXTw8T5FDFBAiEAwctmylz3GKEBa1F%2B0lIG6%2BBi9921X3KQ5%2F0l4qd%2FkYoq6AIIPRAAGgw5MDU0MTgzMzY0NTMiDNkisbvNY4mg4j1EbSrFAnOgwZ4lChf3sSFOu5MAUJMecmk6OyHI3PGeKQC4DRajORWk8YBqAVsEOk%2F33wNZXd3CnrwEW7zW0zfGKqRUP8DO342vP3Bvit3Rud7vETPyDjdXrk%2FE5E5KWpuYAt%2Bbgio42jRHXdgTtqWOoofWdiMm%2B%2F47iVa15wlSchKF9yda3hPPDbcGd5uGB4Eyoodh7pv5LTWNikEzhwSjZJ7Hei7BdH4%2FfmrnGi%2By9vVqG25psUFxN2phd%2FcVCD%2B2l3ROhaE3WaOuYR1%2BUy6XW2w5KEKX8YCh9%2FCTgbfchqr0C4ikh4Srw6abQijHUQ9owatHzj0ymuCUtWrbwJ3SmohBuWPvp7zfQqrQsqVTz9Mbv%2B79GyX9ygd7veFvyrVsKReIo4v6UAsgr%2F00EQcOxTHjiTePimlKIKEgr%2FV0P1tkyL3lqjOar0cwkomwsgY6sgIdPqcBRuvzniimg%2BiTvAG%2Fi4mFBaX3bpJb9IC0be7OG0CaT1rSXqCUadoO4IRGVOJK6778CUt%2FSd0a4FQoq%2FPlMF754472%2FlTMYvuUKmFZgkvEPpKLVekSPKX32ehJaDdKeKCjyt8vNicBaNVHf2iKJ7MC5HfeEEKzskZfCEkaDkxDwbg3BAunqEU4obHbTpHTiQuGyYaKBS3wz7K85dxCshieg8FCIVEDqFAZhQSRkchJhCVgzYGuFRJa5cUMpU%2F9lIjFOhfuC0rBuYQncox2Oct1EtUVZ5R%2FdZlcCeKxNZn%2BoUx0r7NcCSmrH4r9ClYaTVmHC1pztujE%2BhdeGZPHaG%2BVKI77HWLqz4HcO9aGoAUt92a1HWlFiEeSaq8OWHZkD5DyFcvy1uLAhdmYKqVE6dk%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240521T040612Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIA5FTZDNDCU7KRRFGE%2F20240521%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=65000274889d6653bb8279a3b5c03b94b03142fe30e0bba3f5bc9b216fb374a5`,
  },
  {
    id: 'USR-006',
    name: 'Log5',
    avatar: '/assets/avatar-6.png',
    email: 'iulia.albu@devias.io',
    phone: '313-812-8947',
    address: '격리됨',
    createdAt: dayjs().subtract(2, 'hours').toDate(),
    url : `https://ilzzo-forensic-artifact.s3.ap-northeast-2.amazonaws.com/i-0a8940225e7a32b18/2024-05-07_21%3A00%3A00/result.txt?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLW5vcnRoZWFzdC0yIkgwRgIhAKhRKF5ObB2ACh%2BvdhClDR0UN3133SUOYnXTw8T5FDFBAiEAwctmylz3GKEBa1F%2B0lIG6%2BBi9921X3KQ5%2F0l4qd%2FkYoq6AIIPRAAGgw5MDU0MTgzMzY0NTMiDNkisbvNY4mg4j1EbSrFAnOgwZ4lChf3sSFOu5MAUJMecmk6OyHI3PGeKQC4DRajORWk8YBqAVsEOk%2F33wNZXd3CnrwEW7zW0zfGKqRUP8DO342vP3Bvit3Rud7vETPyDjdXrk%2FE5E5KWpuYAt%2Bbgio42jRHXdgTtqWOoofWdiMm%2B%2F47iVa15wlSchKF9yda3hPPDbcGd5uGB4Eyoodh7pv5LTWNikEzhwSjZJ7Hei7BdH4%2FfmrnGi%2By9vVqG25psUFxN2phd%2FcVCD%2B2l3ROhaE3WaOuYR1%2BUy6XW2w5KEKX8YCh9%2FCTgbfchqr0C4ikh4Srw6abQijHUQ9owatHzj0ymuCUtWrbwJ3SmohBuWPvp7zfQqrQsqVTz9Mbv%2B79GyX9ygd7veFvyrVsKReIo4v6UAsgr%2F00EQcOxTHjiTePimlKIKEgr%2FV0P1tkyL3lqjOar0cwkomwsgY6sgIdPqcBRuvzniimg%2BiTvAG%2Fi4mFBaX3bpJb9IC0be7OG0CaT1rSXqCUadoO4IRGVOJK6778CUt%2FSd0a4FQoq%2FPlMF754472%2FlTMYvuUKmFZgkvEPpKLVekSPKX32ehJaDdKeKCjyt8vNicBaNVHf2iKJ7MC5HfeEEKzskZfCEkaDkxDwbg3BAunqEU4obHbTpHTiQuGyYaKBS3wz7K85dxCshieg8FCIVEDqFAZhQSRkchJhCVgzYGuFRJa5cUMpU%2F9lIjFOhfuC0rBuYQncox2Oct1EtUVZ5R%2FdZlcCeKxNZn%2BoUx0r7NcCSmrH4r9ClYaTVmHC1pztujE%2BhdeGZPHaG%2BVKI77HWLqz4HcO9aGoAUt92a1HWlFiEeSaq8OWHZkD5DyFcvy1uLAhdmYKqVE6dk%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240521T040612Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIA5FTZDNDCU7KRRFGE%2F20240521%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=65000274889d6653bb8279a3b5c03b94b03142fe30e0bba3f5bc9b216fb374a5`,
  },
  {
    id: 'USR-005',
    name: 'Fran Perez',
    avatar: '/assets/avatar-5.png',
    email: 'fran.perez@devias.io',
    phone: '712-351-5711',
    address: 'Action4',
    createdAt: dayjs().subtract(2, 'hours').toDate(),
    url: 'asdfsdf',
  },

  {
    id: 'USR-004',
    name: 'Penjani Inyene',
    avatar: '/assets/avatar-4.png',
    email: 'penjani.inyene@devias.io',
    phone: '858-602-3409',
    address: 'Action4',
    createdAt: dayjs().subtract(2, 'hours').toDate(),
    url: 'asdfsdf',
  },
  {
    id: 'USR-003',
    name: 'Carson Darrin',
    avatar: '/assets/avatar-3.png',
    email: 'carson.darrin@devias.io',
    phone: '304-428-3097',
    address: 'Action4',
    createdAt: dayjs().subtract(2, 'hours').toDate(),
    url: 'asdfsdf',
  },
  {
    id: 'USR-002',
    name: 'Siegbert Gottfried',
    avatar: '/assets/avatar-2.png',
    email: 'siegbert.gottfried@devias.io',
    phone: '702-661-1654',
    address: 'Action4',
    createdAt: dayjs().subtract(2, 'hours').toDate(),
    url: 'asdfsdf',
  },
  {
    id: 'USR-001',
    name: 'Miron Vitold',
    avatar: '/assets/avatar-1.png',
    email: 'miron.vitold@devias.io',
    phone: '972-333-4106',
    address: 'Action4',
    createdAt: dayjs().subtract(2, 'hours').toDate(),
    url: 'asdfsdf',
  },
] satisfies Customer[];

export default function Page(): React.JSX.Element {
  const page = 0;
  const rowsPerPage = 5;

  const paginatedCustomers = applyPagination(customers, page, rowsPerPage);

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Detected Threats</Typography>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            Click the name to see the full log.
          </Stack>
        </Stack>
        <div>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Add
          </Button>
        </div>
      </Stack>
      <CustomersFilters />
      <CustomersTable
        count={paginatedCustomers.length}
        page={page}
        rows={paginatedCustomers}
        rowsPerPage={rowsPerPage}
      />
    </Stack>
  );
}

function applyPagination(rows: Customer[], page: number, rowsPerPage: number): Customer[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
