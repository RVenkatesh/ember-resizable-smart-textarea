Basic Usage
------------------------------------------------------------------------------

To use the smart textarea component in your application, just add the below line.
```
<ResizableSmartTextarea @value="Text value of the textarea" />
```

Value Binding
------------------------------------------------------------------------------

You can also bind the value attribute to your parent component variables as shown below
```
<ResizableSmartTextarea @value={{this.varToBeBound}} />
```

Adding Listener
------------------------------------------------------------------------------

While passing plain text, you might want to pass a listener to be triggered when the text changes. To do this simply pass the listener function to the `onChange` argument
```
<ResizableSmartTextarea @value="Text value of the textarea" @onChange={{this.onChangeListener}}/>
```
> Note:
The listener function gets value as the first argument. You can access it in your parent components as shown below.
```
@action
onChangeListener(value) {
    // Do something with the value
}
```

Highlighting given text within the textarea
------------------------------------------------------------------------------

If you want to highlight the given word inside the textarea, you can do so by passing the `highlightText` argument as shown below
```
<ResizableSmartTextarea @value="Text to be highlighted" @highlightText="highlight"/>
```

Arguments
------------------------------------------------------------------------------
| Arg | Default value | Description |
| --- | --- | --- |
| value | ```''``` | Value of the textarea field |
| onChange |  | Listener function for value change. The first argument to the function would be the value |
| highlightText | ```''``` | The string to be highlighted inside the textarea |