import { NavLink } from "react-router-dom";
import styles from "./style.module.css";

export const CategoriesLine = () => {
    const links = [
        { to: "/burgers", title: "Бургеры" },
        { to: "/snacks", title: "Закуски" },
        { to: "/drinks", title: "Напитки" }
    ]
    return (
        <div className={styles.wrapper}>
            {links.map(link => (
                <NavLink key={link.to} to={link.to}>
                    {link.title}
                </NavLink>
            ))}
        </div>
    )
}