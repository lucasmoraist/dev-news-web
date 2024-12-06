import { useState } from "react";
import style from "./new-post.module.scss";
import { Banner } from "./components/banner";
import { BackButton } from "./components/back-button";
import { TextEditor } from "./components/text-editor";

export function NewPost() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>();
  const [file, setFile] = useState<File>();

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
      <BackButton />
      <Banner file={file} setFile={setFile} />
      
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

      <TextEditor content={content} setContent={setContent} />
    </div>
  );
}
