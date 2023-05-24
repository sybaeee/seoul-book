import React, { useState } from "react";
import {
  Wrapper,
  Text,
  Title,
  Button,
  ButtonBox,
  FormContainer,
  FormWrapper,
} from "@/styles/registerForm.style";

import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const userForm = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = () => {
    // event.preventDefault();
    console.log("폼을 제출했습니다.");
  };

  return (
    <Wrapper>
      <FormContainer>
        <FormWrapper>
          <Text>Introduce yourself!</Text>
          <Box
            sx={{
              width: 800,
              maxWidth: "100%",
              marginBottom: 4,
            }}
          >
            <Title>Title</Title>
            <TextField fullWidth label="Title" id="fullWidth" />
          </Box>
          <Box
            sx={{
              width: 800,
              maxWidth: "100%",
              marginBottom: 4,
            }}
          >
            <Title>Language</Title>
            <TextField fullWidth label="Language" id="fullWidth" />
          </Box>

          <Title>Age</Title>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
              <MenuItem value={40}>forty</MenuItem>
              <MenuItem value={50}>fifty</MenuItem>
              <MenuItem value={60}>older than sixty</MenuItem>
            </Select>
          </FormControl>
          <Box
            sx={{
              width: 800,
              height: 100,
              maxWidth: "100%",
              marginBottom: 4,
              marginTop: 4,
            }}
          >
            <Title>Introduction</Title>
            <TextField fullWidth label="Introduction" id="fullWidth" />
          </Box>
          <Box
            sx={{
              width: 800,
              maxWidth: "100%",
              marginBottom: 4,
            }}
          >
            <Title>Personality</Title>
            <TextField fullWidth label="Personality" id="fullWidth" />
          </Box>
          <Box
            sx={{
              width: 800,
              maxWidth: "100%",
              marginBottom: 4,
            }}
          >
            <Title>Personality</Title>
            <TextField
              fullWidth
              label="Area and time of activity"
              id="fullWidth"
            />
          </Box>

          <ButtonBox>
            <Button onClick={() => console.log("폼을 제출했습니다.")}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </ButtonBox>
        </FormWrapper>
      </FormContainer>
    </Wrapper>
  );
};

export default userForm;
