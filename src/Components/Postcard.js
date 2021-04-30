import CommentInput from "./CommentInput"

const postsData = [
    {
        owner: "meowed",
        ownerImg: "/assets/img/meowed 2.png",
        postImg: "/assets/img/gato-telefone 1.png",
        postText: "Acompanhando o entregador de ração #ansioso#faminto",
        commentsNumber: "74",
        time: "1 hora",
        likes: {
                likeProfile: "respondeai",
                likeProfileImg: "/assets/img/respondeai 2.png",
                likeNumber: "101.523"
            },
        comments: [
            {
                commentOwner: "frajola",
                commentText: "I feel your pain"
            },
            {
                commentOwner: "garfield",
                commentText: "Now I'm more hungry"
            },
        ]
    },
    {
        owner: "barked",
        ownerImg: "/assets/img/barked 2.png",
        postImg: "/assets/img/dog 1.png",
        postText: "Tirando aquele soninho gostoso depois do almoço",
        commentsNumber: "83",
        time: "2 horas",
        likes: {
                likeProfile: "adorableanimals",
                likeProfileImg: "/assets/img/adorableanimals 2.png",
                likeNumber: "99.159"
            },
        comments: [
            {
                commentOwner: "pongo",
                commentText: "Com 101 filhotes, esse é o único momento de paz"
            },
            {
                commentOwner: "scooby",
                commentText: "Salsichaaaaa!!!"
            },
        ]
    },
    {
        owner: "barked",
        ownerImg: "/assets/img/barked 2.png",
        postImg: "/assets/img/puppy.jpg",
        postText: "Você não escovou os dentes",
        commentsNumber: "91",
        time: "1 hora",
        likes: {
                likeProfile: "adorableanimals",
                likeProfileImg: "/assets/img/adorableanimals 2.png",
                likeNumber: "223.773"
            },
        comments: [
            {
                commentOwner: "chewbacca",
                commentText: "RAWRGWAARGRG"
            },
            {
                commentOwner: "dug",
                commentText: "Esquilo!!"
            },
        ]
    }
]

export default function Postcard() {
    return (
        <>
        {postsData.map(post => {
            return (
                <div className="posts__card">
                    <div className="card__head">
                        <div className="post__owner">
                            <img src={post.ownerImg} alt="" />
                            <p className="text__heavy">{post.owner}</p>
                        </div>
                        <ion-icon name="ellipsis-horizontal-sharp"></ion-icon>
                    </div>
                    <div className="card__body">
                        <img src={post.postImg} alt="" />
                    </div>
                    <div className="card__footer">
                        <div className="card__reactions">
                            <div className="card__interactions">
                                <ion-icon name="heart-outline"></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div className="card__bookmark">
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>
        
                        <div className="card__likes">
                            <img src={post.likes.likeProfileImg} alt="" />
                            <p className="likes__text">Curtido por <span className="text__heavy">{post.likes.likeProfile}</span> e <span
                                    className="text__heavy">outras {post.likes.likeNumber} pessoas</span></p>
                        </div>
                        <div className="card__comments">
                            <div className="card__description">
                                <p><span className="text__heavy">{post.owner}</span> {post.postText}</p>
                                <p className="text__light">Ver todos os {post.commentsNumber} comentários</p>
                            </div>

                            {post.comments.map(comment => {
                                return (
                                    <>
                                    <div className="comments__text">
                                        <p><span className="text__heavy">{comment.commentOwner}</span> {comment.commentText}</p>
                                        <button>
                                            <ion-icon size="small" name="heart-outline"></ion-icon>
                                        </button>
                                    </div>
                                    </>
                                )
                            })}
                            <p className="text__light">Há {post.time}</p>
                        </div>
                    </div>
                    
                    <CommentInput />
                </div>
            )
        })}
        </> 
    )
}