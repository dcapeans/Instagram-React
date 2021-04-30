import StoryList from "./StoryList"

export default function Stories() {
    return (
        <div className="stories">
            <StoryList />
            <ion-icon class="stories__button" name="chevron-forward-circle-sharp"></ion-icon>
        </div>
    )
}