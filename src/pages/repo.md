待修复

```react

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@docusaurus/Link';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Favico from 'favico.js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

function LinksPage() {
  const classes = useStyles();

  const links = [
    {
      url: 'https://www.example.com',
      label: 'Example',
    },
    {
      url: 'https://www.another-example.com',
      label: 'Another Example',
    },
  ];

  const favico = new Favico({
    animation: 'none',
  });

  links.forEach((link) => {
    favico.get(link.url, (error, icon) => {
      if (error) {
        console.error(error);
        return;
      }
      link.icon = icon;
    });
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {links.map((link) => (
          <Grid item key={link.url}>
            <Link
              to={link.url}
              className={classes.link}
              color="primary"
              underline="none"
            >
              <Icon className={classes.icon}>{link.icon}</Icon>
              {link.label}
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default LinksPage;



```