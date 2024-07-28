const input1 = document.getElementById("input");
const result = document.getElementById("result");
const input2 = document.getElementById("input2");
const result2 = document.getElementById("result2");
const input3 = document.getElementById("input3");
const result3 = document.getElementById("result3");
const input5 = document.getElementById("input5");
const result5 = document.getElementById("result5");
const input6 = document.getElementById("input6");
const result6 = document.getElementById("result6");
const input7 = document.getElementById("input7");
const result7 = document.getElementById("result7");
const input8 = document.getElementById("input8");
const result8 = document.getElementById("result8");
const input9 = document.getElementById("input9");
const result9 = document.getElementById("result9");
const input10 = document.getElementById("input10");
const result10 = document.getElementById("result10");
const input11 = document.getElementById("input11");
const result11 = document.getElementById("result11");
const input12 = document.getElementById("input12");
const result12 = document.getElementById("result12");
const input13 = document.getElementById("input13");
const result13 = document.getElementById("result13");

//----------------  DECIMAL TO BINARY ----------------//

function extractBinary(n) {
  let binArray = [];
  if (n == 0) {
    binArray.push(0);
  } else {
    while (n > 0) {
      let rem = n % 2;
      if (rem == 0) {
        binArray.push(`<span style="color:#0053ec;">${rem}</span>`);
      } else {
        binArray.push(`<span style="color:#f10962;">${rem}</span>`);
      }
      n = Math.floor(n / 2);
    }
  }
  return binArray.reverse().join("");
}

function decimalToBinary() {
  const value = input1.value;
  const nums = parseInt(Number(value));
  input.value = value;
  if (nums > 10000000) {
    alert("Allowed numbers between 0 to 100000");
    input.value = value.toString().slice(0, -1);
    return;
  }

  if (value.length > 0) {
    result.style.backgroundColor = "";
    result.innerHTML = `
    <div class="number">${extractBinary(nums)}</div>
    <div class="base">
    <p class="head">Conversion in base</p>
    <p>(${nums})<sub>10</sub> = (${extractBinary(nums)})<sub>2</sub></p>
    </div>`;
  } else {
    result.innerHTML = "";
    result.style.backgroundColor = "";
  }
}

input1.addEventListener("input", decimalToBinary);

//---------------- BINARY TO DECIMAL ----------------//

function extractDecimal(nums) {
  let length = nums.length - 1;
  let deciNum = 0;

  for (let i = length; i >= 0; i--) {
    deciNum += parseInt(nums[length - i]) * Math.pow(2, i);
  }

  return deciNum;
}

function binaryToDecimal() {
  const value = input2.value;
  let nums = value.split("").filter((e) => e == "0" || e == "1"); // corrected filter for binary digits
  input2.value = nums.join("");

  if (value.length > 0) {
    if (nums.length !== 0) {
      result2.style.backgroundColor = "";
      result2.innerHTML = `
    <div class="number">${extractDecimal(nums)}</div>
    <div class="base">
    <p class="head">Conversion in base</p>
    <p>(${value})<sub>2</sub> = (${extractDecimal(nums)})<sub>10</sub></p>
    </div>`;
    }
  } else {
    result2.innerHTML = "";
    result2.style.backgroundColor = "";
  }
}

input2.addEventListener("input", binaryToDecimal);

//----------------  DECIMAL TO OCTA ----------------//

function extractOcta(n) {
  let binArray = [];
  if (n == 0) {
    binArray.push(0);
  } else {
    while (n > 0) {
      let rem = n % 8;
      if (rem == 0) {
        binArray.push(`<span style="color:#0053ec;">${rem}</span>`);
      } else {
        binArray.push(`<span style="color:#f10962;">${rem}</span>`);
      }
      n = Math.floor(n / 8);
    }
  }
  return binArray.reverse().join("");
}

