import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { BiCheckDouble } from "react-icons/bi";

const ContactPage = () => {

    const [prenom, setPrenom] = useState('')
    const [nom, setNom] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const form = useRef<HTMLFormElement>(null)

    function setPrenomValue(e: React.ChangeEvent<HTMLInputElement>) {
        setPrenom(e.target.value)
    }

    function setNomValue(e: React.ChangeEvent<HTMLInputElement>) {
        setNom(e.target.value)
    }

    function setEmailValue(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
    }

    function setMessageValue(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setMessage(e.target.value)
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        const emailjsKey = process.env.NEXT_PUBLIC_EMAILJS_KEY || ''; // Provide a default value if undefined
        emailjs.init(emailjsKey);
        e.preventDefault();

        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE || '', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE || '', form.current ?? '', {
            publicKey: emailjsKey,
        })

        .then(() => {

            setPrenom('')
            setNom('')
            setEmail('')
            setMessage('')

            document.getElementById('send-message')?.classList.remove('hidden')
            document.getElementById('send-message')?.classList.add('flex')
            setTimeout(() => {
                document.getElementById('send-message')?.classList.add('hidden')
                document.getElementById('send-message')?.classList.remove('flex')
            }, 3000)

        }, (error) => {
            console.log(error);
        });
    }

    return (
        <div className='w-full my-10'>

            <div className='w-4/5 lg:w-3/5 flex justify-center items-center flex-col m-auto gap-5'>
                <h1 id="contact" className="text-3xl sm:text-4xl xl:text-6xl lg:text-5xl font-semibold ">Contact</h1>

                <form ref={form} onSubmit={handleSubmit} className='flex flex-col justify-center items-center w-full gap-3 lg:my-20' >

                    <div className='flex w-full flex-col md:flex-row gap-3'>
                        <div className='flex flex-col items-start justify-center w-full'>
                            <label htmlFor="prenom" className='text-sm'>Prénom :</label>
                            <input type="text" name="prenom" id="prenom" className='border-2 rounded-lg h-10 focus:border-gray-950 px-2 py-1 w-full' onChange={setPrenomValue} required/>
                        </div>

                        <div className='flex flex-col items-start justify-center w-full'>
                            <label htmlFor="nom" className='text-sm'>Nom :</label>
                            <input type="text" name="nom" id="nom" className='border-2 rounded-lg h-10 focus:border-gray-950 px-2 py-1 w-full' onChange={setNomValue} required/>
                        </div>
                    </div>

                    <div className='flex flex-col items-start justify-center w-full'>
                        <label htmlFor="mail" className='text-sm'>Mail :</label>
                        <input type="email" name="mail" id="mail" className='border-2 rounded-lg h-10 focus:border-gray-950 px-2 py-1 w-full' onChange={setEmailValue} required/>
                    </div>

                    <div className='flex flex-col items-start justify-center w-full'>
                        <label htmlFor="text" className='text-sm'>Message :</label>
                        <textarea name="text" id="text" rows={5} className='border-2 rounded-lg focus:border-gray-950 px-2 py-1 w-full' onChange={setMessageValue} required/>
                    </div>

                    <button type="submit" className='bg-gray-900 hover:bg-gray-800 duration-300 text-white rounded-lg px-4 py-2 w-full'>Envoyer</button>

                    <span id='send-message' className='hidden justify-center items-center text-semibold text-green-800'>Le Message a bien été envoyé <span className='m-2 font-lg'><BiCheckDouble /></span> </span>

                </form>

            </div>
            
        </div>
    )
}

export default ContactPage