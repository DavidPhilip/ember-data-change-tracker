import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define("company", {
  default: {
    type: 'Company',
    name: 'Silly corp'
  },

  traits: {
    with_projects: {
//      projects: FactoryGuy.hasMany('project', 2)
    }
  }
});
