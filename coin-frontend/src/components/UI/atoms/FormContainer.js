import styled from "styled-components";
import { device } from "../../screenResolutions/devices";

const FormContainer = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ padding }) => padding || '50px 40px'};
  background-color: ${({ theme }) => theme.formBackgroundColor};
  border-radius: 50px;
  position: ${({ position }) => position || ''};
  transform: ${({ transform }) => transform || ''};
  left: ${({ left }) => left || ''};
  top: ${({ top }) => top || ''};
  max-width: ${({ maxWidth }) => maxWidth || ''};
  max-height: ${({ maxHeight }) => maxHeight || ''};
  width: ${({ width }) => width || ''};
  flex-basis: ${({ flexBasis }) => flexBasis || ''};
  flex-grow: ${({ flexGrow }) => flexGrow || ''};
  color: ${({ theme }) => theme.commonTextColor};
`

export default FormContainer