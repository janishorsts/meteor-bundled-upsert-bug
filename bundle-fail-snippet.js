Docs = new Meteor.Collection('docs');

if (Meteor.isClient) {
  Deps.autorun(function () {
    Meteor.call('saveDoc', {title: 'Title'}, function (error, result) {
      console.log('Meteor.call[saveDoc]', {error: error, result: result});
    });
  });
}

if (Meteor.isServer) {
  Meteor.methods({
    saveDoc: function (doc) {
      console.log('Meteor.method[saveDoc]', doc);
      return Docs.upsert(doc._id, doc);
    }
  });
}
