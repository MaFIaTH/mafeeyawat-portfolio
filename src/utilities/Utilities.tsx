function Divider() {
  return <div className={"my-6 h-0.5 min-w-screen bg-neutral-100 dark:bg-white/10"}/>;
}

function CopyToClipboard(copyText: string) {
  navigator.clipboard.writeText(copyText);
  alert("Copied to clipboard: " + copyText);
}

export default Divider;
export { CopyToClipboard };