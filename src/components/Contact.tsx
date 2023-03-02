import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

interface IPropsContact {
 onConversation: () => void;
}

const StyledContact = styled("div")`
  display: flex;
  gap: 10px;
  width: 100%;
  padding: 10px 0;

  ${(props) => props.theme.breakpoints.up('sm')} {
    max-width: 400px;
  }

  .contact-details {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    color: ${(props) => props.theme.palette.text.primary};
  }

  .name-and-date {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .contact-name {
      font-weight: 600;
    }
  }

  .last-conversation {
    overflow: hidden;
    line-height: 1.5rem;
    max-height: 6rem;
    -webkit-box-orient: vertical;
    display: block;
    display: -webkit-box;
    overflow: hidden !important;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
  }
`;

const Contact = ({onConversation}: IPropsContact) => {
  return (
    <StyledContact className="Contact" onClick={onConversation}>
      <Box className="avatar-container">
        <Avatar className="avatar" alt="avatar" src="./images/avatar.jpg" />
      </Box>
      <Box className="contact-details">
        <Box className="name-and-date">
          <Typography className="contact-name" variant="body1">Marian</Typography>
          <Typography variant="caption">2/22/23</Typography>
        </Box>
        <Typography className="last-conversation" variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quis aliquam ut facilis voluptatibus eaque, impedit dolor expedita accusantium fugit! Aut dignissimos distinctio officia ducimus quibusdam sed corporis accusantium ea.
        </Typography>
      </Box>
    </StyledContact>
  );
};

export default Contact;
