# `imagebuilderLifecyclePolicy` Submodule <a name="`imagebuilderLifecyclePolicy` Submodule" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderLifecyclePolicy <a name="ImagebuilderLifecyclePolicy" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy aws_imagebuilder_lifecycle_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy(scope: Construct, id: string, config: ImagebuilderLifecyclePolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig">ImagebuilderLifecyclePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig">ImagebuilderLifecyclePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putPolicyDetail">putPolicyDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putResourceSelection">putResourceSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetPolicyDetail">resetPolicyDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetResourceSelection">resetResourceSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPolicyDetail` <a name="putPolicyDetail" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putPolicyDetail"></a>

```typescript
public putPolicyDetail(value: IResolvable | ImagebuilderLifecyclePolicyPolicyDetail[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putPolicyDetail.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail">ImagebuilderLifecyclePolicyPolicyDetail</a>[]

---

##### `putResourceSelection` <a name="putResourceSelection" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putResourceSelection"></a>

```typescript
public putResourceSelection(value: IResolvable | ImagebuilderLifecyclePolicyResourceSelection[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putResourceSelection.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetPolicyDetail` <a name="resetPolicyDetail" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetPolicyDetail"></a>

```typescript
public resetPolicyDetail(): void
```

##### `resetResourceSelection` <a name="resetResourceSelection" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetResourceSelection"></a>

```typescript
public resetResourceSelection(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ImagebuilderLifecyclePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isConstruct"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformElement"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformResource"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ImagebuilderLifecyclePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ImagebuilderLifecyclePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ImagebuilderLifecyclePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ImagebuilderLifecyclePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetail">policyDetail</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList">ImagebuilderLifecyclePolicyPolicyDetailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelection">resourceSelection</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList">ImagebuilderLifecyclePolicyResourceSelectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRoleInput">executionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetailInput">policyDetailInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail">ImagebuilderLifecyclePolicyPolicyDetail</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelectionInput">resourceSelectionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRole">executionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyDetail`<sup>Required</sup> <a name="policyDetail" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetail"></a>

```typescript
public readonly policyDetail: ImagebuilderLifecyclePolicyPolicyDetailList;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList">ImagebuilderLifecyclePolicyPolicyDetailList</a>

---

##### `resourceSelection`<sup>Required</sup> <a name="resourceSelection" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelection"></a>

```typescript
public readonly resourceSelection: ImagebuilderLifecyclePolicyResourceSelectionList;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList">ImagebuilderLifecyclePolicyResourceSelectionList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRoleInput"></a>

```typescript
public readonly executionRoleInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyDetailInput`<sup>Optional</sup> <a name="policyDetailInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetailInput"></a>

```typescript
public readonly policyDetailInput: IResolvable | ImagebuilderLifecyclePolicyPolicyDetail[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail">ImagebuilderLifecyclePolicyPolicyDetail</a>[]

---

##### `resourceSelectionInput`<sup>Optional</sup> <a name="resourceSelectionInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelectionInput"></a>

```typescript
public readonly resourceSelectionInput: IResolvable | ImagebuilderLifecyclePolicyResourceSelection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>[]

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderLifecyclePolicyConfig <a name="ImagebuilderLifecyclePolicyConfig" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

const imagebuilderLifecyclePolicyConfig: imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.executionRole">executionRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#execution_role ImagebuilderLifecyclePolicy#execution_role}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#resource_type ImagebuilderLifecyclePolicy#resource_type}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#description ImagebuilderLifecyclePolicy#description}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.policyDetail">policyDetail</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail">ImagebuilderLifecyclePolicyPolicyDetail</a>[]</code> | policy_detail block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceSelection">resourceSelection</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>[]</code> | resource_selection block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#status ImagebuilderLifecyclePolicy#status}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#tags ImagebuilderLifecyclePolicy#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#execution_role ImagebuilderLifecyclePolicy#execution_role}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#resource_type ImagebuilderLifecyclePolicy#resource_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#description ImagebuilderLifecyclePolicy#description}.

---

##### `policyDetail`<sup>Optional</sup> <a name="policyDetail" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.policyDetail"></a>

```typescript
public readonly policyDetail: IResolvable | ImagebuilderLifecyclePolicyPolicyDetail[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail">ImagebuilderLifecyclePolicyPolicyDetail</a>[]

policy_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#policy_detail ImagebuilderLifecyclePolicy#policy_detail}

---

##### `resourceSelection`<sup>Optional</sup> <a name="resourceSelection" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceSelection"></a>

```typescript
public readonly resourceSelection: IResolvable | ImagebuilderLifecyclePolicyResourceSelection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>[]

resource_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#resource_selection ImagebuilderLifecyclePolicy#resource_selection}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#status ImagebuilderLifecyclePolicy#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#tags ImagebuilderLifecyclePolicy#tags}.

---

### ImagebuilderLifecyclePolicyPolicyDetail <a name="ImagebuilderLifecyclePolicyPolicyDetail" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

const imagebuilderLifecyclePolicyPolicyDetail: imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail.property.action">action</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction">ImagebuilderLifecyclePolicyPolicyDetailAction</a>[]</code> | action block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail.property.exclusionRules">exclusionRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailExclusionRules</a>[]</code> | exclusion_rules block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter">ImagebuilderLifecyclePolicyPolicyDetailFilter</a>[]</code> | filter block. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail.property.action"></a>

```typescript
public readonly action: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction">ImagebuilderLifecyclePolicyPolicyDetailAction</a>[]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#action ImagebuilderLifecyclePolicy#action}

---

##### `exclusionRules`<sup>Optional</sup> <a name="exclusionRules" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail.property.exclusionRules"></a>

```typescript
public readonly exclusionRules: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailExclusionRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailExclusionRules</a>[]

exclusion_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#exclusion_rules ImagebuilderLifecyclePolicy#exclusion_rules}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail.property.filter"></a>

```typescript
public readonly filter: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter">ImagebuilderLifecyclePolicyPolicyDetailFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#filter ImagebuilderLifecyclePolicy#filter}

---

### ImagebuilderLifecyclePolicyPolicyDetailAction <a name="ImagebuilderLifecyclePolicyPolicyDetailAction" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

const imagebuilderLifecyclePolicyPolicyDetailAction: imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#type ImagebuilderLifecyclePolicy#type}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction.property.includeResources">includeResources</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources</a>[]</code> | include_resources block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#type ImagebuilderLifecyclePolicy#type}.

---

##### `includeResources`<sup>Optional</sup> <a name="includeResources" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction.property.includeResources"></a>

```typescript
public readonly includeResources: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources</a>[]

include_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#include_resources ImagebuilderLifecyclePolicy#include_resources}

---

### ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources <a name="ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

const imagebuilderLifecyclePolicyPolicyDetailActionIncludeResources: imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources.property.amis">amis</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#amis ImagebuilderLifecyclePolicy#amis}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources.property.containers">containers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#containers ImagebuilderLifecyclePolicy#containers}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources.property.snapshots">snapshots</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#snapshots ImagebuilderLifecyclePolicy#snapshots}. |

---

##### `amis`<sup>Optional</sup> <a name="amis" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources.property.amis"></a>

```typescript
public readonly amis: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#amis ImagebuilderLifecyclePolicy#amis}.

---

##### `containers`<sup>Optional</sup> <a name="containers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources.property.containers"></a>

```typescript
public readonly containers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#containers ImagebuilderLifecyclePolicy#containers}.

---

##### `snapshots`<sup>Optional</sup> <a name="snapshots" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources.property.snapshots"></a>

```typescript
public readonly snapshots: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#snapshots ImagebuilderLifecyclePolicy#snapshots}.

---

### ImagebuilderLifecyclePolicyPolicyDetailExclusionRules <a name="ImagebuilderLifecyclePolicyPolicyDetailExclusionRules" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

const imagebuilderLifecyclePolicyPolicyDetailExclusionRules: imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules.property.amis">amis</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis</a>[]</code> | amis block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules.property.tagMap">tagMap</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}. |

---

##### `amis`<sup>Optional</sup> <a name="amis" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules.property.amis"></a>

```typescript
public readonly amis: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis</a>[]

amis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#amis ImagebuilderLifecyclePolicy#amis}

---

##### `tagMap`<sup>Optional</sup> <a name="tagMap" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules.property.tagMap"></a>

```typescript
public readonly tagMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}.

---

### ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis <a name="ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

const imagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis: imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis.property.isPublic">isPublic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#is_public ImagebuilderLifecyclePolicy#is_public}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis.property.lastLaunched">lastLaunched</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched</a>[]</code> | last_launched block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis.property.regions">regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#regions ImagebuilderLifecyclePolicy#regions}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis.property.sharedAccounts">sharedAccounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#shared_accounts ImagebuilderLifecyclePolicy#shared_accounts}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis.property.tagMap">tagMap</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}. |

---

##### `isPublic`<sup>Optional</sup> <a name="isPublic" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis.property.isPublic"></a>

```typescript
public readonly isPublic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#is_public ImagebuilderLifecyclePolicy#is_public}.

---

##### `lastLaunched`<sup>Optional</sup> <a name="lastLaunched" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis.property.lastLaunched"></a>

```typescript
public readonly lastLaunched: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched</a>[]

last_launched block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#last_launched ImagebuilderLifecyclePolicy#last_launched}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#regions ImagebuilderLifecyclePolicy#regions}.

---

##### `sharedAccounts`<sup>Optional</sup> <a name="sharedAccounts" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis.property.sharedAccounts"></a>

```typescript
public readonly sharedAccounts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#shared_accounts ImagebuilderLifecyclePolicy#shared_accounts}.

---

##### `tagMap`<sup>Optional</sup> <a name="tagMap" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis.property.tagMap"></a>

```typescript
public readonly tagMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}.

---

### ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched <a name="ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

const imagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched: imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#unit ImagebuilderLifecyclePolicy#unit}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#value ImagebuilderLifecyclePolicy#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#unit ImagebuilderLifecyclePolicy#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#value ImagebuilderLifecyclePolicy#value}.

---

### ImagebuilderLifecyclePolicyPolicyDetailFilter <a name="ImagebuilderLifecyclePolicyPolicyDetailFilter" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

const imagebuilderLifecyclePolicyPolicyDetailFilter: imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#type ImagebuilderLifecyclePolicy#type}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#value ImagebuilderLifecyclePolicy#value}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter.property.retainAtLeast">retainAtLeast</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#retain_at_least ImagebuilderLifecyclePolicy#retain_at_least}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#unit ImagebuilderLifecyclePolicy#unit}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#type ImagebuilderLifecyclePolicy#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#value ImagebuilderLifecyclePolicy#value}.

---

##### `retainAtLeast`<sup>Optional</sup> <a name="retainAtLeast" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter.property.retainAtLeast"></a>

```typescript
public readonly retainAtLeast: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#retain_at_least ImagebuilderLifecyclePolicy#retain_at_least}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#unit ImagebuilderLifecyclePolicy#unit}.

---

### ImagebuilderLifecyclePolicyResourceSelection <a name="ImagebuilderLifecyclePolicyResourceSelection" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

const imagebuilderLifecyclePolicyResourceSelection: imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.recipe">recipe</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe">ImagebuilderLifecyclePolicyResourceSelectionRecipe</a>[]</code> | recipe block. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.tagMap">tagMap</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}. |

---

##### `recipe`<sup>Optional</sup> <a name="recipe" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.recipe"></a>

```typescript
public readonly recipe: IResolvable | ImagebuilderLifecyclePolicyResourceSelectionRecipe[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe">ImagebuilderLifecyclePolicyResourceSelectionRecipe</a>[]

recipe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#recipe ImagebuilderLifecyclePolicy#recipe}

---

##### `tagMap`<sup>Optional</sup> <a name="tagMap" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.tagMap"></a>

```typescript
public readonly tagMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}.

---

### ImagebuilderLifecyclePolicyResourceSelectionRecipe <a name="ImagebuilderLifecyclePolicyResourceSelectionRecipe" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

const imagebuilderLifecyclePolicyResourceSelectionRecipe: imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe.property.semanticVersion">semanticVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#semantic_version ImagebuilderLifecyclePolicy#semantic_version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}.

---

##### `semanticVersion`<sup>Required</sup> <a name="semanticVersion" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe.property.semanticVersion"></a>

```typescript
public readonly semanticVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/imagebuilder_lifecycle_policy#semantic_version ImagebuilderLifecyclePolicy#semantic_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList <a name="ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.get"></a>

```typescript
public get(index: number): ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources</a>[]

---


### ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.resetAmis">resetAmis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.resetContainers">resetContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.resetSnapshots">resetSnapshots</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAmis` <a name="resetAmis" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.resetAmis"></a>

```typescript
public resetAmis(): void
```

##### `resetContainers` <a name="resetContainers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.resetContainers"></a>

```typescript
public resetContainers(): void
```

##### `resetSnapshots` <a name="resetSnapshots" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.resetSnapshots"></a>

```typescript
public resetSnapshots(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.amisInput">amisInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.containersInput">containersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.snapshotsInput">snapshotsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.amis">amis</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.containers">containers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.snapshots">snapshots</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amisInput`<sup>Optional</sup> <a name="amisInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.amisInput"></a>

```typescript
public readonly amisInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `containersInput`<sup>Optional</sup> <a name="containersInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.containersInput"></a>

```typescript
public readonly containersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshotsInput`<sup>Optional</sup> <a name="snapshotsInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.snapshotsInput"></a>

```typescript
public readonly snapshotsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `amis`<sup>Required</sup> <a name="amis" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.amis"></a>

```typescript
public readonly amis: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.containers"></a>

```typescript
public readonly containers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snapshots`<sup>Required</sup> <a name="snapshots" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.snapshots"></a>

```typescript
public readonly snapshots: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailActionList <a name="ImagebuilderLifecyclePolicyPolicyDetailActionList" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.get"></a>

```typescript
public get(index: number): ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction">ImagebuilderLifecyclePolicyPolicyDetailAction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction">ImagebuilderLifecyclePolicyPolicyDetailAction</a>[]

---


### ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.putIncludeResources">putIncludeResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.resetIncludeResources">resetIncludeResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIncludeResources` <a name="putIncludeResources" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.putIncludeResources"></a>

```typescript
public putIncludeResources(value: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.putIncludeResources.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources</a>[]

---

##### `resetIncludeResources` <a name="resetIncludeResources" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.resetIncludeResources"></a>

```typescript
public resetIncludeResources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.includeResources">includeResources</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList">ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.includeResourcesInput">includeResourcesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction">ImagebuilderLifecyclePolicyPolicyDetailAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeResources`<sup>Required</sup> <a name="includeResources" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.includeResources"></a>

```typescript
public readonly includeResources: ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList">ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList</a>

---

##### `includeResourcesInput`<sup>Optional</sup> <a name="includeResourcesInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.includeResourcesInput"></a>

```typescript
public readonly includeResourcesInput: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailAction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction">ImagebuilderLifecyclePolicyPolicyDetailAction</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList <a name="ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.get"></a>

```typescript
public get(index: number): ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched</a>[]

---


### ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList <a name="ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.get"></a>

```typescript
public get(index: number): ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis</a>[]

---


### ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.putLastLaunched">putLastLaunched</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.resetIsPublic">resetIsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.resetLastLaunched">resetLastLaunched</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.resetSharedAccounts">resetSharedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.resetTagMap">resetTagMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLastLaunched` <a name="putLastLaunched" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.putLastLaunched"></a>

```typescript
public putLastLaunched(value: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.putLastLaunched.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched</a>[]

---

##### `resetIsPublic` <a name="resetIsPublic" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.resetIsPublic"></a>

```typescript
public resetIsPublic(): void
```

##### `resetLastLaunched` <a name="resetLastLaunched" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.resetLastLaunched"></a>

```typescript
public resetLastLaunched(): void
```

##### `resetRegions` <a name="resetRegions" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.resetRegions"></a>

```typescript
public resetRegions(): void
```

##### `resetSharedAccounts` <a name="resetSharedAccounts" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.resetSharedAccounts"></a>

```typescript
public resetSharedAccounts(): void
```

##### `resetTagMap` <a name="resetTagMap" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.resetTagMap"></a>

```typescript
public resetTagMap(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.lastLaunched">lastLaunched</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.isPublicInput">isPublicInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.lastLaunchedInput">lastLaunchedInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.sharedAccountsInput">sharedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.tagMapInput">tagMapInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.isPublic">isPublic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.sharedAccounts">sharedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.tagMap">tagMap</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastLaunched`<sup>Required</sup> <a name="lastLaunched" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.lastLaunched"></a>

```typescript
public readonly lastLaunched: ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList</a>

---

##### `isPublicInput`<sup>Optional</sup> <a name="isPublicInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.isPublicInput"></a>

```typescript
public readonly isPublicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lastLaunchedInput`<sup>Optional</sup> <a name="lastLaunchedInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.lastLaunchedInput"></a>

```typescript
public readonly lastLaunchedInput: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched</a>[]

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `sharedAccountsInput`<sup>Optional</sup> <a name="sharedAccountsInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.sharedAccountsInput"></a>

```typescript
public readonly sharedAccountsInput: string[];
```

- *Type:* string[]

---

##### `tagMapInput`<sup>Optional</sup> <a name="tagMapInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.tagMapInput"></a>

```typescript
public readonly tagMapInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.isPublic"></a>

```typescript
public readonly isPublic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `sharedAccounts`<sup>Required</sup> <a name="sharedAccounts" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.sharedAccounts"></a>

```typescript
public readonly sharedAccounts: string[];
```

- *Type:* string[]

---

##### `tagMap`<sup>Required</sup> <a name="tagMap" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.tagMap"></a>

```typescript
public readonly tagMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList <a name="ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.get"></a>

```typescript
public get(index: number): ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailExclusionRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailExclusionRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailExclusionRules</a>[]

---


### ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.putAmis">putAmis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.resetAmis">resetAmis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.resetTagMap">resetTagMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmis` <a name="putAmis" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.putAmis"></a>

```typescript
public putAmis(value: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.putAmis.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis</a>[]

---

##### `resetAmis` <a name="resetAmis" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.resetAmis"></a>

```typescript
public resetAmis(): void
```

##### `resetTagMap` <a name="resetTagMap" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.resetTagMap"></a>

```typescript
public resetTagMap(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.amis">amis</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.amisInput">amisInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.tagMapInput">tagMapInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.tagMap">tagMap</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailExclusionRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amis`<sup>Required</sup> <a name="amis" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.amis"></a>

```typescript
public readonly amis: ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList</a>

---

##### `amisInput`<sup>Optional</sup> <a name="amisInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.amisInput"></a>

```typescript
public readonly amisInput: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis</a>[]

---

##### `tagMapInput`<sup>Optional</sup> <a name="tagMapInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.tagMapInput"></a>

```typescript
public readonly tagMapInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagMap`<sup>Required</sup> <a name="tagMap" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.tagMap"></a>

```typescript
public readonly tagMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailExclusionRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailExclusionRules</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailFilterList <a name="ImagebuilderLifecyclePolicyPolicyDetailFilterList" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.get"></a>

```typescript
public get(index: number): ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter">ImagebuilderLifecyclePolicyPolicyDetailFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter">ImagebuilderLifecyclePolicyPolicyDetailFilter</a>[]

---


### ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.resetRetainAtLeast">resetRetainAtLeast</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetainAtLeast` <a name="resetRetainAtLeast" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.resetRetainAtLeast"></a>

```typescript
public resetRetainAtLeast(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.retainAtLeastInput">retainAtLeastInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.retainAtLeast">retainAtLeast</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter">ImagebuilderLifecyclePolicyPolicyDetailFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retainAtLeastInput`<sup>Optional</sup> <a name="retainAtLeastInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.retainAtLeastInput"></a>

```typescript
public readonly retainAtLeastInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `retainAtLeast`<sup>Required</sup> <a name="retainAtLeast" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.retainAtLeast"></a>

```typescript
public readonly retainAtLeast: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter">ImagebuilderLifecyclePolicyPolicyDetailFilter</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailList <a name="ImagebuilderLifecyclePolicyPolicyDetailList" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.get"></a>

```typescript
public get(index: number): ImagebuilderLifecyclePolicyPolicyDetailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail">ImagebuilderLifecyclePolicyPolicyDetail</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyPolicyDetail[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail">ImagebuilderLifecyclePolicyPolicyDetail</a>[]

---


### ImagebuilderLifecyclePolicyPolicyDetailOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailOutputReference" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.putExclusionRules">putExclusionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.resetExclusionRules">resetExclusionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.putAction"></a>

```typescript
public putAction(value: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailAction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.putAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction">ImagebuilderLifecyclePolicyPolicyDetailAction</a>[]

---

##### `putExclusionRules` <a name="putExclusionRules" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.putExclusionRules"></a>

```typescript
public putExclusionRules(value: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailExclusionRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.putExclusionRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailExclusionRules</a>[]

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.putFilter"></a>

```typescript
public putFilter(value: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter">ImagebuilderLifecyclePolicyPolicyDetailFilter</a>[]

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetExclusionRules` <a name="resetExclusionRules" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.resetExclusionRules"></a>

```typescript
public resetExclusionRules(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList">ImagebuilderLifecyclePolicyPolicyDetailActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.exclusionRules">exclusionRules</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList">ImagebuilderLifecyclePolicyPolicyDetailFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.actionInput">actionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction">ImagebuilderLifecyclePolicyPolicyDetailAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.exclusionRulesInput">exclusionRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailExclusionRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter">ImagebuilderLifecyclePolicyPolicyDetailFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail">ImagebuilderLifecyclePolicyPolicyDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.action"></a>

```typescript
public readonly action: ImagebuilderLifecyclePolicyPolicyDetailActionList;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailActionList">ImagebuilderLifecyclePolicyPolicyDetailActionList</a>

---

##### `exclusionRules`<sup>Required</sup> <a name="exclusionRules" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.exclusionRules"></a>

```typescript
public readonly exclusionRules: ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList">ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.filter"></a>

```typescript
public readonly filter: ImagebuilderLifecyclePolicyPolicyDetailFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilterList">ImagebuilderLifecyclePolicyPolicyDetailFilterList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailAction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailAction">ImagebuilderLifecyclePolicyPolicyDetailAction</a>[]

---

##### `exclusionRulesInput`<sup>Optional</sup> <a name="exclusionRulesInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.exclusionRulesInput"></a>

```typescript
public readonly exclusionRulesInput: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailExclusionRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailExclusionRules</a>[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | ImagebuilderLifecyclePolicyPolicyDetailFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailFilter">ImagebuilderLifecyclePolicyPolicyDetailFilter</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyPolicyDetail;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetail">ImagebuilderLifecyclePolicyPolicyDetail</a>

---


### ImagebuilderLifecyclePolicyResourceSelectionList <a name="ImagebuilderLifecyclePolicyResourceSelectionList" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.get"></a>

```typescript
public get(index: number): ImagebuilderLifecyclePolicyResourceSelectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyResourceSelection[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>[]

---


### ImagebuilderLifecyclePolicyResourceSelectionOutputReference <a name="ImagebuilderLifecyclePolicyResourceSelectionOutputReference" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.putRecipe">putRecipe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetRecipe">resetRecipe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetTagMap">resetTagMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecipe` <a name="putRecipe" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.putRecipe"></a>

```typescript
public putRecipe(value: IResolvable | ImagebuilderLifecyclePolicyResourceSelectionRecipe[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.putRecipe.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe">ImagebuilderLifecyclePolicyResourceSelectionRecipe</a>[]

---

##### `resetRecipe` <a name="resetRecipe" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetRecipe"></a>

```typescript
public resetRecipe(): void
```

##### `resetTagMap` <a name="resetTagMap" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetTagMap"></a>

```typescript
public resetTagMap(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipe">recipe</a></code> | <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList">ImagebuilderLifecyclePolicyResourceSelectionRecipeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipeInput">recipeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe">ImagebuilderLifecyclePolicyResourceSelectionRecipe</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMapInput">tagMapInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMap">tagMap</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recipe`<sup>Required</sup> <a name="recipe" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipe"></a>

```typescript
public readonly recipe: ImagebuilderLifecyclePolicyResourceSelectionRecipeList;
```

- *Type:* <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList">ImagebuilderLifecyclePolicyResourceSelectionRecipeList</a>

---

##### `recipeInput`<sup>Optional</sup> <a name="recipeInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipeInput"></a>

```typescript
public readonly recipeInput: IResolvable | ImagebuilderLifecyclePolicyResourceSelectionRecipe[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe">ImagebuilderLifecyclePolicyResourceSelectionRecipe</a>[]

---

##### `tagMapInput`<sup>Optional</sup> <a name="tagMapInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMapInput"></a>

```typescript
public readonly tagMapInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagMap`<sup>Required</sup> <a name="tagMap" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMap"></a>

```typescript
public readonly tagMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyResourceSelection;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>

---


### ImagebuilderLifecyclePolicyResourceSelectionRecipeList <a name="ImagebuilderLifecyclePolicyResourceSelectionRecipeList" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.get"></a>

```typescript
public get(index: number): ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe">ImagebuilderLifecyclePolicyResourceSelectionRecipe</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyResourceSelectionRecipe[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe">ImagebuilderLifecyclePolicyResourceSelectionRecipe</a>[]

---


### ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference <a name="ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.Initializer"></a>

```typescript
import { imagebuilderLifecyclePolicy } from '@cdktf/provider-aws'

new imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.semanticVersionInput">semanticVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.semanticVersion">semanticVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe">ImagebuilderLifecyclePolicyResourceSelectionRecipe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `semanticVersionInput`<sup>Optional</sup> <a name="semanticVersionInput" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.semanticVersionInput"></a>

```typescript
public readonly semanticVersionInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `semanticVersion`<sup>Required</sup> <a name="semanticVersion" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.semanticVersion"></a>

```typescript
public readonly semanticVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagebuilderLifecyclePolicyResourceSelectionRecipe;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipe">ImagebuilderLifecyclePolicyResourceSelectionRecipe</a>

---