function decimalToOcta() {
  const value = input3.value;
  const nums = parseInt(Number(value));
  input3.value = value;
  if (nums > 10000000) {
    alert("Allowed numbers between 0 to 100000");
    input3.value = value.toString().slice(0, -1);
    return;
  }

  if (value.length > 0) {
    result3.style.backgroundColor = "";
    result3.innerHTML = `
    <div class="number">${extractOcta(nums)}</div>
    <div class="base">
    <p class="head">Conversion in base</p>
    <p>(${value})<sub>8</sub> = (${extractOcta(nums)})<sub>10</sub></p>
    </div>`;
  } else {
    result3.innerHTML = "";
    result3.style.backgroundColor = "";
  }
}

input3.addEventListener("input", decimalToOcta);

//---------------- OCTA TO DECIMAL ----------------//

function extractOctaDecimal(nums) {
  let length = nums.length - 1;
  let deciNum = 0;

  for (let i = length; i >= 0; i--) {
    deciNum += parseInt(nums[length - i]) * Math.pow(8, i);
  }

  return deciNum;
}

function octaToDecimal() {
  const value = input5.value;
  let nums = value.split("").filter((e) => e >= "0" && e <= "7"); // corrected filter for octal digits
  input5.value = nums.join("");

  if (value.length > 0) {
    if (nums.length !== 0) {
      result5.style.backgroundColor = "";
      result5.innerHTML = `
    <div class="number">${extractOctaDecimal(nums)}</div>
    <div class="base">
    <p class="head">Conversion in base</p>
    <p>(${value})<sub>8</sub> = (${extractOctaDecimal(nums)})<sub>10</sub></p>
    </div>`;
    }
  } else {
    result5.innerHTML = "";
    result5.style.backgroundColor = "";
  }
}

input5.addEventListener("input", octaToDecimal);

//----------------  DECIMAL TO HEXA ----------------//

function extractHexa(n) {
  let binArray = [];
  if (n == 0) {
    binArray.push(0);
  } else {
    while (n > 0) {
      let rem = n % 16;
      if (rem < 10) {
        binArray.push(`<span style="color:#0053ec;">${rem}</span>`);
      } else {
        let hexChar = String.fromCharCode(55 + rem); // converts to A-F for values 10-15
        binArray.push(`<span style="color:#f10962;">${hexChar}</span>`);
      }
      n = Math.floor(n / 16);
    }
  }
  return binArray.reverse().join("");
}

function decimalToHexa() {
  const value = input6.value;
  const nums = parseInt(Number(value));
  input6.value = value;
  if (nums > 10000000) {
    alert("Allowed numbers between 0 to 100000");
    input6.value = value.toString().slice(0, -1);
    return;
  }

  if (value.length > 0) {
    result6.style.backgroundColor = "";
    result6.innerHTML = `
    <div class="number">${extractHexa(nums)}</div>
    <div class="base">
    <p class="head">Conversion in base</p>
    <p>(${value})<sub>10</sub> = (${extractHexa(nums)})<sub>16</sub></p>
    </div>`;
  } else {
    result6.innerHTML = "";
    result6.style.backgroundColor = "";
  }
}

input6.addEventListener("input", decimalToHexa);

//---------------- HEXA TO DECIMAL ----------------//

function extractHexaDecimal(nums) {
  let length = nums.length - 1;
  let deciNum = 0;

  for (let i = length; i >= 0; i--) {
    deciNum += parseInt(nums[length - i], 16) * Math.pow(16, i); // corrected to parse hexadecimal digits correctly
  }

  return deciNum;
}

function HexaToDecimal() {
  const value = input7.value;
  let nums = value.split("").filter((e) => /[0-9A-Fa-f]/.test(e)); // corrected filter for hexadecimal digits
  input7.value = nums.join("");

  if (value.length > 0) {
    if (nums.length !== 0) {
      result7.style.backgroundColor = "";
      result7.innerHTML = `
    <div class="number">${extractHexaDecimal(nums)}</div>
    <div class="base">
    <p class="head">Conversion in base</p>
    <p>(${value})<sub>16</sub> = (${extractHexaDecimal(nums)})<sub>10</sub></p>
    </div>`;
    }
  } else {
    result7.innerHTML = "";
    result7.style.backgroundColor = "";
  }
}

