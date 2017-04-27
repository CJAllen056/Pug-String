function createPugString(word) {
  if (word.length > 7) { return 'please try a shorter word' };

  const pugmoji = ':spinning-pug:'
      , spaces  = '      '
      , letters = {
    a: '01101001111110011001',
    b: '11101001111110011110',
    c: '01101001100010010110',
    d: '11101001100110011110',
    e: '11111000111110001111',
    f: '11111000111110001000',
    g: '01111000101110010110',
    h: '10011001111110011001',
    i: '11111',
    j: '00010001000110010110',
    k: '10011010110010101001',
    l: '10001000100010001111',
    m: '1000111011101011000110001',
    n: '10011101101110011001',
    o: '01101001100110010110',
    p: '11101001111010001000',
    q: '01101001100110100101',
    r: '11101001111010101001',
    s: '01111000011000011110',
    t: '1111100100001000010000100',
    u: '10011001100110010110',
    v: '1000110001010100101000100',
    w: '1010110101101010101001010',
    x: '10011001011010011001',
    y: '10011001111100011110',
    z: '11110001011010001111'
  };

  let lines     = ['', '', '', '', '']
    , pugString = '';

  for (let i of word) {
    const letterCode = letters[i.toLowerCase()]
        , regexTest  = new RegExp(`.{1,${letterCode.length/5}}`, 'g')
        , codeArray  = letterCode.match(regexTest);

    codeArray.forEach((c, i) => {
      lines[i] += `${c}0`
    });
  }
  
  for (let j of lines) {
    for (let k of j) {
      pugString += k === '1' ? pugmoji : spaces;
    }
    pugString += '\n';
  }
  return pugString;
}