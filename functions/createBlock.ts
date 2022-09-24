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

};