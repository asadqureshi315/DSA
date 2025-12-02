const res = {
  firstName: "Asad",
  middleName: "",
  lastName: "Qureshi",
  interests: ["N/A", "-", "fitness", "upskilling"],
  location: {
    city: "Indore",
    country: "India",
    code: "-",
  },
};

const cleanObject = (obj) => {
  let count = 0;
  Object.keys(obj).forEach((key) => {
    // console.log(obj[key], typeof obj[key]);
    if (
      (typeof obj[key] == "string" && obj[key] == "N/A") ||
      obj[key] == "" ||
      obj[key] == "-"
    ) {
      delete obj[key];
      count += 1;
    } else if (typeof obj[key] == "object") {
      obj[key].forEach((itm) => {
        console.log(itm);
      });
    }
  });
  obj.deletedEntry = count;
  //   console.log(obj);
  return { count, obj };
};

const { count, obj: finalObj } = cleanObject(res);

// console.log(count, finalObj);
