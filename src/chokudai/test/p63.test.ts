import bestInvitaion from '../p63';

test('ex0', () => {
  expect(bestInvitaion(["fishing", "gardening", "swimming", "fishing"],
                    ["hunting", "fishing", "fishing", "biting"])
  ).toEqual(4);
});

test('ex1', () => {
  expect(bestInvitaion(["variety", "diversity", "loquacity", "courtesy"],
                    ["talking", "speaking", "discussion", "meeting"])
  ).toEqual(1);
});

test('ex2', () => {
  expect(bestInvitaion(["snakes", "programming", "cobra", "monty"],
                    ["python", "python", "acaconda", "python"])
  ).toEqual(3);
});

test('ex3', () => {
  expect(bestInvitaion(["t", "o", "p", "c", "o", "d", "e", "r", "s", "i", "n", "g", "l", "e", "r", "o", "u", "n", "d", "m", "a", "t", "c", "h", "f", "o", "u", "r", "n", "i"],
                    ["n", "e", "f", "o", "u", "r", "j", "a", "n", "u", "a", "r", "y", "t", "w", "e", "n", "t", "y", "t", "w", "o", "s", "a", "t", "u", "r", "d", "a", "y"])
  ).toEqual(6);
});

