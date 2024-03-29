import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Test',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test',
          title: 'Test'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-test-new-class1-l': IISTestNewClass1LForm,
    'i-i-s-test-new-class2-l': IISTestNewClass2LForm,
    'i-i-s-test-new-class1-e': IISTestNewClass1EForm,
    'i-i-s-test-new-class2-e': IISTestNewClass2EForm
  },

});

export default translations;
