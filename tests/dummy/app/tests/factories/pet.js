import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define("pet", {
  default: {
    name: (f)=> `Fido${f.id}`
  }
});
