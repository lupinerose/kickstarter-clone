import { Injectable } from '@angular/core';
import { Project } from './models/project.model';
// import {PROJECTS} from './mock-projects';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) { 
    this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }

  getProjectById(projectId: string) {
    return this.database.object('projects/' + projectId);
  }

  getProjectByFeatured() {
    return this.database.object('projects/featured/true');

  }

}
