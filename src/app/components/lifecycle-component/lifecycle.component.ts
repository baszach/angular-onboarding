import {
    AfterContentChecked,
    AfterContentInit, AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck, Input,
    OnChanges, OnDestroy,
    OnInit, SimpleChanges
} from "@angular/core";

@Component({
    selector: 'app-lifecycle',
    templateUrl: './lifecycle.component.html'
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    private numbrr: number = 1;
    private intervalz!: number;

    constructor() {
        this.intervalz = setInterval(() => {
            this.numbrr += 1;
            console.log(this.numbrr);
        }, 1000);
    }

    // ONLY CALLED WHEN @INPUT WITH PROPERTY BINDING EXISTS
    ngOnChanges(changes: SimpleChanges): void {
        console.log('OnChanges');
    }

    ngOnInit(): void {
        console.log('OnInit');
    }

    ngDoCheck(): void {
        console.log('DoCheck');
    }

    ngAfterContentInit(): void {
        console.log('AfterContentInit');
    }

    ngAfterContentChecked(): void {
        console.log('AfterContentChecked');
    }

    ngAfterViewInit(): void {
        console.log('AfterViewInit');
    }

    ngAfterViewChecked(): void {
        console.log('AfterViewChecked');
    }

    ngOnDestroy(): void {
        console.log('OnDestroy');
        clearInterval(this.intervalz);
    }
}
