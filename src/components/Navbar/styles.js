import styled from "styled-components";

export const NavContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    padding: 0;
    background: #373a47;
    width: 5%;
    color: #eeeeee;
    border-right: 1px solid #1f2026;

    svg {
        cursor: pointer;
    }
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: ${(props) =>
        props.active ? "2px solid orange" : "2px solid transparent"};
    height: 60px;
    width: 100%;
`;
