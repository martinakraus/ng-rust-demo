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

  async ngOnInit() {
    await this.loadWasm();
  }

  async loadWasm() {
    try {
      this.wasm = await import('../../photon');
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

    photon.alter_channel(image, channel, 50);

    photon.putImageData(canvas, ctx, image);
  }

  removeChannel(channel: CHANNEL) {
    let { ctx, canvas, image } = this.getImageData();
    let photon = this.wasm;

    photon.remove_channel(image, channel, 500);

    photon.putImageData(canvas, ctx, image);
  }

  filter(filter: PHOTON_FILTER) {
    let { ctx, canvas, image } = this.getImageData();
    let photon = this.wasm;

    photon.filter(image, filter);

    photon.putImageData(canvas, ctx, image);
  }

  offset(channel: CHANNEL) {
    let { ctx, canvas, image } = this.getImageData();
    let photon = this.wasm;

    photon.offset(image, channel, 50);

    photon.putImageData(canvas, ctx, image);
  }

  effectPipeline() {
    let { ctx, canvas, image } = this.getImageData();
    let photon = this.wasm;

    photon.alter_channel(image, 2, 70);
    photon.grayscale(image);

    photon.putImageData(canvas, ctx, image);
  }

  private getImageData(): { ctx: CanvasRenderingContext2D | null; canvas: HTMLCanvasElement; image: PhotonImage } {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    ctx?.drawImage(this.displayedImage, 0, 0);
    let image = this.wasm.open_image(canvas, ctx);

    return {ctx, canvas, image}
  }
}
