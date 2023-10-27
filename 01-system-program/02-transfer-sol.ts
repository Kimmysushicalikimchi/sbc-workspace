import * as Web3 from '@solana/web3.js';
import base58 from 'bs58'

async function main() {
    const decoded = base58.decode('29h3k4emPR5HDyh4WD37WSLjcG3tumM5cLmionJqDBT7ES3sP3BQXRjFD5aNatzAAXFBvg2xnLbd1vKNAxfHFke2')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)

    const publicKeyFrom = new Web3.PublicKey('FxgP1DR5XnchBC4zPFvC7QPzGLW7rwisqb3Uow6jHZBU');
    const publicKeyTo = new Web3.PublicKey('SPDyByKFWTkjq2HDMB1u4Bj7kSiv9FpgHCtXyWdZ2LL');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 1,
    });
    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

    console.log('txHash', txSignature)
}

main();