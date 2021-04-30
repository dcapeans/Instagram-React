export default function SidebarProfile(props) {
    return (
        <div className="sidebar__profile">
            <img src={props.profileImg} alt="" />
            <div className="profile__text">
                <p className="text__heavy">{props.username}</p>
                <p className="text__light">{props.name}</p>
            </div>
        </div>
    )
}