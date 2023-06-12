/* eslint-disable @typescript-eslint/no-misused-promises */
import { Layout, SEO } from '~/components/common'
import GardenImage from "@public/garden-contact.jpg"
import Image from 'next/image'
import { Button } from '~/components/ui'
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { api } from '~/utils/api';

type Inputs = {
    message: string
    name: string
    surname: string
    email: string
    phone: string
    affiliate: string
    typeOfCustomer: "kurumsal" | "bireysel"
};



export default function Iletisim() {
    const { mutate: createContact, isError, isSuccess, isLoading } = api.posts.addContact.useMutation();
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => { createContact(data) }


    return (
        <div className="bg-background-primary">
            <SEO title="İletişim" description={`Hemen Kahyaoğlu Peyzaj'a ulaşın`} />
            <div className="relative bg-background-primary">
                <div className="lg:absolute lg:inset-0">
                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 relative" >
                        <Image
                            className=" h-80 w-full object-cover lg:absolute lg:h-full"
                            src={GardenImage.src}
                            alt="iletişim sayfası resmi"
                            fill
                        />


                    </div>
                </div>

                <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
                    <div className="lg:pr-8">
                        <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Yaşam Alanlarınızı Birlikte Güzelleştirelim</h2>
                            <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                                Kahyaoğlu Peyzaj olarak yaşam alanlarınızı güzelleştirmek için var gücümüzle çalışıyoruz. Aşağıda bulunan formu doldurarak bizimle iletişime geçebilirsiniz. Peyzaj uzmanımız sizi en kısa süre içerisinde arayacak.
                            </p>
                            {isError &&
                                <span>İletişim formu gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.</span>
                            }
                            {isSuccess &&
                                <span>İletişim formu başarıyla gönderildi. En kısa süre içerisinde sizinle iletişime geçeceğiz.</span>
                            }
                            {/* // eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                            <form onSubmit={handleSubmit(onSubmit)} className="mt-9 grid grid-cols-1 gap-y-6 md:grid-cols-2 sm:gap-x-8">
                                <div className='col-span-2 sm:col-span-1'>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Adınız
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            {...register("name", { required: "Ad zorunludur" })}
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete="given-name"
                                            className="block w-full  p-2 h-10 rounded-md border-[#d6d6d6] border shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                                        />
                                    </div>
                                    {errors.name && <span className='text-sm text-rose-500'>{errors.name.message}</span>}
                                </div>
                                <div className='col-span-2 sm:col-span-1'>
                                    <label htmlFor="surname" className="block text-sm font-medium text-gray-700">
                                        Soy Adınız
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            {...register("surname", { required: "Soy ad zorunludur" })}
                                            type="text"
                                            name="surname"
                                            id="surname"
                                            autoComplete="family-name"
                                            className="block w-full  p-2 h-10 rounded-md border-[#d6d6d6] border shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                                        />
                                    </div>
                                    {errors.surname && <span className='text-sm text-rose-500'>{errors.surname.message}</span>}
                                </div>
                                <div className='col-span-2 sm:col-span-2'>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Eposta Adresiniz
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            {...register("email", { required: "Lütfen gerçerli bir eposta adresi girin" })}
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full  p-2 h-10 rounded-md border-[#d6d6d6] border shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                                        />
                                    </div>
                                    {errors.email && <span className='text-sm text-rose-500'>{errors.email.message}</span>}
                                </div>
                                <div className='col-span-2 sm:col-span-2'>
                                    <div className="flex justify-between">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                            Telefon Numaranız
                                        </label>

                                    </div>
                                    <div className="mt-1">
                                        <input
                                            {...register("phone", { required: "Lütfen gerçerli bir telefon numarası girin" })}
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            autoComplete="tel"
                                            aria-describedby="phone-description"
                                            className="block w-full  p-2 h-10 rounded-md border-[#d6d6d6] border shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                                        />
                                    </div>
                                    {errors.phone && <span className='text-sm text-rose-500'>{errors.phone.message}</span>}

                                </div>
                                <div className='col-span-2 sm:col-span-2'>
                                    <div className="flex justify-between">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                            Size nasıl yardımcı olabiliriz?
                                        </label>

                                    </div>
                                    <div className="mt-1">
                                        <textarea
                                            {...register("message")}
                                            id="message"
                                            name="message"
                                            aria-describedby="message-description"
                                            // rows={4}
                                            className="block w-full  p-2 h-20 rounded-md border-[#d6d6d6] border shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                                        // defaultValue={''}
                                        />
                                    </div>
                                </div>

                                <div className='col-span-2 sm:col-span-2'>
                                    <label htmlFor="affiliate" className="block text-sm font-medium text-gray-700">
                                        Bizi nereden duydunuz?
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            {...register("affiliate")}
                                            type="text"
                                            name="affiliate"
                                            id="affiliate"
                                            className="block w-full  p-2 h-10 rounded-md border-[#d6d6d6] border shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="affiliate" className="block text-sm font-medium text-gray-700">
                                        Hangi ürünlerle ilgilisiniz?
                                    </label>
                                    <div className="mt-1 flex flex-col items-start w-full">
                                        <div>


                                            <input
                                                type="radio"
                                                id="kurumsal"
                                                defaultChecked={true}
                                                value="kurumsal"
                                                {...register('typeOfCustomer')}
                                                className=' text-gray-700 '
                                            />
                                            <label className="ml-2 text-gray-700 h-4 w-4 focus:border-grape-500 focus:ring-grape-500" htmlFor="kurumsal">Kurumsal</label>

                                        </div>
                                        <div>

                                            <input
                                                type="radio"
                                                id="bireysel"

                                                value="bireysel"
                                                {...register('typeOfCustomer')}
                                            />
                                            <label className="ml-2 text-gray-700" htmlFor="bireysel">Bireysel</label>
                                        </div>
                                    </div>
                                </div>



                                <Button
                                    className={`  w-full rounded-lg col-span-2`}
                                    type="submit"
                                    // disabled={isSuccess}
                                    loading={isLoading}
                                    success={isSuccess}
                                >
                                    {!isLoading && !isSuccess && <span className='w-full'> Gönder</span>}
                                    {isLoading && <span className='w-full'> Gönderiliyor...</span>}
                                    {isSuccess && <span className='w-full'> İşlem başarılı</span>}
                                </Button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}


Iletisim.Layout = Layout