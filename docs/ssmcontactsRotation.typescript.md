# `ssmcontactsRotation` Submodule <a name="`ssmcontactsRotation` Submodule" id="@cdktf/provider-aws.ssmcontactsRotation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmcontactsRotation <a name="SsmcontactsRotation" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation aws_ssmcontacts_rotation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

new ssmcontactsRotation.SsmcontactsRotation(scope: Construct, id: string, config: SsmcontactsRotationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig">SsmcontactsRotationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig">SsmcontactsRotationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.putRecurrence">putRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.resetRecurrence">resetRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRecurrence` <a name="putRecurrence" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.putRecurrence"></a>

```typescript
public putRecurrence(value: IResolvable | SsmcontactsRotationRecurrence[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.putRecurrence.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>[]

---

##### `resetRecurrence` <a name="resetRecurrence" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.resetRecurrence"></a>

```typescript
public resetRecurrence(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.resetStartTime"></a>

```typescript
public resetStartTime(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SsmcontactsRotation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isConstruct"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

ssmcontactsRotation.SsmcontactsRotation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isTerraformElement"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

ssmcontactsRotation.SsmcontactsRotation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isTerraformResource"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

ssmcontactsRotation.SsmcontactsRotation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SsmcontactsRotation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmcontactsRotation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmcontactsRotation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SsmcontactsRotation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList">SsmcontactsRotationRecurrenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.contactIdsInput">contactIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.recurrenceInput">recurrenceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.timeZoneIdInput">timeZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.contactIds">contactIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.timeZoneId">timeZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.recurrence"></a>

```typescript
public readonly recurrence: SsmcontactsRotationRecurrenceList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList">SsmcontactsRotationRecurrenceList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `contactIdsInput`<sup>Optional</sup> <a name="contactIdsInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.contactIdsInput"></a>

```typescript
public readonly contactIdsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `recurrenceInput`<sup>Optional</sup> <a name="recurrenceInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.recurrenceInput"></a>

```typescript
public readonly recurrenceInput: IResolvable | SsmcontactsRotationRecurrence[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>[]

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeZoneIdInput`<sup>Optional</sup> <a name="timeZoneIdInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.timeZoneIdInput"></a>

```typescript
public readonly timeZoneIdInput: string;
```

- *Type:* string

---

##### `contactIds`<sup>Required</sup> <a name="contactIds" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.contactIds"></a>

```typescript
public readonly contactIds: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeZoneId`<sup>Required</sup> <a name="timeZoneId" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.timeZoneId"></a>

```typescript
public readonly timeZoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmcontactsRotationConfig <a name="SsmcontactsRotationConfig" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

const ssmcontactsRotationConfig: ssmcontactsRotation.SsmcontactsRotationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.contactIds">contactIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#contact_ids SsmcontactsRotation#contact_ids}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#name SsmcontactsRotation#name}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.timeZoneId">timeZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#time_zone_id SsmcontactsRotation#time_zone_id}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.recurrence">recurrence</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>[]</code> | recurrence block. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#start_time SsmcontactsRotation#start_time}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#tags SsmcontactsRotation#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contactIds`<sup>Required</sup> <a name="contactIds" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.contactIds"></a>

```typescript
public readonly contactIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#contact_ids SsmcontactsRotation#contact_ids}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#name SsmcontactsRotation#name}.

---

##### `timeZoneId`<sup>Required</sup> <a name="timeZoneId" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.timeZoneId"></a>

```typescript
public readonly timeZoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#time_zone_id SsmcontactsRotation#time_zone_id}.

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.recurrence"></a>

```typescript
public readonly recurrence: IResolvable | SsmcontactsRotationRecurrence[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>[]

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#recurrence SsmcontactsRotation#recurrence}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#start_time SsmcontactsRotation#start_time}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#tags SsmcontactsRotation#tags}.

---

### SsmcontactsRotationRecurrence <a name="SsmcontactsRotationRecurrence" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

const ssmcontactsRotationRecurrence: ssmcontactsRotation.SsmcontactsRotationRecurrence = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.numberOfOnCalls">numberOfOnCalls</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#number_of_on_calls SsmcontactsRotation#number_of_on_calls}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.recurrenceMultiplier">recurrenceMultiplier</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#recurrence_multiplier SsmcontactsRotation#recurrence_multiplier}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.dailySettings">dailySettings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings">SsmcontactsRotationRecurrenceDailySettings</a>[]</code> | daily_settings block. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.monthlySettings">monthlySettings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>[]</code> | monthly_settings block. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.shiftCoverages">shiftCoverages</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>[]</code> | shift_coverages block. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.weeklySettings">weeklySettings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>[]</code> | weekly_settings block. |

---

##### `numberOfOnCalls`<sup>Required</sup> <a name="numberOfOnCalls" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.numberOfOnCalls"></a>

```typescript
public readonly numberOfOnCalls: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#number_of_on_calls SsmcontactsRotation#number_of_on_calls}.

---

##### `recurrenceMultiplier`<sup>Required</sup> <a name="recurrenceMultiplier" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.recurrenceMultiplier"></a>

```typescript
public readonly recurrenceMultiplier: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#recurrence_multiplier SsmcontactsRotation#recurrence_multiplier}.

---

##### `dailySettings`<sup>Optional</sup> <a name="dailySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.dailySettings"></a>

```typescript
public readonly dailySettings: IResolvable | SsmcontactsRotationRecurrenceDailySettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings">SsmcontactsRotationRecurrenceDailySettings</a>[]

daily_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#daily_settings SsmcontactsRotation#daily_settings}

---

##### `monthlySettings`<sup>Optional</sup> <a name="monthlySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.monthlySettings"></a>

```typescript
public readonly monthlySettings: IResolvable | SsmcontactsRotationRecurrenceMonthlySettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>[]

monthly_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#monthly_settings SsmcontactsRotation#monthly_settings}

---

##### `shiftCoverages`<sup>Optional</sup> <a name="shiftCoverages" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.shiftCoverages"></a>

```typescript
public readonly shiftCoverages: IResolvable | SsmcontactsRotationRecurrenceShiftCoverages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>[]

shift_coverages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#shift_coverages SsmcontactsRotation#shift_coverages}

---

##### `weeklySettings`<sup>Optional</sup> <a name="weeklySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.weeklySettings"></a>

```typescript
public readonly weeklySettings: IResolvable | SsmcontactsRotationRecurrenceWeeklySettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>[]

weekly_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#weekly_settings SsmcontactsRotation#weekly_settings}

---

### SsmcontactsRotationRecurrenceDailySettings <a name="SsmcontactsRotationRecurrenceDailySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

const ssmcontactsRotationRecurrenceDailySettings: ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings.property.hourOfDay">hourOfDay</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings.property.minuteOfHour">minuteOfHour</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}. |

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings.property.hourOfDay"></a>

```typescript
public readonly hourOfDay: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}.

---

##### `minuteOfHour`<sup>Required</sup> <a name="minuteOfHour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings.property.minuteOfHour"></a>

```typescript
public readonly minuteOfHour: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}.

---

### SsmcontactsRotationRecurrenceMonthlySettings <a name="SsmcontactsRotationRecurrenceMonthlySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

const ssmcontactsRotationRecurrenceMonthlySettings: ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings.property.dayOfMonth">dayOfMonth</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#day_of_month SsmcontactsRotation#day_of_month}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings.property.handOffTime">handOffTime</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime">SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime</a>[]</code> | hand_off_time block. |

---

##### `dayOfMonth`<sup>Required</sup> <a name="dayOfMonth" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings.property.dayOfMonth"></a>

```typescript
public readonly dayOfMonth: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#day_of_month SsmcontactsRotation#day_of_month}.

---

##### `handOffTime`<sup>Optional</sup> <a name="handOffTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings.property.handOffTime"></a>

```typescript
public readonly handOffTime: IResolvable | SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime">SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime</a>[]

hand_off_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#hand_off_time SsmcontactsRotation#hand_off_time}

---

### SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime <a name="SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

const ssmcontactsRotationRecurrenceMonthlySettingsHandOffTime: ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime.property.hourOfDay">hourOfDay</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime.property.minuteOfHour">minuteOfHour</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}. |

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime.property.hourOfDay"></a>

```typescript
public readonly hourOfDay: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}.

---

##### `minuteOfHour`<sup>Required</sup> <a name="minuteOfHour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime.property.minuteOfHour"></a>

```typescript
public readonly minuteOfHour: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}.

---

### SsmcontactsRotationRecurrenceShiftCoverages <a name="SsmcontactsRotationRecurrenceShiftCoverages" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

const ssmcontactsRotationRecurrenceShiftCoverages: ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages.property.mapBlockKey">mapBlockKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#map_block_key SsmcontactsRotation#map_block_key}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages.property.coverageTimes">coverageTimes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>[]</code> | coverage_times block. |

---

##### `mapBlockKey`<sup>Required</sup> <a name="mapBlockKey" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages.property.mapBlockKey"></a>

```typescript
public readonly mapBlockKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#map_block_key SsmcontactsRotation#map_block_key}.

---

##### `coverageTimes`<sup>Optional</sup> <a name="coverageTimes" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages.property.coverageTimes"></a>

```typescript
public readonly coverageTimes: IResolvable | SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>[]

coverage_times block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#coverage_times SsmcontactsRotation#coverage_times}

---

### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

const ssmcontactsRotationRecurrenceShiftCoveragesCoverageTimes: ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.property.end">end</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd</a>[]</code> | end block. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.property.start">start</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart</a>[]</code> | start block. |

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.property.end"></a>

```typescript
public readonly end: IResolvable | SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd</a>[]

end block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#end SsmcontactsRotation#end}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.property.start"></a>

```typescript
public readonly start: IResolvable | SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart</a>[]

start block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#start SsmcontactsRotation#start}

---

### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

const ssmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd: ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd.property.hourOfDay">hourOfDay</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd.property.minuteOfHour">minuteOfHour</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}. |

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd.property.hourOfDay"></a>

```typescript
public readonly hourOfDay: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}.

---

##### `minuteOfHour`<sup>Required</sup> <a name="minuteOfHour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd.property.minuteOfHour"></a>

```typescript
public readonly minuteOfHour: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}.

---

### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

const ssmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart: ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart.property.hourOfDay">hourOfDay</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart.property.minuteOfHour">minuteOfHour</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}. |

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart.property.hourOfDay"></a>

```typescript
public readonly hourOfDay: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}.

