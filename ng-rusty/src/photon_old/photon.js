import * as wasm from './photon_bg.wasm';

let WASM_VECTOR_LEN = 0;

let cachedTextEncoder = new TextEncoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

let passStringToWasm;
if (typeof cachedTextEncoder.encodeInto === 'function') {
    passStringToWasm = function(arg) {


        let size = arg.length;
        let ptr = wasm.__wbindgen_malloc(size);
        let offset = 0;
        {
            const mem = getUint8Memory();
            for (; offset < arg.length; offset++) {
                const code = arg.charCodeAt(offset);
                if (code > 0x7F) break;
                mem[ptr + offset] = code;
            }
        }

        if (offset !== arg.length) {
            arg = arg.slice(offset);
            ptr = wasm.__wbindgen_realloc(ptr, size, size = offset + arg.length * 3);
            const view = getUint8Memory().subarray(ptr + offset, ptr + size);
            const ret = cachedTextEncoder.encodeInto(arg, view);

            offset += ret.written;
        }
        WASM_VECTOR_LEN = offset;
        return ptr;
    };
} else {
    passStringToWasm = function(arg) {


        let size = arg.length;
        let ptr = wasm.__wbindgen_malloc(size);
        let offset = 0;
        {
            const mem = getUint8Memory();
            for (; offset < arg.length; offset++) {
                const code = arg.charCodeAt(offset);
                if (code > 0x7F) break;
                mem[ptr + offset] = code;
            }
        }

        if (offset !== arg.length) {
            const buf = cachedTextEncoder.encode(arg.slice(offset));
            ptr = wasm.__wbindgen_realloc(ptr, size, size = offset + buf.length);
            getUint8Memory().set(buf, ptr + offset);
            offset += buf.length;
        }
        WASM_VECTOR_LEN = offset;
        return ptr;
    };
}
/**
* Add bordered-text to an image.
* The only font available as of now is Roboto.
* Note: A graphic design/text-drawing library is currently being developed, so stay tuned.
*
* # Arguments
* * `photon_image` - A PhotonImage.
* * `text` - Text string to be drawn to the image.
* * `x` - x-coordinate of where first letter\'s 1st pixel should be drawn.
* * `y` - y-coordinate of where first letter\'s 1st pixel should be drawn.
*
* # Example
* ```
* // For example to draw the string \"Welcome to Photon!\" at 10, 10:
* use photon_old::text::draw_text_with_border;
*
* // Open the image. A PhotonImage is returned.
* let img: PhotonImage = open_image(\"images/cats.PNG\");
*
* draw_text_with_border(&mut img, \"Welcome to Photon!\", 10, 10);
* ```
* @param {PhotonImage} photon_img
* @param {string} text
* @param {number} x
* @param {number} y
* @returns {void}
*/
export function draw_text_with_border(photon_img, text, x, y) {
    const ptr1 = passStringToWasm(text);
    const len1 = WASM_VECTOR_LEN;
    try {
        return wasm.draw_text_with_border(photon_img.ptr, ptr1, len1, x, y);

    } finally {
        wasm.__wbindgen_free(ptr1, len1 * 1);

    }

}

/**
* Add text to an image.
* The only font available as of now is Roboto.
* Note: A graphic design/text-drawing library is currently being developed, so stay tuned.
*
* # Arguments
* * `photon_image` - A PhotonImage.
* * `text` - Text string to be drawn to the image.
* * `x` - x-coordinate of where first letter\'s 1st pixel should be drawn.
* * `y` - y-coordinate of where first letter\'s 1st pixel should be drawn.
*
* # Example
* ```
* // For example to draw the string \"Welcome to Photon!\" at 10, 10:
* use photon_old::text::draw_text;
*
* // Open the image. A PhotonImage is returned.
* let img: PhotonImage = open_image(\"images/cats.PNG\");
*
* draw_text(&mut img, \"Welcome to Photon!\", 10, 10);
* ```
* @param {PhotonImage} photon_img
* @param {string} text
* @param {number} x
* @param {number} y
* @returns {void}
*/
export function draw_text(photon_img, text, x, y) {
    const ptr1 = passStringToWasm(text);
    const len1 = WASM_VECTOR_LEN;
    try {
        return wasm.draw_text(photon_img.ptr, ptr1, len1, x, y);

    } finally {
        wasm.__wbindgen_free(ptr1, len1 * 1);

    }

}

/**
* Add a watermark to an image.
*
* # Arguments
* * `img` - A DynamicImage that contains a view into the image.
* * `watermark` - The watermark to be placed onto the `img` image.
* * `x` - The x coordinate where the watermark\'s top corner should be positioned.
* * `y` - The y coordinate where the watermark\'s top corner should be positioned.
* # Example
*
* ```
* // For example, to add a watermark to an image at x: 30, y: 40:
* use photon_old::multiple;
* photon_old::multiple::watermark(img, watermark, 30, 40);
* ```
* @param {PhotonImage} img
* @param {PhotonImage} watermark
* @param {number} x
* @param {number} y
* @returns {void}
*/
export function watermark(img, watermark, x, y) {
    const ptr1 = watermark.ptr;
    watermark.ptr = 0;
    return wasm.watermark(img.ptr, ptr1, x, y);
}

/**
* Blend two images together.
* The `blend_mode` (3rd param) determines which blending mode to use; change this for varying effects.
* The blend modes available include: `overlay`, `over`, `atop`, `xor`, `multiply`, `burn`, `soft_light`, `hard_light`
* `difference`, `lighten`, `darken`, `dodge`, `plus`, `exclusion` (more to come)
* NOTE: The first image must be smaller than the second image passed as params.
* If the first image were larger than the second, then there would be overflowing pixels which would have no corresponding pixels
* in the second image.
* # Arguments
* * `img` - A DynamicImage that contains a view into the image.
* * `img2` - The 2nd DynamicImage to be blended with the first.
* * `blend_mode` - The blending mode to use. See above for complete list of blend modes available.
* # Example
*
* ```
* // For example, to add a watermark to an image at x: 30, y: 40:
* use photon_old::multiple;
* photon_old::multiple::watermark(img, watermark, 30, 40);
* ```
* @param {PhotonImage} photon_image
* @param {PhotonImage} photon_image2
* @param {string} blend_mode
* @returns {void}
*/
export function blend(photon_image, photon_image2, blend_mode) {
    const ptr2 = passStringToWasm(blend_mode);
    const len2 = WASM_VECTOR_LEN;
    try {
        return wasm.blend(photon_image.ptr, photon_image2.ptr, ptr2, len2);

    } finally {
        wasm.__wbindgen_free(ptr2, len2 * 1);

    }

}

/**
* @param {number} width
* @param {number} height
* @returns {PhotonImage}
*/
export function create_gradient(width, height) {
    return PhotonImage.__wrap(wasm.create_gradient(width, height));
}

/**
* Apply a gradient to an image.
* @param {PhotonImage} image
* @returns {void}
*/
export function apply_gradient(image) {
    return wasm.apply_gradient(image.ptr);
}

function passArray8ToWasm(arg) {
    const ptr = wasm.__wbindgen_malloc(arg.length * 1);
    getUint8Memory().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function getArrayU8FromWasm(ptr, len) {
    return getUint8Memory().subarray(ptr / 1, ptr / 1 + len);
}

let cachedGlobalArgumentPtr = null;
function globalArgumentPtr() {
    if (cachedGlobalArgumentPtr === null) {
        cachedGlobalArgumentPtr = wasm.__wbindgen_global_argument_ptr();
    }
    return cachedGlobalArgumentPtr;
}

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory;
}

const heap = new Array(32);

heap.fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}
/**
* Create a PhotonImage from a byte slice.
* [temp] Check if WASM is supported.
* @returns {void}
*/
export function run() {
    return wasm.run();
}

let stack_pointer = 32;

function addBorrowedObject(obj) {
    if (stack_pointer == 1) throw new Error('out of js stack');
    heap[--stack_pointer] = obj;
    return stack_pointer;
}
/**
* Get the ImageData from a 2D canvas context
* @param {any} canvas
* @param {any} ctx
* @returns {any}
*/
export function get_image_data(canvas, ctx) {
    try {
        return takeObject(wasm.get_image_data(addBorrowedObject(canvas), addBorrowedObject(ctx)));

    } finally {
        heap[stack_pointer++] = undefined;
        heap[stack_pointer++] = undefined;

    }

}

/**
* Place a PhotonImage onto a 2D canvas.
* @param {any} canvas
* @param {any} ctx
* @param {PhotonImage} new_image
* @returns {void}
*/
export function putImageData(canvas, ctx, new_image) {
    const ptr2 = new_image.ptr;
    new_image.ptr = 0;
    return wasm.putImageData(addHeapObject(canvas), addHeapObject(ctx), ptr2);
}

/**
* Convert a HTML5 Canvas Element to a PhotonImage.
*
* This converts the ImageData found in the canvas context to a PhotonImage,
* which can then have effects or filters applied to it.
* @param {any} canvas
* @param {any} ctx
* @returns {PhotonImage}
*/
export function open_image(canvas, ctx) {
    return PhotonImage.__wrap(wasm.open_image(addHeapObject(canvas), addHeapObject(ctx)));
}

/**
* Convert ImageData to a raw pixel vec of u8s.
* @param {any} imgdata
* @returns {Uint8Array}
*/
export function to_raw_pixels(imgdata) {
    const retptr = globalArgumentPtr();
    wasm.to_raw_pixels(retptr, addHeapObject(imgdata));
    const mem = getUint32Memory();
    const rustptr = mem[retptr / 4];
    const rustlen = mem[retptr / 4 + 1];

    const realRet = getArrayU8FromWasm(rustptr, rustlen).slice();
    wasm.__wbindgen_free(rustptr, rustlen * 1);
    return realRet;

}

