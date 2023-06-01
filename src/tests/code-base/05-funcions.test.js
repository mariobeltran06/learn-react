import { getUser, getUserActive, gretting2, gretting4 } from '../../code-base/05-funcions';

describe('05-functions', () => {
  test('should function gretting2 return "Hello, Mario"', () => {
    const name = 'Mario';
    const gretting = gretting2(name);
    expect(gretting).toBe('Hello, Mario');
  });

  test('should function gretting4 return "Hello World"', () => {
    const sentence = 'Hello World';
    const gretting = gretting4();
    expect(gretting).toBe(sentence);
  });

  test('should function getUser return user object', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };
    const user = getUser();
    expect(user).toEqual(testUser);
  });

  test('should function getUserActive return user active object', () => {
    const username = 'Master Chief';
    const testUserActive = {
      uid: 'ABC567',
      username,
    };
    const user = getUserActive(username);
    expect(user).toStrictEqual(testUserActive);
  });
});
