//import 
import { Tx } from "../PosseCoin/tx";
import { Validator } from "../PosseCoin/validator";

//Hash (SHA256)
export async function hash(str: string): Promise<string> {
    const u8Ary = new TextEncoder().encode(str);
    const digest = await crypto.subtle.digest("SHA-256", u8Ary);
    const rawHash = Array.from(new Uint8Array(digest));
    return rawHash.map((b) => b.toString(16).padStart(2, "0")).join("");
}

//ブロックのハッシュを計算 
export async function calcBlockHash(
    index: number,
    time : strin,
    prev_hash: string,
    hash: string,
    tx: Tx,
    validator: Validator,
): Promise<string> {
    //ブロックの中身を文字にして繋げる
    const str = index.toString() +
    time +
    prev_hash +
    JSON.stringify(tx) +
    JSON.stringify(validator);

    return await hash(str);

};