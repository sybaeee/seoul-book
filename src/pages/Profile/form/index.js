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

import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextFields from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { withAuth } from "@/components/common/hoc/withAuth";

import { SeoulGu } from "@/components/common/ReligionCategory";

const userForm = () => {
  const [age, setAge] = React.useState("");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = () => {
    // event.preventDefault();
    console.log("폼을 제출했습니다.");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreviewUrl(previewUrl);
    }
  }

  const handleRemovePreview = () => {
    URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
  }
  return (
    <withAuth>
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
              <Title>프로필 사진</Title>
              <input type="file" onChange={handleFileChange} />
              {previewUrl && (
                <div>
                  <img src={previewUrl} alt="preview" />
                  <button onClick={handleRemovePreview}>Remove</button>
                </div>
              )}
            </Box>
            <Box
              sx={{
                width: 800,
                maxWidth: "100%",
                marginBottom: 4,
              }}
            >
              <Title>제목</Title>
              <TextField fullWidth label="Title" id="fullWidth" />
            </Box>
            <Box
              sx={{
                width: 800,
                maxWidth: "100%",
                marginBottom: 4,
              }}
            >
              <Title>언어</Title>
              <Stack spacing={3} sx={{ width: 500 }}>
                <Autocomplete
                  multiple
                  id="tags-standard"
                  options={language}
                  getOptionLabel={(option) => option.title}
                  defaultValue={[language[0]]}
                  renderInput={(params) => (
                    <TextFields
                      {...params}
                      variant="standard"
                      label="언어 선택"
                      placeholder="가능한 언어"
                    />
                  )}
                />
              </Stack>
            </Box>

            <Title>나이</Title>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>10대</MenuItem>
                <MenuItem value={20}>20대</MenuItem>
                <MenuItem value={30}>30대</MenuItem>
                <MenuItem value={40}>40대</MenuItem>
                <MenuItem value={50}>50대</MenuItem>
                <MenuItem value={60}>60대이상</MenuItem>
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
              <Title>자기소개</Title>
              <TextField fullWidth label="Introduction" id="fullWidth" />
            </Box>
            <Box
              sx={{
                width: 800,
                maxWidth: "100%",
                marginBottom: 4,
              }}
            >
              <Title>성격</Title>
              <TextField fullWidth label="Personality" id="fullWidth" />
            </Box>
            <Box
              sx={{
                width: 800,
                maxWidth: "100%",
                marginBottom: 4,
              }}
            >
              <Title>활동 시간</Title>
              <TextField fullWidth label="Time of activity" id="fullWidth" />
            </Box>
            <Title>활동 지역</Title>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Area of activity
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                {SeoulGu.map((data) => (
                  <MenuItem value={10}>{data.title}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <ButtonBox>
              <Button onClick={() => console.log("폼을 제출했습니다.")}>
                Cancel
              </Button>
              <Button onClick={handleSubmit}>Submit</Button>
            </ButtonBox>
          </FormWrapper>
        </FormContainer>
      </Wrapper>
    </withAuth>
  );
};
const language = [
  { title: '영어', year: 1994 },
  { title: '중국어', year: 1972 },
  { title: '일본어', year: 1974 },
  { title: '기타', year: 2008 },
];
export default userForm;
