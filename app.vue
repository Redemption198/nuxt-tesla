<template>
  <div class="flex items-center justify-between flex-col flex-nowrap w-screen h-screen">
    <TheHeader />
    <Transition name="fade" mode="out-in">
      <component :is="overlay"></component>
    </Transition>
    <div class="max-h-screen w-screen overflow-y-scroll snap-y snap-mandatory">
      <div ref="model3" class="snap-start snap-always">
        <picture>
          <source
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/ba75b57e-95a8-48e0-86b1-5b8392a5d7ab/bvlatuR/std/800x2100/m3-homepage-mobile
            "
            media="(max-width: 599px)"
          />
          <source
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/ba75b57e-95a8-48e0-86b1-5b8392a5d7ab/bvlatuR/std/800x2100/m3-homepage-mobile
            "
            media="(min-width: 600px) and (orientation:portrait)"
          />
          <source
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/409621ec-fca7-41fd-87e5-66e1caf40f5c/bvlatuR/std/2880x2400/m3-homepage-desktop
            "
            media="(min-width: 600px)"
          />
          <img
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/409621ec-fca7-41fd-87e5-66e1caf40f5c/bvlatuR/std/2880x2400/m3-homepage-desktop"
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/409621ec-fca7-41fd-87e5-66e1caf40f5c/bvlatuR/std/2880x2400/m3-homepage-desktop
            "
            alt="Model 3 rossa parcheggiata su un terreno in calcestruzzo segnato dalle intemperie davanti a un paesaggio urbano"
            class="h-screen w-screen object-cover"
          />
        </picture>
      </div>

      <div ref="modelY" class="snap-start snap-always">
        <picture>
          <source
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/3304be3b-dd0a-4128-9c26-eb61c0b98d61/bvlatuR/std/800x2100/Mobile-ModelY
            "
            media="(max-width: 599px)"
          />
          <source
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/3304be3b-dd0a-4128-9c26-eb61c0b98d61/bvlatuR/std/800x2100/Mobile-ModelY
            "
            media="(min-width: 600px) and (orientation:portrait)"
          />
          <source
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY
            "
            media="(min-width: 600px)"
          />
          <img
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY"
            srcset="
              //tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY
            "
            alt="Model Y blu metallizzata su un'autostrada in collina"
            class="h-screen w-screen object-cover"
          />
        </picture>
      </div>

      <div ref="modelS" class="snap-start snap-always">
        <picture>
          <source
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/ba3606ef-ce2d-41e4-90aa-bb13d767bb1a/bvlatuR/std/1000x1576/ms-homepage-mobile
            "
            media="(max-width: 599px)"
          />
          <source
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/ba3606ef-ce2d-41e4-90aa-bb13d767bb1a/bvlatuR/std/1000x1576/ms-homepage-mobile
            "
            media="(min-width: 600px) and (orientation:portrait)"
          />
          <source
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop
            "
            media="(min-width: 600px)"
          />
          <img
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop"
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop
            "
            alt="Solid black Model S accelerating on an elevated highway"
            class="h-screen w-screen object-cover"
          />
        </picture>
      </div>

      <div ref="modelX" class="snap-start snap-always">
        <picture>
          <source
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/07184d11-038b-4660-876e-86c9afd485f6/bvlatuR/std/1000x1576/mx-homepage-mobile
            "
            media="(max-width: 599px)"
          />
          <source
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/07184d11-038b-4660-876e-86c9afd485f6/bvlatuR/std/1000x1576/mx-homepage-mobile
            "
            media="(min-width: 600px) and (orientation:portrait)"
          />
          <source
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/58df46a8-26c5-401f-9325-388b2990dcc3/bvlatuR/std/3296x1798/mx-homepage-desktop
            "
            media="(min-width: 600px)"
          />
          <img
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/58df46a8-26c5-401f-9325-388b2990dcc3/bvlatuR/std/3296x1798/mx-homepage-desktop"
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/58df46a8-26c5-401f-9325-388b2990dcc3/bvlatuR/std/3296x1798/mx-homepage-desktop
            "
            alt="Model X bianco perla su una strada di montagna"
            class="h-screen w-screen object-cover"
          />
        </picture>
      </div>

      <div ref="solar" class="snap-start snap-always">
        <picture>
          <source
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/4a2dfc25-8931-4aae-aa41-96563261d221/bvlatuR/std/800x2100/Mobile-SolarPanels
            "
            media="(max-width: 599px)"
          />
          <source
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/4a2dfc25-8931-4aae-aa41-96563261d221/bvlatuR/std/800x2100/Mobile-SolarPanels
            "
            media="(min-width: 600px) and (orientation:portrait)"
          />
          <source
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/27d0055c-b0bf-476c-b3aa-ec59d314f871/bvlatuR/std/2880x2400/Desktop-SolarPanels
            "
            media="(min-width: 600px)"
          />
          <img
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/27d0055c-b0bf-476c-b3aa-ec59d314f871/bvlatuR/std/2880x2400/Desktop-SolarPanels"
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/27d0055c-b0bf-476c-b3aa-ec59d314f871/bvlatuR/std/2880x2400/Desktop-SolarPanels
            "
            alt="Abitazione in stile Ranch alimentata da Powerwall e pannelli fotovoltaici Tesla"
            class="h-screen w-screen object-cover"
          />
        </picture>
      </div>

      <div ref="solarRoof" class="snap-start snap-always">
        <picture>
          <source
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/20c666b9-d09b-4687-bb37-22c8500489c5/bvlatuR/std/750x850/HP-SR-Design-M
            "
            media="(max-width: 599px)"
          />
          <source
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/20c666b9-d09b-4687-bb37-22c8500489c5/bvlatuR/std/750x850/HP-SR-Design-M
            "
            media="(min-width: 600px) and (orientation:portrait)"
          />
          <source
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/c877126e-0db5-409d-a412-04fc94b59b76/bvlatuR/std/2880x1800/HP-SR-Design-D
            "
            media="(min-width: 600px)"
          />
          <img
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/c877126e-0db5-409d-a412-04fc94b59b76/bvlatuR/std/2880x1800/HP-SR-Design-D"
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/c877126e-0db5-409d-a412-04fc94b59b76/bvlatuR/std/2880x1800/HP-SR-Design-D
            "
            alt="Home outfitted with Tesla Solar Roof"
            class="h-screen w-screen object-cover"
          />
        </picture>
      </div>

      <div ref="wallConnector" class="snap-start snap-always">
        <picture>
          <source
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/69095129-86c5-4f6c-a77a-740ceac04e82/bvlatuR/std/800x2100/Mobile-Accessories
            "
            media="(max-width: 599px)"
          />
          <source
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/69095129-86c5-4f6c-a77a-740ceac04e82/bvlatuR/std/800x2100/Mobile-Accessories
            "
            media="(min-width: 600px) and (orientation:portrait)"
          />
          <source
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/2880x2400/Desktop-Accessories
            "
            media="(min-width: 600px)"
          />
          <img
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/2880x2400/Desktop-Accessories"
            srcset="
              https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/2880x2400/Desktop-Accessories
            "
            alt="Wall Connector Gen 3 con copertura anteriore in vetro bianco temperato"
            class="h-screen w-screen object-cover"
          />
        </picture>
      </div>
    </div>
  </div>
