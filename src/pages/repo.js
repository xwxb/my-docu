import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

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
      icon: 'link',
    },
    {
      url: 'https://my-docu-xban12.vercel.app/',
      label: 'Another Example',
      icon: 'https://s2.loli.net/2022/07/30/ENgfwdO1VpoWjKJ.png',
    },
  ];

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

// export default LinksPage

export default function Repo(){
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout>
            <LinksPage />
        </Layout>
      );
} 
