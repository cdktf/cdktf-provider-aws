# `iotThingPrincipalAttachment` Submodule <a name="`iotThingPrincipalAttachment` Submodule" id="@cdktf/provider-aws.iotThingPrincipalAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotThingPrincipalAttachment <a name="IotThingPrincipalAttachment" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iot_thing_principal_attachment aws_iot_thing_principal_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer"></a>

```typescript
import { iotThingPrincipalAttachment } from '@cdktf/provider-aws'

new iotThingPrincipalAttachment.IotThingPrincipalAttachment(scope: Construct, id: string, config: IotThingPrincipalAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig">IotThingPrincipalAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig">IotThingPrincipalAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IotThingPrincipalAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isConstruct"></a>

```typescript
import { iotThingPrincipalAttachment } from '@cdktf/provider-aws'

iotThingPrincipalAttachment.IotThingPrincipalAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isTerraformElement"></a>

```typescript
import { iotThingPrincipalAttachment } from '@cdktf/provider-aws'

iotThingPrincipalAttachment.IotThingPrincipalAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isTerraformResource"></a>

```typescript
import { iotThingPrincipalAttachment } from '@cdktf/provider-aws'

iotThingPrincipalAttachment.IotThingPrincipalAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.generateConfigForImport"></a>

```typescript
import { iotThingPrincipalAttachment } from '@cdktf/provider-aws'

iotThingPrincipalAttachment.IotThingPrincipalAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IotThingPrincipalAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotThingPrincipalAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotThingPrincipalAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iot_thing_principal_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IotThingPrincipalAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.thingInput">thingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.thing">thing</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `thingInput`<sup>Optional</sup> <a name="thingInput" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.thingInput"></a>

```typescript
public readonly thingInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `thing`<sup>Required</sup> <a name="thing" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.thing"></a>

```typescript
public readonly thing: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotThingPrincipalAttachmentConfig <a name="IotThingPrincipalAttachmentConfig" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.Initializer"></a>

```typescript
import { iotThingPrincipalAttachment } from '@cdktf/provider-aws'

const iotThingPrincipalAttachmentConfig: iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.principal">principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iot_thing_principal_attachment#principal IotThingPrincipalAttachment#principal}. |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.thing">thing</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iot_thing_principal_attachment#thing IotThingPrincipalAttachment#thing}. |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iot_thing_principal_attachment#id IotThingPrincipalAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iot_thing_principal_attachment#principal IotThingPrincipalAttachment#principal}.

---

##### `thing`<sup>Required</sup> <a name="thing" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.thing"></a>

```typescript
public readonly thing: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iot_thing_principal_attachment#thing IotThingPrincipalAttachment#thing}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iot_thing_principal_attachment#id IotThingPrincipalAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.iotThingPrincipalAttachment.IotThingPrincipalAttachmentConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iot_thing_principal_attachment#region IotThingPrincipalAttachment#region}

---



