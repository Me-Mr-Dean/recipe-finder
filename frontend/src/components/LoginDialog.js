import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { auth, googleProvider } from "../firebaseConfig";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const LoginDialog = () => {
  const [open, setOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider).catch((error) =>
      console.error(error)
    );
  };

  const handleEmailLogin = () => {
    signInWithEmailAndPassword(auth, email, password).catch((error) =>
      console.error(error)
    );
  };

  const handleEmailRegister = () => {
    createUserWithEmailAndPassword(auth, email, password).catch((error) =>
      console.error(error)
    );
  };

  const toggleMode = () => {
    setIsRegister((prev) => !prev);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogContent>
        <Typography variant="h6">
          {isRegister ? "Register" : "Login"}
        </Typography>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        {isRegister ? (
          <Button onClick={handleEmailRegister}>Register with Email</Button>
        ) : (
          <Button onClick={handleEmailLogin}>Login with Email</Button>
        )}
        <Button onClick={handleGoogleLogin}>Login with Google</Button>
        <Button onClick={toggleMode}>
          {isRegister
            ? "Already have an account? Login"
            : "Don't have an account? Register"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
