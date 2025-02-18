import { FormInput } from "./FormInput";

export function Form() {
    return (
        <form className="flex flex-col gap-7">
            <div className="grid grid-cols-1 gap-y-7 lg:grid-cols-2 lg:gap-x-6">
                <FormInput label="Nom" name="lastname"/>
                <FormInput label="Prénom" name="firstname"/>
            </div>
            <FormInput label="Email" name="email"/>
            <FormInput label="Message" name="message" textArea={true}/>
        </form>
    )
}