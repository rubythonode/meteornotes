Meteor.methods({
  createNote: function(newNote) {
    Notes.insert(newNote);
  },
  updateNote: function(id, noteTmp) {
    Notes.update(id, {$set: noteTmp});
  },
  deleteNote: function(id){
    Notes.remove(id);
  }
});
