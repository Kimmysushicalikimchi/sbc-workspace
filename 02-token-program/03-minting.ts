import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'

import base58 from 'bs58';
async function main(){

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK);

    const mintToken = await token.mintTo(
        connection,
        signer,
        new Web3.PublicKey('4x3eTW7mt7yFe5LkbevqaQfLunhA7jUETrd3rVogMQ1j'), //mint 
        new Web3.PublicKey('FxgP1DR5XnchBC4zPFvC7QPzGLW7rwisqb3Uow6jHZBU'), //owner
        new Web3.PublicKey('uyh4oNM21BcinrKeAKmaeKAXcG4K2ro6bFFPpBPdCwm'), //authority
        100, //amount
    )
    console.log('mint Token ', mintToken)
    //mint token: 2f4A9nhYqkPjbmrtExbaGVSberTiN21MTNnyHQvBeGsW6dJDNjdzvbmNYEqSfddhNdWCEcyX5oQhFBERVoahRSrC

}
main()