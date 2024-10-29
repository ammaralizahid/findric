// declare module 'react-slick'
declare module 'react-slick' {
  import React from 'react';

  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    responsive?: { breakpoint: number; settings: Settings }[];
    nextArrow?: JSX.Element;
    prevArrow?: JSX.Element;
    autoplay?: boolean;
    autoplaySpeed?: number;
    [key: string]: unknown; // Allow any additional settings
  }

  export default class Slider extends React.Component<Settings> {}
}