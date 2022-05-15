// import Image from "next/image"
import { TitleUnderline } from '../public/icons'
import styles from '../styles/AboutUs.module.scss'
// import aboutUs from "../public/AboutUs-min.jpg"
import Image from 'next/image'

function imageLoader({ src, width, height }) {
  // const relativeSrc = (src) => src.split("/").pop()

  return `https://delux-limo.s3.us-east-2.amazonaws.com/${src}`
}

const AboutUs = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.wrapper}>
        <div className={styles.titleContainer}>
          <span>ABOUT US</span>
          <TitleUnderline
            color={'white'}
            width={'160px'}
            height={'22px'}
            firstViewBox={'40'}
            thirdViewBox={'165'}
          />
        </div>
        <figure className={styles.contentContainer}>
          <div className={styles.imgContainer}>
            {/* <img
              src='https://delux-limo.s3.us-east-2.amazonaws.com/AboutUs-min.webp'
              alt='aboutUs'
              style={{ width: '100%', height: '100%' }}
            /> */}
            <Image
              loader={imageLoader}
              src='AboutUs-min.webp'
              alt='aboutUs'
              // style={{ width: "100%", height: "100%" }}
              width={'550%'}
              height={'413%'}
              // layout='fill'
            />
          </div>
          <figcaption className={styles.textContainer}>
            <p>
              We have been delivering premium transportation services. We pledge
              to keep our promise to provide a reliable, safe, and professional
              service. Delux Limo uses only the most experienced personnel. We
              can provide any form of chauffeur service required. This includes
              anything from airport transfers, transport between back-to-back
              meetings, or a guided tour of a specific destination or city.
              Whether you are traveling for business or pleasure, allow Deluxe
              Limo to offer you the ultimate in luxury chauffeur service. We
              always maintain all the vehicles in our fleet so they are in
              pristine condition. In addition, we will satisfy you with our
              chauffeurs. They are as punctual as they are courteous, as
              friendly as they are helpful, and as personal as they are
              professional.
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}

export default AboutUs
