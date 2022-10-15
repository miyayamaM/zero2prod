import { danger } from 'danger';

const incomingBranchName = danger.github.pr.head.ref
const baseBranchName = danger.github.pr.base.ref

fail('You will merge' + baseBranchName + 'from' + incomingBranchName)
