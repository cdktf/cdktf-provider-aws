# `efsFileSystem` Submodule <a name="`efsFileSystem` Submodule" id="@cdktf/provider-aws.efsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EfsFileSystem <a name="EfsFileSystem" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system aws_efs_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.Initializer"></a>

```typescript
import { efsFileSystem } from '@cdktf/provider-aws'

new efsFileSystem.EfsFileSystem(scope: Construct, id: string, config?: EfsFileSystemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig">EfsFileSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig">EfsFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.putLifecyclePolicy">putLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetAvailabilityZoneName">resetAvailabilityZoneName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetCreationToken">resetCreationToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetLifecyclePolicy">resetLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetPerformanceMode">resetPerformanceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetProvisionedThroughputInMibps">resetProvisionedThroughputInMibps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetThroughputMode">resetThroughputMode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putLifecyclePolicy` <a name="putLifecyclePolicy" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.putLifecyclePolicy"></a>

```typescript
public putLifecyclePolicy(value: IResolvable | EfsFileSystemLifecyclePolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.putLifecyclePolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy">EfsFileSystemLifecyclePolicy</a>[]

---

##### `resetAvailabilityZoneName` <a name="resetAvailabilityZoneName" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetAvailabilityZoneName"></a>

```typescript
public resetAvailabilityZoneName(): void
```

##### `resetCreationToken` <a name="resetCreationToken" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetCreationToken"></a>

```typescript
public resetCreationToken(): void
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetLifecyclePolicy` <a name="resetLifecyclePolicy" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetLifecyclePolicy"></a>

```typescript
public resetLifecyclePolicy(): void
```

##### `resetPerformanceMode` <a name="resetPerformanceMode" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetPerformanceMode"></a>

```typescript
public resetPerformanceMode(): void
```

##### `resetProvisionedThroughputInMibps` <a name="resetProvisionedThroughputInMibps" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetProvisionedThroughputInMibps"></a>

```typescript
public resetProvisionedThroughputInMibps(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetThroughputMode` <a name="resetThroughputMode" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.resetThroughputMode"></a>

```typescript
public resetThroughputMode(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isConstruct"></a>

```typescript
import { efsFileSystem } from '@cdktf/provider-aws'

efsFileSystem.EfsFileSystem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isTerraformElement"></a>

```typescript
import { efsFileSystem } from '@cdktf/provider-aws'

efsFileSystem.EfsFileSystem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isTerraformResource"></a>

```typescript
import { efsFileSystem } from '@cdktf/provider-aws'

efsFileSystem.EfsFileSystem.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.lifecyclePolicy">lifecyclePolicy</a></code> | <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList">EfsFileSystemLifecyclePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.numberOfMountTargets">numberOfMountTargets</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.sizeInBytes">sizeInBytes</a></code> | <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList">EfsFileSystemSizeInBytesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.availabilityZoneNameInput">availabilityZoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.creationTokenInput">creationTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.lifecyclePolicyInput">lifecyclePolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy">EfsFileSystemLifecyclePolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.performanceModeInput">performanceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibpsInput">provisionedThroughputInMibpsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.throughputModeInput">throughputModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.availabilityZoneName">availabilityZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.creationToken">creationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.performanceMode">performanceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibps">provisionedThroughputInMibps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.throughputMode">throughputMode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `lifecyclePolicy`<sup>Required</sup> <a name="lifecyclePolicy" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.lifecyclePolicy"></a>

```typescript
public readonly lifecyclePolicy: EfsFileSystemLifecyclePolicyList;
```

- *Type:* <a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList">EfsFileSystemLifecyclePolicyList</a>

---

##### `numberOfMountTargets`<sup>Required</sup> <a name="numberOfMountTargets" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.numberOfMountTargets"></a>

```typescript
public readonly numberOfMountTargets: number;
```

- *Type:* number

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `sizeInBytes`<sup>Required</sup> <a name="sizeInBytes" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.sizeInBytes"></a>

```typescript
public readonly sizeInBytes: EfsFileSystemSizeInBytesList;
```

- *Type:* <a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList">EfsFileSystemSizeInBytesList</a>

---

##### `availabilityZoneNameInput`<sup>Optional</sup> <a name="availabilityZoneNameInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.availabilityZoneNameInput"></a>

```typescript
public readonly availabilityZoneNameInput: string;
```

- *Type:* string

---

##### `creationTokenInput`<sup>Optional</sup> <a name="creationTokenInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.creationTokenInput"></a>

```typescript
public readonly creationTokenInput: string;
```

- *Type:* string

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `lifecyclePolicyInput`<sup>Optional</sup> <a name="lifecyclePolicyInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.lifecyclePolicyInput"></a>

```typescript
public readonly lifecyclePolicyInput: IResolvable | EfsFileSystemLifecyclePolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy">EfsFileSystemLifecyclePolicy</a>[]

---

##### `performanceModeInput`<sup>Optional</sup> <a name="performanceModeInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.performanceModeInput"></a>

```typescript
public readonly performanceModeInput: string;
```

- *Type:* string

---

##### `provisionedThroughputInMibpsInput`<sup>Optional</sup> <a name="provisionedThroughputInMibpsInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibpsInput"></a>

```typescript
public readonly provisionedThroughputInMibpsInput: number;
```

- *Type:* number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `throughputModeInput`<sup>Optional</sup> <a name="throughputModeInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.throughputModeInput"></a>

```typescript
public readonly throughputModeInput: string;
```

- *Type:* string

---

##### `availabilityZoneName`<sup>Required</sup> <a name="availabilityZoneName" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.availabilityZoneName"></a>

```typescript
public readonly availabilityZoneName: string;
```

- *Type:* string

---

##### `creationToken`<sup>Required</sup> <a name="creationToken" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.creationToken"></a>

```typescript
public readonly creationToken: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `performanceMode`<sup>Required</sup> <a name="performanceMode" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.performanceMode"></a>

```typescript
public readonly performanceMode: string;
```

- *Type:* string

---

##### `provisionedThroughputInMibps`<sup>Required</sup> <a name="provisionedThroughputInMibps" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.provisionedThroughputInMibps"></a>

```typescript
public readonly provisionedThroughputInMibps: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `throughputMode`<sup>Required</sup> <a name="throughputMode" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.throughputMode"></a>

```typescript
public readonly throughputMode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EfsFileSystemConfig <a name="EfsFileSystemConfig" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.Initializer"></a>

```typescript
import { efsFileSystem } from '@cdktf/provider-aws'

const efsFileSystemConfig: efsFileSystem.EfsFileSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.availabilityZoneName">availabilityZoneName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#availability_zone_name EfsFileSystem#availability_zone_name}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.creationToken">creationToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#creation_token EfsFileSystem#creation_token}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#encrypted EfsFileSystem#encrypted}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#id EfsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#kms_key_id EfsFileSystem#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.lifecyclePolicy">lifecyclePolicy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy">EfsFileSystemLifecyclePolicy</a>[]</code> | lifecycle_policy block. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.performanceMode">performanceMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#performance_mode EfsFileSystem#performance_mode}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.provisionedThroughputInMibps">provisionedThroughputInMibps</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#provisioned_throughput_in_mibps EfsFileSystem#provisioned_throughput_in_mibps}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#tags EfsFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#tags_all EfsFileSystem#tags_all}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.throughputMode">throughputMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#throughput_mode EfsFileSystem#throughput_mode}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityZoneName`<sup>Optional</sup> <a name="availabilityZoneName" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.availabilityZoneName"></a>

```typescript
public readonly availabilityZoneName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#availability_zone_name EfsFileSystem#availability_zone_name}.

---

##### `creationToken`<sup>Optional</sup> <a name="creationToken" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.creationToken"></a>

```typescript
public readonly creationToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#creation_token EfsFileSystem#creation_token}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#encrypted EfsFileSystem#encrypted}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#id EfsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#kms_key_id EfsFileSystem#kms_key_id}.

---

##### `lifecyclePolicy`<sup>Optional</sup> <a name="lifecyclePolicy" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.lifecyclePolicy"></a>

```typescript
public readonly lifecyclePolicy: IResolvable | EfsFileSystemLifecyclePolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy">EfsFileSystemLifecyclePolicy</a>[]

lifecycle_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#lifecycle_policy EfsFileSystem#lifecycle_policy}

---

##### `performanceMode`<sup>Optional</sup> <a name="performanceMode" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.performanceMode"></a>

```typescript
public readonly performanceMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#performance_mode EfsFileSystem#performance_mode}.

---

##### `provisionedThroughputInMibps`<sup>Optional</sup> <a name="provisionedThroughputInMibps" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.provisionedThroughputInMibps"></a>

```typescript
public readonly provisionedThroughputInMibps: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#provisioned_throughput_in_mibps EfsFileSystem#provisioned_throughput_in_mibps}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#tags EfsFileSystem#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#tags_all EfsFileSystem#tags_all}.

---

##### `throughputMode`<sup>Optional</sup> <a name="throughputMode" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemConfig.property.throughputMode"></a>

```typescript
public readonly throughputMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#throughput_mode EfsFileSystem#throughput_mode}.

---

### EfsFileSystemLifecyclePolicy <a name="EfsFileSystemLifecyclePolicy" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy.Initializer"></a>

```typescript
import { efsFileSystem } from '@cdktf/provider-aws'

const efsFileSystemLifecyclePolicy: efsFileSystem.EfsFileSystemLifecyclePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy.property.transitionToIa">transitionToIa</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#transition_to_ia EfsFileSystem#transition_to_ia}. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy.property.transitionToPrimaryStorageClass">transitionToPrimaryStorageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#transition_to_primary_storage_class EfsFileSystem#transition_to_primary_storage_class}. |

---

##### `transitionToIa`<sup>Optional</sup> <a name="transitionToIa" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy.property.transitionToIa"></a>

```typescript
public readonly transitionToIa: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#transition_to_ia EfsFileSystem#transition_to_ia}.

---

##### `transitionToPrimaryStorageClass`<sup>Optional</sup> <a name="transitionToPrimaryStorageClass" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy.property.transitionToPrimaryStorageClass"></a>

```typescript
public readonly transitionToPrimaryStorageClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/efs_file_system#transition_to_primary_storage_class EfsFileSystem#transition_to_primary_storage_class}.

---

### EfsFileSystemSizeInBytes <a name="EfsFileSystemSizeInBytes" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytes.Initializer"></a>

```typescript
import { efsFileSystem } from '@cdktf/provider-aws'

const efsFileSystemSizeInBytes: efsFileSystem.EfsFileSystemSizeInBytes = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### EfsFileSystemLifecyclePolicyList <a name="EfsFileSystemLifecyclePolicyList" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer"></a>

```typescript
import { efsFileSystem } from '@cdktf/provider-aws'

new efsFileSystem.EfsFileSystemLifecyclePolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.get"></a>

```typescript
public get(index: number): EfsFileSystemLifecyclePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy">EfsFileSystemLifecyclePolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EfsFileSystemLifecyclePolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy">EfsFileSystemLifecyclePolicy</a>[]

---


### EfsFileSystemLifecyclePolicyOutputReference <a name="EfsFileSystemLifecyclePolicyOutputReference" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer"></a>

```typescript
import { efsFileSystem } from '@cdktf/provider-aws'

new efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resetTransitionToIa">resetTransitionToIa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resetTransitionToPrimaryStorageClass">resetTransitionToPrimaryStorageClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTransitionToIa` <a name="resetTransitionToIa" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resetTransitionToIa"></a>

```typescript
public resetTransitionToIa(): void
```

##### `resetTransitionToPrimaryStorageClass` <a name="resetTransitionToPrimaryStorageClass" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.resetTransitionToPrimaryStorageClass"></a>

```typescript
public resetTransitionToPrimaryStorageClass(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToIaInput">transitionToIaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToPrimaryStorageClassInput">transitionToPrimaryStorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToIa">transitionToIa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToPrimaryStorageClass">transitionToPrimaryStorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy">EfsFileSystemLifecyclePolicy</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `transitionToIaInput`<sup>Optional</sup> <a name="transitionToIaInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToIaInput"></a>

```typescript
public readonly transitionToIaInput: string;
```

- *Type:* string

---

##### `transitionToPrimaryStorageClassInput`<sup>Optional</sup> <a name="transitionToPrimaryStorageClassInput" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToPrimaryStorageClassInput"></a>

```typescript
public readonly transitionToPrimaryStorageClassInput: string;
```

- *Type:* string

---

##### `transitionToIa`<sup>Required</sup> <a name="transitionToIa" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToIa"></a>

```typescript
public readonly transitionToIa: string;
```

- *Type:* string

---

##### `transitionToPrimaryStorageClass`<sup>Required</sup> <a name="transitionToPrimaryStorageClass" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.transitionToPrimaryStorageClass"></a>

```typescript
public readonly transitionToPrimaryStorageClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EfsFileSystemLifecyclePolicy | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemLifecyclePolicy">EfsFileSystemLifecyclePolicy</a> | cdktf.IResolvable

---


### EfsFileSystemSizeInBytesList <a name="EfsFileSystemSizeInBytesList" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer"></a>

```typescript
import { efsFileSystem } from '@cdktf/provider-aws'

new efsFileSystem.EfsFileSystemSizeInBytesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.get"></a>

```typescript
public get(index: number): EfsFileSystemSizeInBytesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### EfsFileSystemSizeInBytesOutputReference <a name="EfsFileSystemSizeInBytesOutputReference" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer"></a>

```typescript
import { efsFileSystem } from '@cdktf/provider-aws'

new efsFileSystem.EfsFileSystemSizeInBytesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.valueInIa">valueInIa</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.valueInStandard">valueInStandard</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytes">EfsFileSystemSizeInBytes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `valueInIa`<sup>Required</sup> <a name="valueInIa" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.valueInIa"></a>

```typescript
public readonly valueInIa: number;
```

- *Type:* number

---

##### `valueInStandard`<sup>Required</sup> <a name="valueInStandard" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.valueInStandard"></a>

```typescript
public readonly valueInStandard: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EfsFileSystemSizeInBytes;
```

- *Type:* <a href="#@cdktf/provider-aws.efsFileSystem.EfsFileSystemSizeInBytes">EfsFileSystemSizeInBytes</a>

---



