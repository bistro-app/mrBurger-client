import styles from "./style.module.css";
import logo from "../../assets/logo.svg";

export const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div className={styles.logoPic}>
                    <img src={logo} alt="mr-burger-logo" />
                </div>
                <div className={styles.logoText}>
                    Мистер Бутер
                </div>
            </div>
            <div className={styles.right}>
                <button>корзина</button>
            </div>
        </div>
    )
}