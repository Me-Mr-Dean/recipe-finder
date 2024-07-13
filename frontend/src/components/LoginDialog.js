import React, { useState } from "react";
import { Dialog, DialogContent, TextField, Button } from "@mui/material";
import { auth, googleProvider } from "../firebaseConfig";

const LoginDialog = () => {
  const [open, setOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = () => {
    auth.signInWithPopup(googleProvider).catch((error) => console.error(error));
  };

  const handleEmailLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => console.error(error));
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogContent>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <Button onClick={handleEmailLogin}>Login with Email</Button>
        <Button onClick={handleGoogleLogin}>Login with Google</Button>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
