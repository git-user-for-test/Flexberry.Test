import {
  defineNamespace,
  defineProjections,
  Model as NewClass1Mixin
} from '../mixins/regenerated/models/i-i-s-test-new-class1';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(NewClass1Mixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
