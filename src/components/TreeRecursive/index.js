import React from "react";
import File from "../File";
import Folder from "../Folder";

export default function TreeRecursive({ data }) {
    console.log("entrei tr");

    return (
        data &&
        data.map((item) => {
            console.debug("tr", item.children);

            if (!item.isDirectory) {
                return <File name={item.name} key={item.id} />;
            } else {
                return (
                    <Folder name={item.name} key={item.id}>
                        <TreeRecursive data={item.children} />
                    </Folder>
                );
            }
        })
    );
}
