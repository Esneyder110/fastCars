export interface Enviroments {
  [index: string]: string;
  dev: string;
  stag: string;
  prod: string;
}

export const enviroments: Enviroments = {
  dev: '.env',
  stag: '.stag.env',
  prod: '.prod.env',
};
