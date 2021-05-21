import { Tree, convertNxGenerator, generateFiles, joinPathFragments, names, readJson } from '@nrwl/devkit';

export function mySchematicGenerator(tree: Tree, opts: any) {
  const workspace = readJson(tree, 'angular.json');

  if (!opts.project) {
    opts.project = workspace.defaultProject;
  }

  const project = workspace.projects[opts.project];
  const projectType = project.projectType === 'application' ? 'app' : 'lib';

  if (opts.path === undefined) {
    opts.path = `${project.sourceRoot}/${projectType}`;
  }

  const { className, fileName } = names(opts.name);

  generateFiles(tree, joinPathFragments(__dirname, './files'), joinPathFragments(opts.path), {
    className,
    name: fileName,
    tpl: ''
  });
}

export const mySchematic = convertNxGenerator(mySchematicGenerator);
