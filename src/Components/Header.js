import HeaderLogo from "./HeaderLogo"
import HeaderInput from "./HeaderInput"
import HeaderMenu from "./HeaderMenu"

export default function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <HeaderLogo />
                <HeaderInput />
                <HeaderMenu />
            </div>
        </div>
    )
}