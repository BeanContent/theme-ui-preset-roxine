export default function toUpperCase(string = "") {
  const splitString = string.split(" ");
 
  splitString.forEach((text,index) => {
    splitString[index] = text.replace(text[0], text[0].toUpperCase());
  });
  return splitString.join(' ');
}
