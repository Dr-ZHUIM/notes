/**
 * 3. Tuple to Object

Give an array, transform into an object type and the key/value must in the given array.

For example:

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

 */


/* _____________ Your Code Here _____________ */

//keyof means one type of the interface or the typeailas 
type myTuple<T extends readonly any[]> = {
  [K in T[number]] : K
}

/*_______________   Example Here   _____________________*/

