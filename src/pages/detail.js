import * as React from "react";
import {
  Wrapper,
  Container,
  Title,
  Text,
  Bar,
  BoxTitle,
  BoxText,
  Box,
  SubTitle,
  Section,
  TopBox,
  ProfileBox,
  Writer,
  WriterName,
  BottomBox,
  buttonBox,
} from "@/styles/detail.style";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  CardActions,
} from "@mui/material";

const Detail = () => {
  return (
    <Wrapper>
      <Container>
        <ProfileBox>
          <Writer>image</Writer>
          <WriterName>Suyoooi</WriterName>
        </ProfileBox>
        <TopBox>
          <Box>
            <BoxTitle>Region</BoxTitle>
            <BoxText>서울특별시 광진구 자양동 뚝섬한강공원</BoxText>
          </Box>
          <Box>
            <BoxTitle>price</BoxTitle>
            <BoxText>free</BoxText>
          </Box>
          <Box>
            <BoxTitle>hours</BoxTitle>
            <BoxText>24 hours</BoxText>
          </Box>
        </TopBox>
        <Bar></Bar>
        <Section>
          <Title>Let's play together at Ttukseom Hangang Park</Title>
          <SubTitle>
            Let's play together at Ttukseom Hangang Park! Let's play together at
            Ttukseom Hangang Park! Let's play together at Ttukseom Hangang Park!
            Let's play Hangang Park! Let's play together at Ttukseom Hangang
            Park! Let's play together at Ttukseom Hangang Park! Let's play
            together at Ttukseom Hangang Park! Let's play tog ether at Ttukseom
            Hangang Park!
          </SubTitle>
          <Text>
            Let's play together at Ttukseom Hangang Park! Let's play together at
            Ttukseom Hangang Park! Let's play together at Ttukseom Hangang Park!
            Let's play Hangang Park! Let's play together at Ttukseom Hangang
            Park! Let's play together at Ttukseom Hangang Park! Let's play
            together at Ttukseom Hangang Park! Let's play tog ether at Ttukseom
            Hangang Park! Let's play together at Ttukseom Hangang Park! Let's
            play together at Ttukseom Hangang Park! Let's play Hangang Park!
            Let's play together at Ttukseom Hangang Park! Let's play together at
            Ttukseom Hangang Park! Let's play together at Ttukseom Hangang Park!
            Let's play together at Ttukseom Hangang Park! Let's play together at
            Ttukseom Hangang Park! Let's play together at Ttukseom Hangang Park!
            Let's play Hangang Park! Let's play together at Ttukseom Hangang
            Park! Let's play together at Ttukseom Hangang Park! Let's play
            together at Ttukseom Hangang Park! Let's play tog ether at Ttukseom
            Hangang Park! Let's play together at Ttukseom Hangang Park! Let's
            play together at Ttukseom Hangang Park! Let's play Hangang Park!
            Let's play together at Ttukseom Hangang Park! Let's play together at
            Ttukseom Hangang Park! Let's play together at Ttukseom Hangang Park!
          </Text>
        </Section>
        <CardActions sx={{ marginTop: 20, justifyContent: "end" }}>
          <Button sx={{ display: "flex" }} color="secondary">
            Review
          </Button>
        </CardActions>
        <BottomBox>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" />
              </ListItemAvatar>
              <ListItemText
                primary="Suyoooi"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" />
              </ListItemAvatar>
              <ListItemText
                primary="suyeon"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItem>
            <buttonBox>
              <CardActions sx={{ marginTop: 3, justifyContent: "center" }}>
                <Button
                  sx={{ display: "flex", justifyContent: "center" }}
                  variant="outlined"
                  color="secondary"
                  size="small"
                >
                  more
                </Button>
              </CardActions>
            </buttonBox>
          </List>
        </BottomBox>
      </Container>
    </Wrapper>
  );
};

export default Detail;
