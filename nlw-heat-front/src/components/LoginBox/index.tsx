import { VscGithubInverted } from "react-icons/vsc";

import styles from "./styles.module.scss";

export function LoginBox() {
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=c14166ed6be4eeba233e`;

  return (
    <div className={styles.LoginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size="24" />
        Entrar com Github
      </a>
    </div>
  );
}
