const incomingBranchName = danger.git.pr.sourceRefName
const baseBranchName = danger.git.pr.targetRefName

fail('You will merge' + baseBranchName + 'from' + incomingBranchName)
