# Emotion-Runtime-Speed-Comparison

A series of example repositories to compaire performance of different implementations of Emotion 10 and 11.

We have seperated Emotion 10 and 11 by if they use `css` or `className` to set styling.

## Results

TBC

## Methodology

- CRA using Typescript framework
- Install specific Emotion version to test
- Use `css=` or `className=` depending on what we are testing

- Using `App.tsx` we import a list of 100 elements.
- We hide/show of the list of elements that contain Emotion styles using `useEffect` and `useState`
- using React's `useEffect` we set a start

