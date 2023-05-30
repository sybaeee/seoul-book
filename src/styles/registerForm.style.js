import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  //background-color는 굳이 안넣어도............
  background-color: #f3f3f3;
  padding: 100px 20px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Text = styled.div`
  font-size: 34px;
  font-weight: 800;
  align-self: start;
  margin-bottom: 70px;
`;

export const Title = styled.div`
  align-self: start;
  margin-top: 12px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 800px;
  margin: 10px 0;
  padding: 10px;
  /* border-radius: 8px; */
  border: 1px solid #ccc;
`;

export const DateInput = styled.input`
  align-self: start;
  width: 200px;
  margin: 10px 0;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const InputText = styled.input`
  width: 800px;
  min-height: 500px;
  margin: 10px 0;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const InputIntroduction = styled.input`
  width: 800px;
  min-height: 200px;
  margin: 10px 0;
  padding: 10px;
  /* border-radius: 8px; */
  border: 1px solid #ccc;
`;

export const Select = styled.select`
  align-self: start;
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

export const Option = styled.option`
  width: 200px;
  padding: 10px;
`;

export const Button = styled.button`
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

export const ButtonBox = styled.div`
  display: flex;
  align-self: end;
  margin-top: 200px;
  column-gap: 7px;
`;
