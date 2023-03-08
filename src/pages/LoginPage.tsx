import { Box, Button, Container, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../redux/features/apiSlice";
import { login, setUser } from "../redux/features/authSlice";
import { useAppDispatch } from "../redux/hooks";

const StyledLoginPage = styled("div")`
  background: ${(props) => props.theme.palette.background.default};
  padding-top: 80px;

  .login-container {
    ${(props) => props.theme.breakpoints.up("md")} {
      display: flex;
      gap: 50px;
      img {
        width: 400px;
      }
    }
  }

  .login-wrapper {
    flex-grow: 1;
  }

  .login {
    display: flex;
    flex-direction: column;
    gap: 50px;
    max-width: 500px;
    color: ${(props) => props.theme.palette.text.primary};
  }

  .register {
    padding-top: 30px;
    color: ${(props) => props.theme.palette.text.primary};

    .register-link {
      font-weight: 500;
    }
  }
`;

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [loginUser, response] = useLoginUserMutation();
  const { data: loginResponse, isSuccess, isLoading } = response;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const currentUser = {
      username: username,
      password: password,
    };
    loginUser({ data: currentUser });
  }

  useEffect(() => {
    if(isSuccess) {
      dispatch(login(loginResponse.access_token));
      dispatch(setUser(loginResponse.user))
      navigate('/conversations');
    }
  }, [loginResponse, isSuccess])

  return (
    <StyledLoginPage className="LoginPage">
      <Container className="login-container">
        <Box className="login-wrapper">
          <Box className="login">
            <TextField
              type="text"
              label="Username"
              variant="outlined"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" size="large" onClick={handleLogin}>
              Login
            </Button>
          </Box>
          <Box className="register">
            <Typography variant="body1">
              Don't have an account?{" "}
              <Link className="register-link" to={"/register"}>
                Register
              </Link>
            </Typography>
          </Box>
        </Box>
        {!isMobile && <img src="./images/Texting.svg" alt="" />}
      </Container>
    </StyledLoginPage>
  );
};

export default LoginPage;
