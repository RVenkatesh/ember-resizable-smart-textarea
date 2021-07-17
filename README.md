@love-open-source/ember-resizable-smart-textarea
==============================================================================

This addon provides a textarea component, that resizes when the text inside it changes. Additionally it also highlights the given string inside the textarea.


Demo
------------------------------------------------------------------------------


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.20 or above
* Ember CLI v3.20 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install @love-open-source/ember-resizable-smart-textarea
```


Usage
------------------------------------------------------------------------------

To use the smart textarea component in your application, just add the below line. 
```
<ResizableSmartTextarea @value={{this.value}} @highlightText="highlight"/>
```

Arguments
------------------------------------------------------------------------------
| Arg | Default value | Description |
| --- | --- | --- |
| value | ```''``` | Value of the textarea field |
| onChange |  | Listener function for value change. The first argument to the function would be the value |
| highlightText | ```''``` | The string to be highlighted inside the textarea |

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
