import styled from "styled-components";
import { Styles } from "../../../utils/interfaces-styles";

export const TriggerTitle = styled.div<Styles>`
  color: ${({ color }) => color || "black"};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
`;
