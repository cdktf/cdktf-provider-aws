# `aws_rds_custom_db_engine_version`

Refer to the Terraform Registory for docs: [`aws_rds_custom_db_engine_version`](https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version).

# `rdsCustomDbEngineVersion` Submodule <a name="`rdsCustomDbEngineVersion` Submodule" id="@cdktf/provider-aws.rdsCustomDbEngineVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsCustomDbEngineVersion <a name="RdsCustomDbEngineVersion" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version aws_rds_custom_db_engine_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer"></a>

```typescript
import { rdsCustomDbEngineVersion } from '@cdktf/provider-aws'

new rdsCustomDbEngineVersion.RdsCustomDbEngineVersion(scope: Construct, id: string, config: RdsCustomDbEngineVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig">RdsCustomDbEngineVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig">RdsCustomDbEngineVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFilesS3BucketName">resetDatabaseInstallationFilesS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFilesS3Prefix">resetDatabaseInstallationFilesS3Prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetFilename">resetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetManifest">resetManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetManifestHash">resetManifestHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetSourceImageId">resetSourceImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.putTimeouts"></a>

```typescript
public putTimeouts(value: RdsCustomDbEngineVersionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts">RdsCustomDbEngineVersionTimeouts</a>

---

##### `resetDatabaseInstallationFilesS3BucketName` <a name="resetDatabaseInstallationFilesS3BucketName" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFilesS3BucketName"></a>

```typescript
public resetDatabaseInstallationFilesS3BucketName(): void
```

##### `resetDatabaseInstallationFilesS3Prefix` <a name="resetDatabaseInstallationFilesS3Prefix" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFilesS3Prefix"></a>

```typescript
public resetDatabaseInstallationFilesS3Prefix(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFilename` <a name="resetFilename" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetFilename"></a>

```typescript
public resetFilename(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetManifest` <a name="resetManifest" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetManifest"></a>

```typescript
public resetManifest(): void
```

##### `resetManifestHash` <a name="resetManifestHash" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetManifestHash"></a>

```typescript
public resetManifestHash(): void
```

##### `resetSourceImageId` <a name="resetSourceImageId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetSourceImageId"></a>

```typescript
public resetSourceImageId(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RdsCustomDbEngineVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isConstruct"></a>

```typescript
import { rdsCustomDbEngineVersion } from '@cdktf/provider-aws'

rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformElement"></a>

```typescript
import { rdsCustomDbEngineVersion } from '@cdktf/provider-aws'

rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformResource"></a>

```typescript
import { rdsCustomDbEngineVersion } from '@cdktf/provider-aws'

rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport"></a>

```typescript
import { rdsCustomDbEngineVersion } from '@cdktf/provider-aws'

rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RdsCustomDbEngineVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RdsCustomDbEngineVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RdsCustomDbEngineVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RdsCustomDbEngineVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.dbParameterGroupFamily">dbParameterGroupFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.majorEngineVersion">majorEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestComputed">manifestComputed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference">RdsCustomDbEngineVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3BucketNameInput">databaseInstallationFilesS3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3PrefixInput">databaseInstallationFilesS3PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineVersionInput">engineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.filenameInput">filenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestHashInput">manifestHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestInput">manifestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.sourceImageIdInput">sourceImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts">RdsCustomDbEngineVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3BucketName">databaseInstallationFilesS3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3Prefix">databaseInstallationFilesS3Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.filename">filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifest">manifest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestHash">manifestHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.sourceImageId">sourceImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dbParameterGroupFamily`<sup>Required</sup> <a name="dbParameterGroupFamily" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.dbParameterGroupFamily"></a>

```typescript
public readonly dbParameterGroupFamily: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `majorEngineVersion`<sup>Required</sup> <a name="majorEngineVersion" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.majorEngineVersion"></a>

```typescript
public readonly majorEngineVersion: string;
```

- *Type:* string

---

##### `manifestComputed`<sup>Required</sup> <a name="manifestComputed" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestComputed"></a>

```typescript
public readonly manifestComputed: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.timeouts"></a>

```typescript
public readonly timeouts: RdsCustomDbEngineVersionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference">RdsCustomDbEngineVersionTimeoutsOutputReference</a>

---

##### `databaseInstallationFilesS3BucketNameInput`<sup>Optional</sup> <a name="databaseInstallationFilesS3BucketNameInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3BucketNameInput"></a>

```typescript
public readonly databaseInstallationFilesS3BucketNameInput: string;
```

- *Type:* string

---

##### `databaseInstallationFilesS3PrefixInput`<sup>Optional</sup> <a name="databaseInstallationFilesS3PrefixInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3PrefixInput"></a>

```typescript
public readonly databaseInstallationFilesS3PrefixInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineVersionInput"></a>

```typescript
public readonly engineVersionInput: string;
```

- *Type:* string

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `manifestHashInput`<sup>Optional</sup> <a name="manifestHashInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestHashInput"></a>

```typescript
public readonly manifestHashInput: string;
```

- *Type:* string

---

##### `manifestInput`<sup>Optional</sup> <a name="manifestInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestInput"></a>

```typescript
public readonly manifestInput: string;
```

- *Type:* string

---

##### `sourceImageIdInput`<sup>Optional</sup> <a name="sourceImageIdInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.sourceImageIdInput"></a>

```typescript
public readonly sourceImageIdInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | RdsCustomDbEngineVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts">RdsCustomDbEngineVersionTimeouts</a>

---

##### `databaseInstallationFilesS3BucketName`<sup>Required</sup> <a name="databaseInstallationFilesS3BucketName" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3BucketName"></a>

```typescript
public readonly databaseInstallationFilesS3BucketName: string;
```

- *Type:* string

---

##### `databaseInstallationFilesS3Prefix`<sup>Required</sup> <a name="databaseInstallationFilesS3Prefix" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3Prefix"></a>

```typescript
public readonly databaseInstallationFilesS3Prefix: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifest"></a>

```typescript
public readonly manifest: string;
```

- *Type:* string

---

##### `manifestHash`<sup>Required</sup> <a name="manifestHash" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestHash"></a>

```typescript
public readonly manifestHash: string;
```

- *Type:* string

---

##### `sourceImageId`<sup>Required</sup> <a name="sourceImageId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.sourceImageId"></a>

```typescript
public readonly sourceImageId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsCustomDbEngineVersionConfig <a name="RdsCustomDbEngineVersionConfig" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.Initializer"></a>

```typescript
import { rdsCustomDbEngineVersion } from '@cdktf/provider-aws'

const rdsCustomDbEngineVersionConfig: rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.engine">engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#engine RdsCustomDbEngineVersion#engine}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.engineVersion">engineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#engine_version RdsCustomDbEngineVersion#engine_version}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFilesS3BucketName">databaseInstallationFilesS3BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_bucket_name RdsCustomDbEngineVersion#database_installation_files_s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFilesS3Prefix">databaseInstallationFilesS3Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_prefix RdsCustomDbEngineVersion#database_installation_files_s3_prefix}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#description RdsCustomDbEngineVersion#description}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.filename">filename</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#filename RdsCustomDbEngineVersion#filename}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#id RdsCustomDbEngineVersion#id}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#kms_key_id RdsCustomDbEngineVersion#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.manifest">manifest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#manifest RdsCustomDbEngineVersion#manifest}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.manifestHash">manifestHash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#manifest_hash RdsCustomDbEngineVersion#manifest_hash}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.sourceImageId">sourceImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#source_image_id RdsCustomDbEngineVersion#source_image_id}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#status RdsCustomDbEngineVersion#status}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#tags RdsCustomDbEngineVersion#tags}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#tags_all RdsCustomDbEngineVersion#tags_all}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts">RdsCustomDbEngineVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#engine RdsCustomDbEngineVersion#engine}.

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#engine_version RdsCustomDbEngineVersion#engine_version}.

---

##### `databaseInstallationFilesS3BucketName`<sup>Optional</sup> <a name="databaseInstallationFilesS3BucketName" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFilesS3BucketName"></a>

```typescript
public readonly databaseInstallationFilesS3BucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_bucket_name RdsCustomDbEngineVersion#database_installation_files_s3_bucket_name}.

---

##### `databaseInstallationFilesS3Prefix`<sup>Optional</sup> <a name="databaseInstallationFilesS3Prefix" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFilesS3Prefix"></a>

```typescript
public readonly databaseInstallationFilesS3Prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_prefix RdsCustomDbEngineVersion#database_installation_files_s3_prefix}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#description RdsCustomDbEngineVersion#description}.

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#filename RdsCustomDbEngineVersion#filename}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#id RdsCustomDbEngineVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#kms_key_id RdsCustomDbEngineVersion#kms_key_id}.

---

##### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.manifest"></a>

```typescript
public readonly manifest: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#manifest RdsCustomDbEngineVersion#manifest}.

---

##### `manifestHash`<sup>Optional</sup> <a name="manifestHash" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.manifestHash"></a>

```typescript
public readonly manifestHash: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#manifest_hash RdsCustomDbEngineVersion#manifest_hash}.

---

##### `sourceImageId`<sup>Optional</sup> <a name="sourceImageId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.sourceImageId"></a>

```typescript
public readonly sourceImageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#source_image_id RdsCustomDbEngineVersion#source_image_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#status RdsCustomDbEngineVersion#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#tags RdsCustomDbEngineVersion#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#tags_all RdsCustomDbEngineVersion#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: RdsCustomDbEngineVersionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts">RdsCustomDbEngineVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#timeouts RdsCustomDbEngineVersion#timeouts}

---

### RdsCustomDbEngineVersionTimeouts <a name="RdsCustomDbEngineVersionTimeouts" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts.Initializer"></a>

```typescript
import { rdsCustomDbEngineVersion } from '@cdktf/provider-aws'

const rdsCustomDbEngineVersionTimeouts: rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#create RdsCustomDbEngineVersion#create}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#delete RdsCustomDbEngineVersion#delete}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#update RdsCustomDbEngineVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#create RdsCustomDbEngineVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#delete RdsCustomDbEngineVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.22.0/docs/resources/rds_custom_db_engine_version#update RdsCustomDbEngineVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsCustomDbEngineVersionTimeoutsOutputReference <a name="RdsCustomDbEngineVersionTimeoutsOutputReference" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.Initializer"></a>

```typescript
import { rdsCustomDbEngineVersion } from '@cdktf/provider-aws'

new rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts">RdsCustomDbEngineVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsCustomDbEngineVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts">RdsCustomDbEngineVersionTimeouts</a>

---



