import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"
import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
const publickey = new Web3.PublicKey("FxgP1DR5XnchBC4zPFvC7QPzGLW7rwisqb3Uow6jHZBU") // PUBKEY of person you want to create the token account

const decoded = base58.decode('29h3k4emPR5HDyh4WD37WSLjcG3tumM5cLmionJqDBT7ES3sP3BQXRjFD5aNatzAAXFBvg2xnLbd1vKNAxfHFke2')
const keyPair = Web3.Keypair.fromSecretKey(decoded)
const tokenMint = "4x3eTW7mt7yFe5LkbevqaQfLunhA7jUETrd3rVogMQ1j"

async function main(){
    const tokenAccount  = await token.createAccount(
        connection, // connection
        keyPair, // signer
        new Web3.PublicKey(tokenMint), // mint public key
        publickey, // owner of the token-account
    );
    console.log(tokenAccount.toBase58());
}

main();