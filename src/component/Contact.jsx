import { Box, Button, Grid, Typography } from "@mui/material";
import Email from "../assets/icon/EmailIcon";
import Linkedin from "../assets/icon/LinkedinIcon";
import MailIcon from '@mui/icons-material/Mail';

function Contact() {
  const handleEmailClick = () => {
    window.location.href = "mailto:Albert_holskog@live.no";
  };
  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/albert-eikeland-holskog/",
      "_blank"
    );
  };
  return (
    <>
      <Typography
        variant="h2"
        id="contact"
        textAlign={"center"}
        sx={{ mb: 5, mt: 10 }}
      >
        Contact
      </Typography>
      <Grid container gap={4} justifyContent={"center"} sx={{ pb: 15 }}>
        <Grid
          item
          md={5}
          sx={{
            background:
              "linear-gradient(45deg, rgba(5, 25, 55, 1), rgba(40, 81, 92, 0.55))",
            borderRadius: 1.5,
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            py: 8,
            height: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
           <MailIcon sx={{color:"#FFFEFF", fontSize:37}}/>
            <Typography variant="p">Albert_holskog@live.no</Typography>
            <Button
              variant="outlined"
              color="white"
              sx={{
                borderColor: "#4DC8B9",
                cursor: "pointer",
                "&:hover": {
                  borderColor: "#4DC8B9",
                  color: "#4DC8B9",
                },
              }}
              onClick={handleEmailClick}
            >
              Send me a message
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          md={5}
          sx={{
            background:
              "linear-gradient(45deg, rgba(5, 25, 55, 1), rgba(40, 81, 92, 0.55))",
            borderRadius: 1.5,
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            py: 8,
            height: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Linkedin />
            <Typography variant="p">Contact me on linkedin</Typography>
            <Button
              variant="outlined"
              color="white"
              sx={{
                borderColor: "#4DC8B9",
                cursor: "pointer",
                "&:hover": {
                  borderColor: "#4DC8B9",
                  color: "#4DC8B9",
                },
              }}
              onClick={handleLinkedInClick}
            >
              Send me a message
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Contact;
