# `networkmanagerDevice` Submodule <a name="`networkmanagerDevice` Submodule" id="@cdktf/provider-aws.networkmanagerDevice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerDevice <a name="NetworkmanagerDevice" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device aws_networkmanager_device}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer"></a>

```typescript
import { networkmanagerDevice } from '@cdktf/provider-aws'

new networkmanagerDevice.NetworkmanagerDevice(scope: Construct, id: string, config: NetworkmanagerDeviceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig">NetworkmanagerDeviceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig">NetworkmanagerDeviceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.putAwsLocation">putAwsLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.putLocation">putLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetAwsLocation">resetAwsLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetSerialNumber">resetSerialNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetSiteId">resetSiteId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetVendor">resetVendor</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAwsLocation` <a name="putAwsLocation" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.putAwsLocation"></a>

```typescript
public putAwsLocation(value: NetworkmanagerDeviceAwsLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.putAwsLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation">NetworkmanagerDeviceAwsLocation</a>

---

##### `putLocation` <a name="putLocation" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.putLocation"></a>

```typescript
public putLocation(value: NetworkmanagerDeviceLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation">NetworkmanagerDeviceLocation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkmanagerDeviceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts">NetworkmanagerDeviceTimeouts</a>

---

##### `resetAwsLocation` <a name="resetAwsLocation" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetAwsLocation"></a>

```typescript
public resetAwsLocation(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetModel` <a name="resetModel" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetModel"></a>

```typescript
public resetModel(): void
```

##### `resetSerialNumber` <a name="resetSerialNumber" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetSerialNumber"></a>

```typescript
public resetSerialNumber(): void
```

##### `resetSiteId` <a name="resetSiteId" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetSiteId"></a>

```typescript
public resetSiteId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetType"></a>

```typescript
public resetType(): void
```

##### `resetVendor` <a name="resetVendor" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetVendor"></a>

```typescript
public resetVendor(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.isConstruct"></a>

```typescript
import { networkmanagerDevice } from '@cdktf/provider-aws'

networkmanagerDevice.NetworkmanagerDevice.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.isTerraformElement"></a>

```typescript
import { networkmanagerDevice } from '@cdktf/provider-aws'

networkmanagerDevice.NetworkmanagerDevice.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.isTerraformResource"></a>

```typescript
import { networkmanagerDevice } from '@cdktf/provider-aws'

networkmanagerDevice.NetworkmanagerDevice.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.awsLocation">awsLocation</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference">NetworkmanagerDeviceAwsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.location">location</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference">NetworkmanagerDeviceLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference">NetworkmanagerDeviceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.awsLocationInput">awsLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation">NetworkmanagerDeviceAwsLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.globalNetworkIdInput">globalNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.locationInput">locationInput</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation">NetworkmanagerDeviceLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.serialNumberInput">serialNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.siteIdInput">siteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts">NetworkmanagerDeviceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.vendorInput">vendorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.siteId">siteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.vendor">vendor</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `awsLocation`<sup>Required</sup> <a name="awsLocation" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.awsLocation"></a>

```typescript
public readonly awsLocation: NetworkmanagerDeviceAwsLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference">NetworkmanagerDeviceAwsLocationOutputReference</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.location"></a>

```typescript
public readonly location: NetworkmanagerDeviceLocationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference">NetworkmanagerDeviceLocationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkmanagerDeviceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference">NetworkmanagerDeviceTimeoutsOutputReference</a>

---

##### `awsLocationInput`<sup>Optional</sup> <a name="awsLocationInput" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.awsLocationInput"></a>

```typescript
public readonly awsLocationInput: NetworkmanagerDeviceAwsLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation">NetworkmanagerDeviceAwsLocation</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `globalNetworkIdInput`<sup>Optional</sup> <a name="globalNetworkIdInput" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.globalNetworkIdInput"></a>

```typescript
public readonly globalNetworkIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.locationInput"></a>

```typescript
public readonly locationInput: NetworkmanagerDeviceLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation">NetworkmanagerDeviceLocation</a>

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `serialNumberInput`<sup>Optional</sup> <a name="serialNumberInput" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.serialNumberInput"></a>

```typescript
public readonly serialNumberInput: string;
```

- *Type:* string

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.siteIdInput"></a>

```typescript
public readonly siteIdInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: NetworkmanagerDeviceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts">NetworkmanagerDeviceTimeouts</a> | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `vendorInput`<sup>Optional</sup> <a name="vendorInput" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.vendorInput"></a>

```typescript
public readonly vendorInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.vendor"></a>

```typescript
public readonly vendor: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerDeviceAwsLocation <a name="NetworkmanagerDeviceAwsLocation" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation.Initializer"></a>

```typescript
import { networkmanagerDevice } from '@cdktf/provider-aws'

const networkmanagerDeviceAwsLocation: networkmanagerDevice.NetworkmanagerDeviceAwsLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation.property.subnetArn">subnetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#subnet_arn NetworkmanagerDevice#subnet_arn}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation.property.zone">zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#zone NetworkmanagerDevice#zone}. |

---

##### `subnetArn`<sup>Optional</sup> <a name="subnetArn" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation.property.subnetArn"></a>

```typescript
public readonly subnetArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#subnet_arn NetworkmanagerDevice#subnet_arn}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#zone NetworkmanagerDevice#zone}.

---

### NetworkmanagerDeviceConfig <a name="NetworkmanagerDeviceConfig" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.Initializer"></a>

```typescript
import { networkmanagerDevice } from '@cdktf/provider-aws'

const networkmanagerDeviceConfig: networkmanagerDevice.NetworkmanagerDeviceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#global_network_id NetworkmanagerDevice#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.awsLocation">awsLocation</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation">NetworkmanagerDeviceAwsLocation</a></code> | aws_location block. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#description NetworkmanagerDevice#description}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#id NetworkmanagerDevice#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.location">location</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation">NetworkmanagerDeviceLocation</a></code> | location block. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.model">model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#model NetworkmanagerDevice#model}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.serialNumber">serialNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#serial_number NetworkmanagerDevice#serial_number}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.siteId">siteId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#site_id NetworkmanagerDevice#site_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#tags NetworkmanagerDevice#tags}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#tags_all NetworkmanagerDevice#tags_all}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts">NetworkmanagerDeviceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#type NetworkmanagerDevice#type}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.vendor">vendor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#vendor NetworkmanagerDevice#vendor}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#global_network_id NetworkmanagerDevice#global_network_id}.

---

##### `awsLocation`<sup>Optional</sup> <a name="awsLocation" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.awsLocation"></a>

```typescript
public readonly awsLocation: NetworkmanagerDeviceAwsLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation">NetworkmanagerDeviceAwsLocation</a>

aws_location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#aws_location NetworkmanagerDevice#aws_location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#description NetworkmanagerDevice#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#id NetworkmanagerDevice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.location"></a>

```typescript
public readonly location: NetworkmanagerDeviceLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation">NetworkmanagerDeviceLocation</a>

location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#location NetworkmanagerDevice#location}

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#model NetworkmanagerDevice#model}.

---

##### `serialNumber`<sup>Optional</sup> <a name="serialNumber" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#serial_number NetworkmanagerDevice#serial_number}.

---

##### `siteId`<sup>Optional</sup> <a name="siteId" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#site_id NetworkmanagerDevice#site_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#tags NetworkmanagerDevice#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#tags_all NetworkmanagerDevice#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkmanagerDeviceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts">NetworkmanagerDeviceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#timeouts NetworkmanagerDevice#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#type NetworkmanagerDevice#type}.

---

##### `vendor`<sup>Optional</sup> <a name="vendor" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.vendor"></a>

```typescript
public readonly vendor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#vendor NetworkmanagerDevice#vendor}.

---

### NetworkmanagerDeviceLocation <a name="NetworkmanagerDeviceLocation" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation.Initializer"></a>

```typescript
import { networkmanagerDevice } from '@cdktf/provider-aws'

const networkmanagerDeviceLocation: networkmanagerDevice.NetworkmanagerDeviceLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation.property.address">address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#address NetworkmanagerDevice#address}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation.property.latitude">latitude</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#latitude NetworkmanagerDevice#latitude}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation.property.longitude">longitude</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#longitude NetworkmanagerDevice#longitude}. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#address NetworkmanagerDevice#address}.

---

##### `latitude`<sup>Optional</sup> <a name="latitude" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation.property.latitude"></a>

```typescript
public readonly latitude: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#latitude NetworkmanagerDevice#latitude}.

---

##### `longitude`<sup>Optional</sup> <a name="longitude" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation.property.longitude"></a>

```typescript
public readonly longitude: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#longitude NetworkmanagerDevice#longitude}.

---

### NetworkmanagerDeviceTimeouts <a name="NetworkmanagerDeviceTimeouts" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts.Initializer"></a>

```typescript
import { networkmanagerDevice } from '@cdktf/provider-aws'

const networkmanagerDeviceTimeouts: networkmanagerDevice.NetworkmanagerDeviceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#create NetworkmanagerDevice#create}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#delete NetworkmanagerDevice#delete}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#update NetworkmanagerDevice#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#create NetworkmanagerDevice#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#delete NetworkmanagerDevice#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#update NetworkmanagerDevice#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerDeviceAwsLocationOutputReference <a name="NetworkmanagerDeviceAwsLocationOutputReference" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.Initializer"></a>

```typescript
import { networkmanagerDevice } from '@cdktf/provider-aws'

new networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.resetSubnetArn">resetSubnetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubnetArn` <a name="resetSubnetArn" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.resetSubnetArn"></a>

```typescript
public resetSubnetArn(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.resetZone"></a>

```typescript
public resetZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.subnetArnInput">subnetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.subnetArn">subnetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation">NetworkmanagerDeviceAwsLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subnetArnInput`<sup>Optional</sup> <a name="subnetArnInput" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.subnetArnInput"></a>

```typescript
public readonly subnetArnInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `subnetArn`<sup>Required</sup> <a name="subnetArn" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.subnetArn"></a>

```typescript
public readonly subnetArn: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkmanagerDeviceAwsLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation">NetworkmanagerDeviceAwsLocation</a>

---


### NetworkmanagerDeviceLocationOutputReference <a name="NetworkmanagerDeviceLocationOutputReference" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.Initializer"></a>

```typescript
import { networkmanagerDevice } from '@cdktf/provider-aws'

new networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resetLatitude">resetLatitude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resetLongitude">resetLongitude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetLatitude` <a name="resetLatitude" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resetLatitude"></a>

```typescript
public resetLatitude(): void
```

##### `resetLongitude` <a name="resetLongitude" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resetLongitude"></a>

```typescript
public resetLongitude(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.latitudeInput">latitudeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.longitudeInput">longitudeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.latitude">latitude</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.longitude">longitude</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation">NetworkmanagerDeviceLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `latitudeInput`<sup>Optional</sup> <a name="latitudeInput" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.latitudeInput"></a>

```typescript
public readonly latitudeInput: string;
```

- *Type:* string

---

##### `longitudeInput`<sup>Optional</sup> <a name="longitudeInput" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.longitudeInput"></a>

```typescript
public readonly longitudeInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.latitude"></a>

```typescript
public readonly latitude: string;
```

- *Type:* string

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.longitude"></a>

```typescript
public readonly longitude: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkmanagerDeviceLocation;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation">NetworkmanagerDeviceLocation</a>

---


### NetworkmanagerDeviceTimeoutsOutputReference <a name="NetworkmanagerDeviceTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkmanagerDevice } from '@cdktf/provider-aws'

new networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts">NetworkmanagerDeviceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkmanagerDeviceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts">NetworkmanagerDeviceTimeouts</a> | cdktf.IResolvable

---



