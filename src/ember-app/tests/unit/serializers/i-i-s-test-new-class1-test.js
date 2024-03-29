import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test-new-class1', 'Unit | Serializer | i-i-s-test-new-class1', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-test-new-class1',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-test-new-class1',
    'model:i-i-s-test-new-class2',
    'model:i-i-s-test-new-class3',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
