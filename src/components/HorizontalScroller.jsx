import { useRef } from "react";
import { ImageContainer } from "./Container";

const HorizontalScroller = () => {

    const index = useRef(0)
    
    // mock data
    imgdata = [
        {
            src: "https://picsum.photos/500/800",
            alt: "first image"
        },
        {
            src: "https://picsum.photos/600/400",
            alt: "second image"
        }, 
        {
            src: "https://picsum.photos/200/400",
            alt: "third image"
        }
    ];

    return(
        <div>
            {imgdata.map((item)=>{
                <ImageContainer src={item.src} alt={item.alt} />
            })}
        </div>
    )
}