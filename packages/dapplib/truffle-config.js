require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey ensure success shadow shock note shift protect inflict problem bone vibrant'; 
let testAccounts = [
"0x10995a6f2b36182ef9828fb274b670fc7605a01a23d83389a0304e5e073d635f",
"0x51647f1a7c8e93ca6bca10a15c0909735b02223c95c6dd70134bf6f6b4882af4",
"0xc7a50fb3544514f799faa338990202cf85c436b5e0b39f4550a568c7721c97ae",
"0x156b32fca7ad7d42e28cc7f1f1364256218ec347a0693bbc902ecdff24be00eb",
"0x8cbc00c8f252fd905321854af62cd8766296031723e20a872cb99cabce5a16a2",
"0x7c145f1a50b7f6ebafc352235be8d1f2c6e4faac3ed1d17cc24fa34651e08011",
"0x4f93129ee72b52100ccac278dfdfdc1505301a1e755387c76d4610875645ed87",
"0x8e1924af64d8e87f46ac57a1bb2034a9837a57ab191f2d392a4fd1b098ffba5c",
"0x5391f1f02717b64603ca2e2c9f95f4c5a0ab2d46ea5ce76879471d1d57502e93",
"0x98ff97db7031f252810ebc92d59cc7def1d56bc9c3049a76a46daecc3c664144"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

