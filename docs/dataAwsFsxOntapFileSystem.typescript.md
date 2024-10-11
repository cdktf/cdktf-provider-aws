# `dataAwsFsxOntapFileSystem` Submodule <a name="`dataAwsFsxOntapFileSystem` Submodule" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsFsxOntapFileSystem <a name="DataAwsFsxOntapFileSystem" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/fsx_ontap_file_system aws_fsx_ontap_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.Initializer"></a>

```typescript
import { dataAwsFsxOntapFileSystem } from '@cdktf/provider-aws'

new dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem(scope: Construct, id: string, config: DataAwsFsxOntapFileSystemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig">DataAwsFsxOntapFileSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig">DataAwsFsxOntapFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsFsxOntapFileSystem resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.isConstruct"></a>

```typescript
import { dataAwsFsxOntapFileSystem } from '@cdktf/provider-aws'

dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.isTerraformElement"></a>

```typescript
import { dataAwsFsxOntapFileSystem } from '@cdktf/provider-aws'

dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.isTerraformDataSource"></a>

```typescript
import { dataAwsFsxOntapFileSystem } from '@cdktf/provider-aws'

dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.generateConfigForImport"></a>

```typescript
import { dataAwsFsxOntapFileSystem } from '@cdktf/provider-aws'

dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsFsxOntapFileSystem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsFsxOntapFileSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsFsxOntapFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/fsx_ontap_file_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsFsxOntapFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.automaticBackupRetentionDays">automaticBackupRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.dailyAutomaticBackupStartTime">dailyAutomaticBackupStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.diskIopsConfiguration">diskIopsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList">DataAwsFsxOntapFileSystemDiskIopsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.endpointIpAddressRange">endpointIpAddressRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList">DataAwsFsxOntapFileSystemEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.haPairs">haPairs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.preferredSubnetId">preferredSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.routeTableIds">routeTableIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.storageCapacity">storageCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.throughputCapacity">throughputCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.throughputCapacityPerHaPair">throughputCapacityPerHaPair</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.weeklyMaintenanceStartTime">weeklyMaintenanceStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `automaticBackupRetentionDays`<sup>Required</sup> <a name="automaticBackupRetentionDays" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.automaticBackupRetentionDays"></a>

```typescript
public readonly automaticBackupRetentionDays: number;
```

- *Type:* number

---

##### `dailyAutomaticBackupStartTime`<sup>Required</sup> <a name="dailyAutomaticBackupStartTime" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.dailyAutomaticBackupStartTime"></a>

```typescript
public readonly dailyAutomaticBackupStartTime: string;
```

- *Type:* string

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `diskIopsConfiguration`<sup>Required</sup> <a name="diskIopsConfiguration" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.diskIopsConfiguration"></a>

```typescript
public readonly diskIopsConfiguration: DataAwsFsxOntapFileSystemDiskIopsConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList">DataAwsFsxOntapFileSystemDiskIopsConfigurationList</a>

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `endpointIpAddressRange`<sup>Required</sup> <a name="endpointIpAddressRange" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.endpointIpAddressRange"></a>

```typescript
public readonly endpointIpAddressRange: string;
```

- *Type:* string

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.endpoints"></a>

```typescript
public readonly endpoints: DataAwsFsxOntapFileSystemEndpointsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList">DataAwsFsxOntapFileSystemEndpointsList</a>

---

##### `haPairs`<sup>Required</sup> <a name="haPairs" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.haPairs"></a>

```typescript
public readonly haPairs: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.networkInterfaceIds"></a>

```typescript
public readonly networkInterfaceIds: string[];
```

- *Type:* string[]

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `preferredSubnetId`<sup>Required</sup> <a name="preferredSubnetId" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.preferredSubnetId"></a>

```typescript
public readonly preferredSubnetId: string;
```

- *Type:* string

---

##### `routeTableIds`<sup>Required</sup> <a name="routeTableIds" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.routeTableIds"></a>

```typescript
public readonly routeTableIds: string[];
```

- *Type:* string[]

---

##### `storageCapacity`<sup>Required</sup> <a name="storageCapacity" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.storageCapacity"></a>

```typescript
public readonly storageCapacity: number;
```

- *Type:* number

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `throughputCapacity`<sup>Required</sup> <a name="throughputCapacity" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.throughputCapacity"></a>

```typescript
public readonly throughputCapacity: number;
```

- *Type:* number

---

##### `throughputCapacityPerHaPair`<sup>Required</sup> <a name="throughputCapacityPerHaPair" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.throughputCapacityPerHaPair"></a>

```typescript
public readonly throughputCapacityPerHaPair: number;
```

- *Type:* number

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `weeklyMaintenanceStartTime`<sup>Required</sup> <a name="weeklyMaintenanceStartTime" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.weeklyMaintenanceStartTime"></a>

```typescript
public readonly weeklyMaintenanceStartTime: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsFsxOntapFileSystemConfig <a name="DataAwsFsxOntapFileSystemConfig" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.Initializer"></a>

```typescript
import { dataAwsFsxOntapFileSystem } from '@cdktf/provider-aws'

const dataAwsFsxOntapFileSystemConfig: dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/fsx_ontap_file_system#id DataAwsFsxOntapFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/fsx_ontap_file_system#tags DataAwsFsxOntapFileSystem#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/fsx_ontap_file_system#id DataAwsFsxOntapFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/data-sources/fsx_ontap_file_system#tags DataAwsFsxOntapFileSystem#tags}.

