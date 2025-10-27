import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Card,
  InputAdornment,
} from "@mui/material";
import {
  Search as SearchIcon,
} from "@mui/icons-material";

export default function StaffMarkBulkAttendance() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedYear, setSelectedYear] = useState("Feb 2028 - Mar 2024");

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Mark Bulk Attendance
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Mark attendance for multiple staff members across a date range
        </Typography>
      </Box>

      {/* Filters */}
      <Card sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 3 }}>
          <FormControl fullWidth>
            <InputLabel>Academic Year *</InputLabel>
            <Select value={selectedYear} label="Academic Year *" onChange={(e) => setSelectedYear(e.target.value)}>
              <MenuItem value="Feb 2028 - Mar 2024">Feb 2028 - Mar 2024</MenuItem>
              <MenuItem value="Apr 2025 - Mar 2026">Apr 2025 - Mar 2026</MenuItem>
              <MenuItem value="Apr 2024 - Mar 2025">Apr 2024 - Mar 2025</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="From Date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            fullWidth
            label="To Date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />

          <FormControl fullWidth>
            <InputLabel>Select Staff Type</InputLabel>
            <Select defaultValue="all" label="Select Staff Type">
              <MenuItem value="all">All Staff</MenuItem>
              <MenuItem value="teaching">Teaching</MenuItem>
              <MenuItem value="non-teaching">Non-Teaching</MenuItem>
              <MenuItem value="driver">Driver/Supporting</MenuItem>
              <MenuItem value="others">Others</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Search Staff"
            placeholder="Search by name or ID..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          <Box sx={{ display: "flex", alignItems: "end" }}>
            <Button variant="contained" fullWidth>
              Apply Filters
            </Button>
          </Box>
        </Box>
      </Card>

      {/* Empty State */}
      <Card sx={{ p: 8, textAlign: "center" }}>
        <Box sx={{ maxWidth: 500, mx: "auto" }}>
          <Typography variant="h1" sx={{ mb: 2 }}>
            📋
          </Typography>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            No Data Available
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            Select the date range and staff type to view and mark bulk attendance
          </Typography>
          <Typography variant="body2" color="text.secondary">
            💡 Tip: You can mark attendance for multiple staff members at once by selecting a date range
          </Typography>
        </Box>
      </Card>

      {/* Instructions */}
      <Card sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" fontWeight="600" gutterBottom>
          How to Mark Bulk Attendance
        </Typography>
        <Box component="ol" sx={{ pl: 2, "& li": { mb: 2 } }}>
          <li>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography fontWeight="600" color="primary">1.</Typography>
              <Typography>Select the academic year and date range for which you want to mark attendance.</Typography>
            </Box>
          </li>
          <li>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography fontWeight="600" color="primary">2.</Typography>
              <Typography>Choose the staff type or search for specific staff members.</Typography>
            </Box>
          </li>
          <li>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography fontWeight="600" color="primary">3.</Typography>
              <Typography>Click "Apply Filters" to load the staff list.</Typography>
            </Box>
          </li>
          <li>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography fontWeight="600" color="primary">4.</Typography>
              <Typography>Mark attendance status for all displayed staff members.</Typography>
            </Box>
          </li>
          <li>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography fontWeight="600" color="primary">5.</Typography>
              <Typography>Submit the bulk attendance to save the records.</Typography>
            </Box>
          </li>
        </Box>
      </Card>
    </Box>
  );
}
