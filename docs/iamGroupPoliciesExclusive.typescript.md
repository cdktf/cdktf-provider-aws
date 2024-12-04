# `iamGroupPoliciesExclusive` Submodule <a name="`iamGroupPoliciesExclusive` Submodule" id="@cdktf/provider-aws.iamGroupPoliciesExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamGroupPoliciesExclusive <a name="IamGroupPoliciesExclusive" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iam_group_policies_exclusive aws_iam_group_policies_exclusive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer"></a>

```typescript
import { iamGroupPoliciesExclusive } from '@cdktf/provider-aws'

new iamGroupPoliciesExclusive.IamGroupPoliciesExclusive(scope: Construct, id: string, config: IamGroupPoliciesExclusiveConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig">IamGroupPoliciesExclusiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig">IamGroupPoliciesExclusiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IamGroupPoliciesExclusive resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.isConstruct"></a>

```typescript
import { iamGroupPoliciesExclusive } from '@cdktf/provider-aws'

iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.isTerraformElement"></a>

```typescript
import { iamGroupPoliciesExclusive } from '@cdktf/provider-aws'

iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.isTerraformResource"></a>

```typescript
import { iamGroupPoliciesExclusive } from '@cdktf/provider-aws'

iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.generateConfigForImport"></a>

```typescript
import { iamGroupPoliciesExclusive } from '@cdktf/provider-aws'

iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IamGroupPoliciesExclusive resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamGroupPoliciesExclusive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamGroupPoliciesExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iam_group_policies_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IamGroupPoliciesExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.groupNameInput">groupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.policyNamesInput">policyNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.policyNames">policyNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.groupNameInput"></a>

```typescript
public readonly groupNameInput: string;
```

- *Type:* string

---

##### `policyNamesInput`<sup>Optional</sup> <a name="policyNamesInput" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.policyNamesInput"></a>

```typescript
public readonly policyNamesInput: string[];
```

- *Type:* string[]

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `policyNames`<sup>Required</sup> <a name="policyNames" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.policyNames"></a>

```typescript
public readonly policyNames: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusive.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamGroupPoliciesExclusiveConfig <a name="IamGroupPoliciesExclusiveConfig" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.Initializer"></a>

```typescript
import { iamGroupPoliciesExclusive } from '@cdktf/provider-aws'

const iamGroupPoliciesExclusiveConfig: iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.groupName">groupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iam_group_policies_exclusive#group_name IamGroupPoliciesExclusive#group_name}. |
| <code><a href="#@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.policyNames">policyNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iam_group_policies_exclusive#policy_names IamGroupPoliciesExclusive#policy_names}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iam_group_policies_exclusive#group_name IamGroupPoliciesExclusive#group_name}.

---

##### `policyNames`<sup>Required</sup> <a name="policyNames" id="@cdktf/provider-aws.iamGroupPoliciesExclusive.IamGroupPoliciesExclusiveConfig.property.policyNames"></a>

```typescript
public readonly policyNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/iam_group_policies_exclusive#policy_names IamGroupPoliciesExclusive#policy_names}.

---



