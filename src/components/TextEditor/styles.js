import styled from "styled-components";

export const TextContainer = styled.div`
    padding: 0;
    background: #373a47;
    width: 70%;
`;

export const FileTab = styled.div`
    background: #373a47;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid #ffa500;
    /* width: 15%; */
    padding: 10px 20px;
    color: #eee;
    font-size: 12px;

    svg {
        margin-left: 8px;
    }
`;

export const TabCont = styled.div`
    display: flex;
    background: #1f2026;
`;

export const TextArea = styled.div`
    color: #eee;
    padding: 10px;
`;

export const TextAreaInput = styled.textarea`
    background: transparent;
    border: 0;
    width: 100%;
    color: #eee;
    height: 90vh;
`;

export const PopUpContainer = styled.div`
    background: orange;
    padding: 12px;
    color: white;

    span {
        font-weight: bold;
    }
`;
export const NoOpenFileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;

    .commands {
        margin-top: 15px;
        width: 450px;
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        h3 {
            margin-bottom: 30px;
        }
        h5 {
            color: #ccc;
            margin-bottom: 10px;
        }
    }
`;

export const Button = styled.button`
    background: ${(props) => (props.secondary ? "orange" : "#eee")};
    color: ${(props) => (props.secondary ? "#eee" : "orange")};
    border: ${(props) => (props.secondary ? "#eee" : "orange")} 1px solid;
    padding: 7px 14px;
    margin-left: 12px;
    border-radius: 8px;
`;

export const ButtonsContainer = styled.div`
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        margin-left: 15px;
        cursor: pointer;

        &:hover {
            color: white;
        }
    }
`;
