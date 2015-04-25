Router.configure({
   layoutTemplate: 'layout'
});

Router.route('/', {name: 'notesList'});

Router.route('/notes/create', {name: 'createNote'});

Router.route('/notes/:_id', {
  name: 'editNote',
  data: function() { return Notes.findOne(this.params._id); }
});

Router.route('/notes/delete/:_id', {
  name: 'deleteNote',
  data: function() { return Notes.findOne(this.params._id); }
});
