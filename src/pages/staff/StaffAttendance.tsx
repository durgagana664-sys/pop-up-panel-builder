import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
} from "@mui/material";
import {
  Download as DownloadIcon,
  CheckCircle,
  Cancel,
  Circle,
} from "@mui/icons-material";

export default function StaffAttendance() {
  const [date, setDate] = useState("2025-10-22");
  const [selectedYear, setSelectedYear] = useState("Apr 2025 - Mar 2026");

  const isHoliday = true;

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Staff Attendance
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Mark and view staff attendance records
        </Typography>
      </Box>

      {/* Filters */}
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" }, gap: 2, mb: 3 }}>
        <FormControl fullWidth>
          <InputLabel>Academic Year *</InputLabel>
          <Select value={selectedYear} label="Academic Year *" onChange={(e) => setSelectedYear(e.target.value)}>
            <MenuItem value="Apr 2025 - Mar 2026">Apr 2025 - Mar 2026</MenuItem>
            <MenuItem value="Apr 2024 - Mar 2025">Apr 2024 - Mar 2025</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Pick Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />

        <TextField fullWidth label="Search" placeholder="Search staff..." />

        <FormControl fullWidth>
          <InputLabel>Select Staff Type</InputLabel>
          <Select defaultValue="all" label="Select Staff Type">
            <MenuItem value="all">All staffs</MenuItem>
            <MenuItem value="teaching">Teaching</MenuItem>
            <MenuItem value="non-teaching">Non-Teaching</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Select Status</InputLabel>
          <Select defaultValue="all" label="Select Status">
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="present">Present</MenuItem>
            <MenuItem value="absent">Absent</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Filter by department</InputLabel>
          <Select defaultValue="all" label="Filter by department">
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="mathematics">Mathematics</MenuItem>
            <MenuItem value="science">Science</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button variant="outlined" fullWidth>VIEW EXCEL</Button>
          <Button variant="outlined" fullWidth startIcon={<DownloadIcon />}>DOWNLOAD</Button>
        </Box>

        <Button variant="outlined" fullWidth>SHOW LOGS</Button>
      </Box>

      {/* Status Cards */}
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(5, 1fr)" }, gap: 2, mb: 3 }}>
        <Card sx={{ p: 2, bgcolor: "#e8f5e9", borderColor: "#4caf50", border: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CheckCircle sx={{ color: "#4caf50" }} />
            <Box>
              <Typography variant="h4" fontWeight="bold">0</Typography>
              <Typography variant="body2" color="text.secondary">Present</Typography>
            </Box>
          </Box>
        </Card>

        <Card sx={{ p: 2, bgcolor: "#ffebee", borderColor: "#f44336", border: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Cancel sx={{ color: "#f44336" }} />
            <Box>
              <Typography variant="h4" fontWeight="bold">0</Typography>
              <Typography variant="body2" color="text.secondary">Absent</Typography>
            </Box>
          </Box>
        </Card>

        <Card sx={{ p: 2, bgcolor: "#fff3e0", borderColor: "#ff9800", border: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Circle sx={{ color: "#ff9800" }} />
            <Box>
              <Typography variant="h4" fontWeight="bold">0</Typography>
              <Typography variant="body2" color="text.secondary">HalfDay</Typography>
            </Box>
          </Box>
        </Card>

        <Card sx={{ p: 2, bgcolor: "#e3f2fd", borderColor: "#2196f3", border: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Circle sx={{ color: "#2196f3" }} />
            <Box>
              <Typography variant="h4" fontWeight="bold">0</Typography>
              <Typography variant="body2" color="text.secondary">Leave</Typography>
            </Box>
          </Box>
        </Card>

        <Card sx={{ p: 2, bgcolor: "#f5f5f5", borderColor: "#9e9e9e", border: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Circle sx={{ color: "#9e9e9e" }} />
            <Box>
              <Typography variant="h4" fontWeight="bold">46</Typography>
              <Typography variant="body2" color="text.secondary">NOT MARKED</Typography>
            </Box>
          </Box>
        </Card>
      </Box>

      {/* Holiday Message */}
      {isHoliday && (
        <Card sx={{ p: 6, textAlign: "center", bgcolor: "#fff3e0", borderColor: "#ff9800", border: 1 }}>
          <Box sx={{ maxWidth: 500, mx: "auto" }}>
            <Typography variant="h1" sx={{ mb: 2 }}>📦</Typography>
            <Typography variant="h5" fontWeight="bold" gutterBottom>Holiday</Typography>
            <Typography color="text.secondary">
              It's a Holiday on {new Date(date).toLocaleDateString()}. You cannot mark attendance.
            </Typography>
          </Box>
        </Card>
      )}
    </Box>
  );
}
