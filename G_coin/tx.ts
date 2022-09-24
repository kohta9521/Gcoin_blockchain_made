//トランザクション　取引の記録
export type Tx = {
    //取引のID
    id: string;
    //取引のお金はどこから来たのか　入金
    inputs: Input[]
    //取引のお金はどうなるのか　出勤
    outputs: Output[]
};