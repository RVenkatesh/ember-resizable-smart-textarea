import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import fillIn from '@ember/test-helpers/dom/fill-in';
import typeIn from '@ember/test-helpers/dom/type-in';

module('Integration | Component | resizable-smart-textarea', function (hooks) {
    setupRenderingTest(hooks);

    const selectorText = '[data-test-textareaField]',
        selectorHighlight = '[data-test-highlightLayer]';

    test('it renders', async function (assert) {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.set('myAction', function(val) { ... });

        await render(hbs`<ResizableSmartTextarea />`);

        assert.dom(this.element).hasText('');
        assert.dom(selectorText).exists();
    });

    test('it displays value in textarea and highlightLayer', async function (assert) {
        await render(hbs`<ResizableSmartTextarea @value="Text Value"/>`);

        assert.dom(selectorText).hasValue('Text Value');
        assert.dom(selectorHighlight).hasText('Text Value');
    });

    test('it binds value', async function (assert) {
        this.value = 'Text Value';
        await render(hbs`<ResizableSmartTextarea @value={{this.value}}/>`);
        assert.dom(selectorText).hasValue('Text Value', 'it binds value one way');

        await fillIn(selectorText, 'Edited text');
        assert.strictEqual(this.value, 'Edited text', 'it binds value two way');
    });

    test('it emits onChange', async function (assert) {
        assert.expect(5);
        this.set('onChange', (value) => {
            this.value = value;
            assert.true(true, `It calls the callback after typing "${value}"`);
        });
        await render(hbs`<ResizableSmartTextarea @onChange={{this.onChange}}/>`);
        await typeIn(selectorText, 'Edit');

        assert.strictEqual(this.value, 'Edit', 'The value is typed');
    });

    test('it highlights the given text', async function (assert) {
        await render(hbs`<ResizableSmartTextarea @value="Text to be highlighted" @highlightText="highlight"/>`);
        assert.dom(selectorHighlight).exists();
        assert.dom('mark').hasText('highlight');
    });
});
