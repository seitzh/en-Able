# en[Able] – Max MSP Audio-Reactive Visualizer

**en[Able]** is a real-time audio-reactive visualizer built in **Max MSP / Jitter** designed to run as a plugin inside **Ableton Live**. The project generates dynamic geometric visuals that respond to audio input and user-controlled parameters, allowing musicians to create synchronized visual effects during live performance or production.

The visual system is based on a recursive graphics pipeline that draws expanding shapes using `jit.lcd` and feeds the result back through `jit.rota` to create evolving spiral patterns and layered visual structures. Colors, geometry, and transformation parameters can be manipulated in real time through an interactive interface.

The plugin also supports optional **video overlay**, allowing external footage to be converted into high-contrast silhouettes that blend with the generated visuals.

---

# Features

### 🎵 Audio-Reactive Visuals
Audio signals are sampled and mapped to color parameters, enabling visuals to react dynamically to music.

### 🔁 Recursive Visual Engine
Expanding shapes are drawn and recursively transformed using `jit.rota`, producing spiraling and fractal-like visual effects.

### 🎨 Dynamic Color Modulation
Color gradients are controlled via an HSL-based system and can be automated or driven by audio amplitude.

### 🎥 Video Overlay Support
External video can be loaded and converted into black/white silhouettes that overlay the generated visuals.

### 🎛 Interactive Parameter Controls
Users can modify rotation, scaling, color offsets, and other visual parameters in real time.

### 🖥 Lightweight Design
Built using simple geometric algorithms to minimize GPU/CPU overhead, making it suitable for live performance setups.

---

# Core Technologies

- **Max MSP**
- **Jitter**
- `jit.world` – rendering context  
- `jit.lcd` – shape drawing  
- `jit.rota` – recursive geometric transformations  
- `jit.movie` – video playback and processing  

---

# How It Works

1. A square is drawn using `jit.lcd` with coordinates that expand each frame.
2. The resulting matrix is processed by `jit.rota` to rotate and scale the image.
3. The transformed output is recursively fed back into the drawing pipeline.
4. Audio amplitude is sampled and mapped to color parameters.
5. Optional video masks are applied to blend real footage with the generated visuals.

This process produces continuously evolving geometric patterns that respond to music and user input in real time.

---

# Future Improvements

- Additional shape types (circles, polygons, procedural geometry)
- Frequency-based audio reactivity
- Improved recursion control to reduce visual tracing artifacts
- Expanded video processing options
