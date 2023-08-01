import styles from "./DocumentRegistration.module.css"
import {useEffect, useRef, useState} from "react";
import fetcher from "../../fetcher";
import {
    CATEGORY_CREATE_API, CATEGORY_DELETE_API, CATEGORY_LIST_API,
    SHOW_CATEGORY_API, UPDATE_CATEGORY_API
} from "../../constants/api_constans";
import Dropdown from "react-bootstrap/Dropdown";
// Toast 에디터
import {Editor} from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/i18n/ko-kr';
import '@toast-ui/editor/dist/toastui-editor.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

function DocumentRegistration() {
    const [title, setTitle] = useState("")
    // const [category, setCategory] = useState("")
    const [content, setContent] = useState("")
    const [category, setCategory] = useState("")
    const [categoryList, setCategoryList] = useState([])
    const [htmlData, setHtmlData] = useState("")


    const editorRef = useRef();
    const onChange = () => {
        const data = editorRef.current?.getInstance().getHTML();
        setContent(data)
        console.log("content : ",content)
    };

    const fetchCategoryList = () =>{
        fetcher().get(CATEGORY_LIST_API)
            .then((res) => setCategoryList(res.data))
    }

    useEffect(()=>{
        fetchCategoryList()
    }, [])

    const createCategory = ()=>{
        fetcher().post(CATEGORY_CREATE_API,{
            // category: category,
            title: title,
            content: content
        })
            .then(()=> {
                alert("양식 등록 완료.")
                resetInput()
                fetchCategoryList()
            })
    }
    const updateCategory = (id, title) => {
        fetcher().put(`${UPDATE_CATEGORY_API}/${id}`,{
            title: title,
            content:content
        })
            .then(()=> {
                alert("양식 수정 완료.")
                resetInput()
                fetchCategoryList()
            })
    }
    const selectCategory = (id)=>{
        fetcher().get(`${SHOW_CATEGORY_API}/${id}`)
            .then((res)=> {
                setCategory(res.data)
                setHtmlData(res.data.content)
                editorRef.current?.getInstance().setHTML(htmlData);
            })
        console.log(category)
        console.log(htmlData)
    }
    const deleteCategory = (id) =>{
        fetcher().delete(`${CATEGORY_DELETE_API}/${id}`)
            .then(()=>{
                alert("양식 삭제 완료")
                fetchCategoryList()
            })
    }

    const resetInput = () => {
        setTitle("")
        setContent("")
        // 양식명은 비워지는데 내용은 안됨
    }

    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <input value={title}
                       onChange={(e)=>setTitle(e.target.value)}
                        placeholder="양식명"
                />
                <button onClick={createCategory}>등록</button>
                {/*<input value={category}*/}
                {/*       onChange={(e)=>setCategory(e.target.value)}*/}
                {/*       placeholder="양식명"*/}
                {/*/>*/}

                <Dropdown>
                    <Dropdown.Toggle className="button">
                        {category? category.title : "문서양식"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {categoryList.map((data) => {
                            return (
                                <Dropdown.Item key={data.id} onClick={()=>selectCategory(data.id)}>
                                    {data.title}
                                </Dropdown.Item>
                            )
                        })}
                    </Dropdown.Menu>
                </Dropdown>

                <button onClick={()=>updateCategory(category.id, category.title)}>양식수정</button>
                <button onClick={()=>deleteCategory(category.id)}>양식삭제</button>
            </div>
            <div>
                <Editor
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
            </div>
        </div>
    )
}

export default DocumentRegistration