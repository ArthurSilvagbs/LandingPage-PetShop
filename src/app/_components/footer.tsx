import golden from "../../../public/golden.png"
import royal from "../../../public/royal.png"
import primier from "../../../public/primier.png"
import natural from "../../../public/natural.png"
import whiskas from "../../../public/whiskas.png"
import Image from "next/image"
import { WhatsappLogoIcon, FacebookLogoIcon, InstagramLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { Mail, Phone, MapPinIcon } from 'lucide-react'

const brands = [
    { name: "Royal Canin", logo: royal },
    { name: "Golden", logo: golden },
    { name: "Primier", logo: primier },
    { name: "Formula Natural", logo: natural },
    { name: "Whiskas", logo: whiskas },
    { name: "Golden", logo: golden }
]

export function Footer() {
    return (
        <section className="bg-[#E84c3d] py-16 text-white">
            <div className="container mx-auto px-4">
                
                <div className="border-b border-white/20 pb-8">
                    <h4 className="text-3xl font-semibold mb-8 text-center">Nossos parceiros</h4>

                    <div  className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                        {brands.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-center">
                                <Image 
                                    src={item.logo}
                                    alt="Logo da Marca"
                                    width={100}
                                    height={50}
                                    quality={100}
                                    style={{  
                                        width: "auto",
                                        height: "auto"
                                    }}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Pet Shop Dev</h3>
                        <p className="mb-4">
                            Cuidando do seu melhor amigo com amor e dedicação.
                        </p>
                        <a 
                            href="#"
                            className="bg-green-500 px-4 py-2 rounded-md flex items-center justify-center w-fit gap-2 hover:scale-105 duration-200"
                        >
                            <WhatsappLogoIcon className="h-5 w-5 "/>
                            Contato via WhatsApp
                        </a>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-3">Contatos</h3>
                        <p className="flex items-center justify-right gap-3 mb-1">
                            <Mail className='w-5 h-5'/>
                            Email: teste@teste.com.br
                        </p>
                        <p className="flex items-center justify-right gap-3 mb-1">
                            <Phone className='w-5 h-5'/>
                            Telefone: (XX) 9 1234-5678
                        </p>
                        <p className="flex items-center justify-right gap-3 mb-1">
                            <MapPinIcon className='w-5 h-5'/>
                            Rua X, Centro, Brasília | DF
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Redes Sociais</h3>

                        <div className="flex gap-4 items-center">
                            <a 
                                href="#"
                                target="blank"
                            >
                                <FacebookLogoIcon className="h-8 w-8 "/>
                            </a>

                            <a 
                                href="#"
                                target="blank"
                            >
                                <InstagramLogoIcon className="h-8 w-8 "/>
                            </a>

                            <a 
                                href="#"
                                target="blank"
                            >
                                <YoutubeLogoIcon className="h-8 w-8"/>
                            </a>
                        </div>

                    </div>

                </footer>

            </div>
        </section>
    )
}