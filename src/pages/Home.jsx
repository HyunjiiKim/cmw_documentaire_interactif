import { useTranslation } from 'react-i18next';

import HorizontalScroller from '../components/HorizontalScroller';
import Button from '../components/Button';
import LanguageSwitch from '../components/Switch';

import './style.css';

const Home = () => {

    const { t } = useTranslation();
        // mock data
        const imgdata = [
            {
                id: 0,
                src: "https://picsum.photos/500/800",
                alt: "first image"
            },
            {
                id: 1,
                src: "https://picsum.photos/600/400",
                alt: "second image"
            }, 
            {
                id: 2,
                src: "https://picsum.photos/200/400",
                alt: "third image"
            }
        ];

    return (
        <div id='home'>
            <HorizontalScroller data={imgdata} />
        </div>
    );
};

export default Home;