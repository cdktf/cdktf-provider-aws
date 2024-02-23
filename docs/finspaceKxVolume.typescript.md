# `finspaceKxVolume` Submodule <a name="`finspaceKxVolume` Submodule" id="@cdktf/provider-aws.finspaceKxVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FinspaceKxVolume <a name="FinspaceKxVolume" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume aws_finspace_kx_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer"></a>

```typescript
import { finspaceKxVolume } from '@cdktf/provider-aws'

new finspaceKxVolume.FinspaceKxVolume(scope: Construct, id: string, config: FinspaceKxVolumeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig">FinspaceKxVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig">FinspaceKxVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.putNas1Configuration">putNas1Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetNas1Configuration">resetNas1Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNas1Configuration` <a name="putNas1Configuration" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.putNas1Configuration"></a>

```typescript
public putNas1Configuration(value: IResolvable | FinspaceKxVolumeNas1Configuration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.putNas1Configuration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration">FinspaceKxVolumeNas1Configuration</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.putTimeouts"></a>

```typescript
public putTimeouts(value: FinspaceKxVolumeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts">FinspaceKxVolumeTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNas1Configuration` <a name="resetNas1Configuration" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetNas1Configuration"></a>

```typescript
public resetNas1Configuration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FinspaceKxVolume resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.isConstruct"></a>

```typescript
import { finspaceKxVolume } from '@cdktf/provider-aws'

finspaceKxVolume.FinspaceKxVolume.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.isTerraformElement"></a>

```typescript
import { finspaceKxVolume } from '@cdktf/provider-aws'

finspaceKxVolume.FinspaceKxVolume.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.isTerraformResource"></a>

```typescript
import { finspaceKxVolume } from '@cdktf/provider-aws'

finspaceKxVolume.FinspaceKxVolume.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.generateConfigForImport"></a>

```typescript
import { finspaceKxVolume } from '@cdktf/provider-aws'

finspaceKxVolume.FinspaceKxVolume.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FinspaceKxVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FinspaceKxVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FinspaceKxVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FinspaceKxVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.attachedClusters">attachedClusters</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList">FinspaceKxVolumeAttachedClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.lastModifiedTimestamp">lastModifiedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.nas1Configuration">nas1Configuration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList">FinspaceKxVolumeNas1ConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference">FinspaceKxVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.azModeInput">azModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.environmentIdInput">environmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.nas1ConfigurationInput">nas1ConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration">FinspaceKxVolumeNas1Configuration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts">FinspaceKxVolumeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.azMode">azMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `attachedClusters`<sup>Required</sup> <a name="attachedClusters" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.attachedClusters"></a>

```typescript
public readonly attachedClusters: FinspaceKxVolumeAttachedClustersList;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList">FinspaceKxVolumeAttachedClustersList</a>

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `lastModifiedTimestamp`<sup>Required</sup> <a name="lastModifiedTimestamp" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.lastModifiedTimestamp"></a>

```typescript
public readonly lastModifiedTimestamp: string;
```

- *Type:* string

---

##### `nas1Configuration`<sup>Required</sup> <a name="nas1Configuration" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.nas1Configuration"></a>

```typescript
public readonly nas1Configuration: FinspaceKxVolumeNas1ConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList">FinspaceKxVolumeNas1ConfigurationList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.timeouts"></a>

```typescript
public readonly timeouts: FinspaceKxVolumeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference">FinspaceKxVolumeTimeoutsOutputReference</a>

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.availabilityZonesInput"></a>

```typescript
public readonly availabilityZonesInput: string[];
```

- *Type:* string[]

---

##### `azModeInput`<sup>Optional</sup> <a name="azModeInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.azModeInput"></a>

```typescript
public readonly azModeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.environmentIdInput"></a>

```typescript
public readonly environmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nas1ConfigurationInput`<sup>Optional</sup> <a name="nas1ConfigurationInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.nas1ConfigurationInput"></a>

```typescript
public readonly nas1ConfigurationInput: IResolvable | FinspaceKxVolumeNas1Configuration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration">FinspaceKxVolumeNas1Configuration</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FinspaceKxVolumeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts">FinspaceKxVolumeTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `azMode`<sup>Required</sup> <a name="azMode" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.azMode"></a>

```typescript
public readonly azMode: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolume.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FinspaceKxVolumeAttachedClusters <a name="FinspaceKxVolumeAttachedClusters" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClusters.Initializer"></a>

```typescript
import { finspaceKxVolume } from '@cdktf/provider-aws'

const finspaceKxVolumeAttachedClusters: finspaceKxVolume.FinspaceKxVolumeAttachedClusters = { ... }
```


### FinspaceKxVolumeConfig <a name="FinspaceKxVolumeConfig" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.Initializer"></a>

```typescript
import { finspaceKxVolume } from '@cdktf/provider-aws'

const finspaceKxVolumeConfig: finspaceKxVolume.FinspaceKxVolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#availability_zones FinspaceKxVolume#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.azMode">azMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#az_mode FinspaceKxVolume#az_mode}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.environmentId">environmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#environment_id FinspaceKxVolume#environment_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#name FinspaceKxVolume#name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#type FinspaceKxVolume#type}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#description FinspaceKxVolume#description}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#id FinspaceKxVolume#id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.nas1Configuration">nas1Configuration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration">FinspaceKxVolumeNas1Configuration</a>[]</code> | nas1_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#tags FinspaceKxVolume#tags}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#tags_all FinspaceKxVolume#tags_all}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts">FinspaceKxVolumeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#availability_zones FinspaceKxVolume#availability_zones}.

---

##### `azMode`<sup>Required</sup> <a name="azMode" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.azMode"></a>

```typescript
public readonly azMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#az_mode FinspaceKxVolume#az_mode}.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#environment_id FinspaceKxVolume#environment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#name FinspaceKxVolume#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#type FinspaceKxVolume#type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#description FinspaceKxVolume#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#id FinspaceKxVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nas1Configuration`<sup>Optional</sup> <a name="nas1Configuration" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.nas1Configuration"></a>

```typescript
public readonly nas1Configuration: IResolvable | FinspaceKxVolumeNas1Configuration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration">FinspaceKxVolumeNas1Configuration</a>[]

nas1_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#nas1_configuration FinspaceKxVolume#nas1_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#tags FinspaceKxVolume#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#tags_all FinspaceKxVolume#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FinspaceKxVolumeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts">FinspaceKxVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#timeouts FinspaceKxVolume#timeouts}

---

### FinspaceKxVolumeNas1Configuration <a name="FinspaceKxVolumeNas1Configuration" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration.Initializer"></a>

```typescript
import { finspaceKxVolume } from '@cdktf/provider-aws'

const finspaceKxVolumeNas1Configuration: finspaceKxVolume.FinspaceKxVolumeNas1Configuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#size FinspaceKxVolume#size}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#type FinspaceKxVolume#type}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#size FinspaceKxVolume#size}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#type FinspaceKxVolume#type}.

---

### FinspaceKxVolumeTimeouts <a name="FinspaceKxVolumeTimeouts" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts.Initializer"></a>

```typescript
import { finspaceKxVolume } from '@cdktf/provider-aws'

const finspaceKxVolumeTimeouts: finspaceKxVolume.FinspaceKxVolumeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#create FinspaceKxVolume#create}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#delete FinspaceKxVolume#delete}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#update FinspaceKxVolume#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#create FinspaceKxVolume#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#delete FinspaceKxVolume#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_volume#update FinspaceKxVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FinspaceKxVolumeAttachedClustersList <a name="FinspaceKxVolumeAttachedClustersList" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.Initializer"></a>

```typescript
import { finspaceKxVolume } from '@cdktf/provider-aws'

new finspaceKxVolume.FinspaceKxVolumeAttachedClustersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.get"></a>

```typescript
public get(index: number): FinspaceKxVolumeAttachedClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FinspaceKxVolumeAttachedClustersOutputReference <a name="FinspaceKxVolumeAttachedClustersOutputReference" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer"></a>

```typescript
import { finspaceKxVolume } from '@cdktf/provider-aws'

new finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.clusterStatus">clusterStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.clusterType">clusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClusters">FinspaceKxVolumeAttachedClusters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `clusterStatus`<sup>Required</sup> <a name="clusterStatus" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.clusterStatus"></a>

```typescript
public readonly clusterStatus: string;
```

- *Type:* string

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClustersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FinspaceKxVolumeAttachedClusters;
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeAttachedClusters">FinspaceKxVolumeAttachedClusters</a>

---


### FinspaceKxVolumeNas1ConfigurationList <a name="FinspaceKxVolumeNas1ConfigurationList" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.Initializer"></a>

```typescript
import { finspaceKxVolume } from '@cdktf/provider-aws'

new finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.get"></a>

```typescript
public get(index: number): FinspaceKxVolumeNas1ConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration">FinspaceKxVolumeNas1Configuration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FinspaceKxVolumeNas1Configuration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration">FinspaceKxVolumeNas1Configuration</a>[]

---


### FinspaceKxVolumeNas1ConfigurationOutputReference <a name="FinspaceKxVolumeNas1ConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer"></a>

```typescript
import { finspaceKxVolume } from '@cdktf/provider-aws'

new finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration">FinspaceKxVolumeNas1Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1ConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FinspaceKxVolumeNas1Configuration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeNas1Configuration">FinspaceKxVolumeNas1Configuration</a>

---


### FinspaceKxVolumeTimeoutsOutputReference <a name="FinspaceKxVolumeTimeoutsOutputReference" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.Initializer"></a>

```typescript
import { finspaceKxVolume } from '@cdktf/provider-aws'

new finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts">FinspaceKxVolumeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FinspaceKxVolumeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.finspaceKxVolume.FinspaceKxVolumeTimeouts">FinspaceKxVolumeTimeouts</a>

---



