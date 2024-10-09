import {CircleArrowRight, Cross, LucideIcon, Stethoscope, User} from "lucide-react";
import {cs} from "../utils/utils";
import {useRef} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PROFILES: { name: string, icon: LucideIcon, color: string, options: string[] }[] = [
    {
        name: 'Pharmacien',
        icon: Cross,
        color: 'bg-pharmacist',
        options: [
            'Gérer mes stocks',
            'Avoir une liste des commandes de la journée / semaine'
        ]
    },
    {
        name: 'Médecin',
        icon: Stethoscope,
        color: 'bg-doctor',
        options: [
            "Pouvoir créer une commande pour un patient auprès d’une pharmacie",
            "Vérifier si une pharmacie possède les médicaments demandés / Trouver la pharmacie la plus proche qui a les médicaments voulus"
        ]
    },
    {
        name: 'Patient',
        icon: User,
        color: 'bg-patient',
        options: [
            "Visualiser mes commandes passées et à venir",
            "Retirer une commande"
        ]
    },
]

export default function Home() {
    const listRefs = useRef<(HTMLLIElement | null)[]>([])

    const storeRef = (el: any, index: number) => {
        if (el && !listRefs.current[index]) {
            listRefs.current[index] = el
        }
    }

    const scrollToItem = (index: number) => {
        const item = listRefs.current[index]
        if (item) {
            item.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className='w-full h-full flex flex-col gap-4 md:gap-8'>
                <div className='h-screen flex flex-col gap-4 md:gap-8'>
                    <Header/>
                    <div className='w-full h-[50vh] md:h-[70vh] overflow-hidden rounded-3xl shadow-sm bg-cover'
                         style={{backgroundImage: "url('/pharmacie.jpg')"}}>
                        <div
                            className='p-4 w-full h-full flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm'>
                            <img src='/logo.png' width={256} height={256} alt='logo' className='w-1/2 md:w-1/3'/>
                            <h1 className='text-center leading-10 font-extrabold text-3xl md:text-4xl text-white'>Mes <span
                                className='underline underline-offset-4'>médicaments</span>, <br
                                className='md:hidden'/> plus <span
                                className='text-pharmacist'>simplement</span></h1>
                        </div>
                    </div>
                    <div className='w-full flex flex-col md:flex-row gap-x-4 gap-y-3'>
                        {
                            PROFILES.map(({name, icon: Icon, color}, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToItem(index)}
                                    className={cs('pl-8 pr-4  w-full h-20 md:w-1/3 rounded-full flex items-center justify-between text-white group', color)}>
                                    <Icon className='size-8'/>
                                    <p className='tracking-wide uppercase font-bold text-lg md:text-sm xl:text-lg'>Je
                                        suis {name}</p>
                                    <CircleArrowRight
                                        className='size-8 group-hover:rotate-90 max-md:rotate-90 duration-300'/>
                                </button>
                            ))
                        }
                    </div>
                </div>
                <article className='w-full flex flex-col gap-8 text-white'>
                    {
                        PROFILES.map(({name, icon: Icon, color, options}, index) => {
                            return (
                                <section
                                    key={index}
                                    ref={el => storeRef(el, index)}
                                    className={cs('w-full min-h-[50vh] relative overflow-hidden flex flex-col items-center gap-y-4 rounded-3xl shadow-sm', color)}>
                                    <Icon className='size-[80%] absolute top-1/2 -translate-y-1/2 text-white/10'/>
                                    <div className='px-8 py-8 w-full h-full absolute left-0 top-0 backdrop-blur-sm'>
                                        <div className='px-4 w-full'>
                                            <div className='flex flex-col items-center justify-center md:gap-y-1'>
                                                <small className='uppercase font-bold text-lg md:text-2xl'>Je
                                                    suis</small>
                                                <span
                                                    className='uppercase font-extrabold text-2xl md:text-4xl'>{name}</span>
                                            </div>
                                            <ul className='mt-8 space-y-4 font-medium text-lg md:text-2xl marker:text-black'>
                                                {
                                                    options.map((o) => <li>→ {o}</li>)
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                            )
                        })
                    }
                </article>
            </div>
    )
}
