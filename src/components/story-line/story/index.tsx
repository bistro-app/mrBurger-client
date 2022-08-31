import styles from "./style.module.css";

interface IStory {
    storyContent: string
}

export const Story = ({ storyContent }: IStory) => {
    return (
        <div className={styles.wrapper}>
            <img src={storyContent} alt="story-content" />
        </div>
    )
}