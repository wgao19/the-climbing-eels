// @flow

export const STORIES = {
  JOES: 'joes-valley-study-notes',
};

const storyLoader = (storyName: string) => {
  switch (storyName) {
    case STORIES.JOES:
      return () => import('joes-valley-study-notes/README.md');
    default:
      return () => null;
  }
};

export default storyLoader;
