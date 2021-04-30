const stories = [
    {
        name: "9gag",
        image: "/assets/img/9gag 1.png"
    },
    {
        name: "meowed",
        image: "/assets/img/meowed 1.png"
    },
    {
        name: "barked",
        image: "/assets/img/barked 1.png"
    },
    {
        name: "nathanwpylestrangeplanet",
        image: "/assets/img/nathanwpylestrangeplanet 1.png"
    },
    {
        name: "respondeai",
        image: "/assets/img/respondeai 1.png"
    },
    {
        name: "wawawiwacomicsa",
        image: "/assets/img/wawawiwacomicsa 1.png"
    },
    {
        name: "filomoderna",
        image: "/assets/img/filomoderna 1.png"
    },
    {
        name: "memeriagourmet",
        image: "/assets/img/memeriagourmet 1.png"
    },
]


export default function StoryList(props) {
    return (
        <>
        {stories.map(story => {
            return (
            <div className="stories__box">
                <div className="stories__border"
                    style={{backgroundImage: "url(../assets/img/stories_background.jpg)"}}>
                    <img className="stories__img" src={story.image} alt=""/>
                </div>
                <p className="stories__name">{story.name}</p>
            </div>
            )
        })}
        </>
    )
}