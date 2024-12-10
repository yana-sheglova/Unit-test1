import getHealthStatus from '../healthStatus';

test('health > 50 should return "healthy"', () => {
  const character = {
    name: 'Маг',
    health: 90,
  };
  expect(getHealthStatus(character)).toBe('healthy');
});

test('health > 15 should return "wounded"', () => {
  const character = {
    name: 'Маг',
    health: 36,
  };
  expect(getHealthStatus(character)).toBe('wounded');
});

test('health < 15 should return "critical"', () => {
  const character = {
    name: 'Маг',
    health: 9,
  };
  expect(getHealthStatus(character)).toBe('critical');
});
