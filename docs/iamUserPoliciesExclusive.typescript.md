# `iamUserPoliciesExclusive` Submodule <a name="`iamUserPoliciesExclusive` Submodule" id="@cdktf/provider-aws.iamUserPoliciesExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamUserPoliciesExclusive <a name="IamUserPoliciesExclusive" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/iam_user_policies_exclusive aws_iam_user_policies_exclusive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer"></a>

```typescript
import { iamUserPoliciesExclusive } from '@cdktf/provider-aws'

new iamUserPoliciesExclusive.IamUserPoliciesExclusive(scope: Construct, id: string, config: IamUserPoliciesExclusiveConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig">IamUserPoliciesExclusiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig">IamUserPoliciesExclusiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IamUserPoliciesExclusive resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isConstruct"></a>

```typescript
import { iamUserPoliciesExclusive } from '@cdktf/provider-aws'

iamUserPoliciesExclusive.IamUserPoliciesExclusive.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isTerraformElement"></a>

```typescript
import { iamUserPoliciesExclusive } from '@cdktf/provider-aws'

iamUserPoliciesExclusive.IamUserPoliciesExclusive.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isTerraformResource"></a>

```typescript
import { iamUserPoliciesExclusive } from '@cdktf/provider-aws'

iamUserPoliciesExclusive.IamUserPoliciesExclusive.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.generateConfigForImport"></a>

```typescript
import { iamUserPoliciesExclusive } from '@cdktf/provider-aws'

iamUserPoliciesExclusive.IamUserPoliciesExclusive.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IamUserPoliciesExclusive resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamUserPoliciesExclusive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamUserPoliciesExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/iam_user_policies_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IamUserPoliciesExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.policyNamesInput">policyNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.policyNames">policyNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.userName">userName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `policyNamesInput`<sup>Optional</sup> <a name="policyNamesInput" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.policyNamesInput"></a>

```typescript
public readonly policyNamesInput: string[];
```

- *Type:* string[]

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `policyNames`<sup>Required</sup> <a name="policyNames" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.policyNames"></a>

```typescript
public readonly policyNames: string[];
```

- *Type:* string[]

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusive.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamUserPoliciesExclusiveConfig <a name="IamUserPoliciesExclusiveConfig" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.Initializer"></a>

```typescript
import { iamUserPoliciesExclusive } from '@cdktf/provider-aws'

const iamUserPoliciesExclusiveConfig: iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.policyNames">policyNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/iam_user_policies_exclusive#policy_names IamUserPoliciesExclusive#policy_names}. |
| <code><a href="#@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/iam_user_policies_exclusive#user_name IamUserPoliciesExclusive#user_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `policyNames`<sup>Required</sup> <a name="policyNames" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.policyNames"></a>

```typescript
public readonly policyNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/iam_user_policies_exclusive#policy_names IamUserPoliciesExclusive#policy_names}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-aws.iamUserPoliciesExclusive.IamUserPoliciesExclusiveConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/iam_user_policies_exclusive#user_name IamUserPoliciesExclusive#user_name}.

---



