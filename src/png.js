import { PNG } from "pngjs";
export const bufferToPng = buffer => {
  const png = new PNG();

  return new Promise((resolve, reject) => {
    png.parse(buffer, (error, data) => {
      if (error) reject(error);
      resolve(data);
    });
  });
};
