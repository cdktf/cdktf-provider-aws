# `networkmanagerDxGatewayAttachment` Submodule <a name="`networkmanagerDxGatewayAttachment` Submodule" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerDxGatewayAttachment <a name="NetworkmanagerDxGatewayAttachment" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/networkmanager_dx_gateway_attachment aws_networkmanager_dx_gateway_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.Initializer"></a>

```typescript
import { networkmanagerDxGatewayAttachment } from '@cdktf/provider-aws'

new networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment(scope: Construct, id: string, config: NetworkmanagerDxGatewayAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig">NetworkmanagerDxGatewayAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig">NetworkmanagerDxGatewayAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkmanagerDxGatewayAttachmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts">NetworkmanagerDxGatewayAttachmentTimeouts</a>

---

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkmanagerDxGatewayAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.isConstruct"></a>

```typescript
import { networkmanagerDxGatewayAttachment } from '@cdktf/provider-aws'

networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.isTerraformElement"></a>

```typescript
import { networkmanagerDxGatewayAttachment } from '@cdktf/provider-aws'

networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.isTerraformResource"></a>

```typescript
import { networkmanagerDxGatewayAttachment } from '@cdktf/provider-aws'

networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.generateConfigForImport"></a>

```typescript
import { networkmanagerDxGatewayAttachment } from '@cdktf/provider-aws'

networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkmanagerDxGatewayAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkmanagerDxGatewayAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkmanagerDxGatewayAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/networkmanager_dx_gateway_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkmanagerDxGatewayAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.attachmentType">attachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.coreNetworkArn">coreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.ownerAccountId">ownerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.segmentName">segmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference">NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.coreNetworkIdInput">coreNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.directConnectGatewayArnInput">directConnectGatewayArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.edgeLocationsInput">edgeLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts">NetworkmanagerDxGatewayAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.coreNetworkId">coreNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.directConnectGatewayArn">directConnectGatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.edgeLocations">edgeLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `attachmentPolicyRuleNumber`<sup>Required</sup> <a name="attachmentPolicyRuleNumber" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.attachmentPolicyRuleNumber"></a>

```typescript
public readonly attachmentPolicyRuleNumber: number;
```

- *Type:* number

---

##### `attachmentType`<sup>Required</sup> <a name="attachmentType" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.attachmentType"></a>

```typescript
public readonly attachmentType: string;
```

- *Type:* string

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.coreNetworkArn"></a>

```typescript
public readonly coreNetworkArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.ownerAccountId"></a>

```typescript
public readonly ownerAccountId: string;
```

- *Type:* string

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference">NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference</a>

---

##### `coreNetworkIdInput`<sup>Optional</sup> <a name="coreNetworkIdInput" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.coreNetworkIdInput"></a>

```typescript
public readonly coreNetworkIdInput: string;
```

- *Type:* string

---

##### `directConnectGatewayArnInput`<sup>Optional</sup> <a name="directConnectGatewayArnInput" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.directConnectGatewayArnInput"></a>

```typescript
public readonly directConnectGatewayArnInput: string;
```

- *Type:* string

---

##### `edgeLocationsInput`<sup>Optional</sup> <a name="edgeLocationsInput" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.edgeLocationsInput"></a>

```typescript
public readonly edgeLocationsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkmanagerDxGatewayAttachmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts">NetworkmanagerDxGatewayAttachmentTimeouts</a>

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.coreNetworkId"></a>

```typescript
public readonly coreNetworkId: string;
```

- *Type:* string

---

##### `directConnectGatewayArn`<sup>Required</sup> <a name="directConnectGatewayArn" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.directConnectGatewayArn"></a>

```typescript
public readonly directConnectGatewayArn: string;
```

- *Type:* string

---

##### `edgeLocations`<sup>Required</sup> <a name="edgeLocations" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.edgeLocations"></a>

```typescript
public readonly edgeLocations: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerDxGatewayAttachmentConfig <a name="NetworkmanagerDxGatewayAttachmentConfig" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.Initializer"></a>

```typescript
import { networkmanagerDxGatewayAttachment } from '@cdktf/provider-aws'

const networkmanagerDxGatewayAttachmentConfig: networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.coreNetworkId">coreNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/networkmanager_dx_gateway_attachment#core_network_id NetworkmanagerDxGatewayAttachment#core_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.directConnectGatewayArn">directConnectGatewayArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/networkmanager_dx_gateway_attachment#direct_connect_gateway_arn NetworkmanagerDxGatewayAttachment#direct_connect_gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.edgeLocations">edgeLocations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/networkmanager_dx_gateway_attachment#edge_locations NetworkmanagerDxGatewayAttachment#edge_locations}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/networkmanager_dx_gateway_attachment#tags NetworkmanagerDxGatewayAttachment#tags}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts">NetworkmanagerDxGatewayAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.coreNetworkId"></a>

```typescript
public readonly coreNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/networkmanager_dx_gateway_attachment#core_network_id NetworkmanagerDxGatewayAttachment#core_network_id}.

---

##### `directConnectGatewayArn`<sup>Required</sup> <a name="directConnectGatewayArn" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.directConnectGatewayArn"></a>

```typescript
public readonly directConnectGatewayArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/networkmanager_dx_gateway_attachment#direct_connect_gateway_arn NetworkmanagerDxGatewayAttachment#direct_connect_gateway_arn}.

---

##### `edgeLocations`<sup>Required</sup> <a name="edgeLocations" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.edgeLocations"></a>

```typescript
public readonly edgeLocations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/networkmanager_dx_gateway_attachment#edge_locations NetworkmanagerDxGatewayAttachment#edge_locations}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/networkmanager_dx_gateway_attachment#tags NetworkmanagerDxGatewayAttachment#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkmanagerDxGatewayAttachmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts">NetworkmanagerDxGatewayAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/networkmanager_dx_gateway_attachment#timeouts NetworkmanagerDxGatewayAttachment#timeouts}

---

### NetworkmanagerDxGatewayAttachmentTimeouts <a name="NetworkmanagerDxGatewayAttachmentTimeouts" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts.Initializer"></a>

```typescript
import { networkmanagerDxGatewayAttachment } from '@cdktf/provider-aws'

const networkmanagerDxGatewayAttachmentTimeouts: networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/networkmanager_dx_gateway_attachment#create NetworkmanagerDxGatewayAttachment#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/networkmanager_dx_gateway_attachment#delete NetworkmanagerDxGatewayAttachment#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/networkmanager_dx_gateway_attachment#update NetworkmanagerDxGatewayAttachment#update}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference <a name="NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkmanagerDxGatewayAttachment } from '@cdktf/provider-aws'

new networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts">NetworkmanagerDxGatewayAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerDxGatewayAttachmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts">NetworkmanagerDxGatewayAttachmentTimeouts</a>

---



