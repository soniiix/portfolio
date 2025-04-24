import { Header } from "../home/components/Header";
import { Title } from "../home/components/Title";
import { Footer } from "./Footer";
import { HashLink } from 'react-router-hash-link';

export function PrivacyPolicy () {
    return (
        <>
            <Header baseScrolled={true}/>
            <div className="flex justify-center border-b-1 border-[#363c44] bg-dark-blue">
                <div className="h-full w-full max-w-[1920px] px-8 py-20 text-white md:px-24 lg:px-40 ">
                    <h1 className="font-manrope font-extrabold text-[32px]">
                        Politique de confidentialité
                    </h1>
                    <div className="font-manrope flex flex-col items-start gap-5 mt-6">
                        <h2 className="text-xl font-bold">
                            1. Collecte des Informations
                        </h2>
                        <span>
                            Mon portfolio ne collecte pas directement de données personnelles. Cependant, si vous me contactez via <HashLink smooth to="/#contact" className="underline underline-offset-4 hover:text-blue active:text-blue transition-colors duration-200">le formulaire de contact</HashLink>, certaines informations (comme le nom et l'adresse email) peuvent être enregistrées pour répondre à votre demande.  
                        </span>
                        <h2 className="text-xl font-bold">
                            2. Utilisation des Informations  
                        </h2>
                        <span>
                            Les informations que vous fournissez sont utilisées uniquement pour répondre à votre message ou demande de contact.
                            <br/>
                            Je ne vends ni ne partage de données avec des tiers.
                        </span>
                        <h2 className="text-xl font-bold">
                            3. Vos droits
                        </h2>
                        <span>
                            Vous pouvez me contacter à tout moment pour demander la suppression ou la modification de vos données personnelles. 
                        </span>
                        <span className="mt-6">
                            Dernière mise à jour : 08/03/2025
                        </span>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}