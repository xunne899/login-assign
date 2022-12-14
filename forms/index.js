//caolan-forms
const forms = require("forms");
const fields = forms.fields;
const validators = forms.validators;
const widgets = forms.widgets;


//bootstrap properties
const bootstrapField = function (name, object) {
  if (!Array.isArray(object.widget.classes)) {
    object.widget.classes = [];
  }


    if (object.widget.classes.indexOf("form-control") === -1) {
      object.widget.classes.push("form-control", "mb-1");
    }
  

  var validationclass = object.value && !object.error ? "is-valid" : "";
  validationclass = object.error ? "is-invalid" : validationclass;
  if (validationclass) {
    object.widget.classes.push(validationclass);
  }

  var label = object.labelHTML(name);
  var error = object.error ? '<div class="invalid-feedback">' + object.error + "</div>" : "";

  var widget = object.widget.toHTML(name, object);
  return '<div class="form-group">' + label + widget + error + "</div>";
};

// create user form when update staff details
const createUserForm = () => {
    return forms.create({
      name: fields.string({
        required: true,
        errorAfterField: true,
  
      }),
      username: fields.string({
        required: true,
        errorAfterField: true,
  
      }),
      email: fields.string({
        required: true,
        errorAfterField: true,
        validators: [validators.email(), validators.maxlength(200)],
  
      }),
      role: fields.string({
        required: true,
        errorAfterField: true,
  
      }),
    });
  };


//create login form on login page
  const createLoginForm = () => {
    return forms.create({
      email: fields.string({
        required: true,
        errorAfterField: true,
        validators: [validators.email(), validators.maxlength(320)],
      }),
      password: fields.password({
        required: true,
        errorAfterField: true,
  
      }),
    });
  };


  // create form when register
  const createRegistrationForm = () => {
    return forms.create({
      name: fields.string({
        required: true,
        errorAfterField: true,
      }),
      username: fields.string({
        required: true,
        errorAfterField: true,
      }),
      role: fields.string({
        required: true,
        errorAfterField: true,
  
      }),
      email: fields.string({
        required: true,
        errorAfterField: true,
        validators: [validators.email(), validators.maxlength(320)],
  
      }),
      password: fields.password({
        required: true,
        errorAfterField: true,
  
      }),
      confirm_password: fields.password({
        required: true,
        errorAfterField: true,
        validators: [validators.matchField("password")],
      }),
    });
  };

  module.exports = {
    createRegistrationForm,
    createLoginForm,
    createUserForm,
    bootstrapField,
  };