import { Box, Button, Container, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledLoginPage = styled("div")`
  background: ${(props) => props.theme.palette.background.default};
  padding-top: 50px;

  .login-container {
    display: flex;
    justify-content: space-around;
    padding-top: 100px;

    img {
      width: 400px;
    }
  }

  .login {
    display: flex;
    flex-direction: column;
    gap: 50px;
    max-width: 400px;
    color: ${(props) => props.theme.palette.text.primary};
  }

  .register {
    display: flex;
    gap: 5px;
    padding-top: 30px;
    color: ${(props) => props.theme.palette.text.primary};

    .register-text {
      font-weight: 500;
    }
  }
`;

const LoginPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledLoginPage className="LoginPage">
      <Container className="login-container">
        <Box>
          <Box className="login">
            <TextField type="text" label="Username" variant="outlined" autoComplete="off" />
            <TextField type="password" label="Password" variant="outlined" autoComplete="off" />
            <Button variant="contained">Login</Button>
          </Box>
          <Box className="register">
            <Typography variant="body1">Don't have an account?</Typography>
            <Typography className="register-text" variant="body1">
              Register
            </Typography>
          </Box>
        </Box>
        {!isMobile && <img src="./images/Texting.svg" alt="" />}
      </Container>
    </StyledLoginPage>
  );
};

export default LoginPage;
