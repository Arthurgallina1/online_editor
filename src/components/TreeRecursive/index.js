import React from "react";
import File from "../File";
import Folder from "../Folder";

export default function TreeRecursive({ data }) {
    return (
        data &&
        data.map((item) => {
            if (!item.isDirectory) {
                return <File name={item.name} key={item.id} id={item.id} />;
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
