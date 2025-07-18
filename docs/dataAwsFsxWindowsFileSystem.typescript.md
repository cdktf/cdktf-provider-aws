# `dataAwsFsxWindowsFileSystem` Submodule <a name="`dataAwsFsxWindowsFileSystem` Submodule" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsFsxWindowsFileSystem <a name="DataAwsFsxWindowsFileSystem" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/fsx_windows_file_system aws_fsx_windows_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer"></a>

```typescript
import { dataAwsFsxWindowsFileSystem } from '@cdktf/provider-aws'

new dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem(scope: Construct, id: string, config: DataAwsFsxWindowsFileSystemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig">DataAwsFsxWindowsFileSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig">DataAwsFsxWindowsFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsFsxWindowsFileSystem resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isConstruct"></a>

```typescript
import { dataAwsFsxWindowsFileSystem } from '@cdktf/provider-aws'

dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isTerraformElement"></a>

```typescript
import { dataAwsFsxWindowsFileSystem } from '@cdktf/provider-aws'

dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isTerraformDataSource"></a>

```typescript
import { dataAwsFsxWindowsFileSystem } from '@cdktf/provider-aws'

dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.generateConfigForImport"></a>

```typescript
import { dataAwsFsxWindowsFileSystem } from '@cdktf/provider-aws'

dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsFsxWindowsFileSystem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsFsxWindowsFileSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsFsxWindowsFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/fsx_windows_file_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsFsxWindowsFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.activeDirectoryId">activeDirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.aliases">aliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.auditLogConfiguration">auditLogConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList">DataAwsFsxWindowsFileSystemAuditLogConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.automaticBackupRetentionDays">automaticBackupRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.backupId">backupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.copyTagsToBackups">copyTagsToBackups</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.dailyAutomaticBackupStartTime">dailyAutomaticBackupStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.diskIopsConfiguration">diskIopsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList">DataAwsFsxWindowsFileSystemDiskIopsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.preferredFileServerIp">preferredFileServerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.preferredSubnetId">preferredSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.skipFinalBackup">skipFinalBackup</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.storageCapacity">storageCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.throughputCapacity">throughputCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.weeklyMaintenanceStartTime">weeklyMaintenanceStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `activeDirectoryId`<sup>Required</sup> <a name="activeDirectoryId" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.activeDirectoryId"></a>

```typescript
public readonly activeDirectoryId: string;
```

- *Type:* string

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.aliases"></a>

```typescript
public readonly aliases: string[];
```

- *Type:* string[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `auditLogConfiguration`<sup>Required</sup> <a name="auditLogConfiguration" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.auditLogConfiguration"></a>

```typescript
public readonly auditLogConfiguration: DataAwsFsxWindowsFileSystemAuditLogConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList">DataAwsFsxWindowsFileSystemAuditLogConfigurationList</a>

---

##### `automaticBackupRetentionDays`<sup>Required</sup> <a name="automaticBackupRetentionDays" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.automaticBackupRetentionDays"></a>

```typescript
public readonly automaticBackupRetentionDays: number;
```

- *Type:* number

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

---

##### `copyTagsToBackups`<sup>Required</sup> <a name="copyTagsToBackups" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.copyTagsToBackups"></a>

```typescript
public readonly copyTagsToBackups: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `dailyAutomaticBackupStartTime`<sup>Required</sup> <a name="dailyAutomaticBackupStartTime" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.dailyAutomaticBackupStartTime"></a>

```typescript
public readonly dailyAutomaticBackupStartTime: string;
```

- *Type:* string

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `diskIopsConfiguration`<sup>Required</sup> <a name="diskIopsConfiguration" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.diskIopsConfiguration"></a>

```typescript
public readonly diskIopsConfiguration: DataAwsFsxWindowsFileSystemDiskIopsConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList">DataAwsFsxWindowsFileSystemDiskIopsConfigurationList</a>

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.networkInterfaceIds"></a>

```typescript
public readonly networkInterfaceIds: string[];
```

- *Type:* string[]

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `preferredFileServerIp`<sup>Required</sup> <a name="preferredFileServerIp" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.preferredFileServerIp"></a>

```typescript
public readonly preferredFileServerIp: string;
```

- *Type:* string

---

