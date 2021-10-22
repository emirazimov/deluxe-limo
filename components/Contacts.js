import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  InstagramIconForContacts,
  LinkedinIcon,
  MobilePhoneIcon,
  TitleUnderline,
  TwitterIcon,
} from "../public/icons"
import styles from "../styles/Contacts.module.scss"

const Contacts = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.wrapper}>
        <div className={styles.titleContainer}>
          <span>CONTACTS</span>
          <TitleUnderline
            color={"white"}
            width={"170px"}
            height={"22px"}
            firstViewBox={"40"}
            thirdViewBox={"165"}
          />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.mobilePhone}>
            <MobilePhoneIcon />
            <span>+1 (925) 852-8995</span>
          </div>
          <div className={styles.email}>
            <EmailIcon />
            <span>dlxlimousine@gmail.com</span>
          </div>
          <div className={styles.socialNetworks}>
            <InstagramIconForContacts />
            <span>@dlxlimousine</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
