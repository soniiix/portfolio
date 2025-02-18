export function FormInput({ label, name, textArea = false }) {
    const inputClassName = "bg-gray rounded-[16px] py-3 px-6 resize-none focus:outline-2 focus:outline-blue";

    return (
        <div className="flex flex-col space-y-3 font-manrope font-semibold">
            <label>Votre {label.toLowerCase()}</label>
            {textArea 
                ? <textarea placeholder={label} name={name} className={inputClassName} rows={4}/>
                : <input placeholder={label} name={name} className={inputClassName}/>
            }
        </div>
    )
}