import { useTranslation } from "react-i18next";

export const Text = (font, size, color, label) => {
  return (
    <h1 className={`font-${font} text-[${size}] text-${color}`}>{label}</h1>
  );
};

export const Title = () => {
  const { t } = useTranslation("general");

  return (
    <div>
      <Text
        font="sans"
        size="95px"
        color="primary-2"
        label={t("title.part1")}
      />
      <Text
        font="sans"
        size="95px"
        color="primary-2"
        label={t("title.part2")}
      />
    </div>
  );
};
