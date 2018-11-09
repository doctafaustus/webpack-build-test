import newCSS from '../styles/test.scss';

export default function test() {
  console.log('test()');

  $('head').append(`<style>${newCSS}</style>`);
}