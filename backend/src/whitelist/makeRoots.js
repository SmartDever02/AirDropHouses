const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

const whitelists = require('./whitelist.js').whitelist;

function makeRoots() {
  const leaves = whitelists.map((whitelist) => {
    const leave = whitelist.data.map((v) => keccak256(v));
    return leave;
  });

  const trees = leaves.map(
    (leave) => new MerkleTree(leave, keccak256, { sort: true })
  );
  const roots = trees.map((tree) => tree.getHexRoot());

  roots.map((root, index) =>
    console.log('limit: ' + whitelists[index].limit + '\n roots: ' + root)
  );
}

makeRoots();
