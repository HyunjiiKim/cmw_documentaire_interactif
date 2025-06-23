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
        <div id="chronology" className="flex items-center gap-10 w-fit min-h-[400px] py-10">
            <div className="flex items-center justify-center w-5">
                <span className="uppercase -rotate-90 font-body tracking-widest text-2xl text-nowrap">
                    {t("ch1.chronology.title")}
                </span>
            </div>
            <div className="flex">
                {Contents.map((item, index) => (
                    <div className="relative">
                        <div id="chronologyContents" key={index} className="flex flex-col gap-4 text-white p-6 max-w-[280px]">
                            <h3 className="text-4xl">{item.year}</h3>
                            <div id="div" className="bg-primary-1 w-[117px] h-[20px]" />
                            <h4 className="text-3xl">{item.title}</h4>
                            <p className="font-body text-wrap text-2xl text-wrap">{item.description}</p>
                        </div>
                        <hr className="border-1 border-white w-full absolute top-22  left-6 -z-1"  />
                    </div>

                ))}
            </div>
        </div>
    )
}