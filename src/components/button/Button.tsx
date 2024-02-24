import {MouseEventHandler} from "react";

const Button = ({ text, onClick }: {text?:string, onClick?:MouseEventHandler}) => {
    return (
        <button
            type="button"
            className="test-button"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;