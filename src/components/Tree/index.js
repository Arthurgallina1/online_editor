import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { FolderContainer, HeaderContainer } from "./styles";
import File from "../File";
import TreeRecursive from "../TreeRecursive";

export default function Tree({ data, children }) {
    const isTree = data && !children;
    return (
        <HeaderContainer>
            {data && <TreeRecursive data={data} />}
        </HeaderContainer>
    );
}