</template>

<script setup>
const model3 = shallowRef(null);
const modelS = shallowRef(null);
const modelX = shallowRef(null);
const modelY = shallowRef(null);
const solar = shallowRef(null);
const solarRoof = shallowRef(null);
const wallConnector = shallowRef(null);

const overlayModel3 = resolveComponent("OverlayModel3")
const overlayModelS = resolveComponent("OverlayModelS")
const overlayModelX = resolveComponent("OverlayModelX")
const overlayModelY = resolveComponent("OverlayModelY")
const overlaySolar = resolveComponent("OverlaySolar")
const overlaySolarRoof = resolveComponent("OverlaySolarRoof")
const overlayWallConnector = resolveComponent("OverlayWallConnector")

const overlay = shallowRef();

useIntersectionObserver(model3, ([{ isIntersecting }], observerElement) => {
  if (isIntersecting) overlay.value = overlayModel3;
}, { threshold: 0.25 });

useIntersectionObserver(modelS, ([{ isIntersecting }], observerElement) => {
  if (isIntersecting) overlay.value = overlayModelS;
}, { threshold: 0.25 });

useIntersectionObserver(modelX, ([{ isIntersecting }], observerElement) => {
  if (isIntersecting) overlay.value = overlayModelX;
}, { threshold: 0.25 });

useIntersectionObserver(modelY, ([{ isIntersecting }], observerElement) => {
  if (isIntersecting) overlay.value = overlayModelY;
}, { threshold: 0.25 });

useIntersectionObserver(solar, ([{ isIntersecting }], observerElement) => {
  if (isIntersecting) overlay.value = overlaySolar;
}, { threshold: 0.25 });

useIntersectionObserver(solarRoof, ([{ isIntersecting }], observerElement) => {
  if (isIntersecting) overlay.value = overlaySolarRoof;
}, { threshold: 0.25 });

useIntersectionObserver(
  wallConnector,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) overlay.value = overlayWallConnector;
  },
{ threshold: 0.25 });
</script>

<style>
html,
body {
  scroll-behavior: smooth;
}

@font-face {
  font-family: Gotham SSm;
  src: url("https://cdn-design.tesla.com/tds-fonts/3.x/woff2/GothamSSm-Book_Web.woff2")
    format("woff2");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: Gotham SSm;
  src: url("https://cdn-design.tesla.com/tds-fonts/3.x/woff2/GothamSSm-Medium_Web.woff2")
    format("woff2");
  font-style: normal;
  font-weight: 500;
  font-display: swap;
}

html {
  font-family: Gotham SSm;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>