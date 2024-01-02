'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormSchema, ContactForm } from '@/models/contact'
import { sendContactMessage } from '@/app/_actions/sendContactMessage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify'

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<ContactForm>({ resolver: zodResolver(ContactFormSchema) })

    const submitData = async (data: ContactForm) => {
        const result = await sendContactMessage(data)
        if (result.errorMsg) {
            toast.error(result.errorMsg, {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'colored'
            })
            return
        }
        toast.success(result.successMsg, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'colored'
        })
        reset()
    }

    return (
        <section className="common-bg" id="kapcsolat">
            <div className="m-auto max-w-7xl">
                <h2>Kapcsolat</h2>
                <p className="m-auto mb-16 text-center">Keress a lenti űrlap kitöltésével, és mielőbb válaszolok neked!</p>
                <form onSubmit={handleSubmit(submitData)} className="mx-auto max-w-3xl rounded bg-white p-4 py-8 shadow-lg md:p-8">
                    <div className="mb-8">
                        <label htmlFor="name">Név</label>
                        <input {...register('name')} type="text" id="name" placeholder="Add meg a neved" />
                        {errors.name && <small className="font-bold text-danger">{errors.name.message}</small>}
                    </div>
                    <div className="mb-8">
                        <label htmlFor="email">E-mail</label>
                        <input {...register('email')} type="text" id="email" placeholder="Add meg az e-mail címed" />
                        {errors.email && <small className="font-bold text-danger">{errors.email.message}</small>}
                    </div>
                    <div className="mb-8">
                        <label htmlFor="message">Üzenet</label>
                        <textarea {...register('message')} rows={8} id="message" placeholder="Irj üzenetet..." />
                        {errors.message && <small className="font-bold text-danger">{errors.message.message}</small>}
                    </div>
                    <button type="submit" className="btn relative mx-auto block" disabled={isSubmitting}>
                        {isSubmitting && (
                            <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                                <FontAwesomeIcon className="fa-spin" size="xl" icon={faCircleNotch} />
                            </div>
                        )}
                        <span className={`${isSubmitting && 'invisible'}`}>Küldés</span>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
