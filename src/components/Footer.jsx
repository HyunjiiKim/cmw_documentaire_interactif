import { useTranslation } from "react-i18next";

const Footer = () => {

    const { t } = useTranslation("general")

    let createdYear = 2025;

    return (
        <div id="footer" className="py-4 text-center border-t-1 border-white">
            <h1 className="font-body text-white cursor-pointer" onClick={()=>window.location.href="https://mastercmw.com"}>&copy; CMW {new Date().getFullYear() === createdYear ? `${createdYear}` : `${createdYear} - ${new Date().getFullYear()}`} – {t("footer")}</h1>
        </div>
    )
}

export default Footer;