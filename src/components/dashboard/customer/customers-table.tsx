'use client';

import * as React from 'react';
import './Link.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';

function noop(): void {
  // do nothing
}

export interface Customer {
  id: string;
  avatar: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  createdAt: Date;
  url: string;
}

interface CustomersTableProps {
  count?: number;
  page?: number;
  rows?: Customer[];
  rowsPerPage?: number;
}

export function CustomersTable({
                                 count = 0,
                                 rows = [],
                                 page = 0,
                                 rowsPerPage = 0,
                               }: CustomersTableProps): React.JSX.Element {
  return (
    <Card>
      <Box sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: '800px' }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Current Status</TableCell>
              <TableCell>Log Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow hover key={row.id}>
                <TableCell>
                  <Stack sx={{alignItems: 'center'}} direction="row" spacing={2}>
                    <a href={row.url} target="_blank" rel="noopener noreferrer" className="link">
                      <Typography variant="subtitle2">
                        {row.name}
                      </Typography>
                    </a>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Typography
                    component="span"
                    sx={{
                      display: 'inline-block',
                      padding: '4px 8px',
                      borderRadius: '20px',
                      backgroundColor: row.address === '격리됨' ? 'green' : row.address === '조치 중' ? 'red' : 'inherit',
                      color: 'white',
                      fontWeight: 'bold'
                    }}
                  >
                    {row.address}
                  </Typography>
                </TableCell>
                <TableCell>{dayjs(row.createdAt).format('MMM D, YYYY')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <TablePagination
        component="div"
        count={count}
        onPageChange={noop}
        onRowsPerPageChange={noop}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
}

