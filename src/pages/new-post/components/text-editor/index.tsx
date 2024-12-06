import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import style from "./text-editor.module.scss";

interface Props {
  content: string | undefined;
  setContent: (content: string) => void;
}

export function TextEditor({ content, setContent }: Props) {
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
  return (
    <div className={style.editingArea}>
      <ReactQuill
        theme="snow"
        placeholder="Escreva seu texto aqui..."
        modules={modules}
        formats={formats}
        value={content}
        onChange={setContent}
        style={{ height: "100%" }}
      />
    </div>
  );
}
