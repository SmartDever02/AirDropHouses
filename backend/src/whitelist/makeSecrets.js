const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

const whitelists = require('./whitelist.js').whitelist;

function makeRoots() {
  const leaves = whitelists.map((whitelist) => {
    const leave = whitelist.data.map((v) => keccak256(v));
    //console.log(leave);
    return leave;
  });

  console.log(leaves[4][0]);

  const trees = leaves.map(
    (leave) => new MerkleTree(leave, keccak256, { sort: true })
  );
  const roots = trees.map((tree) => tree.getHexRoot());

  // const proof = tree.getHexProof(leaf);
  // const verified = tree.verify(proof, leaf, root);

  const provesArray = leaves.map((leave, index) => {
    let proves = leave.map((leaf) => trees[index].getHexProof(leaf));
    return proves;
  });

  const secretData = roots.map((root, index) => {
    let data = {
      limit: whitelists[index].limit,
      root: root,
      proves: provesArray[index].map((proves) => proves[0]),
    };
    return data;
  });

  const fs = require('fs');

  const content = JSON.stringify(secretData);

  try {
    fs.writeFileSync('./result.json', content);
    // file written successfully
    console.log('successfully');
  } catch (err) {
    console.error(err);
  }

  console.log(secretData);

  // roots.map((root, index) =>
  //   console.log(
  //     'limit: ' +
  //       whitelists[index].limit +
  //       '\n roots: ' +
  //       root +
  //       '\n proves:' +
  //       provesArray[index]
  //   )
  // );
}

makeRoots();
