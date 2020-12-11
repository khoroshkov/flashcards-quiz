export const decodeString = function (str) {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = str;
  return textArea.value;
};
