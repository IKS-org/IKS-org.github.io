import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>IKS-org</title>
        <link rel="icon" href="icon.png" />
      </Head>
      <div className={style.main} id={style.logo}>
        <div className={style.image_wrapper}>
          <Image src="/icon.png" alt="turningLogo" width={'300px'} height={'300px'} id={style.spiningLogoImg}/>
        </div>
        <h1>IKS - 移動の個別化推進団体</h1>
        <p>
          We are developing tools to assist Gears against The Dasher organization&apos;s humanoid &apos;DENCO(H)&apos;.
        </p>
      </div>
    </>
  )
}

export default Home
