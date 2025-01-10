# `devopsguruNotificationChannel` Submodule <a name="`devopsguruNotificationChannel` Submodule" id="@cdktf/provider-aws.devopsguruNotificationChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsguruNotificationChannel <a name="DevopsguruNotificationChannel" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/devopsguru_notification_channel aws_devopsguru_notification_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer"></a>

```typescript
import { devopsguruNotificationChannel } from '@cdktf/provider-aws'

new devopsguruNotificationChannel.DevopsguruNotificationChannel(scope: Construct, id: string, config?: DevopsguruNotificationChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig">DevopsguruNotificationChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig">DevopsguruNotificationChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.putSns">putSns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.resetSns">resetSns</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilters` <a name="putFilters" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.putFilters"></a>

```typescript
public putFilters(value: IResolvable | DevopsguruNotificationChannelFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.putFilters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters">DevopsguruNotificationChannelFilters</a>[]

---

##### `putSns` <a name="putSns" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.putSns"></a>

```typescript
public putSns(value: IResolvable | DevopsguruNotificationChannelSns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.putSns.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns">DevopsguruNotificationChannelSns</a>[]

---

##### `resetFilters` <a name="resetFilters" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.resetFilters"></a>

```typescript
public resetFilters(): void
```

##### `resetSns` <a name="resetSns" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.resetSns"></a>

```typescript
public resetSns(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsguruNotificationChannel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isConstruct"></a>

```typescript
import { devopsguruNotificationChannel } from '@cdktf/provider-aws'

devopsguruNotificationChannel.DevopsguruNotificationChannel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformElement"></a>

```typescript
import { devopsguruNotificationChannel } from '@cdktf/provider-aws'

devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformResource"></a>

```typescript
import { devopsguruNotificationChannel } from '@cdktf/provider-aws'

devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport"></a>

```typescript
import { devopsguruNotificationChannel } from '@cdktf/provider-aws'

devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DevopsguruNotificationChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsguruNotificationChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsguruNotificationChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/devopsguru_notification_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DevopsguruNotificationChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList">DevopsguruNotificationChannelFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.sns">sns</a></code> | <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList">DevopsguruNotificationChannelSnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.filtersInput">filtersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters">DevopsguruNotificationChannelFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.snsInput">snsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns">DevopsguruNotificationChannelSns</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.filters"></a>

```typescript
public readonly filters: DevopsguruNotificationChannelFiltersList;
```

- *Type:* <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList">DevopsguruNotificationChannelFiltersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sns`<sup>Required</sup> <a name="sns" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.sns"></a>

```typescript
public readonly sns: DevopsguruNotificationChannelSnsList;
```

- *Type:* <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList">DevopsguruNotificationChannelSnsList</a>

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.filtersInput"></a>

```typescript
public readonly filtersInput: IResolvable | DevopsguruNotificationChannelFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters">DevopsguruNotificationChannelFilters</a>[]

---

##### `snsInput`<sup>Optional</sup> <a name="snsInput" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.snsInput"></a>

```typescript
public readonly snsInput: IResolvable | DevopsguruNotificationChannelSns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns">DevopsguruNotificationChannelSns</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsguruNotificationChannelConfig <a name="DevopsguruNotificationChannelConfig" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.Initializer"></a>

```typescript
import { devopsguruNotificationChannel } from '@cdktf/provider-aws'

const devopsguruNotificationChannelConfig: devopsguruNotificationChannel.DevopsguruNotificationChannelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.filters">filters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters">DevopsguruNotificationChannelFilters</a>[]</code> | filters block. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.sns">sns</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns">DevopsguruNotificationChannelSns</a>[]</code> | sns block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.filters"></a>

```typescript
public readonly filters: IResolvable | DevopsguruNotificationChannelFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters">DevopsguruNotificationChannelFilters</a>[]

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/devopsguru_notification_channel#filters DevopsguruNotificationChannel#filters}

---

##### `sns`<sup>Optional</sup> <a name="sns" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelConfig.property.sns"></a>

```typescript
public readonly sns: IResolvable | DevopsguruNotificationChannelSns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns">DevopsguruNotificationChannelSns</a>[]

sns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/devopsguru_notification_channel#sns DevopsguruNotificationChannel#sns}

---

### DevopsguruNotificationChannelFilters <a name="DevopsguruNotificationChannelFilters" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters.Initializer"></a>

```typescript
import { devopsguruNotificationChannel } from '@cdktf/provider-aws'

const devopsguruNotificationChannelFilters: devopsguruNotificationChannel.DevopsguruNotificationChannelFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters.property.messageTypes">messageTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/devopsguru_notification_channel#message_types DevopsguruNotificationChannel#message_types}. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters.property.severities">severities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/devopsguru_notification_channel#severities DevopsguruNotificationChannel#severities}. |

---

##### `messageTypes`<sup>Optional</sup> <a name="messageTypes" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters.property.messageTypes"></a>

```typescript
public readonly messageTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/devopsguru_notification_channel#message_types DevopsguruNotificationChannel#message_types}.

---

##### `severities`<sup>Optional</sup> <a name="severities" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters.property.severities"></a>

```typescript
public readonly severities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/devopsguru_notification_channel#severities DevopsguruNotificationChannel#severities}.

---

### DevopsguruNotificationChannelSns <a name="DevopsguruNotificationChannelSns" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns.Initializer"></a>

```typescript
import { devopsguruNotificationChannel } from '@cdktf/provider-aws'

const devopsguruNotificationChannelSns: devopsguruNotificationChannel.DevopsguruNotificationChannelSns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns.property.topicArn">topicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/devopsguru_notification_channel#topic_arn DevopsguruNotificationChannel#topic_arn}. |

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/devopsguru_notification_channel#topic_arn DevopsguruNotificationChannel#topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsguruNotificationChannelFiltersList <a name="DevopsguruNotificationChannelFiltersList" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.Initializer"></a>

```typescript
import { devopsguruNotificationChannel } from '@cdktf/provider-aws'

new devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.get"></a>

```typescript
public get(index: number): DevopsguruNotificationChannelFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters">DevopsguruNotificationChannelFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsguruNotificationChannelFilters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters">DevopsguruNotificationChannelFilters</a>[]

---


### DevopsguruNotificationChannelFiltersOutputReference <a name="DevopsguruNotificationChannelFiltersOutputReference" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer"></a>

```typescript
import { devopsguruNotificationChannel } from '@cdktf/provider-aws'

new devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.resetMessageTypes">resetMessageTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.resetSeverities">resetSeverities</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessageTypes` <a name="resetMessageTypes" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.resetMessageTypes"></a>

```typescript
public resetMessageTypes(): void
```

##### `resetSeverities` <a name="resetSeverities" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.resetSeverities"></a>

```typescript
public resetSeverities(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.messageTypesInput">messageTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.severitiesInput">severitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.messageTypes">messageTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.severities">severities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters">DevopsguruNotificationChannelFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageTypesInput`<sup>Optional</sup> <a name="messageTypesInput" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.messageTypesInput"></a>

```typescript
public readonly messageTypesInput: string[];
```

- *Type:* string[]

---

##### `severitiesInput`<sup>Optional</sup> <a name="severitiesInput" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.severitiesInput"></a>

```typescript
public readonly severitiesInput: string[];
```

- *Type:* string[]

---

##### `messageTypes`<sup>Required</sup> <a name="messageTypes" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.messageTypes"></a>

```typescript
public readonly messageTypes: string[];
```

- *Type:* string[]

---

##### `severities`<sup>Required</sup> <a name="severities" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.severities"></a>

```typescript
public readonly severities: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsguruNotificationChannelFilters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelFilters">DevopsguruNotificationChannelFilters</a>

---


### DevopsguruNotificationChannelSnsList <a name="DevopsguruNotificationChannelSnsList" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.Initializer"></a>

```typescript
import { devopsguruNotificationChannel } from '@cdktf/provider-aws'

new devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.get"></a>

```typescript
public get(index: number): DevopsguruNotificationChannelSnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns">DevopsguruNotificationChannelSns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsguruNotificationChannelSns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns">DevopsguruNotificationChannelSns</a>[]

---


### DevopsguruNotificationChannelSnsOutputReference <a name="DevopsguruNotificationChannelSnsOutputReference" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer"></a>

```typescript
import { devopsguruNotificationChannel } from '@cdktf/provider-aws'

new devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns">DevopsguruNotificationChannelSns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.topicArnInput"></a>

```typescript
public readonly topicArnInput: string;
```

- *Type:* string

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsguruNotificationChannelSns;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.devopsguruNotificationChannel.DevopsguruNotificationChannelSns">DevopsguruNotificationChannelSns</a>

---



