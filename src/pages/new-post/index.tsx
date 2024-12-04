import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useState } from "react";
import style from "./new-post.module.scss";
import { Link } from "react-router-dom";

export function NewPost() {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>();
  const [file, setFile] = useState<File>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSave = () => {
    const data = {
      title: title,
      content: content,
      file: file,
    };

    console.log(data);
  };

  return (
    <div className={style.container}>
      <div className={style.voltar}>
        <Link to={"/"}>Voltar</Link>
      </div>

      {file ? (
        <img
          src={URL.createObjectURL(file)}
          alt="Banner"
          className={style.imageBanner}
        />
      ) : (
        <div className={style.banner}>
          <span>Escolha uma imagem de banner</span>
          <input type="file" onChange={handleFileChange} />
        </div>
      )}
      <div className={style.header}>
        <input
          type="text"
          placeholder="Digite o título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={style.title}
        />

        <button onClick={handleSave} className={style.button}>
          Publicar
        </button>
      </div>

      <div className={style.editingArea}>
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          value={content}
          onChange={setContent}
          style={{ height: "100%" }}
        />
      </div>
    </div>
  );
}
