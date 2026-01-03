export default function Normativ() {
  const name: string = "Jasmin";
  console.log(`Hello, ${name}`);

  function greet(name: string) {
    return `Hello, ${name}`;
  }

  const text: string = "welll ";
  const katta = text[0].toUpperCase() + text.slice(1);

  const age: number = 24;

  const sum = (a: number, b: number): number => {
    return a + b;
  };

  function isEven(num: number): boolean {
    if (num % 2 === 0) {
      console.log("True juft");
      return true;
    } else {
      console.log("True toq");
      return false;
    }
  }

  const trueIliFalse: boolean = true;

  function isAdult(age: number): boolean {
    if (age >= 18) {
      console.log(age, "<--18 dan katta");
      return true;
    } else {
      console.log("18 dan kickina -->", age);
      return false;
    }
  }

  const numbers: number[] = [87, 77, 59, 54];

  function firstNum(numbers2: number[]): number {
    return numbers2[0];
  }

  const obwiy: number = numbers.reduce((acc, res) => acc + res, 0);

  const user: { name: string; age: number } = {
    name: "Jass",
    age: 21,
  };

  const data: any = " World";
  let valueAny: any = "text";
  valueAny = 42;
  valueAny = [1, 2, 3];

  const value: unknown = "nmee";
  if (typeof value === "string") {
    console.log(value.length);
  } else {
    console.log("value string emas");
  }

  function isNumber(value: unknown): value is number {
    return typeof value === "number";
  }

  function logSms(mess: string): void {
    console.log(mess);
  }

  function printSum(a: number, b: number): void {
    console.log(a + b);
  }

  const res = logSms("Hello");

  function tError(): never {
    throw new Error("ubu hato");
  }

  function Loop(): never {
    while (true) {
      console.log("bezkonecniy loop");
    }
  }

  type Status = "success" | "error";

  function checkStatus(status: Status) {
    switch (status) {
      case "success":
        return "OK";
      case "error":
        return "FAIL";
      default:
        const _exhaustive: never = status;
        return _exhaustive;
    }
  }

  // Вызов функций с void вне JSX
  logSms("Hello, Void");
  printSum(57, 180);

  return (
    <div className="flex gap-4 flex-wrap">
      <div>{greet(name)}</div>
      <div>{katta}</div>
      <div>{age}</div>
      <div>{sum(8, 177)}</div>
      <div>{String(isEven(87))}</div>
      <div>{String(trueIliFalse)}</div>
      <div>{String(isAdult(7))}</div>
      <div>{numbers.join(", ")}</div>
      <div>{firstNum(numbers)}</div>
      <div>{obwiy}</div>
      <div>
        {user.name} {user.age}
      </div>
      <div>{data}</div>
      <div>{valueAny}</div>
      <div>{String(value)}</div>
      <div>{String(isNumber(value))}</div>
      <div>{checkStatus("success")}</div>
      {/* <div>{tError()}</div> */}
      {/* <div>{Loop()}</div> */}
    </div>
  );
}
