const treatDoggos = require('../treatDoggos');

describe('treatDoggos', () => {
  it('', () => {
    // first test here
describe('treatdoggos', () => {
  test('The input object values have not been changed', () => {
    const input1 = [{ name: 'Otis', age: 3, hasRabies: true }];
    const output = treatDoggos(input1);

    expect(input1).toEqual([{ name: 'Otis', age: 3, hasRabies: true }]);
  });
  test('The output object is separate from the input object', () => {
    const input1 = [{ name: 'Otis', age: 3, hasRabies: true }];
    const output = treatDoggos(input1);

    expect(output).not.toBe(input1);  
  });
});
  test('The output object elements are separate from the input object elements', () => {
    const input1 = [{ name: 'Otis', age: 3, hasRabies: true }];
    const output = treatDoggos(input1 );

    output.forEach((el,idx)=>{
      if(input1[idx]){
        expect(input1[idx]).not.toBe(output[idx])
      }
    })
  }); 
    test('The function returns correct output for an empty input', () => {
    const input1 = [];
    const output = treatDoggos(input1 );
    const expectedOutput = [];

    expect(output).toEqual(expectedOutput);
  });  
  test('The function returns correct output for a single element in input', () => {
    const input1 = [{ name: 'Otis', age: 3, hasRabies: true }];
    const output = treatDoggos(input1 );
    const expectedOutput = [{ name: 'Otis', age: 3, hasRabies: false }];

    expect(output).toEqual(expectedOutput);
  });  
    test('The function returns correct output for multiple elements in input', () => {
    const input1 = [{ name: 'Otis', age: 3, hasRabies: true },{ name: 'Rex', age: 2, hasRabies: true }];
    const output1 = treatDoggos(input1);
    const expectedOutput1 = [
      { name: 'Otis', age: 3, hasRabies: false },
      { name: 'Rex', age: 2, hasRabies: false }
    ];

    expect(output1).toEqual(expectedOutput1);

  });  
});
})