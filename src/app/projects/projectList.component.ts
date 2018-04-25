import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'project-list',
    template: `
        <div>
            <h1>Project List Template</h1>
        </div>
    `,
    styleUrls: ['./projectList.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent {
    //TODO add bio variables
    constructor() {}
}