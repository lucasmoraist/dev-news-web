export const formatedDate = (date) => {
  const dateObj = new Date(date);
  return `${dateObj.toLocaleString("en", {
    month: "short",
  })} ${dateObj.getDate()}th ${dateObj.getFullYear()}`;
};
