import {FlexWrapper} from "../../../common/components/FlexWrapper";
import {Button} from "../../../common/components/button/Button";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";


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
    // <FlexWrapper>
    <Wrapper>
      <StyledForm>
        <StyledInput value={value} onChange={handleOnChange} placeholder={"Search for Characters"}/>
      </StyledForm>
      <Button color={"white"} bgColor={theme.colors.buttonBg} disableHover={false}>Search</Button>
    </Wrapper>

    // </FlexWrapper>
  );
};

const StyledForm = styled.form`
  display: flex;
`;

const StyledInput = styled.input`
    padding: 10px 15px;
    font-size: 16px;
    border: 2px solid #ccc;
    min-width: 600px;
    width: 100%;
    border-radius: 8px;
    outline: none;
    transition: all 0.3s ease-in-out;
    margin-right: 20px;

    &:focus {
        border-color: ${theme.colors.buttonBg};
        box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
    }

    @media ${theme.media.tablet} {
        min-width: 320px;
        margin-right: 0;

    }
`;

const Wrapper = styled(FlexWrapper)`    
    justify-content: center;
      @media ${theme.media.tablet} {
          flex-direction: column;
          align-items: center;
          gap: 20px;
      }
`