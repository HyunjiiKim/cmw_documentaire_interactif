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
  const MD = "Max Desfor";
  const usNavy = "United States Navy";
  const USA = "United States federal government";
  const NARA = "National Archives and Records Administration";
  const ROK = "Republic Of Korea Armed Forces";
  const ECPAD =
    "Établissement de Communication et de Production Audiovisuelle de la Défense";
  const 극동사령부 = "극동사령부";
  const ICRC = "International Committee of the Red Cross (ICRC)";
  const actuFR = "Les Actualités Françaises";
  const LP = "La Presse";
  const GHQ = "GHQ (164통신대)";
  const SPX = "SPX-87통신중대";
  const sourcesList = [WB, MD, usNavy, USA, ROK, ECPAD, ICRC, actuFR, LP];

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
      alt: "Photographie de prisonniers de guerre nord-coréens et chinois prise à Busan.",
      credit:
        "Wikipédia. (s.d).Fichier:Korean War refugees aboard USS Weiss (APD-135), 16 September 1952 (80-G-K-14209).jpg. [Photographie]. Wikimedia Commons. https://fr.m.wikipedia.org/wiki/Fichier:Korean_War_refugees_aboard_USS_Weiss_%28APD-135%29,_16_September_1952_%2880-G-K-14209%29.jpg",
      category: war,
      source: usNavy,
      year: "1952",
    },
    {
      id: "img-1",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Des_prisonniers_de_guerre_nord_cor%C3%A9ens.jpg",
      alt: "Des prisonniers de guerre nord-coréens construisent un brise-lame.",
      credit:
        "Bibliothèque nationale de France. (s.d.). [Photographies sur la guerre de Corée] [Photographies]. Gallica. https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f12.item",
      category: war,
      source: WB,
      year: "1952",
    },
    {
      id: "img-2",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/english_lessons.jpeg",
      alt: "Jeunes prisonniers durant une leçon d'anglais.",
      credit:
        "Bischof, W. (s.d.). 1951 – India, Japan, Korea. Werner Bischof – Official Website. https://wernerbischof.com/world-1951-1954/1951-india-japan-korea-2/",
      category: war,
      source: WB,
      year: "1952",
    },
    {
      id: "img-3",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Enterrement_d'une_fillette_sud-cor%C3%A9enne_avant_le_d%C3%A9placement_des_habitants_de_son_village_vers_un_camp_de_r%C3%A9fugi%C3%A9s.jpeg",
      alt: "Photographie d’un enterrement d’une jeune fille sud-coréenne, survenu peu avant l’évacuation de son village vers un camp de réfugiés.",
      credit:
        "Bibliothèque nationale de France. (s.d.). [Photographies sur la guerre de Corée] [Photographies]. Gallica. https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f1.item.r=%22guerre%20de%20cor%C3%A9e%22",
      category: war,
      source: WB,
      year: "1952",
    },
    {
      id: "img-4",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/%C3%89vacuation_par_l'US_Navy_de_r%C3%A9fugi%C3%A9s_en_provenance_de_Cor%C3%A9e_du_Nord.jpg",
      alt: "Photographie montrant l'évacuation de réfugiés en provenance de Corée du Nord par l'US Navy.",
      credit:
        "Wikipédia. (s.d). Évacuation par l’US Navy de réfugiés nord-coréens à bord de l’USS Weiss [Photographie]. Wikimedia Commons. https://fr.wikipedia.org/wiki/Guerre_de_Cor%C3%A9e#/media/Fichier:Korean_War_refugees_aboard_USS_Weiss_(APD-135),_16_September_1952_(80-G-K-14209).jpg",
      category: war,
      source: usNavy,
      year: "1952",
    },
    {
      id: "img-5",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Jeunes_mendiants.jpeg",
      alt: "Photographie de jeunes mendiants coréens durant la guerre de Corée à Busan.",
      credit:
        "Bibliothèque nationale de France. (s.d.). [Photographies sur la guerre de Corée] [Photographies]. Gallica. https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f9.item",
      category: war,
      source: WB,
      year: "1952",
    },
    {
      id: "img-6",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Korean_War_Montage_2.png",
      alt: "Montage photographique de plusieurs images d'archives de guerre : tank, avion, débarquement des forces et réfugié. On a une vision globale des effets de la guerre de Corée.",
      credit:
        "Wikipédia. (s.d). Montage of images from the Korean War. Clockwise from top: U.S. Marines retreating during the Battle of the Chosin Resevoir, U.N. landing at Incheon, Korean refugees in front of an American M46 Patton tank, U.S. Marines, led by First Lieutenant Baldomero Lopez, landing at Incheon, and an American F-86 Sabre fighter jet. [Photographie]. Wikimedia Commons. https://fr.wikipedia.org/wiki/Guerre_de_Cor%C3%A9e#/media/Fichier:Korean_War_Montage_2.png ",
      category: war,
      source: USA,
      year: "1950",
    },
    {
      id: "img-7",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/koreanwarrefugeewithbaby.jpg",
      alt: "Une jeune fille porte sur son dos son très jeune frère devant un tank. C'est une des réfugiés, victime de la guerre de Corée.",
      credit:
        "Wikipédia. (s.d). With her brother on her back a war weary Korean girl tiredly trudges by a stalled M-46 tank, at Haengju, Korea. June 9, 1951. Maj. R.V. Spencer, UAF. (Navy). [Photographie]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:KoreanWarRefugeeWithBaby.jpg?uselang=fr#/media/File:With_her_brother_on_her_back_a_war_weary_Korean_girl_tiredly_trudges_by_a_stalled_M-26_tank,_at_Haengju,_Korea_HD-SN-99-03144.jpg",
      category: war,
      source: usNavy,
      year: "1951",
    },
    {
      id: "img-8",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/La_press_internationale_couvre_la_guerre_de_cor%C3%A9e.jpeg",
      alt: "Groupe de journaliste de la presse internationale couvrant la guerre de Corée.",
      credit:
        "Bibliothèque nationale de France. (s.d.). [Photographies sur la guerre de Corée] [Photographies]. Gallica. https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f3.item",
      category: war,
      source: WB,
      year: "1952",
    },
    {
      id: "img-9",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Max_Desfor_-_Flight_of_Refugees_Across_Wrecked_Bridge_in_Korea.jpg",
      alt: "Photographie de réfugiés tentant de traverser un pont détruit afin d'échapper au conflit.",
      credit:
        "Wikipédia. (s.d). Fuite de réfugiés à travers un pont détruit sur le fleuve Taedong [Photographie]. Wikimedia Commons. https://fr.wikipedia.org/wiki/Guerre_de_Cor%C3%A9e#/media/Fichier:Max_Desfor_-_Flight_of_Refugees_Across_Wrecked_Bridge_in_Korea.jpg",
      category: war,
      source: MD,
      year: "1950",
    },
    {
      id: "img-10",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/M%C3%A8re%20sud_cor%C3%A9enne_accompagnant_son_fils_mobilis%C3%A9_%C3%A0_la_gare_de_Daegu.jpg",
      alt: "Une mère sud-coréenne accompagne son fils mobilisé à la guerre de Daegu. De nombreux autres jeunes hommes mobilisés sont visibles.",
      credit:
        "Wikipédia. (s.d).Mère sud-coréenne accompagnant son fils mobilisé à la gare de Daegu [Photographie]. Wikimedia Commons. https://fr.wikipedia.org/wiki/Guerre_de_Cor%C3%A9e#/media/Fichier:1950.12.19_%ED%95%9C%EA%B5%AD%EC%A0%84%EC%9F%81-%EA%B5%AD%EA%B5%B0%EC%8B%A0%EB%B3%91_(7445956136).jpg",
      category: war,
      source: ROK,
      year: "1950",
    },
    {
      id: "img-11",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Pusan02.jpeg",
      alt: "Jeune garçon coréen devant un groupe de militaires américains à Busan.",
      credit:
        "Bibliothèque nationale de France. (s.d.). [Photographies sur la guerre de Corée] [Photographies]. Gallica. https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f5.item",
      category: war,
      source: WB,
      year: "1952",
    },
    {
      id: "img-12",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/quatre_fantassins_du_Royal_22e_R%C3%A9giment.jpg",
      alt: "Photographie de quatre soldats américains appartenant au 22e régiment prise dans une forêt coréenne.",
      credit:
        "La Presse. (2010, 28 juin). Il y a 60 ans commençait la guerre de Corée. La Presse. https://www.lapresse.ca/international/asie-oceanie/201006/28/01-4293725-il-y-a-60-ans-commencait-la-guerre-de-coree.php",
      category: war,
      source: LP,
      year: "1952",
    },
    {
      id: "img-13",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Sang_Jang_Ri.jpeg",
      alt: "Jeune garçon observant un vieil homme amaigri.",
      credit:
        "Bibliothèque nationale de France. (s.d.). [Photographies sur la guerre de Corée] [Photographies]. Gallica. https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f2.item",
      category: war,
      source: WB,
      year: "1952",
    },
    {
      id: "img-14",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/sans-titre00.jpg",
      alt: "Photographie de plusieurs tentes montées au sein d'un camp. Cela peut être des lieux de vie pour les prisonniers de guerre.",
      credit:
        "Younhap News Agency. (24 juin 2020).Geoje POW camp during Korean War.  [Photographie]. https://en.yna.co.kr/view/PYH20200624063500325",
      category: war,
      source: ICRC,
      year: "",
    },
    {
      id: "img-15",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/S%C3%A9oul.jpeg",
      alt: "Homme coréen fumant la pipe.",
      credit:
        "Bibliothèque nationale de France. (s.d.). [Photographies sur la guerre de Corée] [Photographies]. Gallica.https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f14.item",
      category: war,
      source: WB,
      year: "1952",
    },
    {
      id: "img-16",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Tank_unit_of_the_Korean_People's_Army_enters_the_streets_of_Seoul_while_being_welcomed_by_the_Korean_people%2C_1950.jpg",
      alt: "Un tank de l'armée populaire coréenne est acclamé par les habitants coréens lors de son passage dans les rues de Seoul.",
      credit:
        "Inconnu. (1950). Unité blindée de chars T-34 nord-coréens entrant à Séoul [Photographie]. Wikimedia Commons. https://fr.wikipedia.org/wiki/Guerre_de_Cor%C3%A9e#/media/Fichier:Tank_unit_of_the_Korean_People's_Army_enters_the_streets_of_Seoul_while_being_welcomed_by_the_Korean_people,_1950.jpg",
      category: war,
      source: "",
      year: "1950",
    },
    {
      id: "img-17",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/At_Lunch_Time.jpg",
      alt: "Heure du déjeuner pour les prisonniers de guerre du camp de Geoje.",
      credit:
        "Bischof, W. (1952). At Lunch Time [Photographie]. Minneapolis Institute of Art. https://collections.artsmia.org/art/5255/at-lunch-time-werner-bischof",
      category: camp,
      source: WB,
      year: "1952",
    },
    {
      id: "img-18",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Chinese_New_Year.jpg",
      alt: "Photographie de prisonniers de guerre prise devant un bâtiment décoré à l'occasion du nouvel an chinois.",
      credit:
        "Bischof, W. (1952). Chinese New Year [Photographie]. Minneapolis Institute of Art. https://collections.artsmia.org/art/5257/chinese-new-year-werner-bischof",
      category: camp,
      source: WB,
      year: "1952",
    },
    {
      id: "img-19",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Compound%2092%2C_Koje-do%2C_South_Korea.jpg",
      alt: "Ensemble de structures d’hébergement pour prisonniers de guerre dans un camp de détention et gardien.",
      credit:
        "Bischof, W. (1952). Compound 92 [Photographie]. Minneapolis Institute of Art. https://collections.artsmia.org/art/5000/compound-92-werner-bischof",
      category: camp,
      source: WB,
      year: "1952",
    },
    {
      id: "img-20",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/compound_entrance.jpeg",
      alt: "Entrée d’un complexe militaire, ornée du drapeau sud-coréen et d’une réplique de la statue de la Liberté – symbole de l’influence américaine. Au loin, des prisonniers de guerre sont visibles, rangés en formation.",
      credit:
        "Bischof, W. (1951). 1951 – India, Japan, Korea. Werner Bischof – Official Website. https://wernerbischof.com/world-1951-1954/1951-india-japan-korea-2/",
      category: camp,
      source: WB,
      year: "1951",
    },
    {
      id: "img-21",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Des_barbel%C3%A9s_comme_corde_%C3%A0_linge.jpg",
      alt: "Temps de lessive pour les prisonniers de guerre. Les barbelés font office de corde à linge.",
      credit:
        "Bibliothèque nationale de France. (s.d.). [Photographies sur la guerre de Corée] [Photographies]. Gallica. https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f7.item",
      category: camp,
      source: WB,
      year: "1951",
    },
    {
      id: "img-22",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/english_lessons02.jpg",
      alt: "Cours d'anglais donné à des prisonniers de guerre du camp de Geoje dans le cadre du programme de rééducation américain.",
      credit:
        "Bischof, W. (1952). English Lesson [Photographie]. Minneapolis Institute of Art. https://collections.artsmia.org/art/5254/english-lesson-werner-bischof",
      category: camp,
      source: WB,
      year: "1952",
    },
    {
      id: "img-23",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/gar%C3%A7on_serrant_la%20main_d'un_officiel_du_Comit%C3%A9_international_de_la_Croix-Rouge.jpg",
      alt: "Garçon serrant la main d'un officiel du Comité International de la Croix Rouge.",
      credit:
        "Yonhap News Agency. (2020, 24 juin). Des photos du CICR donnent un aperçu rare de la vie de réfugiés et prisonniers pendant la guerre de Corée. https://fr.yna.co.kr/view/AFR20200624001200884",
      category: camp,
      source: ICRC,
      year: "1951",
    },
    {
      id: "img-24",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/General_Kim-Il-Sung%2C_Koje-do%2C_South_Korea.jpg",
      alt: "Photographie d'un prisonniers de guerre du camp de Geoje.",
      credit:
        "Bischof, W. (1952). Portrait d’un prisonnier de guerre souriant, camp de Koje-do, Corée du Sud [Photographie]. Magnum Photos. https://collections.artsmia.org/art/5249/general-kim-il-sung-werner-bischof",
      category: camp,
      source: WB,
      year: "1952",
    },
    {
      id: "img-25",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Killing_Time.jpg",
      alt: "Prisonniers de guerre nord-coréens au sein du camp de Geoje passent le temps en tricotant un vêtement.",
      credit:
        "Bischof, W. (1952). Killing Time [Photographie]. Minneapolis Institute of Art. https://collections.artsmia.org/art/5246/killing-time-werner-bischof",
      category: camp,
      source: WB,
      year: "1952",
    },
    {
      id: "img-26",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Koje_Do_Camp_de_prisonniers.jpg",
      alt: "Photographie du camp de prisonniers de Geoje.",
      credit:
        "Bibliothèque nationale de France. (s.d.). [Photographies sur la guerre de Corée] [Photographies]. Gallica. https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f10.item",
      category: camp,
      source: WB,
      year: "1952",
    },
    {
      id: "img-27",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Koje-do%2C_South_Korea.jpg",
      alt: "Foule de prisonniers nord-coréen et chinois rassemblés devant une statue de la liberté.",
      credit:
        "Bischof, W. (1952). Koje-Do [Photographie]. Minneapolis Institute of Art. https://collections.artsmia.org/art/5243/koje-do-werner-bischof",
      category: camp,
      source: WB,
      year: "1952",
    },
    {
      id: "img-28",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Koje-do%2C_South_Korea02.jpg",
      alt: "Spectacle organisé dans le camp de prisonniers de Geoje. Une statue de la liberté est visible en arrière-plan.",
      credit:
        "Bischof, W. (1952). Spectacle avec échassiers pour prisonniers de guerre, camp de Koje-do, Corée du Sud [Photographie]. Magnum Photos.https://collections.artsmia.org/art/5010/koje-do-werner-bischof",
      category: camp,
      source: WB,
      year: "1952",
    },
    {
      id: "img-29",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Le_plus_jeune_prisonnier.jpg",
      alt: "Capture d'un très jeune prisonnier de guerre lors de la distribution du repas au sein d'un camp.",
      credit:
        "Bibliothèque nationale de France. (s.d.). [Photographies sur la guerre de Corée] [Photographies]. Gallica. https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f8.item",
      category: camp,
      source: WB,
      year: "1952",
    },
    {
      id: "img-30",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/lunch_time_in_kohe_do_camp.jpg",
      alt: "Distribution de nourriture aux prisonniers de guerre dans le camp de Geoje.",
      credit:
        "Bischof, W. (1951). 1951 – India, Japan, Korea. Werner Bischof – Official Website. https://wernerbischof.com/world-1951-1954/1951-india-japan-korea-2/",
      category: camp,
      source: WB,
      year: "1952",
    },
    {
      id: "img-31",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/manifestation_sportive_en_l'honneur_du_Comit%C3%A9_%20international_de_la_Croix-Rouge.jpg",
      alt: "Capture d'une manifestation sportive en l'honneur du Comité International de la Croix Rouge.",
      credit:
        "Yonhap News Agency. (2020, 24 juin). Des photos du CICR donnent un aperçu rare de la vie de réfugiés et prisonniers pendant la guerre de Corée. https://fr.yna.co.kr/view/AFR20200624001200884",
      category: camp,
      source: ICRC,
      year: "1951",
    },
    {
      id: "img-32",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Photo-Work-Life-South_Korean%20Guard-North_Korean_People's_Army-Geojedo.jpg",
      alt: "Photographie du quotidien des gardes sud-coréen du camp de Geoje.",
      credit:
        "Geoje City. (s.d.). korean guard. [Photographie]. https://webtrans.llsollu.com:40443/ezweb?source=KO&target=EN&profileId=03b14b5a-1be1-47a1-b8d9-9f39a2ead615&url=https%3A%2F%2Fwww.geoje.go.kr%2Fboard%2Fview.geoje%3FboardId%3DBBS_0000608%26menuCd%3DDOM_000008905008003000%26orderBy%3DCATEGORY_CODE1%3ADESC%26paging%3Dok%26startPage%3D9%26dataSid%3D305970881",
      category: camp,
      source: ROK,
      year: "1952",
    },
    {
      id: "img-33",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Photography-Prisoner-Camp-Retraining-Physical%20Education-Prisoner-Olympic-Geojedo.jpg",
      alt: "Photographie d'un évènement sportif organisé au sein du camp de prisonniers de Geoje.",
      credit:
        "Geoje City. (s.d.). The Prisoner of War Olympics. [Photographie]. https://webtrans.llsollu.com:40443/ezweb?source=KO&target=EN&profileId=03b14b5a-1be1-47a1-b8d9-9f39a2ead615&url=https%3A%2F%2Fwww.geoje.go.kr%2Fboard%2Fview.geoje%3FboardId%3DBBS_0000608%26menuCd%3DDOM_000008905008003000%26orderBy%3DCATEGORY_CODE1%3ADESC%26paging%3Dok%26startPage%3D9%26dataSid%3D305970862",
      category: camp,
      source: NARA,
      year: "1952",
    },
    {
      id: "img-34",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Prisoners_of_war.jpg",
      alt: 'Prisonniers de guerre devant l’une des tentes du camp de Geoje, marquée de l’inscription "PW" pour "Prisoner of War".',
      credit:
        "Geoje City. (s.d.). The Prisoner of War Olympics. [Photographie]. https://webtrans.llsollu.com:40443/ezweb?source=KO&target=EN&profileId=03b14b5a-1be1-47a1-b8d9-9f39a2ead615&url=https%3A%2F%2Fwww.geoje.go.kr%2Fboard%2Fview.geoje%3FboardId%3DBBS_0000608%26menuCd%3DDOM_000008905008003000%26orderBy%3DCATEGORY_CODE1%3ADESC%26paging%3Dok%26startPage%3D9%26dataSid%3D305970862",
      category: camp,
      source: WB,
      year: "1952",
    },
    {
      id: "img-35",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/reeducation_of_prisoners_of_war.jpeg",
      alt: "Capture d'une séance de rééducation politique au sein du camp de prisonniers de Geoje, destinée à des détenus coréens et chinois capturés pendant la guerre de Corée.",
      credit:
        "Bibliothèque nationale de France. (s.d.). [Photographies sur la guerre de Corée] [Photographies]. Gallica. https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f11.item",
      category: camp,
      source: WB,
      year: "1952",
    },
    {
      id: "img-36",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/sans_titre01.jpg",
      alt: "Maquette grandeur nature d’un hélicoptère militaire d'époque.",
      credit: "",
      category: camp,
      source: "",
      year: "",
    },
    {
      id: "img-37",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/sans_titre02.jpg",
      alt: "Exposition d'objet du quotidien des prisonniers de guerre.",
      credit: "",
      category: camp,
      source: "",
      year: "",
    },
    {
      id: "img-38",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/sans_titre03.jpg",
      alt: "Exposition d'uniforme de guerre et de prisonniers.",
      credit: "",
      category: camp,
      source: "",
      year: "",
    },
    {
      id: "img-39",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/sans_titre04.jpg",
      alt: "Vue de l’entrée actuelle du site historique du camp de Geoje, lieu de mémoire de la guerre de Corée.",
      credit: "",
      category: camp,
      source: "",
      year: "",
    },
    {
      id: "img-40",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/sans_titre05.jpg",
      alt: "Reconstitution d'une scène de révolte au sein du camp de Geoje.",
      credit: "",
      category: camp,
      source: "",
      year: "",
    },
    {
      id: "img-41",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/sans_titre06.jpg",
      alt: "Reconstitution d’une scène de révolte de prisonniers dans le camp de Geoje.",
      credit: "",
      category: camp,
      source: "",
      year: "",
    },
    {
      id: "img-42",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/sans_titre07.jpg",
      alt: "Reconstitution grandeur nature d'un pont détruit. De nombreux coréens ont malgré tout tenté de le traverser pour échapper au conflit.",
      credit: "",
      category: camp,
      source: "",
      year: "",
    },
    {
      id: "img-43",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/sans_titre08.jpg",
      alt: "Reconstitution du quotidien au sein du camp de Geoje.",
      credit: "",
      category: camp,
      source: "",
      year: "",
    },
    {
      id: "img-44",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Speech%2C_Koje-do%2C_South_Korea.jpg",
      alt: "Photographie montrant une foule de prisonniers de guerre réunis pour assister à un discours au sein du camp.",
      credit:
        "Bischof, W. (1952). Spectacle musical pour prisonniers de guerre, Koje-do, Corée du Sud [Photographie]. Magnum Photos. https://collections.artsmia.org/art/5248/speech-werner-bischof",
      category: camp,
      source: WB,
      year: "1952",
    },
    {
      id: "img-45",
      src: "https://storage.googleapis.com/cmw-geoje-src/img/Square-danse_devant_la_statut_de_la_liberte.jpg",
      alt: '"Square danse" devant la statue de la liberté par les prisonniers de guerre du camp.',
      credit:
        "Bibliothèque nationale de France. (s.d.). [Photographies sur la guerre de Corée] [Photographies]. Gallica. https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f13.item",
      category: camp,
      source: WB,
      year: "1952",
    },
  ];

  const vid = [
    {
      id: "vid-0",
      src: "https://storage.googleapis.com/cmw-geoje-src/videos/Bande-annonce%20-%20Cor%C3%A9e%2C%20nos%20soldats%20oubli%C3%A9s%20(2016).mp4",
      alt: 'Bande-annonce du documentaire "Corée, nos soldats oubliés", qui se concentre sur les forces françaises engagées lors de la guerre de Corée. Plusieurs témoignages d’anciens soldats apportent un regard inédit sur ce conflit souvent méconnu.',
      credit:
        "ECPAD. (2019). Bande-annonce - Corée, nos soldats oubliés (2016). [Vidéo]. YouTube. https://www.youtube.com/watch?v=adSj49Y6w5s",
      category: war,
      source: ECPAD,
      year: "2019",
    },
    {
      id: "vid-1",
      src: "https://storage.googleapis.com/cmw-geoje-src/videos/cor%C3%A9e_historique_des_tensions_entre_les_deux_pays_PARTIE02.mp4",
      alt: "Vidéo issue de l’actualité française mettant en lumière l’impact du conflit sur les civils coréens.",
      credit:
        "Institut national de l’audiovisuel. (s.d.). La guerre en Corée : L’exode des réfugiés en Corée [Vidéo]. INA. https://www.ina.fr/ina-eclaire-actu/video/afe85003714/la-guerre-en-coree-l-exode-des-refugies-en-coree",
      category: war,
      source: actuFR,
      year: "1950",
    },
    {
      id: "vid-2",
      src: "https://storage.googleapis.com/cmw-geoje-src/videos/cor%C3%A9e_historique_des_tensions_entre_les_deux_pays_PARTIE03.mp4",
      alt: "Extrait de presse française relatant la destruction des concentrations de troupes sino-coréennes par l’aviation des Nations Unies.",
      credit:
        "Institut national de l’audiovisuel. (s.d.). Bombardement de Corée [Vidéo]. INA. https://www.ina.fr/ina-eclaire-actu/video/afe85004330/bombardement-de-coree",
      category: war,
      source: actuFR,
      year: "1951",
    },
    {
      id: "vid-3",
      src: "https://storage.googleapis.com/cmw-geoje-src/videos/cor%C3%A9e_historique_des_tensions_entre_les_deux_pays_PARTIE04.mp4",
      alt: "Extrait de presse française traitant des premiers échanges de prisonniers survenus après la signature de l’armistice de Panmunjeom.",
      credit:
        "Institut national de l’audiovisuel. (s.d.). Échange de prisonniers en Corée [Vidéo]. INA. https://www.ina.fr/ina-eclaire-actu/video/afe85005059/echange-de-prisonniers-en-coree",
      category: war,
      source: actuFR,
      year: "1953",
    },
    {
      id: "vid-4",
      src: "https://storage.googleapis.com/cmw-geoje-src/videos/cor%C3%A9e_historique_des_tensions_entre_les_deux_pays_PARTIE05.mp4",
      alt: "Extrait de presse française relatant l’opération menée pour réprimer la rébellion des prisonniers du camp de Geoje. Le document met en lumière l’intervention américaine, soutenue par les forces britanniques, ainsi que le dénouement du conflit.",
      credit:
        "Institut national de l’audiovisuel. (s.d.). Rétablissement de l’ordre dans le camp de Koje [Vidéo]. INA. https://www.ina.fr/ina-eclaire-actu/video/afe85004609/retablissement-de-l-ordre-dans-le-camp-de-koje",
      category: war,
      source: actuFR,
      year: "1952",
    },
    {
      id: "vid-5",
      src: "https://storage.googleapis.com/cmw-geoje-src/videos/cor%C3%A9e_historique_des_tensions_entre_les_deux_pays.mp4",
      alt: "Présentation du contexte de la guerre de Corée, suivie du dénouement avec la signature de l’armistice. Sont également abordées les actions entreprises par chaque pays dans les années qui ont suivi, notamment les démonstrations de force de la Corée du Nord.",
      credit:
        "Institut national de l’audiovisuel. (s.d.). Corée : Historique des tensions entre les deux pays [Vidéo]. INA. https://www.ina.fr/ina-eclaire-actu/video/4331308001004/coree-historique-des-tensions-entre-les-deux-pays",
      category: war,
      source: actuFR,
      year: "2010",
    },
    {
      id: "vid-6",
      src: "https://storage.googleapis.com/cmw-geoje-src/videos/Cor%C3%A9e_Op%C3%A9rations%20militaires%20sur%20le%20fleuve%20Kum.mp4",
      alt: "La retraite des forces sud-coréennes entraîne des dizaines de milliers de réfugiés dans leur exode. Les opérations militaires sur le fleuve Kum tournent également à l’avantage des forces nord-coréennes. Le général MacArthur, qui dirige les opérations au nom de l’ONU, est mentionné.",
      credit:
        "Institut national de l’audiovisuel. (s.d.). Corée : Opérations militaires sur le fleuve Kum [Vidéo]. INA. https://www.ina.fr/ina-eclaire-actu/video/afe85003634/coree-operations-militaires-sur-le-fleuve-kum",
      category: war,
      source: actuFR,
      year: "1950",
    },
    {
      id: "vid-7",
      src: "https://storage.googleapis.com/cmw-geoje-src/videos/Progression%20des%20troupes%20nord-cor%C3%A9ennes.mp4",
      alt: "Vidéo traitant de la retraite des forces américaines et sud-coréennes vers le sud du pays, à Busan, ainsi que de l’arrivée de nouvelles forces militaires.",
      credit:
        "Institut national de l’audiovisuel. (s.d.). En Corée : Progression des troupes de Corée du Nord [Vidéo]. INA. https://www.ina.fr/ina-eclaire-actu/video/afe85003655/en-coree-progression-des-troupes-de-coree-du-nord",
      category: war,
      source: actuFR,
      year: "1950",
    },
    {
      id: "vid-8",
      src: "https://storage.googleapis.com/cmw-geoje-src/videos/65COMPOUND.mp4",
      alt: "Défilé des forces coréennes à l'occasion d'un événement mettant en avant les forces américaines et coréennes. Capture d’un moment d’exercices des gardiens et de spectacles présentés devant les prisonniers.",
      credit:
        "포로수용소 세계기록유산 등재 추진. (s.d.). 65수용동 / 65COMPOUND (RG 111 LC 29580) [Vidéo]. YouTube. https://www.youtube.com/watch?v=u5GUF59NrxY",
      category: camp,
      source: GHQ,
      year: "1952",
    },
    {
      id: "vid-8",
      src: "https://storage.googleapis.com/cmw-geoje-src/videos/KOJE-DO_PRISONERS_OF_WAR.mp4",
      alt: "Vue en plongée du camp, montrant l’activité humaine qui s’y déroule, ainsi que le port par lequel transitent la nourriture et le matériel utilisés.",
      credit:
        "포로수용소 세계기록유산 등재 추진. (s.d.). 거제도 전쟁포로 / KOJE-DO PRISONERS OF WAR(RG 389 1) [Vidéo]. YouTube. https://www.youtube.com/watch?v=2Y7nRN3B4A8",
      category: camp,
      source: "",
      year: "1952",
    },
    {
      id: "vid-9",
      src: "https://storage.googleapis.com/cmw-geoje-src/videos/POW.mp4",
      alt: "Capture de l'arrivée de nombreux prisonniers de guerre au camp, de leur travail en tant que charpentier sous la surveillance de garde, et de leur quotidien rythmé par les forces américaines (église, école, activité sportive).",
      credit:
        "포로수용소 세계기록유산 등재 추. (s.d.). 전쟁포로 / P.O.W(RG 111 ADC 9112)[Vidéo]. YouTube. https://www.youtube.com/watch?v=f19RVZLg2iA",
      category: camp,
      source: SPX,
      year: "1951",
    },
    {
      id: "vid-10",
      src: "https://storage.googleapis.com/cmw-geoje-src/videos/POW02.mp4",
      alt: "Vidéo montrant les prisonniers assistant à des rencontres sportives et des scènes de théâtre au sein du camp. ",
      credit:
        "포로수용소 세계기록유산 등재 추진. (s.d.). 전쟁포로 활동 / POW(RG 111 LC 29588) [Vidéo]. YouTube. https://www.youtube.com/watch?v=5JVHLbpzzsQ",
      category: camp,
      source: GHQ,
      year: "1952",
    },
    {
      id: "vid-11",
      src: "https://storage.googleapis.com/cmw-geoje-src/videos/POWS03.mp4",
      alt: "Vidéo.",
      credit:
        "포로수용소 세계기록유산 등재 추. (s.d.). 전쟁포로들 / POWS(RG 111 LC 29576 004)[Vidéo]. YouTube. https://www.youtube.com/watch?v=0iyHS7rwcCw",
      category: camp,
      source: GHQ,
      year: "1952",
    },
    {
      id: "vid-11",
      src: "https://storage.googleapis.com/cmw-geoje-src/videos/Prosesing_tent.mp4",
      alt: "Enregistrement d'archives montrant la présence de la religion (bénédiction d'un soldat, eucharistie) au sein du camp.",
      credit:
        "포로수용소 세계기록유산 등재 추. (s.d.). 처리텐트 / Prosesing tent(RG 111 LC 32389)[Vidéo]. YouTube. https://www.youtube.com/watch?v=zgS19roS8n0",
      category: camp,
      source: 극동사령부,
      year: "1953",
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
            {/*<div id="dates" className="flex flex-col">
              <h3 className="text-xl uppercase mt-10">{t1("dates")}</h3>
              <YearSlider
                selectedYear={selectedYear}
                onChange={(newYear) => setSelectedYear(newYear)}
              />
            </div>
            <div id="sources">
              <h3 className="text-xl uppercase mt-10 mb-5">{t1("sources")}</h3>
              <div id="sourcesChoice" className="flex gap-5 flex-wrap">
                {sourcesList.map((source) => (
                  <Button
                    key={source}
                    label={source}
                    onClick={() => toggleSource(source)}
                    intent={
                      selectedSources.includes(source) ? "tertiary" : "primary"
                    }
                    custom="m-0"
                  />
                ))}
              </div>
            </div>*/}
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
