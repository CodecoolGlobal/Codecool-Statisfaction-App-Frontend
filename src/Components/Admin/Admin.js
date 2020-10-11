import React, { useEffect, useState } from "react";
import "./Admin.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  TextField,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { isAdmin, addAdmin } from "../../Api/AuthCalls";

export default function Admin() {
  const [addShow, setAddShow] = useState(false);
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [admin, setAdmin] = useState(false);

  const handleClose = () => {
    setAddShow(false);
    setEmail("");
  };

  const handleSave = () => {
    async function addAdminRole(email) {
      let result = await addAdmin(email);
      if (result) {
        setShowSuccess(true);
      } else setShowError(true);
    }
    setAddShow(false);
    addAdminRole(email);
  };

  useEffect(() => {
    async function FetchAdmin() {
      let result = await isAdmin();
      setAdmin(result);
    }
    FetchAdmin();
  }, []);

  return (
    <div>
      <Button
        variant="contained"
        className="add-admin-btn"
        onClick={() => setAddShow(true)}
        disabled={!admin}
        color="primary"
      >
        Add admin
      </Button>
      <Dialog
        open={addShow}
        onClose={handleClose}
        aria-labelledby="add-admin-dialog-title"
      >
        <DialogTitle id="add-admin-dialog-title">Add new admin</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the email address of who you want to give admin role.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email-input"
            label="Email Address"
            type="email"
            fullWidth
            onChange={(event) => setEmail(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Add admin role
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={showSuccess}
        autoHideDuration={5000}
        onClose={() => setShowSuccess(false)}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          variant="filled"
        >
          Admin added successfully
        </Alert>
      </Snackbar>
      <Snackbar
        open={showError}
        autoHideDuration={5000}
        onClose={() => setShowError(false)}
      >
        <Alert
          onClose={() => setShowError(false)}
          severity="error"
          variant="filled"
        >
          Something went wrong
        </Alert>
      </Snackbar>
    </div>
  );
}
