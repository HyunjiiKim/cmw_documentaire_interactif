import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Chronology = () => {
    const { t } = useTranslation("contents");

    const [openIndex, setOpenIndex] = useState(null);

    const Contents = [
        {
            title: t("ch1.chronology.contents.1.title"),
            year: 1950,
            description: t("ch1.chronology.contents.1.description"),
            contents: [
                {
                    img: [
                        "https://storage.googleapis.com/cmw-geoje-src/img/frise_chronologique/1950_DEBUTDE_LA_GUERRE_DE_COR%C3%89E.png",
                        "https://storage.googleapis.com/cmw-geoje-src/img/frise_chronologique/1950_DEBUTDE_LA_GUERRE_DE_COR%C3%89E_02.png"
                    ],
                    description: t("ch1.chronology.contents.1.text"),
                }
            ]
        },
        {
            title: t("ch1.chronology.contents.2.title"),
            year: 1951,
            description: t("ch1.chronology.contents.2.description"),
            contents: [
                {
                    img: [
                        "https://storage.googleapis.com/cmw-geoje-src/img/frise_chronologique/1951_TENSIONS_INTERNES_AU_CAMP.png",
                    ],
                    description: t("ch1.chronology.contents.2.text"),
                }
            ]
        },
        {
            title: t("ch1.chronology.contents.3.title"),
            year: 1952,
            description: t("ch1.chronology.contents.3.description"),
            contents: [
                {
                    img: [
                        "https://storage.googleapis.com/cmw-geoje-src/img/frise_chronologique/1952_LECAMPDEGEOJE_EST_EN_CRISE.png",
                    ],
                    description: t("ch1.chronology.contents.3.text"),
                }
            ]
        },
        {
            title: t("ch1.chronology.contents.4.title"),
            year: 1953,
            description: t("ch1.chronology.contents.4.description"),
            contents: [
                {
                    img: [
                        "https://storage.googleapis.com/cmw-geoje-src/img/frise_chronologique/1953_L_ARR%C3%8AT_DES_COMBATS.png",
                    ],
                    description: t("ch1.chronology.contents.4.text"),
                }
            ]
        },
    ];

    // Function to handle the click. It sets the open index or closes the currently open one.
    const handleToggleDetail = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div id="chronology" className="flex items-center gap-10 w-fit min-h-[400px] py-10 max-lg:px-5">
            <div className="flex items-center justify-center w-5">
                <span className="uppercase -rotate-90 font-body tracking-widest text-2xl text-nowrap max-lg:text-lg">
                    {t("ch1.chronology.title")}
                </span>
            </div>
            <div className="flex">
                {Contents.map((item, index) => (
                    <div key={index}>
                        <div id="chronologyContents" className="group cursor-pointer hover:scale-105 flex flex-col gap-4 text-white p-6 max-w-[280px] relative" onClick={() => handleToggleDetail(index)}>
                            <h3 className="text-4xl max-lg:text-lg">{item.year}</h3>
                            <div className="bg-primary-1 group-hover:bg-primary-4 w-[117px] h-[20px] max-lg:w-20 max-lg:h-5" />
                            {openIndex === index && item.contents && (
                                <div className="absolute z-10 top-0 left-0 w-fit h-auto flex flex-col justify-center items-center cursor-pointer">
                                    <div className="max-w-[600px] relative p-10 bg-black">
                                        <i className="absolute bi bi-x-lg text-white top-2 right-2 cursor-pointer" onClick={() => handleToggleDetail(index)}></i>
                                        {item.contents.map((it2, idx2) => (
                                            <div key={idx2}>
                                                <h4>{item.title}</h4>
                                                {it2.img.map((it3, idx3) => (
                                                    <img key={idx3} src={it3} alt={it2.description || `Image for ${item.title}`} />
                                                ))}
                                                <p className="font-body">{it2.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <h4 className="text-3xl max-lg:text-sm">{item.title}</h4>
                            <p className="font-body text-wrap text-2xl max-lg:text-xs text-wrap">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};