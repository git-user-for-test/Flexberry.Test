import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  asd3: DS.attr('string'),
  newClass2: DS.belongsTo('i-i-s-test-new-class2', { inverse: 'newClass3', async: false })
});

export let ValidationRules = {
  asd3: {
    descriptionKey: 'models.i-i-s-test-new-class3.validations.asd3.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  newClass2: {
    descriptionKey: 'models.i-i-s-test-new-class3.validations.newClass2.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('NewClass3E', 'i-i-s-test-new-class3', {
    asd3: attr('Asd3', { index: 0 })
  });
};
