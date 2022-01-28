// // import { NavigationActions } from 'react-navigation';
// import { CommonActions } from '@react-navigation/native';

// let navigatore;

// export const setNavigator = (nav) => {
//     navigatore = nav;
// };

// export const navigate = (routeName, params) => {
//  navigator.dispatch(
//      CommonActions.navigate({
//          routeName,
//          params
//      })
//  );
// };


// RootNavigation.js

import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

// add other navigation functions that you need and export them




