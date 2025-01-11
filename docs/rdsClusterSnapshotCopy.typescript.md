# `rdsClusterSnapshotCopy` Submodule <a name="`rdsClusterSnapshotCopy` Submodule" id="@cdktf/provider-aws.rdsClusterSnapshotCopy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsClusterSnapshotCopy <a name="RdsClusterSnapshotCopy" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rds_cluster_snapshot_copy aws_rds_cluster_snapshot_copy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.Initializer"></a>

```typescript
import { rdsClusterSnapshotCopy } from '@cdktf/provider-aws'

new rdsClusterSnapshotCopy.RdsClusterSnapshotCopy(scope: Construct, id: string, config: RdsClusterSnapshotCopyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig">RdsClusterSnapshotCopyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig">RdsClusterSnapshotCopyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetCopyTags">resetCopyTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetDestinationRegion">resetDestinationRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetPresignedUrl">resetPresignedUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetSharedAccounts">resetSharedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.putTimeouts"></a>

```typescript
public putTimeouts(value: RdsClusterSnapshotCopyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeouts">RdsClusterSnapshotCopyTimeouts</a>

---

##### `resetCopyTags` <a name="resetCopyTags" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetCopyTags"></a>

```typescript
public resetCopyTags(): void
```

##### `resetDestinationRegion` <a name="resetDestinationRegion" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetDestinationRegion"></a>

```typescript
public resetDestinationRegion(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetPresignedUrl` <a name="resetPresignedUrl" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetPresignedUrl"></a>

```typescript
public resetPresignedUrl(): void
```

##### `resetSharedAccounts` <a name="resetSharedAccounts" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetSharedAccounts"></a>

```typescript
public resetSharedAccounts(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RdsClusterSnapshotCopy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.isConstruct"></a>

```typescript
import { rdsClusterSnapshotCopy } from '@cdktf/provider-aws'

rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.isTerraformElement"></a>

```typescript
import { rdsClusterSnapshotCopy } from '@cdktf/provider-aws'

rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.isTerraformResource"></a>

```typescript
import { rdsClusterSnapshotCopy } from '@cdktf/provider-aws'

rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.generateConfigForImport"></a>

```typescript
import { rdsClusterSnapshotCopy } from '@cdktf/provider-aws'

rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RdsClusterSnapshotCopy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RdsClusterSnapshotCopy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RdsClusterSnapshotCopy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rds_cluster_snapshot_copy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RdsClusterSnapshotCopy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.allocatedStorage">allocatedStorage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.dbClusterSnapshotArn">dbClusterSnapshotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.snapshotType">snapshotType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.storageEncrypted">storageEncrypted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference">RdsClusterSnapshotCopyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.copyTagsInput">copyTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.destinationRegionInput">destinationRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.presignedUrlInput">presignedUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.sharedAccountsInput">sharedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.sourceDbClusterSnapshotIdentifierInput">sourceDbClusterSnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.targetDbClusterSnapshotIdentifierInput">targetDbClusterSnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeouts">RdsClusterSnapshotCopyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.copyTags">copyTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.destinationRegion">destinationRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.presignedUrl">presignedUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.sharedAccounts">sharedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.sourceDbClusterSnapshotIdentifier">sourceDbClusterSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.targetDbClusterSnapshotIdentifier">targetDbClusterSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.allocatedStorage"></a>

```typescript
public readonly allocatedStorage: number;
```

- *Type:* number

---

##### `dbClusterSnapshotArn`<sup>Required</sup> <a name="dbClusterSnapshotArn" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.dbClusterSnapshotArn"></a>

```typescript
public readonly dbClusterSnapshotArn: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `snapshotType`<sup>Required</sup> <a name="snapshotType" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.snapshotType"></a>

```typescript
public readonly snapshotType: string;
```

- *Type:* string

---

##### `storageEncrypted`<sup>Required</sup> <a name="storageEncrypted" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.storageEncrypted"></a>

```typescript
public readonly storageEncrypted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.timeouts"></a>

```typescript
public readonly timeouts: RdsClusterSnapshotCopyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference">RdsClusterSnapshotCopyTimeoutsOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `copyTagsInput`<sup>Optional</sup> <a name="copyTagsInput" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.copyTagsInput"></a>

```typescript
public readonly copyTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `destinationRegionInput`<sup>Optional</sup> <a name="destinationRegionInput" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.destinationRegionInput"></a>

```typescript
public readonly destinationRegionInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `presignedUrlInput`<sup>Optional</sup> <a name="presignedUrlInput" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.presignedUrlInput"></a>

```typescript
public readonly presignedUrlInput: string;
```

- *Type:* string

---

##### `sharedAccountsInput`<sup>Optional</sup> <a name="sharedAccountsInput" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.sharedAccountsInput"></a>

```typescript
public readonly sharedAccountsInput: string[];
```

- *Type:* string[]

---

##### `sourceDbClusterSnapshotIdentifierInput`<sup>Optional</sup> <a name="sourceDbClusterSnapshotIdentifierInput" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.sourceDbClusterSnapshotIdentifierInput"></a>

```typescript
public readonly sourceDbClusterSnapshotIdentifierInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetDbClusterSnapshotIdentifierInput`<sup>Optional</sup> <a name="targetDbClusterSnapshotIdentifierInput" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.targetDbClusterSnapshotIdentifierInput"></a>

```typescript
public readonly targetDbClusterSnapshotIdentifierInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | RdsClusterSnapshotCopyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeouts">RdsClusterSnapshotCopyTimeouts</a>

---

##### `copyTags`<sup>Required</sup> <a name="copyTags" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.copyTags"></a>

```typescript
public readonly copyTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `destinationRegion`<sup>Required</sup> <a name="destinationRegion" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.destinationRegion"></a>

```typescript
public readonly destinationRegion: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `presignedUrl`<sup>Required</sup> <a name="presignedUrl" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.presignedUrl"></a>

```typescript
public readonly presignedUrl: string;
```

- *Type:* string

---

##### `sharedAccounts`<sup>Required</sup> <a name="sharedAccounts" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.sharedAccounts"></a>

```typescript
public readonly sharedAccounts: string[];
```

- *Type:* string[]

---

##### `sourceDbClusterSnapshotIdentifier`<sup>Required</sup> <a name="sourceDbClusterSnapshotIdentifier" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.sourceDbClusterSnapshotIdentifier"></a>

```typescript
public readonly sourceDbClusterSnapshotIdentifier: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetDbClusterSnapshotIdentifier`<sup>Required</sup> <a name="targetDbClusterSnapshotIdentifier" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.targetDbClusterSnapshotIdentifier"></a>

```typescript
public readonly targetDbClusterSnapshotIdentifier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsClusterSnapshotCopyConfig <a name="RdsClusterSnapshotCopyConfig" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.Initializer"></a>

```typescript
import { rdsClusterSnapshotCopy } from '@cdktf/provider-aws'

const rdsClusterSnapshotCopyConfig: rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.sourceDbClusterSnapshotIdentifier">sourceDbClusterSnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rds_cluster_snapshot_copy#source_db_cluster_snapshot_identifier RdsClusterSnapshotCopy#source_db_cluster_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.targetDbClusterSnapshotIdentifier">targetDbClusterSnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rds_cluster_snapshot_copy#target_db_cluster_snapshot_identifier RdsClusterSnapshotCopy#target_db_cluster_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.copyTags">copyTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rds_cluster_snapshot_copy#copy_tags RdsClusterSnapshotCopy#copy_tags}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.destinationRegion">destinationRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rds_cluster_snapshot_copy#destination_region RdsClusterSnapshotCopy#destination_region}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rds_cluster_snapshot_copy#kms_key_id RdsClusterSnapshotCopy#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.presignedUrl">presignedUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rds_cluster_snapshot_copy#presigned_url RdsClusterSnapshotCopy#presigned_url}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.sharedAccounts">sharedAccounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rds_cluster_snapshot_copy#shared_accounts RdsClusterSnapshotCopy#shared_accounts}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rds_cluster_snapshot_copy#tags RdsClusterSnapshotCopy#tags}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeouts">RdsClusterSnapshotCopyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `sourceDbClusterSnapshotIdentifier`<sup>Required</sup> <a name="sourceDbClusterSnapshotIdentifier" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.sourceDbClusterSnapshotIdentifier"></a>

```typescript
public readonly sourceDbClusterSnapshotIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rds_cluster_snapshot_copy#source_db_cluster_snapshot_identifier RdsClusterSnapshotCopy#source_db_cluster_snapshot_identifier}.

---

##### `targetDbClusterSnapshotIdentifier`<sup>Required</sup> <a name="targetDbClusterSnapshotIdentifier" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.targetDbClusterSnapshotIdentifier"></a>

```typescript
public readonly targetDbClusterSnapshotIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rds_cluster_snapshot_copy#target_db_cluster_snapshot_identifier RdsClusterSnapshotCopy#target_db_cluster_snapshot_identifier}.

---

##### `copyTags`<sup>Optional</sup> <a name="copyTags" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.copyTags"></a>

```typescript
public readonly copyTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rds_cluster_snapshot_copy#copy_tags RdsClusterSnapshotCopy#copy_tags}.

---

##### `destinationRegion`<sup>Optional</sup> <a name="destinationRegion" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.destinationRegion"></a>

```typescript
public readonly destinationRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rds_cluster_snapshot_copy#destination_region RdsClusterSnapshotCopy#destination_region}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rds_cluster_snapshot_copy#kms_key_id RdsClusterSnapshotCopy#kms_key_id}.

---

##### `presignedUrl`<sup>Optional</sup> <a name="presignedUrl" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.presignedUrl"></a>

```typescript
public readonly presignedUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rds_cluster_snapshot_copy#presigned_url RdsClusterSnapshotCopy#presigned_url}.

---

##### `sharedAccounts`<sup>Optional</sup> <a name="sharedAccounts" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.sharedAccounts"></a>

```typescript
public readonly sharedAccounts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rds_cluster_snapshot_copy#shared_accounts RdsClusterSnapshotCopy#shared_accounts}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rds_cluster_snapshot_copy#tags RdsClusterSnapshotCopy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: RdsClusterSnapshotCopyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeouts">RdsClusterSnapshotCopyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rds_cluster_snapshot_copy#timeouts RdsClusterSnapshotCopy#timeouts}

---

### RdsClusterSnapshotCopyTimeouts <a name="RdsClusterSnapshotCopyTimeouts" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeouts.Initializer"></a>

```typescript
import { rdsClusterSnapshotCopy } from '@cdktf/provider-aws'

const rdsClusterSnapshotCopyTimeouts: rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/rds_cluster_snapshot_copy#create RdsClusterSnapshotCopy#create}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsClusterSnapshotCopyTimeoutsOutputReference <a name="RdsClusterSnapshotCopyTimeoutsOutputReference" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.Initializer"></a>

```typescript
import { rdsClusterSnapshotCopy } from '@cdktf/provider-aws'

new rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeouts">RdsClusterSnapshotCopyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RdsClusterSnapshotCopyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeouts">RdsClusterSnapshotCopyTimeouts</a>

---



