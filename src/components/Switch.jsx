import { useTranslation } from 'react-i18next';

const LanguageSwitch = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
      };
    
      return (
        <div>
          <select onChange={changeLanguage} defaultValue={i18n.language}>
            <option value="en">English</option>
            <option value="ko">한국어</option>
            <option value="fr">Français</option>
          </select>
        </div>
      );

};

export default LanguageSwitch;