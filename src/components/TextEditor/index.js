import React, { useEffect, useState, useContext } from "react";
import { IoIosClose, IoIosSave } from "react-icons/io";
import { BsCircleFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import {
    TextContainer,
    TextArea,
    FileTab,
    TabCont,
    TextAreaInput,
    PopUpContainer,
    Button,
    ButtonsContainer,
} from "./styles";
import { AppContext } from "../../utils/context";
import {
    getFileData,
    updateFileData,
    deleteFile,
} from "../../utils/filesService";

export default function TextEditor() {
    const [content, setContent] = useState("");
    const [showPopUp, setShowPopUp] = useState(false);
    const [popUpMsg, setPopUpMsg] = useState("");

    const {
        setOpenFile,
        openFile,
        isEditting,
        setIsEditting,
        files,
        setFiles,
        fileTree,
        setFileTree,
    } = useContext(AppContext);

    useEffect(() => {
        async function getFile() {
            try {
                // const response = await getFileData(openFile.id);
                const file = files.find((file) => file.id === openFile.id);
                setContent(file.content);
            } catch (err) {}
        }
        getFile();
    }, [openFile, files]);

    const handleUnsavedClose = () => {
        setPopUpMsg(
            `Do you want to save changes you made to ${openFile.name}?`
        );
        setShowPopUp(true);
    };

    const handleSave = async () => {
        try {
            const updatedFile = { ...openFile, content: content };
            const updatedFiles = files.map((file) =>
                file.id === openFile.id
                    ? Object.assign({}, file, { content })
                    : file
            );
            // console.debug("updatedFIle", updatedFiles);
            setFiles(updatedFiles);
            await updateFileData(updatedFile);
            setShowPopUp(false);
            setIsEditting(false);
        } catch (err) {}
    };

    const handleClose = () => {
        setShowPopUp(false);
    };

    function filterObject(obj, fileId) {
        for (var i in obj) {
            if (!obj.hasOwnProperty(i)) continue;
            if (typeof obj[i] == "object") {
                filterObject(obj[i], fileId);
            } else if (obj[i] === fileId) {
                delete obj["id"];
                delete obj["name"];
                delete obj["isDirectory"];
            }
        }
        return obj;
    }

    const handleDelete = async () => {
        try {
            const fileId = openFile.id;
            await deleteFile(fileId);
            const updatedFileTree = filterObject(fileTree, openFile.id);
            setFileTree(updatedFileTree);
            setShowPopUp(false);
            setIsEditting(false);
            setOpenFile("");
        } catch (err) {}
    };

    return (
        <TextContainer>
            {openFile && (
                <TabCont>
                    <FileTab>
                        <h3>{openFile.name} </h3>
                        {!isEditting ? (
                            <IoIosClose
                                size={20}
                                color={"#eee"}
                                onClick={() => setOpenFile("")}
                            />
                        ) : (
                            <BsCircleFill
                                size={9}
                                color={"#eee"}
                                onClick={handleUnsavedClose}
                            />
                        )}
                    </FileTab>
                    <ButtonsContainer>
                        <IoIosSave
                            size={20}
                            color={"#eee"}
                            onClick={handleSave}
                        />
                        <MdDelete
                            size={18}
                            color={"#eee"}
                            onClick={handleDelete}
                        />
                    </ButtonsContainer>
                </TabCont>
            )}
            {showPopUp && (
                <PopUpContainer>
                    <span>{popUpMsg}</span>
                    <Button onClick={handleSave}>Save</Button>
                    <Button secondary onClick={handleClose}>
                        Close
                    </Button>
                </PopUpContainer>
            )}
            <TextArea>
                {openFile ? (
                    <TextAreaInput
                        value={content}
                        onChange={(e) => {
                            setContent(e.target.value);
                            setIsEditting(true);
                        }}
                    />
                ) : (
                    <FaEdit size={20} color={"#ddd"} />
                )}
            </TextArea>
        </TextContainer>
    );
}
