import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import * as intlTelInput from 'intl-tel-input';
import * as $ from 'jquery';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./phone.component.less'],
})
export class PhoneComponent implements AfterViewInit, OnDestroy  {
  @ViewChild('phoneInput') phoneInput !: ElementRef;
  @ViewChild('f') f !: NgForm;


  @ViewChild('phoneNewInput') phoneInputNew!: any 

	separateDialCode = true;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.Israel, CountryISO.UnitedStates];
	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
	});
  // placeholder !: string 

  constructor(private renderer: Renderer2) { }

  @Input()
  phoneNumber !: string

  ngAfterViewInit(): void {
    // this.phoneInputNew.customPlaceholder = this.phoneInputNew.selectedCountry.placeHolder
    
    // console.log(this.phoneInputNew.customPlaceholder );
    

    // this.renderer.selectRootElement(this.phoneInput["nativeElement"]).focus();
    
    // console.log($(this.phoneInput["nativeElement"]))

    // this.iti = intlTelInput(this.phoneInput.nativeElement, {
    //   initialCountry: "auto",
    //   autoPlaceholder: "aggressive",
    //   preferredCountries: ["IL","US","UK"],
    //   nationalMode: true,
    //   separateDialCode: true,
    //   allowDropdown: true,
    //   geoIpLookup: function (callback) {
    //     $.get('https://ipinfo.io/json', function () { }).always(function (resp) {
    //       var countryCode = (resp && resp.country) ? resp.country : "US";
    //       callback(countryCode);
    //     });
    //   },
    //   utilsScript: "scripts.js"
    // });

  }

  onPhoneNumberChanged(event: Event): void {
    this.phoneInputNew.customPlaceholder = this.phoneInputNew.selectedCountry.placeHolder
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
    console.log(this.f.form.value.phone.e164Number)
  }

  onSubmit() {
    console.log("jhgkjhgkjhgs");
    window.location.href = "https://api.whatsapp.com/send?phone=" + this.f.form.value.phone.e164Number;
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // this.iti.destroy();
  }

}