/**
* Convert a base64 string to a PhotonImage.
* @param {string} base64
* @returns {PhotonImage}
*/
export function base64_to_image(base64) {
    const ptr0 = passStringToWasm(base64);
    const len0 = WASM_VECTOR_LEN;
    try {
        return PhotonImage.__wrap(wasm.base64_to_image(ptr0, len0));

    } finally {
        wasm.__wbindgen_free(ptr0, len0 * 1);

    }

}

/**
* Convert a base64 string to a Vec of u8s.
* @param {string} base64
* @returns {Uint8Array}
*/
export function base64_to_vec(base64) {
    const ptr0 = passStringToWasm(base64);
    const len0 = WASM_VECTOR_LEN;
    const retptr = globalArgumentPtr();
    try {
        wasm.base64_to_vec(retptr, ptr0, len0);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getArrayU8FromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;


    } finally {
        wasm.__wbindgen_free(ptr0, len0 * 1);

    }

}

/**
* Convert a PhotonImage to JS-compatible ImageData.
* @param {PhotonImage} photon_image
* @returns {any}
*/
export function to_image_data(photon_image) {
    const ptr0 = photon_image.ptr;
    photon_image.ptr = 0;
    return takeObject(wasm.to_image_data(ptr0));
}

/**
* Noise reduction.
*
* # Arguments
* * `img` - A DynamicImage that contains a view into the image.
*
* # Example
*
* ```
* // For example, to sharpen an image:
* use photon_old::conv::sharpen;
* photon_old::channels::sharpen(img);
* ```
* Adds a constant to a select R, G, or B channel\'s value.
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function noise_reduction(photon_image) {
    return wasm.noise_reduction(photon_image.ptr);
}

/**
* Sharpen an image.
*
* # Arguments
* * `img` - A DynamicImage that contains a view into the image.
*
* # Example
*
* ```
* // For example, to sharpen an image:
* use photon_old::conv::sharpen;
* photon_old::channels::sharpen(img);
* ```
* Adds a constant to a select R, G, or B channel\'s value.
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function sharpen(photon_image) {
    return wasm.sharpen(photon_image.ptr);
}

/**
* Apply edge detection to an image, to create a dark version with its edges highlighted.
*
* # Arguments
* * `img` - A DynamicImage that contains a view into the image.
*
* # Example
*
* ```
* // For example, to increase the Red channel for all pixels by 10:
* use photon_old::channels;
* photon_old::conv::edge_detection(img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function edge_detection(photon_image) {
    return wasm.edge_detection(photon_image.ptr);
}

/**
* Apply an identity kernel convolution to an image.
*
* # Arguments
* * `img` - A DynamicImage that contains a view into the image.
*
* # Example
*
* ```
* // For example, to apply an identity kernel convolution:
* use photon_old::channels;
* photon_old::conv::identity(img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function identity(photon_image) {
    return wasm.identity(photon_image.ptr);
}

/**
* Apply a box blur effect.
*
* # Arguments
* * `img` - A DynamicImage that contains a view into the image.
*
* # Example
*
* ```
* // For example, to apply a box blur effect:
* use photon_old::channels;
* photon_old::conv::box_blur(img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function box_blur(photon_image) {
    return wasm.box_blur(photon_image.ptr);
}

/**
* Apply a gaussian blur effect.
*
* # Arguments
* * `img` - A DynamicImage that contains a view into the image.
*
* # Example
*
* ```
* // For example, to apply a gaussian blur effect to an image:
* use photon_old::channels;
* photon_old::conv::gaussian_blur(img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function gaussian_blur(photon_image) {
    return wasm.gaussian_blur(photon_image.ptr);
}

/**
* Detect horizontal lines in an image, and highlight these only.
*
* # Arguments
* * `img` - A DynamicImage that contains a view into the image.
*
* # Example
*
* ```
* // For example, to display the horizontal lines in an image:
* use photon_old::channels;
* photon_old::conv::detect_horizontal_lines(img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function detect_horizontal_lines(photon_image) {
    return wasm.detect_horizontal_lines(photon_image.ptr);
}

/**
* Detect vertical lines in an image, and highlight these only.
*
* # Arguments
* * `img` - A DynamicImage that contains a view into the image.
*
* # Example
*
* ```
* // For example, to display the vertical lines in an image:
* use photon_old::channels;
* photon_old::conv::detect_vertical_lines(img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function detect_vertical_lines(photon_image) {
    return wasm.detect_vertical_lines(photon_image.ptr);
}

/**
* Detect lines at a forty five degree angle in an image, and highlight these only.
*
* # Arguments
* * `img` - A DynamicImage that contains a view into the image.
*
* # Example
*
* ```
* // For example, to display the lines at a forty five degree angle in an image:
* use photon_old::channels;
* photon_old::conv::detect_fortyfivedeg_lines(img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function detect_45_deg_lines(photon_image) {
    return wasm.detect_45_deg_lines(photon_image.ptr);
}

/**
* Detect lines at a 135 degree angle in an image, and highlight these only.
*
* # Arguments
* * `img` - A DynamicImage that contains a view into the image.
*
* # Example
*
* ```
* // For example, to display the lines at a 135 degree angle in an image:
* use photon_old::channels;
* photon_old::conv::detect_hundredthirtyfive_deg_lines(img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function detect_135_deg_lines(photon_image) {
    return wasm.detect_135_deg_lines(photon_image.ptr);
}

/**
* Apply a standard laplace convolution.
*
* # Arguments
* * `img` - A DynamicImage that contains a view into the image.
*
* # Example
*
* ```
* // For example, to apply a laplace effect:
* use photon_old::conv;
* photon_old::conv::laplace(img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function laplace(photon_image) {
    return wasm.laplace(photon_image.ptr);
}

/**
* Preset edge effect.
*
* # Arguments
* * `img` - A DynamicImage that contains a view into the image.
*
* # Example
*
* ```
* // For example, to apply this effect:
* use photon_old::conv;
* photon_old::conv::edge_one(img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function edge_one(photon_image) {
    return wasm.edge_one(photon_image.ptr);
}

/**
* Apply an emboss effect to an image.
*
* # Arguments
* * `img` - A DynamicImage that contains a view into the image.
*
* # Example
*
* ```
* // For example, to apply an emboss effect:
* use photon_old::conv;
* photon_old::conv::emboss(img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function emboss(photon_image) {
    return wasm.emboss(photon_image.ptr);
}

/**
* Apply a horizontal Sobel filter to an image.
*
* # Arguments
* * `img` - A DynamicImage that contains a view into the image.
*
* # Example
*
* ```
* // For example, to apply a horizontal Sobel filter:
* use photon_old::conv;
* photon_old::conv::sobel_horizontal(img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function sobel_horizontal(photon_image) {
    return wasm.sobel_horizontal(photon_image.ptr);
}

/**
* Apply a horizontal Prewitt convolution to an image.
*
* # Arguments
* * `img` - A DynamicImage that contains a view into the image.
*
* # Example
*
* ```
* // For example, to apply a horizontal Prewitt convolution effect:
* use photon_old::conv;
* photon_old::conv::prewitt_horizontal(img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function prewitt_horizontal(photon_image) {
    return wasm.prewitt_horizontal(photon_image.ptr);
}

/**
* Apply a vertical Sobel filter to an image.
*
* # Arguments
* * `img` - A DynamicImage that contains a view into the image.
*
* # Example
*
* ```
* // For example, to apply a vertical Sobel filter:
* use photon_old::conv;
* photon_old::conv::sobel_vertical(img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function sobel_vertical(photon_image) {
    return wasm.sobel_vertical(photon_image.ptr);
}

/**
* Apply gamma correction.
* Image manipulation effects in the LCh colour space
*
* Effects include:
* * **saturate** - Saturation increase.
* * **desaturate** - Desaturate the image.
* * **shift_hue** - Hue rotation by a specified number of degrees.
* * **darken** - Decrease the brightness.
* * **lighten** - Increase the brightness.
*
* # Arguments
* * `photon_image` - A PhotonImage.
* * `mode` - The effect desired to be applied. Choose from: `saturate`, `desaturate`, `shift_hue`, `darken`, `lighten`
* * `amt` - A float value from 0 to 1 which represents the amount the effect should be increased by.
* # Example
* ```
* // For example to increase the saturation by 10%:
* use photon_old::color_spaces::lch;
*
* // Open the image. A PhotonImage is returned.
* let img: PhotonImage = open_image(\"images/flowers.PNG\");
*
* lch(&mut img, \"saturate\", 0.1);
* ```
* @param {PhotonImage} photon_image
* @param {string} mode
* @param {number} amt
* @returns {void}
*/
export function lch(photon_image, mode, amt) {
    const ptr1 = passStringToWasm(mode);
    const len1 = WASM_VECTOR_LEN;
    try {
        return wasm.lch(photon_image.ptr, ptr1, len1, amt);

    } finally {
        wasm.__wbindgen_free(ptr1, len1 * 1);

    }

}

