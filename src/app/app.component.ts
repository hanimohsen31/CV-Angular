import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';
import { PageComponent } from './page/page.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PageComponent, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  data: any = {};
  dataBinding = '';
  page1Data = [
    // left
    { name: 'PersonalProfile', sliceStart: 0, sliceEnd: 0, applySlice: false, isOneSide: false },
    { name: 'WorkExperience', sliceStart: 0, sliceEnd: 5, applySlice: true, isOneSide: false },
    // right
    { name: 'Contacts', sliceStart: 0, sliceEnd: 0, applySlice: false, isOneSide: false },
    { name: 'TechnicalSkills', sliceStart: 0, sliceEnd: 0, applySlice: false, isOneSide: false },
    { name: 'LanguageSkills', sliceStart: 0, sliceEnd: 0, applySlice: false, isOneSide: false },
  ];

  page2Data = [
    // left
    { name: 'Projects', sliceStart: 0, sliceEnd: 0, applySlice: false, isOneSide: false },
    // rigth
    { name: 'WorkExperience', sliceStart: 5, sliceEnd: 100, applySlice: true, isOneSide: false },
    { name: 'TechnicalSkillsExplained', sliceStart: 0, sliceEnd: 0, applySlice: false, isOneSide: false },
    { name: 'InterpersonalSkillsExplained', sliceStart: 0, sliceEnd: 0, applySlice: false, isOneSide: false },
    { name: 'InterpersonalSkills', sliceStart: 0, sliceEnd: 0, applySlice: false, isOneSide: false },
  ];

  page3Data = [
    { name: 'Education', sliceStart: 0, sliceEnd: 0, applySlice: false, isOneSide: true },
    { name: 'Courses', sliceStart: 0, sliceEnd: 0, applySlice: false, isOneSide: true },
    { name: 'PersonalInfo', sliceStart: 0, sliceEnd: 0, applySlice: false, isOneSide: true },
  ];

  // -------------------  DIVIDER  starting -------------------------------------------------------
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe({
      next: (res) => {
        this.data = res;
        this.dataBinding = JSON.stringify(res, null, 2);
      },
    });
  }

  update() {
    this.dataService.updateData(this.data).subscribe((res: any) => console.log('updated'));
  }

  print() {}
}
