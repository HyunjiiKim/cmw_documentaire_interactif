import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";

export const Credits = () => {
  const { t } = useTranslation("general");
  const { t: t2 } = useTranslation("contents");

  const [showCredits, setShowCredits] = useState("biblio");

  function openShowBiblio() {
    setShowCredits("biblio");
  }
  function openShowImages() {
    setShowCredits("img");
  }
  function openShowVideos() {
    setShowCredits("vid");
  }
  function openShowSounds() {
    setShowCredits("sound");
  }

  return (
    <div className="flex flex-col">
      <h2 className="text-white uppercase text-[50px] self-start">
        {t2("conclu.credit.title")}
      </h2>
      <div id="navCredits" className="flex justify-between gap-7">
        <Button
          label={t2("biblio")}
          onClick={openShowBiblio}
          size="large"
          custom="mt-5 w-full"
          intent={showCredits === "biblio" ? "tertiary" : "primary"}
        />
        <Button
          label={t2("img")}
          onClick={openShowImages}
          size="large"
          custom="mt-5 w-full"
          intent={showCredits === "img" ? "tertiary" : "primary"}
        />
        <Button
          label={t2("vid")}
          onClick={openShowVideos}
          size="large"
          custom="mt-5 w-full"
          intent={showCredits === "vid" ? "tertiary" : "primary"}
        />
        <Button
          label={t2("sound")}
          onClick={openShowSounds}
          size="large"
          custom="mt-5 w-full"
          intent={showCredits === "sound" ? "tertiary" : "primary"}
        />
      </div>
      <div
        id="contentCredits"
        className="flex flex-col mt-10 mr-20 p-10 border-1 border-white w-full"
      >
        <div className="w-[85%] flex flex-col gap-10 font-body text-lg">
          {showCredits === "biblio" && (
            <>
              <div id="introCredits">
                <h3 className="uppercase">{t2("intro.title")}</h3>
                <ul>
                  <li>
                    Monica KIM, « The Interrogation Rooms of the Korean War –
                    The Untold History » (Ed. Princeton University Press, 2018),
                  </li>
                </ul>
              </div>

              <div id="ch1Credits">
                <h3 className="uppercase">{t2("ch1.title")}</h3>
                <ul>
                  <li>
                    Wikipedia contributors, « Geoje POW camp » (Wikipedia, The
                    Free Encyclopedia, 2025)
                    <a
                      href="https://en.wikipedia.org/w/index.php?title=Geoje_POW_camp&oldid=1285525340"
                      className="underline"
                    >
                      https://en.wikipedia.org/w/index.php?title=Geoje_POW_camp&oldid=1285525340
                    </a>
                  </li>
                </ul>
              </div>

              <div id="ch2Credits">
                <h3 className="uppercase">{t2("ch2.title")}</h3>
                <ul>
                  <li>
                    Dark Tourism and Place Identity. (s. d.). Google Books
                    <a
                      href="https://books.google.fr/books?hl=fr&lr=&id=sJ0PYNGhwe0C&oi=fnd&pg=PA236&dq=camp+de+geoje+&ots=irefRf2VY4&sig=feaAIY5LEnb2H-SoH83HgClkI_8&redir_esc=y#v=onepage&q=camp%20de%20geoje&f=false"
                      className="underline"
                    >
                      https://books.google.fr/books?hl=fr&lr=&id=sJ0PYNGhwe0C&oi=fnd&pg=PA236&dq=camp+de+geoje+&ots=irefRf2VY4&sig=feaAIY5LEnb2H-SoH83HgClkI_8&redir_esc=y#v=onepage&q=camp%20de%20geoje&f=false
                    </a>
                  </li>
                </ul>
              </div>

              <div id="ch3Credits">
                <h3 className="uppercase mb-2">{t2("ch3.title")}</h3>
                <ul className="flex flex-col gap-5">
                  <li>
                    Monica KIM, « The Interrogation Rooms of the Korean War –
                    The Untold History » (Ed. Princeton University Press, 2018),
                  </li>
                  <li>
                    ICRC action during the Korean War - ICRC Archives & Library
                    | Cross-Files | ICRC Archives, audiovisual and library :{" "}
                  </li>
                </ul>
              </div>

              <i>{t2("conclu.credit.legend")}</i>
            </>
          )}
          {showCredits === "img" && (
            <>
              <ul className="flex flex-col gap-5 overflow-hidden">
                <li>
                  Geoje City. (s.d.). The Prisoner of War Olympics.
                  [Photographie].{" "}
                  <a
                    href="https://webtrans.llsollu.com:40443/ezweb?source=KO&target=EN&profileId=03b14b5a-1be1-47a1-b8d9-9f39a2ead615&url=https%3A%2F%2Fwww.geoje.go.kr%2Fboard%2Fview.geoje%3FboardId%3DBBS_0000608%26menuCd%3DDOM_000008905008003000%26orderBy%3DCATEGORY_CODE1%3ADESC%26paging%3Dok%26startPage%3D9%26dataSid%3D305970862"
                    className="underline"
                  >
                    https://webtrans.llsollu.com:40443/ezweb?source=KO&target=EN&profileId=03b14b5a-1be1-47a1-b8d9-9f39a2ead615&url=https%3A%2F%2Fwww.geoje.go.kr%2Fboard%2Fview.geoje%3FboardId%3DBBS_0000608%26menuCd%3DDOM_000008905008003000%26orderBy%3DCATEGORY_CODE1%3ADESC%26paging%3Dok%26startPage%3D9%26dataSid%3D305970862
                  </a>
                </li>
                <li>
                  Geoje City. (s.d.). Korean guard. [Photographie].{" "}
                  <a
                    href="https://webtrans.llsollu.com:40443/ezweb?source=KO&target=EN&profileId=03b14b5a-1be1-47a1-b8d9-9f39a2ead615&url=https%3A%2F%2Fwww.geoje.go.kr%2Fboard%2Fview.geoje%3FboardId%3DBBS_0000608%26menuCd%3DDOM_000008905008003000%26orderBy%3DCATEGORY_CODE1%3ADESC%26paging%3Dok%26startPage%3D9%26dataSid%3D305970881"
                    className="underline"
                  >
                    https://webtrans.llsollu.com:40443/ezweb?source=KO&target=EN&profileId=03b14b5a-1be1-47a1-b8d9-9f39a2ead615&url=https%3A%2F%2Fwww.geoje.go.kr%2Fboard%2Fview.geoje%3FboardId%3DBBS_0000608%26menuCd%3DDOM_000008905008003000%26orderBy%3DCATEGORY_CODE1%3ADESC%26paging%3Dok%26startPage%3D9%26dataSid%3D305970881
                  </a>
                </li>
                <li>
                  Yonhap News Agency. (2020, 24 juin). Des photos du CICR
                  donnent un aperçu rare de la vie de réfugiés et prisonniers
                  pendant la guerre de Corée.{" "}
                  <a
                    href="https://fr.yna.co.kr/view/AFR20200624001200884"
                    className="underline"
                  >
                    https://fr.yna.co.kr/view/AFR20200624001200884
                  </a>
                </li>
                <li>
                  Korea Tourism Organization. (s.d.). Camp de prisonniers de
                  guerre de Geoje [Page web].{" "}
                  <a
                    href="https://french.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=85679"
                    className="underline"
                  >
                    https://french.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=85679
                  </a>
                </li>
                <li>
                  Bischof, W. (1952). Chinese New Year [Photographie].
                  Minneapolis Institute of Art.{" "}
                  <a
                    href="https://collections.artsmia.org/art/5257/chinese-new-year-werner-bischof"
                    className="underline"
                  >
                    https://collections.artsmia.org/art/5257/chinese-new-year-werner-bischof
                  </a>
                </li>
                <li>
                  Bischof, W. (1952). At Lunch Time [Photographie]. Minneapolis
                  Institute of Art.{" "}
                  <a
                    href="https://collections.artsmia.org/art/5255/at-lunch-time-werner-bischof"
                    className="underline"
                  >
                    https://collections.artsmia.org/art/5255/at-lunch-time-werner-bischof
                  </a>
                </li>
                <li>
                  Bischof, W. (1952). English Lesson [Photographie]. Minneapolis
                  Institute of Art.{" "}
                  <a
                    href="https://collections.artsmia.org/art/5254/english-lesson-werner-bischof"
                    className="underline"
                  >
                    https://collections.artsmia.org/art/5254/english-lesson-werner-bischof
                  </a>
                </li>
                <li>
                  Bischof, W. (1952). Killing Time [Photographie]. Minneapolis
                  Institute of Art.{" "}
                  <a
                    href="https://collections.artsmia.org/art/5246/killing-time-werner-bischof"
                    className="underline"
                  >
                    https://collections.artsmia.org/art/5246/killing-time-werner-bischof
                  </a>
                </li>
                <li>
                  Bischof, W. (1952). Spectacle avec échassiers pour prisonniers
                  de guerre, camp de Koje-do, Corée du Sud [Photographie].
                  Magnum Photos.{" "}
                  <a
                    href="https://collections.artsmia.org/art/5010/koje-do-werner-bischof"
                    className="underline"
                  >
                    https://collections.artsmia.org/art/5010/koje-do-werner-bischof
                  </a>
                </li>
                <li>
                  Bischof, W. (1952). Spectacle musical pour prisonniers de
                  guerre, Koje-do, Corée du Sud [Photographie]. Magnum Photos.{" "}
                  <a
                    href="https://collections.artsmia.org/art/5248/speech-werner-bischof"
                    className="underline"
                  >
                    https://collections.artsmia.org/art/5248/speech-werner-bischof
                  </a>
                </li>
                <li>
                  Bischof, W. (1952). Compound 92 [Photographie]. Minneapolis
                  Institute of Art.{" "}
                  <a
                    href="https://collections.artsmia.org/art/5000/compound-92-werner-bischof"
                    className="underline"
                  >
                    https://collections.artsmia.org/art/5000/compound-92-werner-bischof
                  </a>
                </li>
                <li>
                  Bischof, W. (1952). Portrait d’un prisonnier de guerre
                  souriant, camp de Koje-do, Corée du Sud [Photographie]. Magnum
                  Photos.{" "}
                  <a
                    href="https://collections.artsmia.org/art/5249/general-kim-il-sung-werner-bischof"
                    className="underline"
                  >
                    https://collections.artsmia.org/art/5249/general-kim-il-sung-werner-bischof
                  </a>
                </li>
                <li>
                  Bibliothèque nationale de France. (s.d.). [Photographies sur
                  la guerre de Corée] [Photographies]. Gallica.{" "}
                  <a
                    href="https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f1.item.r=%22guerre%20de%20cor%C3%A9e%22"
                    className="underline"
                  >
                    https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f1.item.r=%22guerre%20de%20cor%C3%A9e%22
                  </a>
                </li>
                <li>
                  Bibliothèque nationale de France. (s.d.). [Photographies sur
                  la guerre de Corée] [Photographies]. Gallica.{" "}
                  <a
                    href="https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f2.item"
                    className="underline"
                  >
                    https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f2.item
                  </a>
                </li>
                <li>
                  Bibliothèque nationale de France. (s.d.). [Photographies sur
                  la guerre de Corée] [Photographies]. Gallica.{" "}
                  <a
                    href="https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f3.item"
                    className="underline"
                  >
                    https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f3.item
                  </a>
                </li>
                <li>
                  Bibliothèque nationale de France. (s.d.). [Photographies sur
                  la guerre de Corée] [Photographies]. Gallica.{" "}
                  <a
                    href="https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f4.item"
                    className="underline"
                  >
                    https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f4.item
                  </a>
                </li>
                <li>
                  Bibliothèque nationale de France. (s.d.). [Photographies sur
                  la guerre de Corée] [Photographies]. Gallica.{" "}
                  <a
                    href="https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f5.item"
                    className="underline"
                  >
                    https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f5.item
                  </a>
                </li>
                <li>
                  Bibliothèque nationale de France. (s.d.). [Photographies sur
                  la guerre de Corée] [Photographies]. Gallica.{" "}
                  <a
                    href="https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f6.item"
                    className="underline"
                  >
                    https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f6.item
                  </a>
                </li>
                <li>
                  Bibliothèque nationale de France. (s.d.). [Photographies sur
                  la guerre de Corée] [Photographies]. Gallica.{" "}
                  <a
                    href="https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f7.item"
                    className="underline"
                  >
                    https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f7.item
                  </a>
                </li>
                <li>
                  Bibliothèque nationale de France. (s.d.). [Photographies sur
                  la guerre de Corée] [Photographies]. Gallica.{" "}
                  <a
                    href="https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f8.item"
                    className="underline"
                  >
                    https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f8.item
                  </a>
                </li>
                <li>
                  Bibliothèque nationale de France. (s.d.). [Photographies sur
                  la guerre de Corée] [Photographies]. Gallica.{" "}
                  <a
                    href="https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f9.item"
                    className="underline"
                  >
                    https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f9.item
                  </a>
                </li>
                <li>
                  Bibliothèque nationale de France. (s.d.). [Photographies sur
                  la guerre de Corée] [Photographies]. Gallica.{" "}
                  <a
                    href="https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f10.item"
                    className="underline"
                  >
                    https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f10.item
                  </a>
                </li>
                <li>
                  Bibliothèque nationale de France. (s.d.). [Photographies sur
                  la guerre de Corée] [Photographies]. Gallica.{" "}
                  <a
                    href="https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f11.item"
                    className="underline"
                  >
                    https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f11.item
                  </a>
                </li>
                <li>
                  Bibliothèque nationale de France. (s.d.). [Photographies sur
                  la guerre de Corée] [Photographies]. Gallica.{" "}
                  <a
                    href="https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f12.item"
                    className="underline"
                  >
                    https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f12.item
                  </a>
                </li>
                <li>
                  Bibliothèque nationale de France. (s.d.). [Photographies sur
                  la guerre de Corée] [Photographies]. Gallica.{" "}
                  <a
                    href="https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f13.item"
                    className="underline"
                  >
                    https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f13.item
                  </a>
                </li>
                <li>
                  Bibliothèque nationale de France. (s.d.). [Photographies sur
                  la guerre de Corée] [Photographies]. Gallica.{" "}
                  <a
                    href="https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f14.item"
                    className="underline"
                  >
                    https://gallica.bnf.fr/ark:/12148/btv1b2400165h/f14.item
                  </a>
                </li>
                <li>
                  Wikipédia. (s.d). With her brother on her back a war weary
                  Korean girl tiredly trudges by a stalled M-46 tank, at
                  Haengju, Korea. June 9, 1951. Maj. R.V. Spencer, UAF. (Navy).
                  [Photographie]. Wikimedia Commons.{" "}
                  <a
                    href="https://commons.wikimedia.org/wiki/File:KoreanWarRefugeeWithBaby.jpg?uselang=fr#/media/File:With_her_brother_on_her_back_a_war_weary_Korean_girl_tiredly_trudges_by_a_stalled_M-26_tank,_at_Haengju,_Korea_HD-SN-99-03144.jpg"
                    className="underline"
                  >
                    https://commons.wikimedia.org/wiki/File:KoreanWarRefugeeWithBaby.jpg?uselang=fr#/media/File:With_her_brother_on_her_back_a_war_weary_Korean_girl_tiredly_trudges_by_a_stalled_M-26_tank,_at_Haengju,_Korea_HD-SN-99-03144.jpg
                  </a>
                </li>
                <li>
                  Inconnu. (1950). Unité blindée de chars T-34 nord-coréens
                  entrant à Séoul [Photographie]. Wikimedia Commons.{" "}
                  <a
                    href="https://fr.wikipedia.org/wiki/Guerre_de_Cor%C3%A9e#/media/Fichier:Tank_unit_of_the_Korean_People's_Army_enters_the_streets_of_Seoul_while_being_welcomed_by_the_Korean_people,_1950.jpg"
                    className="underline"
                  >
                    https://fr.wikipedia.org/wiki/Guerre_de_Cor%C3%A9e#/media/Fichier:Tank_unit_of_the_Korean_People's_Army_enters_the_streets_of_Seoul_while_being_welcomed_by_the_Korean_people,_1950.jpg
                  </a>
                </li>
                <li>
                  Wikipédia. (s.d).Mère sud-coréenne accompagnant son fils
                  mobilisé à la gare de Daegu [Photographie]. Wikimedia Commons.{" "}
                  <a
                    href="https://fr.wikipedia.org/wiki/Guerre_de_Cor%C3%A9e#/media/Fichier:1950.12.19_%ED%95%9C%EA%B5%AD%EC%A0%84%EC%9F%81-%EA%B5%AD%EA%B5%B0%EC%8B%A0%EB%B3%91_(7445956136).jpg"
                    className="underline"
                  >
                    https://fr.wikipedia.org/wiki/Guerre_de_Cor%C3%A9e#/media/Fichier:1950.12.19_%ED%95%9C%EA%B5%AD%EC%A0%84%EC%9F%81-%EA%B5%AD%EA%B5%B0%EC%8B%A0%EB%B3%91_(7445956136).jpg
                  </a>
                </li>
                <li>
                  Wikipédia. (s.d). Évacuation par l’US Navy de réfugiés
                  nord-coréens à bord de l’USS Weiss [Photographie]. Wikimedia
                  Commons.{" "}
                  <a
                    href="https://fr.wikipedia.org/wiki/Guerre_de_Cor%C3%A9e#/media/Fichier:Korean_War_refugees_aboard_USS_Weiss_(APD-135),_16_September_1952_(80-G-K-14209).jpg"
                    className="underline"
                  >
                    https://fr.wikipedia.org/wiki/Guerre_de_Cor%C3%A9e#/media/Fichier:Korean_War_refugees_aboard_USS_Weiss_(APD-135),_16_September_1952_(80-G-K-14209).jpg
                  </a>
                </li>
                <li>
                  Wikipédia. (s.d). Fuite de réfugiés à travers un pont détruit
                  sur le fleuve Taedong [Photographie]. Wikimedia Commons.{" "}
                  <a
                    href="https://fr.wikipedia.org/wiki/Guerre_de_Cor%C3%A9e#/media/Fichier:Max_Desfor_-_Flight_of_Refugees_Across_Wrecked_Bridge_in_Korea.jpg"
                    className="underline"
                  >
                    https://fr.wikipedia.org/wiki/Guerre_de_Cor%C3%A9e#/media/Fichier:Max_Desfor_-_Flight_of_Refugees_Across_Wrecked_Bridge_in_Korea.jpg
                  </a>
                </li>
                <li>
                  Wikipédia. (s.d). Prisonniers nord-coréens et chinois dans un
                  camp à Pusan [Photographie]. Wikimedia Commons.{" "}
                  <a
                    href="https://fr.wikipedia.org/wiki/Guerre_de_Cor%C3%A9e#/media/Fichier:Chinese_and_North_Korean_POWs_at_camp_in_Pusan_HD-SN-99-03155.JPEG"
                    className="underline"
                  >
                    https://fr.wikipedia.org/wiki/Guerre_de_Cor%C3%A9e#/media/Fichier:Chinese_and_North_Korean_POWs_at_camp_in_Pusan_HD-SN-99-03155.JPEG
                  </a>
                </li>
                <li>
                  Bischof, W. (s.d.). 1951 – India, Japan, Korea. Werner Bischof
                  – Official Website.{" "}
                  <a
                    href="https://wernerbischof.com/world-1951-1954/1951-india-japan-korea-2/"
                    className="underline"
                  >
                    https://wernerbischof.com/world-1951-1954/1951-india-japan-korea-2/
                  </a>
                </li>
                <li>
                  La Presse. (2010, 28 juin). Il y a 60 ans commençait la guerre
                  de Corée. La Presse.{" "}
                  <a
                    href="https://www.lapresse.ca/international/asie-oceanie/201006/28/01-4293725-il-y-a-60-ans-commencait-la-guerre-de-coree.php"
                    className="underline"
                  >
                    https://www.lapresse.ca/international/asie-oceanie/201006/28/01-4293725-il-y-a-60-ans-commencait-la-guerre-de-coree.php
                  </a>
                </li>
                <li>
                  Wikipédia. (s.d).Fichier:Korean War refugees aboard USS Weiss
                  (APD-135), 16 September 1952 (80-G-K-14209).jpg.
                  [Photographie]. Wikimedia Commons.{" "}
                  <a
                    href="https://fr.m.wikipedia.org/wiki/Fichier:Korean_War_refugees_aboard_USS_Weiss_%28APD-135%29,_16_September_1952_%2880-G-K-14209%29.jpg"
                    className="underline"
                  >
                    https://fr.m.wikipedia.org/wiki/Fichier:Korean_War_refugees_aboard_USS_Weiss_%28APD-135%29,_16_September_1952_%2880-G-K-14209%29.jpg
                  </a>
                </li>
                <li>
                  Younhap News Agency. (24 juin 2020).Geoje POW camp during
                  Korean War. [Photographie].{" "}
                  <a
                    href="https://en.yna.co.kr/view/PYH20200624063500325"
                    className="underline"
                  >
                    https://en.yna.co.kr/view/PYH20200624063500325
                  </a>
                </li>
                <li>
                  Wikipédia. (s.d). Montage of images from the Korean War.
                  Clockwise from top: U.S. Marines retreating during the Battle
                  of the Chosin Resevoir, U.N. landing at Incheon, Korean
                  refugees in front of an American M46 Patton tank, U.S.
                  Marines, led by First Lieutenant Baldomero Lopez, landing at
                  Incheon, and an American F-86 Sabre fighter jet.
                  [Photographie]. Wikimedia Commons.{" "}
                  <a
                    href="https://fr.wikipedia.org/wiki/Guerre_de_Cor%C3%A9e#/media/Fichier:Korean_War_Montage_2.png"
                    className="underline"
                  >
                    https://fr.wikipedia.org/wiki/Guerre_de_Cor%C3%A9e#/media/Fichier:Korean_War_Montage_2.png
                  </a>
                </li>
                <li>
                  Bischof, W. (1952). Portrait d’un prisonnier de guerre
                  souriant, camp de Koje-do, Corée du Sud [Photographie]. Magnum
                  Photos.{" "}
                  <a
                    href="https://www.magnumphotos.com/photographer/werner-bischof/"
                    className="underline"
                  >
                    https://www.magnumphotos.com/photographer/werner-bischof/
                  </a>
                </li>
                <li>
                  Bischof, W. (1952). Spectacle musical pour prisonniers de
                  guerre, Koje-do, Corée du Sud [Photographie]. Minneapolis
                  Institute of Art.{" "}
                  <a
                    href="https://collections.artsmia.org/art/1805/koje-do-south-korea-werner-bischof"
                    className="underline"
                  >
                    https://collections.artsmia.org/art/1805/koje-do-south-korea-werner-bischof
                  </a>
                </li>
                <li>
                  Bischof, W. (1952). Koje-Do [Photographie]. Minneapolis
                  Institute of Art.{" "}
                  <a
                    href="https://collections.artsmia.org/art/5243/koje-do-werner-bischof"
                    className="underline"
                  >
                    https://collections.artsmia.org/art/5243/koje-do-werner-bischof
                  </a>
                </li>
              </ul>
            </>
          )}
          {showCredits === "vid" && (
            <>
              <ul className="flex flex-col gap-5">
                <li>
                  ECPAD. (2019). Bande-annonce - Corée, nos soldats oubliés
                  (2016). [Vidéo]. YouTube.{" "}
                  <a
                    href="https://www.youtube.com/watch?v=adSj49Y6w5s"
                    className="underline"
                  >
                    https://www.youtube.com/watch?v=adSj49Y6w5s
                  </a>
                </li>
                <li>
                  Institut national de l’audiovisuel. (s.d.). Corée : Historique
                  des tensions entre les deux pays [Vidéo]. INA.{" "}
                  <a
                    href="https://www.ina.fr/ina-eclaire-actu/video/4331308001004/coree-historique-des-tensions-entre-les-deux-pays"
                    className="underline"
                  >
                    https://www.ina.fr/ina-eclaire-actu/video/4331308001004/coree-historique-des-tensions-entre-les-deux-pays
                  </a>
                </li>
                <li>
                  Institut national de l’audiovisuel. (s.d.). Corée : Opérations
                  militaires sur le fleuve Kum [Vidéo]. INA.{" "}
                  <a
                    href="https://www.ina.fr/ina-eclaire-actu/video/afe85003634/coree-operations-militaires-sur-le-fleuve-kum"
                    className="underline"
                  >
                    https://www.ina.fr/ina-eclaire-actu/video/afe85003634/coree-operations-militaires-sur-le-fleuve-kum
                  </a>
                </li>
                <li>
                  Institut national de l’audiovisuel. (s.d.). En Corée :
                  Progression des troupes de Corée du Nord [Vidéo]. INA.{" "}
                  <a
                    href="https://www.ina.fr/ina-eclaire-actu/video/afe85003655/en-coree-progression-des-troupes-de-coree-du-nord"
                    className="underline"
                  >
                    https://www.ina.fr/ina-eclaire-actu/video/afe85003655/en-coree-progression-des-troupes-de-coree-du-nord
                  </a>
                </li>
                <li>
                  Institut national de l’audiovisuel. (s.d.). La guerre en Corée
                  : L’exode des réfugiés en Corée [Vidéo]. INA.{" "}
                  <a
                    href="https://www.ina.fr/ina-eclaire-actu/video/afe85003714/la-guerre-en-coree-l-exode-des-refugies-en-coree"
                    className="underline"
                  >
                    https://www.ina.fr/ina-eclaire-actu/video/afe85003714/la-guerre-en-coree-l-exode-des-refugies-en-coree
                  </a>
                </li>
                <li>
                  Institut national de l’audiovisuel. (s.d.). Bombardement de
                  Corée [Vidéo]. INA.{" "}
                  <a
                    href="https://www.ina.fr/ina-eclaire-actu/video/afe85004330/bombardement-de-coree"
                    className="underline"
                  >
                    https://www.ina.fr/ina-eclaire-actu/video/afe85004330/bombardement-de-coree
                  </a>
                </li>
                <li>
                  Institut national de l’audiovisuel. (s.d.). Échange de
                  prisonniers en Corée [Vidéo]. INA.{" "}
                  <a
                    href="https://www.ina.fr/ina-eclaire-actu/video/afe85005059/echange-de-prisonniers-en-coree"
                    className="underline"
                  >
                    https://www.ina.fr/ina-eclaire-actu/video/afe85005059/echange-de-prisonniers-en-coree
                  </a>
                </li>
                <li>
                  Institut national de l’audiovisuel. (s.d.). Rétablissement de
                  l’ordre dans le camp de Koje [Vidéo]. INA.{" "}
                  <a
                    href="https://www.ina.fr/ina-eclaire-actu/video/afe85004609/retablissement-de-l-ordre-dans-le-camp-de-koje"
                    className="underline"
                  >
                    https://www.ina.fr/ina-eclaire-actu/video/afe85004609/retablissement-de-l-ordre-dans-le-camp-de-koje
                  </a>
                </li>
                <li>
                  포로수용소 세계기록유산 등재 추진. (s.d). 전쟁포로 활동 /
                  POW(RG 111 LC 29588). [Vidéo]. YouTube.{" "}
                  <a
                    href="https://www.youtube.com/watch?v=5JVHLbpzzsQ"
                    className="underline"
                  >
                    https://www.youtube.com/watch?v=5JVHLbpzzsQ
                  </a>
                </li>
                <li>
                  포로수용소 세계기록유산 등재 추진. (s.d.). 65수용동 /
                  65COMPOUND (RG 111 LC 29580) [Vidéo]. YouTube.{" "}
                  <a
                    href="https://www.youtube.com/watch?v=u5GUF59NrxY"
                    className="underline"
                  >
                    https://www.youtube.com/watch?v=u5GUF59NrxY
                  </a>
                </li>
                <li>
                  포로수용소 세계기록유산 등재 추진. (s.d.). 거제도 전쟁포로 /
                  KOJE-DO PRISONERS OF WAR(RG 389 1) [Vidéo]. YouTube.{" "}
                  <a
                    href="https://www.youtube.com/watch?v=2Y7nRN3B4A8"
                    className="underline"
                  >
                    https://www.youtube.com/watch?v=2Y7nRN3B4A8
                  </a>
                </li>
                <li>
                  포로수용소 세계기록유산 등재 추진. (s.d.). 전쟁포로 활동 /
                  POW(RG 111 LC 29588) [Vidéo]. YouTube.{" "}
                  <a
                    href="https://www.youtube.com/watch?v=5JVHLbpzzsQ"
                    className="underline"
                  >
                    https://www.youtube.com/watch?v=5JVHLbpzzsQ
                  </a>
                </li>
                <li>
                  포로수용소 세계기록유산 등재 추. (s.d.). 전쟁포로 / P.O.W(RG
                  111 ADC 9112)[Vidéo]. YouTube.{" "}
                  <a
                    href="https://www.youtube.com/watch?v=f19RVZLg2iA"
                    className="underline"
                  >
                    https://www.youtube.com/watch?v=f19RVZLg2iA
                  </a>
                </li>
                <li>
                  포로수용소 세계기록유산 등재 추. (s.d.). 전쟁포로들 / POWS(RG
                  111 LC 29576 004)[Vidéo]. YouTube.{" "}
                  <a
                    href="https://www.youtube.com/watch?v=0iyHS7rwcCw"
                    className="underline"
                  >
                    https://www.youtube.com/watch?v=0iyHS7rwcCw
                  </a>
                </li>
                <li>
                  포로수용소 세계기록유산 등재 추. (s.d.). 처리텐트 / Prosesing
                  tent(RG 111 LC 32389)[Vidéo]. YouTube.{" "}
                  <a
                    href="https://www.youtube.com/watch?v=zgS19roS8n0"
                    className="underline"
                  >
                    https://www.youtube.com/watch?v=zgS19roS8n0
                  </a>
                </li>
                <li>
                  포로수용소 세계기록유산 등재 추진. (s.d.). 전쟁포로 활동 /
                  POW(RG 111 LC 29588) [Vidéo]. YouTube.{" "}
                  <a
                    href="https://www.youtube.com/watch?v=5JVHLbpzzsQ"
                    className="underline"
                  >
                    https://www.youtube.com/watch?v=5JVHLbpzzsQ
                  </a>
                </li>
              </ul>
            </>
          )}
          {showCredits === "sound" && (
            <>
              <div id="transitionCredits">
                <h3 className="uppercase">Transition</h3>
                <p>
                  <strong>Effet sonore : </strong>Transition Base
                </p>
                <p>
                  <strong>Auteur : </strong>Pixabay Sound Effects
                </p>
                <p>
                  <strong>Source : </strong>Pixabay
                </p>
                <p>
                  <strong>Lien direct : </strong>
                  <a
                    href="https://pixabay.com/sound-effects/transition-base-121422/"
                    className="underline"
                  >
                    https://pixabay.com/sound-effects/transition-base-121422/
                  </a>
                </p>
              </div>
              <div id="introCredits">
                <h3 className="uppercase">
                  Page d'introduction et de chargement
                </h3>
                <p>
                  <strong>Effet sonore : </strong>The Faded Rose
                </p>
                <p>
                  <strong>Auteur : </strong>OB-LIX
                </p>
                <p>
                  <strong>Source : </strong>Pixabay
                </p>
                <p>
                  <strong>Lien direct : </strong>
                  <a
                    href="https://pixabay.com/music/id-109375/"
                    className="underline"
                  >
                    https://pixabay.com/music/id-109375/
                  </a>
                </p>
              </div>
              <div id="ch1Credits">
                <h3 className="uppercase">Chapitre 1</h3>
                <div className="flex flex-col gap-5">
                  <div>
                    <p>
                      <strong>Effet sonore : </strong>Howling wind through
                      window in tower
                    </p>
                    <p>
                      <strong>Auteur : </strong>tomhannen
                    </p>
                    <p>
                      <strong>Source : </strong>
                      <a
                        href="https://freesound.org/people/tomhannen"
                        className="underline"
                      >
                        Freesound
                      </a>
                    </p>
                    <p>
                      <strong>Plateforme de téléchargement : </strong>Pixabay
                    </p>
                    <p>
                      <strong>Lien direct : </strong>
                      <a
                        href="https://pixabay.com/sound-effects/howling-wind-through-window-in-tower-28578/"
                        className="underline"
                      >
                        https://pixabay.com/sound-effects/howling-wind-through-window-in-tower-28578/
                      </a>
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Effet sonore : </strong>Simple Battle or War
                    </p>
                    <p>
                      <strong>Auteur : </strong>GameXplosion
                    </p>
                    <p>
                      <strong>Source : </strong>
                      Freesound
                    </p>
                    <p>
                      <strong>Lien direct : </strong>
                      <a
                        href="https://freesound.org/people/GameXplosion/sounds/760104/"
                        className="underline"
                      >
                        https://freesound.org/people/GameXplosion/sounds/760104/
                      </a>
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Effet sonore : </strong>The Creepy War Atmosphere
                      Will Give You Goosebumps
                    </p>
                    <p>
                      <strong>Auteur : </strong>muyo5438
                    </p>
                    <p>
                      <strong>Source : </strong>
                      Freesound
                    </p>
                    <p>
                      <strong>Lien direct : </strong>
                      <a
                        href="https://freesound.org/people/muyo5438/sounds/711148/"
                        className="underline"
                      >
                        https://freesound.org/people/muyo5438/sounds/711148/
                      </a>
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Effet sonore : </strong>Battlefield 7
                    </p>
                    <p>
                      <strong>Auteur : </strong>3dj
                    </p>
                    <p>
                      <strong>Source : </strong>
                      Freesound
                    </p>
                    <p>
                      <strong>Lien direct : </strong>
                      <a
                        href="https://freesound.org/people/3dj/sounds/658823/"
                        className="underline"
                      >
                        https://freesound.org/people/3dj/sounds/658823/
                      </a>
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Effet sonore : </strong>Butt War Sounds with Farts
                    </p>
                    <p>
                      <strong>Auteur : </strong>ashdunny
                    </p>
                    <p>
                      <strong>Source : </strong>
                      Freesound
                    </p>
                    <p>
                      <strong>Lien direct : </strong>
                      <a
                        href="https://freesound.org/people/ashdunny/sounds/640858/"
                        className="underline"
                      >
                        https://freesound.org/people/ashdunny/sounds/640858/
                      </a>
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Effet sonore : </strong>Don’t Give a Dam[n] About
                      Hitler (World War 2)
                    </p>
                    <p>
                      <strong>Auteur : </strong>Kris Klavenes (klavo1985)
                    </p>
                    <p>
                      <strong>Source : </strong>
                      Freesound
                    </p>
                    <p>
                      <strong>Lien direct : </strong>
                      <a
                        href="https://freesound.org/people/klavo1985/sounds/334912/"
                        className="underline"
                      >
                        https://freesound.org/people/klavo1985/sounds/334912/
                      </a>
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Effet sonore : </strong>War of the Worlds Horn 1
                    </p>
                    <p>
                      <strong>Auteur : </strong>jarredgibb
                    </p>
                    <p>
                      <strong>Source : </strong>
                      Freesound
                    </p>
                    <p>
                      <strong>Lien direct : </strong>
                      <a
                        href="https://freesound.org/people/jarredgibb/sounds/244796/"
                        className="underline"
                      >
                        https://freesound.org/people/jarredgibb/sounds/244796/
                      </a>
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Effet sonore : </strong>Medieval Combat Loop
                    </p>
                    <p>
                      <strong>Auteur : </strong>yap_audio_production
                    </p>
                    <p>
                      <strong>Source : </strong>
                      Freesound
                    </p>
                    <p>
                      <strong>Lien direct : </strong>
                      <a
                        href="https://freesound.org/people/yap_audio_production/sounds/218522/"
                        className="underline"
                      >
                        https://freesound.org/people/yap_audio_production/sounds/218522/
                      </a>
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Effet sonore : </strong>Civil War Caplock Rifle
                    </p>
                    <p>
                      <strong>Auteur : </strong>artdeco
                    </p>
                    <p>
                      <strong>Source : </strong>
                      Freesound
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Effet sonore : </strong>01451 War Scene
                      Arrangement 1
                    </p>
                    <p>
                      <strong>Auteur : </strong>robinhood76
                    </p>
                    <p>
                      <strong>Source : </strong>
                      Freesound
                    </p>
                    <p>
                      <strong>Lien direct : </strong>
                      <a
                        href="https://freesound.org/people/robinhood76/sounds/87718/"
                        className="underline"
                      >
                        https://freesound.org/people/robinhood76/sounds/87718/
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div id="ch3Credits">
                <h3 className="uppercase">Chapitre 3</h3>
                <div className="flex flex-col gap-5">
                  <div>
                    <p>
                      <strong>Effet sonore : </strong>Distant Pistol Gun Battle
                      (S19-18)
                    </p>
                    <p>
                      <strong>Auteur : </strong>craigsmith
                    </p>
                    <p>
                      <strong>Source : </strong>
                      Freesound
                    </p>
                    <p>
                      <strong>Lien direct : </strong>
                      <a
                        href="https://freesound.org/s/675137/"
                        className="underline"
                      >
                        https://freesound.org/s/675137/
                      </a>
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Effet sonore : </strong>Distant Explosion
                    </p>
                    <p>
                      <strong>Auteur : </strong>danlucaz
                    </p>
                    <p>
                      <strong>Source : </strong>
                      Freesound
                    </p>
                    <p>
                      <strong>Lien direct : </strong>
                      <a
                        href="https://freesound.org/s/517747/"
                        className="underline"
                      >
                        https://freesound.org/s/517747/
                      </a>
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Témoignage audio : </strong>Interview de M. OH
                      Eun-seo
                    </p>
                    <p>
                      <strong>Description : </strong>Extrait de témoignage d'un
                      visiteur du camp, disponible sur YouTube.
                    </p>
                    <p>
                      <strong>Source : </strong>
                      Youtube
                    </p>
                    <p>
                      <strong>Lien direct : </strong>
                      <a
                        href="https://youtu.be/7G0mp9lDaN8?si=qUkh0hf29bJD1U-n"
                        className="underline"
                      >
                        거제도 포로수용소 반공포로 오은서 할아버지 이야기
                      </a>
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Musique : </strong>Chant militaire des prisonniers
                      du camp de Geoje
                    </p>
                    <p>
                      <strong>Source : </strong>
                      Vidéo d’archives Korean Prisoners of War Marching and
                      Singing
                    </p>
                    <p>
                      <strong>Lien direct : </strong>
                      <a
                        href="https://www.pond5.com/fr/stock-footage/item/108222962-korean-prisoners-war-marching-and-singing"
                        className="underline"
                      >
                        Korean Prisoners Of War Marching And Sin... | Stock
                        Video | Pond5
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div id="btnCredits">
                <h3 className="uppercase">Bouton</h3>
                <p>
                  <strong>Effet sonore : </strong>Clic léger d’interface
                </p>
                <p>
                  <strong>Auteur : </strong>chango
                </p>
                <p>
                  <strong>Source : </strong>Freesound
                </p>
                <p>
                  <strong>Plateforme de téléchargement : </strong>Pixabay
                </p>
                <p>
                  <strong>Lien direct : </strong>
                  <a
                    href="https://pixabay.com/sound-effects/chango-clique-164103/"
                    className="underline"
                  >
                    https://pixabay.com/sound-effects/chango-clique-164103/
                  </a>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Credits;