/**
* Image manipulation effects in the HSL colour space.
*
* Effects include:
* * **saturate** - Saturation increase.
* * **desaturate** - Desaturate the image.
* * **shift_hue** - Hue rotation by a specified number of degrees.
* * **darken** - Decrease the brightness.
* * **lighten** - Increase the brightness.
*
* # Arguments
* * `photon_image` - A PhotonImage.
* * `mode` - The effect desired to be applied. Choose from: `saturate`, `desaturate`, `shift_hue`, `darken`, `lighten`
* * `amt` - A float value from 0 to 1 which represents the amount the effect should be increased by.
* # Example
* ```
* // For example to increase the saturation by 10%:
* use photon_old::color_spaces::hsl;
*
* // Open the image. A PhotonImage is returned.
* let img: PhotonImage = open_image(\"images/flowers.PNG\");
*
* hsl(&mut img, \"saturate\", 0.1);
* ```
* @param {PhotonImage} photon_image
* @param {string} mode
* @param {number} amt
* @returns {void}
*/
export function hsl(photon_image, mode, amt) {
    const ptr1 = passStringToWasm(mode);
    const len1 = WASM_VECTOR_LEN;
    try {
        return wasm.hsl(photon_image.ptr, ptr1, len1, amt);

    } finally {
        wasm.__wbindgen_free(ptr1, len1 * 1);

    }

}

/**
* Image manipulation in the HSV colour space.
*
* Effects include:
* * **saturate** - Saturation increase.
* * **desaturate** - Desaturate the image.
* * **shift_hue** - Hue rotation by a specified number of degrees.
* * **darken** - Decrease the brightness.
* * **lighten** - Increase the brightness.
*
* # Arguments
* * `photon_image` - A PhotonImage.
* * `mode` - The effect desired to be applied. Choose from: `saturate`, `desaturate`, `shift_hue`, `darken`, `lighten`
* * `amt` - A float value from 0 to 1 which represents the amount the effect should be increased by.
*
* # Example
* ```
* // For example to increase the saturation by 10%:
* use photon_old::color_spaces::hsv;
*
* // Open the image. A PhotonImage is returned.
* let img: PhotonImage = open_image(\"images/flowers.PNG\");
*
* hsv(&mut img, \"saturate\", 0.1);
* ```
* @param {PhotonImage} photon_image
* @param {string} mode
* @param {number} amt
* @returns {void}
*/
export function hsv(photon_image, mode, amt) {
    const ptr1 = passStringToWasm(mode);
    const len1 = WASM_VECTOR_LEN;
    try {
        return wasm.hsv(photon_image.ptr, ptr1, len1, amt);

    } finally {
        wasm.__wbindgen_free(ptr1, len1 * 1);

    }

}

/**
* Shift hue by a specified number of degrees in the HSL colour space.
* # Arguments
* * `img` - A PhotonImage.
* * `mode` - The number of degrees to shift the hue by, or hue rotate by.
*
* # Example
* ```
* // For example to hue rotate/shift the hue by 120 degrees in the HSL colour space:
* use photon_old::color_spaces::hue_rotate_hsl;
*
* // Open the image. A PhotonImage is returned.
* let img: PhotonImage = open_image(\"images/flowers.PNG\");
*
* hue_rotate_hsl(&mut img, 120);
* ```
* @param {PhotonImage} img
* @param {number} degrees
* @returns {void}
*/
export function hue_rotate_hsl(img, degrees) {
    return wasm.hue_rotate_hsl(img.ptr, degrees);
}

/**
* Shift hue by a specified number of degrees in the HSV colour space.
* # Arguments
* * `img` - A PhotonImage.
* * `mode` - The number of degrees to shift the hue by, or hue rotate by.
*
* # Example
* ```
* // For example to hue rotate/shift the hue by 120 degrees in the HSV colour space:
* use photon_old::color_spaces::hue_rotate_hsv;
*
* // Open the image. A PhotonImage is returned.
* let img: PhotonImage = open_image(\"images/flowers.PNG\");
*
* hue_rotate_hsv(&mut img, 120);
* ```
* @param {PhotonImage} img
* @param {number} degrees
* @returns {void}
*/
export function hue_rotate_hsv(img, degrees) {
    return wasm.hue_rotate_hsv(img.ptr, degrees);
}

/**
* Shift hue by a specified number of degrees in the LCh colour space.
* # Arguments
* * `img` - A PhotonImage.
* * `mode` - The number of degrees to shift the hue by, or hue rotate by.
*
* # Example
* ```
* // For example to hue rotate/shift the hue by 120 degrees in the HSL colour space:
* use photon_old::color_spaces::hue_rotate_lch;
*
* // Open the image. A PhotonImage is returned.
* let img: PhotonImage = open_image(\"images/flowers.PNG\");
*
* hue_rotate_lch(&mut img, 120);
* ```
* @param {PhotonImage} img
* @param {number} degrees
* @returns {void}
*/
export function hue_rotate_lch(img, degrees) {
    return wasm.hue_rotate_lch(img.ptr, degrees);
}

/**
* Increase the image\'s saturation by converting each pixel\'s colour to the HSL colour space
* and increasing the colour\'s saturation.
* # Arguments
* * `img` - A PhotonImage.
* * `level` - Float value from 0 to 1 representing the level to which to increase the saturation by.
* The `level` must be from 0 to 1 in floating-point, `f32` format.
* Increasing saturation by 80% would be represented by a `level` of 0.8
*
* # Example
* ```
* // For example to increase saturation by 10% in the HSL colour space:
* use photon_old::color_spaces::saturate_hsl;
*
* // Open the image. A PhotonImage is returned.
* let img: PhotonImage = open_image(\"images/flowers.PNG\");
*
* saturate_hsl(&mut img, 0.1);
* ```
* @param {PhotonImage} img
* @param {number} level
* @returns {void}
*/
export function saturate_hsl(img, level) {
    return wasm.saturate_hsl(img.ptr, level);
}

/**
* Increase the image\'s saturation in the LCh colour space.
* # Arguments
* * `img` - A PhotonImage.
* * `level` - Float value from 0 to 1 representing the level to which to increase the saturation by.
* The `level` must be from 0 to 1 in floating-point, `f32` format.
* Increasing saturation by 80% would be represented by a `level` of 0.8
*
* # Example
* ```
* // For example to increase saturation by 40% in the Lch colour space:
* use photon_old::color_spaces::saturate_lch;
*
* // Open the image. A PhotonImage is returned.
* let img: PhotonImage = open_image(\"images/flowers.PNG\");
*
* saturate_lch(&mut img, 0.4);
* ```
* @param {PhotonImage} img
* @param {number} level
* @returns {void}
*/
export function saturate_lch(img, level) {
    return wasm.saturate_lch(img.ptr, level);
}

/**
* Increase the image\'s saturation in the HSV colour space.
* # Arguments
* * `img` - A PhotonImage.
* * `level` - Float value from 0 to 1 representing the level by which to increase the saturation by.
* The `level` must be from 0 to 1 in floating-point, `f32` format.
* Increasing saturation by 80% would be represented by a `level` of 0.8
*
* # Example
* ```
* // For example to increase saturation by 30% in the HSV colour space:
* use photon_old::color_spaces::saturate_hsv;
*
* // Open the image. A PhotonImage is returned.
* let img: PhotonImage = open_image(\"images/flowers.PNG\");
*
* saturate_hsv(&mut img, 0.3);
* ```
* @param {PhotonImage} img
* @param {number} level
* @returns {void}
*/
export function saturate_hsv(img, level) {
    return wasm.saturate_hsv(img.ptr, level);
}

/**
* Lighten an image by a specified amount in the LCh colour space.
*
* # Arguments
* * `img` - A PhotonImage.
* * `level` - Float value from 0 to 1 representing the level to which to lighten the image by.
* The `level` must be from 0 to 1 in floating-point, `f32` format.
* Lightening by 80% would be represented by a `level` of 0.8
*
* # Example
* ```
* // For example to lighten an image by 10% in the LCh colour space:
* use photon_old::color_spaces::lighten_lch;
*
* // Open the image. A PhotonImage is returned.
* let img: PhotonImage = open_image(\"images/flowers.PNG\");
*
* lighten_lch(&mut img, 0.1);
* ```
* @param {PhotonImage} img
* @param {number} level
* @returns {void}
*/
export function lighten_lch(img, level) {
    return wasm.lighten_lch(img.ptr, level);
}

/**
* Lighten an image by a specified amount in the HSL colour space.
* # Arguments
* * `img` - A PhotonImage.
* * `level` - Float value from 0 to 1 representing the level to which to lighten the image by.
* The `level` must be from 0 to 1 in floating-point, `f32` format.
* Lightening by 80% would be represented by a `level` of 0.8
*
* # Example
* ```
* // For example to lighten an image by 10% in the HSL colour space:
* use photon_old::color_spaces::lighten_hsl;
*
* // Open the image. A PhotonImage is returned.
* let img: PhotonImage = open_image(\"images/flowers.PNG\");
*
* lighten_hsl(&mut img, 0.1);
* ```
* @param {PhotonImage} img
* @param {number} level
* @returns {void}
*/
export function lighten_hsl(img, level) {
    return wasm.lighten_hsl(img.ptr, level);
}

/**
* Lighten an image by a specified amount in the HSV colour space.
*
* # Arguments
* * `img` - A PhotonImage.
* * `level` - Float value from 0 to 1 representing the level to which to lighten the image by.
* The `level` must be from 0 to 1 in floating-point, `f32` format.
* Lightening by 80% would be represented by a `level` of 0.8
*
* # Example
* ```
* // For example to lighten an image by 10% in the HSV colour space:
* use photon_old::color_spaces::lighten_hsv;
*
* // Open the image. A PhotonImage is returned.
* let img: PhotonImage = open_image(\"images/flowers.PNG\");
*
* lighten_hsv(&mut img, 0.1);
* ```
* @param {PhotonImage} img
* @param {number} level
* @returns {void}
*/
export function lighten_hsv(img, level) {
    return wasm.lighten_hsv(img.ptr, level);
}

