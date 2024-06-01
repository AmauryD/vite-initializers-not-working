import Route from '@ember/routing/route';
import { service } from '@ember/service';
// import initializer from 'ember-simple-auth/initializers/ember-simple-auth';
// import { getOwner } from '@ember/application';

export default class ApplicationRoute extends Route {
  @service session;

  beforeModel() {
    // does not work without this line
    // initializer.initialize(getOwner(this));
    this.session.setup();
  }
}
