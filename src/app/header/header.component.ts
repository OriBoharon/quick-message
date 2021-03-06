import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
})
export class HeaderComponent {
    @Output() featureSelected : EventEmitter<string> = new EventEmitter<string>();
    collapsed = true;

    onSelect(feature: string){
        this.featureSelected.emit(feature)
    }
}
