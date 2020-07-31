import { Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[betterhigh]'
})
export class betterhighdirective implements OnInit{
    constructor(private elementref: ElementRef ,private rend: Renderer2){
    }

    ngOnInit(){
        this.rend.setStyle(this.elementref.nativeElement , 'background-color' , 'blue');
    }
}