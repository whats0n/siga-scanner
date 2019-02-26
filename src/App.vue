<template>
  <div id="app">
    <p class="decode-result">Last result: <b>{{ result }}</b></p>

    <QrcodeDropZone
      @init="logErrors"
      @decode="onDecode"
    >
      <QrcodeStream
        @init="onInit"
        @decode="onDecode"
      />
    </QrcodeDropZone>

    <QrcodeCapture
      v-if="noStreamApiSupport"
      @decode="onDecode"
    />
  </div>
</template>

<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

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
