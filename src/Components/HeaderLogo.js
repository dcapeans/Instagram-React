export default function HeaderLogo() {
    return (
        <div className="header__item">
            <ion-icon name="logo-instagram"></ion-icon>
            <div className="logo__spacer"></div>
            <img src="/assets/img/logo.png" alt="Instagram Logo" className="logo" />
            <ion-icon class="mobile__direct" name="paper-plane-outline"></ion-icon>
        </div>
    )
}