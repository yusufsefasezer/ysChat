import Status from './Status';

function ChatFooter() {
  return (
    <footer className="columns">
      <div className="column is-hidden-mobile has-text-left">
        <small>&copy; {new Date().getFullYear()} - Yusuf Sezer (<a href="https://www.yusufsezer.com" target="_blank" rel="noreferrer" className="has-text-white">yusufsezer.com</a>)</small>
      </div>
      <div className="column has-text-right-tablet has-text-centered">
        <Status />
      </div>
    </footer>
  );
}

export default ChatFooter;
