# `ec2CapacityBlockReservation` Submodule <a name="`ec2CapacityBlockReservation` Submodule" id="@cdktf/provider-aws.ec2CapacityBlockReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2CapacityBlockReservation <a name="Ec2CapacityBlockReservation" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ec2_capacity_block_reservation aws_ec2_capacity_block_reservation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer"></a>

```typescript
import { ec2CapacityBlockReservation } from '@cdktf/provider-aws'

new ec2CapacityBlockReservation.Ec2CapacityBlockReservation(scope: Construct, id: string, config: Ec2CapacityBlockReservationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig">Ec2CapacityBlockReservationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig">Ec2CapacityBlockReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.putTimeouts"></a>

```typescript
public putTimeouts(value: Ec2CapacityBlockReservationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts">Ec2CapacityBlockReservationTimeouts</a>

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Ec2CapacityBlockReservation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isConstruct"></a>

```typescript
import { ec2CapacityBlockReservation } from '@cdktf/provider-aws'

ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isTerraformElement"></a>

```typescript
import { ec2CapacityBlockReservation } from '@cdktf/provider-aws'

ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isTerraformResource"></a>

```typescript
import { ec2CapacityBlockReservation } from '@cdktf/provider-aws'

ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.generateConfigForImport"></a>

```typescript
import { ec2CapacityBlockReservation } from '@cdktf/provider-aws'

ec2CapacityBlockReservation.Ec2CapacityBlockReservation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Ec2CapacityBlockReservation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2CapacityBlockReservation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2CapacityBlockReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ec2_capacity_block_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Ec2CapacityBlockReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.ebsOptimized">ebsOptimized</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.endDate">endDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.endDateType">endDateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.outpostArn">outpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.placementGroupArn">placementGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.reservationType">reservationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tenancy">tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference">Ec2CapacityBlockReservationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.capacityBlockOfferingIdInput">capacityBlockOfferingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.instancePlatformInput">instancePlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts">Ec2CapacityBlockReservationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.capacityBlockOfferingId">capacityBlockOfferingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.instancePlatform">instancePlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

---

##### `endDateType`<sup>Required</sup> <a name="endDateType" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.endDateType"></a>

```typescript
public readonly endDateType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.outpostArn"></a>

```typescript
public readonly outpostArn: string;
```

- *Type:* string

---

##### `placementGroupArn`<sup>Required</sup> <a name="placementGroupArn" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.placementGroupArn"></a>

```typescript
public readonly placementGroupArn: string;
```

- *Type:* string

---

##### `reservationType`<sup>Required</sup> <a name="reservationType" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.reservationType"></a>

```typescript
public readonly reservationType: string;
```

- *Type:* string

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.timeouts"></a>

```typescript
public readonly timeouts: Ec2CapacityBlockReservationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference">Ec2CapacityBlockReservationTimeoutsOutputReference</a>

---

##### `capacityBlockOfferingIdInput`<sup>Optional</sup> <a name="capacityBlockOfferingIdInput" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.capacityBlockOfferingIdInput"></a>

```typescript
public readonly capacityBlockOfferingIdInput: string;
```

- *Type:* string

---

##### `instancePlatformInput`<sup>Optional</sup> <a name="instancePlatformInput" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.instancePlatformInput"></a>

```typescript
public readonly instancePlatformInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | Ec2CapacityBlockReservationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts">Ec2CapacityBlockReservationTimeouts</a>

---

##### `capacityBlockOfferingId`<sup>Required</sup> <a name="capacityBlockOfferingId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.capacityBlockOfferingId"></a>

```typescript
public readonly capacityBlockOfferingId: string;
```

- *Type:* string

---

##### `instancePlatform`<sup>Required</sup> <a name="instancePlatform" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.instancePlatform"></a>

```typescript
public readonly instancePlatform: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2CapacityBlockReservationConfig <a name="Ec2CapacityBlockReservationConfig" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.Initializer"></a>

```typescript
import { ec2CapacityBlockReservation } from '@cdktf/provider-aws'

const ec2CapacityBlockReservationConfig: ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.capacityBlockOfferingId">capacityBlockOfferingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ec2_capacity_block_reservation#capacity_block_offering_id Ec2CapacityBlockReservation#capacity_block_offering_id}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.instancePlatform">instancePlatform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ec2_capacity_block_reservation#instance_platform Ec2CapacityBlockReservation#instance_platform}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ec2_capacity_block_reservation#tags Ec2CapacityBlockReservation#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts">Ec2CapacityBlockReservationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capacityBlockOfferingId`<sup>Required</sup> <a name="capacityBlockOfferingId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.capacityBlockOfferingId"></a>

```typescript
public readonly capacityBlockOfferingId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ec2_capacity_block_reservation#capacity_block_offering_id Ec2CapacityBlockReservation#capacity_block_offering_id}.

---

##### `instancePlatform`<sup>Required</sup> <a name="instancePlatform" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.instancePlatform"></a>

```typescript
public readonly instancePlatform: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ec2_capacity_block_reservation#instance_platform Ec2CapacityBlockReservation#instance_platform}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ec2_capacity_block_reservation#region Ec2CapacityBlockReservation#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ec2_capacity_block_reservation#tags Ec2CapacityBlockReservation#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Ec2CapacityBlockReservationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts">Ec2CapacityBlockReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ec2_capacity_block_reservation#timeouts Ec2CapacityBlockReservation#timeouts}

---

### Ec2CapacityBlockReservationTimeouts <a name="Ec2CapacityBlockReservationTimeouts" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts.Initializer"></a>

```typescript
import { ec2CapacityBlockReservation } from '@cdktf/provider-aws'

const ec2CapacityBlockReservationTimeouts: ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/ec2_capacity_block_reservation#create Ec2CapacityBlockReservation#create}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2CapacityBlockReservationTimeoutsOutputReference <a name="Ec2CapacityBlockReservationTimeoutsOutputReference" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.Initializer"></a>

```typescript
import { ec2CapacityBlockReservation } from '@cdktf/provider-aws'

new ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts">Ec2CapacityBlockReservationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2CapacityBlockReservationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts">Ec2CapacityBlockReservationTimeouts</a>

---



