# `devicefarmNetworkProfile` Submodule <a name="`devicefarmNetworkProfile` Submodule" id="@cdktf/provider-aws.devicefarmNetworkProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevicefarmNetworkProfile <a name="DevicefarmNetworkProfile" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile aws_devicefarm_network_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer"></a>

```typescript
import { devicefarmNetworkProfile } from '@cdktf/provider-aws'

new devicefarmNetworkProfile.DevicefarmNetworkProfile(scope: Construct, id: string, config: DevicefarmNetworkProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig">DevicefarmNetworkProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig">DevicefarmNetworkProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkBandwidthBits">resetDownlinkBandwidthBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkDelayMs">resetDownlinkDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkJitterMs">resetDownlinkJitterMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkLossPercent">resetDownlinkLossPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkBandwidthBits">resetUplinkBandwidthBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkDelayMs">resetUplinkDelayMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkJitterMs">resetUplinkJitterMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkLossPercent">resetUplinkLossPercent</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDownlinkBandwidthBits` <a name="resetDownlinkBandwidthBits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkBandwidthBits"></a>

```typescript
public resetDownlinkBandwidthBits(): void
```

##### `resetDownlinkDelayMs` <a name="resetDownlinkDelayMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkDelayMs"></a>

```typescript
public resetDownlinkDelayMs(): void
```

##### `resetDownlinkJitterMs` <a name="resetDownlinkJitterMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkJitterMs"></a>

```typescript
public resetDownlinkJitterMs(): void
```

##### `resetDownlinkLossPercent` <a name="resetDownlinkLossPercent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkLossPercent"></a>

```typescript
public resetDownlinkLossPercent(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUplinkBandwidthBits` <a name="resetUplinkBandwidthBits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkBandwidthBits"></a>

```typescript
public resetUplinkBandwidthBits(): void
```

##### `resetUplinkDelayMs` <a name="resetUplinkDelayMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkDelayMs"></a>

```typescript
public resetUplinkDelayMs(): void
```

##### `resetUplinkJitterMs` <a name="resetUplinkJitterMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkJitterMs"></a>

```typescript
public resetUplinkJitterMs(): void
```

##### `resetUplinkLossPercent` <a name="resetUplinkLossPercent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkLossPercent"></a>

```typescript
public resetUplinkLossPercent(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isConstruct"></a>

```typescript
import { devicefarmNetworkProfile } from '@cdktf/provider-aws'

devicefarmNetworkProfile.DevicefarmNetworkProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformElement"></a>

```typescript
import { devicefarmNetworkProfile } from '@cdktf/provider-aws'

devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformResource"></a>

```typescript
import { devicefarmNetworkProfile } from '@cdktf/provider-aws'

devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkBandwidthBitsInput">downlinkBandwidthBitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkDelayMsInput">downlinkDelayMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkJitterMsInput">downlinkJitterMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkLossPercentInput">downlinkLossPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.projectArnInput">projectArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkBandwidthBitsInput">uplinkBandwidthBitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkDelayMsInput">uplinkDelayMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkJitterMsInput">uplinkJitterMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkLossPercentInput">uplinkLossPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkBandwidthBits">downlinkBandwidthBits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkDelayMs">downlinkDelayMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkJitterMs">downlinkJitterMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkLossPercent">downlinkLossPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.projectArn">projectArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkBandwidthBits">uplinkBandwidthBits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkDelayMs">uplinkDelayMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkJitterMs">uplinkJitterMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkLossPercent">uplinkLossPercent</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `downlinkBandwidthBitsInput`<sup>Optional</sup> <a name="downlinkBandwidthBitsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkBandwidthBitsInput"></a>

```typescript
public readonly downlinkBandwidthBitsInput: number;
```

- *Type:* number

---

##### `downlinkDelayMsInput`<sup>Optional</sup> <a name="downlinkDelayMsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkDelayMsInput"></a>

```typescript
public readonly downlinkDelayMsInput: number;
```

- *Type:* number

---

##### `downlinkJitterMsInput`<sup>Optional</sup> <a name="downlinkJitterMsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkJitterMsInput"></a>

```typescript
public readonly downlinkJitterMsInput: number;
```

- *Type:* number

---

##### `downlinkLossPercentInput`<sup>Optional</sup> <a name="downlinkLossPercentInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkLossPercentInput"></a>

```typescript
public readonly downlinkLossPercentInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectArnInput`<sup>Optional</sup> <a name="projectArnInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.projectArnInput"></a>

```typescript
public readonly projectArnInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `uplinkBandwidthBitsInput`<sup>Optional</sup> <a name="uplinkBandwidthBitsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkBandwidthBitsInput"></a>

```typescript
public readonly uplinkBandwidthBitsInput: number;
```

- *Type:* number

---

##### `uplinkDelayMsInput`<sup>Optional</sup> <a name="uplinkDelayMsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkDelayMsInput"></a>

```typescript
public readonly uplinkDelayMsInput: number;
```

- *Type:* number

---

##### `uplinkJitterMsInput`<sup>Optional</sup> <a name="uplinkJitterMsInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkJitterMsInput"></a>

```typescript
public readonly uplinkJitterMsInput: number;
```

- *Type:* number

---

##### `uplinkLossPercentInput`<sup>Optional</sup> <a name="uplinkLossPercentInput" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkLossPercentInput"></a>

```typescript
public readonly uplinkLossPercentInput: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `downlinkBandwidthBits`<sup>Required</sup> <a name="downlinkBandwidthBits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkBandwidthBits"></a>

```typescript
public readonly downlinkBandwidthBits: number;
```

- *Type:* number

---

##### `downlinkDelayMs`<sup>Required</sup> <a name="downlinkDelayMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkDelayMs"></a>

