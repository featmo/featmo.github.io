---
layout: post
draft: false
comments: true
title: "Exploring Shaders in Unreal"
description: "Experiments with Unreal"
date: 2020-07-16
tags: ["art", "Unreal Engine 4", "Game Development", "Computer graphics"]
img: /assets/post_img/exploring_shaders_unreal_001/render_001.png
---

I came across this tutorial a while [Shaders in UE4](https://www.youtube.com/watch?v=mig6EF17mR8), and I had also recently finished watching *Lord of the Rings: Return of the king* and remembered how cool the Palantir (Sarumans crystal ball) was, so decided to take a stab at recreating a similar effect in Unreal by following the tutorial. <br>

What i really wated to get out of it was a understanding of the utility type nodes in UE4, such as sphere masking, and gaining a understanding of the tagent and world space effects within the engine. It's still a slight bit confusing but I was able to get a relative grasp of how it worked and deviated to create my own effect<br><br>
<br>
## Masking
the key to the whole effect creates a spherical mask that remains dead center of the object.<br><br> 
![basic spherical masking](/assets/post_img/exploring_shaders_unreal_001/sg3.png)<br><br>

I then added my own variations including noise that that was multiplied against the sphere mask and another noise was fed into the roughness <br><br>
![basic spherical masking](/assets/post_img/exploring_shaders_unreal_001/sg5.png)<br><br>

![basic spherical masking](/assets/post_img/exploring_shaders_unreal_001/sg9.png)<br><br>

Please don't laugh at my weak attempt at chromatic aberration, this will probably be a future experiment. I created this by layering 3 fresnel nodes each was then multiplied with either red, green, or blue respectively, their results added together. Adjusting the exponent parameter in the fresnel node would adjust the tightness ultimately adjusting the color<br><br>

![basic spherical masking](/assets/post_img/exploring_shaders_unreal_001/sg8.png)<br><br>
<br>
## Driving the Normals
I even went as far as to drive the normals with a noise function this really brought the material alive <br><br>

![basic spherical masking](/assets/post_img/exploring_shaders_unreal_001/sg10.png)<br><br>

## Final
the final product was this <br><br>
![basic spherical masking](/assets/post_img/exploring_shaders_unreal_001/render_001.png)
<br><br>
![basic spherical masking](/assets/post_img/exploring_shaders_unreal_001/render_002.png)

<br><br>
**useful links**<br>
[Shaders in UE4](https://www.youtube.com/watch?v=mig6EF17mR8)<br>
[UE4 Spherical masks](https://www.youtube.com/watch?v=xRxkcFOhNrc)<br>
[UE4 Docs](https://docs.unrealengine.com/en-US/Engine/Rendering/Materials/ExpressionReference/Utility/index.html)

<br><br><br><br>
*check my socials for more cool stuff*