/**
* Darken the image by a specified amount in the LCh colour space.
*
* # Arguments
* * `img` - A PhotonImage.
* * `level` - Float value from 0 to 1 representing the level to which to darken the image by.
* The `level` must be from 0 to 1 in floating-point, `f32` format.
* Darkening by 80% would be represented by a `level` of 0.8
*
* # Example
* ```
* // For example to darken an image by 10% in the LCh colour space:
* use photon_old::color_spaces::darken_lch;
*
* // Open the image. A PhotonImage is returned.
* let img: PhotonImage = open_image(\"images/flowers.PNG\");
*
* darken_lch(&mut img, 0.1);
* ```
* @param {PhotonImage} img
* @param {number} level
* @returns {void}
*/
export function darken_lch(img, level) {
    return wasm.darken_lch(img.ptr, level);
}

/**
* Darken the image by a specified amount in the HSL colour space.
*
* # Arguments
* * `img` - A PhotonImage.
* * `level` - Float value from 0 to 1 representing the level to which to darken the image by.
* The `level` must be from 0 to 1 in floating-point, `f32` format.
* Darkening by 80% would be represented by a `level` of 0.8
*
* # Example
* ```
* // For example to darken an image by 10% in the HSL colour space:
* use photon_old::color_spaces::darken_hsl;
*
* // Open the image. A PhotonImage is returned.
* let img: PhotonImage = open_image(\"images/flowers.PNG\");
*
* darken_hsl(&mut img, 0.1);
* ```
* @param {PhotonImage} img
* @param {number} level
* @returns {void}
*/
export function darken_hsl(img, level) {
    return wasm.darken_hsl(img.ptr, level);
}

/**
* Darken the image\'s colours by a specified amount in the HSV colour space.
*
* # Arguments
* * `img` - A PhotonImage.
* * `level` - Float value from 0 to 1 representing the level to which to darken the image by.
* The `level` must be from 0 to 1 in floating-point, `f32` format.
* Darkening by 80% would be represented by a `level` of 0.8
*
* # Example
* ```
* // For example to darken an image by 10% in the HSV colour space:
* use photon_old::color_spaces::darken_hsv;
*
* // Open the image. A PhotonImage is returned.
* let img: PhotonImage = open_image(\"images/flowers.PNG\");
*
* darken_hsv(&mut img, 0.1);
* ```
* @param {PhotonImage} img
* @param {number} level
* @returns {void}
*/
export function darken_hsv(img, level) {
    return wasm.darken_hsv(img.ptr, level);
}

/**
* Desaturate the image by a specified amount in the HSV colour space.
*
* # Arguments
* * `img` - A PhotonImage.
* * `level` - Float value from 0 to 1 representing the level to which to desaturate the image by.
* The `level` must be from 0 to 1 in floating-point, `f32` format.
* Desaturating by 80% would be represented by a `level` of 0.8
*
* # Example
* ```
* // For example to desaturate an image by 10% in the HSV colour space:
* use photon_old::color_spaces::desaturate_hsv;
*
* // Open the image. A PhotonImage is returned.
* let img: PhotonImage = open_image(\"images/mountains.PNG\");
*
* desaturate_hsv(&mut img, 0.1);
* ```
* @param {PhotonImage} img
* @param {number} level
* @returns {void}
*/
export function desaturate_hsv(img, level) {
    return wasm.desaturate_hsv(img.ptr, level);
}

/**
* Desaturate the image by a specified amount in the HSL colour space.
*
* # Arguments
* * `img` - A PhotonImage.
* * `level` - Float value from 0 to 1 representing the level to which to desaturate the image by.
* The `level` must be from 0 to 1 in floating-point, `f32` format.
* Desaturating by 80% would be represented by a `level` of 0.8
*
* # Example
* ```
* // For example to desaturate an image by 10% in the LCh colour space:
* use photon_old::color_spaces::desaturate_hsl;
*
* // Open the image. A PhotonImage is returned.
* let img: PhotonImage = open_image(\"images/flowers.PNG\");
*
* desaturate_hsl(&mut img, 0.1);
* ```
* @param {PhotonImage} img
* @param {number} level
* @returns {void}
*/
export function desaturate_hsl(img, level) {
    return wasm.desaturate_hsl(img.ptr, level);
}

/**
* Desaturate the image by a specified amount in the LCh colour space.
*
* # Arguments
* * `img` - A PhotonImage.
* * `level` - Float value from 0 to 1 representing the level to which to desaturate the image by.
* The `level` must be from 0 to 1 in floating-point, `f32` format.
* Desaturating by 80% would be represented by a `level` of 0.8
*
* # Example
* ```
* // For example to desaturate an image by 10% in the LCh colour space:
* use photon_old::color_spaces::desaturate_lch;
*
* // Open the image. A PhotonImage is returned.
* let img: PhotonImage = open_image(\"images/flowers.PNG\");
*
* desaturate_lch(&mut img, 0.1);
* ```
* @param {PhotonImage} img
* @param {number} level
* @returns {void}
*/
export function desaturate_lch(img, level) {
    return wasm.desaturate_lch(img.ptr, level);
}

/**
* Crop an image.
*
* # Arguments
* * `img` - A PhotonImage.
*
* ## Example
*
* ```
* // For example, to crop an image at (0, 0) to (500, 800)
* use photon_old::transform;
* let img = photon_old::open_image(\"img.jpg\");
* let cropped_img = photon_old::transform::crop(&mut img, 0, 0, 500, 800);
* // Write the contents of this image in JPG format.
* photon_old::helpers::save_image(cropped_img, \"cropped_image.png\");
* ```
* @param {PhotonImage} photon_image
* @param {number} x1
* @param {number} y1
* @param {number} x2
* @param {number} y2
* @returns {PhotonImage}
*/
export function crop(photon_image, x1, y1, x2, y2) {
    return PhotonImage.__wrap(wasm.crop(photon_image.ptr, x1, y1, x2, y2));
}

/**
* Flip an image horizontally.
*
* # Arguments
* * `img` - A PhotonImage.
*
* ## Example
*
* ```
* // For example, to flip an image horizontally:
* use photon_old::transform;
* let img = photon_old::open_image(\"img.jpg\");
* let new_img = photon_old::transform::fliph(&mut img);
* // Write the contents of this image in JPG format.
* photon_old::helpers::save_image(new_img, \"new_image.png\");
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function fliph(photon_image) {
    return wasm.fliph(photon_image.ptr);
}

/**
* Flip an image vertically.
*
* # Arguments
* * `img` - A PhotonImage.
*
* ## Example
*
* ```
* // For example, to flip an image vertically:
* use photon_old::transform;
* let img = photon_old::open_image(\"img.jpg\");
* let new_img = photon_old::transform::flipv(&mut img);
* // Write the contents of this image in JPG format.
* photon_old::helpers::save_image(new_img, \"new_image.png\");
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function flipv(photon_image) {
    return wasm.flipv(photon_image.ptr);
}

/**
* Resize an image on the web.
*
* # Arguments
* * `img` - A PhotonImage.
* * `width` - New width.
* * `height` - New height.
* @param {PhotonImage} photon_img
* @param {number} width
* @param {number} height
* @returns {any}
*/
export function resize(photon_img, width, height) {
    return takeObject(wasm.resize(photon_img.ptr, width, height));
}

/**
* Adds an offset to the image by a certain number of pixels.
*
* # Arguments
* * `img` - A PhotonImage that contains a view into the image.
* * `offset` - The offset is added to the pixels in the image.
* # Example
*
* ```
* // For example, to offset pixels by 30 pixels on the red channel:
* use photon_old::effects;
* photon_old::effects::offset(img, 0, 30);
* ```
* @param {PhotonImage} photon_image
* @param {number} channel_index
* @param {number} offset
* @returns {void}
*/
export function offset(photon_image, channel_index, offset) {
    return wasm.offset(photon_image.ptr, channel_index, offset);
}

/**
* Adds an offset to the red channel by a certain number of pixels.
*
* # Arguments
* * `img` - A PhotonImage that contains a view into the image.
* * `offset` - The offset you want to move the red channel by.
* # Example
*
* ```
* // For example, to add an offset to the red channel by 30 pixels.
* use photon_old::effects;
* photon_old::effects::offset_red(img, 30);
* ```
* @param {PhotonImage} img
* @param {number} offset_amt
* @returns {void}
*/
export function offset_red(img, offset_amt) {
    return wasm.offset_red(img.ptr, offset_amt);
}

/**
* Adds an offset to the green channel by a certain number of pixels.
*
* # Arguments
* * `img` - A PhotonImage that contains a view into the image.
* * `offset` - The offset you want to move the green channel by.
* # Example
*
* ```
* // For example, to add an offset to the green channel by 30 pixels.
* use photon_old::effects;
* photon_old::effects::offset_green(img, 40);
* ```
* @param {PhotonImage} img
* @param {number} offset_amt
* @returns {void}
*/
export function offset_green(img, offset_amt) {
    return wasm.offset_green(img.ptr, offset_amt);
}

/**
* Adds an offset to the blue channel by a certain number of pixels.
*
* # Arguments
* * `img` - A PhotonImage that contains a view into the image.
* * `offset_amt` - The offset you want to move the blue channel by.
* # Example
* // For example, to add an offset to the green channel by 40 pixels.
* use photon_old::effects;
* photon_old::effects::offset_blue(img, 40);
* ```
* @param {PhotonImage} img
* @param {number} offset_amt
* @returns {void}
*/
export function offset_blue(img, offset_amt) {
    return wasm.offset_blue(img.ptr, offset_amt);
}

