const incomingBranchName = github.pr_json['sourceRefName']
const baseBranchName = github.pr_json['targetRefName']

fail('You will merge' + baseBranchName + 'from' + incomingBranchName)
