# React Test With TypeScript

## Test Anatomy

**Every test is a statement that claims something.**  
As the default case of create-react-app template `app.test.tsx`, we claim that the App should render a "Learn React" Link

**This kind of statement consist of 3 stages**

- **Arrange:** prepare your environment and render the component
- **Act:** call your test function
- **Assert:** compare function results with expected results, if they are equal, the function worked correctly

```
// We describe what we want to test:
test('renders learn react link', () => {
  // Arrange: prepare the environment, 
  //         render the component.
  render(<App />);
  
  // Act: try to find the expected link.
  const linkElement = screen.getByText(/learn react/i);
  
  // Assert: check that required link 
  //        is indeed in the document.
  expect(linkElement).toBeInTheDocument();
});
```

At here, we will make an example to show how to use react test with jest

```
// At your app's component or utils 

export function divide(a:number,b:number){
  if(b === 0)throw new Error("You cannot divide a number as zero");
  return Math.round(a / b);
}

```

```
// At App.test.tsx
import {divide} from "@/app.tsx";

// describe function at jest can pass two arguments in it.
// your describtion and a fallback function.
// describtion will be shown at terminal to infrom you where your test is.
// fallback function will be run to push next stage.
describe('divide function', () => {
  describe('when given to integers', () => {
    it('should return a divided result', () => {
      const [a,b,expected] = [10,2,5];
      const result = divide(a,b);
      expect(result).toEqual(expected);
    })
  })
})
```


# React Test in Vite With Vitest



