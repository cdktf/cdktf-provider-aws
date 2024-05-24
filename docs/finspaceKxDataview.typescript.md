# `finspaceKxDataview` Submodule <a name="`finspaceKxDataview` Submodule" id="@cdktf/provider-aws.finspaceKxDataview"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FinspaceKxDataview <a name="FinspaceKxDataview" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview aws_finspace_kx_dataview}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer"></a>

```typescript
import { finspaceKxDataview } from '@cdktf/provider-aws'

new finspaceKxDataview.FinspaceKxDataview(scope: Construct, id: string, config: FinspaceKxDataviewConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig">FinspaceKxDataviewConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig">FinspaceKxDataviewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.putSegmentConfigurations">putSegmentConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetAvailabilityZoneId">resetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetChangesetId">resetChangesetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetReadWrite">resetReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetSegmentConfigurations">resetSegmentConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSegmentConfigurations` <a name="putSegmentConfigurations" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.putSegmentConfigurations"></a>

```typescript
public putSegmentConfigurations(value: IResolvable | FinspaceKxDataviewSegmentConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.putSegmentConfigurations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.putTimeouts"></a>

```typescript
public putTimeouts(value: FinspaceKxDataviewTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a>

---

##### `resetAvailabilityZoneId` <a name="resetAvailabilityZoneId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetAvailabilityZoneId"></a>

```typescript
public resetAvailabilityZoneId(): void
```

##### `resetChangesetId` <a name="resetChangesetId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetChangesetId"></a>

```typescript
public resetChangesetId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetId"></a>

```typescript
public resetId(): void
```

##### `resetReadWrite` <a name="resetReadWrite" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetReadWrite"></a>

```typescript
public resetReadWrite(): void
```

##### `resetSegmentConfigurations` <a name="resetSegmentConfigurations" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetSegmentConfigurations"></a>

```typescript
public resetSegmentConfigurations(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FinspaceKxDataview resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isConstruct"></a>

```typescript
import { finspaceKxDataview } from '@cdktf/provider-aws'

finspaceKxDataview.FinspaceKxDataview.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isTerraformElement"></a>

```typescript
import { finspaceKxDataview } from '@cdktf/provider-aws'

finspaceKxDataview.FinspaceKxDataview.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isTerraformResource"></a>

```typescript
import { finspaceKxDataview } from '@cdktf/provider-aws'

finspaceKxDataview.FinspaceKxDataview.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.generateConfigForImport"></a>

```typescript
import { finspaceKxDataview } from '@cdktf/provider-aws'

finspaceKxDataview.FinspaceKxDataview.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FinspaceKxDataview resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FinspaceKxDataview to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FinspaceKxDataview that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FinspaceKxDataview to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.lastModifiedTimestamp">lastModifiedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.segmentConfigurations">segmentConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList">FinspaceKxDataviewSegmentConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference">FinspaceKxDataviewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.autoUpdateInput">autoUpdateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.availabilityZoneIdInput">availabilityZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.azModeInput">azModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.changesetIdInput">changesetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.environmentIdInput">environmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.readWriteInput">readWriteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.segmentConfigurationsInput">segmentConfigurationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.autoUpdate">autoUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.azMode">azMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.changesetId">changesetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.readWrite">readWrite</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `lastModifiedTimestamp`<sup>Required</sup> <a name="lastModifiedTimestamp" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.lastModifiedTimestamp"></a>

```typescript
public readonly lastModifiedTimestamp: string;
```

- *Type:* string

---

##### `segmentConfigurations`<sup>Required</sup> <a name="segmentConfigurations" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.segmentConfigurations"></a>

```typescript
public readonly segmentConfigurations: FinspaceKxDataviewSegmentConfigurationsList;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList">FinspaceKxDataviewSegmentConfigurationsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.timeouts"></a>

```typescript
public readonly timeouts: FinspaceKxDataviewTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference">FinspaceKxDataviewTimeoutsOutputReference</a>

---

##### `autoUpdateInput`<sup>Optional</sup> <a name="autoUpdateInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.autoUpdateInput"></a>

```typescript
public readonly autoUpdateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZoneIdInput`<sup>Optional</sup> <a name="availabilityZoneIdInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.availabilityZoneIdInput"></a>

```typescript
public readonly availabilityZoneIdInput: string;
```

- *Type:* string

---

##### `azModeInput`<sup>Optional</sup> <a name="azModeInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.azModeInput"></a>

```typescript
public readonly azModeInput: string;
```

- *Type:* string

---

##### `changesetIdInput`<sup>Optional</sup> <a name="changesetIdInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.changesetIdInput"></a>

```typescript
public readonly changesetIdInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.environmentIdInput"></a>

```typescript
public readonly environmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `readWriteInput`<sup>Optional</sup> <a name="readWriteInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.readWriteInput"></a>

```typescript
public readonly readWriteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `segmentConfigurationsInput`<sup>Optional</sup> <a name="segmentConfigurationsInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.segmentConfigurationsInput"></a>

```typescript
public readonly segmentConfigurationsInput: IResolvable | FinspaceKxDataviewSegmentConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FinspaceKxDataviewTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a>

---

##### `autoUpdate`<sup>Required</sup> <a name="autoUpdate" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.autoUpdate"></a>

```typescript
public readonly autoUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

---

##### `azMode`<sup>Required</sup> <a name="azMode" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.azMode"></a>

```typescript
public readonly azMode: string;
```

- *Type:* string

---

##### `changesetId`<sup>Required</sup> <a name="changesetId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.changesetId"></a>

```typescript
public readonly changesetId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `readWrite`<sup>Required</sup> <a name="readWrite" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.readWrite"></a>

```typescript
public readonly readWrite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FinspaceKxDataviewConfig <a name="FinspaceKxDataviewConfig" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.Initializer"></a>

```typescript
import { finspaceKxDataview } from '@cdktf/provider-aws'

const finspaceKxDataviewConfig: finspaceKxDataview.FinspaceKxDataviewConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.autoUpdate">autoUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#auto_update FinspaceKxDataview#auto_update}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.azMode">azMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#az_mode FinspaceKxDataview#az_mode}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#database_name FinspaceKxDataview#database_name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.environmentId">environmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#environment_id FinspaceKxDataview#environment_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#name FinspaceKxDataview#name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#availability_zone_id FinspaceKxDataview#availability_zone_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.changesetId">changesetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#changeset_id FinspaceKxDataview#changeset_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#description FinspaceKxDataview#description}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#id FinspaceKxDataview#id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.readWrite">readWrite</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#read_write FinspaceKxDataview#read_write}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.segmentConfigurations">segmentConfigurations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>[]</code> | segment_configurations block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#tags FinspaceKxDataview#tags}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#tags_all FinspaceKxDataview#tags_all}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoUpdate`<sup>Required</sup> <a name="autoUpdate" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.autoUpdate"></a>

```typescript
public readonly autoUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#auto_update FinspaceKxDataview#auto_update}.

---

##### `azMode`<sup>Required</sup> <a name="azMode" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.azMode"></a>

```typescript
public readonly azMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#az_mode FinspaceKxDataview#az_mode}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#database_name FinspaceKxDataview#database_name}.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#environment_id FinspaceKxDataview#environment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#name FinspaceKxDataview#name}.

---

##### `availabilityZoneId`<sup>Optional</sup> <a name="availabilityZoneId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#availability_zone_id FinspaceKxDataview#availability_zone_id}.

---

##### `changesetId`<sup>Optional</sup> <a name="changesetId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.changesetId"></a>

```typescript
public readonly changesetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#changeset_id FinspaceKxDataview#changeset_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#description FinspaceKxDataview#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#id FinspaceKxDataview#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `readWrite`<sup>Optional</sup> <a name="readWrite" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.readWrite"></a>

```typescript
public readonly readWrite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#read_write FinspaceKxDataview#read_write}.

---

##### `segmentConfigurations`<sup>Optional</sup> <a name="segmentConfigurations" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.segmentConfigurations"></a>

```typescript
public readonly segmentConfigurations: IResolvable | FinspaceKxDataviewSegmentConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>[]

segment_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#segment_configurations FinspaceKxDataview#segment_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#tags FinspaceKxDataview#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#tags_all FinspaceKxDataview#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FinspaceKxDataviewTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#timeouts FinspaceKxDataview#timeouts}

---

### FinspaceKxDataviewSegmentConfigurations <a name="FinspaceKxDataviewSegmentConfigurations" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations.Initializer"></a>

```typescript
import { finspaceKxDataview } from '@cdktf/provider-aws'

const finspaceKxDataviewSegmentConfigurations: finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations.property.dbPaths">dbPaths</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#db_paths FinspaceKxDataview#db_paths}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations.property.volumeName">volumeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#volume_name FinspaceKxDataview#volume_name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations.property.onDemand">onDemand</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#on_demand FinspaceKxDataview#on_demand}. |

---

##### `dbPaths`<sup>Required</sup> <a name="dbPaths" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations.property.dbPaths"></a>

```typescript
public readonly dbPaths: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#db_paths FinspaceKxDataview#db_paths}.

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#volume_name FinspaceKxDataview#volume_name}.

---

##### `onDemand`<sup>Optional</sup> <a name="onDemand" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations.property.onDemand"></a>

```typescript
public readonly onDemand: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#on_demand FinspaceKxDataview#on_demand}.

---

### FinspaceKxDataviewTimeouts <a name="FinspaceKxDataviewTimeouts" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.Initializer"></a>

```typescript
import { finspaceKxDataview } from '@cdktf/provider-aws'

const finspaceKxDataviewTimeouts: finspaceKxDataview.FinspaceKxDataviewTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#create FinspaceKxDataview#create}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#delete FinspaceKxDataview#delete}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#update FinspaceKxDataview#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#create FinspaceKxDataview#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#delete FinspaceKxDataview#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/finspace_kx_dataview#update FinspaceKxDataview#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FinspaceKxDataviewSegmentConfigurationsList <a name="FinspaceKxDataviewSegmentConfigurationsList" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer"></a>

```typescript
import { finspaceKxDataview } from '@cdktf/provider-aws'

new finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.get"></a>

```typescript
public get(index: number): FinspaceKxDataviewSegmentConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FinspaceKxDataviewSegmentConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>[]

---


### FinspaceKxDataviewSegmentConfigurationsOutputReference <a name="FinspaceKxDataviewSegmentConfigurationsOutputReference" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer"></a>

```typescript
import { finspaceKxDataview } from '@cdktf/provider-aws'

new finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.resetOnDemand">resetOnDemand</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOnDemand` <a name="resetOnDemand" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.resetOnDemand"></a>

```typescript
public resetOnDemand(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.dbPathsInput">dbPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.onDemandInput">onDemandInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.volumeNameInput">volumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.dbPaths">dbPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.onDemand">onDemand</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.volumeName">volumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dbPathsInput`<sup>Optional</sup> <a name="dbPathsInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.dbPathsInput"></a>

```typescript
public readonly dbPathsInput: string[];
```

- *Type:* string[]

---

##### `onDemandInput`<sup>Optional</sup> <a name="onDemandInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.onDemandInput"></a>

```typescript
public readonly onDemandInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.volumeNameInput"></a>

```typescript
public readonly volumeNameInput: string;
```

- *Type:* string

---

##### `dbPaths`<sup>Required</sup> <a name="dbPaths" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.dbPaths"></a>

```typescript
public readonly dbPaths: string[];
```

- *Type:* string[]

---

##### `onDemand`<sup>Required</sup> <a name="onDemand" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.onDemand"></a>

```typescript
public readonly onDemand: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FinspaceKxDataviewSegmentConfigurations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>

---


### FinspaceKxDataviewTimeoutsOutputReference <a name="FinspaceKxDataviewTimeoutsOutputReference" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.Initializer"></a>

```typescript
import { finspaceKxDataview } from '@cdktf/provider-aws'

new finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FinspaceKxDataviewTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a>

---



