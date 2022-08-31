import styles from "./style.module.css";
import { Story } from "./story";

//mock
import storyExample from "../../assets/story_example.jpg";

export const StoryLine = () => {
    //mock
    const data = [
        storyExample, storyExample, storyExample, storyExample, storyExample,
        storyExample, storyExample, storyExample, storyExample, storyExample
    ]
    return (
        <div className={styles.wrapper}>
            {data.map((item, index) => (
                <Story key={index} storyContent={item} />
            ))}
        </div>
    )
}