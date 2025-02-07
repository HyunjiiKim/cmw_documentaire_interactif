import "./components.css";

const Button = ({ children, onClick }) => {
    return (
        <button className="btn_M" onClick={onClick}>{children}</button>
    );
};

export default Button;