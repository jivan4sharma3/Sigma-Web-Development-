import React from 'react';

function Alert(props) {
    const capitalize = (word) => {
        if (word === "danger") {
            word = "Error"
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div className="h-[50px]">
            {props.alert && (
                <div
                    className="flex items-center justify-between px-4 py-2 rounded-md
                       bg-yellow-100 text-yellow-800 border border-yellow-300
                       shadow-sm transition-all duration-300"
                    role="alert"
                >
                    <span className="text-sm">
                        <strong className="font-semibold">
                            {capitalize(props.alert.type)}
                        </strong>
                        : {props.alert.msg}
                    </span>
                </div>
            )}
        </div>
    );
}

export default Alert;