---

##### `minuteOfHour`<sup>Required</sup> <a name="minuteOfHour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart.property.minuteOfHour"></a>

```typescript
public readonly minuteOfHour: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}.

---

### SsmcontactsRotationRecurrenceWeeklySettings <a name="SsmcontactsRotationRecurrenceWeeklySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

const ssmcontactsRotationRecurrenceWeeklySettings: ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#day_of_week SsmcontactsRotation#day_of_week}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings.property.handOffTime">handOffTime</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime">SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime</a>[]</code> | hand_off_time block. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#day_of_week SsmcontactsRotation#day_of_week}.

---

##### `handOffTime`<sup>Optional</sup> <a name="handOffTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings.property.handOffTime"></a>

```typescript
public readonly handOffTime: IResolvable | SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime">SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime</a>[]

hand_off_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#hand_off_time SsmcontactsRotation#hand_off_time}

---

### SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime <a name="SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

const ssmcontactsRotationRecurrenceWeeklySettingsHandOffTime: ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime.property.hourOfDay">hourOfDay</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime.property.minuteOfHour">minuteOfHour</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}. |

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime.property.hourOfDay"></a>

```typescript
public readonly hourOfDay: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}.

---

##### `minuteOfHour`<sup>Required</sup> <a name="minuteOfHour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime.property.minuteOfHour"></a>

```typescript
public readonly minuteOfHour: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmcontactsRotationRecurrenceDailySettingsList <a name="SsmcontactsRotationRecurrenceDailySettingsList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.get"></a>

