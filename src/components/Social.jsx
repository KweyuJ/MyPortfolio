import React from 'react';
import { UilInstagram, UilLinkedin, UilGithubAlt } from '@iconscout/react-unicons';

const Social = () => {
  return (
    <div className='home__social'>
      <a href="https://www.instagram.com/_ayie.ko_" className='home__social-icon' target='_blank' rel='noopener noreferrer'>
        <UilInstagram />
      </a>
      <a href="https://www.linkedin.com/in/joy-kweyu-7ba5b9247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='home__social-icon' target='_blank' rel='noopener noreferrer'>
        <UilLinkedin />
      </a>
      <a href="https://github.com/KweyuJ" className='home__social-icon' target='_blank' rel='noopener noreferrer'>
        <UilGithubAlt />
      </a>
    </div>
  );
};

export default Social;
