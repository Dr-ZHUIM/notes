const check = <T>(element: T): T => {
  return element;
};

const resS = check<string>('aa');
const resB = check<boolean>(true);