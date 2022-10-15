const hasChangelog = danger.git.modified_files.includes('CHANGELOG.md')
const isTrivial = (danger.github.pr.body + danger.github.pr.title).includes(
  '#trivial'
)

if (!hasChangelog && !isTrivial) {
  fail('Please add a changelog entry for your changes.')
}
