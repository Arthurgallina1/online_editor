import React, { useState, useContext } from "react";
import { GoFileSubmodule, GoSearch } from "react-icons/go";
import { NavContainer, IconContainer } from "./styles";
import { AppContext } from "../../utils/context";

export default function Navbar() {
    const { activeItemNav, setActiveItemNav } = useContext(AppContext);

    const handleClick = (item) => {
        setActiveItemNav(item);
    };
    return (
        <NavContainer>
            <IconContainer active={activeItemNav === "EXPLORER"}>
                <GoFileSubmodule
                    size={24}
                    color={"#EEE"}
                    onClick={() => handleClick("EXPLORER")}
                />
            </IconContainer>
            <IconContainer active={activeItemNav === "SEARCH"}>
                <GoSearch
                    size={24}
                    color={"#EEE"}
                    onClick={() => handleClick("SEARCH")}
                />
            </IconContainer>
        </NavContainer>
    );
}
