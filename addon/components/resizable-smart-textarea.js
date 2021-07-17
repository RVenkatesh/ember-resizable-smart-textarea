import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { later } from '@ember/runloop';

function formatText(text = '', highlightText = '') {
    let escapedHighlightTxt = highlightText.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
    let regex = new RegExp(escapedHighlightTxt, 'gi');
    return text.replace(regex, (match) => `<mark>${match}</mark>`);
}

function htmlizeLineBreaks(text) {
    return text.replace(/\r?\n|\r/g, () => `<br/>`);
}

export default class ResizableSmartTextareaComponent extends Component {
    @tracked __value = this.args.value || '';
    get formattedValue() {
        if (this.args.highlightText) {
            let htmlText = formatText(this.__value, this.args.highlightText);
            return htmlizeLineBreaks(htmlText);
        } else {
            return this.__value;
        }
    }

    resizeTextarea() {
        later(
            this,
            () => {
                this.$textArea.style.height = 'auto';
                this.$textArea.style.height = `${this.$textArea.scrollHeight}px`;
            },
            0
        );
    }

    @action
    onChange() {
        this.__value = this.$textArea.value;
        this.resizeTextarea();
        // Emit on change event
        console.log(this.args);
        this.args.onChange && this.args.onChange(this.__value);
    }
    @action
    textFieldInserted(element) {
        this.$textArea = element;
        this.resizeTextarea();
    }
    @action
    highlightLayerInserted(element) {
        this.$highlightLayer = element;
    }
}
