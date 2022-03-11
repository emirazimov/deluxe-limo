import { Description } from "@material-ui/icons"
import Head from "next/head"
import Script from "next/script"
const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <title>Deluxe Limo</title>
        <meta charSet="utf-8" />
        <link
          rel="icon"
          href="https://delux-limo.s3.us-east-2.amazonaws.com/logo.jpg"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content="airport transfers,wine tours,Point to Point Transportation,City Tours,Weddings,Hourly Chauffer Services,dlxlimousine@gmail.com,dlxlimousine,Deluxe limo, transportation company, Dispatch Software , limo software, Limo Dispatch System,  Flight Tracker, Driver Tracker, Limo Dispatching System, Livery Software, Limo Service Scheduling Software, Best Limo Software, online reservations, friendly limo software"
          //   keywords={
          //     "booking,book,bookinglane,trasnport,transportation,book transport,booking transport,crm mobile, moile crm" +
          //     keywords
          //   }
        ></meta>
        <link rel="canonical" href="https://dlxlimousine.com/" />
        <link
          rel="apple-touch-icon"
          href="https://delux-limo.s3.us-east-2.amazonaws.com/logo.jpg"
        />
        <meta
          name="description"
          content="We have been delivering premium transportation services. We pledge to keep our promise to provide a reliable, safe, and professional service. Delux Limo uses only the most experienced personnel. We can provide any form of chauffeur service required. This includes anything from airport transfers, transport between back-to-back meetings, or a guided tour of a specific destination or city. Whether you are traveling for business or pleasure, allow Deluxe Limo to offer you the ultimate in luxury chauffeur service. We always maintain all the vehicles in our fleet so they are in pristine condition. In addition, we will satisfy you with our chauffeurs. They are as punctual as they are courteous, as friendly as they are helpful, and as personal as they are professional. LUXURY LIMOUSINES, PROFESSIONAL CHAUFFEURS, PREMIUM SERVICE"
        ></meta>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initialscale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        <link
          rel="stylesheet"
          href="https://bookinglane-widgets.s3.us-east-2.amazonaws.com/Global-widget-files/widget.css"
        />
        {/* <link
          rel="stylesheet"
          href="https://bookinglane-widgets.s3.us-east-2.amazonaws.com/Global-widget-files/widget.css.map"
        /> */}
        <meta name="robots" content="all"></meta>
        <meta name="robots" content="max-snippet:-1"></meta>
        <meta name="robots" content="max-image-preview:large"></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta property="og:title" content="Deluxe Limousine" />
        <meta property="og:url" content="https://dlxlimousine.com/"></meta>
        <meta property="og:type" content="article"></meta>
        <meta
          property="og:description"
          content="We have been delivering premium transportation services. We pledge to keep our promise to provide a reliable, safe, and professional service. Delux Limo uses only the most experienced personnel. We can provide any form of chauffeur service required. This includes anything from airport transfers, transport between back-to-back meetings, or a guided tour of a specific destination or city. Whether you are traveling for business or pleasure, allow Deluxe Limo to offer you the ultimate in luxury chauffeur service. We always maintain all the vehicles in our fleet so they are in pristine condition. In addition, we will satisfy you with our chauffeurs. They are as punctual as they are courteous, as friendly as they are helpful, and as personal as they are professional. LUXURY LIMOUSINES, PROFESSIONAL CHAUFFEURS, PREMIUM SERVICE"
        ></meta>
        <meta
          property="og:image"
          content="https://delux-limo.s3.us-east-2.amazonaws.com/dlx_limo_preview.png"
        ></meta>
        {/* <meta property="fb:app_id" content="APPID" /> */}
        <meta property="twitter:title" content="Deluxe Limousine"></meta>
        <meta
          property="twitter:description"
          content="We have been delivering premium transportation services. We pledge to keep our promise to provide a reliable, safe, and professional service. Delux Limo uses only the most experienced personnel. We can provide any form of chauffeur service required. This includes anything from airport transfers, transport between back-to-back meetings, or a guided tour of a specific destination or city. Whether you are traveling for business or pleasure, allow Deluxe Limo to offer you the ultimate in luxury chauffeur service. We always maintain all the vehicles in our fleet so they are in pristine condition. In addition, we will satisfy you with our chauffeurs. They are as punctual as they are courteous, as friendly as they are helpful, and as personal as they are professional. LUXURY LIMOUSINES, PROFESSIONAL CHAUFFEURS, PREMIUM SERVICE"
        ></meta>
        <meta
          property="twitter:image"
          content="https://delux-limo.s3.us-east-2.amazonaws.com/dlx_limo_preview.png"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="theme-color" content="#000000" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta property="twitter:card" content="summary"></meta>

        {/* <script
          src="https://apis.google.com/js/api.js"
          type="text/javascript"
        ></script> */}

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-212872613-1"
        ></script>
        <script>
          {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());

         gtag('config', 'UA-212872613-1');`}
        </script>
        <script
          src="https://bookinglane-widgets.s3.us-east-2.amazonaws.com/option1-widget-files/deluxe-limo.js"
          type="text/javascript"
        ></script>
        {/* <script src="https://bookinglane-widgets.s3.us-east-2.amazonaws.com/Global-widget-files/widget.js"></script> */}
      </Head>
      <div>{children}</div>
      <div id="widget-by-bookinglane"></div>

      <Script
        src="https://bookinglane-widgets.s3.us-east-2.amazonaws.com/Global-widget-files/widget.js"
        // onLoad={() => {
        //   // let styleForJss3 = `
        //   //   display: block;
        //   // `
        //   // document.getElementsByClassName("jss3").style = styleForJss3
        //   // console.log(document.getElementsByClassName("jss5"))
        //   // document?.body?.querySelector(".jss3")?.style?.display = "block"
        //   // document?.getElementsByClassName("jss4")[0]?.style?.width = "100%"
        //   // document.body.querySelector(".jss5").style.display = "none"
        //   // document.body.querySelector(".jss5").style.width = "initial"
        //   // document.body.querySelector(".jss5").style.bottom = "initial"
        //   // document.body.querySelector(".jss5").style.height = "initial"
        //   // document.body.querySelector(".jss5").style.position = "initial"
        //   // document.body.querySelector(".jss5").style.background = "initial"
        // }}
      ></Script>
      {/* <Script
        onLoad={() => {
          // let styleForJss3 = `
          //   display: block;
          // `
          // document.getElementsByClassName("jss3").style = styleForJss3
          // document.body.querySelector(".jss3").style.display = "block"
          // console.log(document?.getElementsByClassName("jss4"))
          // console.log("hello its me")
          // document.body.querySelector(".jss5").style.left = "none"
          // document.body.querySelector(".jss5").style.width = "initial"
          // document.body.querySelector(".jss5").style.bottom = "initial"
          // document.body.querySelector(".jss5").style.height = "initial"
          // document.body.querySelector(".jss5").style.position = "initial"
          // document.body.querySelector(".jss5").style.background = "initial"
        }}
      ></Script> */}
      {/* <Script
        src="https://apis.google.com/js/api.js"
        type="text/javascript"
      ></Script>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-N6ZS1BMP1J"
      ></Script>
      <Script
        onLoad={() => {
          window.dataLayer = window.dataLayer || []
          function gtag() {
            " "
          }
          {
            dataLayer.push(arguments)
          }
          gtag("js", new Date())
          gtag("config", "G-N6ZS1BMP1J")
        }}
      ></Script> */}

      {/* <script src="https://bookinglane.com/widgets/142/widget.js"></script> */}
    </>
  )
}

export default MainContainer
