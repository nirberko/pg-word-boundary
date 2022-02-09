import pwb from './index';

test('Test regex word boundary', () => {
  expect(pwb('\babc\b')).toBe('\mabc\M');
});