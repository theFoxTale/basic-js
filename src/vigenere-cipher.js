const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  checkInputValues() {
    if (!this.message || !this.key) {
      throw new Error('Incorrect arguments!');
    } else {
      this.message = this.message.toUpperCase();
      this.key = this.key.toUpperCase();
    }
  }

  constructor(direct = true) {
    this.isDirect = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    this.message = message;
    this.key = key;
    this.checkInputValues();
    return this.vigenereProcess('encrypt');
  }

  decrypt(message, key) {
    this.message = message;
    this.key = key;
    this.checkInputValues();
    return this.vigenereProcess('decrypt');
  }

  vigenereProcess(type) {
    let keyIterator = 0;
    const machineMessage = [];
    const alphabetLength = this.alphabet.length;

    for (let i = 0; i < this.message.length; i++) {
      const item = this.message[i];
      const itemIndex = this.alphabet.indexOf(item);
      if (itemIndex > -1) {
        const keyChar = this.key[keyIterator % this.key.length];
        const keyIndex = this.alphabet.indexOf(keyChar);

        const newIndex = (type === 'encrypt')
            ? (itemIndex + keyIndex) % alphabetLength
            : (itemIndex - keyIndex + alphabetLength) % alphabetLength;

        machineMessage.push(this.alphabet[newIndex]);
        keyIterator++;
      } else {
        machineMessage.push(item);
      }
    }

    return this.isDirect ? machineMessage.join('') : machineMessage.reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
