import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

import { Link }from 'react-router-dom';

function Contributors(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Contributors © '}
      <Link to="https://github.com/Zee-Iq/Wordpress-clone/">
        Zeeshan Iqbal, Christopher Armstrong, Igor Mahold, Victor Ajagunna
      </Link>{' '}DCI,
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="By creating an account, you agree to our Terms of Service."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
              
                <Link to='/login'
                    style={{textDecoration: "none"}} 
                > Already have an account? Sign in</Link>

              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{ mt: 3, color: 'error.main', mb: 2 }}
          >
            Continue with Google
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
          //   color="dark"
            startIcon={<AppleIcon />}
            sx={{ mt: 3, mb: 2, bgcolor: 'text.primary'}}
          >
            CONTINUE WITH APPLE
          </Button>
          </Box>
          {/* </Box> */}
        <Contributors sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}