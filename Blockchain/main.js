const {Blockchain,Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('90299e0fd89fbc0247aecc67b330f5220226aeee3e98a730679c2af0c409a8f4')
const myWalletAddress = myKey.getPublic('hex');


let coin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
coin.addTransaction(tx1);


console.log('\n Starting the miner...');
coin.mineTransactionPool(myWalletAddress);

console.log('\nMy balance is', coin.getBalanceOfAddress(myWalletAddress));

coin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid?', coin.isValid());


