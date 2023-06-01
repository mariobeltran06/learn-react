import { gretting } from '../../code-base/02-template-string';

describe('02 Template String', () => {
  test('should function getGretting return "Hello Carl"', () => {
    const name = 'Carl';
    const message = gretting(name);

    expect(message).toBe('Hello Carl');
  });
});
