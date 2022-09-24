import { Tx } from "./tx";
import { Validator } from "./validator";

//ブロッック
export type Block = {
    //何番目のブロックか
    index: number;
    //ブロックが作られた時刻 
    time : string;
    //１つ前のブロックのハッシュ
    prev_hash: string;
    //このブロックのハッシュ
    hash: string;
    //トランザクション
    tx: Tx;
    //バリデータ
    validator: Validator;
};