/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import Todo from './src/Todo';

AppRegistry.registerComponent(appName, () => Todo);
