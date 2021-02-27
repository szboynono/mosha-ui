# Alert

Just an alert

## Basic usage

<AlertDemo type="basic" />

```html
<m-alert title="Info Alert" />
<m-alert type='info' title="Info Alert" />
<m-alert type='success' title="Success Alert" />
<m-alert type='warning' title="Warning Alert" />
<m-alert type='danger' title="Danger Alert" />
```

## With icon

<AlertDemo type="icon" />

```html
<m-alert title="Default Alert" showIcon />
<m-alert type='info' title="Info Alert" showIcon />
<m-alert type='success' title="Success Alert" showIcon />
<m-alert type='warning' title="Warning Alert" showIcon />
<m-alert type='danger' title="Danger Alert" showIcon />
```

## With description

<AlertDemo type="description" />

```html
<m-alert title="Default Alert" description="This is some ddescription, not too long, just enough" showIcon />
<m-alert type="info" title="Info Alert" description="This is some ddescription, not too long, just enough" showIcon />
<m-alert type="success" title="Success Alert" description="This is some ddescription, not too long, just enough" showIcon />
<m-alert type="warning" title="Warning Alert" description="This is some ddescription, not too long, just enough" showIcon />
<m-alert type="danger" title="Danger Alert" description="This is some ddescription, not too long, just enough" showIcon />
```

## Closable

<AlertDemo type="closable" />

```html
<m-alert type="info" title="Closable Alert, try to close me!" description="close me close me, dismiss me" showIcon closable />
<m-alert type="danger" title="Closable Alert, try to close me!" showIcon closable />
```