/**
* Adds multiple offsets to the image by a certain number of pixels (on two channels).
*
* # Arguments
* * `img` - A PhotonImage that contains a view into the image.
* * `offset` - The offset is added to the pixels in the image.
* # Example
*
* ```
* // For example, to add a 30-pixel offset to both the red and blue channels:
* use photon_old::effects;
* photon_old::effects::multiple_offsets(img, 30, 0, 2);
* ```
* @param {PhotonImage} photon_image
* @param {number} offset
* @param {number} channel_index
* @param {number} channel_index2
* @returns {void}
*/
export function multiple_offsets(photon_image, offset, channel_index, channel_index2) {
    return wasm.multiple_offsets(photon_image.ptr, offset, channel_index, channel_index2);
}

/**
* Reduces an image to the primary colours.
*
* # Arguments
* * `img` - A PhotonImage that contains a view into the image.
* # Example
*
* ```
* // For example, to add a primary colour effect to an image of type `DynamicImage`:
* use photon_old::effects;
* photon_old::effects::primary(img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function primary(photon_image) {
    return wasm.primary(photon_image.ptr);
}

/**
* Colorizes the green channels of the image.
*
* # Arguments
* * `img` - A PhotonImage that contains a view into the image.
* # Example
*
* ```
* // For example, to colorize an image of type `PhotonImage`:
* use photon_old::effects;
* photon_old::effects::colorize(img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function colorize(photon_image) {
    return wasm.colorize(photon_image.ptr);
}

/**
* Applies a solarizing effect to an image.
*
* # Arguments
* * `img` - A PhotonImage that contains a view into the image.
* # Example
*
* ```
* // For example, to colorize an image of type `PhotonImage`:
* use photon_old::effects;
* photon_old::effects::solarize(img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function solarize(photon_image) {
    return wasm.solarize(photon_image.ptr);
}

/**
* Increase the brightness of an image by a factor.
*
* # Arguments
* * `img` - A PhotonImage that contains a view into the image.
* * `brightness` - A u8 to add to the brightness.
* # Example
*
* ```
* photon_old::effects::inc_brightness(img, 10);
* ```
* @param {PhotonImage} photon_image
* @param {number} brightness
* @returns {void}
*/
export function inc_brightness(photon_image, brightness) {
    return wasm.inc_brightness(photon_image.ptr, brightness);
}

/**
* Tint an image by adding an offset to averaged RGB channel values.
*
* # Arguments
* * `img` - A PhotonImage that contains a view into the image.
* * `r_offset` - The amount the  R channel should be incremented by.
* * `g_offset` - The amount the G channel should be incremented by.
* * `b_offset` - The amount the B channel should be incremented by.
* # Example
*
* ```
* // For example, to tint an image of type `PhotonImage`:
* photon_old::tint(img, 10, 20, 15);
* ```
*
* @param {PhotonImage} photon_image
* @param {number} r_offset
* @param {number} g_offset
* @param {number} b_offset
* @returns {void}
*/
export function tint(photon_image, r_offset, g_offset, b_offset) {
    return wasm.tint(photon_image.ptr, r_offset, g_offset, b_offset);
}

/**
* Horizontal strips. Divide an image into a series of equal-height strips, for an artistic effect.
* @param {PhotonImage} photon_image
* @param {number} num_strips
* @returns {void}
*/
export function horizontal_strips(photon_image, num_strips) {
    return wasm.horizontal_strips(photon_image.ptr, num_strips);
}

/**
* Vertical strips. Divide an image into a series of equal-width strips, for an artistic effect.
* @param {PhotonImage} photon_image
* @param {number} num_strips
* @returns {void}
*/
export function vertical_strips(photon_image, num_strips) {
    return wasm.vertical_strips(photon_image.ptr, num_strips);
}

/**
* Solarization on the Blue channel.
*
* # Arguments
* * `img` - A PhotonImage.
* # Example
*
* ```
* photon_old::filters::neue(&mut img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function neue(photon_image) {
    return wasm.neue(photon_image.ptr);
}

/**
* Solarization on the Red and Green channels.
*
* # Arguments
* * `img` - A PhotonImage.
* # Example
*
* ```
* photon_old::filters::lix(&mut img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function lix(photon_image) {
    return wasm.lix(photon_image.ptr);
}

/**
* Solarization on the Red and Blue channels.
*
* # Arguments
* * `img` - A PhotonImage.
* # Example
*
* ```
* photon_old::filters::ryo(&mut img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function ryo(photon_image) {
    return wasm.ryo(photon_image.ptr);
}

/**
* Apply a filter to an image. Over 20 filters are available.
* The filters are as follows:
* * **oceanic**: Add an aquamarine-tinted hue to an image.
* * **islands**: Aquamarine tint.
* * **marine**: Add a green/blue mixed hue to an image.
* * **seagreen**: Dark green hue, with tones of blue.
* * **flagblue**: Royal blue tint
* * **liquid**: Blue-inspired tint.
* * **diamante**: Custom filter with a blue/turquoise tint.
* * **radio**: Fallout-style radio effect.
* * **twenties**: Slight-blue tinted historical effect.
* * **rosetint**: Rose-tinted filter.
* * **mauve**: Purple-infused filter.
* * **bluechrome**: Blue monochrome effect.
* * **vintage**: Vintage filter with a red tint.
* * **perfume**: Increase the blue channel, with moderate increases in the Red and Green channels.
* * **serenity**: Custom filter with an increase in the Blue channel\'s values.
* # Arguments
* * `img` - A PhotonImage.
* * `blend_mode` - The blending mode to use. See above for complete list of blend modes available.
* # Example
*
* ```
* // For example, to add a filter called \"vintage\" to an image:
* use photon_old::filters;
* photon_old::filters::filter(&mut img, \"vintage\");
* ```
* @param {PhotonImage} img
* @param {string} filter_name
* @returns {void}
*/
export function filter(img, filter_name) {
    const ptr1 = passStringToWasm(filter_name);
    const len1 = WASM_VECTOR_LEN;
    try {
        return wasm.filter(img.ptr, ptr1, len1);

    } finally {
        wasm.__wbindgen_free(ptr1, len1 * 1);

    }

}

/**
* Alter a select channel by incrementing or decrementing its value by a constant.
*
* # Arguments
* * `img` - A PhotonImage.
* * `channel` - The channel you wish to alter, it should be either 0, 1 or 2,
* representing R, G, or B respectively. (O=Red, 1=Green, 2=Blue)
* * `amount` - The amount to increment/decrement the channel\'s value by for that pixel.
* A positive value will increment/decrement the channel\'s value, a negative value will decrement the channel\'s value.
*
* ## Example
*
* ```
* // For example, to increase the Red channel for all pixels by 10:
* use photon_old::channels;
* let img = photon_old::open_image(\"img.jpg\");
* photon_old::channels::alter_channel(&mut img, 0, 10);
* // Write the contents of this image in JPG format.
* photon_old::helpers::save_image(img, \"new_image.png\");
* ```
*
* Adds a constant to a select R, G, or B channel\'s value.
*
* ### Decrease a channel\'s value
* // For example, to decrease the Green channel for all pixels by 20:
* ```
* use photon_old::channels;
* photon_old::channels::alter_channel(&mut img, 1, -20);
* ```
* **Note**: Note the use of a minus symbol when decreasing the channel.
* @param {PhotonImage} img
* @param {number} channel
* @param {number} amt
* @returns {void}
*/
export function alter_channel(img, channel, amt) {
    return wasm.alter_channel(img.ptr, channel, amt);
}

/**
* Increment or decrement every pixel\'s Red channel by a constant.
*
* # Arguments
* * `img` - A PhotonImage. See the PhotonImage struct for details.
* * `amt` - The amount to increment or decrement the channel\'s value by for that pixel.
*
* # Example
*
* ```
* // For example, to increase the Red channel for all pixels by 10:
* use photon_old::channels;
* photon_old::channels::alter_red_channel(&mut img, 10);
* ```
* @param {PhotonImage} photon_image
* @param {number} amt
* @returns {void}
*/
export function alter_red_channel(photon_image, amt) {
    return wasm.alter_red_channel(photon_image.ptr, amt);
}

/**
* Increment or decrement every pixel\'s Green channel by a constant.
*
* # Arguments
* * `img` - A PhotonImage.
* * `amt` - The amount to increment/decrement the channel\'s value by for that pixel.
*
* # Example
*
* ```
* // For example, to increase the Green channel for all pixels by 20:
* use photon_old::channels;
* photon_old::channels::alter_green_channel(&mut img, 10);
* ```
* @param {PhotonImage} img
* @param {number} amt
* @returns {void}
*/
export function alter_green_channel(img, amt) {
    return wasm.alter_green_channel(img.ptr, amt);
}

/**
* Increment or decrement every pixel\'s Blue channel by a constant.
*
* # Arguments
* * `img` - A PhotonImage.
* * `amt` - The amount to increment or decrement the channel\'s value by for that pixel.
*
* # Example
*
* ```
* // For example, to increase the Blue channel for all pixels by 10:
* use photon_old::channels;
* photon_old::channels::alter_blue_channel(&mut img, 10);
* ```
* @param {PhotonImage} img
* @param {number} amt
* @returns {void}
*/
export function alter_blue_channel(img, amt) {
    return wasm.alter_blue_channel(img.ptr, amt);
}

