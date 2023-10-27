// @solana/web3.js
import * as Web3 from '@solana/web3.js';

async function main() {
    const publicKey = new Web3.PublicKey('FxgP1DR5XnchBC4zPFvC7QPzGLW7rwisqb3Uow6jHZBU');
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const balance = await connection.getBalance(publicKey);
    console.log('balance', balance);
}

main()