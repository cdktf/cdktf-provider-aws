# `sagemakerWorkteam` Submodule <a name="`sagemakerWorkteam` Submodule" id="@cdktf/provider-aws.sagemakerWorkteam"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerWorkteam <a name="SagemakerWorkteam" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam aws_sagemaker_workteam}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/provider-aws'

new sagemakerWorkteam.SagemakerWorkteam(scope: Construct, id: string, config: SagemakerWorkteamConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig">SagemakerWorkteamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig">SagemakerWorkteamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.putMemberDefinition">putMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.putNotificationConfiguration">putNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.putWorkerAccessConfiguration">putWorkerAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetNotificationConfiguration">resetNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetWorkerAccessConfiguration">resetWorkerAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetWorkforceName">resetWorkforceName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMemberDefinition` <a name="putMemberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.putMemberDefinition"></a>

```typescript
public putMemberDefinition(value: IResolvable | SagemakerWorkteamMemberDefinition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.putMemberDefinition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinition">SagemakerWorkteamMemberDefinition</a>[]

---

##### `putNotificationConfiguration` <a name="putNotificationConfiguration" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.putNotificationConfiguration"></a>

```typescript
public putNotificationConfiguration(value: SagemakerWorkteamNotificationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.putNotificationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a>

---

##### `putWorkerAccessConfiguration` <a name="putWorkerAccessConfiguration" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.putWorkerAccessConfiguration"></a>

```typescript
public putWorkerAccessConfiguration(value: SagemakerWorkteamWorkerAccessConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.putWorkerAccessConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfiguration">SagemakerWorkteamWorkerAccessConfiguration</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNotificationConfiguration` <a name="resetNotificationConfiguration" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetNotificationConfiguration"></a>

```typescript
public resetNotificationConfiguration(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetWorkerAccessConfiguration` <a name="resetWorkerAccessConfiguration" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetWorkerAccessConfiguration"></a>

```typescript
public resetWorkerAccessConfiguration(): void
```

##### `resetWorkforceName` <a name="resetWorkforceName" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetWorkforceName"></a>

```typescript
public resetWorkforceName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SagemakerWorkteam resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.isConstruct"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/provider-aws'

sagemakerWorkteam.SagemakerWorkteam.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.isTerraformElement"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/provider-aws'

sagemakerWorkteam.SagemakerWorkteam.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.isTerraformResource"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/provider-aws'

sagemakerWorkteam.SagemakerWorkteam.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/provider-aws'

sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SagemakerWorkteam resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerWorkteam to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerWorkteam that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerWorkteam to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.memberDefinition">memberDefinition</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList">SagemakerWorkteamMemberDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.notificationConfiguration">notificationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference">SagemakerWorkteamNotificationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.subdomain">subdomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.workerAccessConfiguration">workerAccessConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference">SagemakerWorkteamWorkerAccessConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.memberDefinitionInput">memberDefinitionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinition">SagemakerWorkteamMemberDefinition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.notificationConfigurationInput">notificationConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.workerAccessConfigurationInput">workerAccessConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfiguration">SagemakerWorkteamWorkerAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.workforceNameInput">workforceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.workteamNameInput">workteamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.workforceName">workforceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.workteamName">workteamName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `memberDefinition`<sup>Required</sup> <a name="memberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.memberDefinition"></a>

```typescript
public readonly memberDefinition: SagemakerWorkteamMemberDefinitionList;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList">SagemakerWorkteamMemberDefinitionList</a>

---

##### `notificationConfiguration`<sup>Required</sup> <a name="notificationConfiguration" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.notificationConfiguration"></a>

```typescript
public readonly notificationConfiguration: SagemakerWorkteamNotificationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference">SagemakerWorkteamNotificationConfigurationOutputReference</a>

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.subdomain"></a>

```typescript
public readonly subdomain: string;
```

- *Type:* string

---

##### `workerAccessConfiguration`<sup>Required</sup> <a name="workerAccessConfiguration" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.workerAccessConfiguration"></a>

```typescript
public readonly workerAccessConfiguration: SagemakerWorkteamWorkerAccessConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference">SagemakerWorkteamWorkerAccessConfigurationOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberDefinitionInput`<sup>Optional</sup> <a name="memberDefinitionInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.memberDefinitionInput"></a>

```typescript
public readonly memberDefinitionInput: IResolvable | SagemakerWorkteamMemberDefinition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinition">SagemakerWorkteamMemberDefinition</a>[]

---

##### `notificationConfigurationInput`<sup>Optional</sup> <a name="notificationConfigurationInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.notificationConfigurationInput"></a>

```typescript
public readonly notificationConfigurationInput: SagemakerWorkteamNotificationConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workerAccessConfigurationInput`<sup>Optional</sup> <a name="workerAccessConfigurationInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.workerAccessConfigurationInput"></a>

```typescript
public readonly workerAccessConfigurationInput: SagemakerWorkteamWorkerAccessConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfiguration">SagemakerWorkteamWorkerAccessConfiguration</a>

---

##### `workforceNameInput`<sup>Optional</sup> <a name="workforceNameInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.workforceNameInput"></a>

```typescript
public readonly workforceNameInput: string;
```

- *Type:* string

---

##### `workteamNameInput`<sup>Optional</sup> <a name="workteamNameInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.workteamNameInput"></a>

```typescript
public readonly workteamNameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workforceName`<sup>Required</sup> <a name="workforceName" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.workforceName"></a>

```typescript
public readonly workforceName: string;
```

- *Type:* string

---

##### `workteamName`<sup>Required</sup> <a name="workteamName" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.workteamName"></a>

```typescript
public readonly workteamName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerWorkteamConfig <a name="SagemakerWorkteamConfig" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/provider-aws'

const sagemakerWorkteamConfig: sagemakerWorkteam.SagemakerWorkteamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#description SagemakerWorkteam#description}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.memberDefinition">memberDefinition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinition">SagemakerWorkteamMemberDefinition</a>[]</code> | member_definition block. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.workteamName">workteamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#workteam_name SagemakerWorkteam#workteam_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#id SagemakerWorkteam#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.notificationConfiguration">notificationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a></code> | notification_configuration block. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#tags SagemakerWorkteam#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#tags_all SagemakerWorkteam#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.workerAccessConfiguration">workerAccessConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfiguration">SagemakerWorkteamWorkerAccessConfiguration</a></code> | worker_access_configuration block. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.workforceName">workforceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#workforce_name SagemakerWorkteam#workforce_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#description SagemakerWorkteam#description}.

---

##### `memberDefinition`<sup>Required</sup> <a name="memberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.memberDefinition"></a>

```typescript
public readonly memberDefinition: IResolvable | SagemakerWorkteamMemberDefinition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinition">SagemakerWorkteamMemberDefinition</a>[]

member_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#member_definition SagemakerWorkteam#member_definition}

---

##### `workteamName`<sup>Required</sup> <a name="workteamName" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.workteamName"></a>

```typescript
public readonly workteamName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#workteam_name SagemakerWorkteam#workteam_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#id SagemakerWorkteam#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notificationConfiguration`<sup>Optional</sup> <a name="notificationConfiguration" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.notificationConfiguration"></a>

```typescript
public readonly notificationConfiguration: SagemakerWorkteamNotificationConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a>

notification_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#notification_configuration SagemakerWorkteam#notification_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#region SagemakerWorkteam#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#tags SagemakerWorkteam#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#tags_all SagemakerWorkteam#tags_all}.

---

##### `workerAccessConfiguration`<sup>Optional</sup> <a name="workerAccessConfiguration" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.workerAccessConfiguration"></a>

```typescript
public readonly workerAccessConfiguration: SagemakerWorkteamWorkerAccessConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfiguration">SagemakerWorkteamWorkerAccessConfiguration</a>

worker_access_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#worker_access_configuration SagemakerWorkteam#worker_access_configuration}

---

##### `workforceName`<sup>Optional</sup> <a name="workforceName" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.workforceName"></a>

```typescript
public readonly workforceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#workforce_name SagemakerWorkteam#workforce_name}.

---

### SagemakerWorkteamMemberDefinition <a name="SagemakerWorkteamMemberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinition.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/provider-aws'

const sagemakerWorkteamMemberDefinition: sagemakerWorkteam.SagemakerWorkteamMemberDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinition.property.cognitoMemberDefinition">cognitoMemberDefinition</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionCognitoMemberDefinition</a></code> | cognito_member_definition block. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinition.property.oidcMemberDefinition">oidcMemberDefinition</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition">SagemakerWorkteamMemberDefinitionOidcMemberDefinition</a></code> | oidc_member_definition block. |

---

##### `cognitoMemberDefinition`<sup>Optional</sup> <a name="cognitoMemberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinition.property.cognitoMemberDefinition"></a>

```typescript
public readonly cognitoMemberDefinition: SagemakerWorkteamMemberDefinitionCognitoMemberDefinition;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionCognitoMemberDefinition</a>

cognito_member_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#cognito_member_definition SagemakerWorkteam#cognito_member_definition}

---

##### `oidcMemberDefinition`<sup>Optional</sup> <a name="oidcMemberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinition.property.oidcMemberDefinition"></a>

```typescript
public readonly oidcMemberDefinition: SagemakerWorkteamMemberDefinitionOidcMemberDefinition;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition">SagemakerWorkteamMemberDefinitionOidcMemberDefinition</a>

oidc_member_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#oidc_member_definition SagemakerWorkteam#oidc_member_definition}

---

### SagemakerWorkteamMemberDefinitionCognitoMemberDefinition <a name="SagemakerWorkteamMemberDefinitionCognitoMemberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/provider-aws'

const sagemakerWorkteamMemberDefinitionCognitoMemberDefinition: sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#client_id SagemakerWorkteam#client_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition.property.userGroup">userGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#user_group SagemakerWorkteam#user_group}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition.property.userPool">userPool</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#user_pool SagemakerWorkteam#user_pool}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#client_id SagemakerWorkteam#client_id}.

---

##### `userGroup`<sup>Required</sup> <a name="userGroup" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition.property.userGroup"></a>

```typescript
public readonly userGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#user_group SagemakerWorkteam#user_group}.

---

##### `userPool`<sup>Required</sup> <a name="userPool" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition.property.userPool"></a>

```typescript
public readonly userPool: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#user_pool SagemakerWorkteam#user_pool}.

---

### SagemakerWorkteamMemberDefinitionOidcMemberDefinition <a name="SagemakerWorkteamMemberDefinitionOidcMemberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/provider-aws'

const sagemakerWorkteamMemberDefinitionOidcMemberDefinition: sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition.property.groups">groups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#groups SagemakerWorkteam#groups}. |

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#groups SagemakerWorkteam#groups}.

---

### SagemakerWorkteamNotificationConfiguration <a name="SagemakerWorkteamNotificationConfiguration" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/provider-aws'

const sagemakerWorkteamNotificationConfiguration: sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration.property.notificationTopicArn">notificationTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#notification_topic_arn SagemakerWorkteam#notification_topic_arn}. |

---

##### `notificationTopicArn`<sup>Optional</sup> <a name="notificationTopicArn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration.property.notificationTopicArn"></a>

```typescript
public readonly notificationTopicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#notification_topic_arn SagemakerWorkteam#notification_topic_arn}.

---

### SagemakerWorkteamWorkerAccessConfiguration <a name="SagemakerWorkteamWorkerAccessConfiguration" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfiguration.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/provider-aws'

const sagemakerWorkteamWorkerAccessConfiguration: sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfiguration.property.s3Presign">s3Presign</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3Presign">SagemakerWorkteamWorkerAccessConfigurationS3Presign</a></code> | s3_presign block. |

---

##### `s3Presign`<sup>Optional</sup> <a name="s3Presign" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfiguration.property.s3Presign"></a>

```typescript
public readonly s3Presign: SagemakerWorkteamWorkerAccessConfigurationS3Presign;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3Presign">SagemakerWorkteamWorkerAccessConfigurationS3Presign</a>

s3_presign block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#s3_presign SagemakerWorkteam#s3_presign}

---

### SagemakerWorkteamWorkerAccessConfigurationS3Presign <a name="SagemakerWorkteamWorkerAccessConfigurationS3Presign" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3Presign"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3Presign.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/provider-aws'

const sagemakerWorkteamWorkerAccessConfigurationS3Presign: sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3Presign = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3Presign.property.iamPolicyConstraints">iamPolicyConstraints</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints">SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints</a></code> | iam_policy_constraints block. |

---

##### `iamPolicyConstraints`<sup>Optional</sup> <a name="iamPolicyConstraints" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3Presign.property.iamPolicyConstraints"></a>

```typescript
public readonly iamPolicyConstraints: SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints">SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints</a>

iam_policy_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#iam_policy_constraints SagemakerWorkteam#iam_policy_constraints}

---

### SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints <a name="SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/provider-aws'

const sagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints: sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints.property.sourceIp">sourceIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#source_ip SagemakerWorkteam#source_ip}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints.property.vpcSourceIp">vpcSourceIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#vpc_source_ip SagemakerWorkteam#vpc_source_ip}. |

---

##### `sourceIp`<sup>Optional</sup> <a name="sourceIp" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints.property.sourceIp"></a>

```typescript
public readonly sourceIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#source_ip SagemakerWorkteam#source_ip}.

---

##### `vpcSourceIp`<sup>Optional</sup> <a name="vpcSourceIp" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints.property.vpcSourceIp"></a>

```typescript
public readonly vpcSourceIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#vpc_source_ip SagemakerWorkteam#vpc_source_ip}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference <a name="SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/provider-aws'

new sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.userGroupInput">userGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.userPoolInput">userPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.userGroup">userGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.userPool">userPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionCognitoMemberDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `userGroupInput`<sup>Optional</sup> <a name="userGroupInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.userGroupInput"></a>

```typescript
public readonly userGroupInput: string;
```

- *Type:* string

---

##### `userPoolInput`<sup>Optional</sup> <a name="userPoolInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.userPoolInput"></a>

```typescript
public readonly userPoolInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `userGroup`<sup>Required</sup> <a name="userGroup" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.userGroup"></a>

```typescript
public readonly userGroup: string;
```

- *Type:* string

---

##### `userPool`<sup>Required</sup> <a name="userPool" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.userPool"></a>

```typescript
public readonly userPool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerWorkteamMemberDefinitionCognitoMemberDefinition;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionCognitoMemberDefinition</a>

---


### SagemakerWorkteamMemberDefinitionList <a name="SagemakerWorkteamMemberDefinitionList" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/provider-aws'

new sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.get"></a>

```typescript
public get(index: number): SagemakerWorkteamMemberDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinition">SagemakerWorkteamMemberDefinition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerWorkteamMemberDefinition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinition">SagemakerWorkteamMemberDefinition</a>[]

---


### SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference <a name="SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/provider-aws'

new sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.groupsInput">groupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.groups">groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition">SagemakerWorkteamMemberDefinitionOidcMemberDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.groupsInput"></a>

```typescript
public readonly groupsInput: string[];
```

- *Type:* string[]

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerWorkteamMemberDefinitionOidcMemberDefinition;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition">SagemakerWorkteamMemberDefinitionOidcMemberDefinition</a>

---


### SagemakerWorkteamMemberDefinitionOutputReference <a name="SagemakerWorkteamMemberDefinitionOutputReference" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/provider-aws'

new sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.putCognitoMemberDefinition">putCognitoMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.putOidcMemberDefinition">putOidcMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.resetCognitoMemberDefinition">resetCognitoMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.resetOidcMemberDefinition">resetOidcMemberDefinition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCognitoMemberDefinition` <a name="putCognitoMemberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.putCognitoMemberDefinition"></a>

```typescript
public putCognitoMemberDefinition(value: SagemakerWorkteamMemberDefinitionCognitoMemberDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.putCognitoMemberDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionCognitoMemberDefinition</a>

---

##### `putOidcMemberDefinition` <a name="putOidcMemberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.putOidcMemberDefinition"></a>

```typescript
public putOidcMemberDefinition(value: SagemakerWorkteamMemberDefinitionOidcMemberDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.putOidcMemberDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition">SagemakerWorkteamMemberDefinitionOidcMemberDefinition</a>

---

##### `resetCognitoMemberDefinition` <a name="resetCognitoMemberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.resetCognitoMemberDefinition"></a>

```typescript
public resetCognitoMemberDefinition(): void
```

##### `resetOidcMemberDefinition` <a name="resetOidcMemberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.resetOidcMemberDefinition"></a>

```typescript
public resetOidcMemberDefinition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.cognitoMemberDefinition">cognitoMemberDefinition</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference">SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.oidcMemberDefinition">oidcMemberDefinition</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference">SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.cognitoMemberDefinitionInput">cognitoMemberDefinitionInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionCognitoMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.oidcMemberDefinitionInput">oidcMemberDefinitionInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition">SagemakerWorkteamMemberDefinitionOidcMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinition">SagemakerWorkteamMemberDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cognitoMemberDefinition`<sup>Required</sup> <a name="cognitoMemberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.cognitoMemberDefinition"></a>

```typescript
public readonly cognitoMemberDefinition: SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference">SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference</a>

---

##### `oidcMemberDefinition`<sup>Required</sup> <a name="oidcMemberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.oidcMemberDefinition"></a>

```typescript
public readonly oidcMemberDefinition: SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference">SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference</a>

---

##### `cognitoMemberDefinitionInput`<sup>Optional</sup> <a name="cognitoMemberDefinitionInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.cognitoMemberDefinitionInput"></a>

```typescript
public readonly cognitoMemberDefinitionInput: SagemakerWorkteamMemberDefinitionCognitoMemberDefinition;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionCognitoMemberDefinition</a>

---

##### `oidcMemberDefinitionInput`<sup>Optional</sup> <a name="oidcMemberDefinitionInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.oidcMemberDefinitionInput"></a>

```typescript
public readonly oidcMemberDefinitionInput: SagemakerWorkteamMemberDefinitionOidcMemberDefinition;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition">SagemakerWorkteamMemberDefinitionOidcMemberDefinition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerWorkteamMemberDefinition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinition">SagemakerWorkteamMemberDefinition</a>

---


### SagemakerWorkteamNotificationConfigurationOutputReference <a name="SagemakerWorkteamNotificationConfigurationOutputReference" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/provider-aws'

new sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resetNotificationTopicArn">resetNotificationTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNotificationTopicArn` <a name="resetNotificationTopicArn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resetNotificationTopicArn"></a>

```typescript
public resetNotificationTopicArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.notificationTopicArnInput">notificationTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.notificationTopicArn">notificationTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notificationTopicArnInput`<sup>Optional</sup> <a name="notificationTopicArnInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.notificationTopicArnInput"></a>

```typescript
public readonly notificationTopicArnInput: string;
```

- *Type:* string

---

##### `notificationTopicArn`<sup>Required</sup> <a name="notificationTopicArn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.notificationTopicArn"></a>

```typescript
public readonly notificationTopicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerWorkteamNotificationConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a>

---


### SagemakerWorkteamWorkerAccessConfigurationOutputReference <a name="SagemakerWorkteamWorkerAccessConfigurationOutputReference" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/provider-aws'

new sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.putS3Presign">putS3Presign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.resetS3Presign">resetS3Presign</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Presign` <a name="putS3Presign" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.putS3Presign"></a>

```typescript
public putS3Presign(value: SagemakerWorkteamWorkerAccessConfigurationS3Presign): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.putS3Presign.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3Presign">SagemakerWorkteamWorkerAccessConfigurationS3Presign</a>

---

##### `resetS3Presign` <a name="resetS3Presign" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.resetS3Presign"></a>

```typescript
public resetS3Presign(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.property.s3Presign">s3Presign</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference">SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.property.s3PresignInput">s3PresignInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3Presign">SagemakerWorkteamWorkerAccessConfigurationS3Presign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfiguration">SagemakerWorkteamWorkerAccessConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Presign`<sup>Required</sup> <a name="s3Presign" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.property.s3Presign"></a>

```typescript
public readonly s3Presign: SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference">SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference</a>

---

##### `s3PresignInput`<sup>Optional</sup> <a name="s3PresignInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.property.s3PresignInput"></a>

```typescript
public readonly s3PresignInput: SagemakerWorkteamWorkerAccessConfigurationS3Presign;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3Presign">SagemakerWorkteamWorkerAccessConfigurationS3Presign</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerWorkteamWorkerAccessConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfiguration">SagemakerWorkteamWorkerAccessConfiguration</a>

---


### SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference <a name="SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/provider-aws'

new sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.resetSourceIp">resetSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.resetVpcSourceIp">resetVpcSourceIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceIp` <a name="resetSourceIp" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.resetSourceIp"></a>

```typescript
public resetSourceIp(): void
```

##### `resetVpcSourceIp` <a name="resetVpcSourceIp" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.resetVpcSourceIp"></a>

```typescript
public resetVpcSourceIp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.sourceIpInput">sourceIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.vpcSourceIpInput">vpcSourceIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.sourceIp">sourceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.vpcSourceIp">vpcSourceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints">SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceIpInput`<sup>Optional</sup> <a name="sourceIpInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.sourceIpInput"></a>

```typescript
public readonly sourceIpInput: string;
```

- *Type:* string

---

##### `vpcSourceIpInput`<sup>Optional</sup> <a name="vpcSourceIpInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.vpcSourceIpInput"></a>

```typescript
public readonly vpcSourceIpInput: string;
```

- *Type:* string

---

##### `sourceIp`<sup>Required</sup> <a name="sourceIp" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.sourceIp"></a>

```typescript
public readonly sourceIp: string;
```

- *Type:* string

---

##### `vpcSourceIp`<sup>Required</sup> <a name="vpcSourceIp" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.vpcSourceIp"></a>

```typescript
public readonly vpcSourceIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints">SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints</a>

---


### SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference <a name="SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/provider-aws'

new sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.putIamPolicyConstraints">putIamPolicyConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.resetIamPolicyConstraints">resetIamPolicyConstraints</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIamPolicyConstraints` <a name="putIamPolicyConstraints" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.putIamPolicyConstraints"></a>

```typescript
public putIamPolicyConstraints(value: SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.putIamPolicyConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints">SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints</a>

---

##### `resetIamPolicyConstraints` <a name="resetIamPolicyConstraints" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.resetIamPolicyConstraints"></a>

```typescript
public resetIamPolicyConstraints(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.property.iamPolicyConstraints">iamPolicyConstraints</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference">SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.property.iamPolicyConstraintsInput">iamPolicyConstraintsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints">SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3Presign">SagemakerWorkteamWorkerAccessConfigurationS3Presign</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iamPolicyConstraints`<sup>Required</sup> <a name="iamPolicyConstraints" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.property.iamPolicyConstraints"></a>

```typescript
public readonly iamPolicyConstraints: SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference">SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference</a>

---

##### `iamPolicyConstraintsInput`<sup>Optional</sup> <a name="iamPolicyConstraintsInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.property.iamPolicyConstraintsInput"></a>

```typescript
public readonly iamPolicyConstraintsInput: SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints">SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerWorkteamWorkerAccessConfigurationS3Presign;
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3Presign">SagemakerWorkteamWorkerAccessConfigurationS3Presign</a>

---



