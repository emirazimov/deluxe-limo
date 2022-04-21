// import Image from "next/image"
import styles from "../styles/OurServices.module.scss"
// import cardImg1 from "../public/card1-min.jpg"
// import cardImg2 from "../public/card2-min.jpg"
// import cardImg3 from "../public/card3-min.jpg"
// import cardImg4 from "../public/card4-min.jpg"
// import cardImg5 from "../public/card5-min.jpg"
// import cardImg6 from "../public/card6-min.jpg"
import { TitleUnderline } from "../public/icons"

const OurServices = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.wrapper}>
        <div className={styles.mainTitle}>
          <span>OUR SERVICES</span>
          <TitleUnderline
            color={"white"}
            width={"222px"}
            height={"22px"}
            firstViewBox={"0"}
            thirdViewBox={"250"}
          />
        </div>
        <div className={styles.cardsBlock}>
          <figure className={styles.card1}>
            <div className={styles.imgContainer}>
              <img
                src="https://delux-limo.s3.us-east-2.amazonaws.com/card1-min.webp"
                style={{ width: "100%", height: "100%" }}
                alt="ServicesImg1"
              />
            </div>
            <figcaption className={styles.textContainer}>
              <span>Airport Transfers</span>
              <p>
                Would you like to arrive at the airport in style and comfort? We
                can pick and drop you to and from the airport in a stretched
                limousine or a luxury car of your choice. No matter, whether you
                are going on holiday, travelling for business. Limos & Cars are
                on hand to make your trip to the airport as easy and as relaxing
                as possible
              </p>
            </figcaption>
          </figure>
          <figure className={styles.card2}>
            <div className={styles.imgContainer}>
              <img
                src="https://delux-limo.s3.us-east-2.amazonaws.com/card2-min.webp"
                style={{ width: "100%", height: "100%" }}
                alt="ServicesImg2"
              />
            </div>
            <figcaption className={styles.textContainer}>
              <span>Wine Tours</span>
              <p>
                Deluxe Limo wine tours in the Napa Valley are perfect for any
                occasion – from the most formal to a simple weekend getaway with
                friends. We are able to put the pieces of a perfect wine tour
                together to make every single experience with Deluxe Limo one
                that you will never forget.
              </p>
            </figcaption>
          </figure>
          <figure className={styles.card3}>
            <div className={styles.imgContainer}>
              <img
                src="https://delux-limo.s3.us-east-2.amazonaws.com/card3-min.webp"
                style={{ width: "100%", height: "100%" }}
                alt="ServicesImg3"
              />
            </div>
            <figcaption className={styles.textContainer}>
              <span>Point to Point Transportation</span>
              <p>
                Our point to point caar service provides you with the kind of
                transportation that will help make your event or occasion a
                special one. We provide point to point transportation with
                particular attention on comfort and safety, getting our clients
                from place to place as efficiently as possible. Our professional
                chauffeurs have a wealth of knowledge and experience and are
                trained to provide the highest level of service in the industry.
              </p>
            </figcaption>
          </figure>
          <figure className={styles.card4}>
            <div className={styles.imgContainer}>
              <img
                src="https://delux-limo.s3.us-east-2.amazonaws.com/card4-min.webp"
                style={{ width: "100%", height: "100%" }}
                alt="ServicesImg4"
              />
            </div>
            <figcaption className={styles.textContainer}>
              <span>City Tours</span>
              <p>
                Delux Limo provides privately chauffeured tours that leave you
                feeling more like a local than a visitor. Every tour is
                handcrafted to your group’s wants and needs, this ensures that
                you aren’t just going on a tour but making memories that will
                last a lifetime. Our goal is that your tour with us is the best
                thing. Let us organise everything from your collection to your
                return on a carefree relaxing chauffeured tour. Enjoy the most
                famous highlights and the most hidden treasures of the city,
                based on personalized programs.
              </p>
            </figcaption>
          </figure>
          <figure className={styles.card5}>
            <div className={styles.imgContainer}>
              <img
                src="https://delux-limo.s3.us-east-2.amazonaws.com/card5-min.webp"
                style={{ width: "100%", height: "100%" }}
                alt="ServicesImg5"
              />
            </div>
            <figcaption className={styles.textContainer}>
              <span>Weddings</span>
              <p>
                Your wedding is the most important and magical day of your life,
                and you want the best of everything, which includes using Deluxe
                Limo. Our friendly team is always on hand to discuss your
                wedding requirements, and is always available and happy to
                discuss and amend your plans as required. Our chauffeurs will
                keep you relaxed and take the best possible care of you on the
                day.
              </p>
            </figcaption>
          </figure>
          <figure className={styles.card6}>
            <div className={styles.imgContainer}>
              <img
                src="https://delux-limo.s3.us-east-2.amazonaws.com/card6-min.webp"
                style={{ width: "100%", height: "100%" }}
                alt="ServicesImg6"
              />
            </div>
            <figcaption className={styles.textContainer}>
              <span>Hourly Chauffer Services</span>
              <p>
                You will be asked to indicate a pick-up location and a
                destination location of your choice while booking a transfer.
                Hourly booking: Seeking to fulfil your needs, we offer you a
                flexible hourly booking option. The duration of your journey may
                vary up to as many hours as you require. Hourly booking differs
                from transfer service as you can manage your journey while
                enjoying a drive. We are ready to fulfill any special need you
                have in mind!
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}

export default OurServices
