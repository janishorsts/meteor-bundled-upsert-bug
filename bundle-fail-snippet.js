Docs = new Meteor.Collection('docs');

if (Meteor.isServer) {
  Meteor.methods({
    saveDoc: function (doc) {
      console.log('Meteor.method[saveDoc]', doc);
      return Docs.upsert(doc._id, doc);
    }
  });

  Meteor.call('saveDoc', {title: 'Title'}, function (error, result) {
    console.log('Meteor.call[saveDoc]', {error: error, result: result});
  });
}
