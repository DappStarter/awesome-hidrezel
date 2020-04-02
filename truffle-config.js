require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note payment clutch include cloth off suggest'; 
let testAccounts = [
"0x9fd299772fd2cf897343994176c086c84368d6db0d7589d8f5978539cbda7250",
"0xe46d4075399c67f1b4c2096c121cd60f89057c960b4ea8ae2deb86343022dbf1",
"0x2840366a9054b6470eca7fcdd415cd536ae8f13829087bec43138921d0c6353b",
"0x148a8fef3f2355be9f84175df15a0482c9fe1ab5001e91da450db040d81119b8",
"0xc7c01a1436b2bab3245fecedf87b4b6f876dfd028a8f956aeafffb1ddfac4343",
"0xa54a878a5f596c43959a7c4e4a6b86dddecd7ad64582940182ec27f347437202",
"0xb4914a3d30bb707cd46b30c2e7077c8704425f054e091b23d5a471863e975c6f",
"0x0bf7912ac50c58bb9c1926872d7a59373813e4d9f3d409f90b8a6487791e6359",
"0x4b880e7c59f941971563b195ddc79fafaf941be1916871ec906f9099a2f051f8",
"0xdc86162230a743a751d517c7a12d6d1e522ce47c3fdf0934b168db31b1088202"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            version: '^0.5.11'
        }
    }
};
