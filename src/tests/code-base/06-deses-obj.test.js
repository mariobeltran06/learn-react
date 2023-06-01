import { usContext } from '../../code-base/06-deses-obj';

describe('06-deses-obj', () => {
  test('should function usContext return soldier', () => {
    const testSoldier = {
      secret: 'AIR',
      name: 'Goff',
      age: 34,
    };
    const soldier = usContext(testSoldier);
    expect(soldier).toStrictEqual({
      nameSecret: testSoldier.secret,
      age: testSoldier.age,
      position: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });
  });
});
