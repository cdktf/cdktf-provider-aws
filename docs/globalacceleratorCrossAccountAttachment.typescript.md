# `globalacceleratorCrossAccountAttachment` Submodule <a name="`globalacceleratorCrossAccountAttachment` Submodule" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorCrossAccountAttachment <a name="GlobalacceleratorCrossAccountAttachment" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/globalaccelerator_cross_account_attachment aws_globalaccelerator_cross_account_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer"></a>

```typescript
import { globalacceleratorCrossAccountAttachment } from '@cdktf/provider-aws'

new globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment(scope: Construct, id: string, config: GlobalacceleratorCrossAccountAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig">GlobalacceleratorCrossAccountAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig">GlobalacceleratorCrossAccountAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.putResource">putResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetPrincipals">resetPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetResource">resetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResource` <a name="putResource" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.putResource"></a>

```typescript
public putResource(value: IResolvable | GlobalacceleratorCrossAccountAttachmentResource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.putResource.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResource">GlobalacceleratorCrossAccountAttachmentResource</a>[]

---

##### `resetPrincipals` <a name="resetPrincipals" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetPrincipals"></a>

```typescript
public resetPrincipals(): void
```

##### `resetResource` <a name="resetResource" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetResource"></a>

```typescript
public resetResource(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GlobalacceleratorCrossAccountAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isConstruct"></a>

```typescript
import { globalacceleratorCrossAccountAttachment } from '@cdktf/provider-aws'

globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformElement"></a>

```typescript
import { globalacceleratorCrossAccountAttachment } from '@cdktf/provider-aws'

globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformResource"></a>

```typescript
import { globalacceleratorCrossAccountAttachment } from '@cdktf/provider-aws'

globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport"></a>

```typescript
import { globalacceleratorCrossAccountAttachment } from '@cdktf/provider-aws'

globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GlobalacceleratorCrossAccountAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlobalacceleratorCrossAccountAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlobalacceleratorCrossAccountAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/globalaccelerator_cross_account_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GlobalacceleratorCrossAccountAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.resource">resource</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList">GlobalacceleratorCrossAccountAttachmentResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.principalsInput">principalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.resourceInput">resourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResource">GlobalacceleratorCrossAccountAttachmentResource</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.principals">principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.resource"></a>

```typescript
public readonly resource: GlobalacceleratorCrossAccountAttachmentResourceList;
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList">GlobalacceleratorCrossAccountAttachmentResourceList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `principalsInput`<sup>Optional</sup> <a name="principalsInput" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.principalsInput"></a>

```typescript
public readonly principalsInput: string[];
```

- *Type:* string[]

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.resourceInput"></a>

```typescript
public readonly resourceInput: IResolvable | GlobalacceleratorCrossAccountAttachmentResource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResource">GlobalacceleratorCrossAccountAttachmentResource</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorCrossAccountAttachmentConfig <a name="GlobalacceleratorCrossAccountAttachmentConfig" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.Initializer"></a>

```typescript
import { globalacceleratorCrossAccountAttachment } from '@cdktf/provider-aws'

const globalacceleratorCrossAccountAttachmentConfig: globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/globalaccelerator_cross_account_attachment#name GlobalacceleratorCrossAccountAttachment#name}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.principals">principals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/globalaccelerator_cross_account_attachment#principals GlobalacceleratorCrossAccountAttachment#principals}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.resource">resource</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResource">GlobalacceleratorCrossAccountAttachmentResource</a>[]</code> | resource block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/globalaccelerator_cross_account_attachment#tags GlobalacceleratorCrossAccountAttachment#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/globalaccelerator_cross_account_attachment#name GlobalacceleratorCrossAccountAttachment#name}.

---

##### `principals`<sup>Optional</sup> <a name="principals" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.principals"></a>

```typescript
public readonly principals: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/globalaccelerator_cross_account_attachment#principals GlobalacceleratorCrossAccountAttachment#principals}.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.resource"></a>

```typescript
public readonly resource: IResolvable | GlobalacceleratorCrossAccountAttachmentResource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResource">GlobalacceleratorCrossAccountAttachmentResource</a>[]

resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/globalaccelerator_cross_account_attachment#resource GlobalacceleratorCrossAccountAttachment#resource}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/globalaccelerator_cross_account_attachment#tags GlobalacceleratorCrossAccountAttachment#tags}.

---

### GlobalacceleratorCrossAccountAttachmentResource <a name="GlobalacceleratorCrossAccountAttachmentResource" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResource.Initializer"></a>

```typescript
import { globalacceleratorCrossAccountAttachment } from '@cdktf/provider-aws'

const globalacceleratorCrossAccountAttachmentResource: globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResource.property.endpointId">endpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/globalaccelerator_cross_account_attachment#endpoint_id GlobalacceleratorCrossAccountAttachment#endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResource.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/globalaccelerator_cross_account_attachment#region GlobalacceleratorCrossAccountAttachment#region}. |

---

##### `endpointId`<sup>Optional</sup> <a name="endpointId" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResource.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/globalaccelerator_cross_account_attachment#endpoint_id GlobalacceleratorCrossAccountAttachment#endpoint_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResource.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/globalaccelerator_cross_account_attachment#region GlobalacceleratorCrossAccountAttachment#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorCrossAccountAttachmentResourceList <a name="GlobalacceleratorCrossAccountAttachmentResourceList" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.Initializer"></a>

```typescript
import { globalacceleratorCrossAccountAttachment } from '@cdktf/provider-aws'

new globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.get"></a>

```typescript
public get(index: number): GlobalacceleratorCrossAccountAttachmentResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResource">GlobalacceleratorCrossAccountAttachmentResource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlobalacceleratorCrossAccountAttachmentResource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResource">GlobalacceleratorCrossAccountAttachmentResource</a>[]

---


### GlobalacceleratorCrossAccountAttachmentResourceOutputReference <a name="GlobalacceleratorCrossAccountAttachmentResourceOutputReference" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.Initializer"></a>

```typescript
import { globalacceleratorCrossAccountAttachment } from '@cdktf/provider-aws'

new globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.resetEndpointId">resetEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpointId` <a name="resetEndpointId" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.resetEndpointId"></a>

```typescript
public resetEndpointId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.endpointIdInput">endpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResource">GlobalacceleratorCrossAccountAttachmentResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointIdInput`<sup>Optional</sup> <a name="endpointIdInput" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.endpointIdInput"></a>

```typescript
public readonly endpointIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlobalacceleratorCrossAccountAttachmentResource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResource">GlobalacceleratorCrossAccountAttachmentResource</a>

---



