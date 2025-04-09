import styled from "styled-components";

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
    border: 2px solid #3b82f6;
    border-radius: 20px;
    overflow: hidden;
    max-width: 400px;
`;

const AccordionHeader = styled.div`
    background-color: #3b82f6;
    color: white;
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

