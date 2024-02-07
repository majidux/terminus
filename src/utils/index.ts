import crypto from 'crypto';

export function handleHashString(password: string): string {
  try {
    const salt = crypto.randomBytes(16).toString('hex');
    return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    // return await crypto.createHmac('aes-128-cbc',password);
  } catch(err) {
    throw new Error(err);
  }
}

export function handleDecodeHashString(
  hashedPassword: string,
  password: string,
): boolean {
  try {
    const salt = crypto.randomBytes(16).toString('hex');
    const newHash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');

    return newHash === hashedPassword;
    // return crypto.verify(hashedPassword,'sha256');
    // return await argon2?.verify(hashedPassword, password);
  } catch(err) {
    throw new Error(err);
  }
}
