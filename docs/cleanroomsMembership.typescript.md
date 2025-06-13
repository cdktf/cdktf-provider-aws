# `cleanroomsMembership` Submodule <a name="`cleanroomsMembership` Submodule" id="@cdktf/provider-aws.cleanroomsMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsMembership <a name="CleanroomsMembership" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership aws_cleanrooms_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktf/provider-aws'

new cleanroomsMembership.CleanroomsMembership(scope: Construct, id: string, config: CleanroomsMembershipConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig">CleanroomsMembershipConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig">CleanroomsMembershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.putDefaultResultConfiguration">putDefaultResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.putPaymentConfiguration">putPaymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.resetDefaultResultConfiguration">resetDefaultResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.resetPaymentConfiguration">resetPaymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefaultResultConfiguration` <a name="putDefaultResultConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.putDefaultResultConfiguration"></a>

```typescript
public putDefaultResultConfiguration(value: IResolvable | CleanroomsMembershipDefaultResultConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.putDefaultResultConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a>[]

---

##### `putPaymentConfiguration` <a name="putPaymentConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.putPaymentConfiguration"></a>

```typescript
public putPaymentConfiguration(value: IResolvable | CleanroomsMembershipPaymentConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.putPaymentConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a>[]

---

##### `resetDefaultResultConfiguration` <a name="resetDefaultResultConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.resetDefaultResultConfiguration"></a>

```typescript
public resetDefaultResultConfiguration(): void
```

##### `resetPaymentConfiguration` <a name="resetPaymentConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.resetPaymentConfiguration"></a>

```typescript
public resetPaymentConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CleanroomsMembership resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.isConstruct"></a>

```typescript
import { cleanroomsMembership } from '@cdktf/provider-aws'

cleanroomsMembership.CleanroomsMembership.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.isTerraformElement"></a>

```typescript
import { cleanroomsMembership } from '@cdktf/provider-aws'

cleanroomsMembership.CleanroomsMembership.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.isTerraformResource"></a>

```typescript
import { cleanroomsMembership } from '@cdktf/provider-aws'

cleanroomsMembership.CleanroomsMembership.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.generateConfigForImport"></a>

```typescript
import { cleanroomsMembership } from '@cdktf/provider-aws'

cleanroomsMembership.CleanroomsMembership.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CleanroomsMembership resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CleanroomsMembership to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CleanroomsMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CleanroomsMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.collaborationArn">collaborationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.collaborationCreatorAccountId">collaborationCreatorAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.collaborationCreatorDisplayName">collaborationCreatorDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.collaborationName">collaborationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.defaultResultConfiguration">defaultResultConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList">CleanroomsMembershipDefaultResultConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.memberAbilities">memberAbilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.paymentConfiguration">paymentConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList">CleanroomsMembershipPaymentConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.collaborationIdInput">collaborationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.defaultResultConfigurationInput">defaultResultConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.paymentConfigurationInput">paymentConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.queryLogStatusInput">queryLogStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.collaborationId">collaborationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.queryLogStatus">queryLogStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `collaborationArn`<sup>Required</sup> <a name="collaborationArn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.collaborationArn"></a>

```typescript
public readonly collaborationArn: string;
```

- *Type:* string

---

##### `collaborationCreatorAccountId`<sup>Required</sup> <a name="collaborationCreatorAccountId" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.collaborationCreatorAccountId"></a>

```typescript
public readonly collaborationCreatorAccountId: string;
```

- *Type:* string

---

##### `collaborationCreatorDisplayName`<sup>Required</sup> <a name="collaborationCreatorDisplayName" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.collaborationCreatorDisplayName"></a>

```typescript
public readonly collaborationCreatorDisplayName: string;
```

- *Type:* string

---

##### `collaborationName`<sup>Required</sup> <a name="collaborationName" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.collaborationName"></a>

```typescript
public readonly collaborationName: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `defaultResultConfiguration`<sup>Required</sup> <a name="defaultResultConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.defaultResultConfiguration"></a>

```typescript
public readonly defaultResultConfiguration: CleanroomsMembershipDefaultResultConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList">CleanroomsMembershipDefaultResultConfigurationList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `memberAbilities`<sup>Required</sup> <a name="memberAbilities" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.memberAbilities"></a>

```typescript
public readonly memberAbilities: string[];
```

- *Type:* string[]

---

##### `paymentConfiguration`<sup>Required</sup> <a name="paymentConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.paymentConfiguration"></a>

```typescript
public readonly paymentConfiguration: CleanroomsMembershipPaymentConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList">CleanroomsMembershipPaymentConfigurationList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `collaborationIdInput`<sup>Optional</sup> <a name="collaborationIdInput" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.collaborationIdInput"></a>

```typescript
public readonly collaborationIdInput: string;
```

- *Type:* string

---

##### `defaultResultConfigurationInput`<sup>Optional</sup> <a name="defaultResultConfigurationInput" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.defaultResultConfigurationInput"></a>

```typescript
public readonly defaultResultConfigurationInput: IResolvable | CleanroomsMembershipDefaultResultConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a>[]

---

##### `paymentConfigurationInput`<sup>Optional</sup> <a name="paymentConfigurationInput" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.paymentConfigurationInput"></a>

```typescript
public readonly paymentConfigurationInput: IResolvable | CleanroomsMembershipPaymentConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a>[]

---

##### `queryLogStatusInput`<sup>Optional</sup> <a name="queryLogStatusInput" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.queryLogStatusInput"></a>

```typescript
public readonly queryLogStatusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `collaborationId`<sup>Required</sup> <a name="collaborationId" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.collaborationId"></a>

```typescript
public readonly collaborationId: string;
```

- *Type:* string

---

##### `queryLogStatus`<sup>Required</sup> <a name="queryLogStatus" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.queryLogStatus"></a>

```typescript
public readonly queryLogStatus: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsMembershipConfig <a name="CleanroomsMembershipConfig" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktf/provider-aws'

const cleanroomsMembershipConfig: cleanroomsMembership.CleanroomsMembershipConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.collaborationId">collaborationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#collaboration_id CleanroomsMembership#collaboration_id}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.queryLogStatus">queryLogStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#query_log_status CleanroomsMembership#query_log_status}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.defaultResultConfiguration">defaultResultConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a>[]</code> | default_result_configuration block. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.paymentConfiguration">paymentConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a>[]</code> | payment_configuration block. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#tags CleanroomsMembership#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `collaborationId`<sup>Required</sup> <a name="collaborationId" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.collaborationId"></a>

```typescript
public readonly collaborationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#collaboration_id CleanroomsMembership#collaboration_id}.

---

##### `queryLogStatus`<sup>Required</sup> <a name="queryLogStatus" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.queryLogStatus"></a>

```typescript
public readonly queryLogStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#query_log_status CleanroomsMembership#query_log_status}.

---

##### `defaultResultConfiguration`<sup>Optional</sup> <a name="defaultResultConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.defaultResultConfiguration"></a>

```typescript
public readonly defaultResultConfiguration: IResolvable | CleanroomsMembershipDefaultResultConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a>[]

default_result_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#default_result_configuration CleanroomsMembership#default_result_configuration}

---

##### `paymentConfiguration`<sup>Optional</sup> <a name="paymentConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.paymentConfiguration"></a>

```typescript
public readonly paymentConfiguration: IResolvable | CleanroomsMembershipPaymentConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a>[]

payment_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#payment_configuration CleanroomsMembership#payment_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#tags CleanroomsMembership#tags}.

---

### CleanroomsMembershipDefaultResultConfiguration <a name="CleanroomsMembershipDefaultResultConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktf/provider-aws'

const cleanroomsMembershipDefaultResultConfiguration: cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration.property.outputConfiguration">outputConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a>[]</code> | output_configuration block. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#role_arn CleanroomsMembership#role_arn}. |

---

##### `outputConfiguration`<sup>Optional</sup> <a name="outputConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration.property.outputConfiguration"></a>

```typescript
public readonly outputConfiguration: IResolvable | CleanroomsMembershipDefaultResultConfigurationOutputConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a>[]

output_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#output_configuration CleanroomsMembership#output_configuration}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#role_arn CleanroomsMembership#role_arn}.

---

### CleanroomsMembershipDefaultResultConfigurationOutputConfiguration <a name="CleanroomsMembershipDefaultResultConfigurationOutputConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktf/provider-aws'

const cleanroomsMembershipDefaultResultConfigurationOutputConfiguration: cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration.property.s3">s3</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a>[]</code> | s3 block. |

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration.property.s3"></a>

```typescript
public readonly s3: IResolvable | CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a>[]

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#s3 CleanroomsMembership#s3}

---

### CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 <a name="CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktf/provider-aws'

const cleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3: cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#bucket CleanroomsMembership#bucket}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.resultFormat">resultFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#result_format CleanroomsMembership#result_format}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#key_prefix CleanroomsMembership#key_prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#bucket CleanroomsMembership#bucket}.

---

##### `resultFormat`<sup>Required</sup> <a name="resultFormat" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.resultFormat"></a>

```typescript
public readonly resultFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#result_format CleanroomsMembership#result_format}.

---

##### `keyPrefix`<sup>Optional</sup> <a name="keyPrefix" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#key_prefix CleanroomsMembership#key_prefix}.

---

### CleanroomsMembershipPaymentConfiguration <a name="CleanroomsMembershipPaymentConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktf/provider-aws'

const cleanroomsMembershipPaymentConfiguration: cleanroomsMembership.CleanroomsMembershipPaymentConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.property.queryCompute">queryCompute</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute">CleanroomsMembershipPaymentConfigurationQueryCompute</a>[]</code> | query_compute block. |

---

##### `queryCompute`<sup>Optional</sup> <a name="queryCompute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.property.queryCompute"></a>

```typescript
public readonly queryCompute: IResolvable | CleanroomsMembershipPaymentConfigurationQueryCompute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute">CleanroomsMembershipPaymentConfigurationQueryCompute</a>[]

query_compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#query_compute CleanroomsMembership#query_compute}

---

### CleanroomsMembershipPaymentConfigurationQueryCompute <a name="CleanroomsMembershipPaymentConfigurationQueryCompute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktf/provider-aws'

const cleanroomsMembershipPaymentConfigurationQueryCompute: cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}. |

---

##### `isResponsible`<sup>Required</sup> <a name="isResponsible" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsMembershipDefaultResultConfigurationList <a name="CleanroomsMembershipDefaultResultConfigurationList" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktf/provider-aws'

new cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.get"></a>

```typescript
public get(index: number): CleanroomsMembershipDefaultResultConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsMembershipDefaultResultConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a>[]

---


### CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList <a name="CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktf/provider-aws'

new cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.get"></a>

```typescript
public get(index: number): CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsMembershipDefaultResultConfigurationOutputConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a>[]

---


### CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference <a name="CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktf/provider-aws'

new cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.putS3"></a>

```typescript
public putS3(value: IResolvable | CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.putS3.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a>[]

---

##### `resetS3` <a name="resetS3" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resetS3"></a>

```typescript
public resetS3(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.s3Input">s3Input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.s3"></a>

```typescript
public readonly s3: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List;
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: IResolvable | CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsMembershipDefaultResultConfigurationOutputConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a>

---


### CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List <a name="CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktf/provider-aws'

new cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.get"></a>

```typescript
public get(index: number): CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a>[]

---


### CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference <a name="CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktf/provider-aws'

new cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetKeyPrefix">resetKeyPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyPrefix` <a name="resetKeyPrefix" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetKeyPrefix"></a>

```typescript
public resetKeyPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefixInput">keyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.resultFormatInput">resultFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.resultFormat">resultFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyPrefixInput`<sup>Optional</sup> <a name="keyPrefixInput" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefixInput"></a>

```typescript
public readonly keyPrefixInput: string;
```

- *Type:* string

---

##### `resultFormatInput`<sup>Optional</sup> <a name="resultFormatInput" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.resultFormatInput"></a>

```typescript
public readonly resultFormatInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

---

##### `resultFormat`<sup>Required</sup> <a name="resultFormat" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.resultFormat"></a>

```typescript
public readonly resultFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a>

---


### CleanroomsMembershipDefaultResultConfigurationOutputReference <a name="CleanroomsMembershipDefaultResultConfigurationOutputReference" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktf/provider-aws'

new cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.putOutputConfiguration">putOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resetOutputConfiguration">resetOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOutputConfiguration` <a name="putOutputConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.putOutputConfiguration"></a>

```typescript
public putOutputConfiguration(value: IResolvable | CleanroomsMembershipDefaultResultConfigurationOutputConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.putOutputConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a>[]

---

##### `resetOutputConfiguration` <a name="resetOutputConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resetOutputConfiguration"></a>

```typescript
public resetOutputConfiguration(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.outputConfiguration">outputConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.outputConfigurationInput">outputConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outputConfiguration`<sup>Required</sup> <a name="outputConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.outputConfiguration"></a>

```typescript
public readonly outputConfiguration: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList</a>

---

##### `outputConfigurationInput`<sup>Optional</sup> <a name="outputConfigurationInput" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.outputConfigurationInput"></a>

```typescript
public readonly outputConfigurationInput: IResolvable | CleanroomsMembershipDefaultResultConfigurationOutputConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a>[]

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsMembershipDefaultResultConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a>

---


### CleanroomsMembershipPaymentConfigurationList <a name="CleanroomsMembershipPaymentConfigurationList" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktf/provider-aws'

new cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.get"></a>

```typescript
public get(index: number): CleanroomsMembershipPaymentConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsMembershipPaymentConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a>[]

---


### CleanroomsMembershipPaymentConfigurationOutputReference <a name="CleanroomsMembershipPaymentConfigurationOutputReference" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktf/provider-aws'

new cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putQueryCompute">putQueryCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resetQueryCompute">resetQueryCompute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQueryCompute` <a name="putQueryCompute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putQueryCompute"></a>

```typescript
public putQueryCompute(value: IResolvable | CleanroomsMembershipPaymentConfigurationQueryCompute[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putQueryCompute.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute">CleanroomsMembershipPaymentConfigurationQueryCompute</a>[]

---

##### `resetQueryCompute` <a name="resetQueryCompute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resetQueryCompute"></a>

```typescript
public resetQueryCompute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.queryCompute">queryCompute</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList">CleanroomsMembershipPaymentConfigurationQueryComputeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.queryComputeInput">queryComputeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute">CleanroomsMembershipPaymentConfigurationQueryCompute</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryCompute`<sup>Required</sup> <a name="queryCompute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.queryCompute"></a>

```typescript
public readonly queryCompute: CleanroomsMembershipPaymentConfigurationQueryComputeList;
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList">CleanroomsMembershipPaymentConfigurationQueryComputeList</a>

---

##### `queryComputeInput`<sup>Optional</sup> <a name="queryComputeInput" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.queryComputeInput"></a>

```typescript
public readonly queryComputeInput: IResolvable | CleanroomsMembershipPaymentConfigurationQueryCompute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute">CleanroomsMembershipPaymentConfigurationQueryCompute</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsMembershipPaymentConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a>

---


### CleanroomsMembershipPaymentConfigurationQueryComputeList <a name="CleanroomsMembershipPaymentConfigurationQueryComputeList" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktf/provider-aws'

new cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.get"></a>

```typescript
public get(index: number): CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute">CleanroomsMembershipPaymentConfigurationQueryCompute</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsMembershipPaymentConfigurationQueryCompute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute">CleanroomsMembershipPaymentConfigurationQueryCompute</a>[]

---


### CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference <a name="CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktf/provider-aws'

new cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.isResponsibleInput">isResponsibleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute">CleanroomsMembershipPaymentConfigurationQueryCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isResponsibleInput`<sup>Optional</sup> <a name="isResponsibleInput" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.isResponsibleInput"></a>

```typescript
public readonly isResponsibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isResponsible`<sup>Required</sup> <a name="isResponsible" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsMembershipPaymentConfigurationQueryCompute;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute">CleanroomsMembershipPaymentConfigurationQueryCompute</a>

---



