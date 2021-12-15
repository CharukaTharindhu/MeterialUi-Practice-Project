import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Link } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    color: 'white',
    position: 'sticky',
    top: 0,
    paddingTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'white',
      color: '#555',
      border: '1px solid #999',
    },
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: '#555',
  },
  link: {
    marginRight: theme.spacing(2),
    color: '#555',
    fontSize: 16,
  },
}));

function RightBar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={4} style={{ marginBottom: 30 }}>
        <Avatar
          alt='Remy Sharp'
          src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
        />
        <Avatar
          alt='Travis Howard'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_7NBrfCFF3HN_EoJSdL-WFvJd12IHi5zmvA&usqp=CAU'
        />
        <Avatar
          alt='Cindy Baker'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKE3IShl5z_-stwh8CEIDGTMoJoYhdImU-YA&usqp=CAU'
        />
        <Avatar
          alt='Agnes Walker'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTFuMPsEBlDqyIRXKAb5AsAI22eywYCtPVdg&usqp=CAU'
        />
        <Avatar
          alt='Trevor Henderson'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx2c1nIxXJIYEcVUCJUrHK2wMW6KXslp0BAw&usqp=CAU'
        />
      </AvatarGroup>

      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList
        style={{ marginBottom: 30 }}
        rowHeight={160}
        className={classes.imageList}
        cols={2}
      >
        <ImageListItem>
          <img
            src={'https://v4.mui.com/static/images/image-list/breakfast.jpg'}
            alt=''
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={'https://v4.mui.com/static/images/image-list/burgers.jpg'}
            alt=''
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={'https://v4.mui.com/static/images/image-list/vegetables.jpg'}
            alt=''
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={'https://v4.mui.com/static/images/image-list/star.jpg'}
            alt=''
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={'https://v4.mui.com/static/images/image-list/mushroom.jpg'}
            alt=''
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={'https://v4.mui.com/static/images/image-list/bike.jpg'}
            alt=''
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title} gutterBottom>
        Categories
      </Typography>
      <Link href='#' className={classes.link} variant='body2'>
        Food
      </Link>
      <Link href='#' className={classes.link} variant='body2'>
        Movies
      </Link>
      <Link href='#' className={classes.link} variant='body2'>
        Science
      </Link>
      <Link href='#' className={classes.link} variant='body2'>
        Sport
      </Link>
    </Container>
  );
}

export default RightBar;
