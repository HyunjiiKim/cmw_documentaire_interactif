import "./components.css";

const Button = ({ children, onClick }) => {
    return (
        <button className="btn_M" onClick={onClick}>{children}</button>
    );
};

export const InfoBtn = () => {
    return(
        <>
            <i className="bi bi-exclamation-circle"></i>
        </>
    )
}

export default Button;