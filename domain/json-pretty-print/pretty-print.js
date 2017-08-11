function prettyPrint(json) {
    const INDENTATION_WIDTH = 2;

    function printPadded(content, prefix, level, comma) {
        const padding = Array(level * INDENTATION_WIDTH).fill(' ').join('');
        let string = `${padding}${content}`;
        if (prefix) {
            string = `${padding}"${prefix}": ${content}`;
        }
        if (comma) {
            string += ',';
        }
        console.log(string);
    }

    function print(obj, prefix, level, comma) {
        if (Array.isArray(obj)) {
            printPadded('[', prefix, level);
            obj.forEach((item, index) => {
                print(item, '', level + 1, index !== obj.length - 1);
            });
            printPadded(']', null, level, comma);
            return;
        }
        if (typeof obj === 'object') {
            printPadded('{', prefix, level);
            const keys = Object.keys(obj);
            keys.forEach((key, index) => {
                print(obj[key], key, level + 1, index !== keys.length - 1);
            });
            printPadded('}', null, level, comma);
            return;
        }
        if (typeof obj === 'string') {
            printPadded(`"${obj}"`, prefix, level, comma);
            return;
        }
        printPadded(obj, prefix, level, comma);
    }
    print(json, '', 0, false);
}

prettyPrint({
  "hello": [{
      "_id": "5988946e45e52d60b33a25c7",
      "latitude": 50.087977,
      "longitude": 72.167197,
      "tags": [
        "nulla",
        "ullamco"
      ],
      "friends": [{
          "id": 0,
          "name": "Robinson Woods"
        },
        {
          "id": 1,
          "name": "Lottie Hogan"
        }
      ]
    },
    {
      "_id": "5988946ef6090217857d7b0f",
      "latitude": 47.460772,
      "longitude": 85.95137,
      "tags": [
        "aliqua",
        "nulla"
      ],
      "friends": [{
          "id": 0,
          "name": "Mamie Wyatt"
        },
        {
          "id": 1,
          "name": "Alejandra Mcdaniel"
        }
      ]
    }
  ]
});
