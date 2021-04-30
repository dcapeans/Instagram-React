import Posts from "./Posts"
import Sidebar from "./Sidebar"

export default function Content() {
    return (
        <div className="content">
            <Posts />
            <Sidebar />
        </div>
    )
}