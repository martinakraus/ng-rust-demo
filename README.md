# ng-rust-demo

This is a demo for showcasing the integration of a Rust Library compiled to WebAssembly into an Angular Application.
It uses [Photon](https://github.com/silvia-odwyer/photon) - a Rust Library for Image processing developed by Silvia O'Dwyer

### Build 

To build and run the project you can use the `build.sh` script. It compiles the Rust files located in the `cate`
Folder into WebAssembly. The WebAssembly File and its JavaScript clue code is located in `ng-rust/src/photon`.

### Prerequisite

- Install the current version of [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)
- Current version of [Angular CLI](https://www.npmjs.com/package/@angular/cli)
