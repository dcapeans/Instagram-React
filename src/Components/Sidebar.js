import SidebarProfile from "./SidebarProfile"
import SidebarSuggestions from "./SidebarSuggestions"

export default function Sidebar() {
    return (
        <div className="sidebar__container">
                <div className="sidebar">
                    <SidebarProfile username="daniel" name="Daniel Capeans" profileImg="/assets/img/profile.jpg"/>
                    <SidebarSuggestions />
                </div>
            </div>
    )
}