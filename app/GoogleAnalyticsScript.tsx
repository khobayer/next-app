import Script from "next/script";

function GoogleAnalyticsScript() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DNJN1PF3CS"
      />
      <Script id="my-script">
        {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XXXXXXX');`}
      </Script>
    </>
  );
}

export default GoogleAnalyticsScript;
