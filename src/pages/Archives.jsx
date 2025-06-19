import { useState } from "react";
import { useTranslation } from "react-i18next";

import Button, { ButtonWithIcon } from "../components/Button";
import { GalleryImg, GalleryVid } from "../components/HorizontalScroller.jsx";
import Footer from "../components/Footer.jsx";

const Archives = () => {
  const { t } = useTranslation("general");
  const { t: t1 } = useTranslation("archives");

  const [showArchives, setShowArchives] = useState("img");
  const [showCategories, setShowCategories] = useState("none");

  function openShowFilms() {
    setShowArchives("films");
  }
  function openShowImg() {
    setShowArchives("img");
  }

  function openShowCategories1() {
    if (showCategories !== "war") {
      setShowCategories("war");
    } else {
      setShowCategories("none");
    }
  }
  function openShowCategories2() {
    if (showCategories !== "camp") {
      setShowCategories("camp");
    } else {
      setShowCategories("none");
    }
  }

  function openShowFilters() {
    var filters = document.getElementById("filters");
    if (filters.style.display === "none") {
      filters.style.display = "block";
    } else {
      filters.style.display = "none";
    }
  }

  const img = [
    {
      id: "img-0",
      src: "/assets/img/archives/Chinese_and_North_Korean_POWs_at_camp_in_Pusan.JPEG",
      alt: "Wikipédia. (s.d).Fichier:Korean War refugees aboard USS Weiss (APD-135), 16 September 1952 (80-G-K-14209).jpg. [Photographie]. Wikimedia Commons. https://fr.m.wikipedia.org/wiki/Fichier:Korean_War_refugees_aboard_USS_Weiss_%28APD-135%29,_16_September_1952_%2880-G-K-14209%29.jpg",
      category: "war",
      source: "US Navy",
      date: "1952",
    },
    {
      id: "img-1",
      src: "../assets/img/archives/Des_prisonniers_de_guerre_nord_coréens.jpg",
      alt: "Bibliothèque nationale de France. (s.d.). [Photographies sur la guerre de Corée] [Photographies]. Gallica. https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f12.item",
      category: "war",
      source: "WB",
      date: "1952",
    },
    {
      id: "img-2",
      src: "../assets/img/archives/english_lessons.jpeg",
      alt: "Bischof, W. (s.d.). 1951 – India, Japan, Korea. Werner Bischof – Official Website. https://wernerbischof.com/world-1951-1954/1951-india-japan-korea-2/",
      category: "war",
      source: "WB",
      date: "1952",
    },
  ];

  const vid = [
    {
      id: "vid-0",
      src: "../assets/videos/archives/Bande-annonce - Corée, nos soldats oubliés (2016).mp4",
      alt: "ECPAD. (2019). Bande-annonce - Corée, nos soldats oubliés (2016). [Vidéo]. YouTube. https://www.youtube.com/watch?v=adSj49Y6w5s",
      category: "war",
      source: "ECPAD",
      date: "2019",
    },
    {
      id: "vid-1",
      src: "../assets/videos/archives/corée_historique_des_tensions_entre_les_deux_pays_PARTIE02.mp4",
      alt: "Institut national de l’audiovisuel. (s.d.). La guerre en Corée : L’exode des réfugiés en Corée [Vidéo]. INA. https://www.ina.fr/ina-eclaire-actu/video/afe85003714/la-guerre-en-coree-l-exode-des-refugies-en-coree",
      category: "war",
      source: "Actu FR",
      date: "1950",
    },
    {
      id: "vid-2",
      src: "../assets/videos/archives/corée_historique_des_tensions_entre_les_deux_pays_PARTIE03.mp4",
      alt: "Institut national de l’audiovisuel. (s.d.). Bombardement de Corée [Vidéo]. INA. https://www.ina.fr/ina-eclaire-actu/video/afe85004330/bombardement-de-coree",
      category: "war",
      source: "Actu FR",
      date: "1951",
    },
  ];

  return (
    <div id="archives" className="flex flex-col ml-[120px] bg-tertiary-1">
      <div id="archivesContainer" className="text-white my-15">
        <div id="section1" className="flex flex-col m-10 items-center">
          <h1 className="text-[50px] uppercase">
            Les archives du camp de Geoje
          </h1>
          <p className="font-body text-xl opacity-70">
            Explorer les traces filmées, photographiques et écrites de la vie du
            camp
          </p>
          <div id="typesOfContents" className="flex flex-row gap-5">
            <Button
              label="Archives filmées"
              onClick={openShowFilms}
              intent={showArchives === "films" ? "tertiary" : "primary"}
            />
            <Button
              label="Archives photographiques"
              onClick={openShowImg}
              intent={showArchives === "img" ? "tertiary" : "primary"}
            />
          </div>
        </div>
        <div id="section2" className="flex flex-col m-10">
          <Button label="Filtrer par" onClick={openShowFilters} custom="mt-0" />
          <div id="filters" className="hidden">
            <div id="categories">
              <h3 className="text-xl uppercase mt-10">Catégories</h3>
              <div id="categoriesChoice" className="flex gap-5">
                <Button
                  label="La péninsule et la guerre"
                  onClick={openShowCategories1}
                  intent={showCategories === "war" ? "tertiary" : "primary"}
                  custom="mt-5"
                />
                <Button
                  label="Les Coréens et le camp"
                  onClick={openShowCategories2}
                  intent={showCategories === "camp" ? "tertiary" : "primary"}
                  custom="mt-5"
                />
              </div>
            </div>
            <div id="dates">
              <h3 className="text-xl uppercase mt-10">Dates</h3>
            </div>
            <div id="sources">
              <h3 className="text-xl uppercase mt-10">
                Sources / Photographes
              </h3>
              <div id="sourcesChoice" className="flex gap-5">
                <Button label="United States Navy" onClick="" custom="mt-5" />
                <Button label="Werner Bischoff" onClick="" custom="mt-5" />
                <Button
                  label="Établissement de communication et de production audiovisuelle de la Défense"
                  onClick=""
                  custom="mt-5"
                />
                <Button
                  label="Les Actualités Françaises"
                  onClick=""
                  custom="mt-5"
                />
              </div>
            </div>
          </div>
          <div id="section3">
            {showArchives === "img" ? (
              <GalleryImg data={img} category={showCategories} />
            ) : (
              <GalleryVid data={vid} category={showCategories} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Archives;
