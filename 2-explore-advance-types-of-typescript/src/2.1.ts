let value: any = "Hello";
let lengthOfValue = (value as string).length;
console.log(lengthOfValue);

const kgToGm = (value: string | number): number | string | undefined => {
  if (typeof value === "string") {
    const convertedValue = parseFloat(value) * 1000;
    return convertedValue;
  }
  if (typeof value === "number") {
    const convertedValue = value * 1000;
    return convertedValue;
  }
};

const result1 = kgToGm(1) as number;
const result2 = kgToGm("1.2") as string;

console.log("Number :", { result1 });
console.log("String :", { result2 });
