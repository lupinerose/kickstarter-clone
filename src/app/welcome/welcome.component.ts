import { Component, OnInit } from '@angular/core';
import {Project} from '../models/project.model';
import { ProjectService } from '../project.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ProjectService]
})
export class WelcomeComponent implements OnInit {
  projects: Project[];
  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToDetailPage(clickedProject: Project) {
    this.router.navigate(['projects', clickedProject.$key]);
  }

}
