import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  asd: DS.attr('number')
});

export let ValidationRules = {
  asd: {
    descriptionKey: 'models.i-i-s-test-new-class1.validations.asd.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('NewClass1E', 'i-i-s-test-new-class1', {
    asd: attr('Asd', { index: 0 })
  });

  modelClass.defineProjection('NewClass1L', 'i-i-s-test-new-class1', {
    asd: attr('Asd', { index: 0 })
  });
};
