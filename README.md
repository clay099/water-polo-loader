# water-polo-loader

A simple React component that provides a water polo ball and some customizable loading animation. This loading animation runs for an infinite time period and is anticipated to be used when loading async data in an react application

## Animation Styles

```
AnimationStyles = "bounce" | "color" | "spin" | "grow"
```

## Available props

```
className: string (optional)
size: string [any CSS sizing property "10px", "1rem" etc] (optional)
animation: AnimationStyles OR AnimationStyles[] (optional)
```

## Using Component

To use the props with this component pass in the relevant props you want to use. All props are optional with a default "size" of 3rem & default "animation" of ["grow", "spin", "color"]

```
// your-component.js
import WaterPoloLoader from "water-polo-loader";


...
//use default props
<WaterPoloLoader />
...
```

![default example](examples/default.gif)

```

OR

...
//pass single animation
<WaterPoloLoader animation="color"/>
...
```

![color example](examples/color.gif)

```


OR

...
//pass multiple animation with size prop
<WaterPoloLoader animation={["color", "grow"]} size="5em" />
...
```

![color example](examples/color-grow.gif)

## Customize Component

To customize this component, pass in a class name to the `className` prop and style that class name in your custom CSS.

```

// your-component.js
import WaterPoloLoader from "water-polo-loader";

...
<WaterPoloLoader className="dummy" />
...

// your-component.css
.dummy {
color: white;
background-color: purple;
}

```
