
function capitalizeString(data) {
  return data.toUpperCase();
}

function reverseString(data) {
  return data.split('').reverse().join('');
}


function processData(input, processorFunction) {
  if (typeof processorFunction !== 'function') {
    console.error("Error: The processorFunction must be a function.");
    return;
  }
  
  const output = processorFunction(input);
  console.log(`Original: ${input}, Processed: ${output}`);
}


processData("hello world", capitalizeString); 
processData("hello world", reverseString);    
processData("hello world", "not a function"); 


const DataProcessorInterface = {
  process: (data) => {
    throw new Error("This method must be implemented by the object.");
  }
};

const UppercaseProcessor = {
  process: (data) => data.toUpperCase()
};


const LowercaseProcessor = {
  process: (data) => data.toLowerCase()
};


function runProcessor(data, processorObject) {
  if (typeof processorObject.process !== 'function') {
    console.error("Error: The object must have a 'process' method.");
    return;
  }

  const output = processorObject.process(data);
  console.log(`Original: ${data}, Processed: ${output}`);
}


runProcessor("Hello World", UppercaseProcessor);
runProcessor("Hello World", LowercaseProcessor);


const InvalidProcessor = {
  
  transform: (data) => data + "!"
};

runProcessor("Hello World", InvalidProcessor); 