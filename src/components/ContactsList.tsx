import { styled } from "@mui/material";
import Contact from "./Contact";

interface IPropsContactsList {
    onConversation: () => void;
}

const StyledContactsList = styled('div')`
    display: flex;
    flex-direction: column;
`;

const ContactsList = ({onConversation}: IPropsContactsList) => {
  return (
    <StyledContactsList className="ContactsList">
        <Contact onConversation={onConversation}/>
        <Contact onConversation={onConversation}/>
        <Contact onConversation={onConversation}/>
    </StyledContactsList>
  )
}

export default ContactsList;