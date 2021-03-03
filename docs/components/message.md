# Message

Just a message

## Basic usage

Mosha exposes a global function `$MMessage({...options})` for the message.
The message will slide in from the top and disappear after 5 seconds once called.

<MessageDemo mode="basic" />

```ts
<template>
  <m-button @click="showMsgDefault" type="primary">Default</m-button>
  <m-button @click="showMsgInfo" type="primary">Info</m-button>
  <m-button @click="showMsgSuccess" type="success">Success</m-button>
  <m-button @click="showMsgWarning" type="warning">Warning</m-button>
  <m-button @click="showMsgDanger" type="danger">Danger</m-button>
</template>

<script>
import { createMessage } from 'mosha-ui'
export default {
  setup() {
    const showMsgDefault = () => {
      createMessage({
        message: 'This is some dummy message here',
      })
    }
    const showMsgInfo = () => {
      createMessage({
        message: 'This is some dummy message here',
        type: 'info',
      })
    }
    const showMsgSuccess = () => {
      createMessage({
        message: 'This is some dummy message here',
        type: 'success',
      })
    }
    const showMsgWarning = () => {
      createMessage({
        message: 'This is some dummy message here',
        type: 'warning',
      })
    }
    const showMsgDanger = () => {
      createMessage({
        message: 'This is some dummy message here',
        type: 'danger',
      })
    }
    return { showMsgDefault, showMsgInfo, showMsgSuccess, showMsgWarning, showMsgDanger}
  }
}
```

## Closable

Give the user the ablity to close the message

<MessageDemo mode="closable" />

```ts
<template>
  <m-button @click="showMsgDefault" type="primary">Default</m-button>
  <m-button @click="showMsgInfo" type="primary">Info</m-button>
  <m-button @click="showMsgSuccess" type="success">Success</m-button>
  <m-button @click="showMsgWarning" type="warning">Warning</m-button>
  <m-button @click="showMsgDanger" type="danger">Danger</m-button>
</template>

<script>
import { createMessage } from 'mosha-ui'
export default {
  setup() {
    const showMsgDefault = () => {
      createMessage({
        message: 'This is some dummy message here',
        closable: true,
      })
    }
    const showMsgInfo = () => {
      createMessage({
        message: 'This is some dummy message here',
        type: 'info',
        closable: true,
      })
    }
    const showMsgSuccess = () => {
      createMessage({
        message: 'This is some dummy message here',
        type: 'success',
        closable: true,
      })
    }
    const showMsgWarning = () => {
      createMessage({
        message: 'This is some dummy message here',
        type: 'warning',
        closable: true,
      })
    }
    const showMsgDanger = () => {
      createMessage({
        message: 'This is some dummy message here',
        type: 'danger',
        closable: true,
      })
    }
    return { showMsgDefault, showMsgInfo, showMsgSuccess, showMsgWarning, showMsgDanger}
  }
}
```

## Timeout

Override the default timeout by specify an `timeout: <time in ms: number>` property in the options 

<MessageDemo mode="timeout" />

```ts
<template>
  <m-button @click="showMsgTimeout" type="primary">10s timeout</m-button>
</template>

<script>
import { createMessage } from 'mosha-ui'
export default {
  name: 'demo',
  setup() {
    const showMsgTimeout = () => {
      createMessage({
        message: 'This is some dummy message here',
        timeout: 10000,
      })
    }
    return { showMsgTimeout }
  }
}
```

## onClose handler

You can pass a function to have it called right after the message disappears

<MessageDemo mode="onClose"/>

```ts
<template>
  <m-button @click="showMsgOnClose" type="primary">Alert after message</m-button>
</template>

<script>
import { createMessage } from 'mosha-ui'
export default {
  name: 'demo',
  setup() {
    const showMsgOnClose = () => {
      createMessage({
        message: 'This is some dummy message here',
        onClose: () => {
          alert('Hi There!')
        },
      })
    }
    return { showMsgOnClose }
  }
}
```