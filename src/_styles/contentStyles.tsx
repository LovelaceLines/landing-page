import { colors } from '@/_theme';

export const ContentStyles = ({
  'img': { width: '100%', height: 'auto' },
  'a': { color: 'primary.main' },
  'p': { textAlign: 'justify' },
  'code': {
    display: 'flex',
    flexWrap: 'nowrap',
    textWrap: 'nowrap',
    overflow: 'auto',
    maxWidth: '100%',
    bgcolor: '#212121',
    '::-webkit-scrollbar': { display: 'block', height: '4px' },
    '::-webkit-scrollbar-thumb': { background: `${colors.primary}` },
    borderRadius: 1,
    p: 1,
    my: 1,
  },
} as React.CSSProperties);