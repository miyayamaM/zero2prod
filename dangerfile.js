// import danger from 'danger';

// const incomingBranchName = danger.github.pr.head.ref
// const baseBranchName = danger.github.pr.base.ref

// const allowedMergingBranchList = {
//   'main': ['hotfix', 'release'],
//   'develop': ['feature']
// }

// let canMerge = false;

// for (var allowedPrefix in allowedMergingBranchList[baseBranchName]) {
//   if (incomingBranchName.startsWith(allowedPrefix)) {
//     canMerge = true
//   }
// }

// if (!canMerge) {
//   fail('Merging ' + baseBranchName + ' branch with ' + incomingBranchName + ' branch is not allowed.')
// }

// import { danger, fail } from 'danger';

const baseBranchName = danger.github.pr.base.ref
const headBranchName = danger.github.pr.head.ref

if (baseBranchName === 'main' && !headBranchName.startsWith('release/')) {
  fail(baseBranchName + ' branch cannot be merged with ' + headBranchName + ' branch.')
}