```typescript
public get(index: number): SsmcontactsRotationRecurrenceDailySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings">SsmcontactsRotationRecurrenceDailySettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrenceDailySettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings">SsmcontactsRotationRecurrenceDailySettings</a>[]

---


### SsmcontactsRotationRecurrenceDailySettingsOutputReference <a name="SsmcontactsRotationRecurrenceDailySettingsOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.hourOfDayInput">hourOfDayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.minuteOfHourInput">minuteOfHourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.hourOfDay">hourOfDay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.minuteOfHour">minuteOfHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings">SsmcontactsRotationRecurrenceDailySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hourOfDayInput`<sup>Optional</sup> <a name="hourOfDayInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.hourOfDayInput"></a>

```typescript
public readonly hourOfDayInput: number;
```

- *Type:* number

---

##### `minuteOfHourInput`<sup>Optional</sup> <a name="minuteOfHourInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.minuteOfHourInput"></a>

```typescript
public readonly minuteOfHourInput: number;
```

- *Type:* number

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.hourOfDay"></a>

```typescript
public readonly hourOfDay: number;
```

- *Type:* number

---

##### `minuteOfHour`<sup>Required</sup> <a name="minuteOfHour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.minuteOfHour"></a>

```typescript
public readonly minuteOfHour: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrenceDailySettings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings">SsmcontactsRotationRecurrenceDailySettings</a>

---


### SsmcontactsRotationRecurrenceList <a name="SsmcontactsRotationRecurrenceList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.get"></a>

```typescript
public get(index: number): SsmcontactsRotationRecurrenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrence[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>[]

---


### SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList <a name="SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.get"></a>

```typescript
public get(index: number): SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime">SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime">SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime</a>[]

---


### SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference <a name="SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.hourOfDayInput">hourOfDayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.minuteOfHourInput">minuteOfHourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.hourOfDay">hourOfDay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.minuteOfHour">minuteOfHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime">SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hourOfDayInput`<sup>Optional</sup> <a name="hourOfDayInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.hourOfDayInput"></a>

```typescript
public readonly hourOfDayInput: number;
```

- *Type:* number

---

##### `minuteOfHourInput`<sup>Optional</sup> <a name="minuteOfHourInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.minuteOfHourInput"></a>

```typescript
public readonly minuteOfHourInput: number;
```

- *Type:* number

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.hourOfDay"></a>

```typescript
public readonly hourOfDay: number;
```

- *Type:* number

---

##### `minuteOfHour`<sup>Required</sup> <a name="minuteOfHour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.minuteOfHour"></a>

```typescript
public readonly minuteOfHour: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime">SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime</a>

---


### SsmcontactsRotationRecurrenceMonthlySettingsList <a name="SsmcontactsRotationRecurrenceMonthlySettingsList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.get"></a>

```typescript
public get(index: number): SsmcontactsRotationRecurrenceMonthlySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrenceMonthlySettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>[]

---


### SsmcontactsRotationRecurrenceMonthlySettingsOutputReference <a name="SsmcontactsRotationRecurrenceMonthlySettingsOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.putHandOffTime">putHandOffTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resetHandOffTime">resetHandOffTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHandOffTime` <a name="putHandOffTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.putHandOffTime"></a>

```typescript
public putHandOffTime(value: IResolvable | SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.putHandOffTime.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime">SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime</a>[]

---

##### `resetHandOffTime` <a name="resetHandOffTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resetHandOffTime"></a>

```typescript
public resetHandOffTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.handOffTime">handOffTime</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList">SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.dayOfMonthInput">dayOfMonthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.handOffTimeInput">handOffTimeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime">SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.dayOfMonth">dayOfMonth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `handOffTime`<sup>Required</sup> <a name="handOffTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.handOffTime"></a>

```typescript
public readonly handOffTime: SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList">SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList</a>

---

##### `dayOfMonthInput`<sup>Optional</sup> <a name="dayOfMonthInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.dayOfMonthInput"></a>

```typescript
public readonly dayOfMonthInput: number;
```

- *Type:* number

---

##### `handOffTimeInput`<sup>Optional</sup> <a name="handOffTimeInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.handOffTimeInput"></a>

```typescript
public readonly handOffTimeInput: IResolvable | SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime">SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime</a>[]

---

##### `dayOfMonth`<sup>Required</sup> <a name="dayOfMonth" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.dayOfMonth"></a>

```typescript
public readonly dayOfMonth: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrenceMonthlySettings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>

---


### SsmcontactsRotationRecurrenceOutputReference <a name="SsmcontactsRotationRecurrenceOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putDailySettings">putDailySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putMonthlySettings">putMonthlySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putShiftCoverages">putShiftCoverages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putWeeklySettings">putWeeklySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetDailySettings">resetDailySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetMonthlySettings">resetMonthlySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetShiftCoverages">resetShiftCoverages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetWeeklySettings">resetWeeklySettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDailySettings` <a name="putDailySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putDailySettings"></a>

```typescript
public putDailySettings(value: IResolvable | SsmcontactsRotationRecurrenceDailySettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putDailySettings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings">SsmcontactsRotationRecurrenceDailySettings</a>[]

---

##### `putMonthlySettings` <a name="putMonthlySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putMonthlySettings"></a>

```typescript
public putMonthlySettings(value: IResolvable | SsmcontactsRotationRecurrenceMonthlySettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putMonthlySettings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>[]

---

##### `putShiftCoverages` <a name="putShiftCoverages" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putShiftCoverages"></a>

```typescript
public putShiftCoverages(value: IResolvable | SsmcontactsRotationRecurrenceShiftCoverages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putShiftCoverages.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>[]

---

##### `putWeeklySettings` <a name="putWeeklySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putWeeklySettings"></a>

```typescript
public putWeeklySettings(value: IResolvable | SsmcontactsRotationRecurrenceWeeklySettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putWeeklySettings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>[]

---

##### `resetDailySettings` <a name="resetDailySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetDailySettings"></a>

```typescript
public resetDailySettings(): void
```

##### `resetMonthlySettings` <a name="resetMonthlySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetMonthlySettings"></a>

```typescript
public resetMonthlySettings(): void
```

##### `resetShiftCoverages` <a name="resetShiftCoverages" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetShiftCoverages"></a>

```typescript
public resetShiftCoverages(): void
```

##### `resetWeeklySettings` <a name="resetWeeklySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetWeeklySettings"></a>

```typescript
public resetWeeklySettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.dailySettings">dailySettings</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList">SsmcontactsRotationRecurrenceDailySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.monthlySettings">monthlySettings</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList">SsmcontactsRotationRecurrenceMonthlySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.shiftCoverages">shiftCoverages</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList">SsmcontactsRotationRecurrenceShiftCoveragesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.weeklySettings">weeklySettings</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList">SsmcontactsRotationRecurrenceWeeklySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.dailySettingsInput">dailySettingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings">SsmcontactsRotationRecurrenceDailySettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.monthlySettingsInput">monthlySettingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.numberOfOnCallsInput">numberOfOnCallsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.recurrenceMultiplierInput">recurrenceMultiplierInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.shiftCoveragesInput">shiftCoveragesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.weeklySettingsInput">weeklySettingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.numberOfOnCalls">numberOfOnCalls</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.recurrenceMultiplier">recurrenceMultiplier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dailySettings`<sup>Required</sup> <a name="dailySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.dailySettings"></a>

```typescript
public readonly dailySettings: SsmcontactsRotationRecurrenceDailySettingsList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList">SsmcontactsRotationRecurrenceDailySettingsList</a>

---

##### `monthlySettings`<sup>Required</sup> <a name="monthlySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.monthlySettings"></a>

```typescript
public readonly monthlySettings: SsmcontactsRotationRecurrenceMonthlySettingsList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList">SsmcontactsRotationRecurrenceMonthlySettingsList</a>

---

##### `shiftCoverages`<sup>Required</sup> <a name="shiftCoverages" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.shiftCoverages"></a>

```typescript
public readonly shiftCoverages: SsmcontactsRotationRecurrenceShiftCoveragesList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList">SsmcontactsRotationRecurrenceShiftCoveragesList</a>

---

##### `weeklySettings`<sup>Required</sup> <a name="weeklySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.weeklySettings"></a>

```typescript
public readonly weeklySettings: SsmcontactsRotationRecurrenceWeeklySettingsList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList">SsmcontactsRotationRecurrenceWeeklySettingsList</a>

---

##### `dailySettingsInput`<sup>Optional</sup> <a name="dailySettingsInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.dailySettingsInput"></a>

```typescript
public readonly dailySettingsInput: IResolvable | SsmcontactsRotationRecurrenceDailySettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings">SsmcontactsRotationRecurrenceDailySettings</a>[]

---

##### `monthlySettingsInput`<sup>Optional</sup> <a name="monthlySettingsInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.monthlySettingsInput"></a>

```typescript
public readonly monthlySettingsInput: IResolvable | SsmcontactsRotationRecurrenceMonthlySettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>[]

---

##### `numberOfOnCallsInput`<sup>Optional</sup> <a name="numberOfOnCallsInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.numberOfOnCallsInput"></a>

```typescript
public readonly numberOfOnCallsInput: number;
```

- *Type:* number

---

##### `recurrenceMultiplierInput`<sup>Optional</sup> <a name="recurrenceMultiplierInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.recurrenceMultiplierInput"></a>

```typescript
public readonly recurrenceMultiplierInput: number;
```

- *Type:* number

---

##### `shiftCoveragesInput`<sup>Optional</sup> <a name="shiftCoveragesInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.shiftCoveragesInput"></a>

```typescript
public readonly shiftCoveragesInput: IResolvable | SsmcontactsRotationRecurrenceShiftCoverages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>[]

---

##### `weeklySettingsInput`<sup>Optional</sup> <a name="weeklySettingsInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.weeklySettingsInput"></a>

```typescript
public readonly weeklySettingsInput: IResolvable | SsmcontactsRotationRecurrenceWeeklySettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>[]

---

##### `numberOfOnCalls`<sup>Required</sup> <a name="numberOfOnCalls" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.numberOfOnCalls"></a>

```typescript
public readonly numberOfOnCalls: number;
```

- *Type:* number

---

##### `recurrenceMultiplier`<sup>Required</sup> <a name="recurrenceMultiplier" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.recurrenceMultiplier"></a>

```typescript
public readonly recurrenceMultiplier: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrence;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>

---


### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.get"></a>

```typescript
public get(index: number): SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd</a>[]

---


### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.hourOfDayInput">hourOfDayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.minuteOfHourInput">minuteOfHourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.hourOfDay">hourOfDay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.minuteOfHour">minuteOfHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hourOfDayInput`<sup>Optional</sup> <a name="hourOfDayInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.hourOfDayInput"></a>

```typescript
public readonly hourOfDayInput: number;
```

- *Type:* number

---

##### `minuteOfHourInput`<sup>Optional</sup> <a name="minuteOfHourInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.minuteOfHourInput"></a>

```typescript
public readonly minuteOfHourInput: number;
```

- *Type:* number

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.hourOfDay"></a>

```typescript
public readonly hourOfDay: number;
```

- *Type:* number

---

##### `minuteOfHour`<sup>Required</sup> <a name="minuteOfHour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.minuteOfHour"></a>

```typescript
public readonly minuteOfHour: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd</a>

---


### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.get"></a>

```typescript
public get(index: number): SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>[]

---


### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.putEnd">putEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.putStart">putStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resetEnd">resetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resetStart">resetStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnd` <a name="putEnd" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.putEnd"></a>

```typescript
public putEnd(value: IResolvable | SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.putEnd.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd</a>[]

---

##### `putStart` <a name="putStart" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.putStart"></a>

```typescript
public putStart(value: IResolvable | SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.putStart.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart</a>[]

---

##### `resetEnd` <a name="resetEnd" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resetEnd"></a>

```typescript
public resetEnd(): void
```

##### `resetStart` <a name="resetStart" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resetStart"></a>

```typescript
public resetStart(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.end">end</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.start">start</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.endInput">endInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.startInput">startInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.end"></a>

```typescript
public readonly end: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList</a>

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.start"></a>

```typescript
public readonly start: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList</a>

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.endInput"></a>

```typescript
public readonly endInput: IResolvable | SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd</a>[]

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.startInput"></a>

```typescript
public readonly startInput: IResolvable | SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>

---


### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.get"></a>

```typescript
public get(index: number): SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart</a>[]

---


### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.hourOfDayInput">hourOfDayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.minuteOfHourInput">minuteOfHourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.hourOfDay">hourOfDay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.minuteOfHour">minuteOfHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hourOfDayInput`<sup>Optional</sup> <a name="hourOfDayInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.hourOfDayInput"></a>

```typescript
public readonly hourOfDayInput: number;
```

- *Type:* number

---

##### `minuteOfHourInput`<sup>Optional</sup> <a name="minuteOfHourInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.minuteOfHourInput"></a>

```typescript
public readonly minuteOfHourInput: number;
```

- *Type:* number

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.hourOfDay"></a>

```typescript
public readonly hourOfDay: number;
```

- *Type:* number

---

##### `minuteOfHour`<sup>Required</sup> <a name="minuteOfHour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.minuteOfHour"></a>

```typescript
public readonly minuteOfHour: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart</a>

---


### SsmcontactsRotationRecurrenceShiftCoveragesList <a name="SsmcontactsRotationRecurrenceShiftCoveragesList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.get"></a>

```typescript
public get(index: number): SsmcontactsRotationRecurrenceShiftCoveragesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrenceShiftCoverages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>[]

---


### SsmcontactsRotationRecurrenceShiftCoveragesOutputReference <a name="SsmcontactsRotationRecurrenceShiftCoveragesOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.putCoverageTimes">putCoverageTimes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resetCoverageTimes">resetCoverageTimes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCoverageTimes` <a name="putCoverageTimes" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.putCoverageTimes"></a>

```typescript
public putCoverageTimes(value: IResolvable | SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.putCoverageTimes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>[]

---

##### `resetCoverageTimes` <a name="resetCoverageTimes" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resetCoverageTimes"></a>

```typescript
public resetCoverageTimes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.coverageTimes">coverageTimes</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.coverageTimesInput">coverageTimesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.mapBlockKeyInput">mapBlockKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.mapBlockKey">mapBlockKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coverageTimes`<sup>Required</sup> <a name="coverageTimes" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.coverageTimes"></a>

```typescript
public readonly coverageTimes: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList</a>

---

##### `coverageTimesInput`<sup>Optional</sup> <a name="coverageTimesInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.coverageTimesInput"></a>

```typescript
public readonly coverageTimesInput: IResolvable | SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>[]

---

##### `mapBlockKeyInput`<sup>Optional</sup> <a name="mapBlockKeyInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.mapBlockKeyInput"></a>

```typescript
public readonly mapBlockKeyInput: string;
```

- *Type:* string

---

##### `mapBlockKey`<sup>Required</sup> <a name="mapBlockKey" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.mapBlockKey"></a>

```typescript
public readonly mapBlockKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrenceShiftCoverages;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>

---


### SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList <a name="SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.get"></a>

```typescript
public get(index: number): SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime">SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime">SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime</a>[]

---


### SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference <a name="SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.hourOfDayInput">hourOfDayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.minuteOfHourInput">minuteOfHourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.hourOfDay">hourOfDay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.minuteOfHour">minuteOfHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime">SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hourOfDayInput`<sup>Optional</sup> <a name="hourOfDayInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.hourOfDayInput"></a>

```typescript
public readonly hourOfDayInput: number;
```

- *Type:* number

---

##### `minuteOfHourInput`<sup>Optional</sup> <a name="minuteOfHourInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.minuteOfHourInput"></a>

```typescript
public readonly minuteOfHourInput: number;
```

- *Type:* number

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.hourOfDay"></a>

```typescript
public readonly hourOfDay: number;
```

- *Type:* number

---

##### `minuteOfHour`<sup>Required</sup> <a name="minuteOfHour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.minuteOfHour"></a>

```typescript
public readonly minuteOfHour: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime">SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime</a>

---


### SsmcontactsRotationRecurrenceWeeklySettingsList <a name="SsmcontactsRotationRecurrenceWeeklySettingsList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.get"></a>

```typescript
public get(index: number): SsmcontactsRotationRecurrenceWeeklySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrenceWeeklySettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>[]

---


### SsmcontactsRotationRecurrenceWeeklySettingsOutputReference <a name="SsmcontactsRotationRecurrenceWeeklySettingsOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer"></a>

```typescript
import { ssmcontactsRotation } from '@cdktf/provider-aws'

new ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.putHandOffTime">putHandOffTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resetHandOffTime">resetHandOffTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHandOffTime` <a name="putHandOffTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.putHandOffTime"></a>

```typescript
public putHandOffTime(value: IResolvable | SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.putHandOffTime.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime">SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime</a>[]

---

##### `resetHandOffTime` <a name="resetHandOffTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resetHandOffTime"></a>

```typescript
public resetHandOffTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.handOffTime">handOffTime</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList">SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.handOffTimeInput">handOffTimeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime">SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `handOffTime`<sup>Required</sup> <a name="handOffTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.handOffTime"></a>

```typescript
public readonly handOffTime: SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList">SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList</a>

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: string;
```

- *Type:* string

---

##### `handOffTimeInput`<sup>Optional</sup> <a name="handOffTimeInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.handOffTimeInput"></a>

```typescript
public readonly handOffTimeInput: IResolvable | SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime">SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime</a>[]

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmcontactsRotationRecurrenceWeeklySettings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>

---



