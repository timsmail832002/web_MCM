import '../styles/globals.css'
import { useEffect } from 'react';

export default function App({Component, pageProps}) {
  useEffect(() => {
    // Load Reamaze loader script
    const scriptLoader = document.createElement('script');
    scriptLoader.src = 'https://cdn.reamaze.com/assets/reamaze-loader.js';
    scriptLoader.async = true;
    document.body.appendChild(scriptLoader);

    // Add the support widget config
    const scriptConfig = document.createElement('script');
    scriptConfig.type = 'text/javascript';
    scriptConfig.innerHTML = `
      var _support = _support || { 'ui': {}, 'user': {} };
      _support['account'] = 'men-crowning-men';
      _support['ui']['contactMode'] = 'default';
      _support['ui']['enableKb'] = 'true';
      _support['ui']['styles'] = {
        widgetColor: 'rgba(16, 162, 197, 1)',
        gradient: true,
      };
      _support['ui']['shoutboxFacesMode'] = 'default';
      _support['ui']['shoutboxHeaderLogo'] = true;
      _support['ui']['widget'] = {
        displayOn: 'all',
        fontSize: 'default',
        allowBotProcessing: true,
        slug: 'men-crowning-men-chat-slash-contact-form-shoutbox',
        label: {
          text: 'Let us know if you have any questions! &#128522;',
          mode: 'notification',
          delay: 3,
          duration: 30,
          primary: 'Yes I do have question ',
          secondary: 'No, thanks',
          sound: true,
        },
        position: 'bottom-right',
        mobilePosition: 'bottom-right'
      };
      _support['apps'] = {
        faq: {"enabled":true},
        recentConversations: {},
        orders: {},
        shopper: {}
      };
      _support['ui']['appOrder'] = ["faq","orders","shopper","recentConversations"];
    `;
    document.body.appendChild(scriptConfig);

    // Cleanup scripts on unmount
    return () => {
      document.body.removeChild(scriptLoader);
      document.body.removeChild(scriptConfig);
    };
  }, []);

  return <Component {...pageProps}/>;
}