# React Projects

This repo is made of 6 projects:

1. [**Food Delivery App**](#food): A food delivery app to understand React Framer Motion basics.
2. [**Star Wars Info**](#starwars): A web app about Star Wars to understand React Query basics.
3. [**Skeleton Screens**](#skeleton): A small project to learn how to generate content placeholders with React.
4. [**Material Note**](#materialnote): A note-taking app to discover Material-UI framework.
5. [**Testing React App**](#testing): A simple project using React Testing Library.
6. [**My Component Library**](#designsystem): An introduction to design systems with styled-components, React Spring and Storybook.

## <a name="food"></a>1) Food Delivery App

A food delivery app to understand React Framer Motion basics.

[See food-delivery folder](https://github.com/solygambas/react-projects/tree/main/food-delivery)

<p align="center">
    <a href="https://github.com/solygambas/react-projects/tree/main/food-delivery">
        <img src="food-delivery/screenshot.png">
    </a>
</p>

### Features

- setting up a React project with Framer Motion.
- animating elements, handling initial animation state and transition options.
- creating hover animations with whileHover.
- structuring code and leveraging inheritance with variants.
- generating keyframes and repeating animations with yoyo.
- adding animations between screens with AnimatePresence.
- building a modal animation and playing with an inline SVG.
- making a loader and shifting between predefined animations with useCycle.
- enabling draggable elements with drag.

Based on [Framer Motion (for React)](https://www.youtube.com/watch?v=2V1WK-3HQNk&list=PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i&index=1) by Shaun Pelling - The Net Ninja (2020).

## <a name="starwars"></a>2) Star Wars Info

A web app about Star Wars to understand React Query basics.

[See star-wars folder](https://github.com/solygambas/react-projects/tree/main/star-wars)

<p align="center">
    <a href="https://github.com/solygambas/react-projects/tree/main/star-wars">
        <img src="star-wars/screenshot.png">
    </a>
</p>

### Features

- setting up a React project with React Query 3.
- using QueryClientProvider as a wrapper.
- fetching data from Swapi with useQuery.
- handling query variables and pagination with keepPreviousData.
- debugging with React Query Devtools.

Based on [React Query Tutorial](https://www.youtube.com/watch?v=x1rQ61otgtU&list=PL4cUxeGkcC9jpi7Ptjl5b50p9gLjOFani) by Shaun Pelling - The Net Ninja (2020).

## <a name="skeleton"></a>3) Skeleton Screens

A small project to learn how to generate content placeholders with React.

[See skeleton-screens folder](https://github.com/solygambas/react-projects/tree/main/skeleton-screens)

<p align="center">
    <a href="https://github.com/solygambas/react-projects/tree/main/skeleton-screens">
        <img src="skeleton-screens/screenshot.png">
    </a>
</p>

### Features

- fetching dummy data from JSON Placeholder API.
- creating and styling a base skeleton component for title, text, avatar and thumbnail.
- building a skeleton template for loading articles and loading profile.
- handling light and dark themes.
- adding a shimmer animation.

Based on [React Skeleton Screen Tutorial](https://www.youtube.com/watch?v=cg_tmJBisp8&list=PL4cUxeGkcC9i6bZhMuAzQpC6YgLmB4k4-) by Shaun Pelling - The Net Ninja (2020).

## <a name="materialnote"></a>4) Material Note

A note-taking app to discover Material-UI framework.

[See material-note folder](https://github.com/solygambas/react-projects/tree/main/material-note)

<p align="center">
    <a href="https://github.com/solygambas/react-projects/tree/main/material-note">
        <img src="material-note/screenshot.png">
    </a>
</p>

### Features

- understanding Material-UI key components: Typography, Buttons and Icons.
- creating a custom theme and using makeStyles hook.
- generating a form to add new notes with text fields and radio buttons.
- using a local JSON Server to save, fetch and delete notes.
- working with the grid system and the Card component.
- building a layout with a permanent drawer, a menu list and an app bar.
- displaying avatars for the user and for each note category.
- styling the grid with React Masonry CSS.
- migrating from Material-UI v4 to v5.
- customizing Material-UI components with styled.

Based on [Material UI Tutorial](https://www.youtube.com/watch?v=0KEpWHtG10M&list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58) by Shaun Pelling - The Net Ninja (2021).

## <a name="testing"></a>5) Testing React App

A simple project using React Testing Library.

[See testing-react-app folder](https://github.com/solygambas/react-projects/tree/main/testing-react-app)

### Features

- setting up tests with React Testing Library.
- understanding differences between query methods: getBy, findBy, queryBy, getAllBy, findAllBy, queryAllBy.
- using attributes by priority to mimic user behavior.
- exploring assertions and organizing tests blocks with describe.
- triggering events with fireEvent.

Based on [React Testing Library Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ) by
Laith Harb for The Net Ninja (2021).

## <a name="designsystem"></a>6) My Component Library

An introduction to design systems with styled-components, React Spring and Storybook.

[See my-component-library folder](https://github.com/solygambas/react-projects/tree/main/my-component-library)

[See demo deployed on Vercel](https://my-component-library.vercel.app/)

<p align="center">
    <a href="https://github.com/solygambas/react-projects/tree/main/my-component-library">
        <img src="my-component-library/screenshot.png">
    </a>
</p>

### Features

- creating a design system in Figma for colors, typography and buttons.
- setting up a custom theme and building buttons with styled-components.
- handling button variations with styled-components-modifiers.
- using a theme provider to enable dark mode.
- building and animating a modal with React Spring.
- documenting components, adding controls and handling actions with Storybook.
- using decorators and creating a context to provide our theme.
- testing accessibility with @storybook/addon-a11y.
- customizing Storybook theme with @storybook/addons and @storybook/theming.
- deploying on Netlify.

Based on [Design Systems with Storybook & React](https://frontendmasters.com/workshops/design-systems-storybook/) by
Emma Bostian (2020).
