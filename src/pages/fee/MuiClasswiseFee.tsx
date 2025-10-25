import { useState, useMemo } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  Chip,
  Button,
  Stack,
} from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Download, Refresh } from '@mui/icons-material';

// Mock data
const mockData = [
  { id: 1, class: 'Class 1', section: 'A', feeType: 'Day Scholar', status: 'Active', installments: 4, totalAmount: 25000, dueAmount: 5000 },
  { id: 2, class: 'Class 1', section: 'B', feeType: 'Hosteler', status: 'Active', installments: 4, totalAmount: 45000, dueAmount: 10000 },
  { id: 3, class: 'Class 2', section: 'A', feeType: 'Day Scholar', status: 'Active', installments: 4, totalAmount: 27000, dueAmount: 7000 },
  { id: 4, class: 'Class 2', section: 'B', feeType: 'Hosteler', status: 'Inactive', installments: 4, totalAmount: 47000, dueAmount: 0 },
  { id: 5, class: 'Class 3', section: 'A', feeType: 'Day Scholar', status: 'Active', installments: 4, totalAmount: 30000, dueAmount: 8000 },
  { id: 6, class: 'Class 3', section: 'B', feeType: 'Hosteler', status: 'Active', installments: 4, totalAmount: 50000, dueAmount: 12000 },
  { id: 7, class: 'Class 4', section: 'A', feeType: 'Day Scholar', status: 'Active', installments: 4, totalAmount: 32000, dueAmount: 6000 },
  { id: 8, class: 'Class 4', section: 'B', feeType: 'Hosteler', status: 'Active', installments: 4, totalAmount: 52000, dueAmount: 13000 },
];

export default function MuiClasswiseFee() {
  const [academicYear, setAcademicYear] = useState('2024-25');
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedSection, setSelectedSection] = useState('all');
  const [feeType, setFeeType] = useState('all');

  // Filter data
  const filteredData = useMemo(() => {
    return mockData.filter(item => {
      if (selectedClass !== 'all' && item.class !== selectedClass) return false;
      if (selectedSection !== 'all' && item.section !== selectedSection) return false;
      if (feeType !== 'all' && item.feeType !== feeType) return false;
      return true;
    });
  }, [selectedClass, selectedSection, feeType]);

  // Calculate summary
  const summary = useMemo(() => {
    return filteredData.reduce((acc, item) => ({
      totalAmount: acc.totalAmount + item.totalAmount,
      totalDue: acc.totalDue + item.dueAmount,
      activeCount: acc.activeCount + (item.status === 'Active' ? 1 : 0),
    }), { totalAmount: 0, totalDue: 0, activeCount: 0 });
  }, [filteredData]);

  const columns: GridColDef[] = [
    { field: 'class', headerName: 'Class', width: 130 },
    { field: 'section', headerName: 'Section', width: 100 },
    { field: 'feeType', headerName: 'Fee Type', width: 150 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={params.value === 'Active' ? 'success' : 'default'}
          size="small"
        />
      ),
    },
    { field: 'installments', headerName: 'Installments', width: 130, type: 'number' },
    {
      field: 'totalAmount',
      headerName: 'Total Amount',
      width: 150,
      type: 'number',
      valueFormatter: (value) => `₹${value?.toLocaleString()}`,
    },
    {
      field: 'dueAmount',
      headerName: 'Due Amount',
      width: 150,
      type: 'number',
      valueFormatter: (value) => `₹${value?.toLocaleString()}`,
    },
  ];

  return (
    <Box>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" fontWeight={600}>
          Class-wise Fee Management
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<Refresh />}>
            Refresh
          </Button>
          <Button variant="contained" startIcon={<Download />}>
            Export
          </Button>
        </Stack>
      </Box>

      {/* Filters */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Filters
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>Academic Year</InputLabel>
              <Select
                value={academicYear}
                label="Academic Year"
                onChange={(e) => setAcademicYear(e.target.value)}
              >
                <MenuItem value="2024-25">2024-25</MenuItem>
                <MenuItem value="2023-24">2023-24</MenuItem>
                <MenuItem value="2022-23">2022-23</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>Class</InputLabel>
              <Select
                value={selectedClass}
                label="Class"
                onChange={(e) => setSelectedClass(e.target.value)}
              >
                <MenuItem value="all">All Classes</MenuItem>
                <MenuItem value="Class 1">Class 1</MenuItem>
                <MenuItem value="Class 2">Class 2</MenuItem>
                <MenuItem value="Class 3">Class 3</MenuItem>
                <MenuItem value="Class 4">Class 4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>Section</InputLabel>
              <Select
                value={selectedSection}
                label="Section"
                onChange={(e) => setSelectedSection(e.target.value)}
              >
                <MenuItem value="all">All Sections</MenuItem>
                <MenuItem value="A">Section A</MenuItem>
                <MenuItem value="B">Section B</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>Fee Type</InputLabel>
              <Select
                value={feeType}
                label="Fee Type"
                onChange={(e) => setFeeType(e.target.value)}
              >
                <MenuItem value="all">All Types</MenuItem>
                <MenuItem value="Day Scholar">Day Scholar</MenuItem>
                <MenuItem value="Hosteler">Hosteler</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      {/* Summary Cards */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Total Classes
              </Typography>
              <Typography variant="h4" fontWeight={600}>
                {summary.activeCount}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Active fee structures
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Total Amount
              </Typography>
              <Typography variant="h4" fontWeight={600} color="primary">
                ₹{summary.totalAmount.toLocaleString()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total fee receivable
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Total Due
              </Typography>
              <Typography variant="h4" fontWeight={600} color="error">
                ₹{summary.totalDue.toLocaleString()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Pending collections
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* DataGrid */}
      <Paper sx={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={filteredData}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10, 25, 50]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Paper>
    </Box>
  );
}
