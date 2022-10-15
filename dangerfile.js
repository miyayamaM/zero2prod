import { danger } from 'danger';

const incomingBranchName = danger.github.pr.head.ref
const baseBranchName = danger.github.pr.base.ref

const allowedMergingBranchList = {
  'main': ['hotfix', 'release'],
  'develop': ['feature']
}

const allowedMergingBranch = allowedMergingBranchList[baseBranchName]

let canMerge = false;

for (var allowedPrefix in allowedMergingBranch) {
  if (incomingBranchName.startsWith(allowedPrefix)) {
    canMerge = true
  }
}

if (!canMerge) {
  fail('Merging ' + baseBranchName + ' branch with ' + incomingBranchName + 'branch is not allowed.')
}
