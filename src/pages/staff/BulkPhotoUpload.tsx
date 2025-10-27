import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import {
  CloudUpload as CloudUploadIcon,
} from "@mui/icons-material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { toast } from "sonner";

export default function BulkPhotoUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
      toast.success("File selected successfully!");
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      toast.success("File selected successfully!");
    }
  };

  const columns: GridColDef[] = [
    { field: "date", headerName: "Date", width: 300 },
    { field: "status", headerName: "Status", width: 200 },
    { field: "action", headerName: "Action", width: 200 },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Bulk Photo Upload
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Upload staff photos in bulk using a ZIP file
        </Typography>
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mb: 3 }}>
        {/* Instructions Card */}
        <Card>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <CloudUploadIcon color="primary" />
              <Typography variant="h6" fontWeight="600">
                Upload
              </Typography>
            </Box>
            <Typography variant="body2" fontWeight="500" gutterBottom>
              Follow the step mentioned below to successfully upload the photos.
            </Typography>
            <Box component="ol" sx={{ pl: 2, "& li": { mb: 1 } }}>
              <li>
                <Typography variant="body2">
                  Photos should be in JPG and PNG formats only.
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  The size of a photo should not exceed than 200 KB.
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  Recommended photo dimension is 100 x 100px.
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  Photos should be named as per staff ID of the teacher, e.g. "1245354.jpg".
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  Compress all the photos into a Zip file and upload it here. Size should not exceed 20 MB.
                </Typography>
              </li>
            </Box>
          </CardContent>
        </Card>

        {/* Upload Section */}
        <Card>
          <CardContent>
            <Box
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => document.getElementById("photo-upload")?.click()}
              sx={{
                border: "2px dashed",
                borderColor: dragActive ? "primary.main" : "divider",
                borderRadius: 2,
                p: 6,
                textAlign: "center",
                cursor: "pointer",
                bgcolor: dragActive ? "action.hover" : "transparent",
                transition: "all 0.3s",
                "&:hover": {
                  borderColor: "primary.main",
                  bgcolor: "action.hover",
                },
              }}
            >
              <input
                id="photo-upload"
                type="file"
                accept=".zip"
                onChange={handleFileSelect}
                style={{ display: "none" }}
              />
              {selectedFile ? (
                <Box>
                  <CloudUploadIcon sx={{ fontSize: 48, color: "success.main", mb: 2 }} />
                  <Typography fontWeight="600" color="success.main" gutterBottom>
                    File selected!
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {selectedFile.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </Typography>
                </Box>
              ) : (
                <Box>
                  <CloudUploadIcon sx={{ fontSize: 48, color: "text.secondary", mb: 2 }} />
                  <Typography fontWeight="500">
                    Drop your Zip file here or click to browse the file
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Maximum file size: 20 MB
                  </Typography>
                </Box>
              )}
            </Box>
            {selectedFile && (
              <Button
                variant="contained"
                startIcon={<CloudUploadIcon />}
                fullWidth
                sx={{ mt: 2 }}
                onClick={() => {
                  toast.success("Photos uploaded successfully!");
                  setSelectedFile(null);
                }}
              >
                Upload Photos
              </Button>
            )}
          </CardContent>
        </Card>
      </Box>

      {/* Upload Status Table */}
      <Box>
        <Typography variant="h6" fontWeight="600" gutterBottom>
          Bulk Photo Upload Status
        </Typography>
        <Box sx={{ height: 300, width: "100%" }}>
          <DataGrid
            rows={[]}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            disableRowSelectionOnClick
            sx={{
              "& .MuiDataGrid-overlay": {
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            }}
            slots={{
              noRowsOverlay: () => (
                <Box sx={{ textAlign: "center", py: 6 }}>
                  <Typography variant="body1" fontWeight="500" gutterBottom>
                    No upload history available
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Upload your first batch of photos to see the status here
                  </Typography>
                </Box>
              ),
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
