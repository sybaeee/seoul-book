import React, { useState } from "react";
import styled from "@emotion/styled";

const FormContainer = styled.div`
  display: flex;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  width: 200px;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  appearance: none;
  background-color: #fff;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23333"><path d="M7 10l5 5 5-5z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 10px top 50%;
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.2);
  }
  option:first-of-type {
    display: none;
  }
`;

const Option = styled.option`
  padding: 10px;
`;

const Button = styled.button`
  color: #fff;
  font-weight: 400;
  font-size: 20px;
  width: 120px;
  height: 50px;
  background: rgba(58, 55, 56, 0.8);
  border-radius: 15px;
  border: none;
  cursor: pointer;
`;

const ButtonBox = styled.div``;

const Detail = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedOption);
  };
  return (
    <>
      <FormContainer>
        <FormWrapper>
          <h1>Detail Page</h1>
          <Input type="Title" placeholder="Title" />
          <Input type="Date" placeholder="Date" />
          <Input type="Region" placeholder="Region" />
          <Select value={selectedOption} onChange={handleSelectChange}>
            <Option value="" disabled selected>
              Gender
            </Option>
            <Option value="option1">성별 무관</Option>
            <Option value="option2">여자</Option>
            <Option value="option3">남자</Option>
          </Select>
          <Input type="Introduction" placeholder="Introduction" />
          <Input type="Text" placeholder="Start typing here" />
          <ButtonBox>
            <Button>Cancel</Button>
            <Button>Submit</Button>
          </ButtonBox>
        </FormWrapper>
      </FormContainer>
    </>
  );
};

export default Detail;
