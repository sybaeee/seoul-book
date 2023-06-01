import React, { useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const MarkupNote = () => {
  const [content, setContent] = useState("");
  const quillRef = useRef(null);
  const inputRef = useRef(null);

  const handleEditorChange = (value) => {
    setContent(value);
    console.log(value);
  };

  const quillStyle = {
    height: "100%",
  };

  const handleImage = ()=>{
    inputRef.current.click();
    console.log(inputRef.current)
    // inputRef.current.addEventListenr('change' , (e)=>{
    //   console.log('dd', e.target.files)
    // }
    // )
      
      const file = inputRef.current.files[0];
      console.log(file);

      // try {
      //   const res = await imageApi({ img: file });
      //   const imgUrl = res.data.imgUrl;
      //   const editor = quillRef.current.getEditor(); 
      //   const range = editor.getSelection();
      //   editor.insertEmbed(range.index, 'image', imgUrl);
      //   editor.setSelection(range.index + 1);
      // } catch (error) {
      //   console.log(error);
      // }
    
  }
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: '1' }, { header: '2' }],
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }, { align: [] }],
          ['image'],
        ],
        handlers: { image: handleImage },
      },
      clipboard: {
        matchVisual: false,
      },
    }),
    [],
  );

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'align',
    'image',
  ];

  const readImage = (input) => {
		// 인풋 태그에 파일이 있는 경우
		if (input.target.files && input.target.files[0]) {
				// FileReader 인스턴스 생성
				const reader = new FileReader();
				// reader가 이미지 읽도록 하기
				reader.readAsDataURL(input.target.files[0]);
				// 이미지가 로드가 된 경우
				reader.onload = (e) => {
					const previewImage = document.getElementById('image');
					previewImage.src = e.target.result;
			}
		}
	};

  return (
    <div
      style={{
        width: "800px",
        height: "500px",
        backgroundColor: "#fff",
      }}
    >
      <input onChange={(e)=>{console.log(e.target.files)}} type="file" accept="image/*" ref={inputRef}/>
      <ReactQuill
        ref={quillRef}
        modules={modules}
        formats={formats}
        value={content}
        onChange={handleEditorChange}
        style={quillStyle}
      />
    </div>
  );
};

export default MarkupNote;
