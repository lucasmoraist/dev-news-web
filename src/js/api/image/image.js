const apiUrl = "http://localhost:8080";

async function getImage(filename) {
  try {
    const response = await fetch(`${apiUrl}/image/v1/${filename}.png`);

    if (!response.ok) {
      throw new Error("Erro ao recuperar a imagem");
    }

    const blob = await response.blob();

    return URL.createObjectURL(blob);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export { getImage };
