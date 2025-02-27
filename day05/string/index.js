const coffee = "ice americano";

coffee.length; // 문자 길이
coffee.includes("ice"); // 역할:포함 여부, 결과값:boolean
coffee.repeat(5); // 역할:문자 반복, 결과값:string
coffee.replace("i", "a"); // 역할:바꾸기   , 결과값:string
coffee.replaceAll("i", "a"); // 역할:모두 바꾸기   , 결과값:string
coffee.slice(0, 5); // 역할:자르기(0~4)   , 결과값:string
coffee.indexOf("ri"); // 역할:몇번째 찾기   , 결과값:number
coffee.startsWith("ice"); // 역할:시작 여부     , 결과값:boolean
coffee.endsWith("z"); // 역할:끝 여부       , 결과값:boolean
coffee.toUpperCase(); // 역할:대문자화      , 결과값:string
coffee.toLocaleLowerCase(); // 역할:소문자화      , 결과값:string
coffee.split("am"); // 역할:찢기          , 결과값:arr
