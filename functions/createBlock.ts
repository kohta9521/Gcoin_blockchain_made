import { Block } from '../PosseCoin/block';
import { Tx } from "../PosseCoin/tx";
import { Validator, validator } from "../PosseCoin/validator";
import { calcBlockHash } from './calcBlockHash';

//新しいブロックを作成
export async function createBlock(
    prevBlock: Block,
    tx: Tx,
    validator: Validator,
): Promise<Block> {
    //現在時刻
    const time = new Date().toISOString();
    //インデックス
    const index = prevBlock.index + 1;
    //ハッシュ
    const hash = await calcBlockHash(
        index,
        time,
        prevBlock.hash,
        tx,
        validator,
    );
    //新しいブロックオブジェクト
    const  newBlock: Block = {
        index: index,
        time: time,
        prev_hash: prevBlock.hash,
        hash: hash,
        tx: tx,
        validator: validator,
    }
};