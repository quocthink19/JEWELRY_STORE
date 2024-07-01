import { Delete } from "@mui/icons-material";
import CreateIcon from "@mui/icons-material/Create";
import {
  Box,
  Card,
  CardHeader,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllStaff } from "../../component/State/Staff/Action";

export default function StaffTable() {
  const { staff } = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    dispatch(getAllStaff({ jwt }));
  }, [dispatch, jwt]);

  const handleRowClick = (username) => {
    navigate(`/register`);
  };

  return (
    <Box>
      <Card className="mt-1">
        <CardHeader
          action={
            <IconButton
              onClick={() => navigate("/register")}
              aria-label="settings"
            >
              <CreateIcon />
            </IconButton>
          }
          title={
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Staff
            </Typography>
          }
          sx={{ pt: 2, alignItems: "center" }}
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#0B4CBB" }}>
                <TableCell align="left">
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", color: "White" }}
                  >
                    Full Name
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", color: "White" }}
                  >
                    Username
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", color: "White" }}
                  >
                    Gender
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", color: "White" }}
                  >
                    Role
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", color: "White" }}
                  >
                    Area
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", color: "White" }}
                  >
                    Email
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", color: "White" }}
                  >
                    Delete
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {staff && staff.staffItems.length > 0 ? (
                staff.staffItems.map((row) => (
                  <TableRow
                    key={row.username}
                    sx={{
                      "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" },
                      "&:hover": { backgroundColor: "#e0e0e0", cursor: "pointer" },
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      onClick={() => handleRowClick(row.username)}
                    >
                      {row.fullName}
                    </TableCell>
                    <TableCell align="right" onClick={() => handleRowClick(row.username)}>
                      {row.username}
                    </TableCell>
                    <TableCell align="right" onClick={() => handleRowClick(row.username)}>
                      {row.gender}
                    </TableCell>
                    <TableCell align="right" onClick={() => handleRowClick(row.username)}>
                      {row.role}
                    </TableCell>
                    <TableCell align="right" onClick={() => handleRowClick(row.username)}>
                      {row.area}
                    </TableCell>
                    <TableCell align="right" onClick={() => handleRowClick(row.username)}>
                      {row.email}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton onClick={() => handleRowClick(row.username)}>
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    No staff data available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
}
