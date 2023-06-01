import { Shader } from 'three'

export const beeStripesShader = (shader: Shader) => {
    shader.vertexShader = shader.vertexShader.replace(
        'void main() {',
        `
            varying vec3 vPosition;
            void main() {
            vPosition = position;
        `
    )
    shader.fragmentShader = shader.fragmentShader.replace(
        `void main() {`,
        `
            varying vec3 vPosition;
            void main() {
        `
    )
    shader.fragmentShader = shader.fragmentShader.replace(
        `#include <output_fragment>`,
        `
            float customBeeColor = step(0.0, cos(vPosition.x * 10.0));
            outgoingLight *= customBeeColor;
            #include <output_fragment>
        `
    )
}
