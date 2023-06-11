import cn from 'clsx'
import s from './Layout.module.css'
import dynamic from 'next/dynamic'

import { Navbar, Footer } from '@components/common'
import { useAcceptCookies } from '@lib/hooks/useAcceptCookies'
import { Button, LoadingDots } from '@components/ui'

const Loading = () => (
  <div className="flex h-80 w-80 items-center justify-center p-3 text-center">
    <LoadingDots />
  </div>
)

const dynamicProps = {
  loading: Loading,
}

// const SignUpView = dynamic(() => import('@components/auth/SignUpView'), {
//   ...dynamicProps,
// })

// const ForgotPassword = dynamic(
//   () => import('@components/auth/ForgotPassword'),
//   {
//     ...dynamicProps,
//   }
// )

const FeatureBar = dynamic(() => import('@components/common/FeatureBar'), {
  ...dynamicProps,
})

// const Modal = dynamic(() => import('@components/ui/Modal'), {
//   ...dynamicProps,
//   ssr: false,
// })

interface Props {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies()


  return (
    <div className='bg-background-primary'>
      <Navbar />
      <main className="fit">{children}</main>
      <Footer />
      <FeatureBar
        title="Bu site deneyiminizi geliştirmek için çerezleri kullanır. Tıklayarak, Gizlilik Politikamıza kabul etmiş olursunuz."
        hide={acceptedCookies}
        action={
          <Button className="mx-5" onClick={() => onAcceptCookies()}>
            Çerezleri kabul et
          </Button>
        }
      />
    </div>
  )
}

export default Layout
