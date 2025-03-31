import { useId } from "react";

/**
 * @param {Object} props
 * @param {string} props.label The text that will be used for placeholder & label.
 * @param {string} props.name The value to use for the name input attribute.
 * @param {string} [props.autocompleteValue] The optional value to use for the autocomplete input attribute.
 * @param {boolean} [props.textArea] Specifies whether the input will be a text area or not. False by default.
 * @param {string} props.error A possible generated error to display.
 * @param {function} props.onInputChange An input change handler.
 * @returns {JSX.Element}
 */
export function FormInput({ label, name, autocompleteValue = "on", textArea = false, error, onInputChange }) {
    const inputId = useId();

    const inputClassName = "bg-gray rounded-[16px] py-3 px-6 resize-none focus:outline-2 focus:outline-blue autofill:transition-colors autofill:duration-[5000000ms] " + (error && "outline-2 outline-red-500");

    return (
        <div className="flex flex-col space-y-3 font-manrope font-medium">
            <label htmlFor={inputId}>Votre {label.toLowerCase()}</label>
            {textArea 
                ?
                    <textarea
                        id={inputId}
                        placeholder={label}
                        name={name}
                        className={inputClassName}
                        rows={4}
                        onChange={onInputChange}
                    />
                :
                    <input
                        id={inputId}
                        type="text"
                        placeholder={label}
                        name={name}
                        className={inputClassName}
                        autoComplete={autocompleteValue}
                        onChange={onInputChange}
                    />
            }
            {error && <span className="text-red-500">{error}</span>}
        </div>
    );
}