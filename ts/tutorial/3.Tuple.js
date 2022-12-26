"use strict";
/**
 * 3. Tuple to Object

Give an array, transform into an object type and the key/value must in the given array.

For example:

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

 */
/*_______________   Example Here   _____________________*/
