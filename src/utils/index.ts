import crypto from 'crypto';

// export function handleHashString(param: string) {
//   return createCipheriv('aes-256-gcm', 'password', getIV(), {
//     authTagLength: 16,
//   });
//   //   return createHash('md5').update(param).digest('hex');
// }

// export function handleDecodeHashString(param: string) {
//   //   const hashPass = createDecipheriv(param);
//   //   return hashPass;
// }

export function handleHashString(clearText) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-192-cbc', 'key', iv);
  const encrypted = cipher.update(clearText, 'utf8', 'hex');
  return [
    encrypted + cipher.final('hex'),
    Buffer.from(iv).toString('hex'),
  ].join('|');
}

export function handleDecodeHashString(encryptedText) {
  const [encrypted, iv] = encryptedText.split('|');
  if (!iv) throw new Error('IV not found');
  const decipher = crypto.createDecipheriv(
    'aes-192-cbc',
    'key',
    Buffer.from(iv, 'hex'),
  );
  return decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');
}
