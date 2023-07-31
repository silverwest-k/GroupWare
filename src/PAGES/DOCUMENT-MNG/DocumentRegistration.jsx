import styles from "./DocumentRegistration.module.css"
// Toast 에디터
import {Editor} from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/i18n/ko-kr';
import '@toast-ui/editor/dist/toastui-editor.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import {useEffect, useRef, useState} from "react";
import fetcher from "../../fetcher";
import {CATEGORY_CREATE_API} from "../../constants/api_constans";

function DocumentRegistration() {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [content, setContent] = useState("")

    const editorRef = useRef();
    const onChange = () => {
        const data = editorRef.current?.getInstance().getHTML();
        setContent(data)
        console.log("content : ",content)
    };

    const createCategory = ()=>{
        fetcher().post(CATEGORY_CREATE_API,{
            category: category,
            title: title,
            content: content
        })
    }

    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <div>
                <input value={title}
                       onChange={(e)=>setTitle(e.target.value)}
                        placeholder="양식명"
                />
                <input value={category}
                       onChange={(e)=>setCategory(e.target.value)}
                       placeholder="카테고리"
                />
            </div>
            <div>
                <Editor
                    // ref={editorRef as React.LegacyRef<Editor>}
                    ref={editorRef}
                    previewStyle="vertical"
                    height="700px"
                    initialEditType="wysiwyg"
                    language="ko-KR"
                    plugins={[colorSyntax]}
                    hideModeSwitch={true}
                    useCommandShortcut={false}
                    onChange={onChange}
                    toolbarItems={[
                        // 툴바 옵션 설정
                        ['heading', 'bold', 'italic', 'strike'],
                        ['hr', 'quote'],
                        ['ul', 'ol', 'task', 'indent', 'outdent'],
                        ['table', 'image', 'link'],
                        ['code', 'codeblock']
                    ]}
                ></Editor>

                <button onClick={createCategory}>등록</button>

            </div>
        </div>
    )
}

export default DocumentRegistration