import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  asd2: DS.attr('boolean'),
  newClass1: DS.belongsTo('i-i-s-test-new-class1', { inverse: null, async: false }),
  newClass3: DS.hasMany('i-i-s-test-new-class3', { inverse: 'newClass2', async: false })
});

export let ValidationRules = {
  asd2: {
    descriptionKey: 'models.i-i-s-test-new-class2.validations.asd2.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  newClass1: {
    descriptionKey: 'models.i-i-s-test-new-class2.validations.newClass1.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  newClass3: {
    descriptionKey: 'models.i-i-s-test-new-class2.validations.newClass3.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('NewClass2E', 'i-i-s-test-new-class2', {
    asd2: attr('Asd2', { index: 0 }),
    newClass1: belongsTo('i-i-s-test-new-class1', 'New class1', {
      asd: attr('Asd', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'asd' }),
    newClass3: hasMany('i-i-s-test-new-class3', 'New class3', {
      asd3: attr('Asd3', { index: 0 })
    })
  });

  modelClass.defineProjection('NewClass2L', 'i-i-s-test-new-class2', {
    asd2: attr('Asd2', { index: 0 }),
    newClass1: belongsTo('i-i-s-test-new-class1', 'Asd', {
      asd: attr('Asd', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
