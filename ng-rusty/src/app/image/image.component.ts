import {Component, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {CHANNEL, PHOTON_FILTER} from "./photon";
import {PhotonImage} from "../../photon";

@Component({
  selector: 'app-image',
  standalone: true,
  templateUrl: './image.component.html',
  imports: [
    NgIf,
    MatButtonModule,
  ],
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  loadedWasm = false;
  isLoaded = false;
  wasm: any;
  displayedImage!: HTMLImageElement;
  startTime = 0;
  endTime = 0;
  timeTakenDisplayed = '';

  async ngOnInit() {
    await this.loadWasm();
  }

  async loadWasm() {
    try {
      // ToDo import wasm file
      this.setImage('assets/img/daisies.jpg');
    } finally {
      this.loadedWasm = true;
    }
  }

  upload() {
    const fileInput = document.querySelector('#file') as HTMLElement;
    fileInput?.click();
  }

  uploadFile(event: any) {
    const file = event?.target?.files[0];
    const reader = new FileReader();

    reader.onloadend = () =>
      this.setImage(reader.result as string);  // Set the global image to the path of the file on the client's PC.

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  setImage(imageSrc: string) {
    const img = new Image();

    img.onload = () => {
      this.displayedImage = img;
      const canvas = document.getElementById('canvas') as HTMLCanvasElement;
      if (canvas) {
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0);
      }
    }
    img.src = imageSrc;
  }

  alterChannel(channel: CHANNEL) {
    let { ctx, canvas, image } = this.getImageData();
    let photon = this.wasm;

    this.startTime = performance.now();
    // ToDo call alterChannel function from wasm
    this.endTime = performance.now();
    // ToDo call putImageData function from wasm

    this.updateBenchmark();
  }

  removeChannel(channel: CHANNEL) {
    let { ctx, canvas, image } = this.getImageData();
    let photon = this.wasm;

    this.startTime = performance.now();
    photon.remove_channel(image, channel, 500);
    this.endTime = performance.now();
    photon.putImageData(canvas, ctx, image);

    this.updateBenchmark();
  }

  filter(filter: PHOTON_FILTER) {
    let { ctx, canvas, image } = this.getImageData();
    let photon = this.wasm;

    this.startTime = performance.now();

    photon.filter(image, filter);

    // ToDo call filter function on wasm
    this.endTime = performance.now();
    photon.putImageData(canvas, ctx, image);

    // ToDo draw new image on canvas
    this.updateBenchmark();
  }

  offset(channel: CHANNEL) {
    let { ctx, canvas, image } = this.getImageData();
    let photon = this.wasm;

    this.startTime = performance.now();
    photon.offset(image, channel, 50);
    this.endTime = performance.now();

    photon.putImageData(canvas, ctx, image);
    this.updateBenchmark();
  }

  effectPipeline() {
    let { ctx, canvas, image } = this.getImageData();
    let photon = this.wasm;

    this.startTime = performance.now();
    photon.alter_channel(image, 2, 70);
    photon.grayscale(image);
    this.endTime = performance.now();

    photon.putImageData(canvas, ctx, image);
    this.updateBenchmark();
  }

  private getImageData(): { ctx: CanvasRenderingContext2D | null; canvas: HTMLCanvasElement; image: PhotonImage } {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    ctx?.drawImage(this.displayedImage, 0, 0);
    let image = this.wasm.open_image(canvas, ctx);

    return {ctx, canvas, image}
  }

  private updateBenchmark() {
    let timeTaken = this.endTime - this.startTime;
    this.timeTakenDisplayed = `Time: ${timeTaken.toFixed(2)}ms`;
  }
}