input7.addEventListener("input", HexaToDecimal);

//---------------- OCTA TO HEXA ----------------//

function extractOctaToHexa(nums) {
  const decimalValue = extractOctaDecimal(nums);
  return extractHexa(decimalValue);
}

function octaToHexa() {
  const value = input8.value;
  let nums = value.split("").filter((e) => e >= "0" && e <= "7"); // corrected filter for octal digits
  input8.value = nums.join("");

  if (value.length > 0) {
    if (nums.length !== 0) {
      result8.style.backgroundColor = "";
      result8.innerHTML = `
    <div class="number">${extractOctaToHexa(nums)}</div>
    <div class="base">
    <p class="head">Conversion in base</p>
    <p>(${value})<sub>8</sub> = (${extractOctaToHexa(nums)})<sub>16</sub></p>
    </div>`;
    }
  } else {
    result8.innerHTML = "";
    result8.style.backgroundColor = "";
  }
}

input8.addEventListener("input", octaToHexa);

//---------------- HEXA TO OCTAL ----------------//

function extractHexaToOcta(nums) {
  const decimalValue = extractHexaDecimal(nums);
  return extractOcta(decimalValue);
}

function HexaToOcta() {
  const value = input9.value;
  let nums = value.split("").filter((e) => /[0-9A-Fa-f]/.test(e)); // corrected filter for hexadecimal digits
  input9.value = nums.join("");

  if (value.length > 0) {
    if (nums.length !== 0) {
      result9.style.backgroundColor = "";
      result9.innerHTML = `
    <div class="number">${extractHexaToOcta(nums)}</div>
    <div class="base">
    <p class="head">Conversion in base</p>
    <p>(${value})<sub>16</sub> = (${extractHexaToOcta(nums)})<sub>8</sub></p>
    </div>`;
    }
  } else {
    result9.innerHTML = "";
    result9.style.backgroundColor = "";
  }
}

input9.addEventListener("input", HexaToOcta);

//---------------- BINARY TO OCTAL ----------------//

function binaryToOcta() {
  const value = input10.value;
  let nums = value.split("").filter((e) => e == "0" || e == "1"); // corrected filter for binary digits
  input10.value = nums.join("");

  if (value.length > 0) {
    if (nums.length !== 0) {
      const decimalValue = extractDecimal(nums);
      result10.style.backgroundColor = "";
      result10.innerHTML = `
    <div class="number">${extractOcta(decimalValue)}</div>
    <div class="base">
    <p class="head">Conversion in base</p>
    <p>(${value})<sub>2</sub> = (${extractOcta(decimalValue)})<sub>8</sub></p>
    </div>`;
    }
  } else {
    result10.innerHTML = "";
    result10.style.backgroundColor = "";
  }
}

input10.addEventListener("input", binaryToOcta);

//---------------- OCTAL TO BINARY ----------------//

function octaToBinary() {
  const value = input11.value;
  let nums = value.split("").filter((e) => e >= "0" && e <= "7"); // corrected filter for octal digits
  input11.value = nums.join("");

  if (value.length > 0) {
    if (nums.length !== 0) {
      const decimalValue = extractOctaDecimal(nums);
      result11.style.backgroundColor = "";
      result11.innerHTML = `
    <div class="number">${extractBinary(decimalValue)}</div>
    <div class="base">
    <p class="head">Conversion in base</p>
    <p>(${value})<sub>8</sub> = (${extractBinary(decimalValue)})<sub>2</sub></p>
    </div>`;
    }
  } else {
    result11.innerHTML = "";
    result11.style.backgroundColor = "";
  }
}

input11.addEventListener("input", octaToBinary);

//---------------- BINARY TO HEXA ----------------//

