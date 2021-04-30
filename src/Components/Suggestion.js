const suggestions = [
    {
        profile: "bad.vibe.memes",
        image: "/assets/img/badvibesmemes 1.png",
        follow: false 
    },
    {
        profile: "chibirdart",
        image: "/assets/img/chibirdart 1.png",
        follow: false
    },
    {
        profile: "catanacomics",
        image: "/assets/img/catanacomics 2.png",
        follow: true 
    },
    {
        profile: "adorableanimals",
        image: "/assets/img/adorableanimals 1.png",
        follow: true 
    },
    {
        profile: "smallcutecats",
        image: "/assets/img/smallcutecats 1.png",
        follow: true 
    },
    
]

export default function Suggestion () {
    return(
        <>
        {suggestions.map(item => {
            return (
                <div className="sidebar__sugestion">
                    <div className="sugestion__info">
                        <img src={item.image} alt="" />
                        <div className="sugestion__text">
                            <p className="text__heavy">{item.profile}</p>
                            <p className="text__light">{item.follow ? "Segue você" : "Sugestões para você"}</p>
                        </div>
                    </div>
                    <p className="follow__button text__blue text__heavy">Seguir</p>
                </div>
            )
        })}
        </>
    )
}