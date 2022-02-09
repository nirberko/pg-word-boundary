import pwb from './index';

test('Test regex word boundary', () => {
  expect(pwb('\b([1-2])\b')).toBe('\\m([1-2])\\M');
});