import { danger } from 'danger';

const incomingBranchName = danger.github.pr.head.ref
const baseBranchName = danger.github.pr.base.ref

// mainブランチにはhotfix/*, release/*のみマージ可能
if (baseBranchName === 'main' && !incomingBranchName.startsWith('hotfix/')) {
  fail(baseBranchName + ' branch can only be merged with' + 'feature branch')
}

if (baseBranchName === 'main' && !incomingBranchName.startsWith('release/')) {
  fail(baseBranchName + ' branch can only be merged with' + 'feature branch')
}

// developブランチにはfeature/*のみマージ可能
if (baseBranchName === 'develop' && !incomingBranchName.startsWith('feature/')) {
  fail(baseBranchName + ' branch can only be merged with' + 'feature branch')
}
