

import {
    Component,
    OnInit,
    OnDestroy,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    NgModule
  }                           from '@angular/core';
  import { ActivatedRoute }   from '@angular/router';
  import { Subscription }     from "rxjs";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'contact',
    template: `
    <app-layout>
        <h1>Contact Form Template</h1>
    </app-layout>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent{
    constructor() {}
}