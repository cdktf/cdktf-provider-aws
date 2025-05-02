# `lakeformationOptIn` Submodule <a name="`lakeformationOptIn` Submodule" id="@cdktf/provider-aws.lakeformationOptIn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationOptIn <a name="LakeformationOptIn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in aws_lakeformation_opt_in}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptIn(scope: Construct, id: string, config?: LakeformationOptInConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig">LakeformationOptInConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig">LakeformationOptInConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.putPrincipal">putPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.putResourceData">putResourceData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.resetPrincipal">resetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.resetResourceData">resetResourceData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.putCondition"></a>

```typescript
public putCondition(value: IResolvable | LakeformationOptInCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.putCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInCondition">LakeformationOptInCondition</a>[]

---

##### `putPrincipal` <a name="putPrincipal" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.putPrincipal"></a>

```typescript
public putPrincipal(value: IResolvable | LakeformationOptInPrincipal[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.putPrincipal.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal">LakeformationOptInPrincipal</a>[]

---

##### `putResourceData` <a name="putResourceData" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.putResourceData"></a>

```typescript
public putResourceData(value: IResolvable | LakeformationOptInResourceData[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.putResourceData.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData">LakeformationOptInResourceData</a>[]

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.resetPrincipal"></a>

```typescript
public resetPrincipal(): void
```

##### `resetResourceData` <a name="resetResourceData" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.resetResourceData"></a>

```typescript
public resetResourceData(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LakeformationOptIn resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.isConstruct"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

lakeformationOptIn.LakeformationOptIn.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.isTerraformElement"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

lakeformationOptIn.LakeformationOptIn.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.isTerraformResource"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

lakeformationOptIn.LakeformationOptIn.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.generateConfigForImport"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

lakeformationOptIn.LakeformationOptIn.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LakeformationOptIn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LakeformationOptIn to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LakeformationOptIn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LakeformationOptIn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList">LakeformationOptInConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.lastUpdatedBy">lastUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.principal">principal</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList">LakeformationOptInPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.resourceData">resourceData</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList">LakeformationOptInResourceDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.conditionInput">conditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInCondition">LakeformationOptInCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.principalInput">principalInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal">LakeformationOptInPrincipal</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.resourceDataInput">resourceDataInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData">LakeformationOptInResourceData</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.condition"></a>

```typescript
public readonly condition: LakeformationOptInConditionList;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList">LakeformationOptInConditionList</a>

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="lastUpdatedBy" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.lastUpdatedBy"></a>

```typescript
public readonly lastUpdatedBy: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.principal"></a>

```typescript
public readonly principal: LakeformationOptInPrincipalList;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList">LakeformationOptInPrincipalList</a>

---

##### `resourceData`<sup>Required</sup> <a name="resourceData" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.resourceData"></a>

```typescript
public readonly resourceData: LakeformationOptInResourceDataList;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList">LakeformationOptInResourceDataList</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.conditionInput"></a>

```typescript
public readonly conditionInput: IResolvable | LakeformationOptInCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInCondition">LakeformationOptInCondition</a>[]

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.principalInput"></a>

```typescript
public readonly principalInput: IResolvable | LakeformationOptInPrincipal[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal">LakeformationOptInPrincipal</a>[]

---

##### `resourceDataInput`<sup>Optional</sup> <a name="resourceDataInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.resourceDataInput"></a>

```typescript
public readonly resourceDataInput: IResolvable | LakeformationOptInResourceData[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData">LakeformationOptInResourceData</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptIn.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationOptInCondition <a name="LakeformationOptInCondition" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInCondition.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

const lakeformationOptInCondition: lakeformationOptIn.LakeformationOptInCondition = { ... }
```


### LakeformationOptInConfig <a name="LakeformationOptInConfig" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

const lakeformationOptInConfig: lakeformationOptIn.LakeformationOptInConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.condition">condition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInCondition">LakeformationOptInCondition</a>[]</code> | condition block. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.principal">principal</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal">LakeformationOptInPrincipal</a>[]</code> | principal block. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.resourceData">resourceData</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData">LakeformationOptInResourceData</a>[]</code> | resource_data block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.condition"></a>

```typescript
public readonly condition: IResolvable | LakeformationOptInCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInCondition">LakeformationOptInCondition</a>[]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#condition LakeformationOptIn#condition}

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.principal"></a>

```typescript
public readonly principal: IResolvable | LakeformationOptInPrincipal[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal">LakeformationOptInPrincipal</a>[]

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#principal LakeformationOptIn#principal}

---

##### `resourceData`<sup>Optional</sup> <a name="resourceData" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConfig.property.resourceData"></a>

```typescript
public readonly resourceData: IResolvable | LakeformationOptInResourceData[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData">LakeformationOptInResourceData</a>[]

resource_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#resource_data LakeformationOptIn#resource_data}

---

### LakeformationOptInPrincipal <a name="LakeformationOptInPrincipal" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

const lakeformationOptInPrincipal: lakeformationOptIn.LakeformationOptInPrincipal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal.property.dataLakePrincipalIdentifier">dataLakePrincipalIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#data_lake_principal_identifier LakeformationOptIn#data_lake_principal_identifier}. |

---

##### `dataLakePrincipalIdentifier`<sup>Required</sup> <a name="dataLakePrincipalIdentifier" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal.property.dataLakePrincipalIdentifier"></a>

```typescript
public readonly dataLakePrincipalIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#data_lake_principal_identifier LakeformationOptIn#data_lake_principal_identifier}.

---

### LakeformationOptInResourceData <a name="LakeformationOptInResourceData" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

const lakeformationOptInResourceData: lakeformationOptIn.LakeformationOptInResourceData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.catalog">catalog</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalog">LakeformationOptInResourceDataCatalog</a>[]</code> | catalog block. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.database">database</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase">LakeformationOptInResourceDataDatabase</a>[]</code> | database block. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.dataCellsFilter">dataCellsFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter">LakeformationOptInResourceDataDataCellsFilter</a>[]</code> | data_cells_filter block. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.dataLocation">dataLocation</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation">LakeformationOptInResourceDataDataLocation</a>[]</code> | data_location block. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.lfTag">lfTag</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag">LakeformationOptInResourceDataLfTag</a>[]</code> | lf_tag block. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.lfTagExpression">lfTagExpression</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression">LakeformationOptInResourceDataLfTagExpression</a>[]</code> | lf_tag_expression block. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.lfTagPolicy">lfTagPolicy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy">LakeformationOptInResourceDataLfTagPolicy</a>[]</code> | lf_tag_policy block. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.table">table</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable">LakeformationOptInResourceDataTable</a>[]</code> | table block. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.tableWithColumns">tableWithColumns</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns">LakeformationOptInResourceDataTableWithColumns</a>[]</code> | table_with_columns block. |

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.catalog"></a>

```typescript
public readonly catalog: IResolvable | LakeformationOptInResourceDataCatalog[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalog">LakeformationOptInResourceDataCatalog</a>[]

catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#catalog LakeformationOptIn#catalog}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.database"></a>

```typescript
public readonly database: IResolvable | LakeformationOptInResourceDataDatabase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase">LakeformationOptInResourceDataDatabase</a>[]

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#database LakeformationOptIn#database}

---

##### `dataCellsFilter`<sup>Optional</sup> <a name="dataCellsFilter" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.dataCellsFilter"></a>

```typescript
public readonly dataCellsFilter: IResolvable | LakeformationOptInResourceDataDataCellsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter">LakeformationOptInResourceDataDataCellsFilter</a>[]

data_cells_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#data_cells_filter LakeformationOptIn#data_cells_filter}

---

##### `dataLocation`<sup>Optional</sup> <a name="dataLocation" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.dataLocation"></a>

```typescript
public readonly dataLocation: IResolvable | LakeformationOptInResourceDataDataLocation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation">LakeformationOptInResourceDataDataLocation</a>[]

data_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#data_location LakeformationOptIn#data_location}

---

##### `lfTag`<sup>Optional</sup> <a name="lfTag" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.lfTag"></a>

```typescript
public readonly lfTag: IResolvable | LakeformationOptInResourceDataLfTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag">LakeformationOptInResourceDataLfTag</a>[]

lf_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#lf_tag LakeformationOptIn#lf_tag}

---

##### `lfTagExpression`<sup>Optional</sup> <a name="lfTagExpression" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.lfTagExpression"></a>

```typescript
public readonly lfTagExpression: IResolvable | LakeformationOptInResourceDataLfTagExpression[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression">LakeformationOptInResourceDataLfTagExpression</a>[]

lf_tag_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#lf_tag_expression LakeformationOptIn#lf_tag_expression}

---

##### `lfTagPolicy`<sup>Optional</sup> <a name="lfTagPolicy" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.lfTagPolicy"></a>

```typescript
public readonly lfTagPolicy: IResolvable | LakeformationOptInResourceDataLfTagPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy">LakeformationOptInResourceDataLfTagPolicy</a>[]

lf_tag_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#lf_tag_policy LakeformationOptIn#lf_tag_policy}

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.table"></a>

```typescript
public readonly table: IResolvable | LakeformationOptInResourceDataTable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable">LakeformationOptInResourceDataTable</a>[]

table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#table LakeformationOptIn#table}

---

##### `tableWithColumns`<sup>Optional</sup> <a name="tableWithColumns" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData.property.tableWithColumns"></a>

```typescript
public readonly tableWithColumns: IResolvable | LakeformationOptInResourceDataTableWithColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns">LakeformationOptInResourceDataTableWithColumns</a>[]

table_with_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#table_with_columns LakeformationOptIn#table_with_columns}

---

### LakeformationOptInResourceDataCatalog <a name="LakeformationOptInResourceDataCatalog" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalog.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

const lakeformationOptInResourceDataCatalog: lakeformationOptIn.LakeformationOptInResourceDataCatalog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalog.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#id LakeformationOptIn#id}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalog.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#id LakeformationOptIn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### LakeformationOptInResourceDataDatabase <a name="LakeformationOptInResourceDataDatabase" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

const lakeformationOptInResourceDataDatabase: lakeformationOptIn.LakeformationOptInResourceDataDatabase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}.

---

### LakeformationOptInResourceDataDataCellsFilter <a name="LakeformationOptInResourceDataDataCellsFilter" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

const lakeformationOptInResourceDataDataCellsFilter: lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#database_name LakeformationOptIn#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter.property.tableCatalogId">tableCatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#table_catalog_id LakeformationOptIn#table_catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#table_name LakeformationOptIn#table_name}. |

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#database_name LakeformationOptIn#database_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}.

---

##### `tableCatalogId`<sup>Optional</sup> <a name="tableCatalogId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter.property.tableCatalogId"></a>

```typescript
public readonly tableCatalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#table_catalog_id LakeformationOptIn#table_catalog_id}.

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#table_name LakeformationOptIn#table_name}.

---

### LakeformationOptInResourceDataDataLocation <a name="LakeformationOptInResourceDataDataLocation" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

const lakeformationOptInResourceDataDataLocation: lakeformationOptIn.LakeformationOptInResourceDataDataLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation.property.resourceArn">resourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#resource_arn LakeformationOptIn#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}. |

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#resource_arn LakeformationOptIn#resource_arn}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}.

---

### LakeformationOptInResourceDataLfTag <a name="LakeformationOptInResourceDataLfTag" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

const lakeformationOptInResourceDataLfTag: lakeformationOptIn.LakeformationOptInResourceDataLfTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#key LakeformationOptIn#key}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#value LakeformationOptIn#value}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#key LakeformationOptIn#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#value LakeformationOptIn#value}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}.

---

### LakeformationOptInResourceDataLfTagExpression <a name="LakeformationOptInResourceDataLfTagExpression" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

const lakeformationOptInResourceDataLfTagExpression: lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}.

---

### LakeformationOptInResourceDataLfTagPolicy <a name="LakeformationOptInResourceDataLfTagPolicy" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

const lakeformationOptInResourceDataLfTagPolicy: lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#resource_type LakeformationOptIn#resource_type}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy.property.expression">expression</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#expression LakeformationOptIn#expression}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy.property.expressionName">expressionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#expression_name LakeformationOptIn#expression_name}. |

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#resource_type LakeformationOptIn#resource_type}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy.property.expression"></a>

```typescript
public readonly expression: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#expression LakeformationOptIn#expression}.

---

##### `expressionName`<sup>Optional</sup> <a name="expressionName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy.property.expressionName"></a>

```typescript
public readonly expressionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#expression_name LakeformationOptIn#expression_name}.

---

### LakeformationOptInResourceDataTable <a name="LakeformationOptInResourceDataTable" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

const lakeformationOptInResourceDataTable: lakeformationOptIn.LakeformationOptInResourceDataTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#database_name LakeformationOptIn#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable.property.wildcard">wildcard</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#wildcard LakeformationOptIn#wildcard}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#database_name LakeformationOptIn#database_name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}.

---

##### `wildcard`<sup>Optional</sup> <a name="wildcard" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable.property.wildcard"></a>

```typescript
public readonly wildcard: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#wildcard LakeformationOptIn#wildcard}.

---

### LakeformationOptInResourceDataTableWithColumns <a name="LakeformationOptInResourceDataTableWithColumns" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

const lakeformationOptInResourceDataTableWithColumns: lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#database_name LakeformationOptIn#database_name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns.property.columnNames">columnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#column_names LakeformationOptIn#column_names}. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns.property.columnWildcard">columnWildcard</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard">LakeformationOptInResourceDataTableWithColumnsColumnWildcard</a>[]</code> | column_wildcard block. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#database_name LakeformationOptIn#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}.

---

##### `columnNames`<sup>Optional</sup> <a name="columnNames" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#column_names LakeformationOptIn#column_names}.

---

##### `columnWildcard`<sup>Optional</sup> <a name="columnWildcard" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns.property.columnWildcard"></a>

```typescript
public readonly columnWildcard: IResolvable | LakeformationOptInResourceDataTableWithColumnsColumnWildcard[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard">LakeformationOptInResourceDataTableWithColumnsColumnWildcard</a>[]

column_wildcard block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#column_wildcard LakeformationOptIn#column_wildcard}

---

### LakeformationOptInResourceDataTableWithColumnsColumnWildcard <a name="LakeformationOptInResourceDataTableWithColumnsColumnWildcard" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

const lakeformationOptInResourceDataTableWithColumnsColumnWildcard: lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard.property.excludedColumnNames">excludedColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#excluded_column_names LakeformationOptIn#excluded_column_names}. |

---

##### `excludedColumnNames`<sup>Optional</sup> <a name="excludedColumnNames" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard.property.excludedColumnNames"></a>

```typescript
public readonly excludedColumnNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/resources/lakeformation_opt_in#excluded_column_names LakeformationOptIn#excluded_column_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationOptInConditionList <a name="LakeformationOptInConditionList" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptInConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.get"></a>

```typescript
public get(index: number): LakeformationOptInConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInCondition">LakeformationOptInCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationOptInCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInCondition">LakeformationOptInCondition</a>[]

---


### LakeformationOptInConditionOutputReference <a name="LakeformationOptInConditionOutputReference" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptInConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInCondition">LakeformationOptInCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationOptInCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInCondition">LakeformationOptInCondition</a>

---


### LakeformationOptInPrincipalList <a name="LakeformationOptInPrincipalList" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptInPrincipalList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.get"></a>

```typescript
public get(index: number): LakeformationOptInPrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal">LakeformationOptInPrincipal</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationOptInPrincipal[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal">LakeformationOptInPrincipal</a>[]

---


### LakeformationOptInPrincipalOutputReference <a name="LakeformationOptInPrincipalOutputReference" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptInPrincipalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.property.dataLakePrincipalIdentifierInput">dataLakePrincipalIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.property.dataLakePrincipalIdentifier">dataLakePrincipalIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal">LakeformationOptInPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataLakePrincipalIdentifierInput`<sup>Optional</sup> <a name="dataLakePrincipalIdentifierInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.property.dataLakePrincipalIdentifierInput"></a>

```typescript
public readonly dataLakePrincipalIdentifierInput: string;
```

- *Type:* string

---

##### `dataLakePrincipalIdentifier`<sup>Required</sup> <a name="dataLakePrincipalIdentifier" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```typescript
public readonly dataLakePrincipalIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationOptInPrincipal;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInPrincipal">LakeformationOptInPrincipal</a>

---


### LakeformationOptInResourceDataCatalogList <a name="LakeformationOptInResourceDataCatalogList" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptInResourceDataCatalogList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.get"></a>

```typescript
public get(index: number): LakeformationOptInResourceDataCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalog">LakeformationOptInResourceDataCatalog</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationOptInResourceDataCatalog[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalog">LakeformationOptInResourceDataCatalog</a>[]

---


### LakeformationOptInResourceDataCatalogOutputReference <a name="LakeformationOptInResourceDataCatalogOutputReference" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.resetId"></a>

```typescript
public resetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalog">LakeformationOptInResourceDataCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationOptInResourceDataCatalog;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalog">LakeformationOptInResourceDataCatalog</a>

---


### LakeformationOptInResourceDataDatabaseList <a name="LakeformationOptInResourceDataDatabaseList" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptInResourceDataDatabaseList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.get"></a>

```typescript
public get(index: number): LakeformationOptInResourceDataDatabaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase">LakeformationOptInResourceDataDatabase</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationOptInResourceDataDatabase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase">LakeformationOptInResourceDataDatabase</a>[]

---


### LakeformationOptInResourceDataDatabaseOutputReference <a name="LakeformationOptInResourceDataDatabaseOutputReference" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase">LakeformationOptInResourceDataDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationOptInResourceDataDatabase;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase">LakeformationOptInResourceDataDatabase</a>

---


### LakeformationOptInResourceDataDataCellsFilterList <a name="LakeformationOptInResourceDataDataCellsFilterList" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.get"></a>

```typescript
public get(index: number): LakeformationOptInResourceDataDataCellsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter">LakeformationOptInResourceDataDataCellsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationOptInResourceDataDataCellsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter">LakeformationOptInResourceDataDataCellsFilter</a>[]

---


### LakeformationOptInResourceDataDataCellsFilterOutputReference <a name="LakeformationOptInResourceDataDataCellsFilterOutputReference" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.resetTableCatalogId">resetTableCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.resetTableName">resetTableName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTableCatalogId` <a name="resetTableCatalogId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.resetTableCatalogId"></a>

```typescript
public resetTableCatalogId(): void
```

##### `resetTableName` <a name="resetTableName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.resetTableName"></a>

```typescript
public resetTableName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.tableCatalogIdInput">tableCatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.tableCatalogId">tableCatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter">LakeformationOptInResourceDataDataCellsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tableCatalogIdInput`<sup>Optional</sup> <a name="tableCatalogIdInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.tableCatalogIdInput"></a>

```typescript
public readonly tableCatalogIdInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tableCatalogId`<sup>Required</sup> <a name="tableCatalogId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.tableCatalogId"></a>

```typescript
public readonly tableCatalogId: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationOptInResourceDataDataCellsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter">LakeformationOptInResourceDataDataCellsFilter</a>

---


### LakeformationOptInResourceDataDataLocationList <a name="LakeformationOptInResourceDataDataLocationList" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptInResourceDataDataLocationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.get"></a>

```typescript
public get(index: number): LakeformationOptInResourceDataDataLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation">LakeformationOptInResourceDataDataLocation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationOptInResourceDataDataLocation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation">LakeformationOptInResourceDataDataLocation</a>[]

---


### LakeformationOptInResourceDataDataLocationOutputReference <a name="LakeformationOptInResourceDataDataLocationOutputReference" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation">LakeformationOptInResourceDataDataLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationOptInResourceDataDataLocation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation">LakeformationOptInResourceDataDataLocation</a>

---


### LakeformationOptInResourceDataLfTagExpressionList <a name="LakeformationOptInResourceDataLfTagExpressionList" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.get"></a>

```typescript
public get(index: number): LakeformationOptInResourceDataLfTagExpressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression">LakeformationOptInResourceDataLfTagExpression</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationOptInResourceDataLfTagExpression[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression">LakeformationOptInResourceDataLfTagExpression</a>[]

---


### LakeformationOptInResourceDataLfTagExpressionOutputReference <a name="LakeformationOptInResourceDataLfTagExpressionOutputReference" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression">LakeformationOptInResourceDataLfTagExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationOptInResourceDataLfTagExpression;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression">LakeformationOptInResourceDataLfTagExpression</a>

---


### LakeformationOptInResourceDataLfTagList <a name="LakeformationOptInResourceDataLfTagList" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptInResourceDataLfTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.get"></a>

```typescript
public get(index: number): LakeformationOptInResourceDataLfTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag">LakeformationOptInResourceDataLfTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationOptInResourceDataLfTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag">LakeformationOptInResourceDataLfTag</a>[]

---


### LakeformationOptInResourceDataLfTagOutputReference <a name="LakeformationOptInResourceDataLfTagOutputReference" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag">LakeformationOptInResourceDataLfTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationOptInResourceDataLfTag;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag">LakeformationOptInResourceDataLfTag</a>

---


### LakeformationOptInResourceDataLfTagPolicyList <a name="LakeformationOptInResourceDataLfTagPolicyList" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.get"></a>

```typescript
public get(index: number): LakeformationOptInResourceDataLfTagPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy">LakeformationOptInResourceDataLfTagPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationOptInResourceDataLfTagPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy">LakeformationOptInResourceDataLfTagPolicy</a>[]

---


### LakeformationOptInResourceDataLfTagPolicyOutputReference <a name="LakeformationOptInResourceDataLfTagPolicyOutputReference" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.resetExpressionName">resetExpressionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetExpressionName` <a name="resetExpressionName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.resetExpressionName"></a>

```typescript
public resetExpressionName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.expressionInput">expressionInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.expressionNameInput">expressionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.expression">expression</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.expressionName">expressionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy">LakeformationOptInResourceDataLfTagPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string[];
```

- *Type:* string[]

---

##### `expressionNameInput`<sup>Optional</sup> <a name="expressionNameInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.expressionNameInput"></a>

```typescript
public readonly expressionNameInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.expression"></a>

```typescript
public readonly expression: string[];
```

- *Type:* string[]

---

##### `expressionName`<sup>Required</sup> <a name="expressionName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.expressionName"></a>

```typescript
public readonly expressionName: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationOptInResourceDataLfTagPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy">LakeformationOptInResourceDataLfTagPolicy</a>

---


### LakeformationOptInResourceDataList <a name="LakeformationOptInResourceDataList" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptInResourceDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.get"></a>

```typescript
public get(index: number): LakeformationOptInResourceDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData">LakeformationOptInResourceData</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationOptInResourceData[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData">LakeformationOptInResourceData</a>[]

---


### LakeformationOptInResourceDataOutputReference <a name="LakeformationOptInResourceDataOutputReference" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptInResourceDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putCatalog">putCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putDatabase">putDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putDataCellsFilter">putDataCellsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putDataLocation">putDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putLfTag">putLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putLfTagExpression">putLfTagExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putLfTagPolicy">putLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putTable">putTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putTableWithColumns">putTableWithColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetDataCellsFilter">resetDataCellsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetDataLocation">resetDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetLfTag">resetLfTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetLfTagExpression">resetLfTagExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetLfTagPolicy">resetLfTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetTable">resetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetTableWithColumns">resetTableWithColumns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCatalog` <a name="putCatalog" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putCatalog"></a>

```typescript
public putCatalog(value: IResolvable | LakeformationOptInResourceDataCatalog[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putCatalog.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalog">LakeformationOptInResourceDataCatalog</a>[]

---

##### `putDatabase` <a name="putDatabase" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putDatabase"></a>

```typescript
public putDatabase(value: IResolvable | LakeformationOptInResourceDataDatabase[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putDatabase.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase">LakeformationOptInResourceDataDatabase</a>[]

---

##### `putDataCellsFilter` <a name="putDataCellsFilter" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putDataCellsFilter"></a>

```typescript
public putDataCellsFilter(value: IResolvable | LakeformationOptInResourceDataDataCellsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putDataCellsFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter">LakeformationOptInResourceDataDataCellsFilter</a>[]

---

##### `putDataLocation` <a name="putDataLocation" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putDataLocation"></a>

```typescript
public putDataLocation(value: IResolvable | LakeformationOptInResourceDataDataLocation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putDataLocation.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation">LakeformationOptInResourceDataDataLocation</a>[]

---

##### `putLfTag` <a name="putLfTag" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putLfTag"></a>

```typescript
public putLfTag(value: IResolvable | LakeformationOptInResourceDataLfTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putLfTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag">LakeformationOptInResourceDataLfTag</a>[]

---

##### `putLfTagExpression` <a name="putLfTagExpression" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putLfTagExpression"></a>

```typescript
public putLfTagExpression(value: IResolvable | LakeformationOptInResourceDataLfTagExpression[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putLfTagExpression.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression">LakeformationOptInResourceDataLfTagExpression</a>[]

---

##### `putLfTagPolicy` <a name="putLfTagPolicy" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putLfTagPolicy"></a>

```typescript
public putLfTagPolicy(value: IResolvable | LakeformationOptInResourceDataLfTagPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putLfTagPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy">LakeformationOptInResourceDataLfTagPolicy</a>[]

---

##### `putTable` <a name="putTable" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putTable"></a>

```typescript
public putTable(value: IResolvable | LakeformationOptInResourceDataTable[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putTable.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable">LakeformationOptInResourceDataTable</a>[]

---

##### `putTableWithColumns` <a name="putTableWithColumns" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putTableWithColumns"></a>

```typescript
public putTableWithColumns(value: IResolvable | LakeformationOptInResourceDataTableWithColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.putTableWithColumns.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns">LakeformationOptInResourceDataTableWithColumns</a>[]

---

##### `resetCatalog` <a name="resetCatalog" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetCatalog"></a>

```typescript
public resetCatalog(): void
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetDataCellsFilter` <a name="resetDataCellsFilter" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetDataCellsFilter"></a>

```typescript
public resetDataCellsFilter(): void
```

##### `resetDataLocation` <a name="resetDataLocation" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetDataLocation"></a>

```typescript
public resetDataLocation(): void
```

##### `resetLfTag` <a name="resetLfTag" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetLfTag"></a>

```typescript
public resetLfTag(): void
```

##### `resetLfTagExpression` <a name="resetLfTagExpression" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetLfTagExpression"></a>

```typescript
public resetLfTagExpression(): void
```

##### `resetLfTagPolicy` <a name="resetLfTagPolicy" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetLfTagPolicy"></a>

```typescript
public resetLfTagPolicy(): void
```

##### `resetTable` <a name="resetTable" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetTable"></a>

```typescript
public resetTable(): void
```

##### `resetTableWithColumns` <a name="resetTableWithColumns" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.resetTableWithColumns"></a>

```typescript
public resetTableWithColumns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList">LakeformationOptInResourceDataCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.database">database</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList">LakeformationOptInResourceDataDatabaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.dataCellsFilter">dataCellsFilter</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList">LakeformationOptInResourceDataDataCellsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.dataLocation">dataLocation</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList">LakeformationOptInResourceDataDataLocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.lfTag">lfTag</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList">LakeformationOptInResourceDataLfTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.lfTagExpression">lfTagExpression</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList">LakeformationOptInResourceDataLfTagExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.lfTagPolicy">lfTagPolicy</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList">LakeformationOptInResourceDataLfTagPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.table">table</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList">LakeformationOptInResourceDataTableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.tableWithColumns">tableWithColumns</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList">LakeformationOptInResourceDataTableWithColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.catalogInput">catalogInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalog">LakeformationOptInResourceDataCatalog</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.databaseInput">databaseInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase">LakeformationOptInResourceDataDatabase</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.dataCellsFilterInput">dataCellsFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter">LakeformationOptInResourceDataDataCellsFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.dataLocationInput">dataLocationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation">LakeformationOptInResourceDataDataLocation</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.lfTagExpressionInput">lfTagExpressionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression">LakeformationOptInResourceDataLfTagExpression</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.lfTagInput">lfTagInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag">LakeformationOptInResourceDataLfTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.lfTagPolicyInput">lfTagPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy">LakeformationOptInResourceDataLfTagPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.tableInput">tableInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable">LakeformationOptInResourceDataTable</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.tableWithColumnsInput">tableWithColumnsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns">LakeformationOptInResourceDataTableWithColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData">LakeformationOptInResourceData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.catalog"></a>

```typescript
public readonly catalog: LakeformationOptInResourceDataCatalogList;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalogList">LakeformationOptInResourceDataCatalogList</a>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.database"></a>

```typescript
public readonly database: LakeformationOptInResourceDataDatabaseList;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabaseList">LakeformationOptInResourceDataDatabaseList</a>

---

##### `dataCellsFilter`<sup>Required</sup> <a name="dataCellsFilter" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.dataCellsFilter"></a>

```typescript
public readonly dataCellsFilter: LakeformationOptInResourceDataDataCellsFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilterList">LakeformationOptInResourceDataDataCellsFilterList</a>

---

##### `dataLocation`<sup>Required</sup> <a name="dataLocation" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.dataLocation"></a>

```typescript
public readonly dataLocation: LakeformationOptInResourceDataDataLocationList;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocationList">LakeformationOptInResourceDataDataLocationList</a>

---

##### `lfTag`<sup>Required</sup> <a name="lfTag" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.lfTag"></a>

```typescript
public readonly lfTag: LakeformationOptInResourceDataLfTagList;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagList">LakeformationOptInResourceDataLfTagList</a>

---

##### `lfTagExpression`<sup>Required</sup> <a name="lfTagExpression" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.lfTagExpression"></a>

```typescript
public readonly lfTagExpression: LakeformationOptInResourceDataLfTagExpressionList;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpressionList">LakeformationOptInResourceDataLfTagExpressionList</a>

---

##### `lfTagPolicy`<sup>Required</sup> <a name="lfTagPolicy" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.lfTagPolicy"></a>

```typescript
public readonly lfTagPolicy: LakeformationOptInResourceDataLfTagPolicyList;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicyList">LakeformationOptInResourceDataLfTagPolicyList</a>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.table"></a>

```typescript
public readonly table: LakeformationOptInResourceDataTableList;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList">LakeformationOptInResourceDataTableList</a>

---

##### `tableWithColumns`<sup>Required</sup> <a name="tableWithColumns" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.tableWithColumns"></a>

```typescript
public readonly tableWithColumns: LakeformationOptInResourceDataTableWithColumnsList;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList">LakeformationOptInResourceDataTableWithColumnsList</a>

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.catalogInput"></a>

```typescript
public readonly catalogInput: IResolvable | LakeformationOptInResourceDataCatalog[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataCatalog">LakeformationOptInResourceDataCatalog</a>[]

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: IResolvable | LakeformationOptInResourceDataDatabase[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDatabase">LakeformationOptInResourceDataDatabase</a>[]

---

##### `dataCellsFilterInput`<sup>Optional</sup> <a name="dataCellsFilterInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.dataCellsFilterInput"></a>

```typescript
public readonly dataCellsFilterInput: IResolvable | LakeformationOptInResourceDataDataCellsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataCellsFilter">LakeformationOptInResourceDataDataCellsFilter</a>[]

---

##### `dataLocationInput`<sup>Optional</sup> <a name="dataLocationInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.dataLocationInput"></a>

```typescript
public readonly dataLocationInput: IResolvable | LakeformationOptInResourceDataDataLocation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataDataLocation">LakeformationOptInResourceDataDataLocation</a>[]

---

##### `lfTagExpressionInput`<sup>Optional</sup> <a name="lfTagExpressionInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.lfTagExpressionInput"></a>

```typescript
public readonly lfTagExpressionInput: IResolvable | LakeformationOptInResourceDataLfTagExpression[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagExpression">LakeformationOptInResourceDataLfTagExpression</a>[]

---

##### `lfTagInput`<sup>Optional</sup> <a name="lfTagInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.lfTagInput"></a>

```typescript
public readonly lfTagInput: IResolvable | LakeformationOptInResourceDataLfTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTag">LakeformationOptInResourceDataLfTag</a>[]

---

##### `lfTagPolicyInput`<sup>Optional</sup> <a name="lfTagPolicyInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.lfTagPolicyInput"></a>

```typescript
public readonly lfTagPolicyInput: IResolvable | LakeformationOptInResourceDataLfTagPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataLfTagPolicy">LakeformationOptInResourceDataLfTagPolicy</a>[]

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.tableInput"></a>

```typescript
public readonly tableInput: IResolvable | LakeformationOptInResourceDataTable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable">LakeformationOptInResourceDataTable</a>[]

---

##### `tableWithColumnsInput`<sup>Optional</sup> <a name="tableWithColumnsInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.tableWithColumnsInput"></a>

```typescript
public readonly tableWithColumnsInput: IResolvable | LakeformationOptInResourceDataTableWithColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns">LakeformationOptInResourceDataTableWithColumns</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationOptInResourceData;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceData">LakeformationOptInResourceData</a>

---


### LakeformationOptInResourceDataTableList <a name="LakeformationOptInResourceDataTableList" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptInResourceDataTableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.get"></a>

```typescript
public get(index: number): LakeformationOptInResourceDataTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable">LakeformationOptInResourceDataTable</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationOptInResourceDataTable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable">LakeformationOptInResourceDataTable</a>[]

---


### LakeformationOptInResourceDataTableOutputReference <a name="LakeformationOptInResourceDataTableOutputReference" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.resetWildcard">resetWildcard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetWildcard` <a name="resetWildcard" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.resetWildcard"></a>

```typescript
public resetWildcard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.wildcardInput">wildcardInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.wildcard">wildcard</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable">LakeformationOptInResourceDataTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `wildcardInput`<sup>Optional</sup> <a name="wildcardInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.wildcardInput"></a>

```typescript
public readonly wildcardInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `wildcard`<sup>Required</sup> <a name="wildcard" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.wildcard"></a>

```typescript
public readonly wildcard: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationOptInResourceDataTable;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTable">LakeformationOptInResourceDataTable</a>

---


### LakeformationOptInResourceDataTableWithColumnsColumnWildcardList <a name="LakeformationOptInResourceDataTableWithColumnsColumnWildcardList" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.get"></a>

```typescript
public get(index: number): LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard">LakeformationOptInResourceDataTableWithColumnsColumnWildcard</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationOptInResourceDataTableWithColumnsColumnWildcard[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard">LakeformationOptInResourceDataTableWithColumnsColumnWildcard</a>[]

---


### LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference <a name="LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.resetExcludedColumnNames">resetExcludedColumnNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludedColumnNames` <a name="resetExcludedColumnNames" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.resetExcludedColumnNames"></a>

```typescript
public resetExcludedColumnNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNamesInput">excludedColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNames">excludedColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard">LakeformationOptInResourceDataTableWithColumnsColumnWildcard</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludedColumnNamesInput`<sup>Optional</sup> <a name="excludedColumnNamesInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNamesInput"></a>

```typescript
public readonly excludedColumnNamesInput: string[];
```

- *Type:* string[]

---

##### `excludedColumnNames`<sup>Required</sup> <a name="excludedColumnNames" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.property.excludedColumnNames"></a>

```typescript
public readonly excludedColumnNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationOptInResourceDataTableWithColumnsColumnWildcard;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard">LakeformationOptInResourceDataTableWithColumnsColumnWildcard</a>

---


### LakeformationOptInResourceDataTableWithColumnsList <a name="LakeformationOptInResourceDataTableWithColumnsList" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.get"></a>

```typescript
public get(index: number): LakeformationOptInResourceDataTableWithColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns">LakeformationOptInResourceDataTableWithColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationOptInResourceDataTableWithColumns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns">LakeformationOptInResourceDataTableWithColumns</a>[]

---


### LakeformationOptInResourceDataTableWithColumnsOutputReference <a name="LakeformationOptInResourceDataTableWithColumnsOutputReference" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.Initializer"></a>

```typescript
import { lakeformationOptIn } from '@cdktf/provider-aws'

new lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.putColumnWildcard">putColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.resetColumnNames">resetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.resetColumnWildcard">resetColumnWildcard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumnWildcard` <a name="putColumnWildcard" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.putColumnWildcard"></a>

```typescript
public putColumnWildcard(value: IResolvable | LakeformationOptInResourceDataTableWithColumnsColumnWildcard[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.putColumnWildcard.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard">LakeformationOptInResourceDataTableWithColumnsColumnWildcard</a>[]

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetColumnNames` <a name="resetColumnNames" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.resetColumnNames"></a>

```typescript
public resetColumnNames(): void
```

##### `resetColumnWildcard` <a name="resetColumnWildcard" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.resetColumnWildcard"></a>

```typescript
public resetColumnWildcard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.columnWildcard">columnWildcard</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList">LakeformationOptInResourceDataTableWithColumnsColumnWildcardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.columnNamesInput">columnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.columnWildcardInput">columnWildcardInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard">LakeformationOptInResourceDataTableWithColumnsColumnWildcard</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.columnNames">columnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns">LakeformationOptInResourceDataTableWithColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnWildcard`<sup>Required</sup> <a name="columnWildcard" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.columnWildcard"></a>

```typescript
public readonly columnWildcard: LakeformationOptInResourceDataTableWithColumnsColumnWildcardList;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcardList">LakeformationOptInResourceDataTableWithColumnsColumnWildcardList</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `columnNamesInput`<sup>Optional</sup> <a name="columnNamesInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.columnNamesInput"></a>

```typescript
public readonly columnNamesInput: string[];
```

- *Type:* string[]

---

##### `columnWildcardInput`<sup>Optional</sup> <a name="columnWildcardInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.columnWildcardInput"></a>

```typescript
public readonly columnWildcardInput: IResolvable | LakeformationOptInResourceDataTableWithColumnsColumnWildcard[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsColumnWildcard">LakeformationOptInResourceDataTableWithColumnsColumnWildcard</a>[]

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `columnNames`<sup>Required</sup> <a name="columnNames" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.columnNames"></a>

```typescript
public readonly columnNames: string[];
```

- *Type:* string[]

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationOptInResourceDataTableWithColumns;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationOptIn.LakeformationOptInResourceDataTableWithColumns">LakeformationOptInResourceDataTableWithColumns</a>

---



