# `shieldApplicationLayerAutomaticResponse` Submodule <a name="`shieldApplicationLayerAutomaticResponse` Submodule" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ShieldApplicationLayerAutomaticResponse <a name="ShieldApplicationLayerAutomaticResponse" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/shield_application_layer_automatic_response aws_shield_application_layer_automatic_response}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer"></a>

```typescript
import { shieldApplicationLayerAutomaticResponse } from '@cdktf/provider-aws'

new shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse(scope: Construct, id: string, config: ShieldApplicationLayerAutomaticResponseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig">ShieldApplicationLayerAutomaticResponseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig">ShieldApplicationLayerAutomaticResponseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.putTimeouts"></a>

```typescript
public putTimeouts(value: ShieldApplicationLayerAutomaticResponseTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a>

---

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ShieldApplicationLayerAutomaticResponse resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isConstruct"></a>

```typescript
import { shieldApplicationLayerAutomaticResponse } from '@cdktf/provider-aws'

shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isTerraformElement"></a>

```typescript
import { shieldApplicationLayerAutomaticResponse } from '@cdktf/provider-aws'

shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isTerraformResource"></a>

```typescript
import { shieldApplicationLayerAutomaticResponse } from '@cdktf/provider-aws'

shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.generateConfigForImport"></a>

```typescript
import { shieldApplicationLayerAutomaticResponse } from '@cdktf/provider-aws'

shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ShieldApplicationLayerAutomaticResponse resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ShieldApplicationLayerAutomaticResponse to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ShieldApplicationLayerAutomaticResponse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/shield_application_layer_automatic_response#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ShieldApplicationLayerAutomaticResponse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference">ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.timeouts"></a>

```typescript
public readonly timeouts: ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference">ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ShieldApplicationLayerAutomaticResponseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ShieldApplicationLayerAutomaticResponseConfig <a name="ShieldApplicationLayerAutomaticResponseConfig" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.Initializer"></a>

```typescript
import { shieldApplicationLayerAutomaticResponse } from '@cdktf/provider-aws'

const shieldApplicationLayerAutomaticResponseConfig: shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/shield_application_layer_automatic_response#action ShieldApplicationLayerAutomaticResponse#action}. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.resourceArn">resourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/shield_application_layer_automatic_response#resource_arn ShieldApplicationLayerAutomaticResponse#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/shield_application_layer_automatic_response#action ShieldApplicationLayerAutomaticResponse#action}.

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/shield_application_layer_automatic_response#resource_arn ShieldApplicationLayerAutomaticResponse#resource_arn}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ShieldApplicationLayerAutomaticResponseTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/shield_application_layer_automatic_response#timeouts ShieldApplicationLayerAutomaticResponse#timeouts}

---

### ShieldApplicationLayerAutomaticResponseTimeouts <a name="ShieldApplicationLayerAutomaticResponseTimeouts" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.Initializer"></a>

```typescript
import { shieldApplicationLayerAutomaticResponse } from '@cdktf/provider-aws'

const shieldApplicationLayerAutomaticResponseTimeouts: shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/shield_application_layer_automatic_response#create ShieldApplicationLayerAutomaticResponse#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/shield_application_layer_automatic_response#delete ShieldApplicationLayerAutomaticResponse#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/shield_application_layer_automatic_response#update ShieldApplicationLayerAutomaticResponse#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference <a name="ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.Initializer"></a>

```typescript
import { shieldApplicationLayerAutomaticResponse } from '@cdktf/provider-aws'

new shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ShieldApplicationLayerAutomaticResponseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a>

---