function binaryToHexa() {
  const value = input12.value;
  let nums = value.split("").filter((e) => e == "0" || e == "1"); // corrected filter for binary digits
  input12.value = nums.join("");

  if (value.length > 0) {
    if (nums.length !== 0) {
      const decimalValue = extractDecimal(nums);
      result12.style.backgroundColor = "";
      result12.innerHTML = `
    <div class="number">${extractHexa(decimalValue)}</div>
    <div class="base">
    <p class="head">Conversion in base</p>
    <p>(${value})<sub>2</sub> = (${extractHexa(decimalValue)})<sub>16</sub></p>
    </div>`;
    }
  } else {
    result12.innerHTML = "";
    result12.style.backgroundColor = "";
  }
}

input12.addEventListener("input", binaryToHexa);

//---------------- HEXA TO BINARY ----------------//

function HexaToBinary() {
  const value = input13.value;
  let nums = value.split("").filter((e) => /[0-9A-Fa-f]/.test(e)); // corrected filter for hexadecimal digits
  input13.value = nums.join("");

  if (value.length > 0) {
    if (nums.length !== 0) {
      const decimalValue = extractHexaDecimal(nums);
      result13.style.backgroundColor = "";
      result13.innerHTML = `
    <div class="number">${extractBinary(decimalValue)}</div>
    <div class="base">
    <p class="head">Conversion in base</p>
    <p>(${value})<sub>16</sub> = (${extractBinary(
        decimalValue
      )})<sub>2</sub></p>
    </div>`;
    }
  } else {
    result13.innerHTML = "";
    result13.style.backgroundColor = "";
  }
}

input13.addEventListener("input", HexaToBinary);

let flag = 0;
const menu = document.querySelector(".menu");
const menuBar = document.getElementById("menu-bar");
const link = document.querySelector(".links");
const links = document.querySelectorAll(".link-option");
const mains = document.querySelectorAll(".main");
const allInput = document.querySelectorAll(".input");

allInput.forEach((input) => {
  const closeX = document.createElement("span");
  closeX.addEventListener("click", () => {
    input.value = "";
    input.parentElement.parentElement.children[2].innerHTML = "";
    input.parentElement.removeChild(closeX);
  });
  input.addEventListener("input", () => {
    if (input.value.length > 0) {
      closeX.innerHTML = "&times";
      closeX.className = "close-x";
      input.parentElement.appendChild(closeX);
    } else {
      input.parentElement.removeChild(closeX);
    }
    document.body.style.background = getRandomAttractiveGradient();
  });
});

let stopFlag = 0;
function removeLinks() {
  stopFlag++;
  if (stopFlag === 1) {
    menuBar.checked = false;
    document.removeEventListener("click", removeLinks);
  } else {
    stopFlag = 0;
  }
}

link.addEventListener("click", (event) => event.stopPropagation());

menu.addEventListener("click", (event) => {
  stopFlag = 1;
  event.stopPropagation();
  document.addEventListener("click", removeLinks);
  flag++;
  if (flag === 1) {
    link.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200 });
    link.style.background = getRandomAttractiveGradient();
  } else {
    flag = 0;
  }
});

mains[0].classList.add("active");

links.forEach((linkOption, index) => {
  linkOption.addEventListener("click", (event) => {
    mains.forEach((main, mainIndex) => {
      if (mainIndex === index) {
        menu.click();
        main.classList.add("spin");
        main.style.display = "block";
        main.children[1].focus();
        document.body.style.background = getRandomAttractiveGradient();
      } else {
        main.classList.remove("spin");
        main.style.display = "none";
      }
    });
  });
});

function getRandomAttractiveHexColor() {
  const r = Math.floor(Math.random() * 128) + 64; // 64 to 191
  const g = Math.floor(Math.random() * 128) + 64; // 64 to 191
  const b = Math.floor(Math.random() * 128) + 64; // 64 to 191
  return `#${((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)
    .padStart(6, "0")}`;
}

function getRandomAttractiveGradient() {
  const color1 = getRandomAttractiveHexColor();
  const color2 = getRandomAttractiveHexColor();
  return `linear-gradient(to right, ${color1}, ${color2})`;
}

document.body.style.background = getRandomAttractiveGradient();
link.style.background = getRandomAttractiveGradient();
