import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Story as StoryComponent } from './Story';
import * as BooleanStories from '../controls/Boolean.stories';

const meta: Meta<typeof StoryComponent> = {
  component: StoryComponent,
  parameters: {
    relativeCsfPaths: ['../controls/Boolean.stories'],
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Of: Story = {
  args: {
    of: BooleanStories.Undefined,
  },
};

export const OfWithMeta: Story = {
  args: {
    of: BooleanStories.True,
    meta: BooleanStories.default,
  },
};

export const Id: Story = {
  args: {
    id: `${process.env.BLOCKS_ONLY ? '' : 'storybook-blocks-'}controls-boolean--false`,
  },
};

export const Name: Story = {
  args: {
    name: 'True',
  },
};

export const Inline: Story = {
  args: {
    of: BooleanStories.Undefined,
    inline: true,
  },
  decorators: [
    (Story) => (
      <>
        <span>A border has been added to the following story to highlight its final size.</span>
        <div style={{ border: '1px solid gray' }}>
          <Story />
        </div>
      </>
    ),
  ],
};
export const InlineWithHeight: Story = {
  ...Inline,
  args: {
    of: BooleanStories.Undefined,
    inline: true,
    height: '300px',
  },
};
export const Iframe: Story = {
  ...Inline,
  args: {
    of: BooleanStories.Undefined,
    inline: false,
  },
};
export const IframeWithHeight: Story = {
  ...Inline,
  args: {
    of: BooleanStories.Undefined,
    inline: false,
    height: '300px',
  },
};

// export const WithPlay: Story = {
//   args: {
//     of: BooleanStories.Undefined,
//     play: () => {
//       throw new Error('This should not play automatically');
//     },
//     parameters: { docs: { autoplay: true } },
//   },
// };
// export const WithPlayDisabled: Story = {
//   args: {
//     of: BooleanStories.Undefined,
//     play: () => {
//       throw new Error('This should not play automatically');
//     },
//   },
// };

// TODO: types suggest that <Story /> can take ProjectAnnotations, but it doesn't seem to do anything with them
// Such as parameters, decorators, etc.
// they seem to be taken from the story itself, and not from the <Story /> call
