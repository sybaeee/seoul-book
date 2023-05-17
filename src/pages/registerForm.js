import React, { useState } from "react";
import {
  Wrapper,
  Text,
  Title,
  Button,
  ButtonBox,
  FormContainer,
  FormWrapper,
  Input,
  InputIntroduction,
  InputText,
} from "@/style/registerForm.style";

const RegisterForm = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    // event.preventDefault();
    console.log("폼을 제출했습니다.");
  };

  return (
    <Wrapper>
      <FormContainer>
        <FormWrapper>
          <Text>Register place!</Text>
          <Title>Title</Title>
          <Input type="Title" />
          {/* 여행지 등록 페이지라 일단 주석처리 했습니다 */}
          {/* <Title>Date</Title>
          <DateInput type="Date" placeholder="Date" /> */}
          <Title>Location</Title>

          <Input type="Region" />
          {/* 여행지 등록 페이지라 일단 주석처리 했습니다 */}
          {/* <Title>Gender</Title>
          <Select value={selectedOption} onChange={handleSelectChange}>
            <Option value="" disabled selected>
              Gender
            </Option>
            {OPTION_LIST.map((option) => (
              <Option key={option.value}>{option.label}</Option>
            ))}
          </Select> */}
          <Title>Introduction</Title>
          <InputIntroduction type="Introduction" />
          <Title>Text</Title>
          <InputText type="Text" />
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

export default RegisterForm;
