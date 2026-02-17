import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import dogImg from '../../../public/hero-dog.webp'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="bg-[#e84c3d] text-white relative overflow-hidden">

        <div>
            <Image
                src={dogImg}
                alt="Foto do doguinho"
                fill
                sizes="100vw"
                priority
                className="object-cover opacity-60 lg:hidden"
            />
            <div className="absolute inset-0 bg-black opacity-50 md:hidden"></div>
        </div>

        <div className="container mx-auto pt-16 pb-16 px-4 md:pb-0 relative">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
                        Seu pet merece cuidado, carinho e atenção especial.
                    </h1>
                    <p className="lg:text-lg">
                        Oferecemos os melhores serviços para garantir o bem-estar e a
                        felicidade do seu amigo de quatro patas.
                    </p>

                    <a
                        href="#"
                        className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center w-fit gap-2 hover:scale-105 duration-200"
                    >
                        <WhatsappLogoIcon className="w-7 h-7 pr-2" />
                        Contato via WhatsApp
                    </a>

                    <div className="mt-8">
                        <p className="text-sm mb-4">
                            <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>{" "}
                            de desconto
                        </p>
                    </div>
                </div>

                <div className="hidden md:block h-full relative">
                    <Image
                        src={dogImg}
                        alt="Foto do doguinho"
                        className="object-contain"
                        fill
                        sizes="(max-width: 768px) 0vw, 50vw"
                        quality={100}
                        priority
                    />
                </div>

            </article>
        </div>
    </section>
  );
}
