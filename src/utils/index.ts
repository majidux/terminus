const argon2 = require('argon2');

export async function handleHashString(password: string): Promise<string> {
  try {
    return await argon2.hash(password);
  } catch (err) {
    throw new Error(err);
  }
}

export async function handleDecodeHashString(
  hashedPassword: string,
  password: string,
): Promise<boolean> {
  try {
    return await argon2?.verify(hashedPassword, password);
  } catch (err) {
    throw new Error(err);
  }
}
