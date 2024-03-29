import {
  defineNamespace,
  defineProjections,
  Model as NewClass3Mixin
} from '../mixins/regenerated/models/i-i-s-test-new-class3';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(NewClass3Mixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
