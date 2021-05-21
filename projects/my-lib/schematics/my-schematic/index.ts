import { Tree, convertNxGenerator } from '@nrwl/devkit';

export function mySchematicGenerator(_tree: Tree, opts: any) {
  console.log('options', opts);
}

export const mySchematic = convertNxGenerator(mySchematicGenerator);
