import {classNames} from './classNames';

describe( 'classNames',() => {
    test('test', () => {
        expect(classNames('test')).toBe('test')
    })
    test('with mods', () => {
        expect(classNames('test', {focus: true, checked: true},)).toBe('test focus checked')
    })
    test('with mods and addition', () => {
        expect(classNames('test', {focus: true, checked: true}, ['class1 class2'])).toBe('test class1 class2 focus checked')
    })
})