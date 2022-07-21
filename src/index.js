import React from 'react';
import ReactDOM from 'react-dom';
import GA4React from 'ga-4-react';
import * as serviceWorker from './serviceWorker';
import App from './App';

const ga4react = new GA4React(process.env.REACT_APP_GA_TRACKING);

(async () => {
  await ga4react
    .initialize()
    .then(() => console.log('Analytics Success.'))
    .catch(() => console.log('Analytics Failure.'))
    .finally(() => {
      ReactDOM.render(
        <>
          <App />
        </>,
        document.getElementById('root'),
      );
    });
})();

serviceWorker.register({
  onUpdate: registration => {
    const waitingServiceWorker = registration.waiting;

    if (waitingServiceWorker) {
      waitingServiceWorker.addEventListener('statechange', event => {
        if (event.target.state === 'activated') {
          window.location.reload();
        }
      });
      waitingServiceWorker.postMessage({ type: 'SKIP_WAITING' });
    }
  },
});
