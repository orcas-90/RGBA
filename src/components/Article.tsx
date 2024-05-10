import { cnArticle } from './Article.classname';
import { useState, type MouseEvent, useEffect } from 'react';
//import { uid } from 'uid';

import type { DragEventHandler, FC, MouseEventHandler } from 'react';

import './Article.css';
import { RGBA } from './RGBA';

type ArticleProps = {
  colorText: string;
};

const Article: FC<ArticleProps> = ({ colorText }) => {
  console.log(colorText);

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions

  return (
    <div className={cnArticle()}>
      <h1 className={cnArticle('tittle')} style={{ color: colorText }}>
        Hello Kitty!
      </h1>
      <p className={cnArticle('text')} style={{ color: colorText }}>
      ^-^ Hello Kitty! Hello Kitty! Hello Kitty!
      Hello Kitty! Hello Kitty! Hello Kitty! ^-^
      </p>
    </div>
  );
};

export { Article };
