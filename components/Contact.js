import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
// import { useForm, SubmitHandler } from "react-hook-form";

// type Inputs = {
//     name: string,
//     email: string,
//     subject: string,
//     message: string,
//   };
//   const { register, handleSubmit,} = useForm<Inputs>();
//   const onSubmit: SubmitHandler<Inputs> = formdata => console.log(formdata);
{/* <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'></form> */}
{/* <input {...register('name')} className='contactInput' placeholder='name' type="text"/>
                <input {...register('email')} className='contactInput' placeholder='email' type="email"/>
                </div>
                <input {...register('subject')} className='contactInput' placeholder='subject' type="text"/>
                <textarea {...register('message')} className='contactInput' placeholder='message'/>
                <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button> */}
const Contact = () => {
    
  return (
    <div className='h-screen flex relative flex-col  text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                i have got just what you need.{""}
                <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk</span>
            </h4>
            <div className='space-y-10'>
                 <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>+923269986315</p>
                 </div>
                 <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>info.brandjaws@gmail.com</p>
                 </div>
                 <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>123 Developer Lane</p>
                 </div>
            </div>
            <form className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                <input className='contactInput' placeholder='name' type="text"/>
                <input className='contactInput' placeholder='email' type="email"/>
                </div>
                <input className='contactInput' placeholder='subject' type="text"/>
                <textarea className='contactInput' placeholder='message'/>
                <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact

