import Image from "next/image"
import Style from './../styles/contact.module.css'
import Link from 'next/link'


export default function Contact(){
    return(
        <>
        <div className={Style.layout}>
        <h1>Entre em contato com o Devenvolvedor</h1>
        <div className={Style.sublayout}>            
            <div className={Style.foto}>
            <Image src="/images/desenvolvedor.jpg" width="700" height="600"/>
            <div className={Style.contact}>          
                <h3>HypeSoftware Development&copy; - NandoDev</h3>
                <p className={Style.subtitle}>Contato</p>
          
                <p className={Style.subtitle}>E-mail:</p>
                <p><Link href="mailto:hypesoftwaredevelopment@nandodev.tech">hypesoftwaredevelopment@nandodev.tech</Link> </p>
                <p className={Style.subtitle}>Telefone:</p>
                <p> (12) 9 9628-6354</p>

                <p>Agende uma conversa pessoalmente ou via video Chamada</p>
                <p>WhatsApp: Clique aqui.</p>
                <p className={Style.subtitle}>Localização</p>
                <p>HypeSoftware Development&copy; fica situada no Bairro dos Freitas na cidade de São Jose dos Campos - SP</p>
                <p></p>
                <p></p>
                <p></p>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}