import { useEffect } from "react";
import styles from "./light.theme.scss";

export default () => {
  useEffect(() => {
    document.body.classList.add("light");
    styles.use();

    return () => {
      styles.unuse();
      document.body.classList.remove("light");
    };
  }, []);
  
  return null;
};