/**
* Increment/decrement two channels\' values simultaneously by adding an amt to each channel per pixel.
*
* # Arguments
* * `img` - A PhotonImage.
* * `channel1` - A usize from 0 to 2 that represents either the R, G or B channels.
* * `amt1` - The amount to increment/decrement the channel\'s value by for that pixel.
* * `channel2` -A usize from 0 to 2 that represents either the R, G or B channels.
* * `amt2` - The amount to increment/decrement the channel\'s value by for that pixel.
*
* # Example
*
* ```
* // For example, to increase the values of the Red and Blue channels per pixel:
* photon_old::channels::inc_two_channels(&mut img, 0, 10, 2, 20);
* ```
* @param {PhotonImage} img
* @param {number} channel1
* @param {number} amt1
* @param {number} channel2
* @param {number} amt2
* @returns {void}
*/
export function alter_two_channels(img, channel1, amt1, channel2, amt2) {
    return wasm.alter_two_channels(img.ptr, channel1, amt1, channel2, amt2);
}

/**
* Increment all 3 channels\' values by adding an amt to each channel per pixel.
*
* # Arguments
* * `img` - A PhotonImage.
* * `r_amt` - The amount to increment/decrement the Red channel by.
* * `g_amt` - The amount to increment/decrement the Green channel by.
* * `b_amt` - The amount to increment/decrement the Blue channel by.
*
* # Example
*
* ```
* // For example, to increase the values of the Red channel by 10, the Green channel by 20,
* // and the Blue channel by 50:
* // photon_old::channels::alter_channels(&mut img, 10, 20, 50);
* ```
* @param {PhotonImage} img
* @param {number} r_amt
* @param {number} g_amt
* @param {number} b_amt
* @returns {void}
*/
export function alter_channels(img, r_amt, g_amt, b_amt) {
    return wasm.alter_channels(img.ptr, r_amt, g_amt, b_amt);
}

/**
* Set a certain channel to zero, thus removing the channel\'s influence in the pixels\' final rendered colour.
*
* # Arguments
* * `img` - A PhotonImage.
* * `channel` - The channel to be removed; must be a usize from 0 to 2, with 0 representing Red, 1 representing Green, and 2 representing Blue.
* * `min_filter` - Minimum filter. Value between 0 and 255. Only remove the channel if the current pixel\'s channel value is less than this minimum filter. To completely
* remove the channel, set this value to 255, to leave the channel as is, set to 0, and to set a channel to zero for a pixel whose red value is greater than 50,
* then channel would be 0 and min_filter would be 50.
*
* # Example
*
* ```
* // For example, to remove the Red channel with a min_filter of 100:
* photon_old::channels::remove_channel(&mut img, 0, 100);
* ```
* @param {PhotonImage} img
* @param {number} channel
* @param {number} min_filter
* @returns {void}
*/
export function remove_channel(img, channel, min_filter) {
    return wasm.remove_channel(img.ptr, channel, min_filter);
}

/**
* Remove the Red channel\'s influence in an image.
*
* # Arguments
* * `img` - A PhotonImage.
* * `min_filter` - Only remove the channel if the current pixel\'s channel value is less than this minimum filter.
*
* # Example
*
* ```
* // For example, to remove the red channel for red channel pixel values less than 50:
* photon_old::channels::remove_red_channel(&mut img, 50);
* ```
* @param {PhotonImage} img
* @param {number} min_filter
* @returns {void}
*/
export function remove_red_channel(img, min_filter) {
    return wasm.remove_red_channel(img.ptr, min_filter);
}

/**
* Remove the Green channel\'s influence in an image.
*
* # Arguments
* * `img` - A PhotonImage.
* * `min_filter` - Only remove the channel if the current pixel\'s channel value is less than this minimum filter.
*
* # Example
*
* ```
* // For example, to remove the green channel for green channel pixel values less than 50:
* photon_old::channels::remove_green_channel(img, 50);
* ```
* @param {PhotonImage} img
* @param {number} min_filter
* @returns {void}
*/
export function remove_green_channel(img, min_filter) {
    return wasm.remove_green_channel(img.ptr, min_filter);
}

/**
* Remove the Blue channel\'s influence in an image.
*
* # Arguments
* * `img` - A PhotonImage.
* * `min_filter` - Only remove the channel if the current pixel\'s channel value is less than this minimum filter.
*
* # Example
*
* ```
* // For example, to remove the blue channel for blue channel pixel values less than 50:
* photon_old::channels::remove_blue_channel(&mut img, 50);
* ```
* @param {PhotonImage} img
* @param {number} min_filter
* @returns {void}
*/
export function remove_blue_channel(img, min_filter) {
    return wasm.remove_blue_channel(img.ptr, min_filter);
}

/**
* Swap two channels.
*
* # Arguments
* * `img` - A PhotonImage.
* * `channel1` - An index from 0 to 2, representing the Red, Green or Blue channels respectively. Red would be represented by 0, Green by 1, and Blue by 2.
* * `channel2` - An index from 0 to 2, representing the Red, Green or Blue channels respectively. Same as above.
*
* # Example
*
* ```
* // For example, to swap the values of the Red channel with the values of the Blue channel:
* photon_old::channels::swap_channels(&mut img, 0, 2);
* ```
* @param {PhotonImage} img
* @param {number} channel1
* @param {number} channel2
* @returns {void}
*/
export function swap_channels(img, channel1, channel2) {
    return wasm.swap_channels(img.ptr, channel1, channel2);
}

/**
* Selective hue rotation.
*
* Only rotate the hue of a pixel if its RGB values are within a specified range.
* This function only rotates a pixel\'s hue to another  if it is visually similar to the colour specified.
* For example, if a user wishes all pixels that are blue to be changed to red, they can selectively specify  only the blue pixels to be changed.
* # Arguments
* * `img` - A PhotonImage.
* * `ref_color` - The `RGB` value of the reference color (to be compared to)
* * `degrees` - The amount of degrees to hue rotate by.
*
* # Example
*
* ```
* // For example, to only rotate the pixels that are of RGB value RGB{20, 40, 60}:
* let ref_color = Rgb{20, 40, 60};
* photon_old::channels::selective_hue_rotate(&mut img, ref_color, 180);
* ```
* @param {PhotonImage} photon_image
* @param {Rgb} ref_color
* @param {number} degrees
* @returns {void}
*/
export function selective_hue_rotate(photon_image, ref_color, degrees) {
    const ptr1 = ref_color.ptr;
    ref_color.ptr = 0;
    return wasm.selective_hue_rotate(photon_image.ptr, ptr1, degrees);
}

/**
* Selectively lighten an image.
*
* Only lighten the hue of a pixel if its colour matches or is similar to the RGB colour specified.
* For example, if a user wishes all pixels that are blue to be lightened, they can selectively specify  only the blue pixels to be changed.
* # Arguments
* * `img` - A PhotonImage.
* * `ref_color` - The `RGB` value of the reference color (to be compared to)
* * `amt` - The level from 0 to 1 to lighten the hue by. Increasing by 10% would have an `amt` of 0.1
*
* # Example
*
* ```
* // For example, to only lighten the pixels that are of or similar to RGB value RGB{20, 40, 60}:
* let ref_color = Rgb{20, 40, 60};
* photon_old::channels::selective_lighten(&mut img, ref_color, 0.2);
* ```
* @param {PhotonImage} img
* @param {Rgb} ref_color
* @param {number} amt
* @returns {void}
*/
export function selective_lighten(img, ref_color, amt) {
    const ptr1 = ref_color.ptr;
    ref_color.ptr = 0;
    return wasm.selective_lighten(img.ptr, ptr1, amt);
}

/**
* Selectively desaturate pixel colours which are similar to the reference colour provided.
*
* Similarity between two colours is calculated via the CIE76 formula.
* Only desaturates the hue of a pixel if its similarity to the reference colour is within the range in the algorithm.
* For example, if a user wishes all pixels that are blue to be desaturated by 0.1, they can selectively specify  only the blue pixels to be changed.
* # Arguments
* * `img` - A PhotonImage.
* * `ref_color` - The `RGB` value of the reference color (to be compared to)
* * `amt` - The amount of desaturate the colour by.
*
* # Example
*
* ```
* // For example, to only desaturate the pixels that are similar to the RGB value RGB{20, 40, 60}:
* let ref_color = Rgb{20, 40, 60};
* photon_old::channels::selective_desaturate(&mut img, ref_color, 0.1);
* ```
* @param {PhotonImage} img
* @param {Rgb} ref_color
* @param {number} amt
* @returns {void}
*/
export function selective_desaturate(img, ref_color, amt) {
    const ptr1 = ref_color.ptr;
    ref_color.ptr = 0;
    return wasm.selective_desaturate(img.ptr, ptr1, amt);
}

/**
* Selectively saturate pixel colours which are similar to the reference colour provided.
*
* Similarity between two colours is calculated via the CIE76 formula.
* Only saturates the hue of a pixel if its similarity to the reference colour is within the range in the algorithm.
* For example, if a user wishes all pixels that are blue to have an increase in saturation by 10%, they can selectively specify only the blue pixels to be changed.
* # Arguments
* * `img` - A PhotonImage.
* * `ref_color` - The `RGB` value of the reference color (to be compared to)
* * `amt` - The amount of saturate the colour by.
*
* # Example
*
* ```
* // For example, to only increase the saturation of pixels that are similar to the RGB value RGB{20, 40, 60}:
* let ref_color = Rgb{20, 40, 60};
* photon_old::channels::selective_saturate(&mut img, ref_color, 0.1);
* ```
* @param {PhotonImage} img
* @param {Rgb} ref_color
* @param {number} amt
* @returns {void}
*/
export function selective_saturate(img, ref_color, amt) {
    const ptr1 = ref_color.ptr;
    ref_color.ptr = 0;
    return wasm.selective_saturate(img.ptr, ptr1, amt);
}

