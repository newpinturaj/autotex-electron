/* eslint import/prefer-default-export: off */
import { URL } from 'url';
import path from 'path';

export function resolveHtmlPath(htmlFileName: string) {
  if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || 1212;
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  }
  return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
}

export function toArrayBuffer(buffer: any) {
  const ab = new ArrayBuffer(buffer.length);
  const view = new Uint8Array(ab);
  for (let i = 0; i < buffer.length; i += 1) {
    view[i] = buffer[i];
  }
  return ab;
}

// // From ArrayBuffer to Buffer:

// export function toBuffer(ab) {
//   const buffer = new Buffer(ab.byteLength);
//   const view = new Uint8Array(ab);
//   for (let i = 0; i < buffer.length; i += 1) {
//     buffer[i] = view[i];
//   }
//   return buffer;
// }
