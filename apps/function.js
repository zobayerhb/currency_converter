// Alert check

const showAlert = (msg, type = "danger") => {
  return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button data-dismiss="alert" class="btn btn-close"></button></p>`;
};
