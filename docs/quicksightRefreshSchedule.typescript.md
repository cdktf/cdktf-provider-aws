# `quicksightRefreshSchedule` Submodule <a name="`quicksightRefreshSchedule` Submodule" id="@cdktf/provider-aws.quicksightRefreshSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightRefreshSchedule <a name="QuicksightRefreshSchedule" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/quicksight_refresh_schedule aws_quicksight_refresh_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer"></a>

```typescript
import { quicksightRefreshSchedule } from '@cdktf/provider-aws'

new quicksightRefreshSchedule.QuicksightRefreshSchedule(scope: Construct, id: string, config: QuicksightRefreshScheduleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig">QuicksightRefreshScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig">QuicksightRefreshScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.resetSchedule">resetSchedule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.putSchedule"></a>

```typescript
public putSchedule(value: IResolvable | QuicksightRefreshScheduleSchedule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.putSchedule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule">QuicksightRefreshScheduleSchedule</a>[]

---

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.resetAwsAccountId"></a>

```typescript
public resetAwsAccountId(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a QuicksightRefreshSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.isConstruct"></a>

```typescript
import { quicksightRefreshSchedule } from '@cdktf/provider-aws'

quicksightRefreshSchedule.QuicksightRefreshSchedule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.isTerraformElement"></a>

```typescript
import { quicksightRefreshSchedule } from '@cdktf/provider-aws'

quicksightRefreshSchedule.QuicksightRefreshSchedule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.isTerraformResource"></a>

```typescript
import { quicksightRefreshSchedule } from '@cdktf/provider-aws'

quicksightRefreshSchedule.QuicksightRefreshSchedule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.generateConfigForImport"></a>

```typescript
import { quicksightRefreshSchedule } from '@cdktf/provider-aws'

quicksightRefreshSchedule.QuicksightRefreshSchedule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a QuicksightRefreshSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuicksightRefreshSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuicksightRefreshSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/quicksight_refresh_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the QuicksightRefreshSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList">QuicksightRefreshScheduleScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.dataSetIdInput">dataSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.scheduleIdInput">scheduleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.scheduleInput">scheduleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule">QuicksightRefreshScheduleSchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.dataSetId">dataSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.scheduleId">scheduleId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.schedule"></a>

```typescript
public readonly schedule: QuicksightRefreshScheduleScheduleList;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList">QuicksightRefreshScheduleScheduleList</a>

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `dataSetIdInput`<sup>Optional</sup> <a name="dataSetIdInput" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.dataSetIdInput"></a>

```typescript
public readonly dataSetIdInput: string;
```

- *Type:* string

---

##### `scheduleIdInput`<sup>Optional</sup> <a name="scheduleIdInput" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.scheduleIdInput"></a>

```typescript
public readonly scheduleIdInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: IResolvable | QuicksightRefreshScheduleSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule">QuicksightRefreshScheduleSchedule</a>[]

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `dataSetId`<sup>Required</sup> <a name="dataSetId" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.dataSetId"></a>

```typescript
public readonly dataSetId: string;
```

- *Type:* string

---

##### `scheduleId`<sup>Required</sup> <a name="scheduleId" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.scheduleId"></a>

```typescript
public readonly scheduleId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightRefreshScheduleConfig <a name="QuicksightRefreshScheduleConfig" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.Initializer"></a>

```typescript
import { quicksightRefreshSchedule } from '@cdktf/provider-aws'

const quicksightRefreshScheduleConfig: quicksightRefreshSchedule.QuicksightRefreshScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.dataSetId">dataSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/quicksight_refresh_schedule#data_set_id QuicksightRefreshSchedule#data_set_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.scheduleId">scheduleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/quicksight_refresh_schedule#schedule_id QuicksightRefreshSchedule#schedule_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/quicksight_refresh_schedule#aws_account_id QuicksightRefreshSchedule#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.schedule">schedule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule">QuicksightRefreshScheduleSchedule</a>[]</code> | schedule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataSetId`<sup>Required</sup> <a name="dataSetId" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.dataSetId"></a>

```typescript
public readonly dataSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/quicksight_refresh_schedule#data_set_id QuicksightRefreshSchedule#data_set_id}.

---

##### `scheduleId`<sup>Required</sup> <a name="scheduleId" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.scheduleId"></a>

```typescript
public readonly scheduleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/quicksight_refresh_schedule#schedule_id QuicksightRefreshSchedule#schedule_id}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/quicksight_refresh_schedule#aws_account_id QuicksightRefreshSchedule#aws_account_id}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.schedule"></a>

```typescript
public readonly schedule: IResolvable | QuicksightRefreshScheduleSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule">QuicksightRefreshScheduleSchedule</a>[]

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/quicksight_refresh_schedule#schedule QuicksightRefreshSchedule#schedule}

---

### QuicksightRefreshScheduleSchedule <a name="QuicksightRefreshScheduleSchedule" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule.Initializer"></a>

```typescript
import { quicksightRefreshSchedule } from '@cdktf/provider-aws'

const quicksightRefreshScheduleSchedule: quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule.property.refreshType">refreshType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/quicksight_refresh_schedule#refresh_type QuicksightRefreshSchedule#refresh_type}. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule.property.scheduleFrequency">scheduleFrequency</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency">QuicksightRefreshScheduleScheduleScheduleFrequency</a>[]</code> | schedule_frequency block. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule.property.startAfterDateTime">startAfterDateTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/quicksight_refresh_schedule#start_after_date_time QuicksightRefreshSchedule#start_after_date_time}. |

---

##### `refreshType`<sup>Required</sup> <a name="refreshType" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule.property.refreshType"></a>

```typescript
public readonly refreshType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/quicksight_refresh_schedule#refresh_type QuicksightRefreshSchedule#refresh_type}.

---

##### `scheduleFrequency`<sup>Optional</sup> <a name="scheduleFrequency" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule.property.scheduleFrequency"></a>

```typescript
public readonly scheduleFrequency: IResolvable | QuicksightRefreshScheduleScheduleScheduleFrequency[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency">QuicksightRefreshScheduleScheduleScheduleFrequency</a>[]

schedule_frequency block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/quicksight_refresh_schedule#schedule_frequency QuicksightRefreshSchedule#schedule_frequency}

---

##### `startAfterDateTime`<sup>Optional</sup> <a name="startAfterDateTime" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule.property.startAfterDateTime"></a>

```typescript
public readonly startAfterDateTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/quicksight_refresh_schedule#start_after_date_time QuicksightRefreshSchedule#start_after_date_time}.

---

### QuicksightRefreshScheduleScheduleScheduleFrequency <a name="QuicksightRefreshScheduleScheduleScheduleFrequency" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.Initializer"></a>

```typescript
import { quicksightRefreshSchedule } from '@cdktf/provider-aws'

const quicksightRefreshScheduleScheduleScheduleFrequency: quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.property.interval">interval</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/quicksight_refresh_schedule#interval QuicksightRefreshSchedule#interval}. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.property.refreshOnDay">refreshOnDay</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay</a>[]</code> | refresh_on_day block. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.property.timeOfTheDay">timeOfTheDay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/quicksight_refresh_schedule#time_of_the_day QuicksightRefreshSchedule#time_of_the_day}. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.property.timezone">timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/quicksight_refresh_schedule#timezone QuicksightRefreshSchedule#timezone}. |

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/quicksight_refresh_schedule#interval QuicksightRefreshSchedule#interval}.

---

##### `refreshOnDay`<sup>Optional</sup> <a name="refreshOnDay" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.property.refreshOnDay"></a>

```typescript
public readonly refreshOnDay: IResolvable | QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay</a>[]

refresh_on_day block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/quicksight_refresh_schedule#refresh_on_day QuicksightRefreshSchedule#refresh_on_day}

---

##### `timeOfTheDay`<sup>Optional</sup> <a name="timeOfTheDay" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.property.timeOfTheDay"></a>

```typescript
public readonly timeOfTheDay: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/quicksight_refresh_schedule#time_of_the_day QuicksightRefreshSchedule#time_of_the_day}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/quicksight_refresh_schedule#timezone QuicksightRefreshSchedule#timezone}.

---

### QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay <a name="QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay.Initializer"></a>

```typescript
import { quicksightRefreshSchedule } from '@cdktf/provider-aws'

const quicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay: quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay.property.dayOfMonth">dayOfMonth</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/quicksight_refresh_schedule#day_of_month QuicksightRefreshSchedule#day_of_month}. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/quicksight_refresh_schedule#day_of_week QuicksightRefreshSchedule#day_of_week}. |

---

##### `dayOfMonth`<sup>Optional</sup> <a name="dayOfMonth" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay.property.dayOfMonth"></a>

```typescript
public readonly dayOfMonth: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/quicksight_refresh_schedule#day_of_month QuicksightRefreshSchedule#day_of_month}.

---

##### `dayOfWeek`<sup>Optional</sup> <a name="dayOfWeek" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/quicksight_refresh_schedule#day_of_week QuicksightRefreshSchedule#day_of_week}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightRefreshScheduleScheduleList <a name="QuicksightRefreshScheduleScheduleList" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList.Initializer"></a>

```typescript
import { quicksightRefreshSchedule } from '@cdktf/provider-aws'

new quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList.get"></a>

```typescript
public get(index: number): QuicksightRefreshScheduleScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule">QuicksightRefreshScheduleSchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightRefreshScheduleSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule">QuicksightRefreshScheduleSchedule</a>[]

---


### QuicksightRefreshScheduleScheduleOutputReference <a name="QuicksightRefreshScheduleScheduleOutputReference" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.Initializer"></a>

```typescript
import { quicksightRefreshSchedule } from '@cdktf/provider-aws'

new quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.putScheduleFrequency">putScheduleFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resetScheduleFrequency">resetScheduleFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resetStartAfterDateTime">resetStartAfterDateTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScheduleFrequency` <a name="putScheduleFrequency" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.putScheduleFrequency"></a>

```typescript
public putScheduleFrequency(value: IResolvable | QuicksightRefreshScheduleScheduleScheduleFrequency[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.putScheduleFrequency.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency">QuicksightRefreshScheduleScheduleScheduleFrequency</a>[]

---

##### `resetScheduleFrequency` <a name="resetScheduleFrequency" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resetScheduleFrequency"></a>

```typescript
public resetScheduleFrequency(): void
```

##### `resetStartAfterDateTime` <a name="resetStartAfterDateTime" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resetStartAfterDateTime"></a>

```typescript
public resetStartAfterDateTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.scheduleFrequency">scheduleFrequency</a></code> | <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList">QuicksightRefreshScheduleScheduleScheduleFrequencyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.refreshTypeInput">refreshTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.scheduleFrequencyInput">scheduleFrequencyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency">QuicksightRefreshScheduleScheduleScheduleFrequency</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.startAfterDateTimeInput">startAfterDateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.refreshType">refreshType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.startAfterDateTime">startAfterDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule">QuicksightRefreshScheduleSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scheduleFrequency`<sup>Required</sup> <a name="scheduleFrequency" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.scheduleFrequency"></a>

```typescript
public readonly scheduleFrequency: QuicksightRefreshScheduleScheduleScheduleFrequencyList;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList">QuicksightRefreshScheduleScheduleScheduleFrequencyList</a>

---

##### `refreshTypeInput`<sup>Optional</sup> <a name="refreshTypeInput" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.refreshTypeInput"></a>

```typescript
public readonly refreshTypeInput: string;
```

- *Type:* string

---

##### `scheduleFrequencyInput`<sup>Optional</sup> <a name="scheduleFrequencyInput" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.scheduleFrequencyInput"></a>

```typescript
public readonly scheduleFrequencyInput: IResolvable | QuicksightRefreshScheduleScheduleScheduleFrequency[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency">QuicksightRefreshScheduleScheduleScheduleFrequency</a>[]

---

##### `startAfterDateTimeInput`<sup>Optional</sup> <a name="startAfterDateTimeInput" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.startAfterDateTimeInput"></a>

```typescript
public readonly startAfterDateTimeInput: string;
```

- *Type:* string

---

##### `refreshType`<sup>Required</sup> <a name="refreshType" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.refreshType"></a>

```typescript
public readonly refreshType: string;
```

- *Type:* string

---

##### `startAfterDateTime`<sup>Required</sup> <a name="startAfterDateTime" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.startAfterDateTime"></a>

```typescript
public readonly startAfterDateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightRefreshScheduleSchedule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule">QuicksightRefreshScheduleSchedule</a>

---


### QuicksightRefreshScheduleScheduleScheduleFrequencyList <a name="QuicksightRefreshScheduleScheduleScheduleFrequencyList" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList.Initializer"></a>

```typescript
import { quicksightRefreshSchedule } from '@cdktf/provider-aws'

new quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList.get"></a>

```typescript
public get(index: number): QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency">QuicksightRefreshScheduleScheduleScheduleFrequency</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightRefreshScheduleScheduleScheduleFrequency[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency">QuicksightRefreshScheduleScheduleScheduleFrequency</a>[]

---


### QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference <a name="QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.Initializer"></a>

```typescript
import { quicksightRefreshSchedule } from '@cdktf/provider-aws'

new quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.putRefreshOnDay">putRefreshOnDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resetRefreshOnDay">resetRefreshOnDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resetTimeOfTheDay">resetTimeOfTheDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRefreshOnDay` <a name="putRefreshOnDay" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.putRefreshOnDay"></a>

```typescript
public putRefreshOnDay(value: IResolvable | QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.putRefreshOnDay.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay</a>[]

---

##### `resetRefreshOnDay` <a name="resetRefreshOnDay" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resetRefreshOnDay"></a>

```typescript
public resetRefreshOnDay(): void
```

##### `resetTimeOfTheDay` <a name="resetTimeOfTheDay" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resetTimeOfTheDay"></a>

```typescript
public resetTimeOfTheDay(): void
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resetTimezone"></a>

```typescript
public resetTimezone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.refreshOnDay">refreshOnDay</a></code> | <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.intervalInput">intervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.refreshOnDayInput">refreshOnDayInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timeOfTheDayInput">timeOfTheDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.interval">interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timeOfTheDay">timeOfTheDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency">QuicksightRefreshScheduleScheduleScheduleFrequency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `refreshOnDay`<sup>Required</sup> <a name="refreshOnDay" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.refreshOnDay"></a>

```typescript
public readonly refreshOnDay: QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList;
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList</a>

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: string;
```

- *Type:* string

---

##### `refreshOnDayInput`<sup>Optional</sup> <a name="refreshOnDayInput" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.refreshOnDayInput"></a>

```typescript
public readonly refreshOnDayInput: IResolvable | QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay</a>[]

---

##### `timeOfTheDayInput`<sup>Optional</sup> <a name="timeOfTheDayInput" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timeOfTheDayInput"></a>

```typescript
public readonly timeOfTheDayInput: string;
```

- *Type:* string

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

---

##### `timeOfTheDay`<sup>Required</sup> <a name="timeOfTheDay" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timeOfTheDay"></a>

```typescript
public readonly timeOfTheDay: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightRefreshScheduleScheduleScheduleFrequency;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency">QuicksightRefreshScheduleScheduleScheduleFrequency</a>

---


### QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList <a name="QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList.Initializer"></a>

```typescript
import { quicksightRefreshSchedule } from '@cdktf/provider-aws'

new quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList.get"></a>

```typescript
public get(index: number): QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay</a>[]

---


### QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference <a name="QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.Initializer"></a>

```typescript
import { quicksightRefreshSchedule } from '@cdktf/provider-aws'

new quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.resetDayOfMonth">resetDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.resetDayOfWeek">resetDayOfWeek</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDayOfMonth` <a name="resetDayOfMonth" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.resetDayOfMonth"></a>

```typescript
public resetDayOfMonth(): void
```

##### `resetDayOfWeek` <a name="resetDayOfWeek" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.resetDayOfWeek"></a>

```typescript
public resetDayOfWeek(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfMonthInput">dayOfMonthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfMonth">dayOfMonth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfMonthInput`<sup>Optional</sup> <a name="dayOfMonthInput" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfMonthInput"></a>

```typescript
public readonly dayOfMonthInput: string;
```

- *Type:* string

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: string;
```

- *Type:* string

---

##### `dayOfMonth`<sup>Required</sup> <a name="dayOfMonth" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfMonth"></a>

```typescript
public readonly dayOfMonth: string;
```

- *Type:* string

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay</a>

---



