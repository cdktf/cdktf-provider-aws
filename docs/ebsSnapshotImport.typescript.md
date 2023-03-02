# `ebsSnapshotImport` Submodule <a name="`ebsSnapshotImport` Submodule" id="@cdktf/provider-aws.ebsSnapshotImport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EbsSnapshotImport <a name="EbsSnapshotImport" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import aws_ebs_snapshot_import}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer"></a>

```typescript
import { ebsSnapshotImport } from '@cdktf/provider-aws'

new ebsSnapshotImport.EbsSnapshotImport(scope: Construct, id: string, config: EbsSnapshotImportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig">EbsSnapshotImportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig">EbsSnapshotImportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putClientData">putClientData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putDiskContainer">putDiskContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetClientData">resetClientData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetPermanentRestore">resetPermanentRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetRoleName">resetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetStorageTier">resetStorageTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTemporaryRestoreDays">resetTemporaryRestoreDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putClientData` <a name="putClientData" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putClientData"></a>

```typescript
public putClientData(value: EbsSnapshotImportClientData): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putClientData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a>

---

##### `putDiskContainer` <a name="putDiskContainer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putDiskContainer"></a>

```typescript
public putDiskContainer(value: EbsSnapshotImportDiskContainer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putDiskContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putTimeouts"></a>

```typescript
public putTimeouts(value: EbsSnapshotImportTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a>

---

##### `resetClientData` <a name="resetClientData" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetClientData"></a>

```typescript
public resetClientData(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetPermanentRestore` <a name="resetPermanentRestore" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetPermanentRestore"></a>

```typescript
public resetPermanentRestore(): void
```

##### `resetRoleName` <a name="resetRoleName" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetRoleName"></a>

```typescript
public resetRoleName(): void
```

##### `resetStorageTier` <a name="resetStorageTier" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetStorageTier"></a>

```typescript
public resetStorageTier(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTemporaryRestoreDays` <a name="resetTemporaryRestoreDays" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTemporaryRestoreDays"></a>

```typescript
public resetTemporaryRestoreDays(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isConstruct"></a>

```typescript
import { ebsSnapshotImport } from '@cdktf/provider-aws'

ebsSnapshotImport.EbsSnapshotImport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformElement"></a>

```typescript
import { ebsSnapshotImport } from '@cdktf/provider-aws'

ebsSnapshotImport.EbsSnapshotImport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformResource"></a>

```typescript
import { ebsSnapshotImport } from '@cdktf/provider-aws'

ebsSnapshotImport.EbsSnapshotImport.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.clientData">clientData</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference">EbsSnapshotImportClientDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.dataEncryptionKeyId">dataEncryptionKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.diskContainer">diskContainer</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference">EbsSnapshotImportDiskContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.outpostArn">outpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.ownerAlias">ownerAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference">EbsSnapshotImportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.clientDataInput">clientDataInput</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.diskContainerInput">diskContainerInput</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.permanentRestoreInput">permanentRestoreInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.storageTierInput">storageTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.temporaryRestoreDaysInput">temporaryRestoreDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.permanentRestore">permanentRestore</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.storageTier">storageTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.temporaryRestoreDays">temporaryRestoreDays</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `clientData`<sup>Required</sup> <a name="clientData" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.clientData"></a>

```typescript
public readonly clientData: EbsSnapshotImportClientDataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference">EbsSnapshotImportClientDataOutputReference</a>

---

##### `dataEncryptionKeyId`<sup>Required</sup> <a name="dataEncryptionKeyId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.dataEncryptionKeyId"></a>

```typescript
public readonly dataEncryptionKeyId: string;
```

- *Type:* string

---

##### `diskContainer`<sup>Required</sup> <a name="diskContainer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.diskContainer"></a>

```typescript
public readonly diskContainer: EbsSnapshotImportDiskContainerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference">EbsSnapshotImportDiskContainerOutputReference</a>

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.outpostArn"></a>

```typescript
public readonly outpostArn: string;
```

- *Type:* string

---

##### `ownerAlias`<sup>Required</sup> <a name="ownerAlias" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.ownerAlias"></a>

```typescript
public readonly ownerAlias: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.timeouts"></a>

```typescript
public readonly timeouts: EbsSnapshotImportTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference">EbsSnapshotImportTimeoutsOutputReference</a>

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `clientDataInput`<sup>Optional</sup> <a name="clientDataInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.clientDataInput"></a>

```typescript
public readonly clientDataInput: EbsSnapshotImportClientData;
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `diskContainerInput`<sup>Optional</sup> <a name="diskContainerInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.diskContainerInput"></a>

```typescript
public readonly diskContainerInput: EbsSnapshotImportDiskContainer;
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a>

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `permanentRestoreInput`<sup>Optional</sup> <a name="permanentRestoreInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.permanentRestoreInput"></a>

```typescript
public readonly permanentRestoreInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `storageTierInput`<sup>Optional</sup> <a name="storageTierInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.storageTierInput"></a>

```typescript
public readonly storageTierInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `temporaryRestoreDaysInput`<sup>Optional</sup> <a name="temporaryRestoreDaysInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.temporaryRestoreDaysInput"></a>

```typescript
public readonly temporaryRestoreDaysInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: EbsSnapshotImportTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a> | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `permanentRestore`<sup>Required</sup> <a name="permanentRestore" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.permanentRestore"></a>

```typescript
public readonly permanentRestore: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `storageTier`<sup>Required</sup> <a name="storageTier" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.storageTier"></a>

```typescript
public readonly storageTier: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `temporaryRestoreDays`<sup>Required</sup> <a name="temporaryRestoreDays" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.temporaryRestoreDays"></a>

```typescript
public readonly temporaryRestoreDays: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EbsSnapshotImportClientData <a name="EbsSnapshotImportClientData" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.Initializer"></a>

```typescript
import { ebsSnapshotImport } from '@cdktf/provider-aws'

const ebsSnapshotImportClientData: ebsSnapshotImport.EbsSnapshotImportClientData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#comment EbsSnapshotImport#comment}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadEnd">uploadEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_end EbsSnapshotImport#upload_end}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadSize">uploadSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_size EbsSnapshotImport#upload_size}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadStart">uploadStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_start EbsSnapshotImport#upload_start}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#comment EbsSnapshotImport#comment}.

---

##### `uploadEnd`<sup>Optional</sup> <a name="uploadEnd" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadEnd"></a>

```typescript
public readonly uploadEnd: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_end EbsSnapshotImport#upload_end}.

---

##### `uploadSize`<sup>Optional</sup> <a name="uploadSize" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadSize"></a>

```typescript
public readonly uploadSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_size EbsSnapshotImport#upload_size}.

---

##### `uploadStart`<sup>Optional</sup> <a name="uploadStart" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadStart"></a>

```typescript
public readonly uploadStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_start EbsSnapshotImport#upload_start}.

---

### EbsSnapshotImportConfig <a name="EbsSnapshotImportConfig" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.Initializer"></a>

```typescript
import { ebsSnapshotImport } from '@cdktf/provider-aws'

const ebsSnapshotImportConfig: ebsSnapshotImport.EbsSnapshotImportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.diskContainer">diskContainer</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a></code> | disk_container block. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.clientData">clientData</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a></code> | client_data block. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#description EbsSnapshotImport#description}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#encrypted EbsSnapshotImport#encrypted}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#id EbsSnapshotImport#id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#kms_key_id EbsSnapshotImport#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.permanentRestore">permanentRestore</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#permanent_restore EbsSnapshotImport#permanent_restore}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.roleName">roleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#role_name EbsSnapshotImport#role_name}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.storageTier">storageTier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#storage_tier EbsSnapshotImport#storage_tier}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags EbsSnapshotImport#tags}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags_all EbsSnapshotImport#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.temporaryRestoreDays">temporaryRestoreDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#temporary_restore_days EbsSnapshotImport#temporary_restore_days}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `diskContainer`<sup>Required</sup> <a name="diskContainer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.diskContainer"></a>

```typescript
public readonly diskContainer: EbsSnapshotImportDiskContainer;
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a>

disk_container block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#disk_container EbsSnapshotImport#disk_container}

---

##### `clientData`<sup>Optional</sup> <a name="clientData" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.clientData"></a>

```typescript
public readonly clientData: EbsSnapshotImportClientData;
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a>

client_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#client_data EbsSnapshotImport#client_data}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#description EbsSnapshotImport#description}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#encrypted EbsSnapshotImport#encrypted}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#id EbsSnapshotImport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#kms_key_id EbsSnapshotImport#kms_key_id}.

---

##### `permanentRestore`<sup>Optional</sup> <a name="permanentRestore" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.permanentRestore"></a>

```typescript
public readonly permanentRestore: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#permanent_restore EbsSnapshotImport#permanent_restore}.

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#role_name EbsSnapshotImport#role_name}.

---

##### `storageTier`<sup>Optional</sup> <a name="storageTier" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.storageTier"></a>

```typescript
public readonly storageTier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#storage_tier EbsSnapshotImport#storage_tier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags EbsSnapshotImport#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags_all EbsSnapshotImport#tags_all}.

---

##### `temporaryRestoreDays`<sup>Optional</sup> <a name="temporaryRestoreDays" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.temporaryRestoreDays"></a>

```typescript
public readonly temporaryRestoreDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#temporary_restore_days EbsSnapshotImport#temporary_restore_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EbsSnapshotImportTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#timeouts EbsSnapshotImport#timeouts}

---

### EbsSnapshotImportDiskContainer <a name="EbsSnapshotImportDiskContainer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.Initializer"></a>

```typescript
import { ebsSnapshotImport } from '@cdktf/provider-aws'

const ebsSnapshotImportDiskContainer: ebsSnapshotImport.EbsSnapshotImportDiskContainer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#format EbsSnapshotImport#format}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#description EbsSnapshotImport#description}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#url EbsSnapshotImport#url}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.userBucket">userBucket</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a></code> | user_bucket block. |

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#format EbsSnapshotImport#format}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#description EbsSnapshotImport#description}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#url EbsSnapshotImport#url}.

---

##### `userBucket`<sup>Optional</sup> <a name="userBucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.userBucket"></a>

```typescript
public readonly userBucket: EbsSnapshotImportDiskContainerUserBucket;
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a>

user_bucket block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#user_bucket EbsSnapshotImport#user_bucket}

---

### EbsSnapshotImportDiskContainerUserBucket <a name="EbsSnapshotImportDiskContainerUserBucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket.Initializer"></a>

```typescript
import { ebsSnapshotImport } from '@cdktf/provider-aws'

const ebsSnapshotImportDiskContainerUserBucket: ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#s3_bucket EbsSnapshotImport#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket.property.s3Key">s3Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#s3_key EbsSnapshotImport#s3_key}. |

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#s3_bucket EbsSnapshotImport#s3_bucket}.

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#s3_key EbsSnapshotImport#s3_key}.

---

### EbsSnapshotImportTimeouts <a name="EbsSnapshotImportTimeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts.Initializer"></a>

```typescript
import { ebsSnapshotImport } from '@cdktf/provider-aws'

const ebsSnapshotImportTimeouts: ebsSnapshotImport.EbsSnapshotImportTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#create EbsSnapshotImport#create}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#delete EbsSnapshotImport#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#create EbsSnapshotImport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#delete EbsSnapshotImport#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EbsSnapshotImportClientDataOutputReference <a name="EbsSnapshotImportClientDataOutputReference" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.Initializer"></a>

```typescript
import { ebsSnapshotImport } from '@cdktf/provider-aws'

new ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadEnd">resetUploadEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadSize">resetUploadSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadStart">resetUploadStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetUploadEnd` <a name="resetUploadEnd" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadEnd"></a>

```typescript
public resetUploadEnd(): void
```

##### `resetUploadSize` <a name="resetUploadSize" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadSize"></a>

```typescript
public resetUploadSize(): void
```

##### `resetUploadStart` <a name="resetUploadStart" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadStart"></a>

```typescript
public resetUploadStart(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadEndInput">uploadEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadSizeInput">uploadSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadStartInput">uploadStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadEnd">uploadEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadSize">uploadSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadStart">uploadStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `uploadEndInput`<sup>Optional</sup> <a name="uploadEndInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadEndInput"></a>

```typescript
public readonly uploadEndInput: string;
```

- *Type:* string

---

##### `uploadSizeInput`<sup>Optional</sup> <a name="uploadSizeInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadSizeInput"></a>

```typescript
public readonly uploadSizeInput: number;
```

- *Type:* number

---

##### `uploadStartInput`<sup>Optional</sup> <a name="uploadStartInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadStartInput"></a>

```typescript
public readonly uploadStartInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `uploadEnd`<sup>Required</sup> <a name="uploadEnd" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadEnd"></a>

```typescript
public readonly uploadEnd: string;
```

- *Type:* string

---

##### `uploadSize`<sup>Required</sup> <a name="uploadSize" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadSize"></a>

```typescript
public readonly uploadSize: number;
```

- *Type:* number

---

##### `uploadStart`<sup>Required</sup> <a name="uploadStart" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadStart"></a>

```typescript
public readonly uploadStart: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EbsSnapshotImportClientData;
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a>

---


### EbsSnapshotImportDiskContainerOutputReference <a name="EbsSnapshotImportDiskContainerOutputReference" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.Initializer"></a>

```typescript
import { ebsSnapshotImport } from '@cdktf/provider-aws'

new ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.putUserBucket">putUserBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetUserBucket">resetUserBucket</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUserBucket` <a name="putUserBucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.putUserBucket"></a>

```typescript
public putUserBucket(value: EbsSnapshotImportDiskContainerUserBucket): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.putUserBucket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetUserBucket` <a name="resetUserBucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetUserBucket"></a>

```typescript
public resetUserBucket(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.userBucket">userBucket</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference">EbsSnapshotImportDiskContainerUserBucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.userBucketInput">userBucketInput</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `userBucket`<sup>Required</sup> <a name="userBucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.userBucket"></a>

```typescript
public readonly userBucket: EbsSnapshotImportDiskContainerUserBucketOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference">EbsSnapshotImportDiskContainerUserBucketOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `userBucketInput`<sup>Optional</sup> <a name="userBucketInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.userBucketInput"></a>

```typescript
public readonly userBucketInput: EbsSnapshotImportDiskContainerUserBucket;
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EbsSnapshotImportDiskContainer;
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a>

---


### EbsSnapshotImportDiskContainerUserBucketOutputReference <a name="EbsSnapshotImportDiskContainerUserBucketOutputReference" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.Initializer"></a>

```typescript
import { ebsSnapshotImport } from '@cdktf/provider-aws'

new ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3KeyInput">s3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3Key">s3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3BucketInput"></a>

```typescript
public readonly s3BucketInput: string;
```

- *Type:* string

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3KeyInput"></a>

```typescript
public readonly s3KeyInput: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EbsSnapshotImportDiskContainerUserBucket;
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a>

---


### EbsSnapshotImportTimeoutsOutputReference <a name="EbsSnapshotImportTimeoutsOutputReference" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.Initializer"></a>

```typescript
import { ebsSnapshotImport } from '@cdktf/provider-aws'

new ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EbsSnapshotImportTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a> | cdktf.IResolvable

---



