'use client'

import React, { useState } from 'react'
import { ZodType, z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

type FormData = {
    name: string
    email: string
    message: string
}

const customErrorMessages = {
    required: 'A mező kitöltése kötelező!',
    nameMinLength: 'A megadott név túl rövid!',
    emailInvalid: 'Hibás e-mail cím formátum!'
}

const schema: ZodType<FormData> = z.object({
    name: z.string().trim().min(1, { message: customErrorMessages.required }).min(3, { message: 'A megadott név túl rövid! A névnek legalább 3 karakterből kell állnia.' }),
    email: z.string().trim().min(1, { message: customErrorMessages.required }).email({ message: 'Hibás e-mail cím formátum!' }),
    message: z.string().trim().min(1, { message: customErrorMessages.required })
})

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({ resolver: zodResolver(schema) })

    const submitData = (data: FormData) => {
        console.log(data)
    }

    return (
        <section className="common-bg">
            <div className="m-auto max-w-7xl">
                <h2>Kapcsolat</h2>
                <p className="m-auto mb-16 text-center">Keress a lenti űrlap kitöltésével, és mielőbb válaszolok neked!</p>
                <form onSubmit={handleSubmit(submitData)} className="mx-auto max-w-3xl rounded bg-white p-8 shadow-lg">
                    <div className="mb-8">
                        <label htmlFor="name">Név</label>
                        <input {...register('name')} type="text" id="name" placeholder="Add meg a neved" />
                        {errors.name && <small className="text-danger font-bold">{errors.name.message}</small>}
                    </div>
                    <div className="mb-8">
                        <label htmlFor="email">E-mail</label>
                        <input {...register('email')} type="text" id="email" placeholder="Add meg az e-mail címed" />
                        {errors.email && <small className="text-danger font-bold">{errors.email.message}</small>}
                    </div>
                    <div className="mb-8">
                        <label htmlFor="message">Üzenet</label>
                        <textarea {...register('message')} rows={8} id="message" placeholder="Irj üzenetet..." />
                        {errors.message && <small className="text-danger font-bold">{errors.message.message}</small>}
                    </div>
                    <button type="submit" className="mx-auto block">
                        Küldés
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
