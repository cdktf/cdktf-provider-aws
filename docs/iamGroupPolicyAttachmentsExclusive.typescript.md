# `iamGroupPolicyAttachmentsExclusive` Submodule <a name="`iamGroupPolicyAttachmentsExclusive` Submodule" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamGroupPolicyAttachmentsExclusive <a name="IamGroupPolicyAttachmentsExclusive" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/iam_group_policy_attachments_exclusive aws_iam_group_policy_attachments_exclusive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer"></a>

```typescript
import { iamGroupPolicyAttachmentsExclusive } from '@cdktf/provider-aws'

new iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive(scope: Construct, id: string, config: IamGroupPolicyAttachmentsExclusiveConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig">IamGroupPolicyAttachmentsExclusiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig">IamGroupPolicyAttachmentsExclusiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IamGroupPolicyAttachmentsExclusive resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isConstruct"></a>

```typescript
import { iamGroupPolicyAttachmentsExclusive } from '@cdktf/provider-aws'

iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isTerraformElement"></a>

```typescript
import { iamGroupPolicyAttachmentsExclusive } from '@cdktf/provider-aws'

iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isTerraformResource"></a>

```typescript
import { iamGroupPolicyAttachmentsExclusive } from '@cdktf/provider-aws'

iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.generateConfigForImport"></a>

```typescript
import { iamGroupPolicyAttachmentsExclusive } from '@cdktf/provider-aws'

iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IamGroupPolicyAttachmentsExclusive resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamGroupPolicyAttachmentsExclusive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamGroupPolicyAttachmentsExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/iam_group_policy_attachments_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IamGroupPolicyAttachmentsExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.groupNameInput">groupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.policyArnsInput">policyArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.policyArns">policyArns</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.groupNameInput"></a>

```typescript
public readonly groupNameInput: string;
```

- *Type:* string

---

##### `policyArnsInput`<sup>Optional</sup> <a name="policyArnsInput" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.policyArnsInput"></a>

```typescript
public readonly policyArnsInput: string[];
```

- *Type:* string[]

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `policyArns`<sup>Required</sup> <a name="policyArns" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.policyArns"></a>

```typescript
public readonly policyArns: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamGroupPolicyAttachmentsExclusiveConfig <a name="IamGroupPolicyAttachmentsExclusiveConfig" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.Initializer"></a>

```typescript
import { iamGroupPolicyAttachmentsExclusive } from '@cdktf/provider-aws'

const iamGroupPolicyAttachmentsExclusiveConfig: iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.groupName">groupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/iam_group_policy_attachments_exclusive#group_name IamGroupPolicyAttachmentsExclusive#group_name}. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.policyArns">policyArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/iam_group_policy_attachments_exclusive#policy_arns IamGroupPolicyAttachmentsExclusive#policy_arns}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/iam_group_policy_attachments_exclusive#group_name IamGroupPolicyAttachmentsExclusive#group_name}.

---

##### `policyArns`<sup>Required</sup> <a name="policyArns" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.policyArns"></a>

```typescript
public readonly policyArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.87.0/docs/resources/iam_group_policy_attachments_exclusive#policy_arns IamGroupPolicyAttachmentsExclusive#policy_arns}.

---



