import { motion } from "framer-motion";
import { Title } from "../home/components/Title";
import { Form } from "./components/Form";

export function Contact() {
    return (
        <section id="contact" className="scroll-mt-20 flex justify-center border-b-1 border-[#363c44] bg-dark-blue">
            <div className="h-full w-full max-w-[1920px] px-8 py-20 text-white md:px-24 lg:px-40">
                <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-12 md:gap-y-9">
                    <div className="flex flex-col gap-8 max-w-[500px]">
                        <motion.div
                            viewport={{ once: true }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <Title size="4xl" title="Me contacter" />
                        </motion.div>
                        <motion.span 
                            className="font-manrope font-medium"
                            viewport={{ once: true }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            Mon profil vous a-t-il intéressé ?
                            <br/>
                            Avez-vous une question, un commentaire à partager ?
                            <br/><br/>
                            N'hésitez pas à m'envoyer un message via le formulaire ci-contre, je serai ravi de le lire et d'y répondre dans les plus brefs délais.
                        </motion.span>
                    </div>
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <Form/>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}