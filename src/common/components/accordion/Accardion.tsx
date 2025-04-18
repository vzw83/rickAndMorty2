import styled from "styled-components";
import {theme} from "../../../styles/Theme";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  onClick?: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean)=>void;
};

export const Accordion = ({title, children, setIsOpen,isOpen}: AccordionProps) => {




  const handlerOnClick = () =>{
    setIsOpen(!isOpen)
  }



  return (
    <StyledAccordion >
      <AccordionHeader onClick={handlerOnClick}>
        {title}
        <Arrow isOpen={isOpen}>▼</Arrow>
      </AccordionHeader>
      {isOpen && <AccordionContent>{children}</AccordionContent>}
    </StyledAccordion>
  );
};

const StyledAccordion = styled.div`
    border: 2px solid ${theme.colors.buttonBg};
    border-radius: 2px;
    overflow: hidden;
    max-width: 400px;
    width: 100%;
    @media ${theme.media.tablet} {
        min-width: 700px;        
    }
    @media ${theme.media["750"]} {
        min-width: 400px;
    }
    @media ${theme.media["450"]} {
        min-width: 300px;
    }
`;

const AccordionHeader = styled.div`
    background-color: ${theme.colors.buttonBg};
    color: ${theme.lightTheme.body};
    padding: 12px 16px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    user-select: none;
`;

const Arrow = styled.span<{ isOpen: boolean }>`
    transition: transform 0.3s;
    transform: ${({isOpen}) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

const AccordionContent = styled.div`
    padding: 12px 16px;
    background: white;
    color: #333;
`;

