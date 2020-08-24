import styled from "styled-components";

export const FileContainer = styled.div`
    width: 25%;
    background: #1f2026;
    height: 100vh;
`;

export const Header = styled.div`
    display: flex;
    /* justify-content: center; */
    color: white;
    background: #1f2026;
    padding: 7px 14px;
`;

export const SearchInput = styled.input`
    border: 1px solid #373a47;
    border-radius: 6px;
    margin-left: 16px;
    padding: 8px;
    background: transparent;
    color: #ccc;
`;

export const SearchBox = styled.div``;
export const OptionsBox = styled.div`
    margin-left: 16px;
    padding: 10px 0;
    .items-list {
        display: flex;
        align-items: center;
        color: #fff;
        margin-bottom: 2px;
        cursor: pointer;
    }
    h5 {
        color: #ccc;
        margin-bottom: 8px;
    }
`;
