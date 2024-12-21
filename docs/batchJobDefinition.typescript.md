# `batchJobDefinition` Submodule <a name="`batchJobDefinition` Submodule" id="@cdktf/provider-aws.batchJobDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchJobDefinition <a name="BatchJobDefinition" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition aws_batch_job_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinition(scope: Construct, id: string, config: BatchJobDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig">BatchJobDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig">BatchJobDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putEksProperties">putEksProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putRetryStrategy">putRetryStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putTimeout">putTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetContainerProperties">resetContainerProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetDeregisterOnNewRevision">resetDeregisterOnNewRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetEcsProperties">resetEcsProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetEksProperties">resetEksProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetNodeProperties">resetNodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetPlatformCapabilities">resetPlatformCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetPropagateTags">resetPropagateTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetRetryStrategy">resetRetryStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetSchedulingPriority">resetSchedulingPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEksProperties` <a name="putEksProperties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putEksProperties"></a>

```typescript
public putEksProperties(value: BatchJobDefinitionEksProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putEksProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksProperties">BatchJobDefinitionEksProperties</a>

---

##### `putRetryStrategy` <a name="putRetryStrategy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putRetryStrategy"></a>

```typescript
public putRetryStrategy(value: BatchJobDefinitionRetryStrategy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putRetryStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a>

---

##### `putTimeout` <a name="putTimeout" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putTimeout"></a>

```typescript
public putTimeout(value: BatchJobDefinitionTimeout): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.putTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a>

---

##### `resetContainerProperties` <a name="resetContainerProperties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetContainerProperties"></a>

```typescript
public resetContainerProperties(): void
```

##### `resetDeregisterOnNewRevision` <a name="resetDeregisterOnNewRevision" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetDeregisterOnNewRevision"></a>

```typescript
public resetDeregisterOnNewRevision(): void
```

##### `resetEcsProperties` <a name="resetEcsProperties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetEcsProperties"></a>

```typescript
public resetEcsProperties(): void
```

##### `resetEksProperties` <a name="resetEksProperties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetEksProperties"></a>

```typescript
public resetEksProperties(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNodeProperties` <a name="resetNodeProperties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetNodeProperties"></a>

```typescript
public resetNodeProperties(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetPlatformCapabilities` <a name="resetPlatformCapabilities" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetPlatformCapabilities"></a>

```typescript
public resetPlatformCapabilities(): void
```

##### `resetPropagateTags` <a name="resetPropagateTags" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetPropagateTags"></a>

```typescript
public resetPropagateTags(): void
```

##### `resetRetryStrategy` <a name="resetRetryStrategy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetRetryStrategy"></a>

```typescript
public resetRetryStrategy(): void
```

##### `resetSchedulingPriority` <a name="resetSchedulingPriority" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetSchedulingPriority"></a>

```typescript
public resetSchedulingPriority(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BatchJobDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isConstruct"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

batchJobDefinition.BatchJobDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isTerraformElement"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

batchJobDefinition.BatchJobDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isTerraformResource"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

batchJobDefinition.BatchJobDefinition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.generateConfigForImport"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

batchJobDefinition.BatchJobDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BatchJobDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BatchJobDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BatchJobDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BatchJobDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.arnPrefix">arnPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.eksProperties">eksProperties</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference">BatchJobDefinitionEksPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.retryStrategy">retryStrategy</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference">BatchJobDefinitionRetryStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.revision">revision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference">BatchJobDefinitionTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.containerPropertiesInput">containerPropertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.deregisterOnNewRevisionInput">deregisterOnNewRevisionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.ecsPropertiesInput">ecsPropertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.eksPropertiesInput">eksPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksProperties">BatchJobDefinitionEksProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.nodePropertiesInput">nodePropertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.platformCapabilitiesInput">platformCapabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.propagateTagsInput">propagateTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.retryStrategyInput">retryStrategyInput</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.schedulingPriorityInput">schedulingPriorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.timeoutInput">timeoutInput</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.containerProperties">containerProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.deregisterOnNewRevision">deregisterOnNewRevision</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.ecsProperties">ecsProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.nodeProperties">nodeProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.platformCapabilities">platformCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.propagateTags">propagateTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.schedulingPriority">schedulingPriority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `arnPrefix`<sup>Required</sup> <a name="arnPrefix" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.arnPrefix"></a>

```typescript
public readonly arnPrefix: string;
```

- *Type:* string

---

##### `eksProperties`<sup>Required</sup> <a name="eksProperties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.eksProperties"></a>

```typescript
public readonly eksProperties: BatchJobDefinitionEksPropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference">BatchJobDefinitionEksPropertiesOutputReference</a>

---

##### `retryStrategy`<sup>Required</sup> <a name="retryStrategy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.retryStrategy"></a>

```typescript
public readonly retryStrategy: BatchJobDefinitionRetryStrategyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference">BatchJobDefinitionRetryStrategyOutputReference</a>

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.timeout"></a>

```typescript
public readonly timeout: BatchJobDefinitionTimeoutOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference">BatchJobDefinitionTimeoutOutputReference</a>

---

##### `containerPropertiesInput`<sup>Optional</sup> <a name="containerPropertiesInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.containerPropertiesInput"></a>

```typescript
public readonly containerPropertiesInput: string;
```

- *Type:* string

---

##### `deregisterOnNewRevisionInput`<sup>Optional</sup> <a name="deregisterOnNewRevisionInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.deregisterOnNewRevisionInput"></a>

```typescript
public readonly deregisterOnNewRevisionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ecsPropertiesInput`<sup>Optional</sup> <a name="ecsPropertiesInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.ecsPropertiesInput"></a>

```typescript
public readonly ecsPropertiesInput: string;
```

- *Type:* string

---

##### `eksPropertiesInput`<sup>Optional</sup> <a name="eksPropertiesInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.eksPropertiesInput"></a>

```typescript
public readonly eksPropertiesInput: BatchJobDefinitionEksProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksProperties">BatchJobDefinitionEksProperties</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodePropertiesInput`<sup>Optional</sup> <a name="nodePropertiesInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.nodePropertiesInput"></a>

```typescript
public readonly nodePropertiesInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `platformCapabilitiesInput`<sup>Optional</sup> <a name="platformCapabilitiesInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.platformCapabilitiesInput"></a>

```typescript
public readonly platformCapabilitiesInput: string[];
```

- *Type:* string[]

---

##### `propagateTagsInput`<sup>Optional</sup> <a name="propagateTagsInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.propagateTagsInput"></a>

```typescript
public readonly propagateTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retryStrategyInput`<sup>Optional</sup> <a name="retryStrategyInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.retryStrategyInput"></a>

```typescript
public readonly retryStrategyInput: BatchJobDefinitionRetryStrategy;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a>

---

##### `schedulingPriorityInput`<sup>Optional</sup> <a name="schedulingPriorityInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.schedulingPriorityInput"></a>

```typescript
public readonly schedulingPriorityInput: number;
```

- *Type:* number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: BatchJobDefinitionTimeout;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `containerProperties`<sup>Required</sup> <a name="containerProperties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.containerProperties"></a>

```typescript
public readonly containerProperties: string;
```

- *Type:* string

---

##### `deregisterOnNewRevision`<sup>Required</sup> <a name="deregisterOnNewRevision" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.deregisterOnNewRevision"></a>

```typescript
public readonly deregisterOnNewRevision: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ecsProperties`<sup>Required</sup> <a name="ecsProperties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.ecsProperties"></a>

```typescript
public readonly ecsProperties: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeProperties`<sup>Required</sup> <a name="nodeProperties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.nodeProperties"></a>

```typescript
public readonly nodeProperties: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `platformCapabilities`<sup>Required</sup> <a name="platformCapabilities" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.platformCapabilities"></a>

```typescript
public readonly platformCapabilities: string[];
```

- *Type:* string[]

---

##### `propagateTags`<sup>Required</sup> <a name="propagateTags" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.propagateTags"></a>

```typescript
public readonly propagateTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schedulingPriority`<sup>Required</sup> <a name="schedulingPriority" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.schedulingPriority"></a>

```typescript
public readonly schedulingPriority: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BatchJobDefinitionConfig <a name="BatchJobDefinitionConfig" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

const batchJobDefinitionConfig: batchJobDefinition.BatchJobDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#name BatchJobDefinition#name}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#type BatchJobDefinition#type}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.containerProperties">containerProperties</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#container_properties BatchJobDefinition#container_properties}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.deregisterOnNewRevision">deregisterOnNewRevision</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#deregister_on_new_revision BatchJobDefinition#deregister_on_new_revision}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.ecsProperties">ecsProperties</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#ecs_properties BatchJobDefinition#ecs_properties}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.eksProperties">eksProperties</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksProperties">BatchJobDefinitionEksProperties</a></code> | eks_properties block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#id BatchJobDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.nodeProperties">nodeProperties</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#node_properties BatchJobDefinition#node_properties}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#parameters BatchJobDefinition#parameters}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.platformCapabilities">platformCapabilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#platform_capabilities BatchJobDefinition#platform_capabilities}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.propagateTags">propagateTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#propagate_tags BatchJobDefinition#propagate_tags}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.retryStrategy">retryStrategy</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a></code> | retry_strategy block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.schedulingPriority">schedulingPriority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#scheduling_priority BatchJobDefinition#scheduling_priority}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#tags BatchJobDefinition#tags}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#tags_all BatchJobDefinition#tags_all}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a></code> | timeout block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#name BatchJobDefinition#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#type BatchJobDefinition#type}.

---

##### `containerProperties`<sup>Optional</sup> <a name="containerProperties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.containerProperties"></a>

```typescript
public readonly containerProperties: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#container_properties BatchJobDefinition#container_properties}.

---

##### `deregisterOnNewRevision`<sup>Optional</sup> <a name="deregisterOnNewRevision" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.deregisterOnNewRevision"></a>

```typescript
public readonly deregisterOnNewRevision: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#deregister_on_new_revision BatchJobDefinition#deregister_on_new_revision}.

---

##### `ecsProperties`<sup>Optional</sup> <a name="ecsProperties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.ecsProperties"></a>

```typescript
public readonly ecsProperties: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#ecs_properties BatchJobDefinition#ecs_properties}.

---

##### `eksProperties`<sup>Optional</sup> <a name="eksProperties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.eksProperties"></a>

```typescript
public readonly eksProperties: BatchJobDefinitionEksProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksProperties">BatchJobDefinitionEksProperties</a>

eks_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#eks_properties BatchJobDefinition#eks_properties}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#id BatchJobDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nodeProperties`<sup>Optional</sup> <a name="nodeProperties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.nodeProperties"></a>

```typescript
public readonly nodeProperties: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#node_properties BatchJobDefinition#node_properties}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#parameters BatchJobDefinition#parameters}.

---

##### `platformCapabilities`<sup>Optional</sup> <a name="platformCapabilities" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.platformCapabilities"></a>

```typescript
public readonly platformCapabilities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#platform_capabilities BatchJobDefinition#platform_capabilities}.

---

##### `propagateTags`<sup>Optional</sup> <a name="propagateTags" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.propagateTags"></a>

```typescript
public readonly propagateTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#propagate_tags BatchJobDefinition#propagate_tags}.

---

##### `retryStrategy`<sup>Optional</sup> <a name="retryStrategy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.retryStrategy"></a>

```typescript
public readonly retryStrategy: BatchJobDefinitionRetryStrategy;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a>

retry_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#retry_strategy BatchJobDefinition#retry_strategy}

---

##### `schedulingPriority`<sup>Optional</sup> <a name="schedulingPriority" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.schedulingPriority"></a>

```typescript
public readonly schedulingPriority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#scheduling_priority BatchJobDefinition#scheduling_priority}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#tags BatchJobDefinition#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#tags_all BatchJobDefinition#tags_all}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionConfig.property.timeout"></a>

```typescript
public readonly timeout: BatchJobDefinitionTimeout;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#timeout BatchJobDefinition#timeout}

---

### BatchJobDefinitionEksProperties <a name="BatchJobDefinitionEksProperties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksProperties.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

const batchJobDefinitionEksProperties: batchJobDefinition.BatchJobDefinitionEksProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksProperties.property.podProperties">podProperties</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties">BatchJobDefinitionEksPropertiesPodProperties</a></code> | pod_properties block. |

---

##### `podProperties`<sup>Required</sup> <a name="podProperties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksProperties.property.podProperties"></a>

```typescript
public readonly podProperties: BatchJobDefinitionEksPropertiesPodProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties">BatchJobDefinitionEksPropertiesPodProperties</a>

pod_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#pod_properties BatchJobDefinition#pod_properties}

---

### BatchJobDefinitionEksPropertiesPodProperties <a name="BatchJobDefinitionEksPropertiesPodProperties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

const batchJobDefinitionEksPropertiesPodProperties: batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.containers">containers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers">BatchJobDefinitionEksPropertiesPodPropertiesContainers</a>[]</code> | containers block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.dnsPolicy">dnsPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#dns_policy BatchJobDefinition#dns_policy}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.hostNetwork">hostNetwork</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#host_network BatchJobDefinition#host_network}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.imagePullSecret">imagePullSecret</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret">BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret</a>[]</code> | image_pull_secret block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.initContainers">initContainers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers">BatchJobDefinitionEksPropertiesPodPropertiesInitContainers</a>[]</code> | init_containers block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadata">BatchJobDefinitionEksPropertiesPodPropertiesMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.serviceAccountName">serviceAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#service_account_name BatchJobDefinition#service_account_name}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.shareProcessNamespace">shareProcessNamespace</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#share_process_namespace BatchJobDefinition#share_process_namespace}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.volumes">volumes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes">BatchJobDefinitionEksPropertiesPodPropertiesVolumes</a>[]</code> | volumes block. |

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.containers"></a>

```typescript
public readonly containers: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesContainers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers">BatchJobDefinitionEksPropertiesPodPropertiesContainers</a>[]

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#containers BatchJobDefinition#containers}

---

##### `dnsPolicy`<sup>Optional</sup> <a name="dnsPolicy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.dnsPolicy"></a>

```typescript
public readonly dnsPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#dns_policy BatchJobDefinition#dns_policy}.

---

##### `hostNetwork`<sup>Optional</sup> <a name="hostNetwork" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.hostNetwork"></a>

```typescript
public readonly hostNetwork: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#host_network BatchJobDefinition#host_network}.

---

##### `imagePullSecret`<sup>Optional</sup> <a name="imagePullSecret" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.imagePullSecret"></a>

```typescript
public readonly imagePullSecret: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret">BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret</a>[]

image_pull_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#image_pull_secret BatchJobDefinition#image_pull_secret}

---

##### `initContainers`<sup>Optional</sup> <a name="initContainers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.initContainers"></a>

```typescript
public readonly initContainers: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesInitContainers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers">BatchJobDefinitionEksPropertiesPodPropertiesInitContainers</a>[]

init_containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#init_containers BatchJobDefinition#init_containers}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.metadata"></a>

```typescript
public readonly metadata: BatchJobDefinitionEksPropertiesPodPropertiesMetadata;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadata">BatchJobDefinitionEksPropertiesPodPropertiesMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#metadata BatchJobDefinition#metadata}

---

##### `serviceAccountName`<sup>Optional</sup> <a name="serviceAccountName" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.serviceAccountName"></a>

```typescript
public readonly serviceAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#service_account_name BatchJobDefinition#service_account_name}.

---

##### `shareProcessNamespace`<sup>Optional</sup> <a name="shareProcessNamespace" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.shareProcessNamespace"></a>

```typescript
public readonly shareProcessNamespace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#share_process_namespace BatchJobDefinition#share_process_namespace}.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties.property.volumes"></a>

```typescript
public readonly volumes: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes">BatchJobDefinitionEksPropertiesPodPropertiesVolumes</a>[]

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#volumes BatchJobDefinition#volumes}

---

### BatchJobDefinitionEksPropertiesPodPropertiesContainers <a name="BatchJobDefinitionEksPropertiesPodPropertiesContainers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

const batchJobDefinitionEksPropertiesPodPropertiesContainers: batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.image">image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#image BatchJobDefinition#image}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.args">args</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#args BatchJobDefinition#args}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.command">command</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#command BatchJobDefinition#command}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.env">env</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv</a>[]</code> | env block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.imagePullPolicy">imagePullPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#image_pull_policy BatchJobDefinition#image_pull_policy}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#name BatchJobDefinition#name}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources">BatchJobDefinitionEksPropertiesPodPropertiesContainersResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.securityContext">securityContext</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext">BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext</a></code> | security_context block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.volumeMounts">volumeMounts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts</a>[]</code> | volume_mounts block. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#image BatchJobDefinition#image}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#args BatchJobDefinition#args}.

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#command BatchJobDefinition#command}.

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.env"></a>

```typescript
public readonly env: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv</a>[]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#env BatchJobDefinition#env}

---

##### `imagePullPolicy`<sup>Optional</sup> <a name="imagePullPolicy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.imagePullPolicy"></a>

```typescript
public readonly imagePullPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#image_pull_policy BatchJobDefinition#image_pull_policy}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#name BatchJobDefinition#name}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.resources"></a>

```typescript
public readonly resources: BatchJobDefinitionEksPropertiesPodPropertiesContainersResources;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources">BatchJobDefinitionEksPropertiesPodPropertiesContainersResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#resources BatchJobDefinition#resources}

---

##### `securityContext`<sup>Optional</sup> <a name="securityContext" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.securityContext"></a>

```typescript
public readonly securityContext: BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext">BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext</a>

security_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#security_context BatchJobDefinition#security_context}

---

##### `volumeMounts`<sup>Optional</sup> <a name="volumeMounts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts</a>[]

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#volume_mounts BatchJobDefinition#volume_mounts}

---

### BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv <a name="BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

const batchJobDefinitionEksPropertiesPodPropertiesContainersEnv: batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#name BatchJobDefinition#name}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#value BatchJobDefinition#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#name BatchJobDefinition#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#value BatchJobDefinition#value}.

---

### BatchJobDefinitionEksPropertiesPodPropertiesContainersResources <a name="BatchJobDefinitionEksPropertiesPodPropertiesContainersResources" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

const batchJobDefinitionEksPropertiesPodPropertiesContainersResources: batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources.property.limits">limits</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#limits BatchJobDefinition#limits}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources.property.requests">requests</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#requests BatchJobDefinition#requests}. |

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources.property.limits"></a>

```typescript
public readonly limits: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#limits BatchJobDefinition#limits}.

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources.property.requests"></a>

```typescript
public readonly requests: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#requests BatchJobDefinition#requests}.

---

### BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext <a name="BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

const batchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext: batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext.property.privileged">privileged</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#privileged BatchJobDefinition#privileged}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext.property.readOnlyRootFileSystem">readOnlyRootFileSystem</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#read_only_root_file_system BatchJobDefinition#read_only_root_file_system}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext.property.runAsGroup">runAsGroup</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#run_as_group BatchJobDefinition#run_as_group}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext.property.runAsNonRoot">runAsNonRoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#run_as_non_root BatchJobDefinition#run_as_non_root}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext.property.runAsUser">runAsUser</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#run_as_user BatchJobDefinition#run_as_user}. |

---

##### `privileged`<sup>Optional</sup> <a name="privileged" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext.property.privileged"></a>

```typescript
public readonly privileged: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#privileged BatchJobDefinition#privileged}.

---

##### `readOnlyRootFileSystem`<sup>Optional</sup> <a name="readOnlyRootFileSystem" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext.property.readOnlyRootFileSystem"></a>

```typescript
public readonly readOnlyRootFileSystem: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#read_only_root_file_system BatchJobDefinition#read_only_root_file_system}.

---

##### `runAsGroup`<sup>Optional</sup> <a name="runAsGroup" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext.property.runAsGroup"></a>

```typescript
public readonly runAsGroup: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#run_as_group BatchJobDefinition#run_as_group}.

---

##### `runAsNonRoot`<sup>Optional</sup> <a name="runAsNonRoot" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext.property.runAsNonRoot"></a>

```typescript
public readonly runAsNonRoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#run_as_non_root BatchJobDefinition#run_as_non_root}.

---

##### `runAsUser`<sup>Optional</sup> <a name="runAsUser" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext.property.runAsUser"></a>

```typescript
public readonly runAsUser: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#run_as_user BatchJobDefinition#run_as_user}.

---

### BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts <a name="BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

const batchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts: batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts.property.mountPath">mountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#mount_path BatchJobDefinition#mount_path}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#name BatchJobDefinition#name}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#read_only BatchJobDefinition#read_only}. |

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#mount_path BatchJobDefinition#mount_path}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#name BatchJobDefinition#name}.

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#read_only BatchJobDefinition#read_only}.

---

### BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret <a name="BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

const batchJobDefinitionEksPropertiesPodPropertiesImagePullSecret: batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#name BatchJobDefinition#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#name BatchJobDefinition#name}.

---

### BatchJobDefinitionEksPropertiesPodPropertiesInitContainers <a name="BatchJobDefinitionEksPropertiesPodPropertiesInitContainers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

const batchJobDefinitionEksPropertiesPodPropertiesInitContainers: batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers.property.image">image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#image BatchJobDefinition#image}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers.property.args">args</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#args BatchJobDefinition#args}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers.property.command">command</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#command BatchJobDefinition#command}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers.property.env">env</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv</a>[]</code> | env block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers.property.imagePullPolicy">imagePullPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#image_pull_policy BatchJobDefinition#image_pull_policy}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#name BatchJobDefinition#name}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers.property.securityContext">securityContext</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext</a></code> | security_context block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers.property.volumeMounts">volumeMounts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts</a>[]</code> | volume_mounts block. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#image BatchJobDefinition#image}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#args BatchJobDefinition#args}.

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#command BatchJobDefinition#command}.

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers.property.env"></a>

```typescript
public readonly env: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv</a>[]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#env BatchJobDefinition#env}

---

##### `imagePullPolicy`<sup>Optional</sup> <a name="imagePullPolicy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers.property.imagePullPolicy"></a>

```typescript
public readonly imagePullPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#image_pull_policy BatchJobDefinition#image_pull_policy}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#name BatchJobDefinition#name}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers.property.resources"></a>

```typescript
public readonly resources: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#resources BatchJobDefinition#resources}

---

##### `securityContext`<sup>Optional</sup> <a name="securityContext" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers.property.securityContext"></a>

```typescript
public readonly securityContext: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext</a>

security_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#security_context BatchJobDefinition#security_context}

---

##### `volumeMounts`<sup>Optional</sup> <a name="volumeMounts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts</a>[]

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#volume_mounts BatchJobDefinition#volume_mounts}

---

### BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv <a name="BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

const batchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv: batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#name BatchJobDefinition#name}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#value BatchJobDefinition#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#name BatchJobDefinition#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#value BatchJobDefinition#value}.

---

### BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources <a name="BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

const batchJobDefinitionEksPropertiesPodPropertiesInitContainersResources: batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources.property.limits">limits</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#limits BatchJobDefinition#limits}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources.property.requests">requests</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#requests BatchJobDefinition#requests}. |

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources.property.limits"></a>

```typescript
public readonly limits: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#limits BatchJobDefinition#limits}.

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources.property.requests"></a>

```typescript
public readonly requests: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#requests BatchJobDefinition#requests}.

---

### BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext <a name="BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

const batchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext: batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext.property.privileged">privileged</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#privileged BatchJobDefinition#privileged}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext.property.readOnlyRootFileSystem">readOnlyRootFileSystem</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#read_only_root_file_system BatchJobDefinition#read_only_root_file_system}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext.property.runAsGroup">runAsGroup</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#run_as_group BatchJobDefinition#run_as_group}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext.property.runAsNonRoot">runAsNonRoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#run_as_non_root BatchJobDefinition#run_as_non_root}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext.property.runAsUser">runAsUser</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#run_as_user BatchJobDefinition#run_as_user}. |

---

##### `privileged`<sup>Optional</sup> <a name="privileged" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext.property.privileged"></a>

```typescript
public readonly privileged: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#privileged BatchJobDefinition#privileged}.

---

##### `readOnlyRootFileSystem`<sup>Optional</sup> <a name="readOnlyRootFileSystem" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext.property.readOnlyRootFileSystem"></a>

```typescript
public readonly readOnlyRootFileSystem: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#read_only_root_file_system BatchJobDefinition#read_only_root_file_system}.

---

##### `runAsGroup`<sup>Optional</sup> <a name="runAsGroup" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext.property.runAsGroup"></a>

```typescript
public readonly runAsGroup: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#run_as_group BatchJobDefinition#run_as_group}.

---

##### `runAsNonRoot`<sup>Optional</sup> <a name="runAsNonRoot" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext.property.runAsNonRoot"></a>

```typescript
public readonly runAsNonRoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#run_as_non_root BatchJobDefinition#run_as_non_root}.

---

##### `runAsUser`<sup>Optional</sup> <a name="runAsUser" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext.property.runAsUser"></a>

```typescript
public readonly runAsUser: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#run_as_user BatchJobDefinition#run_as_user}.

---

### BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts <a name="BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

const batchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts: batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts.property.mountPath">mountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#mount_path BatchJobDefinition#mount_path}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#name BatchJobDefinition#name}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#read_only BatchJobDefinition#read_only}. |

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#mount_path BatchJobDefinition#mount_path}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#name BatchJobDefinition#name}.

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#read_only BatchJobDefinition#read_only}.

---

### BatchJobDefinitionEksPropertiesPodPropertiesMetadata <a name="BatchJobDefinitionEksPropertiesPodPropertiesMetadata" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadata.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

const batchJobDefinitionEksPropertiesPodPropertiesMetadata: batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#labels BatchJobDefinition#labels}. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#labels BatchJobDefinition#labels}.

---

### BatchJobDefinitionEksPropertiesPodPropertiesVolumes <a name="BatchJobDefinitionEksPropertiesPodPropertiesVolumes" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

const batchJobDefinitionEksPropertiesPodPropertiesVolumes: batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes.property.emptyDir">emptyDir</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir">BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir</a></code> | empty_dir block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes.property.hostPath">hostPath</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath">BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath</a></code> | host_path block. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#name BatchJobDefinition#name}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret">BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret</a></code> | secret block. |

---

##### `emptyDir`<sup>Optional</sup> <a name="emptyDir" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes.property.emptyDir"></a>

```typescript
public readonly emptyDir: BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir">BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir</a>

empty_dir block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#empty_dir BatchJobDefinition#empty_dir}

---

##### `hostPath`<sup>Optional</sup> <a name="hostPath" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes.property.hostPath"></a>

```typescript
public readonly hostPath: BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath">BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath</a>

host_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#host_path BatchJobDefinition#host_path}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#name BatchJobDefinition#name}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes.property.secret"></a>

```typescript
public readonly secret: BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret">BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret</a>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#secret BatchJobDefinition#secret}

---

### BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir <a name="BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

const batchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir: batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir.property.sizeLimit">sizeLimit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#size_limit BatchJobDefinition#size_limit}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir.property.medium">medium</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#medium BatchJobDefinition#medium}. |

---

##### `sizeLimit`<sup>Required</sup> <a name="sizeLimit" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir.property.sizeLimit"></a>

```typescript
public readonly sizeLimit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#size_limit BatchJobDefinition#size_limit}.

---

##### `medium`<sup>Optional</sup> <a name="medium" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir.property.medium"></a>

```typescript
public readonly medium: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#medium BatchJobDefinition#medium}.

---

### BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath <a name="BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

const batchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath: batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#path BatchJobDefinition#path}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#path BatchJobDefinition#path}.

---

### BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret <a name="BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

const batchJobDefinitionEksPropertiesPodPropertiesVolumesSecret: batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret.property.secretName">secretName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#secret_name BatchJobDefinition#secret_name}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret.property.optional">optional</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#optional BatchJobDefinition#optional}. |

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#secret_name BatchJobDefinition#secret_name}.

---

##### `optional`<sup>Optional</sup> <a name="optional" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret.property.optional"></a>

```typescript
public readonly optional: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#optional BatchJobDefinition#optional}.

---

### BatchJobDefinitionRetryStrategy <a name="BatchJobDefinitionRetryStrategy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

const batchJobDefinitionRetryStrategy: batchJobDefinition.BatchJobDefinitionRetryStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy.property.attempts">attempts</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#attempts BatchJobDefinition#attempts}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy.property.evaluateOnExit">evaluateOnExit</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a>[]</code> | evaluate_on_exit block. |

---

##### `attempts`<sup>Optional</sup> <a name="attempts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy.property.attempts"></a>

```typescript
public readonly attempts: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#attempts BatchJobDefinition#attempts}.

---

##### `evaluateOnExit`<sup>Optional</sup> <a name="evaluateOnExit" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy.property.evaluateOnExit"></a>

```typescript
public readonly evaluateOnExit: IResolvable | BatchJobDefinitionRetryStrategyEvaluateOnExit[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a>[]

evaluate_on_exit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#evaluate_on_exit BatchJobDefinition#evaluate_on_exit}

---

### BatchJobDefinitionRetryStrategyEvaluateOnExit <a name="BatchJobDefinitionRetryStrategyEvaluateOnExit" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

const batchJobDefinitionRetryStrategyEvaluateOnExit: batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#action BatchJobDefinition#action}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.onExitCode">onExitCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#on_exit_code BatchJobDefinition#on_exit_code}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.onReason">onReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#on_reason BatchJobDefinition#on_reason}. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.onStatusReason">onStatusReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#on_status_reason BatchJobDefinition#on_status_reason}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#action BatchJobDefinition#action}.

---

##### `onExitCode`<sup>Optional</sup> <a name="onExitCode" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.onExitCode"></a>

```typescript
public readonly onExitCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#on_exit_code BatchJobDefinition#on_exit_code}.

---

##### `onReason`<sup>Optional</sup> <a name="onReason" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.onReason"></a>

```typescript
public readonly onReason: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#on_reason BatchJobDefinition#on_reason}.

---

##### `onStatusReason`<sup>Optional</sup> <a name="onStatusReason" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit.property.onStatusReason"></a>

```typescript
public readonly onStatusReason: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#on_status_reason BatchJobDefinition#on_status_reason}.

---

### BatchJobDefinitionTimeout <a name="BatchJobDefinitionTimeout" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

const batchJobDefinitionTimeout: batchJobDefinition.BatchJobDefinitionTimeout = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout.property.attemptDurationSeconds">attemptDurationSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#attempt_duration_seconds BatchJobDefinition#attempt_duration_seconds}. |

---

##### `attemptDurationSeconds`<sup>Optional</sup> <a name="attemptDurationSeconds" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout.property.attemptDurationSeconds"></a>

```typescript
public readonly attemptDurationSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/batch_job_definition#attempt_duration_seconds BatchJobDefinition#attempt_duration_seconds}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchJobDefinitionEksPropertiesOutputReference <a name="BatchJobDefinitionEksPropertiesOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.putPodProperties">putPodProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPodProperties` <a name="putPodProperties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.putPodProperties"></a>

```typescript
public putPodProperties(value: BatchJobDefinitionEksPropertiesPodProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.putPodProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties">BatchJobDefinitionEksPropertiesPodProperties</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.property.podProperties">podProperties</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.property.podPropertiesInput">podPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties">BatchJobDefinitionEksPropertiesPodProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksProperties">BatchJobDefinitionEksProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `podProperties`<sup>Required</sup> <a name="podProperties" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.property.podProperties"></a>

```typescript
public readonly podProperties: BatchJobDefinitionEksPropertiesPodPropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesOutputReference</a>

---

##### `podPropertiesInput`<sup>Optional</sup> <a name="podPropertiesInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.property.podPropertiesInput"></a>

```typescript
public readonly podPropertiesInput: BatchJobDefinitionEksPropertiesPodProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties">BatchJobDefinitionEksPropertiesPodProperties</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchJobDefinitionEksProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksProperties">BatchJobDefinitionEksProperties</a>

---


### BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList <a name="BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.get"></a>

```typescript
public get(index: number): BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv</a>[]

---


### BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv</a>

---


### BatchJobDefinitionEksPropertiesPodPropertiesContainersList <a name="BatchJobDefinitionEksPropertiesPodPropertiesContainersList" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList.get"></a>

```typescript
public get(index: number): BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers">BatchJobDefinitionEksPropertiesPodPropertiesContainers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesContainers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers">BatchJobDefinitionEksPropertiesPodPropertiesContainers</a>[]

---


### BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putSecurityContext">putSecurityContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putVolumeMounts">putVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetImagePullPolicy">resetImagePullPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetSecurityContext">resetSecurityContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetVolumeMounts">resetVolumeMounts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnv` <a name="putEnv" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putEnv"></a>

```typescript
public putEnv(value: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putEnv.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv</a>[]

---

##### `putResources` <a name="putResources" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putResources"></a>

```typescript
public putResources(value: BatchJobDefinitionEksPropertiesPodPropertiesContainersResources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources">BatchJobDefinitionEksPropertiesPodPropertiesContainersResources</a>

---

##### `putSecurityContext` <a name="putSecurityContext" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putSecurityContext"></a>

```typescript
public putSecurityContext(value: BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putSecurityContext.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext">BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext</a>

---

##### `putVolumeMounts` <a name="putVolumeMounts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putVolumeMounts"></a>

```typescript
public putVolumeMounts(value: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts</a>[]

---

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetEnv"></a>

```typescript
public resetEnv(): void
```

##### `resetImagePullPolicy` <a name="resetImagePullPolicy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetImagePullPolicy"></a>

```typescript
public resetImagePullPolicy(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetSecurityContext` <a name="resetSecurityContext" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetSecurityContext"></a>

```typescript
public resetSecurityContext(): void
```

##### `resetVolumeMounts` <a name="resetVolumeMounts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.resetVolumeMounts"></a>

```typescript
public resetVolumeMounts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.env">env</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList">BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.securityContext">securityContext</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.volumeMounts">volumeMounts</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList">BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.argsInput">argsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.envInput">envInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.imagePullPolicyInput">imagePullPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.resourcesInput">resourcesInput</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources">BatchJobDefinitionEksPropertiesPodPropertiesContainersResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.securityContextInput">securityContextInput</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext">BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.volumeMountsInput">volumeMountsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.imagePullPolicy">imagePullPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers">BatchJobDefinitionEksPropertiesPodPropertiesContainers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.env"></a>

```typescript
public readonly env: BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList">BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.resources"></a>

```typescript
public readonly resources: BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference</a>

---

##### `securityContext`<sup>Required</sup> <a name="securityContext" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.securityContext"></a>

```typescript
public readonly securityContext: BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference</a>

---

##### `volumeMounts`<sup>Required</sup> <a name="volumeMounts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList">BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string[];
```

- *Type:* string[]

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.envInput"></a>

```typescript
public readonly envInput: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv</a>[]

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `imagePullPolicyInput`<sup>Optional</sup> <a name="imagePullPolicyInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.imagePullPolicyInput"></a>

```typescript
public readonly imagePullPolicyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: BatchJobDefinitionEksPropertiesPodPropertiesContainersResources;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources">BatchJobDefinitionEksPropertiesPodPropertiesContainersResources</a>

---

##### `securityContextInput`<sup>Optional</sup> <a name="securityContextInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.securityContextInput"></a>

```typescript
public readonly securityContextInput: BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext">BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext</a>

---

##### `volumeMountsInput`<sup>Optional</sup> <a name="volumeMountsInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.volumeMountsInput"></a>

```typescript
public readonly volumeMountsInput: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts</a>[]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `imagePullPolicy`<sup>Required</sup> <a name="imagePullPolicy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.imagePullPolicy"></a>

```typescript
public readonly imagePullPolicy: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesContainers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers">BatchJobDefinitionEksPropertiesPodPropertiesContainers</a>

---


### BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.resetLimits">resetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.resetRequests">resetRequests</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLimits` <a name="resetLimits" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.resetLimits"></a>

```typescript
public resetLimits(): void
```

##### `resetRequests` <a name="resetRequests" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.resetRequests"></a>

```typescript
public resetRequests(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.limitsInput">limitsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.requestsInput">requestsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.limits">limits</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.requests">requests</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources">BatchJobDefinitionEksPropertiesPodPropertiesContainersResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.limitsInput"></a>

```typescript
public readonly limitsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestsInput`<sup>Optional</sup> <a name="requestsInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.requestsInput"></a>

```typescript
public readonly requestsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.limits"></a>

```typescript
public readonly limits: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.requests"></a>

```typescript
public readonly requests: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchJobDefinitionEksPropertiesPodPropertiesContainersResources;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersResources">BatchJobDefinitionEksPropertiesPodPropertiesContainersResources</a>

---


### BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.resetPrivileged">resetPrivileged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.resetReadOnlyRootFileSystem">resetReadOnlyRootFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.resetRunAsGroup">resetRunAsGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.resetRunAsNonRoot">resetRunAsNonRoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.resetRunAsUser">resetRunAsUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrivileged` <a name="resetPrivileged" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.resetPrivileged"></a>

```typescript
public resetPrivileged(): void
```

##### `resetReadOnlyRootFileSystem` <a name="resetReadOnlyRootFileSystem" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.resetReadOnlyRootFileSystem"></a>

```typescript
public resetReadOnlyRootFileSystem(): void
```

##### `resetRunAsGroup` <a name="resetRunAsGroup" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.resetRunAsGroup"></a>

```typescript
public resetRunAsGroup(): void
```

##### `resetRunAsNonRoot` <a name="resetRunAsNonRoot" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.resetRunAsNonRoot"></a>

```typescript
public resetRunAsNonRoot(): void
```

##### `resetRunAsUser` <a name="resetRunAsUser" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.resetRunAsUser"></a>

```typescript
public resetRunAsUser(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.privilegedInput">privilegedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.readOnlyRootFileSystemInput">readOnlyRootFileSystemInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.runAsGroupInput">runAsGroupInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.runAsNonRootInput">runAsNonRootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.runAsUserInput">runAsUserInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.privileged">privileged</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.readOnlyRootFileSystem">readOnlyRootFileSystem</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.runAsGroup">runAsGroup</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.runAsNonRoot">runAsNonRoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.runAsUser">runAsUser</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext">BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privilegedInput`<sup>Optional</sup> <a name="privilegedInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.privilegedInput"></a>

```typescript
public readonly privilegedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readOnlyRootFileSystemInput`<sup>Optional</sup> <a name="readOnlyRootFileSystemInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.readOnlyRootFileSystemInput"></a>

```typescript
public readonly readOnlyRootFileSystemInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runAsGroupInput`<sup>Optional</sup> <a name="runAsGroupInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.runAsGroupInput"></a>

```typescript
public readonly runAsGroupInput: number;
```

- *Type:* number

---

##### `runAsNonRootInput`<sup>Optional</sup> <a name="runAsNonRootInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.runAsNonRootInput"></a>

```typescript
public readonly runAsNonRootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runAsUserInput`<sup>Optional</sup> <a name="runAsUserInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.runAsUserInput"></a>

```typescript
public readonly runAsUserInput: number;
```

- *Type:* number

---

##### `privileged`<sup>Required</sup> <a name="privileged" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.privileged"></a>

```typescript
public readonly privileged: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readOnlyRootFileSystem`<sup>Required</sup> <a name="readOnlyRootFileSystem" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.readOnlyRootFileSystem"></a>

```typescript
public readonly readOnlyRootFileSystem: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runAsGroup`<sup>Required</sup> <a name="runAsGroup" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.runAsGroup"></a>

```typescript
public readonly runAsGroup: number;
```

- *Type:* number

---

##### `runAsNonRoot`<sup>Required</sup> <a name="runAsNonRoot" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.runAsNonRoot"></a>

```typescript
public readonly runAsNonRoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runAsUser`<sup>Required</sup> <a name="runAsUser" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.runAsUser"></a>

```typescript
public readonly runAsUser: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext">BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext</a>

---


### BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList <a name="BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.get"></a>

```typescript
public get(index: number): BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts</a>[]

---


### BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts</a>

---


### BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList <a name="BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList.get"></a>

```typescript
public get(index: number): BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret">BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret">BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret</a>[]

---


### BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret">BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret">BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret</a>

---


### BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList <a name="BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList.get"></a>

```typescript
public get(index: number): BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv</a>[]

---


### BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv</a>

---


### BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList <a name="BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList.get"></a>

```typescript
public get(index: number): BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers">BatchJobDefinitionEksPropertiesPodPropertiesInitContainers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesInitContainers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers">BatchJobDefinitionEksPropertiesPodPropertiesInitContainers</a>[]

---


### BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.putSecurityContext">putSecurityContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.putVolumeMounts">putVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.resetImagePullPolicy">resetImagePullPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.resetSecurityContext">resetSecurityContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.resetVolumeMounts">resetVolumeMounts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnv` <a name="putEnv" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.putEnv"></a>

```typescript
public putEnv(value: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.putEnv.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv</a>[]

---

##### `putResources` <a name="putResources" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.putResources"></a>

```typescript
public putResources(value: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources</a>

---

##### `putSecurityContext` <a name="putSecurityContext" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.putSecurityContext"></a>

```typescript
public putSecurityContext(value: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.putSecurityContext.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext</a>

---

##### `putVolumeMounts` <a name="putVolumeMounts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.putVolumeMounts"></a>

```typescript
public putVolumeMounts(value: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts</a>[]

---

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.resetEnv"></a>

```typescript
public resetEnv(): void
```

##### `resetImagePullPolicy` <a name="resetImagePullPolicy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.resetImagePullPolicy"></a>

```typescript
public resetImagePullPolicy(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetSecurityContext` <a name="resetSecurityContext" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.resetSecurityContext"></a>

```typescript
public resetSecurityContext(): void
```

##### `resetVolumeMounts` <a name="resetVolumeMounts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.resetVolumeMounts"></a>

```typescript
public resetVolumeMounts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.env">env</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.securityContext">securityContext</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.volumeMounts">volumeMounts</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.argsInput">argsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.envInput">envInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.imagePullPolicyInput">imagePullPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.resourcesInput">resourcesInput</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.securityContextInput">securityContextInput</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.volumeMountsInput">volumeMountsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.imagePullPolicy">imagePullPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers">BatchJobDefinitionEksPropertiesPodPropertiesInitContainers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.env"></a>

```typescript
public readonly env: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.resources"></a>

```typescript
public readonly resources: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference</a>

---

##### `securityContext`<sup>Required</sup> <a name="securityContext" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.securityContext"></a>

```typescript
public readonly securityContext: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference</a>

---

##### `volumeMounts`<sup>Required</sup> <a name="volumeMounts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string[];
```

- *Type:* string[]

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.envInput"></a>

```typescript
public readonly envInput: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv</a>[]

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `imagePullPolicyInput`<sup>Optional</sup> <a name="imagePullPolicyInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.imagePullPolicyInput"></a>

```typescript
public readonly imagePullPolicyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources</a>

---

##### `securityContextInput`<sup>Optional</sup> <a name="securityContextInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.securityContextInput"></a>

```typescript
public readonly securityContextInput: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext</a>

---

##### `volumeMountsInput`<sup>Optional</sup> <a name="volumeMountsInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.volumeMountsInput"></a>

```typescript
public readonly volumeMountsInput: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts</a>[]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `imagePullPolicy`<sup>Required</sup> <a name="imagePullPolicy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.imagePullPolicy"></a>

```typescript
public readonly imagePullPolicy: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesInitContainers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers">BatchJobDefinitionEksPropertiesPodPropertiesInitContainers</a>

---


### BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.resetLimits">resetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.resetRequests">resetRequests</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLimits` <a name="resetLimits" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.resetLimits"></a>

```typescript
public resetLimits(): void
```

##### `resetRequests` <a name="resetRequests" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.resetRequests"></a>

```typescript
public resetRequests(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.property.limitsInput">limitsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.property.requestsInput">requestsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.property.limits">limits</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.property.requests">requests</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.property.limitsInput"></a>

```typescript
public readonly limitsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestsInput`<sup>Optional</sup> <a name="requestsInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.property.requestsInput"></a>

```typescript
public readonly requestsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.property.limits"></a>

```typescript
public readonly limits: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.property.requests"></a>

```typescript
public readonly requests: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources</a>

---


### BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.resetPrivileged">resetPrivileged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.resetReadOnlyRootFileSystem">resetReadOnlyRootFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.resetRunAsGroup">resetRunAsGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.resetRunAsNonRoot">resetRunAsNonRoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.resetRunAsUser">resetRunAsUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrivileged` <a name="resetPrivileged" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.resetPrivileged"></a>

```typescript
public resetPrivileged(): void
```

##### `resetReadOnlyRootFileSystem` <a name="resetReadOnlyRootFileSystem" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.resetReadOnlyRootFileSystem"></a>

```typescript
public resetReadOnlyRootFileSystem(): void
```

##### `resetRunAsGroup` <a name="resetRunAsGroup" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.resetRunAsGroup"></a>

```typescript
public resetRunAsGroup(): void
```

##### `resetRunAsNonRoot` <a name="resetRunAsNonRoot" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.resetRunAsNonRoot"></a>

```typescript
public resetRunAsNonRoot(): void
```

##### `resetRunAsUser` <a name="resetRunAsUser" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.resetRunAsUser"></a>

```typescript
public resetRunAsUser(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.property.privilegedInput">privilegedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.property.readOnlyRootFileSystemInput">readOnlyRootFileSystemInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.property.runAsGroupInput">runAsGroupInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.property.runAsNonRootInput">runAsNonRootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.property.runAsUserInput">runAsUserInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.property.privileged">privileged</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.property.readOnlyRootFileSystem">readOnlyRootFileSystem</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.property.runAsGroup">runAsGroup</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.property.runAsNonRoot">runAsNonRoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.property.runAsUser">runAsUser</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privilegedInput`<sup>Optional</sup> <a name="privilegedInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.property.privilegedInput"></a>

```typescript
public readonly privilegedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readOnlyRootFileSystemInput`<sup>Optional</sup> <a name="readOnlyRootFileSystemInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.property.readOnlyRootFileSystemInput"></a>

```typescript
public readonly readOnlyRootFileSystemInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runAsGroupInput`<sup>Optional</sup> <a name="runAsGroupInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.property.runAsGroupInput"></a>

```typescript
public readonly runAsGroupInput: number;
```

- *Type:* number

---

##### `runAsNonRootInput`<sup>Optional</sup> <a name="runAsNonRootInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.property.runAsNonRootInput"></a>

```typescript
public readonly runAsNonRootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runAsUserInput`<sup>Optional</sup> <a name="runAsUserInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.property.runAsUserInput"></a>

```typescript
public readonly runAsUserInput: number;
```

- *Type:* number

---

##### `privileged`<sup>Required</sup> <a name="privileged" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.property.privileged"></a>

```typescript
public readonly privileged: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readOnlyRootFileSystem`<sup>Required</sup> <a name="readOnlyRootFileSystem" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.property.readOnlyRootFileSystem"></a>

```typescript
public readonly readOnlyRootFileSystem: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runAsGroup`<sup>Required</sup> <a name="runAsGroup" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.property.runAsGroup"></a>

```typescript
public readonly runAsGroup: number;
```

- *Type:* number

---

##### `runAsNonRoot`<sup>Required</sup> <a name="runAsNonRoot" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.property.runAsNonRoot"></a>

```typescript
public readonly runAsNonRoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runAsUser`<sup>Required</sup> <a name="runAsUser" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.property.runAsUser"></a>

```typescript
public readonly runAsUser: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext</a>

---


### BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList <a name="BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList.get"></a>

```typescript
public get(index: number): BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts</a>[]

---


### BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts</a>

---


### BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadata">BatchJobDefinitionEksPropertiesPodPropertiesMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchJobDefinitionEksPropertiesPodPropertiesMetadata;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadata">BatchJobDefinitionEksPropertiesPodPropertiesMetadata</a>

---


### BatchJobDefinitionEksPropertiesPodPropertiesOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putContainers">putContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putImagePullSecret">putImagePullSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putInitContainers">putInitContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resetDnsPolicy">resetDnsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resetHostNetwork">resetHostNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resetImagePullSecret">resetImagePullSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resetInitContainers">resetInitContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resetServiceAccountName">resetServiceAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resetShareProcessNamespace">resetShareProcessNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resetVolumes">resetVolumes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainers` <a name="putContainers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putContainers"></a>

```typescript
public putContainers(value: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesContainers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putContainers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers">BatchJobDefinitionEksPropertiesPodPropertiesContainers</a>[]

---

##### `putImagePullSecret` <a name="putImagePullSecret" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putImagePullSecret"></a>

```typescript
public putImagePullSecret(value: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putImagePullSecret.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret">BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret</a>[]

---

##### `putInitContainers` <a name="putInitContainers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putInitContainers"></a>

```typescript
public putInitContainers(value: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesInitContainers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putInitContainers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers">BatchJobDefinitionEksPropertiesPodPropertiesInitContainers</a>[]

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putMetadata"></a>

```typescript
public putMetadata(value: BatchJobDefinitionEksPropertiesPodPropertiesMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadata">BatchJobDefinitionEksPropertiesPodPropertiesMetadata</a>

---

##### `putVolumes` <a name="putVolumes" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putVolumes"></a>

```typescript
public putVolumes(value: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesVolumes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.putVolumes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes">BatchJobDefinitionEksPropertiesPodPropertiesVolumes</a>[]

---

##### `resetDnsPolicy` <a name="resetDnsPolicy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resetDnsPolicy"></a>

```typescript
public resetDnsPolicy(): void
```

##### `resetHostNetwork` <a name="resetHostNetwork" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resetHostNetwork"></a>

```typescript
public resetHostNetwork(): void
```

##### `resetImagePullSecret` <a name="resetImagePullSecret" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resetImagePullSecret"></a>

```typescript
public resetImagePullSecret(): void
```

##### `resetInitContainers` <a name="resetInitContainers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resetInitContainers"></a>

```typescript
public resetInitContainers(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetServiceAccountName` <a name="resetServiceAccountName" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resetServiceAccountName"></a>

```typescript
public resetServiceAccountName(): void
```

##### `resetShareProcessNamespace` <a name="resetShareProcessNamespace" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resetShareProcessNamespace"></a>

```typescript
public resetShareProcessNamespace(): void
```

##### `resetVolumes` <a name="resetVolumes" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.resetVolumes"></a>

```typescript
public resetVolumes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.containers">containers</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList">BatchJobDefinitionEksPropertiesPodPropertiesContainersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.imagePullSecret">imagePullSecret</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList">BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.initContainers">initContainers</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList">BatchJobDefinitionEksPropertiesPodPropertiesVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.containersInput">containersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers">BatchJobDefinitionEksPropertiesPodPropertiesContainers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.dnsPolicyInput">dnsPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.hostNetworkInput">hostNetworkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.imagePullSecretInput">imagePullSecretInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret">BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.initContainersInput">initContainersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers">BatchJobDefinitionEksPropertiesPodPropertiesInitContainers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadata">BatchJobDefinitionEksPropertiesPodPropertiesMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.serviceAccountNameInput">serviceAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.shareProcessNamespaceInput">shareProcessNamespaceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.volumesInput">volumesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes">BatchJobDefinitionEksPropertiesPodPropertiesVolumes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.dnsPolicy">dnsPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.hostNetwork">hostNetwork</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.serviceAccountName">serviceAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.shareProcessNamespace">shareProcessNamespace</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties">BatchJobDefinitionEksPropertiesPodProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.containers"></a>

```typescript
public readonly containers: BatchJobDefinitionEksPropertiesPodPropertiesContainersList;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainersList">BatchJobDefinitionEksPropertiesPodPropertiesContainersList</a>

---

##### `imagePullSecret`<sup>Required</sup> <a name="imagePullSecret" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.imagePullSecret"></a>

```typescript
public readonly imagePullSecret: BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList">BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList</a>

---

##### `initContainers`<sup>Required</sup> <a name="initContainers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.initContainers"></a>

```typescript
public readonly initContainers: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList">BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.metadata"></a>

```typescript
public readonly metadata: BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.volumes"></a>

```typescript
public readonly volumes: BatchJobDefinitionEksPropertiesPodPropertiesVolumesList;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList">BatchJobDefinitionEksPropertiesPodPropertiesVolumesList</a>

---

##### `containersInput`<sup>Optional</sup> <a name="containersInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.containersInput"></a>

```typescript
public readonly containersInput: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesContainers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesContainers">BatchJobDefinitionEksPropertiesPodPropertiesContainers</a>[]

---

##### `dnsPolicyInput`<sup>Optional</sup> <a name="dnsPolicyInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.dnsPolicyInput"></a>

```typescript
public readonly dnsPolicyInput: string;
```

- *Type:* string

---

##### `hostNetworkInput`<sup>Optional</sup> <a name="hostNetworkInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.hostNetworkInput"></a>

```typescript
public readonly hostNetworkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `imagePullSecretInput`<sup>Optional</sup> <a name="imagePullSecretInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.imagePullSecretInput"></a>

```typescript
public readonly imagePullSecretInput: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret">BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret</a>[]

---

##### `initContainersInput`<sup>Optional</sup> <a name="initContainersInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.initContainersInput"></a>

```typescript
public readonly initContainersInput: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesInitContainers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesInitContainers">BatchJobDefinitionEksPropertiesPodPropertiesInitContainers</a>[]

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: BatchJobDefinitionEksPropertiesPodPropertiesMetadata;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesMetadata">BatchJobDefinitionEksPropertiesPodPropertiesMetadata</a>

---

##### `serviceAccountNameInput`<sup>Optional</sup> <a name="serviceAccountNameInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.serviceAccountNameInput"></a>

```typescript
public readonly serviceAccountNameInput: string;
```

- *Type:* string

---

##### `shareProcessNamespaceInput`<sup>Optional</sup> <a name="shareProcessNamespaceInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.shareProcessNamespaceInput"></a>

```typescript
public readonly shareProcessNamespaceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.volumesInput"></a>

```typescript
public readonly volumesInput: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes">BatchJobDefinitionEksPropertiesPodPropertiesVolumes</a>[]

---

##### `dnsPolicy`<sup>Required</sup> <a name="dnsPolicy" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.dnsPolicy"></a>

```typescript
public readonly dnsPolicy: string;
```

- *Type:* string

---

##### `hostNetwork`<sup>Required</sup> <a name="hostNetwork" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.hostNetwork"></a>

```typescript
public readonly hostNetwork: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serviceAccountName`<sup>Required</sup> <a name="serviceAccountName" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.serviceAccountName"></a>

```typescript
public readonly serviceAccountName: string;
```

- *Type:* string

---

##### `shareProcessNamespace`<sup>Required</sup> <a name="shareProcessNamespace" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.shareProcessNamespace"></a>

```typescript
public readonly shareProcessNamespace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchJobDefinitionEksPropertiesPodProperties;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodProperties">BatchJobDefinitionEksPropertiesPodProperties</a>

---


### BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.resetMedium">resetMedium</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMedium` <a name="resetMedium" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.resetMedium"></a>

```typescript
public resetMedium(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.mediumInput">mediumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.sizeLimitInput">sizeLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.medium">medium</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.sizeLimit">sizeLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir">BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mediumInput`<sup>Optional</sup> <a name="mediumInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.mediumInput"></a>

```typescript
public readonly mediumInput: string;
```

- *Type:* string

---

##### `sizeLimitInput`<sup>Optional</sup> <a name="sizeLimitInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.sizeLimitInput"></a>

```typescript
public readonly sizeLimitInput: string;
```

- *Type:* string

---

##### `medium`<sup>Required</sup> <a name="medium" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.medium"></a>

```typescript
public readonly medium: string;
```

- *Type:* string

---

##### `sizeLimit`<sup>Required</sup> <a name="sizeLimit" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.sizeLimit"></a>

```typescript
public readonly sizeLimit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir">BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir</a>

---


### BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath">BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath">BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath</a>

---


### BatchJobDefinitionEksPropertiesPodPropertiesVolumesList <a name="BatchJobDefinitionEksPropertiesPodPropertiesVolumesList" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.get"></a>

```typescript
public get(index: number): BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes">BatchJobDefinitionEksPropertiesPodPropertiesVolumes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes">BatchJobDefinitionEksPropertiesPodPropertiesVolumes</a>[]

---


### BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.putEmptyDir">putEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.putHostPath">putHostPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.resetEmptyDir">resetEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.resetHostPath">resetHostPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.resetSecret">resetSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEmptyDir` <a name="putEmptyDir" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.putEmptyDir"></a>

```typescript
public putEmptyDir(value: BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.putEmptyDir.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir">BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir</a>

---

##### `putHostPath` <a name="putHostPath" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.putHostPath"></a>

```typescript
public putHostPath(value: BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.putHostPath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath">BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath</a>

---

##### `putSecret` <a name="putSecret" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.putSecret"></a>

```typescript
public putSecret(value: BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret">BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret</a>

---

##### `resetEmptyDir` <a name="resetEmptyDir" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.resetEmptyDir"></a>

```typescript
public resetEmptyDir(): void
```

##### `resetHostPath` <a name="resetHostPath" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.resetHostPath"></a>

```typescript
public resetHostPath(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.resetSecret"></a>

```typescript
public resetSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.emptyDir">emptyDir</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.hostPath">hostPath</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.emptyDirInput">emptyDirInput</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir">BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.hostPathInput">hostPathInput</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath">BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.secretInput">secretInput</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret">BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes">BatchJobDefinitionEksPropertiesPodPropertiesVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emptyDir`<sup>Required</sup> <a name="emptyDir" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.emptyDir"></a>

```typescript
public readonly emptyDir: BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference</a>

---

##### `hostPath`<sup>Required</sup> <a name="hostPath" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.hostPath"></a>

```typescript
public readonly hostPath: BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.secret"></a>

```typescript
public readonly secret: BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference">BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference</a>

---

##### `emptyDirInput`<sup>Optional</sup> <a name="emptyDirInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.emptyDirInput"></a>

```typescript
public readonly emptyDirInput: BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir">BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir</a>

---

##### `hostPathInput`<sup>Optional</sup> <a name="hostPathInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.hostPathInput"></a>

```typescript
public readonly hostPathInput: BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath">BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret">BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesVolumes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumes">BatchJobDefinitionEksPropertiesPodPropertiesVolumes</a>

---


### BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference <a name="BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.resetOptional">resetOptional</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOptional` <a name="resetOptional" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.resetOptional"></a>

```typescript
public resetOptional(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.optionalInput">optionalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.optional">optional</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret">BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `optionalInput`<sup>Optional</sup> <a name="optionalInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.optionalInput"></a>

```typescript
public readonly optionalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.secretNameInput"></a>

```typescript
public readonly secretNameInput: string;
```

- *Type:* string

---

##### `optional`<sup>Required</sup> <a name="optional" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.optional"></a>

```typescript
public readonly optional: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret">BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret</a>

---


### BatchJobDefinitionRetryStrategyEvaluateOnExitList <a name="BatchJobDefinitionRetryStrategyEvaluateOnExitList" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.get"></a>

```typescript
public get(index: number): BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchJobDefinitionRetryStrategyEvaluateOnExit[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a>[]

---


### BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference <a name="BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resetOnExitCode">resetOnExitCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resetOnReason">resetOnReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resetOnStatusReason">resetOnStatusReason</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOnExitCode` <a name="resetOnExitCode" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resetOnExitCode"></a>

```typescript
public resetOnExitCode(): void
```

##### `resetOnReason` <a name="resetOnReason" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resetOnReason"></a>

```typescript
public resetOnReason(): void
```

##### `resetOnStatusReason` <a name="resetOnStatusReason" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.resetOnStatusReason"></a>

```typescript
public resetOnStatusReason(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onExitCodeInput">onExitCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onReasonInput">onReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onStatusReasonInput">onStatusReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onExitCode">onExitCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onReason">onReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onStatusReason">onStatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `onExitCodeInput`<sup>Optional</sup> <a name="onExitCodeInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onExitCodeInput"></a>

```typescript
public readonly onExitCodeInput: string;
```

- *Type:* string

---

##### `onReasonInput`<sup>Optional</sup> <a name="onReasonInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onReasonInput"></a>

```typescript
public readonly onReasonInput: string;
```

- *Type:* string

---

##### `onStatusReasonInput`<sup>Optional</sup> <a name="onStatusReasonInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onStatusReasonInput"></a>

```typescript
public readonly onStatusReasonInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `onExitCode`<sup>Required</sup> <a name="onExitCode" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onExitCode"></a>

```typescript
public readonly onExitCode: string;
```

- *Type:* string

---

##### `onReason`<sup>Required</sup> <a name="onReason" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onReason"></a>

```typescript
public readonly onReason: string;
```

- *Type:* string

---

##### `onStatusReason`<sup>Required</sup> <a name="onStatusReason" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.onStatusReason"></a>

```typescript
public readonly onStatusReason: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BatchJobDefinitionRetryStrategyEvaluateOnExit;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a>

---


### BatchJobDefinitionRetryStrategyOutputReference <a name="BatchJobDefinitionRetryStrategyOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.putEvaluateOnExit">putEvaluateOnExit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resetAttempts">resetAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resetEvaluateOnExit">resetEvaluateOnExit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEvaluateOnExit` <a name="putEvaluateOnExit" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.putEvaluateOnExit"></a>

```typescript
public putEvaluateOnExit(value: IResolvable | BatchJobDefinitionRetryStrategyEvaluateOnExit[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.putEvaluateOnExit.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a>[]

---

##### `resetAttempts` <a name="resetAttempts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resetAttempts"></a>

```typescript
public resetAttempts(): void
```

##### `resetEvaluateOnExit` <a name="resetEvaluateOnExit" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.resetEvaluateOnExit"></a>

```typescript
public resetEvaluateOnExit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.evaluateOnExit">evaluateOnExit</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList">BatchJobDefinitionRetryStrategyEvaluateOnExitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.attemptsInput">attemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.evaluateOnExitInput">evaluateOnExitInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.attempts">attempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluateOnExit`<sup>Required</sup> <a name="evaluateOnExit" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.evaluateOnExit"></a>

```typescript
public readonly evaluateOnExit: BatchJobDefinitionRetryStrategyEvaluateOnExitList;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExitList">BatchJobDefinitionRetryStrategyEvaluateOnExitList</a>

---

##### `attemptsInput`<sup>Optional</sup> <a name="attemptsInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.attemptsInput"></a>

```typescript
public readonly attemptsInput: number;
```

- *Type:* number

---

##### `evaluateOnExitInput`<sup>Optional</sup> <a name="evaluateOnExitInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.evaluateOnExitInput"></a>

```typescript
public readonly evaluateOnExitInput: IResolvable | BatchJobDefinitionRetryStrategyEvaluateOnExit[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyEvaluateOnExit">BatchJobDefinitionRetryStrategyEvaluateOnExit</a>[]

---

##### `attempts`<sup>Required</sup> <a name="attempts" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.attempts"></a>

```typescript
public readonly attempts: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchJobDefinitionRetryStrategy;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionRetryStrategy">BatchJobDefinitionRetryStrategy</a>

---


### BatchJobDefinitionTimeoutOutputReference <a name="BatchJobDefinitionTimeoutOutputReference" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.Initializer"></a>

```typescript
import { batchJobDefinition } from '@cdktf/provider-aws'

new batchJobDefinition.BatchJobDefinitionTimeoutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.resetAttemptDurationSeconds">resetAttemptDurationSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttemptDurationSeconds` <a name="resetAttemptDurationSeconds" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.resetAttemptDurationSeconds"></a>

```typescript
public resetAttemptDurationSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.attemptDurationSecondsInput">attemptDurationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.attemptDurationSeconds">attemptDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attemptDurationSecondsInput`<sup>Optional</sup> <a name="attemptDurationSecondsInput" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.attemptDurationSecondsInput"></a>

```typescript
public readonly attemptDurationSecondsInput: number;
```

- *Type:* number

---

##### `attemptDurationSeconds`<sup>Required</sup> <a name="attemptDurationSeconds" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.attemptDurationSeconds"></a>

```typescript
public readonly attemptDurationSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeoutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BatchJobDefinitionTimeout;
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobDefinition.BatchJobDefinitionTimeout">BatchJobDefinitionTimeout</a>

---