##### `preferredSubnetId`<sup>Required</sup> <a name="preferredSubnetId" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.preferredSubnetId"></a>

```typescript
public readonly preferredSubnetId: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `skipFinalBackup`<sup>Required</sup> <a name="skipFinalBackup" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.skipFinalBackup"></a>

```typescript
public readonly skipFinalBackup: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `storageCapacity`<sup>Required</sup> <a name="storageCapacity" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.storageCapacity"></a>

```typescript
public readonly storageCapacity: number;
```

- *Type:* number

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `throughputCapacity`<sup>Required</sup> <a name="throughputCapacity" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.throughputCapacity"></a>

```typescript
public readonly throughputCapacity: number;
```

- *Type:* number

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `weeklyMaintenanceStartTime`<sup>Required</sup> <a name="weeklyMaintenanceStartTime" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.weeklyMaintenanceStartTime"></a>

```typescript
public readonly weeklyMaintenanceStartTime: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsFsxWindowsFileSystemAuditLogConfiguration <a name="DataAwsFsxWindowsFileSystemAuditLogConfiguration" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfiguration.Initializer"></a>

```typescript
import { dataAwsFsxWindowsFileSystem } from '@cdktf/provider-aws'

const dataAwsFsxWindowsFileSystemAuditLogConfiguration: dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfiguration = { ... }
```


### DataAwsFsxWindowsFileSystemConfig <a name="DataAwsFsxWindowsFileSystemConfig" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.Initializer"></a>

```typescript
import { dataAwsFsxWindowsFileSystem } from '@cdktf/provider-aws'

const dataAwsFsxWindowsFileSystemConfig: dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/fsx_windows_file_system#id DataAwsFsxWindowsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/fsx_windows_file_system#tags DataAwsFsxWindowsFileSystem#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/fsx_windows_file_system#id DataAwsFsxWindowsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/fsx_windows_file_system#region DataAwsFsxWindowsFileSystem#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/fsx_windows_file_system#tags DataAwsFsxWindowsFileSystem#tags}.

---

### DataAwsFsxWindowsFileSystemDiskIopsConfiguration <a name="DataAwsFsxWindowsFileSystemDiskIopsConfiguration" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfiguration.Initializer"></a>

```typescript
import { dataAwsFsxWindowsFileSystem } from '@cdktf/provider-aws'

const dataAwsFsxWindowsFileSystemDiskIopsConfiguration: dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsFsxWindowsFileSystemAuditLogConfigurationList <a name="DataAwsFsxWindowsFileSystemAuditLogConfigurationList" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer"></a>

```typescript
import { dataAwsFsxWindowsFileSystem } from '@cdktf/provider-aws'

new dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference <a name="DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsFsxWindowsFileSystem } from '@cdktf/provider-aws'

new dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestination">auditLogDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevel">fileAccessAuditLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevel">fileShareAccessAuditLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfiguration">DataAwsFsxWindowsFileSystemAuditLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditLogDestination`<sup>Required</sup> <a name="auditLogDestination" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestination"></a>

```typescript
public readonly auditLogDestination: string;
```

- *Type:* string

---

##### `fileAccessAuditLogLevel`<sup>Required</sup> <a name="fileAccessAuditLogLevel" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevel"></a>

```typescript
public readonly fileAccessAuditLogLevel: string;
```

- *Type:* string

---

##### `fileShareAccessAuditLogLevel`<sup>Required</sup> <a name="fileShareAccessAuditLogLevel" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevel"></a>

```typescript
public readonly fileShareAccessAuditLogLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsFsxWindowsFileSystemAuditLogConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfiguration">DataAwsFsxWindowsFileSystemAuditLogConfiguration</a>

---


### DataAwsFsxWindowsFileSystemDiskIopsConfigurationList <a name="DataAwsFsxWindowsFileSystemDiskIopsConfigurationList" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer"></a>

```typescript
import { dataAwsFsxWindowsFileSystem } from '@cdktf/provider-aws'

new dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference <a name="DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsFsxWindowsFileSystem } from '@cdktf/provider-aws'

new dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfiguration">DataAwsFsxWindowsFileSystemDiskIopsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsFsxWindowsFileSystemDiskIopsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfiguration">DataAwsFsxWindowsFileSystemDiskIopsConfiguration</a>

---



