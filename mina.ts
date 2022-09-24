import { createTx } from "./functions/createTx";
import { pickWinner } from "./functions/pickWinner";
import { Block } from "./PosseCoin/block";
import { createBlock } from "./functions/createBlock";

//メイン関数実行
main();

async function main() {
    //txを用意する
    const tx = createTx();

    //くじびきでバリデーターを選ぶ
    const validator = pickWinner();

    //1つ前のブロックを取得する
    const file = "./db/blockchain.json";
    let text = await DelayNode.readTextFile(file);
    const blocks: Block[] = JSON.parse(text);
    const prevBlock = blocks[blocks.length - 1];

    //新しいブロックを作成
    const newBlock = await createBlock(
        prevBlock,
        tx,
        validator,
    );

    //ブロックチェーンに追加
    blocks.push(newBlock);
    text =  JSON.stringify(blocks, null, 2);
    const opt = {append: false, vreate: false};
    await DelayNode.writeTextFile(file, text, opt);
}