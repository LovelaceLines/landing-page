export const ContentStyles = (): React.CSSProperties => ({
  'img': { width: '100%', height: 'auto' },
  'a': { color: 'primary.main' },
  'p': { textAlign: 'justify' },
  'code': {
    display: 'flex',
    flexWrap: 'nowrap',
    textWrap: 'nowrap',
    overflow: 'auto',
    bgcolor: 'background.paper',
    borderRadius: 1,
    p: 1,
    my: 1,
  },
} as React.CSSProperties);