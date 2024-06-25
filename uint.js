// TODO: Probably a lot more logicall will be to start counter from Number.MIN_SAFE_INTEGER
//       But let's start from ++0 (1) for now
let uintCounter = 0;//Number.MIN_SAFE_INTEGER;

function uint() {
  return ++uintCounter;
}

function uintDev() {
  const value = uint();

  if (value >= Number.MAX_SAFE_INTEGER) {
    throw new Error('uint function reached MAX_SAFE_INTEGER');
  }

  return value;
}

// TODO: Make conditional export based on ENV variable or some config value
// const exportFunction = (someVariable) ? uintDev : uint;

export default uintDev;
