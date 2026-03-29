import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
export type Section = { name: string; sliceStart: number; sliceEnd: number; applySlice: boolean };

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class PageComponent {
  @Input() data: any = {};
  @Input() sections: Section[] = [];
  @Input() isOneSide = false;

  show(section: string) {
    return this.sections.find((elm) => elm.name == section);
  }

  sliceShow(section: string) {
    let target = this.sections.find((elm) => elm.name == section);
    if (target && target.applySlice) return this.data[target.name]?.slice(target.sliceStart, target.sliceEnd);
    else if (target && !target.applySlice) return this.data[target.name];
    else return [];
  }
}
