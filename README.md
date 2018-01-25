# Print Component
    Pirnt your component!
## Arguments

| Name | Type | Default | Description |
| :- | :- | :- | :- |
| singlePage | boolean | | Add a `react-print-single` class to print `<div>`

## Example Usage

1. Add `<Print />` Element to your root element

```jsx

...

render() {
    return (
        <div>
            <PrintComponent />
            <div className="main-root"></div>
        </div>
    );
}

...

```

2. Use static functions to print your components.
```js
import { PrintComponent } from 'react-print-component';

export class TestComponent() {

    ...

    onClickPrint() {
        //Which component should render
        PrintComponent.SetPrintContent(this.render());

        ...
        do something
        ...

        //Call this method to print
        PrintComponent.Print();
    }

    ...
}
```

3. Write print style in `@media`
```css
    @media print {
        
        ...
        
        h1 {}
        h2 {}
        button {}
        input[type=text] {}

        ...
    }
```
