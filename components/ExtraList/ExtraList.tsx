'use client';
import React from 'react';
import classes from './ExtraList.module.css';
import { Card, Image, Text } from '@mantine/core';

interface ExtraList {
  title?: string;
  withImage: boolean;
  image?: string;
  hoverColor?: any;
}

const ExtraList = ({ title, withImage, image, hoverColor }: ExtraList) => {
  return (
    <>
      {withImage ? (
        <Card className={classes.card}>
          <Image height={90} width={160} src={image} />
          <Text
            style={{
              marginLeft: 20,
              textDecorationColor: `${hoverColor}`,
            }}
            className={classes.text_style}
          >
            {title}
          </Text>
        </Card>
      ) : (
        <Text
          style={{
            textDecorationColor: `${hoverColor}`,
          }}
          className={classes.text_style}
        >
          {title}
        </Text>
      )}
    </>
  );
};

export default ExtraList;
