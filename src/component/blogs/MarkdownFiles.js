const importAll = (r) => r.keys().map(r);
const MarkdownFiles = importAll(require.context('./posts', false, /\.md$/))
  .sort()
  .reverse();

export default MarkdownFiles