---

### DataAwsFsxOntapFileSystemDiskIopsConfiguration <a name="DataAwsFsxOntapFileSystemDiskIopsConfiguration" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfiguration.Initializer"></a>

```typescript
import { dataAwsFsxOntapFileSystem } from '@cdktf/provider-aws'

const dataAwsFsxOntapFileSystemDiskIopsConfiguration: dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfiguration = { ... }
```


### DataAwsFsxOntapFileSystemEndpoints <a name="DataAwsFsxOntapFileSystemEndpoints" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpoints.Initializer"></a>

```typescript
import { dataAwsFsxOntapFileSystem } from '@cdktf/provider-aws'

const dataAwsFsxOntapFileSystemEndpoints: dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpoints = { ... }
```


### DataAwsFsxOntapFileSystemEndpointsIntercluster <a name="DataAwsFsxOntapFileSystemEndpointsIntercluster" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsIntercluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsIntercluster.Initializer"></a>

```typescript
import { dataAwsFsxOntapFileSystem } from '@cdktf/provider-aws'

const dataAwsFsxOntapFileSystemEndpointsIntercluster: dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsIntercluster = { ... }
```


### DataAwsFsxOntapFileSystemEndpointsManagement <a name="DataAwsFsxOntapFileSystemEndpointsManagement" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagement.Initializer"></a>

```typescript
import { dataAwsFsxOntapFileSystem } from '@cdktf/provider-aws'

const dataAwsFsxOntapFileSystemEndpointsManagement: dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagement = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsFsxOntapFileSystemDiskIopsConfigurationList <a name="DataAwsFsxOntapFileSystemDiskIopsConfigurationList" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.Initializer"></a>

```typescript
import { dataAwsFsxOntapFileSystem } from '@cdktf/provider-aws'

new dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference <a name="DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsFsxOntapFileSystem } from '@cdktf/provider-aws'

new dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfiguration">DataAwsFsxOntapFileSystemDiskIopsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsFsxOntapFileSystemDiskIopsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemDiskIopsConfiguration">DataAwsFsxOntapFileSystemDiskIopsConfiguration</a>

---


### DataAwsFsxOntapFileSystemEndpointsInterclusterList <a name="DataAwsFsxOntapFileSystemEndpointsInterclusterList" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.Initializer"></a>

```typescript
import { dataAwsFsxOntapFileSystem } from '@cdktf/provider-aws'

new dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.get"></a>

```typescript
public get(index: number): DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference <a name="DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer"></a>

```typescript
import { dataAwsFsxOntapFileSystem } from '@cdktf/provider-aws'

new dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsIntercluster">DataAwsFsxOntapFileSystemEndpointsIntercluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsFsxOntapFileSystemEndpointsIntercluster;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsIntercluster">DataAwsFsxOntapFileSystemEndpointsIntercluster</a>

---


### DataAwsFsxOntapFileSystemEndpointsList <a name="DataAwsFsxOntapFileSystemEndpointsList" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.Initializer"></a>

```typescript
import { dataAwsFsxOntapFileSystem } from '@cdktf/provider-aws'

new dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.get"></a>

```typescript
public get(index: number): DataAwsFsxOntapFileSystemEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsFsxOntapFileSystemEndpointsManagementList <a name="DataAwsFsxOntapFileSystemEndpointsManagementList" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.Initializer"></a>

```typescript
import { dataAwsFsxOntapFileSystem } from '@cdktf/provider-aws'

new dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.get"></a>

```typescript
public get(index: number): DataAwsFsxOntapFileSystemEndpointsManagementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsFsxOntapFileSystemEndpointsManagementOutputReference <a name="DataAwsFsxOntapFileSystemEndpointsManagementOutputReference" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.Initializer"></a>

```typescript
import { dataAwsFsxOntapFileSystem } from '@cdktf/provider-aws'

new dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagement">DataAwsFsxOntapFileSystemEndpointsManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsFsxOntapFileSystemEndpointsManagement;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagement">DataAwsFsxOntapFileSystemEndpointsManagement</a>

---


### DataAwsFsxOntapFileSystemEndpointsOutputReference <a name="DataAwsFsxOntapFileSystemEndpointsOutputReference" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.Initializer"></a>

```typescript
import { dataAwsFsxOntapFileSystem } from '@cdktf/provider-aws'

new dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.property.intercluster">intercluster</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList">DataAwsFsxOntapFileSystemEndpointsInterclusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.property.management">management</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList">DataAwsFsxOntapFileSystemEndpointsManagementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpoints">DataAwsFsxOntapFileSystemEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intercluster`<sup>Required</sup> <a name="intercluster" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.property.intercluster"></a>

```typescript
public readonly intercluster: DataAwsFsxOntapFileSystemEndpointsInterclusterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsInterclusterList">DataAwsFsxOntapFileSystemEndpointsInterclusterList</a>

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.property.management"></a>

```typescript
public readonly management: DataAwsFsxOntapFileSystemEndpointsManagementList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsManagementList">DataAwsFsxOntapFileSystemEndpointsManagementList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsFsxOntapFileSystemEndpoints;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapFileSystem.DataAwsFsxOntapFileSystemEndpoints">DataAwsFsxOntapFileSystemEndpoints</a>

---



