
import Link from 'next/link'

import { Container } from '@components/ui'
import GoogleMapReact from 'google-map-react';
import MarkerF from 'google-map-react';
import { useMemo } from 'react';
import MapView from '../MapView/MapView';
import { HomeIcon, MapIcon, PhoneIcon } from '@heroicons/react/24/outline';



// interface Props {
//   className?: string
//   children?: any
//   pages?: Page[]
// }

// const links = [
//   {
//     name: 'Home',
//     url: '/',
//   },
// ]

// const { sitePages } = usePages(pages)


const navigation = {
  hizmetlerimiz: [
    { name: 'Bireysel Hizmetlerimiz', href: '/hizmetlerimiz/bireysel-hizmetlerimiz' },
    { name: 'Bireysel Tasarim', href: '/hizmetlerimiz/bireysel-hizmetlerimiz/tasarim' },
    { name: 'Bireysel Uygulama', href: '/hizmetlerimiz/bireysel-hizmetlerimiz/uygulama' },
    { name: 'Kurumsal Hizmetlerimiz', href: '/hizmetlerimiz/kurumsal-hizmetlerimiz' },
    { name: 'Kurumsal Tasarım', href: '/hizmetlerimiz/kurumsal-hizmetlerimiz/tasarim' },
    { name: 'Kurumsal Uygulama', href: '/hizmetlerimiz/kurumsal-hizmetlerimiz/uygulama' },
    { name: 'Kurumsal Bakım', href: '/hizmetlerimiz/kurumsal-hizmetlerimiz/bakim' },

  ],
  hakkimizda: [
    { name: 'Kurumsal', href: '/kurumsal' },
    { name: 'Blog', href: '/blog' },
    { name: 'İletişim', href: '/iletisim' },
    { name: 'Referanslarımız', href: '/referanslar' },
    { name: 'KVKK Aydınlatma Metni', href: '/kvkk-aydinlatma-metni' },
  ],
  social: [

    {
      name: 'Instagram',
      href: 'https://www.instagram.com/kahyaoglupeyzaj',
      // eslint-disable-next-line 
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

  ],
}



const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Footer = () => {


  return (
    <footer>
      <div className=" bg-white mt-12 shadow-inner border-t ">

        <div className="mx-auto max-w-7xl overflow-hidden py-12 px-6 sm:px-6 lg:px-8">
          <nav className='flex flex-col gap-4 divide-y-2 sm:divide-y-0 sm:grid  sm:grid-cols-3'>
            <div>
              <h3 className="text-base font-semibold text-gray-400 tracking-wider ">
                Hizmetlerimiz
              </h3>
              {navigation.hizmetlerimiz.map((item) => (
                <div key={item.name} className=" py-2">
                  <Link href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-400 tracking-wider ">
                Hakkımızda
              </h3>
              {navigation.hakkimizda.map((item) => (
                <div key={item.name} className=" py-2">
                  <Link href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>

            <div className='flex flex-col gap-2'>
              <Link href="/iletisim">
                <h3 className="text-base font-semibold text-gray-400 tracking-wider ">
                  İletişim
                </h3>
              </Link>
              <Link href="/iletisim">
                <span className="text-base text-gray-500 hover:text-gray-900">
                  Sizi Arayalım
                </span>
              </Link>

              <Link href="tel:+905335044584" className='flex items-center '>
                <PhoneIcon className="h-6 w-6  flex-shrink-0 text-gray-400 mt-1" aria-hidden="true" />
                <p className="mt-1 pl-1  text-base text-gray-500 hover:text-gray-900">
                  +90 533 504 45 84
                </p>
              </Link>

              <Link className='flex items-center' href="https://www.google.com/search?q=kahyaoglu+peyzaj&rlz=1C1GCEU_trTR1014TR1014&oq=kahyaoglu+peyzaj&aqs=chrome.0.69i59j0i22i30j69i60l3.3989j0j4&sourceid=chrome&ie=UTF-8#">
                <MapIcon className="h-6 w-6 text-gray-400 mt-1 flex-shrink-0" aria-hidden="true" />
                <p className="mt-1 pl-1 text-base text-gray-500 hover:text-gray-900">
                  Gölköy mahallesi, Atatürk Cd. no:6/A, 48400 Bodrum
                </p>
              </Link>

              <div className='w-full aspect-video rounded-xl overflow-clip'>
                <MapView />


              </div>

            </div>
          </nav>

          {/* <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <Link href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                  {item.name}
                </Link>
              </div>
            ))}
          </nav> */}



          <div className="mt-8 flex justify-center space-x-6">
            {navigation.social.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-base text-gray-400">&copy; 2023 Kahyaoğlu. Bütün hakları saklıdır.</p>
        </div>




      </div>
    </footer>
  )
}



export default Footer


