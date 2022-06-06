/**
 * This is the function for the backend:
 *
 * You receive the address at the endpoint
 *
 */
const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

const verifyWhitelist = (address) => {
  const whiteListArray = require('../whitelist/whitelist').whitelist;

  var index;
  for (let i = 0; i < whiteListArray.length; i++) {
    if (whiteListArray[i].data.includes(address)) {
      index = i;
      break;
    }
  }

  if (index === null || index === undefined) return { verified: false };

  const leaves = whiteListArray[index].data.map((v) => keccak256(v));

  const tree = new MerkleTree(leaves, keccak256, { sort: true });
  const root = tree.getHexRoot();
  const leaf = keccak256(address);
  const proof = tree.getHexProof(leaf);
  const verified = tree.verify(proof, leaf, root);
  console.log({ proof, leaf, root });
  return { proof, leaf, verified, limit: whiteListArray[index].limit };
};

const getWhitelistRoot = () => {
  const whiteListArray = require('../whitelist/whitelist').whitelist;

  const leaves = whiteListArray.map((v) => keccak256(v));
  const tree = new MerkleTree(leaves, keccak256, { sort: true });
  return tree.getHexRoot();
};

module.exports = {
  verifyWhitelist,
  getWhitelistRoot,
};
