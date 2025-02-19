import { useId } from "react";

export function FormInput({ label, name, textArea = false }) {
    const inputId = useId();

    const inputClassName = "bg-gray rounded-[16px] py-3 px-6 resize-none focus:outline-2 focus:outline-blue";

    return (
        <div className="flex flex-col space-y-3 font-manrope font-semibold">
            <label htmlFor={inputId}>Votre {label.toLowerCase()}</label>
            {textArea 
                ?
                    <textarea
                        id={inputId}
                        placeholder={label}
                        name={name}
                        className={inputClassName}
                        rows={4}
                    />
                :
                    <input
                        id={inputId}
                        type={label.toLowerCase() == "email" ? "email" : "text"}
                        placeholder={label}
                        name={name}
                        className={inputClassName}
                    />
            }
        </div>
    );
}