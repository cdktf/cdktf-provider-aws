# `pinpointsmsvoicev2ConfigurationSet` Submodule <a name="`pinpointsmsvoicev2ConfigurationSet` Submodule" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pinpointsmsvoicev2ConfigurationSet <a name="Pinpointsmsvoicev2ConfigurationSet" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/pinpointsmsvoicev2_configuration_set aws_pinpointsmsvoicev2_configuration_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.Initializer"></a>

```typescript
import { pinpointsmsvoicev2ConfigurationSet } from '@cdktf/provider-aws'

new pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet(scope: Construct, id: string, config: Pinpointsmsvoicev2ConfigurationSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig">Pinpointsmsvoicev2ConfigurationSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig">Pinpointsmsvoicev2ConfigurationSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.resetDefaultMessageType">resetDefaultMessageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.resetDefaultSenderId">resetDefaultSenderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDefaultMessageType` <a name="resetDefaultMessageType" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.resetDefaultMessageType"></a>

```typescript
public resetDefaultMessageType(): void
```

##### `resetDefaultSenderId` <a name="resetDefaultSenderId" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.resetDefaultSenderId"></a>

```typescript
public resetDefaultSenderId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Pinpointsmsvoicev2ConfigurationSet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.isConstruct"></a>

```typescript
import { pinpointsmsvoicev2ConfigurationSet } from '@cdktf/provider-aws'

pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.isTerraformElement"></a>

```typescript
import { pinpointsmsvoicev2ConfigurationSet } from '@cdktf/provider-aws'

pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.isTerraformResource"></a>

```typescript
import { pinpointsmsvoicev2ConfigurationSet } from '@cdktf/provider-aws'

pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.generateConfigForImport"></a>

```typescript
import { pinpointsmsvoicev2ConfigurationSet } from '@cdktf/provider-aws'

pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Pinpointsmsvoicev2ConfigurationSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Pinpointsmsvoicev2ConfigurationSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Pinpointsmsvoicev2ConfigurationSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/pinpointsmsvoicev2_configuration_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Pinpointsmsvoicev2ConfigurationSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.defaultMessageTypeInput">defaultMessageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.defaultSenderIdInput">defaultSenderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.defaultMessageType">defaultMessageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.defaultSenderId">defaultSenderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `defaultMessageTypeInput`<sup>Optional</sup> <a name="defaultMessageTypeInput" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.defaultMessageTypeInput"></a>

```typescript
public readonly defaultMessageTypeInput: string;
```

- *Type:* string

---

##### `defaultSenderIdInput`<sup>Optional</sup> <a name="defaultSenderIdInput" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.defaultSenderIdInput"></a>

```typescript
public readonly defaultSenderIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultMessageType`<sup>Required</sup> <a name="defaultMessageType" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.defaultMessageType"></a>

```typescript
public readonly defaultMessageType: string;
```

- *Type:* string

---

##### `defaultSenderId`<sup>Required</sup> <a name="defaultSenderId" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.defaultSenderId"></a>

```typescript
public readonly defaultSenderId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Pinpointsmsvoicev2ConfigurationSetConfig <a name="Pinpointsmsvoicev2ConfigurationSetConfig" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig.Initializer"></a>

```typescript
import { pinpointsmsvoicev2ConfigurationSet } from '@cdktf/provider-aws'

const pinpointsmsvoicev2ConfigurationSetConfig: pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/pinpointsmsvoicev2_configuration_set#name Pinpointsmsvoicev2ConfigurationSet#name}. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig.property.defaultMessageType">defaultMessageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/pinpointsmsvoicev2_configuration_set#default_message_type Pinpointsmsvoicev2ConfigurationSet#default_message_type}. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig.property.defaultSenderId">defaultSenderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/pinpointsmsvoicev2_configuration_set#default_sender_id Pinpointsmsvoicev2ConfigurationSet#default_sender_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/pinpointsmsvoicev2_configuration_set#tags Pinpointsmsvoicev2ConfigurationSet#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/pinpointsmsvoicev2_configuration_set#name Pinpointsmsvoicev2ConfigurationSet#name}.

---

##### `defaultMessageType`<sup>Optional</sup> <a name="defaultMessageType" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig.property.defaultMessageType"></a>

```typescript
public readonly defaultMessageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/pinpointsmsvoicev2_configuration_set#default_message_type Pinpointsmsvoicev2ConfigurationSet#default_message_type}.

---

##### `defaultSenderId`<sup>Optional</sup> <a name="defaultSenderId" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig.property.defaultSenderId"></a>

```typescript
public readonly defaultSenderId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/pinpointsmsvoicev2_configuration_set#default_sender_id Pinpointsmsvoicev2ConfigurationSet#default_sender_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/pinpointsmsvoicev2_configuration_set#region Pinpointsmsvoicev2ConfigurationSet#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.pinpointsmsvoicev2ConfigurationSet.Pinpointsmsvoicev2ConfigurationSetConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/pinpointsmsvoicev2_configuration_set#tags Pinpointsmsvoicev2ConfigurationSet#tags}.

---



