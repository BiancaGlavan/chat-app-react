import { Container, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import ContactsList from "../components/ContactsList";
import SingleConversationPage from "./SingleConversationPage";

const StyledConversationsPage = styled("div")`
  padding-top: 50px;
  background: ${(props) => props.theme.palette.background.default};

  .conversations-container {
    display: flex;
    gap: 10px;
  }
`;

const ConversationsPage = () => {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up('sm'));

  const handleConversation = () => {
    
  }

  return (
    <StyledConversationsPage className="ConversationsPage">
      <Container className="conversations-container">
        <ContactsList onConversation={handleConversation}/>
        {isLaptop && <SingleConversationPage />}
      </Container>

    </StyledConversationsPage>
  );
};

export default ConversationsPage;
