import React, { useState } from "react";
import { OPTION_LIST } from "@/constant/list";
import {
  Wrapper,
  FormContainer,
  FormWrapper,
  Text,
  Title,
  Input,
  DateInput,
  InputText,
  Select,
  Option,
  ButtonBox,
  Button,
} from "@/style/detail.style";

const Detail = () => {
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
          <Text>Register your place!</Text>
          <Title>Title</Title>
          <Input type="Title" placeholder="Title" />
          <Title>Date</Title>
          <DateInput type="Date" placeholder="Date" />
          <Title>Location</Title>
          <Input type="Location" placeholder="Adress" />
          <Title>Region</Title>
          <Input type="Region" placeholder="Region" />
          <Title>Gender</Title>
          <Select value={selectedOption} onChange={handleSelectChange}>
            <Option value="" disabled selected>
              Gender
            </Option>
            {OPTION_LIST.map((option) => (
              <Option key={option.value}>{option.label}</Option>
            ))}
          </Select>
          <Title>Introduction</Title>
          <Input type="Introduction" placeholder="Introduction" />
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

export default Detail;
