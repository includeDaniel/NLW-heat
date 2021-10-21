import "./styles/global.css";
import styles from "./app.module.scss";
import { MessageList } from "./components/MessageList";
import { LoginBox } from "./components/LoginBox";

export function App() {
  return (
    <main className={styles.contentWrapper}>
      <MessageList />
      <LoginBox />
    </main>
  );
}
