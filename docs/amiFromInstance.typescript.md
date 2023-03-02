# `amiFromInstance` Submodule <a name="`amiFromInstance` Submodule" id="@cdktf/provider-aws.amiFromInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmiFromInstance <a name="AmiFromInstance" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance aws_ami_from_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.Initializer"></a>

```typescript
import { amiFromInstance } from '@cdktf/provider-aws'

new amiFromInstance.AmiFromInstance(scope: Construct, id: string, config: AmiFromInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig">AmiFromInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig">AmiFromInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.putEbsBlockDevice">putEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.putEphemeralBlockDevice">putEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetDeprecationTime">resetDeprecationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetEbsBlockDevice">resetEbsBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetEphemeralBlockDevice">resetEphemeralBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetSnapshotWithoutReboot">resetSnapshotWithoutReboot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEbsBlockDevice` <a name="putEbsBlockDevice" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.putEbsBlockDevice"></a>

```typescript
public putEbsBlockDevice(value: IResolvable | AmiFromInstanceEbsBlockDevice[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.putEbsBlockDevice.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDevice">AmiFromInstanceEbsBlockDevice</a>[]

---

##### `putEphemeralBlockDevice` <a name="putEphemeralBlockDevice" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.putEphemeralBlockDevice"></a>

```typescript
public putEphemeralBlockDevice(value: IResolvable | AmiFromInstanceEphemeralBlockDevice[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.putEphemeralBlockDevice.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDevice">AmiFromInstanceEphemeralBlockDevice</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: AmiFromInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeouts">AmiFromInstanceTimeouts</a>

---

##### `resetDeprecationTime` <a name="resetDeprecationTime" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetDeprecationTime"></a>

```typescript
public resetDeprecationTime(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEbsBlockDevice` <a name="resetEbsBlockDevice" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetEbsBlockDevice"></a>

```typescript
public resetEbsBlockDevice(): void
```

##### `resetEphemeralBlockDevice` <a name="resetEphemeralBlockDevice" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetEphemeralBlockDevice"></a>

```typescript
public resetEphemeralBlockDevice(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSnapshotWithoutReboot` <a name="resetSnapshotWithoutReboot" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetSnapshotWithoutReboot"></a>

```typescript
public resetSnapshotWithoutReboot(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.isConstruct"></a>

```typescript
import { amiFromInstance } from '@cdktf/provider-aws'

amiFromInstance.AmiFromInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.isTerraformElement"></a>

```typescript
import { amiFromInstance } from '@cdktf/provider-aws'

amiFromInstance.AmiFromInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.isTerraformResource"></a>

```typescript
import { amiFromInstance } from '@cdktf/provider-aws'

amiFromInstance.AmiFromInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.bootMode">bootMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.ebsBlockDevice">ebsBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList">AmiFromInstanceEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.enaSupport">enaSupport</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.ephemeralBlockDevice">ephemeralBlockDevice</a></code> | <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList">AmiFromInstanceEphemeralBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.hypervisor">hypervisor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.imageLocation">imageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.imageOwnerAlias">imageOwnerAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.imageType">imageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.imdsSupport">imdsSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.kernelId">kernelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.manageEbsSnapshots">manageEbsSnapshots</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.platformDetails">platformDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.public">public</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.ramdiskId">ramdiskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.rootDeviceName">rootDeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.rootSnapshotId">rootSnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.sriovNetSupport">sriovNetSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference">AmiFromInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.tpmSupport">tpmSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.usageOperation">usageOperation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.virtualizationType">virtualizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.deprecationTimeInput">deprecationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.ebsBlockDeviceInput">ebsBlockDeviceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDevice">AmiFromInstanceEbsBlockDevice</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.ephemeralBlockDeviceInput">ephemeralBlockDeviceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDevice">AmiFromInstanceEphemeralBlockDevice</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.snapshotWithoutRebootInput">snapshotWithoutRebootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.sourceInstanceIdInput">sourceInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeouts">AmiFromInstanceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.deprecationTime">deprecationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.snapshotWithoutReboot">snapshotWithoutReboot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.sourceInstanceId">sourceInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `bootMode`<sup>Required</sup> <a name="bootMode" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.bootMode"></a>

```typescript
public readonly bootMode: string;
```

- *Type:* string

---

##### `ebsBlockDevice`<sup>Required</sup> <a name="ebsBlockDevice" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.ebsBlockDevice"></a>

```typescript
public readonly ebsBlockDevice: AmiFromInstanceEbsBlockDeviceList;
```

- *Type:* <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList">AmiFromInstanceEbsBlockDeviceList</a>

---

##### `enaSupport`<sup>Required</sup> <a name="enaSupport" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.enaSupport"></a>

```typescript
public readonly enaSupport: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ephemeralBlockDevice`<sup>Required</sup> <a name="ephemeralBlockDevice" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.ephemeralBlockDevice"></a>

```typescript
public readonly ephemeralBlockDevice: AmiFromInstanceEphemeralBlockDeviceList;
```

- *Type:* <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList">AmiFromInstanceEphemeralBlockDeviceList</a>

---

##### `hypervisor`<sup>Required</sup> <a name="hypervisor" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.hypervisor"></a>

```typescript
public readonly hypervisor: string;
```

- *Type:* string

---

##### `imageLocation`<sup>Required</sup> <a name="imageLocation" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.imageLocation"></a>

```typescript
public readonly imageLocation: string;
```

- *Type:* string

---

##### `imageOwnerAlias`<sup>Required</sup> <a name="imageOwnerAlias" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.imageOwnerAlias"></a>

```typescript
public readonly imageOwnerAlias: string;
```

- *Type:* string

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

---

##### `imdsSupport`<sup>Required</sup> <a name="imdsSupport" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.imdsSupport"></a>

```typescript
public readonly imdsSupport: string;
```

- *Type:* string

---

##### `kernelId`<sup>Required</sup> <a name="kernelId" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.kernelId"></a>

```typescript
public readonly kernelId: string;
```

- *Type:* string

---

##### `manageEbsSnapshots`<sup>Required</sup> <a name="manageEbsSnapshots" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.manageEbsSnapshots"></a>

```typescript
public readonly manageEbsSnapshots: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `platformDetails`<sup>Required</sup> <a name="platformDetails" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.platformDetails"></a>

```typescript
public readonly platformDetails: string;
```

- *Type:* string

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.public"></a>

```typescript
public readonly public: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ramdiskId`<sup>Required</sup> <a name="ramdiskId" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.ramdiskId"></a>

```typescript
public readonly ramdiskId: string;
```

- *Type:* string

---

##### `rootDeviceName`<sup>Required</sup> <a name="rootDeviceName" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.rootDeviceName"></a>

```typescript
public readonly rootDeviceName: string;
```

- *Type:* string

---

##### `rootSnapshotId`<sup>Required</sup> <a name="rootSnapshotId" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.rootSnapshotId"></a>

```typescript
public readonly rootSnapshotId: string;
```

- *Type:* string

---

##### `sriovNetSupport`<sup>Required</sup> <a name="sriovNetSupport" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.sriovNetSupport"></a>

```typescript
public readonly sriovNetSupport: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.timeouts"></a>

```typescript
public readonly timeouts: AmiFromInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference">AmiFromInstanceTimeoutsOutputReference</a>

---

##### `tpmSupport`<sup>Required</sup> <a name="tpmSupport" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.tpmSupport"></a>

```typescript
public readonly tpmSupport: string;
```

- *Type:* string

---

##### `usageOperation`<sup>Required</sup> <a name="usageOperation" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.usageOperation"></a>

```typescript
public readonly usageOperation: string;
```

- *Type:* string

---

##### `virtualizationType`<sup>Required</sup> <a name="virtualizationType" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.virtualizationType"></a>

```typescript
public readonly virtualizationType: string;
```

- *Type:* string

---

##### `deprecationTimeInput`<sup>Optional</sup> <a name="deprecationTimeInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.deprecationTimeInput"></a>

```typescript
public readonly deprecationTimeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `ebsBlockDeviceInput`<sup>Optional</sup> <a name="ebsBlockDeviceInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.ebsBlockDeviceInput"></a>

```typescript
public readonly ebsBlockDeviceInput: IResolvable | AmiFromInstanceEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDevice">AmiFromInstanceEbsBlockDevice</a>[]

---

##### `ephemeralBlockDeviceInput`<sup>Optional</sup> <a name="ephemeralBlockDeviceInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.ephemeralBlockDeviceInput"></a>

```typescript
public readonly ephemeralBlockDeviceInput: IResolvable | AmiFromInstanceEphemeralBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDevice">AmiFromInstanceEphemeralBlockDevice</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `snapshotWithoutRebootInput`<sup>Optional</sup> <a name="snapshotWithoutRebootInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.snapshotWithoutRebootInput"></a>

```typescript
public readonly snapshotWithoutRebootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceInstanceIdInput`<sup>Optional</sup> <a name="sourceInstanceIdInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.sourceInstanceIdInput"></a>

```typescript
public readonly sourceInstanceIdInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: AmiFromInstanceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeouts">AmiFromInstanceTimeouts</a> | cdktf.IResolvable

---

##### `deprecationTime`<sup>Required</sup> <a name="deprecationTime" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.deprecationTime"></a>

```typescript
public readonly deprecationTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `snapshotWithoutReboot`<sup>Required</sup> <a name="snapshotWithoutReboot" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.snapshotWithoutReboot"></a>

```typescript
public readonly snapshotWithoutReboot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceInstanceId`<sup>Required</sup> <a name="sourceInstanceId" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.sourceInstanceId"></a>

```typescript
public readonly sourceInstanceId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AmiFromInstanceConfig <a name="AmiFromInstanceConfig" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.Initializer"></a>

```typescript
import { amiFromInstance } from '@cdktf/provider-aws'

const amiFromInstanceConfig: amiFromInstance.AmiFromInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#name AmiFromInstance#name}. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.sourceInstanceId">sourceInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#source_instance_id AmiFromInstance#source_instance_id}. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.deprecationTime">deprecationTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#deprecation_time AmiFromInstance#deprecation_time}. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#description AmiFromInstance#description}. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.ebsBlockDevice">ebsBlockDevice</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDevice">AmiFromInstanceEbsBlockDevice</a>[]</code> | ebs_block_device block. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.ephemeralBlockDevice">ephemeralBlockDevice</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDevice">AmiFromInstanceEphemeralBlockDevice</a>[]</code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#id AmiFromInstance#id}. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.snapshotWithoutReboot">snapshotWithoutReboot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#snapshot_without_reboot AmiFromInstance#snapshot_without_reboot}. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#tags AmiFromInstance#tags}. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#tags_all AmiFromInstance#tags_all}. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeouts">AmiFromInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#name AmiFromInstance#name}.

---

##### `sourceInstanceId`<sup>Required</sup> <a name="sourceInstanceId" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.sourceInstanceId"></a>

```typescript
public readonly sourceInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#source_instance_id AmiFromInstance#source_instance_id}.

---

##### `deprecationTime`<sup>Optional</sup> <a name="deprecationTime" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.deprecationTime"></a>

```typescript
public readonly deprecationTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#deprecation_time AmiFromInstance#deprecation_time}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#description AmiFromInstance#description}.

---

##### `ebsBlockDevice`<sup>Optional</sup> <a name="ebsBlockDevice" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.ebsBlockDevice"></a>

```typescript
public readonly ebsBlockDevice: IResolvable | AmiFromInstanceEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDevice">AmiFromInstanceEbsBlockDevice</a>[]

ebs_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#ebs_block_device AmiFromInstance#ebs_block_device}

---

##### `ephemeralBlockDevice`<sup>Optional</sup> <a name="ephemeralBlockDevice" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.ephemeralBlockDevice"></a>

```typescript
public readonly ephemeralBlockDevice: IResolvable | AmiFromInstanceEphemeralBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDevice">AmiFromInstanceEphemeralBlockDevice</a>[]

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#ephemeral_block_device AmiFromInstance#ephemeral_block_device}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#id AmiFromInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `snapshotWithoutReboot`<sup>Optional</sup> <a name="snapshotWithoutReboot" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.snapshotWithoutReboot"></a>

```typescript
public readonly snapshotWithoutReboot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#snapshot_without_reboot AmiFromInstance#snapshot_without_reboot}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#tags AmiFromInstance#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#tags_all AmiFromInstance#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AmiFromInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeouts">AmiFromInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#timeouts AmiFromInstance#timeouts}

---

### AmiFromInstanceEbsBlockDevice <a name="AmiFromInstanceEbsBlockDevice" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDevice.Initializer"></a>

```typescript
import { amiFromInstance } from '@cdktf/provider-aws'

const amiFromInstanceEbsBlockDevice: amiFromInstance.AmiFromInstanceEbsBlockDevice = { ... }
```


### AmiFromInstanceEphemeralBlockDevice <a name="AmiFromInstanceEphemeralBlockDevice" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDevice.Initializer"></a>

```typescript
import { amiFromInstance } from '@cdktf/provider-aws'

const amiFromInstanceEphemeralBlockDevice: amiFromInstance.AmiFromInstanceEphemeralBlockDevice = { ... }
```


### AmiFromInstanceTimeouts <a name="AmiFromInstanceTimeouts" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeouts.Initializer"></a>

```typescript
import { amiFromInstance } from '@cdktf/provider-aws'

const amiFromInstanceTimeouts: amiFromInstance.AmiFromInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#create AmiFromInstance#create}. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#delete AmiFromInstance#delete}. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#update AmiFromInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#create AmiFromInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#delete AmiFromInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance#update AmiFromInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AmiFromInstanceEbsBlockDeviceList <a name="AmiFromInstanceEbsBlockDeviceList" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.Initializer"></a>

```typescript
import { amiFromInstance } from '@cdktf/provider-aws'

new amiFromInstance.AmiFromInstanceEbsBlockDeviceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.get"></a>

```typescript
public get(index: number): AmiFromInstanceEbsBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDevice">AmiFromInstanceEbsBlockDevice</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmiFromInstanceEbsBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDevice">AmiFromInstanceEbsBlockDevice</a>[]

---


### AmiFromInstanceEbsBlockDeviceOutputReference <a name="AmiFromInstanceEbsBlockDeviceOutputReference" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.Initializer"></a>

```typescript
import { amiFromInstance } from '@cdktf/provider-aws'

new amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.encrypted">encrypted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.outpostArn">outpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDevice">AmiFromInstanceEbsBlockDevice</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.outpostArn"></a>

```typescript
public readonly outpostArn: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDeviceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AmiFromInstanceEbsBlockDevice | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEbsBlockDevice">AmiFromInstanceEbsBlockDevice</a> | cdktf.IResolvable

---


### AmiFromInstanceEphemeralBlockDeviceList <a name="AmiFromInstanceEphemeralBlockDeviceList" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.Initializer"></a>

```typescript
import { amiFromInstance } from '@cdktf/provider-aws'

new amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.get"></a>

```typescript
public get(index: number): AmiFromInstanceEphemeralBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDevice">AmiFromInstanceEphemeralBlockDevice</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmiFromInstanceEphemeralBlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDevice">AmiFromInstanceEphemeralBlockDevice</a>[]

---


### AmiFromInstanceEphemeralBlockDeviceOutputReference <a name="AmiFromInstanceEphemeralBlockDeviceOutputReference" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.Initializer"></a>

```typescript
import { amiFromInstance } from '@cdktf/provider-aws'

new amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.property.virtualName">virtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDevice">AmiFromInstanceEphemeralBlockDevice</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDeviceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AmiFromInstanceEphemeralBlockDevice | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceEphemeralBlockDevice">AmiFromInstanceEphemeralBlockDevice</a> | cdktf.IResolvable

---


### AmiFromInstanceTimeoutsOutputReference <a name="AmiFromInstanceTimeoutsOutputReference" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { amiFromInstance } from '@cdktf/provider-aws'

new amiFromInstance.AmiFromInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeouts">AmiFromInstanceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AmiFromInstanceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.amiFromInstance.AmiFromInstanceTimeouts">AmiFromInstanceTimeouts</a> | cdktf.IResolvable

---



