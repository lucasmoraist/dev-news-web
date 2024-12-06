import style from './banner.module.scss';

interface Props {
  file: File | undefined;
  setFile: (file: File) => void;
}

export function Banner({ file, setFile }: Props) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  
  return (
    <>
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
    </>
  );
}
