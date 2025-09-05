# `costoptimizationhubPreferences` Submodule <a name="`costoptimizationhubPreferences` Submodule" id="@cdktf/provider-aws.costoptimizationhubPreferences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CostoptimizationhubPreferences <a name="CostoptimizationhubPreferences" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/costoptimizationhub_preferences aws_costoptimizationhub_preferences}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer"></a>

```typescript
import { costoptimizationhubPreferences } from '@cdktf/provider-aws'

new costoptimizationhubPreferences.CostoptimizationhubPreferences(scope: Construct, id: string, config?: CostoptimizationhubPreferencesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig">CostoptimizationhubPreferencesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig">CostoptimizationhubPreferencesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.resetMemberAccountDiscountVisibility">resetMemberAccountDiscountVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.resetSavingsEstimationMode">resetSavingsEstimationMode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetMemberAccountDiscountVisibility` <a name="resetMemberAccountDiscountVisibility" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.resetMemberAccountDiscountVisibility"></a>

```typescript
public resetMemberAccountDiscountVisibility(): void
```

##### `resetSavingsEstimationMode` <a name="resetSavingsEstimationMode" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.resetSavingsEstimationMode"></a>

```typescript
public resetSavingsEstimationMode(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CostoptimizationhubPreferences resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isConstruct"></a>

```typescript
import { costoptimizationhubPreferences } from '@cdktf/provider-aws'

costoptimizationhubPreferences.CostoptimizationhubPreferences.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isTerraformElement"></a>

```typescript
import { costoptimizationhubPreferences } from '@cdktf/provider-aws'

costoptimizationhubPreferences.CostoptimizationhubPreferences.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isTerraformResource"></a>

```typescript
import { costoptimizationhubPreferences } from '@cdktf/provider-aws'

costoptimizationhubPreferences.CostoptimizationhubPreferences.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.generateConfigForImport"></a>

```typescript
import { costoptimizationhubPreferences } from '@cdktf/provider-aws'

costoptimizationhubPreferences.CostoptimizationhubPreferences.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CostoptimizationhubPreferences resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CostoptimizationhubPreferences to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CostoptimizationhubPreferences that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/costoptimizationhub_preferences#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CostoptimizationhubPreferences to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.memberAccountDiscountVisibilityInput">memberAccountDiscountVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.savingsEstimationModeInput">savingsEstimationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.memberAccountDiscountVisibility">memberAccountDiscountVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.savingsEstimationMode">savingsEstimationMode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `memberAccountDiscountVisibilityInput`<sup>Optional</sup> <a name="memberAccountDiscountVisibilityInput" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.memberAccountDiscountVisibilityInput"></a>

```typescript
public readonly memberAccountDiscountVisibilityInput: string;
```

- *Type:* string

---

##### `savingsEstimationModeInput`<sup>Optional</sup> <a name="savingsEstimationModeInput" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.savingsEstimationModeInput"></a>

```typescript
public readonly savingsEstimationModeInput: string;
```

- *Type:* string

---

##### `memberAccountDiscountVisibility`<sup>Required</sup> <a name="memberAccountDiscountVisibility" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.memberAccountDiscountVisibility"></a>

```typescript
public readonly memberAccountDiscountVisibility: string;
```

- *Type:* string

---

##### `savingsEstimationMode`<sup>Required</sup> <a name="savingsEstimationMode" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.savingsEstimationMode"></a>

```typescript
public readonly savingsEstimationMode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CostoptimizationhubPreferencesConfig <a name="CostoptimizationhubPreferencesConfig" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.Initializer"></a>

```typescript
import { costoptimizationhubPreferences } from '@cdktf/provider-aws'

const costoptimizationhubPreferencesConfig: costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.memberAccountDiscountVisibility">memberAccountDiscountVisibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/costoptimizationhub_preferences#member_account_discount_visibility CostoptimizationhubPreferences#member_account_discount_visibility}. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.savingsEstimationMode">savingsEstimationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/costoptimizationhub_preferences#savings_estimation_mode CostoptimizationhubPreferences#savings_estimation_mode}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `memberAccountDiscountVisibility`<sup>Optional</sup> <a name="memberAccountDiscountVisibility" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.memberAccountDiscountVisibility"></a>

```typescript
public readonly memberAccountDiscountVisibility: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/costoptimizationhub_preferences#member_account_discount_visibility CostoptimizationhubPreferences#member_account_discount_visibility}.

---

##### `savingsEstimationMode`<sup>Optional</sup> <a name="savingsEstimationMode" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.savingsEstimationMode"></a>

```typescript
public readonly savingsEstimationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/costoptimizationhub_preferences#savings_estimation_mode CostoptimizationhubPreferences#savings_estimation_mode}.

---



