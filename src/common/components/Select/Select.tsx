import * as React from 'react';
import styled from 'styled-components';

type Props = {
  arrNumberEpisodes: number[];
  handlerSelect: (num: number) => void;
  nameOption: string;
};

export const Select = ({ arrNumberEpisodes, handlerSelect , nameOption}: Props) => {

  const onHandlerSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handlerSelect(+e.currentTarget.value);
  };

  return (
    <Form>
      <SelectElement  onChange={onHandlerSelect}>
        <Option value="1">Choose...</Option>
        {
          arrNumberEpisodes.map((e, i) => (
            <Option key={i} value={e}>{nameOption}-{e}</Option>
          ))
        }
      </SelectElement>
    </Form>
  );
};

const Form = styled.form`
    padding: 0;
    display: inline-block;    
    justify-content: center;
    margin-right: 50px;
`;

const SelectElement = styled.select`
    padding: 10px 15px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f9f9f9;
    min-width: 250px;

    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
`;

const Option = styled.option`
  padding: 10px;
  font-size: 14px;
    
`;
