import { foo, checkOriginalFoo } from './mutability'

foo.bar = 'newBarValue'

const mutatedFooAssertion = {
  bar: 'newBarValue'
}

const initialFooReplica = {
  bar: 'baz'
}

test('imported foo mutates', () => {
  expect(foo).toEqual(mutatedFooAssertion);
});

test('original foo is updated', () => {
  expect(checkOriginalFoo()).toEqual(mutatedFooAssertion);
});

test('original foo does not equal its starting value', () => {
  expect(checkOriginalFoo()).not.toEqual(initialFooReplica);
});