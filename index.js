/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Modal from './Modal';
import Actions from './StackActions';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Actions);
