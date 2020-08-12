import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { Machine } from 'src/app/shared/interfaces/machine';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {
  machines$: Observable<Machine[]>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
			(data: Machine) => {
        this.machines$ = of(data['machines']); 
			}
    )


    // forkJoin([
    //   this.restService.fetchPassengerOptions(),
    //   this.restService.fetchTicketClasses(),
    //   this.restService.fetchCalendarI18n(this.market, this.language)
    // ]).subscribe(([paxOptions, ticketClasses, calendarI18n]: [ SelectItem[], SelectItem[], CalendarI18n]) => {
    //   this.passengerOptions$ = of(paxOptions);
    //   this.ticketClasses$ = of(ticketClasses);
    //   this.calendarI18n$ = of(calendarI18n);

    //   const noPaxOpt = paxOptions[0].value;
    //   const onePaxOpt = paxOptions[1].value;
    //   const defaultTicketClass = ticketClasses[0].value;

    //   this.searchFlightForm$ = of(new FormGroup({
    //     departureAirport: new FormControl("WAW", { validators: Validators.required, updateOn: "submit" }),
    //     destinationAirport: new FormControl("", { validators: Validators.required, updateOn: "submit" }),
    //     ticketType: new FormControl(TicketType.return, { validators: Validators.required }),
    //     ticketClass: new FormControl(defaultTicketClass, { validators: Validators.required, updateOn: "submit" }),
    //     departureDate: new FormControl("", { validators: Validators.required, updateOn: "change" }),
    //     returnDate: new FormControl("", { validators: Validators.required, updateOn: "change" }),
    //     numOfPassengers: new FormGroup({
    //       numOfAdults: new FormControl(onePaxOpt),
    //       numOfYouths: new FormControl(noPaxOpt),
    //       numOfChildren: new FormControl(noPaxOpt),
    //       numOfInfants: new FormControl(noPaxOpt)
    //     }, {
    //       validators: this.numOfPassengersValidator.bind(this)
    //     })
    //   }, {
    //     validators: [this.airportsValidator.bind(this)]
    //   }));
    // });


  }


}
