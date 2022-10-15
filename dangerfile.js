import { danger } from 'danger';

const incomingBranchName = danger.github.pr.head.ref
const baseBranchName = danger.github.pr.base.ref

// mainブランチにはhotfix/*, release/*のみマージ可能
if (baseBranchName === 'main') {
  if (!incomingBranchName.startsWith('hotfix/') || !incomingBranchName.startsWith('release/')) {
    fail(baseBranchName + ' branch can only be merged with hotfix/release branch')
  }
}

// developブランチにはfeature/*のみマージ可能
if (baseBranchName === 'develop' && !incomingBranchName.startsWith('feature/')) {
  fail(baseBranchName + ' branch can only be merged with feature branch')
}
