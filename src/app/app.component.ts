import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  el: HTMLElement;

  elHeight: number = 0;
  elWidth: number = 0;

  ngOnInit() {
    this.el = document.querySelector(".one");

    this.elHeight = this.el.clientHeight;
    this.elWidth = this.el.clientWidth;
  }

  onMouseMove(e: any): void {
    let x: number = 0,
      y: number = 0;

    // Checking horizontal movement (X axis)
    if (e.clientX - e.target.offsetLeft < this.elWidth / 2) {
      // console.log("Y+");
    }

    if (e.clientX - e.target.offsetLeft > this.elWidth / 2) {
      // console.log("Y-");
    }

    if (e.clientX - e.target.offsetLeft === this.elWidth / 2) {
      // console.log("=");
    }

    this.test(e.clientY - e.target.offsetTop);
    this.test2(e.clientX - e.target.offsetLeft);
    // console.log(
    //   e.clientX - e.target.offsetLeft + " - " + (e.clientY - e.target.offsetTop)
    // );
  }

  test(varY: number): number {
    const max = 75;
    const y = varY; // variable

    const yy = (y / max) * 100;
    const cy = yy / 10;

    return Math.ceil(cy - 10);
    // console.log(cy - 10);
  }

  test2(varY: number) {
    const max = 75;
    const y = varY; // variable

    const yy = (y / max) * 100;
    const cy = yy / 10;

    return Math.ceil(10 - cy);
    // console.log(10 - cy);
  }
}
