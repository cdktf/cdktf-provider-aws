# `datasyncLocationAzureBlob` Submodule <a name="`datasyncLocationAzureBlob` Submodule" id="@cdktf/provider-aws.datasyncLocationAzureBlob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationAzureBlob <a name="DatasyncLocationAzureBlob" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/datasync_location_azure_blob aws_datasync_location_azure_blob}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer"></a>

```typescript
import { datasyncLocationAzureBlob } from '@cdktf/provider-aws'

new datasyncLocationAzureBlob.DatasyncLocationAzureBlob(scope: Construct, id: string, config: DatasyncLocationAzureBlobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig">DatasyncLocationAzureBlobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig">DatasyncLocationAzureBlobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.putSasConfiguration">putSasConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetAccessTier">resetAccessTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetBlobType">resetBlobType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetSasConfiguration">resetSasConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetSubdirectory">resetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSasConfiguration` <a name="putSasConfiguration" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.putSasConfiguration"></a>

```typescript
public putSasConfiguration(value: DatasyncLocationAzureBlobSasConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.putSasConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfiguration">DatasyncLocationAzureBlobSasConfiguration</a>

---

##### `resetAccessTier` <a name="resetAccessTier" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetAccessTier"></a>

```typescript
public resetAccessTier(): void
```

##### `resetBlobType` <a name="resetBlobType" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetBlobType"></a>

```typescript
public resetBlobType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSasConfiguration` <a name="resetSasConfiguration" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetSasConfiguration"></a>

```typescript
public resetSasConfiguration(): void
```

##### `resetSubdirectory` <a name="resetSubdirectory" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetSubdirectory"></a>

```typescript
public resetSubdirectory(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatasyncLocationAzureBlob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isConstruct"></a>

```typescript
import { datasyncLocationAzureBlob } from '@cdktf/provider-aws'

datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isTerraformElement"></a>

```typescript
import { datasyncLocationAzureBlob } from '@cdktf/provider-aws'

datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isTerraformResource"></a>

```typescript
import { datasyncLocationAzureBlob } from '@cdktf/provider-aws'

datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.generateConfigForImport"></a>

```typescript
import { datasyncLocationAzureBlob } from '@cdktf/provider-aws'

datasyncLocationAzureBlob.DatasyncLocationAzureBlob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatasyncLocationAzureBlob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatasyncLocationAzureBlob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatasyncLocationAzureBlob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/datasync_location_azure_blob#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatasyncLocationAzureBlob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.sasConfiguration">sasConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference">DatasyncLocationAzureBlobSasConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.accessTierInput">accessTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.agentArnsInput">agentArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.blobTypeInput">blobTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.containerUrlInput">containerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.sasConfigurationInput">sasConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfiguration">DatasyncLocationAzureBlobSasConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.subdirectoryInput">subdirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.accessTier">accessTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.agentArns">agentArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.blobType">blobType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.containerUrl">containerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.subdirectory">subdirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `sasConfiguration`<sup>Required</sup> <a name="sasConfiguration" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.sasConfiguration"></a>

```typescript
public readonly sasConfiguration: DatasyncLocationAzureBlobSasConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference">DatasyncLocationAzureBlobSasConfigurationOutputReference</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `accessTierInput`<sup>Optional</sup> <a name="accessTierInput" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.accessTierInput"></a>

```typescript
public readonly accessTierInput: string;
```

- *Type:* string

---

##### `agentArnsInput`<sup>Optional</sup> <a name="agentArnsInput" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.agentArnsInput"></a>

```typescript
public readonly agentArnsInput: string[];
```

- *Type:* string[]

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.authenticationTypeInput"></a>

```typescript
public readonly authenticationTypeInput: string;
```

- *Type:* string

---

##### `blobTypeInput`<sup>Optional</sup> <a name="blobTypeInput" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.blobTypeInput"></a>

```typescript
public readonly blobTypeInput: string;
```

- *Type:* string

---

##### `containerUrlInput`<sup>Optional</sup> <a name="containerUrlInput" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.containerUrlInput"></a>

```typescript
public readonly containerUrlInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `sasConfigurationInput`<sup>Optional</sup> <a name="sasConfigurationInput" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.sasConfigurationInput"></a>

```typescript
public readonly sasConfigurationInput: DatasyncLocationAzureBlobSasConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfiguration">DatasyncLocationAzureBlobSasConfiguration</a>

---

##### `subdirectoryInput`<sup>Optional</sup> <a name="subdirectoryInput" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.subdirectoryInput"></a>

```typescript
public readonly subdirectoryInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `accessTier`<sup>Required</sup> <a name="accessTier" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.accessTier"></a>

```typescript
public readonly accessTier: string;
```

- *Type:* string

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.agentArns"></a>

```typescript
public readonly agentArns: string[];
```

- *Type:* string[]

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `blobType`<sup>Required</sup> <a name="blobType" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.blobType"></a>

```typescript
public readonly blobType: string;
```

- *Type:* string

---

##### `containerUrl`<sup>Required</sup> <a name="containerUrl" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.containerUrl"></a>

```typescript
public readonly containerUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationAzureBlobConfig <a name="DatasyncLocationAzureBlobConfig" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.Initializer"></a>

```typescript
import { datasyncLocationAzureBlob } from '@cdktf/provider-aws'

const datasyncLocationAzureBlobConfig: datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.agentArns">agentArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/datasync_location_azure_blob#agent_arns DatasyncLocationAzureBlob#agent_arns}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.authenticationType">authenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/datasync_location_azure_blob#authentication_type DatasyncLocationAzureBlob#authentication_type}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.containerUrl">containerUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/datasync_location_azure_blob#container_url DatasyncLocationAzureBlob#container_url}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.accessTier">accessTier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/datasync_location_azure_blob#access_tier DatasyncLocationAzureBlob#access_tier}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.blobType">blobType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/datasync_location_azure_blob#blob_type DatasyncLocationAzureBlob#blob_type}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/datasync_location_azure_blob#id DatasyncLocationAzureBlob#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.sasConfiguration">sasConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfiguration">DatasyncLocationAzureBlobSasConfiguration</a></code> | sas_configuration block. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.subdirectory">subdirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/datasync_location_azure_blob#subdirectory DatasyncLocationAzureBlob#subdirectory}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/datasync_location_azure_blob#tags DatasyncLocationAzureBlob#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/datasync_location_azure_blob#tags_all DatasyncLocationAzureBlob#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.agentArns"></a>

```typescript
public readonly agentArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/datasync_location_azure_blob#agent_arns DatasyncLocationAzureBlob#agent_arns}.

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/datasync_location_azure_blob#authentication_type DatasyncLocationAzureBlob#authentication_type}.

---

##### `containerUrl`<sup>Required</sup> <a name="containerUrl" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.containerUrl"></a>

```typescript
public readonly containerUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/datasync_location_azure_blob#container_url DatasyncLocationAzureBlob#container_url}.

---

##### `accessTier`<sup>Optional</sup> <a name="accessTier" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.accessTier"></a>

```typescript
public readonly accessTier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/datasync_location_azure_blob#access_tier DatasyncLocationAzureBlob#access_tier}.

---

##### `blobType`<sup>Optional</sup> <a name="blobType" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.blobType"></a>

```typescript
public readonly blobType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/datasync_location_azure_blob#blob_type DatasyncLocationAzureBlob#blob_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/datasync_location_azure_blob#id DatasyncLocationAzureBlob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sasConfiguration`<sup>Optional</sup> <a name="sasConfiguration" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.sasConfiguration"></a>

```typescript
public readonly sasConfiguration: DatasyncLocationAzureBlobSasConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfiguration">DatasyncLocationAzureBlobSasConfiguration</a>

sas_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/datasync_location_azure_blob#sas_configuration DatasyncLocationAzureBlob#sas_configuration}

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/datasync_location_azure_blob#subdirectory DatasyncLocationAzureBlob#subdirectory}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/datasync_location_azure_blob#tags DatasyncLocationAzureBlob#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/datasync_location_azure_blob#tags_all DatasyncLocationAzureBlob#tags_all}.

---

### DatasyncLocationAzureBlobSasConfiguration <a name="DatasyncLocationAzureBlobSasConfiguration" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfiguration.Initializer"></a>

```typescript
import { datasyncLocationAzureBlob } from '@cdktf/provider-aws'

const datasyncLocationAzureBlobSasConfiguration: datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfiguration.property.token">token</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/datasync_location_azure_blob#token DatasyncLocationAzureBlob#token}. |

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfiguration.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/datasync_location_azure_blob#token DatasyncLocationAzureBlob#token}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationAzureBlobSasConfigurationOutputReference <a name="DatasyncLocationAzureBlobSasConfigurationOutputReference" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.Initializer"></a>

```typescript
import { datasyncLocationAzureBlob } from '@cdktf/provider-aws'

new datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfiguration">DatasyncLocationAzureBlobSasConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasyncLocationAzureBlobSasConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfiguration">DatasyncLocationAzureBlobSasConfiguration</a>

---



