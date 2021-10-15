# Style guidelines

## General variables
1. Fonts <br>
The two font family that will be used for the whole project is set as variables that can be use from any place (including in CSS files):
```
--font-body: 'Rubik', sans-serif;
--font-header: 'Merriweather', serif;
```
**Usage**
```
heading {
   font-family: var(--font-header);
}
```

2. Styles <br>
* General styles such as typography, layout or breakpoints are placed in `styles/cores/` directory, for components, they are in `styles/components`and are all included in `styles/styles.scss`.<br>
* Styles for pages should be placed in the `styles/modules/` directory.

## Breakpoints and responsive
When you create responsive layout, use `@include mq(device)` to have a unified breakpoints.<br>

**Usage:** <br>
1. Import `mq.scss` to the stylesheet.
2. To use min-width, simply write `mq(breakpoint)`.<br>
To use max-width, use `mq($until: breakpoint)`.

**Example:** 
```
@import '../cores/mq';

anything {
   font-size: 12px;

   @include mq(desktop) {
      font-size: 16px;
   }
}
```
The breakpoint corresponding to each device is as following:
```
mobile:  320px,
tablet:  740px,
desktop: 1025px,
wide:    1440px,
xwide:   1600px,
xxwide:  1920px
```
