/* eslint-env mocha */
import expect from 'expect';

import ConstantCreator from './ConstantCreator.js';


describe('ConstantCreator', () => {
  let constantCreator;
  let childConstantCreator;

  it('should be a function', () => {
    expect(ConstantCreator).toBeA('function');
  });

  it('should require a namespace on instantiation', () => {
    expect(() => {
      constantCreator = new ConstantCreator();
    }).toThrow('ConstantCreator: Creation requires a namespace');

    expect(() => {
      constantCreator = new ConstantCreator('FOO');
    }).toNotThrow();
  });

  it('should generate namespaced constants', () => {
    let expected = undefined;
    let actual = undefined;

    constantCreator = new ConstantCreator('FOO');

    expected = 'FOO/BAR';
    actual = constantCreator.createConstant('BAR');

    expect(actual).toBe(expected);

    expected = 'FOO/BAZ';
    actual = constantCreator.createConstant('BAZ');

    expect(actual).toBe(expected);
  });

  it('should allow configurable delimiters', () => {
    let expected = undefined;
    let actual = undefined;

    constantCreator = new ConstantCreator('FOO', 'DELIMITER');

    expected = 'FOODELIMITERBAR';
    actual = constantCreator.createConstant('BAR');

    expect(actual).toBe(expected);
  });

  it('should create child factories', () => {
    let expected = undefined;
    let actual = undefined;

    constantCreator = new ConstantCreator('PARENT');
    childConstantCreator = constantCreator.createChild('CHILD');

    expected = 'PARENT/CHILD/CONSTANT';
    actual = childConstantCreator.createConstant('CONSTANT');

    expect(actual).toBe(expected);

    expected = 'PARENT/CONSTANT';
    actual = constantCreator.createConstant('CONSTANT');

    expect(actual).toBe(expected);
  });
});
