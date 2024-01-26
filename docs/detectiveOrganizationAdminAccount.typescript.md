# `detectiveOrganizationAdminAccount` Submodule <a name="`detectiveOrganizationAdminAccount` Submodule" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DetectiveOrganizationAdminAccount <a name="DetectiveOrganizationAdminAccount" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/detective_organization_admin_account aws_detective_organization_admin_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.Initializer"></a>

```typescript
import { detectiveOrganizationAdminAccount } from '@cdktf/provider-aws'

new detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount(scope: Construct, id: string, config: DetectiveOrganizationAdminAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccountConfig">DetectiveOrganizationAdminAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccountConfig">DetectiveOrganizationAdminAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DetectiveOrganizationAdminAccount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.isConstruct"></a>

```typescript
import { detectiveOrganizationAdminAccount } from '@cdktf/provider-aws'

detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.isTerraformElement"></a>

```typescript
import { detectiveOrganizationAdminAccount } from '@cdktf/provider-aws'

detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.isTerraformResource"></a>

```typescript
import { detectiveOrganizationAdminAccount } from '@cdktf/provider-aws'

detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.generateConfigForImport"></a>

```typescript
import { detectiveOrganizationAdminAccount } from '@cdktf/provider-aws'

detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DetectiveOrganizationAdminAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DetectiveOrganizationAdminAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DetectiveOrganizationAdminAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/detective_organization_admin_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DetectiveOrganizationAdminAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DetectiveOrganizationAdminAccountConfig <a name="DetectiveOrganizationAdminAccountConfig" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccountConfig.Initializer"></a>

```typescript
import { detectiveOrganizationAdminAccount } from '@cdktf/provider-aws'

const detectiveOrganizationAdminAccountConfig: detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccountConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/detective_organization_admin_account#account_id DetectiveOrganizationAdminAccount#account_id}. |
| <code><a href="#@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/detective_organization_admin_account#id DetectiveOrganizationAdminAccount#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccountConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/detective_organization_admin_account#account_id DetectiveOrganizationAdminAccount#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.detectiveOrganizationAdminAccount.DetectiveOrganizationAdminAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/detective_organization_admin_account#id DetectiveOrganizationAdminAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



