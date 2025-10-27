import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Tabs,
  Tab,
  Avatar,
  IconButton,
  Chip,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  Search as SearchIcon,
  Download as DownloadIcon,
  Edit as EditIcon,
  PersonAdd as PersonAddIcon,
  ContentCopy as ContentCopyIcon,
} from "@mui/icons-material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const mockStaffData = [
  { id: "Tanisha11", name: "Tanisha Thakur", designation: "Teacher", qualification: "M.Ed", department: "Mathematics", mobile: "8219660604", email: "tanisha@edulinker.com", photo: "" },
  { id: "Ritika 001", name: "Ritika", designation: "Teacher", qualification: "B.Ed", department: "Science", mobile: "8219665050", email: "ritika@edulinker.com", photo: "" },
  { id: "Jassica 002", name: "Jassica", designation: "Teacher", qualification: "M.A", department: "English", mobile: "8819660601", email: "Jassica000@js.com", photo: "" },
  { id: "poonam003", name: "Poonam", designation: "Principal", qualification: "Ph.D", department: "Administration", mobile: "8200060600", email: "punam99@gmail.com", photo: "" },
  { id: "Dev004", name: "Dev Raaj", designation: "Teacher", qualification: "B.Sc", department: "Physics", mobile: "5019660000", email: "dev.w@dev.com", photo: "" },
];

export default function StaffDirectory() {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const filteredStaff = mockStaffData.filter(staff => {
    const matchesSearch = staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "Staff ID",
      width: 130,
      sortable: true,
    },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Avatar sx={{ width: 32, height: 32 }}>
            {params.row.name.split(' ').map((n: string) => n[0]).join('')}
          </Avatar>
          <Typography variant="body2">{params.value}</Typography>
        </Box>
      ),
    },
    {
      field: "designation",
      headerName: "Designation",
      width: 150,
    },
    {
      field: "qualification",
      headerName: "Highest Qualification",
      width: 180,
    },
    {
      field: "department",
      headerName: "Department",
      width: 150,
    },
    {
      field: "mobile",
      headerName: "Mobile",
      width: 180,
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2">{params.value}</Typography>
          <IconButton size="small" onClick={() => navigator.clipboard.writeText(params.value)}>
            <ContentCopyIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Box>
      ),
    },
    {
      field: "email",
      headerName: "E-mail",
      width: 220,
      renderCell: (params) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2">{params.value}</Typography>
          <IconButton size="small" onClick={() => navigator.clipboard.writeText(params.value)}>
            <ContentCopyIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Box>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <IconButton size="small" color="primary">
          <EditIcon sx={{ fontSize: 20 }} />
        </IconButton>
      ),
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      {/* Page Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h4" fontWeight="bold">
          Staff Directory
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Chip label="ACTIVE STAFF" color="primary" variant="outlined" />
          <Chip label="DEACTIVATED STAFF" variant="outlined" />
          <Link to="/staff/addstaff" style={{ textDecoration: "none" }}>
            <Button variant="contained" startIcon={<PersonAddIcon />}>
              Add Staff
            </Button>
          </Link>
        </Box>
      </Box>

      {/* Filter Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue)}>
          <Tab label="TEACHING" />
          <Tab label="NON-TEACHING" />
          <Tab label="DRIVER/SUPPORTING STAFF" />
          <Tab label="OTHERS" />
          <Tab label="ADMIN" />
        </Tabs>
      </Box>

      {/* Search and Filters */}
      <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
        <TextField
          placeholder="Search by name, ID, or email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ flexGrow: 1, maxWidth: 400 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>All Departments</InputLabel>
          <Select
            value={selectedDepartment}
            label="All Departments"
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <MenuItem value="all">All Departments</MenuItem>
            <MenuItem value="mathematics">Mathematics</MenuItem>
            <MenuItem value="science">Science</MenuItem>
            <MenuItem value="english">English</MenuItem>
          </Select>
        </FormControl>
        <Button variant="outlined">SHOW LOGS</Button>
        <Button variant="outlined" startIcon={<DownloadIcon />}>
          DOWNLOAD/VIEW
        </Button>
      </Box>

      {/* Staff Table */}
      <Box sx={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={filteredStaff}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10, 25, 50]}
          checkboxSelection
          disableRowSelectionOnClick
          sx={{
            border: 1,
            borderColor: "divider",
            "& .MuiDataGrid-cell": {
              borderColor: "divider",
            },
          }}
        />
      </Box>
    </Box>
  );
}
