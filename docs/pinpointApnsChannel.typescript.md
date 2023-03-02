# `pinpointApnsChannel` Submodule <a name="`pinpointApnsChannel` Submodule" id="@cdktf/provider-aws.pinpointApnsChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointApnsChannel <a name="PinpointApnsChannel" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel aws_pinpoint_apns_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.Initializer"></a>

```typescript
import { pinpointApnsChannel } from '@cdktf/provider-aws'

new pinpointApnsChannel.PinpointApnsChannel(scope: Construct, id: string, config: PinpointApnsChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig">PinpointApnsChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig">PinpointApnsChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetBundleId">resetBundleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetDefaultAuthenticationMethod">resetDefaultAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetTeamId">resetTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetTokenKey">resetTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetTokenKeyId">resetTokenKeyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBundleId` <a name="resetBundleId" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetBundleId"></a>

```typescript
public resetBundleId(): void
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetDefaultAuthenticationMethod` <a name="resetDefaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetDefaultAuthenticationMethod"></a>

```typescript
public resetDefaultAuthenticationMethod(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetPrivateKey"></a>

```typescript
public resetPrivateKey(): void
```

##### `resetTeamId` <a name="resetTeamId" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetTeamId"></a>

```typescript
public resetTeamId(): void
```

##### `resetTokenKey` <a name="resetTokenKey" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetTokenKey"></a>

```typescript
public resetTokenKey(): void
```

##### `resetTokenKeyId` <a name="resetTokenKeyId" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetTokenKeyId"></a>

```typescript
public resetTokenKeyId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.isConstruct"></a>

```typescript
import { pinpointApnsChannel } from '@cdktf/provider-aws'

pinpointApnsChannel.PinpointApnsChannel.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.isTerraformElement"></a>

```typescript
import { pinpointApnsChannel } from '@cdktf/provider-aws'

pinpointApnsChannel.PinpointApnsChannel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.isTerraformResource"></a>

```typescript
import { pinpointApnsChannel } from '@cdktf/provider-aws'

pinpointApnsChannel.PinpointApnsChannel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.bundleIdInput">bundleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.defaultAuthenticationMethodInput">defaultAuthenticationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.tokenKeyIdInput">tokenKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.tokenKeyInput">tokenKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.bundleId">bundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.defaultAuthenticationMethod">defaultAuthenticationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.tokenKey">tokenKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.tokenKeyId">tokenKeyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `bundleIdInput`<sup>Optional</sup> <a name="bundleIdInput" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.bundleIdInput"></a>

```typescript
public readonly bundleIdInput: string;
```

- *Type:* string

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `defaultAuthenticationMethodInput`<sup>Optional</sup> <a name="defaultAuthenticationMethodInput" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.defaultAuthenticationMethodInput"></a>

```typescript
public readonly defaultAuthenticationMethodInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `tokenKeyIdInput`<sup>Optional</sup> <a name="tokenKeyIdInput" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.tokenKeyIdInput"></a>

```typescript
public readonly tokenKeyIdInput: string;
```

- *Type:* string

---

##### `tokenKeyInput`<sup>Optional</sup> <a name="tokenKeyInput" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.tokenKeyInput"></a>

```typescript
public readonly tokenKeyInput: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.bundleId"></a>

```typescript
public readonly bundleId: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `defaultAuthenticationMethod`<sup>Required</sup> <a name="defaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.defaultAuthenticationMethod"></a>

```typescript
public readonly defaultAuthenticationMethod: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

##### `tokenKey`<sup>Required</sup> <a name="tokenKey" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.tokenKey"></a>

```typescript
public readonly tokenKey: string;
```

- *Type:* string

---

##### `tokenKeyId`<sup>Required</sup> <a name="tokenKeyId" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.tokenKeyId"></a>

```typescript
public readonly tokenKeyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointApnsChannelConfig <a name="PinpointApnsChannelConfig" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.Initializer"></a>

```typescript
import { pinpointApnsChannel } from '@cdktf/provider-aws'

const pinpointApnsChannelConfig: pinpointApnsChannel.PinpointApnsChannelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel#application_id PinpointApnsChannel#application_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.bundleId">bundleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel#bundle_id PinpointApnsChannel#bundle_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.certificate">certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel#certificate PinpointApnsChannel#certificate}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.defaultAuthenticationMethod">defaultAuthenticationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel#default_authentication_method PinpointApnsChannel#default_authentication_method}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel#enabled PinpointApnsChannel#enabled}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel#id PinpointApnsChannel#id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.privateKey">privateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel#private_key PinpointApnsChannel#private_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.teamId">teamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel#team_id PinpointApnsChannel#team_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.tokenKey">tokenKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel#token_key PinpointApnsChannel#token_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.tokenKeyId">tokenKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel#token_key_id PinpointApnsChannel#token_key_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel#application_id PinpointApnsChannel#application_id}.

---

##### `bundleId`<sup>Optional</sup> <a name="bundleId" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.bundleId"></a>

```typescript
public readonly bundleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel#bundle_id PinpointApnsChannel#bundle_id}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel#certificate PinpointApnsChannel#certificate}.

---

##### `defaultAuthenticationMethod`<sup>Optional</sup> <a name="defaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.defaultAuthenticationMethod"></a>

```typescript
public readonly defaultAuthenticationMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel#default_authentication_method PinpointApnsChannel#default_authentication_method}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel#enabled PinpointApnsChannel#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel#id PinpointApnsChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel#private_key PinpointApnsChannel#private_key}.

---

##### `teamId`<sup>Optional</sup> <a name="teamId" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel#team_id PinpointApnsChannel#team_id}.

---

##### `tokenKey`<sup>Optional</sup> <a name="tokenKey" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.tokenKey"></a>

```typescript
public readonly tokenKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel#token_key PinpointApnsChannel#token_key}.

---

##### `tokenKeyId`<sup>Optional</sup> <a name="tokenKeyId" id="@cdktf/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.tokenKeyId"></a>

```typescript
public readonly tokenKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_channel#token_key_id PinpointApnsChannel#token_key_id}.

---



