import { Avatar, Badge, Box, Button, Container, IconButton, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Link } from "react-router-dom";

const StyledRegisterPage = styled("div")`
  background: ${(props) => props.theme.palette.background.default};
  padding-top: 50px;
  padding-bottom: 50px;

  .register {
    color: ${(props) => props.theme.palette.text.primary};
    display: flex;
    flex-direction: column;
    gap: 50px;
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
  return (
    <StyledRegisterPage className="RegisterPage">
      <Container className="register-container">
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
          <TextField type="text" label="Username" variant="outlined" autoComplete="off" />
          <TextField type="email" label="Email" variant="outlined" autoComplete="off" />
          <TextField type="password" label="Password" variant="outlined" autoComplete="off" />
          <Button variant="contained" size="large">
            Register
          </Button>
          <Typography>
            Already have an account?{" "}
            <Link className="login-link" to={"/login"}>
              Login
            </Link>
          </Typography>
        </Box>
      </Container>
    </StyledRegisterPage>
  );
};

export default RegisterPage;
