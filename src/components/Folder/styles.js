import styled from "styled-components";

export const FolderContainer = styled.div`
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    padding: 2px 6px;
    color: #eee;
    font-size: 12px;
`;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    background: #373a47;
    /* padding: 7px 14px; */
    color: #eee;
`;

export const Collapsable = styled.div`
    border: 3px solid green;
    visibility: ${(props) => (props.isOpen ? "block" : "hidden")};
    /* height: ${(props) => (props.isOpen ? "160px" : "0")}; */
`;
