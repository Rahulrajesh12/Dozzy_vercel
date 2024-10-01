
export default function LinkCall(event, url) {
   
    if (event && typeof event.preventDefault === 'function') {
        event.preventDefault();
    }

    if (typeof window !== 'undefined') {
        if (window.gtag) {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-16698821101/CQaxCPyqu9YZEO2Tz5o-',
                'value': 1.0,
                'currency': 'INR',
            });
        } else {
            console.error('gtag is not defined');
        }
        
        window.location.href = url;
    }
}

