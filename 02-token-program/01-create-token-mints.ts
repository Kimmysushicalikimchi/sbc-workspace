// 01-token-mint

//ts
import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))

const publickey = new Web3.PublicKey("FxgP1DR5XnchBC4zPFvC7QPzGLW7rwisqb3Uow6jHZBU")
const decoded = base58.decode('29h3k4emPR5HDyh4WD37WSLjcG3tumM5cLmionJqDBT7ES3sP3BQXRjFD5aNatzAAXFBvg2xnLbd1vKNAxfHFke2')
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main(){
    const tokenMint = await token.createMint(
        connection,
        keyPair,
        publickey, // mint auth
        publickey, // freeze auth
        9 //decimals
    )
    console.log(tokenMint.toBase58());
}

main();
