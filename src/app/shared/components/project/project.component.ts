import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'project',
    template: `
        <div>
            <h1>Project Template</h1>
        </div>
    `,
    styleUrls: ['./project.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent {
    //TODO add bio variables
    constructor() {}
}