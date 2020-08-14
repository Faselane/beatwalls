# Properties and Functions

Before we dive in, have some glossary
The line `height = 2` consists of 2 elements.
- Property: `height`
- Expressions: `2`

This line tells the program that the height of all walls should be changed to 2.
Often however more flexibility is needed.

It internally uses [Math parser](http://mathparser.org) so you can use everything there that is handled with Expressions.
Here are some things that stood out useful or have something special to them.

## Math Expressions

Beatwalls supports math expressions. 

```
# Creates a wall thats 50 units high
10 wall
    height = 2 + 3 * 4 ^ 5
    height += 2
    height *= 3
    height ^= 4
```

## Functions

Functions in Beatwalls take some numbers as input and return one. 
They can and should not assign properties. 

Beatwalls features [build-in](https://www.objecthunter.net/exp4j/#Built-in_functions)
functions for more advanced use cases.

::: tip
i is a double of 0..1 and tells how many of the walls have been affected.
When you have a wallstructure with 4 beats, i will be 0 on the first wall, 0.25 on the second, etc...
:::

```
10 line
    p1 = 10,0
    p2 = 4,0,2
    width = abs(-2)         # -> 2
    height = round(i,1)+1   # -> 1 for the first half, 2 for the second
```

They have also been enhanced by some functions I found lacking.
- all easing methods [here](https://easings.net/)
- random Functions
- switch, to switch between mutliple values 

```
10 wall
    height = easeInSin(0,20)
    height += random(-2,2)
    height *= switch2(1,2) # you need to have the argument size here atm, e.g. switch3(1,3,4)
```

::: danger
Not all properties that are used to __create__ wallstructures do not have access to easing functions. 
You can only use easing functions on properties that are used to __change__ existing wallstructures or some custom ones. Best to try it out.
:::

## Constants

Constants can be used just like any Variable. There are some build in Functions like `pi, e, true, false`.
User-defined constants can also be created with the keyword `const`.

```
const offset = 20
10 wall
    height = offset + 10
    y += sin(i*2* PI)
```

## Beatwalls specific Elements

Properties are visible to each other, so you can reference them.

```
10 wall
    height = width * 2
```

There are also some predefined variables to use. 
- references the current wall Properties`wall{x/y/z/width/height/duration}` 
- `i` -> 0 - 1 on the proggress of how many walls have been created.

```
10 wall
    height = sin(i*pi)
```

::: danger
Be cautions with `i` and `wall{x/y/z/width/height/duration}`.
Again, not all properties that are used to __create__ wallstructures do not have access to easing functions. 
You can only use easing functions on properties that are used to __change__ existing wallstructures.
:::
