/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Auth: {
        screens: {
          Login: {
            screens: {
              FeedScreen: 'login',
            },
          },
          Register: {
            screens: {
              FeedScreen: 'register',
            },
          },
        }
      },
      Root: {
        screens: {
          Feed: {
            screens: {
              FeedScreen: 'feed',
            },
          },
          Groups: {
            screens: {
              GroupScreen: 'groups',
            },
          },
          Search: {
            screens: {
              SearchScreen: 'search',
            },
          },
          Profile: {
            screens: {
              ProfileScreen: 'profile',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};

export default linking;
