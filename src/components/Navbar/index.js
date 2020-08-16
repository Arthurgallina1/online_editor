import React from "react";
import { GoFileSubmodule, GoSearch } from "react-icons/go";
import { NavContainer, IconContainer } from "./styles";

export default function Navbar() {
    return (
        <NavContainer>
            <IconContainer active>
                <GoFileSubmodule size={24} color={"#EEE"} />
            </IconContainer>
        </NavContainer>
    );
}
