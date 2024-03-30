import {Fragment} from 'react';
import {Category, Component, Variant, Palette} from '@react-buddy/ide-toolbox-next';
import MUIPalette from '@react-buddy/palette-mui';

export const PaletteTree = () => (
  <Palette>
    <MUIPalette />
    <Category name="App">
      <Component name="Loader">
        <Variant>
          <ExampleLoaderComponent />
        </Variant>
      </Component>
    </Category>
  </Palette>
);

export function ExampleLoaderComponent() {
  return <Fragment>Loading...</Fragment>;
}
