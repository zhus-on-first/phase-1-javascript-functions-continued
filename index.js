// first set
function saturdayFun(activity) {
  if (activity === undefined) {
    return "This Saturday, I want to roller-skate!";
  } else {
    return "This Saturday, I want to" + " " + activity + "!";
  }
}

// second set
function mondayWork(activity) {
  if (activity === undefined) {
    return "This Monday, I will go to the office.";
  } else {
    return "This Monday, I will" + " " + activity + ".";
  }
}

//set 3
function wrapAdjective(special) {
  return function (description) {
    return "You are " + special + description + special + "!";
  };
}
