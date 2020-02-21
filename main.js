const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('519db315b20e371ae6a2bd08b96992ce94fa16d6ef41405a310527a328658f13');
const myWalletAddress = myKey.getPublic('hex');

let bc = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
bc.addTranscation(tx1);

console.log("\n Starting the miner...");
bc.minePendingTransactions(myWalletAddress);

console.log("\nBalance of Fredrik is", bc.getBalanceOfAddress(myWalletAddress));

bc.chain[1].transactions[0].amount = 1;

console.log("is chain valid? ", bc.isChainValid());
