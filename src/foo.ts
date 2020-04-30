export const sum
  = (...a: number[]) =>
    a.reduce((acc, val) => acc + val, 0);

export function hoge() {
  // overFunc(100);
  // overFunc(false);

  // hogeFunc(100);
  // hogeFunc(false);
}

function overFunc(val: number): void;
function overFunc(val: boolean): void;
function overFunc(val: any): void {
  if(typeof val === 'number') console.log(val + 3);
  if(typeof val === 'boolean') console.log(val ? 'true' : 'false');
}

function hogeFunc(val: number | boolean): void {
  if(typeof val === 'number') console.log(val + 3);
  if(typeof val === 'boolean') console.log(val ? 'true' : 'false');
}