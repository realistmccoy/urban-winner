const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";

  if (Validator.isEmpty(data.school)) {
    errors.school = "School field is require";
  }
  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Degree field is require";
  }
  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Field of study field is require";
  }
  if (Validator.isEmpty(data.from)) {
    errors.from = "from date field is require";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
