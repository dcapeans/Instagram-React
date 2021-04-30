import Suggestion from "./Suggestion"
import SuggestionTittle from "./SuggestionTitle"
import SuggestionFooter from "./SuggestionFooter"

export default function SidebarSuggestions() {
    return (
        <div className="sidebar__body">
            <SuggestionTittle />
            <Suggestion />
            <SuggestionFooter />
        </div>
    )
}