import style from './TopLogo.module.scss'

export const TopLogo = () => {
  return(
    <div className={style.topLogo}>
      <div className={style.topLogo_image_wrapper}>
        <img src="/icon.png" alt="turningLogo" width={'300px'} height={'300px'} id={style.spiningLogoImg}/>
      </div>
      <h1>IKS</h1>
      <h2>移動の個別化推進団体</h2>
      <p>
        We are developing tools to assist Gears<br className={style.sp}/>against The Dasher organization&apos;s humanoid &apos;DENCO(H)&apos;.
      </p>
    </div>
  )
}

