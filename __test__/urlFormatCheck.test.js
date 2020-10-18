import { urlFormatCheck } from '../src/client/js/urlFormatChecker.js'

describe('Check URL Validity', () => {
    test('URL should return true with "http://" as prefix', () => {
        const input1 = 'http://www.udacity.com';
        expect(urlFormatCheck(input1)).toBe(true);
    });
    test('URL should return true with "https://" as prefix', () => {
        const input2 = 'https://www.udacity.com';
        expect(urlFormatCheck(input2)).toBe(true);
    });
    test('URL should return false with non-"http://" or "https://" prefix', () =>{
        const input3 = 'login.udacity.com';
        expect (urlFormatCheck(input3)).toBe(false);
    });
    test('URL should return false with space character in URL', () => {
        const input4 = 'https://www.uda city.com';
        expect(urlFormatCheck(input4)).toBe(false);
    });
})