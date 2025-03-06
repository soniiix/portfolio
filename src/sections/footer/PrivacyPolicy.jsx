import { Header } from "../home/components/Header";
import { Title } from "../home/components/Title";

export function PrivacyPolicy () {
    return (
        <>
            <Header />
            <div className="flex justify-center border-b-1 border-[#363c44] bg-dark-blue">
                <div className="h-screen w-full max-w-[1920px] px-8 py-20 text-white md:px-24 lg:px-40 ">
                    <Title title="Politique de confidentialité" size="4xl"/>
                </div>
            </div>
        </>
    )
}