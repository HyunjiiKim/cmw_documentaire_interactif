import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";

export const Credits = () => {
  const { t } = useTranslation("general");
  const { t: t2 } = useTranslation("contents");

  const [showCredits, setShowCredits] = useState("intro");

  function openShowIntro() {
    setShowCredits("intro");
  }
  function openShowCh1() {
    setShowCredits("ch1");
  }
  function openShowCh2() {
    setShowCredits("ch2");
  }
  function openShowCh3() {
    setShowCredits("ch3");
  }

  return (
    <>
      <h2 className="text-white uppercase text-[50px]">
        {t2("conclu.credit.title")}
      </h2>
      <div id="navCredits" className="flex pr-20 justify-between gap-7">
        <Button
          label={t2("intro.title")}
          onClick={openShowIntro}
          size="large"
          custom="mt-5 w-full"
          intent={showCredits === "intro" ? "tertiary" : "primary"}
        />
        <Button
          label={t2("ch1.title")}
          onClick={openShowCh1}
          size="large"
          custom="mt-5 w-full"
          intent={showCredits === "ch1" ? "tertiary" : "primary"}
        />
        <Button
          label={t2("ch2.title")}
          onClick={openShowCh2}
          size="large"
          custom="mt-5 w-full"
          intent={showCredits === "ch2" ? "tertiary" : "primary"}
        />
        <Button
          label={t2("ch3.title")}
          onClick={openShowCh3}
          size="large"
          custom="mt-5 w-full"
          intent={showCredits === "ch3" ? "tertiary" : "primary"}
        />
      </div>
      <div
        id="contentCredits"
        className="flex flex-col mt-10 mr-20 p-10 border-1 border-white max-w-[600px]"
      >
        <img
          src="../assets/icons/close.svg"
          className="self-end w-7 pb-3 justify-end"
        />
        <div className="w-[85%] flex flex-col gap-10 font-body text-lg">
          {showCredits === "intro" && (
            <ul>
              <li>
                Monica KIM, « The Interrogation Rooms of the Korean War – The
                Untold History » (Ed. Princeton University Press, 2018),
                non-traduit :{" "}
                <a
                  href="https://cloud.iguane.org/s/qDCZWernWp7Zx5z"
                  className="underline"
                >
                  https://cloud.iguane.org/s/qDCZWernWp7Zx5z
                </a>
              </li>
            </ul>
          )}
          {showCredits === "ch1" && (
            <ul>
              <li>
                Wikipedia contributors, « Geoje POW camp » (Wikipedia, The Free
                Encyclopedia, 2025), non-traduit :{" "}
                <a
                  href="https://en.wikipedia.org/w/index.php?title=Geoje_POW_camp&oldid=1285525340"
                  className="underline"
                >
                  https://en.wikipedia.org/w/index.php?title=Geoje_POW_camp&oldid=1285525340
                </a>
              </li>
            </ul>
          )}
          {showCredits === "ch2" && (
            <ul className="text-wrap ">
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
          )}
          {showCredits === "ch3" && (
            <ul className="flex flex-col gap-3 text-wrap">
              <li>
                Monica KIM, « The Interrogation Rooms of the Korean War – The
                Untold History » (Ed. Princeton University Press, 2018),
                non-traduit :{" "}
                <a
                  href="https://cloud.iguane.org/s/qDCZWernWp7Zx5z"
                  className="underline"
                >
                  https://cloud.iguane.org/s/qDCZWernWp7Zx5z
                </a>
              </li>
              <li>
                ICRC action during the Korean War - ICRC Archives & Library |
                Cross-Files | ICRC Archives, audiovisual and library :{" "}
                <a
                  href="https://blogs.icrc.org/cross-files/icrc-action-in-the-korean-war-br-1950-1953/"
                  className="underline"
                >
                  https://blogs.icrc.org/cross-files/icrc-action-in-the-korean-war-br-1950-1953/
                </a>
              </li>
            </ul>
          )}
          <i>
            {t2("conclu.credit.legend")}
          </i>
        </div>
      </div>
    </>
  );
};

export default Credits;
