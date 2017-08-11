function debounce(func, wait, options) {
  const defaultOptions = {
    leading: false,
  };
  options = Object.assign(defaultOptions, options);
  let timer = null;

  return function () {
    if (timer) {
      window.clearTimeout(timer);
    }
    if (options.leading && !timer) {
      func();
    }
    timer = window.setTimeout(() => {
      if (!options.leading) {
        func();
      }
      timer = null;
    }, wait);
  };
}

function print() {
  console.log('CLICK', Date.now());
}

const debouncedPrint = debounce(print, 2000, { leading: true });
document.addEventListener('click', debouncedPrint);
