import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTestNewClass1LForm from './forms/i-i-s-test-new-class1-l';
import IISTestNewClass2LForm from './forms/i-i-s-test-new-class2-l';
import IISTestNewClass1EForm from './forms/i-i-s-test-new-class1-e';
import IISTestNewClass2EForm from './forms/i-i-s-test-new-class2-e';
import IISTestNewClass1Model from './models/i-i-s-test-new-class1';
import IISTestNewClass2Model from './models/i-i-s-test-new-class2';
import IISTestNewClass3Model from './models/i-i-s-test-new-class3';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test-new-class1': IISTestNewClass1Model,
    'i-i-s-test-new-class2': IISTestNewClass2Model,
    'i-i-s-test-new-class3': IISTestNewClass3Model
  },

  'application-name': 'Test',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test',
          title: 'Test'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        test: {
          caption: 'Test',
          title: 'Test',
          'i-i-s-test-new-class1-l': {
            caption: 'New class1',
            title: ''
          },
          'i-i-s-test-new-class2-l': {
            caption: 'New class2',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test-new-class1-l': IISTestNewClass1LForm,
    'i-i-s-test-new-class2-l': IISTestNewClass2LForm,
    'i-i-s-test-new-class1-e': IISTestNewClass1EForm,
    'i-i-s-test-new-class2-e': IISTestNewClass2EForm
  },

});

export default translations;
