# `ebsFastSnapshotRestore` Submodule <a name="`ebsFastSnapshotRestore` Submodule" id="@cdktf/provider-aws.ebsFastSnapshotRestore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EbsFastSnapshotRestore <a name="EbsFastSnapshotRestore" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/ebs_fast_snapshot_restore aws_ebs_fast_snapshot_restore}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer"></a>

```typescript
import { ebsFastSnapshotRestore } from '@cdktf/provider-aws'

new ebsFastSnapshotRestore.EbsFastSnapshotRestore(scope: Construct, id: string, config: EbsFastSnapshotRestoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig">EbsFastSnapshotRestoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig">EbsFastSnapshotRestoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.putTimeouts"></a>

```typescript
public putTimeouts(value: EbsFastSnapshotRestoreTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts">EbsFastSnapshotRestoreTimeouts</a>

---

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EbsFastSnapshotRestore resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.isConstruct"></a>

```typescript
import { ebsFastSnapshotRestore } from '@cdktf/provider-aws'

ebsFastSnapshotRestore.EbsFastSnapshotRestore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.isTerraformElement"></a>

```typescript
import { ebsFastSnapshotRestore } from '@cdktf/provider-aws'

ebsFastSnapshotRestore.EbsFastSnapshotRestore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.isTerraformResource"></a>

```typescript
import { ebsFastSnapshotRestore } from '@cdktf/provider-aws'

ebsFastSnapshotRestore.EbsFastSnapshotRestore.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.generateConfigForImport"></a>

```typescript
import { ebsFastSnapshotRestore } from '@cdktf/provider-aws'

ebsFastSnapshotRestore.EbsFastSnapshotRestore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EbsFastSnapshotRestore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EbsFastSnapshotRestore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EbsFastSnapshotRestore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/ebs_fast_snapshot_restore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EbsFastSnapshotRestore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference">EbsFastSnapshotRestoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts">EbsFastSnapshotRestoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.timeouts"></a>

```typescript
public readonly timeouts: EbsFastSnapshotRestoreTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference">EbsFastSnapshotRestoreTimeoutsOutputReference</a>

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | EbsFastSnapshotRestoreTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts">EbsFastSnapshotRestoreTimeouts</a>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EbsFastSnapshotRestoreConfig <a name="EbsFastSnapshotRestoreConfig" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.Initializer"></a>

```typescript
import { ebsFastSnapshotRestore } from '@cdktf/provider-aws'

const ebsFastSnapshotRestoreConfig: ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/ebs_fast_snapshot_restore#availability_zone EbsFastSnapshotRestore#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.snapshotId">snapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/ebs_fast_snapshot_restore#snapshot_id EbsFastSnapshotRestore#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts">EbsFastSnapshotRestoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/ebs_fast_snapshot_restore#availability_zone EbsFastSnapshotRestore#availability_zone}.

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/ebs_fast_snapshot_restore#snapshot_id EbsFastSnapshotRestore#snapshot_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EbsFastSnapshotRestoreTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts">EbsFastSnapshotRestoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/ebs_fast_snapshot_restore#timeouts EbsFastSnapshotRestore#timeouts}

---

### EbsFastSnapshotRestoreTimeouts <a name="EbsFastSnapshotRestoreTimeouts" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts.Initializer"></a>

```typescript
import { ebsFastSnapshotRestore } from '@cdktf/provider-aws'

const ebsFastSnapshotRestoreTimeouts: ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/ebs_fast_snapshot_restore#create EbsFastSnapshotRestore#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/ebs_fast_snapshot_restore#delete EbsFastSnapshotRestore#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### EbsFastSnapshotRestoreTimeoutsOutputReference <a name="EbsFastSnapshotRestoreTimeoutsOutputReference" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.Initializer"></a>

```typescript
import { ebsFastSnapshotRestore } from '@cdktf/provider-aws'

new ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts">EbsFastSnapshotRestoreTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EbsFastSnapshotRestoreTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ebsFastSnapshotRestore.EbsFastSnapshotRestoreTimeouts">EbsFastSnapshotRestoreTimeouts</a>

---



