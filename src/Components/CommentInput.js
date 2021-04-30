export default function CommentInput() {
    return (
        <>
        <div className="horizontal__spacer"></div>
        <div className="comments__input">
            <ion-icon name="happy-outline"></ion-icon>
            <input type="text" placeholder="Adicione um comentário..." />
            <button className="button__hover">Publicar</button>
        </div>
        </>
    )
}