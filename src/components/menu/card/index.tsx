import styles from "./style.module.css";

interface IMenuCard {
    photoItem: string,
    title: string,
    price: number,
    desc: string
}

export const MenuCard = (
    { title, photoItem, price, desc }: IMenuCard) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.photoCard}>
                <img src={photoItem} alt="photo-item" />
            </div>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.desc}>
                {desc}
            </div>
            <div className={styles.footer}>
                <div className={styles.title}>
                    {price} руб.
                </div>
                <button>выбрать</button>
            </div>
        </div>
    )
}