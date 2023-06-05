import { styled } from 'styled-components';
import { BsCheckLg } from 'react-icons/bs';

interface CheckBoxProps {
  isChecked: boolean;
  onChange: () => void;
  labelText?: string;
}

const CheckBox = ({ isChecked, onChange, labelText }: CheckBoxProps) => {
  return (
    <Label>
      <InputWrapper>
        <Input checked={isChecked} onChange={onChange} />
        {isChecked && (
          <IconWrapper>
            <BsCheckLg color="#ffffff" size="24px" />
          </IconWrapper>
        )}
      </InputWrapper>
      {labelText && <LabelText>{labelText}</LabelText>}
    </Label>
  );
};

const Label = styled.label`
  display: inline-flex;
  gap: 12px;
`;

const InputWrapper = styled.span`
  position: relative;

  width: 28px;
  height: 28px;
`;

const Input = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;

  width: 28px;
  height: 28px;

  border: 1px solid #22a6a2;
  border-radius: 2px;

  &:checked {
    border: 1px solid #3288ff;
    background-color: #333333;
  }
`;

const IconWrapper = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 24px;
  height: 24px;
`;

const LabelText = styled.span`
  display: flex;
  align-items: center;

  font-weight: 400;
  font-size: 16px;
  color: #333;
`;

export default CheckBox;