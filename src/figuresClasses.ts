/* eslint-disable @typescript-eslint/lines-between-class-members */

type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: string;
  shape: Shape;
  getArea: () => number;
  getInfo: () => string;
}

export class Triangle implements Figure {
  color: string;
  shape: Shape;
  a: number;
  b: number;
  c: number;

  constructor(color: string, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides should be positive numbers');
    }

    if (!(a + b > c && a + c > b && b + c > a)) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    this.color = color;
    this.shape = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Number(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(2),
    );
  }

  getInfo(): string {
    return `A ${this.color} ${this.shape} - ${this.getArea()}`;
  }
}

export class Circle implements Figure {
  color: string;
  shape: Shape;
  radius: number;

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius should be positive number');
    }

    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }

  getInfo(): string {
    return `A ${this.color} ${this.shape} - ${this.getArea()}`;
  }
}

export class Rectangle implements Figure {
  color: string;
  shape: Shape;
  width: number;
  height: number;

  constructor(color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('All sides should be positive numbers');
    }

    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Number((this.width * this.height).toFixed(2));
  }

  getInfo(): string {
    return `A ${this.color} ${this.shape} - ${this.getArea()}`;
  }
}

export function getInfo(figure: Figure): string {
  // return typeof figure;
  return figure.getInfo();
}
