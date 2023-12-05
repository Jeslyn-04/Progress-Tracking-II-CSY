import {add,subtract} from './Sample'
test('addition',()=>{
    expect(add(3,4)).toBe(7);
    expect(add(3,7)).toBe(10);
    expect(add(5,4)).toBe(9);
});
test('subt',()=>{
    expect(subtract(3,4)).toBe(-1);
});
