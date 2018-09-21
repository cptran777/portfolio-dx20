import Ember from 'ember';
import MutableArray from '@ember/array/mutable';

declare global {
  interface Array<T> extends Ember.ArrayPrototypeExtensions<T>, MutableArray<T> { }
  // interface Function extends Ember.FunctionPrototypeExtensions {}
}

/**
 * General interface for a key => string value mapping
 */
export interface IKeyMap {
  [key: string]: string;
}