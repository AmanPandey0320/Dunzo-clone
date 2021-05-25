import { Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#0f1938',
      color: '#ffffff',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);

export default HtmlTooltip;