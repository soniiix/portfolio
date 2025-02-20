import { useState } from "react";
import { FormInput } from "./FormInput";
import { RiMailSendLine } from "react-icons/ri";

export function Form() {
    const [errors, setErrors] = useState({});
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

    const handleInputChange = (e) => {
        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            const inputName = e.target.name;

            if (inputName === "email") {
                if (!emailRegex.test(e.target.value)) {
                    newErrors.email = "Adresse email invalide.";
                    return newErrors;
                }
            }

            delete newErrors[inputName];
            return newErrors;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        setErrors({});

        let firstname = e.target.firstname.value.trim();
        let lastname = e.target.lastname.value.trim();
        let email = e.target.email.value.trim();
        let message = e.target.message.value.trim();

        if (firstname.length == 0) newErrors.firstname = "Le prénom est requis.";
        if (lastname.length == 0) newErrors.lastname = "Le nom est requis.";
        if (email.length == 0) {
            newErrors.email = "L'email est requis.";
        } else if (!emailRegex.test(email)) {
            newErrors.email = "Adresse email invalide.";
        }
        if (message.length == 0) newErrors.message = "Un message est requis.";

        if(Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        }

        //@TODO send email
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-7">
            <div className="grid grid-cols-1 gap-y-7 lg:grid-cols-2 lg:gap-x-6">
                <FormInput
                    label="Nom"
                    name="lastname"
                    autocompleteValue="family-name"
                    error={errors.lastname}
                    onInputChange={handleInputChange}
                />
                <FormInput
                    label="Prénom" 
                    name="firstname"
                    autocompleteValue="given-name" 
                    error={errors.firstname}
                    onInputChange={handleInputChange}
                />
            </div>
            <FormInput 
                label="Email" 
                name="email"
                autocompleteValue="email"
                error={errors.email}
                onInputChange={handleInputChange}
            />
            <FormInput
                label="Message"
                name="message"
                textArea={true}
                error={errors.message}
                onInputChange={handleInputChange}
            />
            <button type="submit" className="flex flex-row gap-2 items-center justify-center rounded-[20px] bg-blue px-[30px] py-[12px] text-center font-manrope font-bold hover:cursor-pointer hover:bg-btn-hover">
                <span>Envoyer</span>
                <RiMailSendLine style={{ marginTop: "1px" }}/>
            </button>
        </form>
    );
}