import Head from "next/head";
import dynamic from 'next/dynamic';

const HomeBanner = dynamic(() => import('./components/HomeBanner.js/HomeBanner'));
const FarmStarts = dynamic(() => import('./components/FarmStarts/FarmStarts'));
const FarmProductLPage = dynamic(() => import('./components/FarmProductLPage/FarmProductLPage'));
const CareGuests = dynamic(() => import('./components/CareGuests/CareGuests'));

export default function Home({ canonicalUrl }) {
export default function Home({ canonicalUrl }) {
  return (
    <div className="text-black font-poppins">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>No Deposit & Unlimited Guests - Dozzy Farmhouse Rentals</title>
        <meta name="description" content="Enjoy the great outdoors with No deposit, Unlimited Guests, and luxurious farmhouse rentals. Perfect for relaxation, parties, and weddings. Book now and enjoy your privacy in nature's luxury." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="No Deposit & Unlimited Guests - Dozzy Farmhouse Rentals" />
        <meta property="og:description" content="Enjoy the great outdoors with No deposit, Unlimited Guests, and luxurious farmhouse rentals. Perfect for relaxation, parties, and weddings. Book now and enjoy your privacy in nature's luxury. " />
        <link rel="canonical" href={canonicalUrl} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-04YJBDK2VX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                         window.dataLayer = window.dataLayer || [];
                         function gtag(){dataLayer.push(arguments);}
                         gtag('js', new Date());
                         gtag('config', 'G-04YJBDK2VX');
                        `,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16698821101"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16698821101');
            `,
          }}
        />

        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16698821101"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16698821101');
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': 'AW-16698821101/AchICOTCyOsZEO2Tz5o-',
                  'value': 1.0,
                  'currency': 'INR',
                  'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){
                w[l]=w[l]||[]; 
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NFJZZ34X');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `gtag('config', 'AW-16797121033/PPdfCKqh7_AZEIn0vsk-', {
                          'phone_conversion_number': '96666-559-73'
                              });`,
          }}
        />

      </Head>
     
      <HomeBanner />
      <FarmStarts />
      <FarmProductLPage />
      <CareGuests />
    </div>
  );
}
export async function getServerSideProps({ req }) {
  // const response = await fetch('https://api.longdrivecarz.in/site/cars-info?location=Hyderabad');
  // const items = await response.json();
  // const cars = items?.data?.results;
  const host = req.headers.host;
  const canonicalUrl = host.includes('.in')
    ? 'https://www.dozzy.in'
    : 'https://www.dozzy.com';

  return {
    props: {
      // cars,
      canonicalUrl,
    },
  };
}