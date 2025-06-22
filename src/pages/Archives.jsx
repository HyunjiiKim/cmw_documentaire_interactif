import { useState } from "react";
import { useTranslation } from "react-i18next";

import Button, { ButtonWithIcon } from "../components/Button";
import YearSlider from "../components/YearSlider.jsx";
import { GalleryImg, GalleryVid } from "../components/HorizontalScroller.jsx";
import Footer from "../components/Footer.jsx";

const Archives = () => {
  const { t } = useTranslation("general");
  const { t: t1 } = useTranslation("archives");

  const [showArchives, setShowArchives] = useState("img");
  const [showCategories, setShowCategories] = useState("none");
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedSources, setSelectedSources] = useState([]);

  const filtersAreActive =
    showCategories !== "none" ||
    selectedYear !== null ||
    selectedSources.length > 0;

  const war = t1("categories.war");
  const camp = t1("categories.camp");

  const WB = "Werner Bischoff";
  const usNavy = "United States Navy";
  const ECPAD =
    "Établissement de Communication et de Production Audiovisuelle de la Défense";
  const actuFR = "Les Actualités Françaises";
  const sourcesList = [usNavy, WB, ECPAD, actuFR];

  function openShowFilms() {
    setShowArchives("films");
  }
  function openShowImg() {
    setShowArchives("img");
  }

  function openShowCategories1() {
    if (showCategories !== war) {
      setShowCategories(war);
    } else {
      setShowCategories("none");
    }
  }
  function openShowCategories2() {
    if (showCategories !== camp) {
      setShowCategories(camp);
    } else {
      setShowCategories("none");
    }
  }

  function toggleSource(source) {
    setSelectedSources((prev) =>
      prev.includes(source)
        ? prev.filter((s) => s !== source)
        : [...prev, source]
    );
  }

  function openShowFilters() {
    var filters = document.getElementById("filters");
    if (filters.style.display === "none") {
      filters.style.display = "block";
    } else {
      filters.style.display = "none";
    }
  }

  function resetFilters() {
    setShowCategories("none");
    setSelectedYear(null);
    setSelectedSources([]);
  }

  const img = [
    {
      id: "img-0",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Chinese_and_North_Korean_POWs_at_camp_in_Pusan.JPEG",
      alt: "Wikipédia. (s.d).Fichier:Korean War refugees aboard USS Weiss (APD-135), 16 September 1952 (80-G-K-14209).jpg. [Photographie]. Wikimedia Commons. https://fr.m.wikipedia.org/wiki/Fichier:Korean_War_refugees_aboard_USS_Weiss_%28APD-135%29,_16_September_1952_%2880-G-K-14209%29.jpg",
      category: war,
      source: usNavy,
      year: "1952",
    },
    {
      id: "img-1",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Des_prisonniers_de_guerre_nord_cor%C3%A9ens.jpg",
      alt: "Bibliothèque nationale de France. (s.d.). [Photographies sur la guerre de Corée] [Photographies]. Gallica. https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f12.item",
      category: war,
      source: WB,
      year: "1952",
    },
    {
      id: "img-2",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/english_lessons.jpeg",
      alt: "Bischof, W. (s.d.). 1951 – India, Japan, Korea. Werner Bischof – Official Website. https://wernerbischof.com/world-1951-1954/1951-india-japan-korea-2/",
      category: war,
      source: WB,
      year: "1952",
    },
    {
      id: "img-3",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Enterrement_d'une_fillette_sud-cor%C3%A9enne_avant_le_d%C3%A9placement_des_habitants_de_son_village_vers_un_camp_de_r%C3%A9fugi%C3%A9s.jpeg",
      alt: "Bibliothèque nationale de France. (s.d.). [Photographies sur la guerre de Corée] [Photographies]. Gallica. https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f1.item.r=%22guerre%20de%20cor%C3%A9e%22",
      category: war,
      source: WB,
      year: "1952",
    },
    {
      id: "img-4",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/%C3%89vacuation_par_l'US_Navy_de_r%C3%A9fugi%C3%A9s_en_provenance_de_Cor%C3%A9e_du_Nord.jpg",
      alt: "Wikipédia. (s.d). Évacuation par l’US Navy de réfugiés nord-coréens à bord de l’USS Weiss [Photographie]. Wikimedia Commons. https://fr.wikipedia.org/wiki/Guerre_de_Cor%C3%A9e#/media/Fichier:Korean_War_refugees_aboard_USS_Weiss_(APD-135),_16_September_1952_(80-G-K-14209).jpg",
      category: war,
      source: usNavy,
      year: "1952",
    },
    {
      id: "img-5",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Jeunes_mendiants.jpeg",
      alt: "Bibliothèque nationale de France. (s.d.). [Photographies sur la guerre de Corée] [Photographies]. Gallica. https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f9.item",
      category: war,
      source: WB,
      year: "1952",
    },
  ];

  const vid = [
    {
      id: "vid-0",
      src: "https://storage.googleapis.com/cmw-geoje-src/videos/Bande-annonce%20-%20Cor%C3%A9e%2C%20nos%20soldats%20oubli%C3%A9s%20(2016).mp4",
      alt: "ECPAD. (2019). Bande-annonce - Corée, nos soldats oubliés (2016). [Vidéo]. YouTube. https://www.youtube.com/watch?v=adSj49Y6w5s",
      category: war,
      source: ECPAD,
      year: "2019",
    },
    {
      id: "vid-1",
      src: "https://storage.googleapis.com/cmw-geoje-src/videos/cor%C3%A9e_historique_des_tensions_entre_les_deux_pays_PARTIE02.mp4",
      alt: "Institut national de l’audiovisuel. (s.d.). La guerre en Corée : L’exode des réfugiés en Corée [Vidéo]. INA. https://www.ina.fr/ina-eclaire-actu/video/afe85003714/la-guerre-en-coree-l-exode-des-refugies-en-coree",
      category: war,
      source: actuFR,
      year: "1950",
    },
    {
      id: "vid-2",
      src: "https://storage.googleapis.com/cmw-geoje-src/videos/cor%C3%A9e_historique_des_tensions_entre_les_deux_pays_PARTIE03.mp4",
      alt: "Institut national de l’audiovisuel. (s.d.). Bombardement de Corée [Vidéo]. INA. https://www.ina.fr/ina-eclaire-actu/video/afe85004330/bombardement-de-coree",
      category: war,
      source: actuFR,
      year: "1951",
    },
  ];

  const filteredImg = img.filter((item) => {
    const categoryMatch =
      showCategories === "none" || item.category === showCategories;
    const yearMatch = !selectedYear || item.year === String(selectedYear);
    const sourceMatch =
      selectedSources.length === 0 || selectedSources.includes(item.source);
    return categoryMatch && yearMatch && sourceMatch;
  });

  const filteredVid = vid.filter((item) => {
    const categoryMatch =
      showCategories === "none" || item.category === showCategories;
    const yearMatch = !selectedYear || item.year === String(selectedYear);
    const sourceMatch =
      selectedSources.length === 0 || selectedSources.includes(item.source);
    return categoryMatch && yearMatch && sourceMatch;
  });

  return (
    <div id="archives" className="flex flex-col ml-[120px] bg-tertiary-1">
      <div id="archivesContainer" className="text-white my-15">
        <div id="section1" className="flex flex-col m-10 items-center">
          <h1 className="text-[50px] uppercase">{t1("title")}</h1>
          <p className="font-body text-xl opacity-70">{t1("subtitle")}</p>
          <div id="typesOfContents" className="flex flex-row gap-5">
            <Button
              label={t1("content.videos")}
              onClick={openShowFilms}
              intent={showArchives === "films" ? "tertiary" : "primary"}
            />
            <Button
              label={t1("content.img")}
              onClick={openShowImg}
              intent={showArchives === "img" ? "tertiary" : "primary"}
            />
          </div>
        </div>
        <div id="section2" className="flex flex-col m-10">
          <div className="flex gap-5">
            <Button
              label={t1("filter.title")}
              onClick={openShowFilters}
              custom="mt-0"
            />
            <Button
              label={t1("filter.reset")}
              onClick={resetFilters}
              custom="mt-0"
              intent={`${filtersAreActive} ? "disabled" : ""`}
              disabled={!filtersAreActive}
            />
          </div>
          <div id="filters" className="hidden">
            <div id="categories">
              <h3 className="text-xl uppercase mt-10">
                {t1("categories.title")}
              </h3>
              <div id="categoriesChoice" className="flex gap-5">
                <Button
                  label={war}
                  onClick={openShowCategories1}
                  intent={showCategories === war ? "tertiary" : "primary"}
                  custom="mt-5"
                />
                <Button
                  label={camp}
                  onClick={openShowCategories2}
                  intent={showCategories === camp ? "tertiary" : "primary"}
                  custom="mt-5"
                />
              </div>
            </div>
            <div id="dates" className="flex flex-col">
              <h3 className="text-xl uppercase mt-10">{t1("dates")}</h3>
              <YearSlider
                selectedYear={selectedYear}
                onChange={(newYear) => setSelectedYear(newYear)}
              />
            </div>
            <div id="sources">
              <h3 className="text-xl uppercase mt-10">{t1("sources")}</h3>
              <div id="sourcesChoice" className="flex gap-5 flex-wrap">
                {sourcesList.map((source) => (
                  <Button
                    key={source}
                    label={source}
                    onClick={() => toggleSource(source)}
                    intent={
                      selectedSources.includes(source) ? "tertiary" : "primary"
                    }
                    custom="mt-5"
                  />
                ))}
              </div>
            </div>
          </div>
          <div id="section3">
            {showArchives === "img" ? (
              <GalleryImg data={filteredImg} size="md2" />
            ) : (
              <GalleryVid
                data={filteredVid}
                selectedYear={selectedYear}
                size="md2"
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Archives;
