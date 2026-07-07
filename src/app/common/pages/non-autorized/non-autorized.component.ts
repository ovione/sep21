import {Component, inject} from '@angular/core';
import { Router } from '@angular/router';
import {EUI_ICON} from "@eui/components/eui-icon";

@Component({
  selector: 'app-non-autorized',
  templateUrl: './non-autorized.component.html',
  styleUrls: ['./non-autorized.component.css'],
    imports: [
        EUI_ICON,
    ]
})
export class NonAutorizedComponent {
    private router = inject(Router);

    navigateBackHome(event) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }

        this.router.navigateByUrl('/');
    }
}
