import { FormInput } from "./FormInput";
import { RiMailSendLine } from "react-icons/ri";

export function Form() {
    return (
        <form className="flex flex-col gap-7">
            <div className="grid grid-cols-1 gap-y-7 lg:grid-cols-2 lg:gap-x-6">
                <FormInput label="Nom" name="lastname" autocompleteValue="family-name"/>
                <FormInput label="Prénom" name="firstname" autocompleteValue="given-name"/>
            </div>
            <FormInput label="Email" name="email" autocompleteValue="email"/>
            <FormInput label="Message" name="message" textArea={true}/>

            <button type="submit" className=" flex flex-row gap-2 items-center justify-center rounded-[20px] bg-blue px-[30px] py-[12px] text-center font-bold hover:cursor-pointer hover:bg-btn-hover font-manrope">
                <span>Envoyer</span>
                <RiMailSendLine style={{marginTop: "1px"}}/>
            </button>
        </form>
    )
}