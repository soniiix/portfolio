import { FormInput } from "./FormInput";

export function Form() {
    return (
        <form className="flex flex-col gap-7">
            <div className="grid grid-cols-1 gap-y-7 lg:grid-cols-2 lg:gap-x-6">
                <FormInput label="Nom" name="lastname" autocompleteValue="family-name"/>
                <FormInput label="Prénom" name="firstname" autocompleteValue="given-name"/>
            </div>
            <FormInput label="Email" name="email" autocompleteValue="email"/>
            <FormInput label="Message" name="message" textArea={true}/>
        </form>
    )
}