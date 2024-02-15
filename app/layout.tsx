import './globals.css'
import Head from 'next/head'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Footer from '@/components/organisms/Footer'
import Navbar from '@/components/organisms/Navbar'
import { GlobalStyle } from '@/components/themes/GlobalStyles'
import Providers from './providers'

export const metadata: Metadata = {
  title: 'Edurep Incentive',
  description: 'Generated by create next app',
}

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Edurep Incentive</title>
        <meta name="description" content="{metadata.description}" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
        <meta property="og:title" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="Edurep Incentive" />
        {/* <meta property="og:description" content="We provide strategy to achieve better online presence, reach more customer, better conversion, and greater return on your investment. Transparency, ethics and results always comes first." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@stucel" />
        <meta name="twitter:title" content="Digital marketing agency, that fits you" />
        <meta name="twitter:url" content="https://www.stucel.com/" />
        <meta name="twitter:description" content="We provide strategy to achieve better online presence, reach more customer, better conversion, and greater return on your investment. Transparency, ethics and results always comes first." />
        <meta name="twitter:image" content="https://www.stucel.com/images/fb-image.jpg" />
       <link rel="apple-touch-icon" sizes="180x180" href="https://www.stucel.com/images/apple-icon-180x180.png" /> */}
        <meta name="robots" content="index,follow,noodp" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="geo.region" content="ID-JK" />
        <meta name="geo.placename" content="Jakarta, Indonesia" />
        <meta name="geo.position" content="-6.165670;106.905971" />
        <meta name="ICBM" content="-6.165670, 106.905971" />
        <link rel="copyright" href="https://www.stucel.com/privacy-policy.html" />
        <link type="text/plain" rel="author" href="https://www.linkedin.com/company/stucel/" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <body className={poppins.className}>
        <div id="root"></div>
        <Navbar />
        <Providers>
          {children}
        </Providers>
        <Footer />,
      </body>
    </html>
  )
} 