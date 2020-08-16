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
    background: transparent;
    /* padding: 7px 14px; */
    color: #eee;
`;

export const Collapsable = styled.div`
    height: ${(props) => (props.isOpen ? "auto" : "0")};
    overflow: hidden;
`;
