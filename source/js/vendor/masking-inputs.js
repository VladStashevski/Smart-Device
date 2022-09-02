[].forEach.call(
  exportdocument.querySelectorAll('input[type="tel"]'),
  function (input) {
    let keyCode;
      function mask(event) {
      // eslint-disable-next-line no-unused-expressions
      event.keyCode && (keyCode = event.keyCode);
      // eslint-disable-next-line no-invalid-this
      let pos = this.selectionStart;
      // eslint-disable-next-line curly
      if (pos < 3) event.preventDefault();
      // eslint-disable-next-line one-var
      let matrix = '+7 (___) ___ ____',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        // eslint-disable-next-line no-invalid-this
        val = this.value.replace(/\D/g, ''),
        // eslint-disable-next-line camelcase
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      // eslint-disable-next-line camelcase
      i = new_value.indexOf('_');
      // eslint-disable-next-line eqeqeq
      if (i != -1) {
        // eslint-disable-next-line no-unused-expressions
        i < 5 && (i = 3);
        // eslint-disable-next-line camelcase
        new_value = new_value.slice(0, i);
      }
      let reg = matrix
          // eslint-disable-next-line no-invalid-this
          .substr(0, this.value.length)
          .replace(/_+/g, function (a) {
            return '\\d{1,' + a.length + '}';
          })
          .replace(/[+()]/g, '\\$&');
      reg = new RegExp('^' + reg + '$');
      if (
        // eslint-disable-next-line no-invalid-this
        !reg.test(this.value) ||
      // eslint-disable-next-line no-invalid-this
      this.value.length < 5 ||
      (keyCode > 47 && keyCode < 58)
      )
        // eslint-disable-next-line no-invalid-this, camelcase
        this.value = new_value;
      // eslint-disable-next-line eqeqeq, no-invalid-this
      if (event.type == 'blur' && this.value.length < 5) this.value = '';
    }

    input.addEventListener('input', mask, false);
    input.addEventListener('focus', mask, false);
    input.addEventListener('blur', mask, false);
    input.addEventListener('keydown', mask, false);
  }
);

export default {forEach};