/**
* Selectively changes a pixel to greyscale if it is *not* visually similar or close to the colour specified.
* Only changes the colour of a pixel if its RGB values are within a specified range.
*
* (Similarity between two colours is calculated via the CIE76 formula.)
* For example, if a user wishes all pixels that are *NOT* blue to be displayed in greyscale, they can selectively specify only the blue pixels to be
* kept in the photo.
* # Arguments
* * `img` - A PhotonImage.
* * `ref_color` - The `RGB` value of the reference color (to be compared to)
*
* # Example
*
* ```
* // For example, to greyscale all pixels that are *not* visually similar to the RGB colour RGB{20, 40, 60}:
* let ref_color = Rgb{20, 40, 60};
* photon_old::channels::selective_greyscale(&mut img, ref_color);
* ```
* @param {PhotonImage} photon_image
* @param {Rgb} ref_color
* @returns {void}
*/
export function selective_greyscale(photon_image, ref_color) {
    const ptr0 = photon_image.ptr;
    photon_image.ptr = 0;
    const ptr1 = ref_color.ptr;
    ref_color.ptr = 0;
    return wasm.selective_greyscale(ptr0, ptr1);
}

/**
* Apply a monochrome effect of a certain colour.
*
* It does so by averaging the R, G, and B values of a pixel, and then adding a
* separate value to that averaged value for each channel to produce a tint.
* # Arguments
* * `photon_image` - A PhotonImage.
* * `r_offset` - The value to add to the Red channel per pixel.
* * `g_offset` - The value to add to the Green channel per pixel.
* * `b_offset` - The value to add to the Blue channel per pixel.
*
* # Example
*
* ```
* // For example, to apply a monochrome effect to an image:
* use photon_old::monochrome;
* monochrome::monochroma(&mut img, 40, 50, 100);
* ```
*
* @param {PhotonImage} photon_image
* @param {number} r_offset
* @param {number} g_offset
* @param {number} b_offset
* @returns {void}
*/
export function monochrome(photon_image, r_offset, g_offset, b_offset) {
    return wasm.monochrome(photon_image.ptr, r_offset, g_offset, b_offset);
}

/**
* Convert an image to sepia.
*
* # Arguments
* * `photon_image` - A PhotonImage.
* # Example
*
* ```
* // For example, to tint an image of type `PhotonImage`:
* use photon_old::monochrome;
* monochrome::sepia(&mut img);
* ```
*
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function sepia(photon_image) {
    return wasm.sepia(photon_image.ptr);
}

/**
* Convert an image to grayscale using the conventional averaging algorithm.
*
* # Arguments
* * `photon_image` - A PhotonImage.
* # Example
*
* ```
* // For example, to convert an image of type `PhotonImage` to greyscale:
* use photon_old::monochrome;
* monochrome::grayscale(&mut img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function grayscale(photon_image) {
    return wasm.grayscale(photon_image.ptr);
}

/**
* Convert an image to grayscale with a human corrected factor, to account for human vision.
*
* # Arguments
* * `photon_image` - A PhotonImage.
* # Example
*
* ```
* // For example, to convert an image of type `PhotonImage` to greyscale with a human corrected factor:
* use photon_old::monochrome;
* monochrome::grayscale_human_corrected(&mut img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function grayscale_human_corrected(photon_image) {
    return wasm.grayscale_human_corrected(photon_image.ptr);
}

/**
* Desaturate an image by getting the min/max of each pixel\'s RGB values.
*
* # Arguments
* * `photon_image` - A PhotonImage.
* # Example
*
* ```
* // For example, to desaturate an image:
* use photon_old::monochrome;
* monochrome::desaturate(&mut img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function desaturate(photon_image) {
    return wasm.desaturate(photon_image.ptr);
}

/**
* Uses a min. decomposition algorithm to convert an image to greyscale.
*
* # Arguments
* * `photon_image` - A PhotonImage.
* # Example
*
* ```
* // For example, to decompose an image with min decomposition:
* monochrome::decompose_min(&mut img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function decompose_min(photon_image) {
    return wasm.decompose_min(photon_image.ptr);
}

/**
* Uses a max. decomposition algorithm to convert an image to greyscale.
*
* # Arguments
* * `photon_image` - A PhotonImage.
* # Example
*
* ```
* // For example, to decompose an image with max decomposition:
* monochrome::decompose_max(&mut img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function decompose_max(photon_image) {
    return wasm.decompose_max(photon_image.ptr);
}

/**
* Employ only a limited number of gray shades in an image.
*
* # Arguments
* * `photon_image` - A PhotonImage.
* * `num_shades` - The number of grayscale shades to be displayed in the image.
* # Example
*
* ```
* // For example, to limit an image to four shades of gray only:
* monochrome::grayscale_shades(&mut img, 4);
* ```
* @param {PhotonImage} photon_image
* @param {number} num_shades
* @returns {void}
*/
export function grayscale_shades(photon_image, num_shades) {
    return wasm.grayscale_shades(photon_image.ptr, num_shades);
}

/**
* Convert an image to grayscale by setting a pixel\'s 3 RGB values to the Red channel\'s value.
*
* # Arguments
* * `photon_image` - A PhotonImage.
* # Example
*
* ```
* monochrome::r_grayscale(&mut img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function r_grayscale(photon_image) {
    return wasm.r_grayscale(photon_image.ptr);
}

/**
* Convert an image to grayscale by setting a pixel\'s 3 RGB values to the Green channel\'s value.
*
* # Arguments
* * `photon_image` - A PhotonImage.
* # Example
*
* ```
* monochrome::g_grayscale(&mut img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function g_grayscale(photon_image) {
    return wasm.g_grayscale(photon_image.ptr);
}

/**
* Convert an image to grayscale by setting a pixel\'s 3 RGB values to the Blue channel\'s value.
*
* # Arguments
* * `photon_image` - A PhotonImage.
* # Example
*
* ```
* monochrome::b_grayscale(&mut img);
* ```
* @param {PhotonImage} photon_image
* @returns {void}
*/
export function b_grayscale(photon_image) {
    return wasm.b_grayscale(photon_image.ptr);
}

/**
* Convert an image to grayscale by setting a pixel\'s 3 RGB values to a chosen channel\'s value.
*
* # Arguments
* * `photon_image` - A PhotonImage.
* * `channel` - A usize representing the channel from 0 to 2. O represents the Red channel, 1 the Green channel, and 2 the Blue channel.
* # Example
* To grayscale using only values from the Red channel:
* ```
* monochrome::single_channel_grayscale(&mut img, 0);
* ```
* @param {PhotonImage} photon_image
* @param {number} channel
* @returns {void}
*/
export function single_channel_grayscale(photon_image, channel) {
    return wasm.single_channel_grayscale(photon_image.ptr, channel);
}

/**
* Threshold an image using a standard thresholding algorithm.
*
* # Arguments
* * `photon_image` - A PhotonImage.
* * `threshold` - The amount the image should be thresholded by from 0 to 255.
* # Example
*
* ```
* // For example, to threshold an image of type `PhotonImage`:
* use photon_old::monochrome;
* monochrome::threshold(&mut img, 30);
* ```
* @param {PhotonImage} photon_image
* @param {number} threshold
* @returns {void}
*/
export function threshold(photon_image, threshold) {
    return wasm.threshold(photon_image.ptr, threshold);
}

let cachedTextDecoder = new TextDecoder('utf-8');

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

export function __wbg_error_4bb6c2a97407129a(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);

    varg0 = varg0.slice();
    wasm.__wbindgen_free(arg0, arg1 * 1);

    console.error(varg0);
}

export function __wbg_new_59cb74e423758ede() {
    return addHeapObject(new Error());
}

export function __wbg_stack_558ba5917b466edd(ret, arg0) {

    const retptr = passStringToWasm(getObject(arg0).stack);
    const retlen = WASM_VECTOR_LEN;
    const mem = getUint32Memory();
    mem[ret / 4] = retptr;
    mem[ret / 4 + 1] = retlen;

}

export function __widl_instanceof_CanvasRenderingContext2D(idx) { return getObject(idx) instanceof CanvasRenderingContext2D ? 1 : 0; }

function handleError(exnptr, e) {
    const view = getUint32Memory();
    view[exnptr / 4] = 1;
    view[exnptr / 4 + 1] = addHeapObject(e);
}

export function __widl_f_get_image_data_CanvasRenderingContext2D(arg0, arg1, arg2, arg3, arg4, exnptr) {
    try {
        return addHeapObject(getObject(arg0).getImageData(arg1, arg2, arg3, arg4));
    } catch (e) {
        handleError(exnptr, e);
    }
}

export function __widl_f_put_image_data_CanvasRenderingContext2D(arg0, arg1, arg2, arg3, exnptr) {
    try {
        getObject(arg0).putImageData(getObject(arg1), arg2, arg3);
    } catch (e) {
        handleError(exnptr, e);
    }
}

