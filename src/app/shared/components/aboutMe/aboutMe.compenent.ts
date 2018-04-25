import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'about-me',
    template: `
        <div>
            <h1>About Me Template</h1>
        </div>
    `,
    styleUrls: ['./aboutMe.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMeComponent {
    //TODO add bio variables
    constructor() {}
}