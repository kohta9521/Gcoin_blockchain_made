//ブロッック
type Block = {
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