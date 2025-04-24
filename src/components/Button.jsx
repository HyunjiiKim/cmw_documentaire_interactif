import { cva } from "class-variance-authority";

import "./components.css";


const ButtonVariants = ("cursor-pointer", {
    variant: {
        intent: {
            default : [""]
        },
        size: {
            small: [],
            medium: [],
            large: []
        },
    }
})

const Button = ({ label, textColor, backgroundColor, onClick }) => {
    return (
        <button className={`${textColor} ${backgroundColor} cursor-pointer`} onClick={onClick}>{label}</button>
    );
};

export const InfoBtn = () => {
    return(
        <div>
            <i className="bi bi-exclamation-circle"></i>
        </div>
    )
}

export default Button;