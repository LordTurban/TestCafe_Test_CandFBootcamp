import { t, Selector } from 'testcafe';
import home from './pages/home';

fixture `Getting Started`.page `https://www.google.com/`;

const search_box = Selector("input[name='q']")

test('Search something', async t => {
    await t
        .typeText(search_box, 'hi')
        .pressKey('enter')
        .wait(5000)

});

