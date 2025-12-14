<script setup>
import { vIntersectionObserver } from "@vueuse/components";

const overlayModel3 = resolveComponent("OverlayModel3");
const overlayModelS = resolveComponent("OverlayModelS");
const overlayModelX = resolveComponent("OverlayModelX");
const overlayModelY = resolveComponent("OverlayModelY");
const overlaySolar = resolveComponent("OverlaySolar");
const overlaySolarRoof = resolveComponent("OverlaySolarRoof");
const overlayWallConnector = resolveComponent("OverlayWallConnector");

const overlay = shallowRef(overlayModel3);

useHead({
  title: "Nuxt Tesla",
});

function onIntersectionObserver([{ isIntersecting }], component) {
  if (isIntersecting) overlay.value = component;
}
</script>

<template>
  <div
    class="flex max-h-screen w-screen flex-col flex-nowrap items-center justify-between"
  >
    <TheHeader />
    <Transition name="fade" mode="out-in">
      <component :is="overlay"></component>
    </Transition>
    <div
      class="max-h-screen w-screen snap-y snap-mandatory overflow-y-scroll smooth-scroll"
    >
      <div
        id="model-3"
        class="snap-start snap-always"
        v-intersection-observer="
          (params) => onIntersectionObserver(params, overlayModel3)
        "
      >
        <picture>
          <nuxt-source
            src="/images/tesla_ba75b57e-95a8-48e0-86b1-5b8392a5d7ab_m3-homepage-mobile.jpg"
            media="(max-width: 599px)"
            sizes="xs:800px md:800px lg:800px"
          />
          <nuxt-source
            src="/images/tesla_ba75b57e-95a8-48e0-86b1-5b8392a5d7ab_m3-homepage-mobile.jpg"
            media="(min-width: 600px) and (orientation:portrait)"
            sizes="xs:800px md:800px lg:800px"
          />
          <nuxt-source
            src="/images/tesla_409621ec-fca7-41fd-87e5-66e1caf40f5c_m3-homepage-desktop.jpg"
            media="(min-width: 600px)"
            sizes="xs:2880px md:2880px lg:2880px"
          />
          <NuxtImg
            src="/images/tesla_409621ec-fca7-41fd-87e5-66e1caf40f5c_m3-homepage-desktop.jpg"
            alt="Model 3 rossa parcheggiata su un terreno in calcestruzzo segnato dalle intemperie davanti a un paesaggio urbano"
            class="h-screen w-screen object-cover"
            width="2880"
            height="2400"
          />
        </picture>
      </div>

      <div
        id="model-y"
        v-intersection-observer="
          (params) => onIntersectionObserver(params, overlayModelY)
        "
        class="snap-start snap-always"
      >
        <picture>
          <nuxt-source
            src="/images/tesla_3304be3b-dd0a-4128-9c26-eb61c0b98d61_Mobile-ModelY.jpg"
            sizes="xs:800px md:800px lg:800px"
            media="(max-width: 599px)"
          />
          <nuxt-source
            src="/images/tesla_3304be3b-dd0a-4128-9c26-eb61c0b98d61_Mobile-ModelY.jpg"
            sizes="xs:800px md:800px lg:800px"
            media="(min-width: 600px) and (orientation:portrait)"
          />
          <nuxt-source
            src="/images/tesla_8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0_Desktop-ModelY.jpg"
            media="(min-width: 600px)"
            sizes="xs:2880px md:2880px lg:2880px"
          />
          <NuxtImg
            src="/images/tesla_8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0_Desktop-ModelY.jpg"
            alt="Model Y blu metallizzata su un'autostrada in collina"
            class="h-screen w-screen object-cover"
            width="2880"
            height="2400"
          />
        </picture>
      </div>

      <div
        id="model-s"
        v-intersection-observer="
          (params) => onIntersectionObserver(params, overlayModelS)
        "
        class="snap-start snap-always"
      >
        <picture>
          <nuxt-source
            src="/images/tesla_ba3606ef-ce2d-41e4-90aa-bb13d767bb1a_ms-homepage-mobile.jpg"
            sizes="xs:800px md:800px lg:800px"
            media="(max-width: 599px)"
          />
          <nuxt-source
            src="/images/tesla_ba3606ef-ce2d-41e4-90aa-bb13d767bb1a_ms-homepage-mobile.jpg"
            sizes="xs:800px md:800px lg:800px"
            media="(min-width: 600px) and (orientation:portrait)"
          />
          <nuxt-source
            src="/images/tesla_676da95d-942e-414c-8534-f1832f0d4ced_ms-homepage-desktop.jpg"
            media="(min-width: 600px)"
            sizes="xs:2880px md:2880px lg:2880px"
          />
          <NuxtImg
            src="/images/tesla_676da95d-942e-414c-8534-f1832f0d4ced_ms-homepage-desktop.jpg"
            alt="Solid black Model S accelerating on an elevated highway"
            class="h-screen w-screen object-cover"
            width="2880"
            height="2400"
          />
        </picture>
      </div>

      <div
        id="model-x"
        v-intersection-observer="
          (params) => onIntersectionObserver(params, overlayModelX)
        "
        class="snap-start snap-always"
      >
        <picture>
          <nuxt-source
            src="/images/tesla_07184d11-038b-4660-876e-86c9afd485f6_mx-homepage-mobile.jpg"
            sizes="xs:800px md:800px lg:800px"
            media="(max-width: 599px)"
          />
          <nuxt-source
            src="/images/tesla_07184d11-038b-4660-876e-86c9afd485f6_mx-homepage-mobile.jpg"
            sizes="xs:800px md:800px lg:800px"
            media="(min-width: 600px) and (orientation:portrait)"
          />
          <nuxt-source
            src="/images/tesla_58df46a8-26c5-401f-9325-388b2990dcc3_mx-homepage-desktop.jpg"
            sizes="xs:2880px md:2880px lg:2880px"
            media="(min-width: 600px)"
          />
          <NuxtImg
            src="/images/tesla_58df46a8-26c5-401f-9325-388b2990dcc3_mx-homepage-desktop.jpg"
            alt="Model X bianco perla su una strada di montagna"
            class="h-screen w-screen object-cover"
            width="2880"
            height="2400"
          />
        </picture>
      </div>

      <div
        id="solar-panels"
        v-intersection-observer="
          (params) => onIntersectionObserver(params, overlaySolar)
        "
        class="snap-start snap-always"
      >
        <picture>
          <nuxt-source
            src="/images/tesla_27d0055c-b0bf-476c-b3aa-ec59d314f871_Desktop-SolarPanels.jpg"
            sizes="xs:800px md:800px lg:800px"
            media="(max-width: 599px)"
          />
          <nuxt-source
            src="/images/tesla_27d0055c-b0bf-476c-b3aa-ec59d314f871_Desktop-SolarPanels.jpg"
            sizes="xs:800px md:800px lg:800px"
            media="(min-width: 600px) and (orientation:portrait)"
          />
          <nuxt-source
            src="/images/tesla_27d0055c-b0bf-476c-b3aa-ec59d314f871_Desktop-SolarPanels.jpg"
            sizes="xs:2880px md:2880px lg:2880px"
            media="(min-width: 600px)"
          />
          <NuxtImg
            src="/images/tesla_27d0055c-b0bf-476c-b3aa-ec59d314f871_Desktop-SolarPanels.jpg"
            alt="Abitazione in stile Ranch alimentata da Powerwall e pannelli fotovoltaici Tesla"
            class="h-screen w-screen object-cover"
            width="2880"
            height="2400"
          />
        </picture>
      </div>

      <div
        id="solar-roof"
        v-intersection-observer="
          (params) => onIntersectionObserver(params, overlaySolarRoof)
        "
        class="snap-start snap-always"
      >
        <picture>
          <nuxt-source
            src="/images/tesla_20c666b9-d09b-4687-bb37-22c8500489c5_HP-SR-Design-M.jpg"
            sizes="xs:800px md:800px lg:800px"
            media="(max-width: 599px)"
          />
          <nuxt-source
            src="/images/tesla_20c666b9-d09b-4687-bb37-22c8500489c5_HP-SR-Design-M.jpg"
            sizes="xs:800px md:800px lg:800px"
            media="(min-width: 600px) and (orientation:portrait)"
          />
          <nuxt-source
            src="/images/tesla_c877126e-0db5-409d-a412-04fc94b59b76_HP-SR-Design-D.jpg"
            sizes="xs:2880px md:2880px lg:2880px"
            media="(min-width: 600px)"
          />
          <NuxtImg
            src="/images/tesla_c877126e-0db5-409d-a412-04fc94b59b76_HP-SR-Design-D.jpg"
            alt="Home outfitted with Tesla Solar Roof"
            class="h-screen w-screen object-cover"
            width="2880"
            height="2400"
          />
        </picture>
      </div>

      <div
        id="accessories"
        v-intersection-observer="
          (params) => onIntersectionObserver(params, overlayWallConnector)
        "
        class="snap-start snap-always"
      >
        <picture>
          <nuxt-source
            src="/images/tesla_dd739764-bcaa-4263-9488-8c73bc9fb046_Desktop-Accessories.jpg"
            media="(max-width: 599px)"
            sizes="xs:800px md:800px lg:800px"
          />
          <nuxt-source
            src="/images/tesla_dd739764-bcaa-4263-9488-8c73bc9fb046_Desktop-Accessories.jpg"
            sizes="xs:800px md:800px lg:800px"
            media="(min-width: 600px) and (orientation:portrait)"
          />
          <nuxt-source
            src="/images/tesla_dd739764-bcaa-4263-9488-8c73bc9fb046_Desktop-Accessories.jpg"
            sizes="xs:2880px md:2880px lg:2880px"
            media="(min-width: 600px)"
          />
          <NuxtImg
            src="/images/tesla_dd739764-bcaa-4263-9488-8c73bc9fb046_Desktop-Accessories.jpg"
            alt="Wall Connector Gen 3 con copertura anteriore in vetro bianco temperato"
            class="h-screen w-screen object-cover"
            width="2880"
            height="2400"
          />
        </picture>
      </div>
    </div>
  </div>
</template>

<style>
body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

@font-face {
  font-family: Montserrat;
  src: url("/fonts/montserrat/Montserrat-Regular.ttf") format("truetype");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: Montserrat;
  src: url("/fonts/montserrat/Montserrat-Medium.ttf") format("truetype");
  font-style: normal;
  font-weight: 500;
  font-display: swap;
}

html {
  font-family:
    Montserrat,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: -webkit-fill-available;
  scroll-behavior: smooth;
}

.smooth-scroll {
  /* Apply smooth scrolling to the actual scroll container used by the layout */
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
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
