import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  InputLabel,
  Card,
  Stack,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  CloudUpload,
} from "@mui/icons-material";
import { toast } from "sonner";

export default function AddStaff() {
  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    dob: "",
    mobile: "",
    whatsapp: "",
    email: "",
    fatherName: "",
    gender: "male",
    maritalStatus: "single",
    race: "",
    religion: "",
    employeeId: "",
    biometricId: "",
    joiningDate: "",
    qualification: "",
    department: "",
  });

  const [photoFile, setPhotoFile] = useState<File | null>(null);

  const handleChange = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhotoFile(e.target.files[0]);
      toast.success("Photo uploaded successfully!");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    toast.success("Staff member added successfully!");
  };

  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: "auto" }}>
      {/* Page Header */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Add New Staff
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Fill in the details to add a new staff member
        </Typography>
      </Box>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {/* Personal Details Section */}
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" fontWeight="600">
                Personal Details *
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }}>
                {/* First Name */}
                <TextField
                  fullWidth
                  label="First Name *"
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  required
                  variant="outlined"
                />

                {/* Last Name */}
                <TextField
                  fullWidth
                  label="Last Name *"
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  required
                  variant="outlined"
                />

                {/* Date of Birth */}
                <TextField
                  fullWidth
                  label="Date of Birth"
                  type="date"
                  value={formData.dob}
                  onChange={(e) => handleChange("dob", e.target.value)}
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />

                {/* Primary Mobile */}
                <TextField
                  fullWidth
                  label="Primary Mobile Number *"
                  value={formData.mobile}
                  onChange={(e) => handleChange("mobile", e.target.value)}
                  required
                  variant="outlined"
                />

                {/* WhatsApp Number */}
                <TextField
                  fullWidth
                  label="Preferred WhatsApp Number"
                  value={formData.whatsapp}
                  onChange={(e) => handleChange("whatsapp", e.target.value)}
                  variant="outlined"
                />

                {/* Email */}
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  variant="outlined"
                />

                {/* Father's/Husband's Name */}
                <TextField
                  fullWidth
                  label="Father's/Husband's Name"
                  value={formData.fatherName}
                  onChange={(e) => handleChange("fatherName", e.target.value)}
                  variant="outlined"
                />

                {/* Gender */}
                <Box>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                      row
                      value={formData.gender}
                      onChange={(e) => handleChange("gender", e.target.value)}
                    >
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                  </FormControl>
                </Box>

                {/* Marital Status */}
                <Box>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Marital Status</FormLabel>
                    <RadioGroup
                      row
                      value={formData.maritalStatus}
                      onChange={(e) => handleChange("maritalStatus", e.target.value)}
                    >
                      <FormControlLabel value="single" control={<Radio />} label="Single" />
                      <FormControlLabel value="married" control={<Radio />} label="Married" />
                    </RadioGroup>
                  </FormControl>
                </Box>

                {/* Race */}
                <TextField
                  fullWidth
                  label="Race"
                  value={formData.race}
                  onChange={(e) => handleChange("race", e.target.value)}
                  variant="outlined"
                />

                {/* Religion */}
                <TextField
                  fullWidth
                  label="Religion"
                  value={formData.religion}
                  onChange={(e) => handleChange("religion", e.target.value)}
                  variant="outlined"
                />

                {/* Staff Photo Upload - Full Width */}
                <Box sx={{ gridColumn: { xs: "1", md: "1 / -1" } }}>
                  <FormLabel component="legend" sx={{ mb: 1 }}>
                    Staff Photo
                  </FormLabel>
                  <Card
                    variant="outlined"
                    sx={{
                      p: 3,
                      textAlign: "center",
                      cursor: "pointer",
                      border: "2px dashed",
                      borderColor: "divider",
                      "&:hover": { borderColor: "primary.main" },
                    }}
                    onClick={() => document.getElementById("photo-upload")?.click()}
                  >
                    <input
                      id="photo-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                    <CloudUpload sx={{ fontSize: 48, color: "text.secondary", mb: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      Click to upload or drag and drop
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {photoFile ? `Selected: ${photoFile.name}` : "JPG, PNG or GIF (MAX. 2MB)"}
                    </Typography>
                  </Card>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* Qualifications Section */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" fontWeight="600">
                Qualifications and Institute Details *
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }}>
                {/* Employee ID */}
                <TextField
                  fullWidth
                  label="Employee ID *"
                  value={formData.employeeId}
                  onChange={(e) => handleChange("employeeId", e.target.value)}
                  required
                  variant="outlined"
                />

                {/* Biometric ID */}
                <TextField
                  fullWidth
                  label="Biometric ID"
                  value={formData.biometricId}
                  onChange={(e) => handleChange("biometricId", e.target.value)}
                  variant="outlined"
                />

                {/* Joining Date */}
                <TextField
                  fullWidth
                  label="Joining Date"
                  type="date"
                  value={formData.joiningDate}
                  onChange={(e) => handleChange("joiningDate", e.target.value)}
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />

                {/* Highest Qualifications */}
                <TextField
                  fullWidth
                  label="Highest Qualifications"
                  value={formData.qualification}
                  onChange={(e) => handleChange("qualification", e.target.value)}
                  variant="outlined"
                />
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* Department Section */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" fontWeight="600">
                Department
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Select Department</InputLabel>
                <Select
                  value={formData.department}
                  onChange={(e) => handleChange("department", e.target.value)}
                  label="Select Department"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="mathematics">Mathematics</MenuItem>
                  <MenuItem value="science">Science</MenuItem>
                  <MenuItem value="english">English</MenuItem>
                  <MenuItem value="history">History</MenuItem>
                  <MenuItem value="administration">Administration</MenuItem>
                </Select>
              </FormControl>
            </AccordionDetails>
          </Accordion>

          {/* Submit Button */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ textTransform: "none", px: 4, py: 1.5, fontWeight: 600 }}
            >
              Add Staff
            </Button>
          </Box>
        </Stack>
      </form>
    </Box>
  );
}
