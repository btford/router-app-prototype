import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {RouterApp} from '../app/router-app';

beforeEachProviders(() => [RouterApp]);

describe('App: RouterApp', () => {
  it('should have the `defaultMeaning` as 42', inject([RouterApp], (app) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([RouterApp], (app) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

