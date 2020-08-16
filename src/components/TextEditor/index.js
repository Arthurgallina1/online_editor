import React, { useEffect, useState } from "react";
import { TextContainer, TextArea, FileTab, TabCont } from "./styles";
import { getFileData } from "../../utils/filesService";

export default function TextEditor({ openFile }) {
    const [content, setContent] = useState("");
    useEffect(() => {
        async function getFile() {
            try {
                const response = await getFileData(openFile.id);
                setContent(response.data);
            } catch (err) {}
        }
        getFile();
    }, [openFile]);
    const text =
        content && content.content.replace('"', "`").replace("\\n", "${<br/>}");

    console.log(text);
    return (
        <TextContainer>
            <TabCont>
                <FileTab>
                    <h3>{openFile.name}</h3>
                </FileTab>
            </TabCont>
            <TextArea>{text}</TextArea>
        </TextContainer>
    );
}
