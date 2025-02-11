# `computeoptimizerEnrollmentStatus` Submodule <a name="`computeoptimizerEnrollmentStatus` Submodule" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeoptimizerEnrollmentStatus <a name="ComputeoptimizerEnrollmentStatus" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/computeoptimizer_enrollment_status aws_computeoptimizer_enrollment_status}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer"></a>

```typescript
import { computeoptimizerEnrollmentStatus } from '@cdktf/provider-aws'

new computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus(scope: Construct, id: string, config: ComputeoptimizerEnrollmentStatusConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig">ComputeoptimizerEnrollmentStatusConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig">ComputeoptimizerEnrollmentStatusConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetIncludeMemberAccounts">resetIncludeMemberAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeoptimizerEnrollmentStatusTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts">ComputeoptimizerEnrollmentStatusTimeouts</a>

---

##### `resetIncludeMemberAccounts` <a name="resetIncludeMemberAccounts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetIncludeMemberAccounts"></a>

```typescript
public resetIncludeMemberAccounts(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeoptimizerEnrollmentStatus resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isConstruct"></a>

```typescript
import { computeoptimizerEnrollmentStatus } from '@cdktf/provider-aws'

computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isTerraformElement"></a>

```typescript
import { computeoptimizerEnrollmentStatus } from '@cdktf/provider-aws'

computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isTerraformResource"></a>

```typescript
import { computeoptimizerEnrollmentStatus } from '@cdktf/provider-aws'

computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.generateConfigForImport"></a>

```typescript
import { computeoptimizerEnrollmentStatus } from '@cdktf/provider-aws'

computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeoptimizerEnrollmentStatus resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeoptimizerEnrollmentStatus to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeoptimizerEnrollmentStatus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/computeoptimizer_enrollment_status#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeoptimizerEnrollmentStatus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.numberOfMemberAccountsOptedIn">numberOfMemberAccountsOptedIn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference">ComputeoptimizerEnrollmentStatusTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.includeMemberAccountsInput">includeMemberAccountsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts">ComputeoptimizerEnrollmentStatusTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.includeMemberAccounts">includeMemberAccounts</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `numberOfMemberAccountsOptedIn`<sup>Required</sup> <a name="numberOfMemberAccountsOptedIn" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.numberOfMemberAccountsOptedIn"></a>

```typescript
public readonly numberOfMemberAccountsOptedIn: number;
```

- *Type:* number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeoptimizerEnrollmentStatusTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference">ComputeoptimizerEnrollmentStatusTimeoutsOutputReference</a>

---

##### `includeMemberAccountsInput`<sup>Optional</sup> <a name="includeMemberAccountsInput" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.includeMemberAccountsInput"></a>

```typescript
public readonly includeMemberAccountsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeoptimizerEnrollmentStatusTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts">ComputeoptimizerEnrollmentStatusTimeouts</a>

---

##### `includeMemberAccounts`<sup>Required</sup> <a name="includeMemberAccounts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.includeMemberAccounts"></a>

```typescript
public readonly includeMemberAccounts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeoptimizerEnrollmentStatusConfig <a name="ComputeoptimizerEnrollmentStatusConfig" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.Initializer"></a>

```typescript
import { computeoptimizerEnrollmentStatus } from '@cdktf/provider-aws'

const computeoptimizerEnrollmentStatusConfig: computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/computeoptimizer_enrollment_status#status ComputeoptimizerEnrollmentStatus#status}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.includeMemberAccounts">includeMemberAccounts</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/computeoptimizer_enrollment_status#include_member_accounts ComputeoptimizerEnrollmentStatus#include_member_accounts}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts">ComputeoptimizerEnrollmentStatusTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/computeoptimizer_enrollment_status#status ComputeoptimizerEnrollmentStatus#status}.

---

##### `includeMemberAccounts`<sup>Optional</sup> <a name="includeMemberAccounts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.includeMemberAccounts"></a>

```typescript
public readonly includeMemberAccounts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/computeoptimizer_enrollment_status#include_member_accounts ComputeoptimizerEnrollmentStatus#include_member_accounts}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeoptimizerEnrollmentStatusTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts">ComputeoptimizerEnrollmentStatusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/computeoptimizer_enrollment_status#timeouts ComputeoptimizerEnrollmentStatus#timeouts}

---

### ComputeoptimizerEnrollmentStatusTimeouts <a name="ComputeoptimizerEnrollmentStatusTimeouts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts.Initializer"></a>

```typescript
import { computeoptimizerEnrollmentStatus } from '@cdktf/provider-aws'

const computeoptimizerEnrollmentStatusTimeouts: computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/computeoptimizer_enrollment_status#create ComputeoptimizerEnrollmentStatus#create}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/computeoptimizer_enrollment_status#update ComputeoptimizerEnrollmentStatus#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeoptimizerEnrollmentStatusTimeoutsOutputReference <a name="ComputeoptimizerEnrollmentStatusTimeoutsOutputReference" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeoptimizerEnrollmentStatus } from '@cdktf/provider-aws'

new computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts">ComputeoptimizerEnrollmentStatusTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeoptimizerEnrollmentStatusTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts">ComputeoptimizerEnrollmentStatusTimeouts</a>

---



