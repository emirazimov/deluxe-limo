import styles from "../styles/Footer.module.scss"
import menuIcon from "../public/menuIcon.png"
// import Image from "next/image"
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PoweredByBookinglane,
  TwitterIcon,
} from "../public/icons"
import poweredByBookinglane from "../public/poweredByBookinglane.png"

const Footer = () => {
  return (
    <footer className={styles.mainContainer}>
      <hr className={styles.hrFooter}></hr>
      <div className={styles.wrapper}>
        <div className={styles.firstRow}>
          <img
            src="https://delux-limo.s3.us-east-2.amazonaws.com/menuIcon.png"
            alt="footer"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className={styles.secondRow}>
          <span>Copyright © 2021. All rights reserved.</span>
        </div>
        <div className={styles.socialNetworkIcons}>
          <div className={styles.bookinglaneIcon}>
            {/* <Image src={poweredByBookinglane} alt="powered by bookinglane" objectFit="contain" /> */}
            <PoweredByBookinglane />
          </div>
          <div className={styles.iconsContainer}>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedinIcon />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
