import { characters } from '../../src/plugins/js-foundation/02-destructuring';

describe('js-foundation/js-foundation/02-destructuring.ts', () => {

    test('characters should contain Flash, Superman, Batman', () => {


        expect(characters).toContain('Flash');
        expect(characters).toContain('Superman');

    })

    test('first character should be Flash and second Superman', () => {

        const [flash, superman] = characters;

        console.log(characters);

        expect(flash).toBe('Flash');
        expect(superman).toBe('Superman');

    })



})