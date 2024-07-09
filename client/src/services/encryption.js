import CryptoJS from 'crypto-js';

const SECRET_KEY = process.env.REACT_APP_ENCRYPTION_KEY || 'default-secret-key';

export const encryptMessage = (message) => {
  return CryptoJS.AES.encrypt(message, SECRET_KEY).toString();
};

export const decryptMessage = (encryptedMessage) => {
  const bytes = CryptoJS.AES.decrypt(encryptedMessage, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};

export const generateRoomKey = () => {
  return CryptoJS.lib.WordArray.random(16).toString();
};

export const encryptForRoom = (message, roomKey) => {
  return CryptoJS.AES.encrypt(message, roomKey).toString();
};

export const decryptFromRoom = (encryptedMessage, roomKey) => {
  const bytes = CryptoJS.AES.decrypt(encryptedMessage, roomKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};