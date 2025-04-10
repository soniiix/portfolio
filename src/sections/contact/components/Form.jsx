import { useState } from "react";
import { FormInput } from "./FormInput";
import { RiMailSendLine } from "react-icons/ri";
import { sendMail } from "../sendMail";
import { CgSpinner } from "react-icons/cg";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export function Form() {
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false)
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({});
        let newErrors = {};

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
            setIsLoading(false);
            return;
        }

        // Send mail
        let formData = new FormData();
        formData.append("lastname", lastname);
        formData.append("firstname", firstname);
        formData.append("email", email);
        formData.append("message", message);

        try {
            await sendMail(formData);
            setIsSent(true);
        } catch (error) {
            newErrors.submitError = "Erreur lors de l'envoi du formulaire, veuillez réessayer.";
            setErrors(newErrors);
        } finally {
            setIsLoading(false);
        }
    };

    const handleReset = () => {
        setIsSent(false);
    }

    if (isSent) {
        return (
            <div className="min-h-[568px] lg:min-h-[456px] flex flex-col items-center justify-center gap-3 rounded-[16px] bg-gray lg:px-18 px-8 py-5 text-center font-manrope">
                <IoIosCheckmarkCircleOutline size={60} color="#05df72"/>
                <h2 className="text-xl font-bold text-green-400">Message envoyé !</h2>
                <span className="font-medium">
                    Merci pour votre message, je vous répondrai dans les plus brefs délais.
                </span>
                <button 
                    className="group mt-3 flex flex-row items-center justify-center rounded-[22px] border-2 px-3.5 py-1 font-semibold text-blue hover:cursor-pointer hover:border-blue hover:bg-blue hover:text-white transition-colors duration-200"
                    onClick={handleReset}
                >
                    Retour
                </button>
            </div>

        );
    }

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
            <button type="submit" className="flex min-h-[48px] flex-row items-center justify-center gap-2 rounded-full bg-blue px-[30px] py-[12px] text-center font-manrope font-bold hover:cursor-pointer hover:bg-btn-hover transition-colors duration-200">
                {isLoading
                    ? <div className="mt-0.5 animate-spin">
                        <CgSpinner size={20}/>
                    </div>
                    : <>
                        <span>Envoyer</span>
                        <RiMailSendLine style={{ marginTop: "1px" }}/>
                    </>
                }
            </button>
            {errors.submitError && <span className="font-manrope font-medium text-red-500">{errors.submitError}</span>}
        </form>
    );
}