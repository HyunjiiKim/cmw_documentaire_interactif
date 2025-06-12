import { useTranslation } from "react-i18next"

export const Chronology = () => {

    const { t } = useTranslation("contents");

    const Contents = [
        {
            title: t("ch1.chronology.contents.1.title"),
            year: 1950,
            description: t("ch1.chronology.contents.1.description"),
        },
        {
            title: t("ch1.chronology.contents.2.title"),
            year: 1951,
            description: t("ch1.chronology.contents.2.description")
        },
        {
            title: t("ch1.chronology.contents.3.title"),
            year: 1952,
            description: t("ch1.chronology.contents.3.description"),
        },
        {
            title: t("ch1.chronology.contents.4.title"),
            year: 1953,
            description: t("ch1.chronology.contents.4.description")
        },
    ]

    return (
        <div id="chronology" className="flex items-center gap-0 w-fit h-fit">
            <h3 className="uppercase rotate-270 font-body text-nowrap tracking-widest m-0 p-0 w-fit">{t("ch1.chronology.title")}</h3>
            <div className="flex">
                {Contents.map((item, index) => (
                    <div id="chronologyContents" key={index} className="flex flex-col text-white">
                        <h3 className="">{item.year}</h3>
                        <div id="div" className="bg-primary-1 w-[117px] h-[20px]" />
                        <h4>{item.title}</h4>
                        <p className="font-body">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}