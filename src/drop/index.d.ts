import { Dec, Tail } from '..';

// Creates a slice of array with n elements dropped from the beginning:
// https://lodash.com/docs/4.17.15#drop.
//
//   type S = Drop<[1, 2, 3], 1>; // [2, 3]
//
export type Drop<
  // The input array.
  A extends Array<any>,
  // The number of elements to drop from the beginning.
  N extends number
> = {
  // If the input array `A` is empty, we either reached the end of our recursion
  // or that the initial input was empty. Either way, return an empty array:
  0: [];
  // Check if `N` is 0, which means that no more elements need to be dropped, and
  // return the input array:
  1: A;
  // Otherwise, run again by dropping the first element and decrementing `N` by 1:
  2: Drop<Tail<A>, Dec<N>>;
}[A extends [] ? 0 : N extends 0 ? 1 : 2];
