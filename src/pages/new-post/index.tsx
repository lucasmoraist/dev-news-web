import { useState } from "react";
import style from "./new-post.module.scss";
import { Banner } from "./components/banner";
import { BackButton } from "./components/back-button";
import { TextEditor } from "./components/text-editor";
import { savePost } from "@/api/post/savePost";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/input";

interface PostData {
  title: string;
  content: string;
  file: File | undefined;
}

export function NewPost() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [file, setFile] = useState<File>();

  const handleSave = async () => {
    const data: PostData = {
      title: title,
      content: content,
      file: file,
    };

    try {
      await savePost(data);
    } catch (error) {
      console.error("Erro ao criar post", error);
    }
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
