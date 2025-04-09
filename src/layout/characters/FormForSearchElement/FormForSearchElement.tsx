import {FlexWrapper} from "../../../common/components/FlexWrapper";
import {Button} from "../../../common/components/button/Button";
import styled from "styled-components";


type Props = {
  onSearchCharacters: (search: string) => void;
  value: string;
  setValue: (name: string) => void;
};
export const FormForSearchElement = ({ value, setValue, onSearchCharacters}: Props) => {





  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setValue(newValue)
    onSearchCharacters(newValue);
  }


  return (
    <FlexWrapper>
      <StyledForm>
        <StyledInput value={value} onChange={handleOnChange} placeholder={"Search for Characters"}/>
      </StyledForm>
      <Button color={"white"} bgColor={"#3b82f6"} disableHover={false}>Search</Button>
    </FlexWrapper>
  );
};

const StyledForm = styled.form`
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
    padding: 10px 15px;
    font-size: 16px;
    border: 2px solid #ccc;
    min-width: 600px;
    border-radius: 8px;
    outline: none;
    transition: all 0.3s ease-in-out;
    margin-right: 20px;

    &:focus {
        border-color: #3b82f6;
        box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
    }
`;