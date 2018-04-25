import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'tabs',
    template: `
        <div>
            <h1> Tabs Template </h1>
        </div>
    `,
    styleUrls: ['./tabs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent {
    //TODO add bio variables
    constructor() {}
}