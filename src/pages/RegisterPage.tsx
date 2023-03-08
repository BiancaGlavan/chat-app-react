import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../redux/features/apiSlice";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { login, setUser } from "../redux/features/authSlice";

const StyledRegisterPage = styled("div")`
  background: ${(props) => props.theme.palette.background.default};
  padding-top: 50px;
  padding-bottom: 50px;

  .register-container {
    ${(props) => props.theme.breakpoints.up("md")} {
      display: flex;
      gap: 50px;
      img {
        width: 400px;
      }
    }
  }

  .register-wrapper {
    flex-grow: 1;
  }

  .register {
    color: ${(props) => props.theme.palette.text.primary};
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 500px;
  }

  .avatar {
    width: 90px;
    height: 90px;
  }

  .icon {
    color: ${(props) => props.theme.palette.primary.main};
  }

  .login-link {
    font-weight: 500;
  }
`;

const RegisterPage = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [registerUser, response] = useRegisterUserMutation();
  const { data: registerResponse, isLoading, isSuccess } = response;

  const handleRegister = () => {
    const user = {
      username: username,
      password: password,
    };

    registerUser({ data: user });
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(login(registerResponse.access_token));
      dispatch(setUser(registerResponse.user))
      navigate("/conversations");
    }
  }, [isSuccess, registerResponse]);

  return (
    <StyledRegisterPage className="RegisterPage">
      <Container className="register-container">
        <Box className="register-wrapper">
          <Box className="register">
            <Box className="profile-pic-container">
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <IconButton>
                    <AddPhotoAlternateIcon className="icon" />
                  </IconButton>
                }
              >
                <Avatar className="avatar" alt="avatar" src="./images/avatar.jpg" />
              </Badge>
            </Box>
            <Typography variant="h6">Create Account</Typography>
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
            <Button variant="contained" size="large" onClick={handleRegister}>
              Register
            </Button>
            <Typography>
              Already have an account?{" "}
              <Link className="login-link" to={"/login"}>
                Login
              </Link>
            </Typography>
          </Box>
        </Box>
        {!isMobile && <img src="./images/Texting.svg" alt="" />}
      </Container>
    </StyledRegisterPage>
  );
};

export default RegisterPage;
