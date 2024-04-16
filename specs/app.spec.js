// eslint-disable-next-line no-unused-vars
import { nameIsValid, fullTrim, getTotal } from "../src/app.js";

describe('Tests for function nameIsValid', () => {
test ('имя на кириллице не проходит', () => {
expect(nameIsValid('Тома')).toBe(false);
});

test ('имя правильного формата проходит', () => {
  expect(nameIsValid('vova')).toBe(true);
  });

test ('имя, состоящее из одного символа, не проходит', () => {
  expect(nameIsValid('v')).not.toBe(true);
  });

test ('имя, состоящее из двух букв, проходит ', () => {
  expect(nameIsValid('li')).toBe(true);
  });

test ('если имя не определено, оно не проходит ', () => {
  expect(nameIsValid()).toBe(false);
  });

test ('имя не является null', () => {
  expect(nameIsValid('Toma')).not.toBeNull;
  });

test ('имя не является null', () => {
  expect(nameIsValid('Toma')).toBeDefined;
  });
});

describe('Tests for function fullTrim', () => {
test ('пробелы действительно убираются', () => {
  expect(fullTrim('Чипи чипи чапа чапа')).toBe('Чипичипичапачапа');
  });

test ('с пустой строкой тоже всё работает', () => {
  expect(fullTrim('')).toBe('');
  });

test ('значение пустой строки определено', () => {
  expect(fullTrim('')).toBeDefined;
  });

test ('числа в строках тоже могут быть', () => {
  expect(fullTrim('1234 ')).toBe('1234');
  });

  test ('нельзя передавать в качестве параметра числа', () => {
    function checker() {
      fullTrim(1234);
    };
    expect(checker).toThrow();
  });
});

describe.each([
    {items: [{ price: 10, quantity: 10 }], discount: 2, expectation: 98},
    {items: [{ price: 15, quantity: 10 }], discount: 10, expectation: 135}
  ])("Parametric test for getTotal", ({items, discount, expectation}) => {
  test(`returns ${expectation}`, () => {
  expect(getTotal(items, discount)).toBe(expectation);
  });
});
describe('Not parametric tests for function getTotal', () => {
  test('throws error when discount is not a number', () => {
    expect(() => getTotal([{ price: 10, quantity: 10 }], 'abc')).toThrow('Скидка должна быть числом');
  });

  test('throws error when discount is negative', () => {
    expect(() => getTotal([{ price: 10, quantity: 10 }], -10)).toThrow('Процент скидки не может быть отрицательным');
  });

  test('throws error when discount is 100 or more', () => {
    expect(() => getTotal([{ price: 10, quantity: 10 }], 101)).toThrow('Процент скидки не может быть больше 100');
  });
});

