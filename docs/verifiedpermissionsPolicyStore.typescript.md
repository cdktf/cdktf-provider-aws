# `verifiedpermissionsPolicyStore` Submodule <a name="`verifiedpermissionsPolicyStore` Submodule" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VerifiedpermissionsPolicyStore <a name="VerifiedpermissionsPolicyStore" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/verifiedpermissions_policy_store aws_verifiedpermissions_policy_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer"></a>

```typescript
import { verifiedpermissionsPolicyStore } from '@cdktf/provider-aws'

new verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore(scope: Construct, id: string, config?: VerifiedpermissionsPolicyStoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig">VerifiedpermissionsPolicyStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig">VerifiedpermissionsPolicyStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putValidationSettings">putValidationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetValidationSettings">resetValidationSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putValidationSettings` <a name="putValidationSettings" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putValidationSettings"></a>

```typescript
public putValidationSettings(value: IResolvable | VerifiedpermissionsPolicyStoreValidationSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putValidationSettings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetValidationSettings` <a name="resetValidationSettings" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetValidationSettings"></a>

```typescript
public resetValidationSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VerifiedpermissionsPolicyStore resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isConstruct"></a>

```typescript
import { verifiedpermissionsPolicyStore } from '@cdktf/provider-aws'

verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isTerraformElement"></a>

```typescript
import { verifiedpermissionsPolicyStore } from '@cdktf/provider-aws'

verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isTerraformResource"></a>

```typescript
import { verifiedpermissionsPolicyStore } from '@cdktf/provider-aws'

verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.generateConfigForImport"></a>

```typescript
import { verifiedpermissionsPolicyStore } from '@cdktf/provider-aws'

verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VerifiedpermissionsPolicyStore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VerifiedpermissionsPolicyStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VerifiedpermissionsPolicyStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/verifiedpermissions_policy_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VerifiedpermissionsPolicyStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.policyStoreId">policyStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.validationSettings">validationSettings</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList">VerifiedpermissionsPolicyStoreValidationSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.validationSettingsInput">validationSettingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyStoreId`<sup>Required</sup> <a name="policyStoreId" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.policyStoreId"></a>

```typescript
public readonly policyStoreId: string;
```

- *Type:* string

---

##### `validationSettings`<sup>Required</sup> <a name="validationSettings" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.validationSettings"></a>

```typescript
public readonly validationSettings: VerifiedpermissionsPolicyStoreValidationSettingsList;
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList">VerifiedpermissionsPolicyStoreValidationSettingsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `validationSettingsInput`<sup>Optional</sup> <a name="validationSettingsInput" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.validationSettingsInput"></a>

```typescript
public readonly validationSettingsInput: IResolvable | VerifiedpermissionsPolicyStoreValidationSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VerifiedpermissionsPolicyStoreConfig <a name="VerifiedpermissionsPolicyStoreConfig" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.Initializer"></a>

```typescript
import { verifiedpermissionsPolicyStore } from '@cdktf/provider-aws'

const verifiedpermissionsPolicyStoreConfig: verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/verifiedpermissions_policy_store#description VerifiedpermissionsPolicyStore#description}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.validationSettings">validationSettings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a>[]</code> | validation_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/verifiedpermissions_policy_store#description VerifiedpermissionsPolicyStore#description}.

---

##### `validationSettings`<sup>Optional</sup> <a name="validationSettings" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.validationSettings"></a>

```typescript
public readonly validationSettings: IResolvable | VerifiedpermissionsPolicyStoreValidationSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a>[]

validation_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/verifiedpermissions_policy_store#validation_settings VerifiedpermissionsPolicyStore#validation_settings}

---

### VerifiedpermissionsPolicyStoreValidationSettings <a name="VerifiedpermissionsPolicyStoreValidationSettings" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings.Initializer"></a>

```typescript
import { verifiedpermissionsPolicyStore } from '@cdktf/provider-aws'

const verifiedpermissionsPolicyStoreValidationSettings: verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/verifiedpermissions_policy_store#mode VerifiedpermissionsPolicyStore#mode}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/verifiedpermissions_policy_store#mode VerifiedpermissionsPolicyStore#mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### VerifiedpermissionsPolicyStoreValidationSettingsList <a name="VerifiedpermissionsPolicyStoreValidationSettingsList" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList.Initializer"></a>

```typescript
import { verifiedpermissionsPolicyStore } from '@cdktf/provider-aws'

new verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList.get"></a>

```typescript
public get(index: number): VerifiedpermissionsPolicyStoreValidationSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VerifiedpermissionsPolicyStoreValidationSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a>[]

---


### VerifiedpermissionsPolicyStoreValidationSettingsOutputReference <a name="VerifiedpermissionsPolicyStoreValidationSettingsOutputReference" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer"></a>

```typescript
import { verifiedpermissionsPolicyStore } from '@cdktf/provider-aws'

new verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VerifiedpermissionsPolicyStoreValidationSettings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a>

---



