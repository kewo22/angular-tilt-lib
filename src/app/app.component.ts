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
    // console.log(
    //   this.test(e.clientY - e.target.offsetTop) +
    //     " -- " +
    //     this.test2(e.clientX - e.target.offsetLeft)
    // );

    let cX: number = this.test(e.clientY - e.target.offsetTop);
    let cY: number = this.test2(e.clientX - e.target.offsetLeft);

    this.el.style.transform = `perspective(300px) rotateX(${cX}deg) rotateY(${cY}deg)`;
  }

  test(varY: number): number {
    const max = this.elHeight / 2;
    const y = varY; // variable

    const yy = (y / max) * 100;
    const cy = yy / 5;

    return Math.ceil(cy - 10);
  }

  test2(varY: number) {
    const max = this.elWidth / 2;
    const y = varY; // variable

    const yy = (y / max) * 100;
    const cy = yy / 10;

    return Math.ceil(10 - cy);
  }

  onMouseLeave(e: any): void {
    this.el.style.transform = `perspective(0px) rotateX(0deg) rotateY(0deg)`;
  }
}