export function __widl_f_create_element_Document(arg0, arg1, arg2, exnptr) {
    let varg1 = getStringFromWasm(arg1, arg2);
    try {
        return addHeapObject(getObject(arg0).createElement(varg1));
    } catch (e) {
        handleError(exnptr, e);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

export function __widl_f_body_Document(arg0) {

    const val = getObject(arg0).body;
    return isLikeNone(val) ? 0 : addHeapObject(val);

}

export function __widl_instanceof_HTMLCanvasElement(idx) { return getObject(idx) instanceof HTMLCanvasElement ? 1 : 0; }

export function __widl_f_get_context_HTMLCanvasElement(arg0, arg1, arg2, exnptr) {
    let varg1 = getStringFromWasm(arg1, arg2);
    try {

        const val = getObject(arg0).getContext(varg1);
        return isLikeNone(val) ? 0 : addHeapObject(val);

    } catch (e) {
        handleError(exnptr, e);
    }
}

export function __widl_f_width_HTMLCanvasElement(arg0) {
    return getObject(arg0).width;
}

export function __widl_f_set_width_HTMLCanvasElement(arg0, arg1) {
    getObject(arg0).width = arg1 >>> 0;
}

export function __widl_f_height_HTMLCanvasElement(arg0) {
    return getObject(arg0).height;
}

export function __widl_f_set_height_HTMLCanvasElement(arg0, arg1) {
    getObject(arg0).height = arg1 >>> 0;
}

let cachegetUint8ClampedMemory = null;
function getUint8ClampedMemory() {
    if (cachegetUint8ClampedMemory === null || cachegetUint8ClampedMemory.buffer !== wasm.memory.buffer) {
        cachegetUint8ClampedMemory = new Uint8ClampedArray(wasm.memory.buffer);
    }
    return cachegetUint8ClampedMemory;
}

function getClampedArrayU8FromWasm(ptr, len) {
    return getUint8ClampedMemory().subarray(ptr / 1, ptr / 1 + len);
}

export function __widl_f_new_with_u8_clamped_array_and_sh_ImageData(arg0, arg1, arg2, arg3, exnptr) {
    let varg0 = getClampedArrayU8FromWasm(arg0, arg1);
    try {
        return addHeapObject(new ImageData(varg0, arg2 >>> 0, arg3 >>> 0));
    } catch (e) {
        handleError(exnptr, e);
    }
}

export function __widl_f_width_ImageData(arg0) {
    return getObject(arg0).width;
}

export function __widl_f_height_ImageData(arg0) {
    return getObject(arg0).height;
}

export function __widl_f_data_ImageData(ret, arg0) {

    const retptr = passArray8ToWasm(getObject(arg0).data);
    const retlen = WASM_VECTOR_LEN;
    const mem = getUint32Memory();
    mem[ret / 4] = retptr;
    mem[ret / 4 + 1] = retlen;

}

export function __widl_f_append_child_Node(arg0, arg1, exnptr) {
    try {
        return addHeapObject(getObject(arg0).appendChild(getObject(arg1)));
    } catch (e) {
        handleError(exnptr, e);
    }
}

export function __widl_f_set_text_content_Node(arg0, arg1, arg2) {
    let varg1 = arg1 == 0 ? undefined : getStringFromWasm(arg1, arg2);
    getObject(arg0).textContent = varg1;
}

export function __widl_instanceof_Window(idx) { return getObject(idx) instanceof Window ? 1 : 0; }

export function __widl_f_document_Window(arg0) {

    const val = getObject(arg0).document;
    return isLikeNone(val) ? 0 : addHeapObject(val);

}

export function __wbg_newnoargs_a172f39151049128(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    return addHeapObject(new Function(varg0));
}

export function __wbg_call_8a9c8b0a32a202ff(arg0, arg1, exnptr) {
    try {
        return addHeapObject(getObject(arg0).call(getObject(arg1)));
    } catch (e) {
        handleError(exnptr, e);
    }
}

export function __wbindgen_debug_string(i, len_ptr) {
    const debug_str =
    val => {
        // primitive types
        const type = typeof val;
        if (type == 'number' || type == 'boolean' || val == null) {
            return  `${val}`;
        }
        if (type == 'string') {
            return `"${val}"`;
        }
        if (type == 'symbol') {
            const description = val.description;
            if (description == null) {
                return 'Symbol';
            } else {
                return `Symbol(${description})`;
            }
        }
        if (type == 'function') {
            const name = val.name;
            if (typeof name == 'string' && name.length > 0) {
                return `Function(${name})`;
            } else {
                return 'Function';
            }
        }
        // objects
        if (Array.isArray(val)) {
            const length = val.length;
            let debug = '[';
            if (length > 0) {
                debug += debug_str(val[0]);
            }
            for(let i = 1; i < length; i++) {
                debug += ', ' + debug_str(val[i]);
            }
            debug += ']';
            return debug;
        }
        // Test for built-in
        const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
        let className;
        if (builtInMatches.length > 1) {
            className = builtInMatches[1];
        } else {
            // Failed to match the standard '[object ClassName]'
            return toString.call(val);
        }
        if (className == 'Object') {
            // we're a user defined class or Object
            // JSON.stringify avoids problems with cycles, and is generally much
            // easier than looping through ownProperties of `val`.
            try {
                return 'Object(' + JSON.stringify(val) + ')';
            } catch (_) {
                return 'Object';
            }
        }
        // errors
        if (val instanceof Error) {
        return `${val.name}: ${val.message}
        ${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}
;
const toString = Object.prototype.toString;
const val = getObject(i);
const debug = debug_str(val);
const ptr = passStringToWasm(debug);
getUint32Memory()[len_ptr / 4] = WASM_VECTOR_LEN;
return ptr;
}

export function __wbindgen_rethrow(idx) { throw takeObject(idx); }

export function __wbindgen_throw(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
}

function freePhotonImage(ptr) {

    wasm.__wbg_photonimage_free(ptr);
}
/**
* Provides the image\'s height, width, and contains the image\'s raw pixels.
* For use when communicating between JS and WASM, and also natively.
*/
export class PhotonImage {

    static __wrap(ptr) {
        const obj = Object.create(PhotonImage.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        freePhotonImage(ptr);
    }

    /**
    * @param {Uint8Array} raw_pixels
    * @param {number} width
    * @param {number} height
    * @returns {}
    */
    constructor(raw_pixels, width, height) {
        const ptr0 = passArray8ToWasm(raw_pixels);
        const len0 = WASM_VECTOR_LEN;
        this.ptr = wasm.photonimage_new(ptr0, len0, width, height);
    }
    /**
    * Create a new PhotonImage from a base64 string.
    * @param {string} base64
    * @returns {PhotonImage}
    */
    static new_from_base64(base64) {
        const ptr0 = passStringToWasm(base64);
        const len0 = WASM_VECTOR_LEN;
        try {
            return PhotonImage.__wrap(wasm.photonimage_new_from_base64(ptr0, len0));

        } finally {
            wasm.__wbindgen_free(ptr0, len0 * 1);

        }

    }
    /**
    * @param {Uint8Array} vec
    * @returns {PhotonImage}
    */
    static new_from_byteslice(vec) {
        const ptr0 = passArray8ToWasm(vec);
        const len0 = WASM_VECTOR_LEN;
        return PhotonImage.__wrap(wasm.photonimage_new_from_byteslice(ptr0, len0));
    }
    /**
    * Get the width of the PhotonImage.
    * @returns {number}
    */
    get_width() {
        return wasm.photonimage_get_width(this.ptr) >>> 0;
    }
    /**
    * @returns {Uint8Array}
    */
    get_raw_pixels() {
        const retptr = globalArgumentPtr();
        wasm.photonimage_get_raw_pixels(retptr, this.ptr);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getArrayU8FromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 1);
        return realRet;

    }
    /**
    * Get the height of the PhotonImage.
    * @returns {number}
    */
    get_height() {
        return wasm.photonimage_get_height(this.ptr) >>> 0;
    }
    /**
    * Convert the PhotonImage\'s raw pixels to JS-compatible ImageData.
    * @returns {any}
    */
    get_image_data() {
        return takeObject(wasm.photonimage_get_image_data(this.ptr));
    }
    /**
    * Convert ImageData to raw pixels, and update the PhotonImage\'s raw pixels to this.
    * @param {any} img_data
    * @returns {void}
    */
    set_imgdata(img_data) {
        return wasm.photonimage_set_imgdata(this.ptr, addHeapObject(img_data));
    }
}

function freeRgb(ptr) {

    wasm.__wbg_rgb_free(ptr);
}
/**
* RGB color type.
*/
export class Rgb {

    static __wrap(ptr) {
        const obj = Object.create(Rgb.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        freeRgb(ptr);
    }

    /**
    * @param {number} r
    * @param {number} g
    * @param {number} b
    * @returns {Rgb}
    */
    static new(r, g, b) {
        return Rgb.__wrap(wasm.rgb_new(r, g, b));
    }
    /**
    * @param {number} r
    * @returns {void}
    */
    set_red(r) {
        return wasm.rgb_set_red(this.ptr, r);
    }
    /**
    * @param {number} g
    * @returns {void}
    */
    set_green(g) {
        return wasm.rgb_set_green(this.ptr, g);
    }
    /**
    * @param {number} b
    * @returns {void}
    */
    set_blue(b) {
        return wasm.rgb_set_blue(this.ptr, b);
    }
    /**
    * @returns {number}
    */
    get_red() {
        return wasm.rgb_get_red(this.ptr);
    }
    /**
    * @returns {number}
    */
    get_green() {
        return wasm.rgb_get_green(this.ptr);
    }
    /**
    * @returns {number}
    */
    get_blue() {
        return wasm.rgb_get_blue(this.ptr);
    }
}

export function __wbindgen_object_clone_ref(idx) {
    return addHeapObject(getObject(idx));
}

export function __wbindgen_object_drop_ref(i) { dropObject(i); }

