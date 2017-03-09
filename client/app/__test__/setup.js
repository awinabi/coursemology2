import { IntlProvider, intlShape } from 'react-intl';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

require('babel-polyfill');

const timeZone = "Asia/Singapore";
const intlProvider = new IntlProvider({ locale: 'en', timeZone }, {});
const courseId = 1;

// Global variables
global.courseId = courseId;
global.intl = intlProvider.getChildContext().intl;
global.intlShape = intlShape;
global.muiTheme = getMuiTheme();

// Global mocks
document.head.innerHTML =
  `<meta name="server-context" data-i18n-locale="en" data-time-zone="${timeZone}">`;

Object.defineProperty(window.location, 'pathname', {
  value: `/courses/${courseId}`,
});

// Global helper functions

// Sleep for a given period in ms.
function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
global.sleep = sleep;
