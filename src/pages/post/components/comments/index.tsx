import { useState } from "react";
import ReactQuill from "react-quill";
import style from "./comments.module.scss";

const comments = [
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    user: {
      id: 1,
      name: "John Doe",
    },
  },
  {
    id: 2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    user: {
      id: 1,
      name: "John Doe",
    },
  },
  {
    id: 3,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    user: {
      id: 1,
      name: "John Doe",
    },
  },
  {
    id: 4,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    user: {
      id: 1,
      name: "John Doe",
    },
  },
  {
    id: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    user: {
      id: 1,
      name: "John Doe",
    },
  },
];

export function Comments() {
  const [limit, setLimit] = useState(3);

  const handleLoadMore = () => {
    const maxLimit = comments.length;
    if (limit < maxLimit) {
      setLimit(limit + 3);
    }
  };

  return (
    <div className={style.container}>
        <div className={style.quill}>
          <ReactQuill theme="snow" className={style.quillEditor} />
          <button>Comentar</button>
        </div>

      <div>
        {comments.slice(0, limit).map((c) => (
          <div key={c.id}>
            <h3>{c.user.name}</h3>
            <p>{c.content}</p>
          </div>
        ))}
        <button onClick={handleLoadMore}>Ver mais</button>
      </div>
    </div>
  );
}
