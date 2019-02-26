<template>
  <div id="app">
    <p class="decode-result">Last result: <b>{{ result }}</b></p>
    <template v-if="noStreamApiSupport">
      <QrcodeCapture @decode="onDecode"/>
    </template>
    <template v-else>
      <div class="v-modal">
        <QrcodeDropZone
          class="v-modal__container"
          @init="logErrors"
          @decode="onDecode"
        >
          <QrcodeStream
            @init="onInit"
            @decode="onDecode"
          />
        </QrcodeDropZone>
      </div>
    </template>
  </div>
</template>

<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

const fields = document.querySelectorAll('.js-qrcode-info')

export default {
  name: 'app',
  components: {
    QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture
  },
  data: () => ({
    result: '',
    noStreamApiSupport: false
  }),
  watch: {
    result (newValue) {
      Array
        .prototype
        .forEach
        .call(fields, field => {
          field.value = newValue
        })
    }
  },
  methods: {
    onDecode (result) {
      this.result = result
    },
    logErrors (promise) {
      promise.catch(console.error)
    },
    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'StreamApiNotSupportedError') {
          this.noStreamApiSupport = true
        }
      }
    }
  }
}
</script>

<style lang="scss">

.v-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &__container,
  .qrcode-stream,
  .qrcode-stream__inner-wrapper,
  .qrcode-stream__pause-frame,
  .qrcode-stream__camera {
    width: 100%;
    height: 100%;
  }
}

</style>
