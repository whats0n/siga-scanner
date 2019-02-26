<template>
  <div id="app">
    <div
      v-if="error"
      class="v-error-message"
    >{{ error }}</div>
    <template v-if="noStreamApiSupport">
      <label class="v-btn-photo">
        <QrcodeCapture @detect="handleDetect"/>
        <span class="v-btn">Scan</span>
      </label>
    </template>
    <template v-else>
      <button
        class="v-btn"
        @click.prevent="handleClick"
      >Scan</button>
      <div
        v-show="opened"
        class="v-modal"
      >
        <QrcodeDropZone
          v-if="!result"
          class="v-modal__container"
          @decode="handleDecode"
        >
          <QrcodeStream
            @init="handleInit"
            @decode="handleDecode"
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
    noStreamApiSupport: false,
    opened: false,
    error: null
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
    handleClick () {
      this.opened = true
      this.result = ''
    },
    async handleDetect (promise) {
      try {
        const { content } = await promise
        this.handleDecode(content)
      } catch (error) {
        this.handleDecode(null)
      }
    },
    handleDecode (result) {
      this.result = result
      this.error = null
      if (!result) {
        this.error = 'Incorrect picture, we cannot find QR code here. Please try again'
      }
      this.opened = false
    },
    async handleInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'StreamApiNotSupportedError') {
          this.noStreamApiSupport = true
        }
        if (error.name === 'NotAllowedError') {
          this.error = "ERROR: you need to grant camera access permisson"
        } else if (error.name === 'NotFoundError') {
          this.error = "ERROR: no camera on this device"
        } else if (error.name === 'NotSupportedError') {
          this.error = "ERROR: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "ERROR: is the camera already in use?"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "ERROR: installed cameras are not suitable"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: Stream API is not supported in this browser"
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

  .qrcode-stream__camera,
  .qrcode-stream__pause-frame {
    object-fit: cover;
  }
}

.v-btn-photo {
  display: inline-block;
  vertical-align: top;

  input {
    display: none;
  }
}

.v-btn {
  display: inline-block;
  vertical-align: top;
  outline: 0 !important;
  padding: 12px 24px;
  margin: 0;
  border: 0;
  border-radius: 3px;
  background: #cecece;
  cursor: pointer;
}

.v-error-message {
  padding-bottom: 20px;
  color: red;
  font-size: 16px;
}

</style>
