
import Ember from 'ember';
import MutableArray from '@ember/array/mutable';

declare global {
  interface Array<T> extends Ember.ArrayPrototypeExtensions<T>, MutableArray<T> {}
  // interface Function extends Ember.FunctionPrototypeExtensions {}
}

export {};