```typescript
public readonly downlinkDelayMs: number;
```

- *Type:* number

---

##### `downlinkJitterMs`<sup>Required</sup> <a name="downlinkJitterMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkJitterMs"></a>

```typescript
public readonly downlinkJitterMs: number;
```

- *Type:* number

---

##### `downlinkLossPercent`<sup>Required</sup> <a name="downlinkLossPercent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkLossPercent"></a>

```typescript
public readonly downlinkLossPercent: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectArn`<sup>Required</sup> <a name="projectArn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.projectArn"></a>

```typescript
public readonly projectArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uplinkBandwidthBits`<sup>Required</sup> <a name="uplinkBandwidthBits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkBandwidthBits"></a>

```typescript
public readonly uplinkBandwidthBits: number;
```

- *Type:* number

---

##### `uplinkDelayMs`<sup>Required</sup> <a name="uplinkDelayMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkDelayMs"></a>

```typescript
public readonly uplinkDelayMs: number;
```

- *Type:* number

---

##### `uplinkJitterMs`<sup>Required</sup> <a name="uplinkJitterMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkJitterMs"></a>

```typescript
public readonly uplinkJitterMs: number;
```

- *Type:* number

---

##### `uplinkLossPercent`<sup>Required</sup> <a name="uplinkLossPercent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkLossPercent"></a>

```typescript
public readonly uplinkLossPercent: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevicefarmNetworkProfileConfig <a name="DevicefarmNetworkProfileConfig" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.Initializer"></a>

```typescript
import { devicefarmNetworkProfile } from '@cdktf/provider-aws'

const devicefarmNetworkProfileConfig: devicefarmNetworkProfile.DevicefarmNetworkProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#name DevicefarmNetworkProfile#name}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.projectArn">projectArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#project_arn DevicefarmNetworkProfile#project_arn}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#description DevicefarmNetworkProfile#description}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkBandwidthBits">downlinkBandwidthBits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_bandwidth_bits DevicefarmNetworkProfile#downlink_bandwidth_bits}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkDelayMs">downlinkDelayMs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_delay_ms DevicefarmNetworkProfile#downlink_delay_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkJitterMs">downlinkJitterMs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_jitter_ms DevicefarmNetworkProfile#downlink_jitter_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkLossPercent">downlinkLossPercent</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_loss_percent DevicefarmNetworkProfile#downlink_loss_percent}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#id DevicefarmNetworkProfile#id}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags DevicefarmNetworkProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags_all DevicefarmNetworkProfile#tags_all}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#type DevicefarmNetworkProfile#type}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkBandwidthBits">uplinkBandwidthBits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_bandwidth_bits DevicefarmNetworkProfile#uplink_bandwidth_bits}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkDelayMs">uplinkDelayMs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_delay_ms DevicefarmNetworkProfile#uplink_delay_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkJitterMs">uplinkJitterMs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_jitter_ms DevicefarmNetworkProfile#uplink_jitter_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkLossPercent">uplinkLossPercent</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_loss_percent DevicefarmNetworkProfile#uplink_loss_percent}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#name DevicefarmNetworkProfile#name}.

---

##### `projectArn`<sup>Required</sup> <a name="projectArn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.projectArn"></a>

```typescript
public readonly projectArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#project_arn DevicefarmNetworkProfile#project_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#description DevicefarmNetworkProfile#description}.

---

##### `downlinkBandwidthBits`<sup>Optional</sup> <a name="downlinkBandwidthBits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkBandwidthBits"></a>

```typescript
public readonly downlinkBandwidthBits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_bandwidth_bits DevicefarmNetworkProfile#downlink_bandwidth_bits}.

---

##### `downlinkDelayMs`<sup>Optional</sup> <a name="downlinkDelayMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkDelayMs"></a>

```typescript
public readonly downlinkDelayMs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_delay_ms DevicefarmNetworkProfile#downlink_delay_ms}.

---

##### `downlinkJitterMs`<sup>Optional</sup> <a name="downlinkJitterMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkJitterMs"></a>

```typescript
public readonly downlinkJitterMs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_jitter_ms DevicefarmNetworkProfile#downlink_jitter_ms}.

---

##### `downlinkLossPercent`<sup>Optional</sup> <a name="downlinkLossPercent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkLossPercent"></a>

```typescript
public readonly downlinkLossPercent: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_loss_percent DevicefarmNetworkProfile#downlink_loss_percent}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#id DevicefarmNetworkProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags DevicefarmNetworkProfile#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags_all DevicefarmNetworkProfile#tags_all}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#type DevicefarmNetworkProfile#type}.

---

##### `uplinkBandwidthBits`<sup>Optional</sup> <a name="uplinkBandwidthBits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkBandwidthBits"></a>

```typescript
public readonly uplinkBandwidthBits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_bandwidth_bits DevicefarmNetworkProfile#uplink_bandwidth_bits}.

---

##### `uplinkDelayMs`<sup>Optional</sup> <a name="uplinkDelayMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkDelayMs"></a>

```typescript
public readonly uplinkDelayMs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_delay_ms DevicefarmNetworkProfile#uplink_delay_ms}.

---

##### `uplinkJitterMs`<sup>Optional</sup> <a name="uplinkJitterMs" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkJitterMs"></a>

```typescript
public readonly uplinkJitterMs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_jitter_ms DevicefarmNetworkProfile#uplink_jitter_ms}.

---

##### `uplinkLossPercent`<sup>Optional</sup> <a name="uplinkLossPercent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkLossPercent"></a>

```typescript
public readonly uplinkLossPercent: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_loss_percent DevicefarmNetworkProfile#uplink_loss_percent}.

---



