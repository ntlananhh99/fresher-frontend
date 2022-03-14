import styled from "styled-components";

export const ButtonCallApi = styled.button`
   color: ${props => props.typebutton==="edit" ? "#cf7815" : "#a30f0f"};
    border: 2px solid ${props => props.typebutton==="edit" ? "#cf7815" : "#a30f0f"};
    background-color: white;
    font-size: ${(props) => (props.size === "small" ? "14px" : "16px")};
    margin-right:  ${props => props.typebutton==="edit" ? "4px" : ""};
    line-height: 1rem;
    padding: 8px 24px;
    border-radius: 4px;
    font-weight: 500;
    transition: width 0.5s ease-in-out;
    &:hover {
      background-color: ${props => props.typebutton==="edit" ? "#cf7815" : "#a30f0f"};
      color: white;
    }
`;
