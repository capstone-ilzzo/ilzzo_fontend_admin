import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from 'dayjs';

import { config } from '@/config';
import { Budget } from '@/components/dashboard/overview/budget';
import { LatestOrders } from '@/components/dashboard/overview/latest-orders';
import { Sales } from '@/components/dashboard/overview/sales';
import { TasksProgress } from '@/components/dashboard/overview/tasks-progress';
import { TotalCustomers } from '@/components/dashboard/overview/total-customers';
import { TotalProfit } from '@/components/dashboard/overview/total-profit';
import { Traffic } from '@/components/dashboard/overview/traffic';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Grid container spacing={3}>
      <Grid lg={3} sm={6} xs={12}>
        <Budget diff={12} trend="up" sx={{ height: '100%' }} value="$24" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <TotalCustomers diff={16} trend="down" sx={{ height: '100%' }} value="16" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <TasksProgress sx={{ height: '100%' }} value={100} />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <TotalProfit sx={{ height: '100%' }} value="15" />
      </Grid>
      <Grid lg={8} xs={12}>
        <Sales
          chartSeries={[
            { name: 'This year', data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20] },
            { name: 'Last year', data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13] },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
      <Grid lg={4} md={6} xs={12}>
        <Traffic chartSeries={[63, 15, 22]} labels={['심각', '관심', '주의']} sx={{ height: '100%' }} />
      </Grid>
      <Grid lg={8} md={12} xs={12}>
        <LatestOrders
          orders={[
            {
              id: '7',
              customer: { name: 'UnauthorizedAccess:EC2/SSHBruteForce' },
              amount: 30.5,
              status: '주의',
              createdAt: dayjs().set('date', 7).subtract(10, 'minutes').toDate(),
            },
            {
              id: '5',
              customer: { name: 'Policy:IAMUser/RootCredentialUsage' },
              amount: 25.1,
              status: '관심',
              createdAt: dayjs().set('date', 6).subtract(10, 'minutes').toDate(),
            },
            {
              id: '8',
              customer: { name: 'Execution:Runtime/ReverseShell' },
              amount: 10.99,
              status: '심각',
              createdAt: dayjs().set('date', 5).subtract(10, 'minutes').toDate(),
            },
            {
              id: '7',
              customer: { name: 'UnauthorizedAccess:EC2/SSHBruteForce' },
              amount: 96.43,
              status: '주의',
              createdAt: dayjs().set('date', 4).subtract(10, 'minutes').toDate(),
            },
            {
              id: '5',
              customer: { name: 'Policy:IAMUser/RootCredentialUsage' },
              amount: 32.54,
              status: '관심',
              createdAt: dayjs().set('date', 3).subtract(10, 'minutes').toDate(),
            },
            {
              id: '5',
              customer: { name: 'Policy:IAMUser/RootCredentialUsage' },
              amount: 16.76,
              status: '관심',
              createdAt: dayjs().set('date', 2).subtract(10, 'minutes').toDate(),
            },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
    </Grid>
  );
}
