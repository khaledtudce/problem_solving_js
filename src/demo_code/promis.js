const hasMetting = true;

const meeting = new Promise((resolve, reject) => {
  if (hasMetting) {
    resolve("succeed");
  } else reject("problem");
});

meeting
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);  
  });
