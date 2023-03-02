import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const StyledHomepage = styled("div")`
  height: calc(100vh - 60px);
  background: ${(props) => props.theme.palette.background.default};

	.greetings-container {
		display: flex;
		flex-direction: column;
		gap: 30px;
		align-items: center;

		${(props) => props.theme.breakpoints.up('sm')} {
			flex-direction: row;
			justify-content: space-around;
			padding-top: 100px;
		}
	}

  .greetings {
    color: ${(props) => props.theme.palette.text.primary};
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
		text-align: center;
  }

	.illustration {
		width: 280px;
		${(props) => props.theme.breakpoints.up('md')} {
			width: 400px;
		}

		img {
			width: 300px;

			${(props) => props.theme.breakpoints.up('md')} {
				width: 400px;
			}
		}
	}
`;

const Homepage = () => {
  return (
    <StyledHomepage className="Homepage">
      <Container className="greetings-container">
        <Box className="greetings">
          <Typography variant="h6">Connect with friends</Typography>
          <Typography variant="subtitle2">ChatApp lets you connect with the world</Typography>
          <Link to={'/register'}><Button variant="contained">Get started</Button></Link>
        </Box>
        <Box className="illustration">
					<img src="./images/Begin-chat.svg" alt="illustration" />
				</Box>
      </Container>
    </StyledHomepage>
  );
};

export default Homepage;
