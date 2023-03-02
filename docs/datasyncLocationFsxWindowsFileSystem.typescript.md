# `datasyncLocationFsxWindowsFileSystem` Submodule <a name="`datasyncLocationFsxWindowsFileSystem` Submodule" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationFsxWindowsFileSystem <a name="DatasyncLocationFsxWindowsFileSystem" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system aws_datasync_location_fsx_windows_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer"></a>

```typescript
import { datasyncLocationFsxWindowsFileSystem } from '@cdktf/provider-aws'

new datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem(scope: Construct, id: string, config: DatasyncLocationFsxWindowsFileSystemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig">DatasyncLocationFsxWindowsFileSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig">DatasyncLocationFsxWindowsFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetSubdirectory">resetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSubdirectory` <a name="resetSubdirectory" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetSubdirectory"></a>

```typescript
public resetSubdirectory(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isConstruct"></a>

```typescript
import { datasyncLocationFsxWindowsFileSystem } from '@cdktf/provider-aws'

datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformElement"></a>

```typescript
import { datasyncLocationFsxWindowsFileSystem } from '@cdktf/provider-aws'

datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformResource"></a>

```typescript
import { datasyncLocationFsxWindowsFileSystem } from '@cdktf/provider-aws'

datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fsxFilesystemArnInput">fsxFilesystemArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.securityGroupArnsInput">securityGroupArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.subdirectoryInput">subdirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fsxFilesystemArn">fsxFilesystemArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.securityGroupArns">securityGroupArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.subdirectory">subdirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `fsxFilesystemArnInput`<sup>Optional</sup> <a name="fsxFilesystemArnInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fsxFilesystemArnInput"></a>

```typescript
public readonly fsxFilesystemArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `securityGroupArnsInput`<sup>Optional</sup> <a name="securityGroupArnsInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.securityGroupArnsInput"></a>

```typescript
public readonly securityGroupArnsInput: string[];
```

- *Type:* string[]

---

##### `subdirectoryInput`<sup>Optional</sup> <a name="subdirectoryInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.subdirectoryInput"></a>

```typescript
public readonly subdirectoryInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `fsxFilesystemArn`<sup>Required</sup> <a name="fsxFilesystemArn" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fsxFilesystemArn"></a>

```typescript
public readonly fsxFilesystemArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `securityGroupArns`<sup>Required</sup> <a name="securityGroupArns" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.securityGroupArns"></a>

```typescript
public readonly securityGroupArns: string[];
```

- *Type:* string[]

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationFsxWindowsFileSystemConfig <a name="DatasyncLocationFsxWindowsFileSystemConfig" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.Initializer"></a>

```typescript
import { datasyncLocationFsxWindowsFileSystem } from '@cdktf/provider-aws'

const datasyncLocationFsxWindowsFileSystemConfig: datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.fsxFilesystemArn">fsxFilesystemArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#fsx_filesystem_arn DatasyncLocationFsxWindowsFileSystem#fsx_filesystem_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#password DatasyncLocationFsxWindowsFileSystem#password}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.securityGroupArns">securityGroupArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#security_group_arns DatasyncLocationFsxWindowsFileSystem#security_group_arns}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.user">user</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#user DatasyncLocationFsxWindowsFileSystem#user}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#domain DatasyncLocationFsxWindowsFileSystem#domain}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#id DatasyncLocationFsxWindowsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.subdirectory">subdirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#subdirectory DatasyncLocationFsxWindowsFileSystem#subdirectory}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#tags DatasyncLocationFsxWindowsFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#tags_all DatasyncLocationFsxWindowsFileSystem#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fsxFilesystemArn`<sup>Required</sup> <a name="fsxFilesystemArn" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.fsxFilesystemArn"></a>

```typescript
public readonly fsxFilesystemArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#fsx_filesystem_arn DatasyncLocationFsxWindowsFileSystem#fsx_filesystem_arn}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#password DatasyncLocationFsxWindowsFileSystem#password}.

---

##### `securityGroupArns`<sup>Required</sup> <a name="securityGroupArns" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.securityGroupArns"></a>

```typescript
public readonly securityGroupArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#security_group_arns DatasyncLocationFsxWindowsFileSystem#security_group_arns}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#user DatasyncLocationFsxWindowsFileSystem#user}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#domain DatasyncLocationFsxWindowsFileSystem#domain}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#id DatasyncLocationFsxWindowsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#subdirectory DatasyncLocationFsxWindowsFileSystem#subdirectory}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#tags DatasyncLocationFsxWindowsFileSystem#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#tags_all DatasyncLocationFsxWindowsFileSystem#tags_all}.

---



