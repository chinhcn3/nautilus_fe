/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox-next';
import {PaletteTree} from './palette';
import {ProfileUpdateContainer} from '@/containers/dashboard/profile-update';

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/ProfileUpdateContainer">
        <ProfileUpdateContainer />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
