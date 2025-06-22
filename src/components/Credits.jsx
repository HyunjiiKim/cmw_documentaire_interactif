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
        <img
          src="../assets/icons/close.svg"
          className="self-end w-7 pb-3 justify-end"
        />
        <div className="w-[85%] flex flex-col gap-10 font-body text-lg">
          {showCredits === "biblio" && (
            <>
              <div id="introCredits">
                <h3 className="uppercase">{t2("intro.title")}</h3>
                <ul>
                  <li>
                    Monica KIM, « The Interrogation Rooms of the Korean War –
                    The Untold History » (Ed. Princeton University Press, 2018),
                    non-traduit :{" "}
                    <a
                      href="https://cloud.iguane.org/s/qDCZWernWp7Zx5z"
                      className="underline"
                    >
                      https://cloud.iguane.org/s/qDCZWernWp7Zx5z
                    </a>
                  </li>
                </ul>
              </div>

              <div id="ch1Credits">
                <h3 className="uppercase">{t2("ch1.title")}</h3>
                <ul>
                  <li>
                    Wikipedia contributors, « Geoje POW camp » (Wikipedia, The
                    Free Encyclopedia, 2025), non-traduit :{" "}
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
                    Dark Tourism and Place Identity. (s. d.). Google Books,
                    non-traduit :{" "}
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
                    non-traduit :{" "}
                    <a
                      href="https://cloud.iguane.org/s/qDCZWernWp7Zx5z"
                      className="underline"
                    >
                      https://cloud.iguane.org/s/qDCZWernWp7Zx5z
                    </a>
                  </li>
                  <li>
                    ICRC action during the Korean War - ICRC Archives & Library
                    | Cross-Files | ICRC Archives, audiovisual and library :{" "}
                    <a
                      href="https://blogs.icrc.org/cross-files/icrc-action-in-the-korean-war-br-1950-1953/"
                      className="underline"
                    >
                      https://blogs.icrc.org/cross-files/icrc-action-in-the-korean-war-br-1950-1953/
                    </a>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Credits;
