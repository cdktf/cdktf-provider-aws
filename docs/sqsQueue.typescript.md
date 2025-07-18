# `sqsQueue` Submodule <a name="`sqsQueue` Submodule" id="@cdktf/provider-aws.sqsQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqsQueue <a name="SqsQueue" id="@cdktf/provider-aws.sqsQueue.SqsQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue aws_sqs_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer"></a>

```typescript
import { sqsQueue } from '@cdktf/provider-aws'

new sqsQueue.SqsQueue(scope: Construct, id: string, config?: SqsQueueConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig">SqsQueueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig">SqsQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetContentBasedDeduplication">resetContentBasedDeduplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetDeduplicationScope">resetDeduplicationScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetDelaySeconds">resetDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetFifoQueue">resetFifoQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetFifoThroughputLimit">resetFifoThroughputLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetKmsDataKeyReusePeriodSeconds">resetKmsDataKeyReusePeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetKmsMasterKeyId">resetKmsMasterKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetMaxMessageSize">resetMaxMessageSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetMessageRetentionSeconds">resetMessageRetentionSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetReceiveWaitTimeSeconds">resetReceiveWaitTimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetRedriveAllowPolicy">resetRedriveAllowPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetRedrivePolicy">resetRedrivePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetSqsManagedSseEnabled">resetSqsManagedSseEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetVisibilityTimeoutSeconds">resetVisibilityTimeoutSeconds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sqsQueue.SqsQueue.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sqsQueue.SqsQueue.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sqsQueue.SqsQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sqsQueue.SqsQueue.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.sqsQueue.SqsQueue.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sqsQueue.SqsQueue.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sqsQueue.SqsQueue.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.sqsQueue.SqsQueue.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sqsQueue.SqsQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.sqsQueue.SqsQueue.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.sqsQueue.SqsQueue.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sqsQueue.SqsQueue.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.sqsQueue.SqsQueue.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sqsQueue.SqsQueue.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.sqsQueue.SqsQueue.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.sqsQueue.SqsQueue.putTimeouts"></a>

```typescript
public putTimeouts(value: SqsQueueTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sqsQueue.SqsQueue.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts">SqsQueueTimeouts</a>

---

##### `resetContentBasedDeduplication` <a name="resetContentBasedDeduplication" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetContentBasedDeduplication"></a>

```typescript
public resetContentBasedDeduplication(): void
```

##### `resetDeduplicationScope` <a name="resetDeduplicationScope" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetDeduplicationScope"></a>

```typescript
public resetDeduplicationScope(): void
```

##### `resetDelaySeconds` <a name="resetDelaySeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetDelaySeconds"></a>

```typescript
public resetDelaySeconds(): void
```

##### `resetFifoQueue` <a name="resetFifoQueue" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetFifoQueue"></a>

```typescript
public resetFifoQueue(): void
```

##### `resetFifoThroughputLimit` <a name="resetFifoThroughputLimit" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetFifoThroughputLimit"></a>

```typescript
public resetFifoThroughputLimit(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsDataKeyReusePeriodSeconds` <a name="resetKmsDataKeyReusePeriodSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetKmsDataKeyReusePeriodSeconds"></a>

```typescript
public resetKmsDataKeyReusePeriodSeconds(): void
```

##### `resetKmsMasterKeyId` <a name="resetKmsMasterKeyId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetKmsMasterKeyId"></a>

```typescript
public resetKmsMasterKeyId(): void
```

##### `resetMaxMessageSize` <a name="resetMaxMessageSize" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetMaxMessageSize"></a>

```typescript
public resetMaxMessageSize(): void
```

##### `resetMessageRetentionSeconds` <a name="resetMessageRetentionSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetMessageRetentionSeconds"></a>

```typescript
public resetMessageRetentionSeconds(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetPolicy"></a>

```typescript
public resetPolicy(): void
```

##### `resetReceiveWaitTimeSeconds` <a name="resetReceiveWaitTimeSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetReceiveWaitTimeSeconds"></a>

```typescript
public resetReceiveWaitTimeSeconds(): void
```

##### `resetRedriveAllowPolicy` <a name="resetRedriveAllowPolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetRedriveAllowPolicy"></a>

```typescript
public resetRedriveAllowPolicy(): void
```

##### `resetRedrivePolicy` <a name="resetRedrivePolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetRedrivePolicy"></a>

```typescript
public resetRedrivePolicy(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSqsManagedSseEnabled` <a name="resetSqsManagedSseEnabled" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetSqsManagedSseEnabled"></a>

```typescript
public resetSqsManagedSseEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVisibilityTimeoutSeconds` <a name="resetVisibilityTimeoutSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetVisibilityTimeoutSeconds"></a>

```typescript
public resetVisibilityTimeoutSeconds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SqsQueue resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isConstruct"></a>

```typescript
import { sqsQueue } from '@cdktf/provider-aws'

sqsQueue.SqsQueue.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformElement"></a>

```typescript
import { sqsQueue } from '@cdktf/provider-aws'

sqsQueue.SqsQueue.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformResource"></a>

```typescript
import { sqsQueue } from '@cdktf/provider-aws'

sqsQueue.SqsQueue.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.sqsQueue.SqsQueue.generateConfigForImport"></a>

```typescript
import { sqsQueue } from '@cdktf/provider-aws'

sqsQueue.SqsQueue.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SqsQueue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sqsQueue.SqsQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SqsQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SqsQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sqsQueue.SqsQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SqsQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference">SqsQueueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.contentBasedDeduplicationInput">contentBasedDeduplicationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.deduplicationScopeInput">deduplicationScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.delaySecondsInput">delaySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoQueueInput">fifoQueueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoThroughputLimitInput">fifoThroughputLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSecondsInput">kmsDataKeyReusePeriodSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsMasterKeyIdInput">kmsMasterKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.maxMessageSizeInput">maxMessageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.messageRetentionSecondsInput">messageRetentionSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.receiveWaitTimeSecondsInput">receiveWaitTimeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.redriveAllowPolicyInput">redriveAllowPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.redrivePolicyInput">redrivePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.sqsManagedSseEnabledInput">sqsManagedSseEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts">SqsQueueTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.visibilityTimeoutSecondsInput">visibilityTimeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.contentBasedDeduplication">contentBasedDeduplication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.deduplicationScope">deduplicationScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.delaySeconds">delaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoQueue">fifoQueue</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoThroughputLimit">fifoThroughputLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSeconds">kmsDataKeyReusePeriodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.maxMessageSize">maxMessageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.messageRetentionSeconds">messageRetentionSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.receiveWaitTimeSeconds">receiveWaitTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.redriveAllowPolicy">redriveAllowPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.redrivePolicy">redrivePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.sqsManagedSseEnabled">sqsManagedSseEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.visibilityTimeoutSeconds">visibilityTimeoutSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.timeouts"></a>

```typescript
public readonly timeouts: SqsQueueTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference">SqsQueueTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `contentBasedDeduplicationInput`<sup>Optional</sup> <a name="contentBasedDeduplicationInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.contentBasedDeduplicationInput"></a>

```typescript
public readonly contentBasedDeduplicationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deduplicationScopeInput`<sup>Optional</sup> <a name="deduplicationScopeInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.deduplicationScopeInput"></a>

```typescript
public readonly deduplicationScopeInput: string;
```

- *Type:* string

---

##### `delaySecondsInput`<sup>Optional</sup> <a name="delaySecondsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.delaySecondsInput"></a>

```typescript
public readonly delaySecondsInput: number;
```

- *Type:* number

---

##### `fifoQueueInput`<sup>Optional</sup> <a name="fifoQueueInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoQueueInput"></a>

```typescript
public readonly fifoQueueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fifoThroughputLimitInput`<sup>Optional</sup> <a name="fifoThroughputLimitInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoThroughputLimitInput"></a>

```typescript
public readonly fifoThroughputLimitInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsDataKeyReusePeriodSecondsInput`<sup>Optional</sup> <a name="kmsDataKeyReusePeriodSecondsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSecondsInput"></a>

```typescript
public readonly kmsDataKeyReusePeriodSecondsInput: number;
```

- *Type:* number

---

##### `kmsMasterKeyIdInput`<sup>Optional</sup> <a name="kmsMasterKeyIdInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsMasterKeyIdInput"></a>

```typescript
public readonly kmsMasterKeyIdInput: string;
```

- *Type:* string

---

##### `maxMessageSizeInput`<sup>Optional</sup> <a name="maxMessageSizeInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.maxMessageSizeInput"></a>

```typescript
public readonly maxMessageSizeInput: number;
```

- *Type:* number

---

##### `messageRetentionSecondsInput`<sup>Optional</sup> <a name="messageRetentionSecondsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.messageRetentionSecondsInput"></a>

```typescript
public readonly messageRetentionSecondsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `receiveWaitTimeSecondsInput`<sup>Optional</sup> <a name="receiveWaitTimeSecondsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.receiveWaitTimeSecondsInput"></a>

```typescript
public readonly receiveWaitTimeSecondsInput: number;
```

- *Type:* number

---

##### `redriveAllowPolicyInput`<sup>Optional</sup> <a name="redriveAllowPolicyInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.redriveAllowPolicyInput"></a>

```typescript
public readonly redriveAllowPolicyInput: string;
```

- *Type:* string

---

##### `redrivePolicyInput`<sup>Optional</sup> <a name="redrivePolicyInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.redrivePolicyInput"></a>

```typescript
public readonly redrivePolicyInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sqsManagedSseEnabledInput`<sup>Optional</sup> <a name="sqsManagedSseEnabledInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.sqsManagedSseEnabledInput"></a>

```typescript
public readonly sqsManagedSseEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SqsQueueTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts">SqsQueueTimeouts</a>

---

##### `visibilityTimeoutSecondsInput`<sup>Optional</sup> <a name="visibilityTimeoutSecondsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.visibilityTimeoutSecondsInput"></a>

```typescript
public readonly visibilityTimeoutSecondsInput: number;
```

- *Type:* number

---

##### `contentBasedDeduplication`<sup>Required</sup> <a name="contentBasedDeduplication" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.contentBasedDeduplication"></a>

```typescript
public readonly contentBasedDeduplication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deduplicationScope`<sup>Required</sup> <a name="deduplicationScope" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.deduplicationScope"></a>

```typescript
public readonly deduplicationScope: string;
```

- *Type:* string

---

##### `delaySeconds`<sup>Required</sup> <a name="delaySeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.delaySeconds"></a>

```typescript
public readonly delaySeconds: number;
```

- *Type:* number

---

##### `fifoQueue`<sup>Required</sup> <a name="fifoQueue" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoQueue"></a>

```typescript
public readonly fifoQueue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fifoThroughputLimit`<sup>Required</sup> <a name="fifoThroughputLimit" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoThroughputLimit"></a>

```typescript
public readonly fifoThroughputLimit: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsDataKeyReusePeriodSeconds`<sup>Required</sup> <a name="kmsDataKeyReusePeriodSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSeconds"></a>

```typescript
public readonly kmsDataKeyReusePeriodSeconds: number;
```

- *Type:* number

---

##### `kmsMasterKeyId`<sup>Required</sup> <a name="kmsMasterKeyId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsMasterKeyId"></a>

```typescript
public readonly kmsMasterKeyId: string;
```

- *Type:* string

---

##### `maxMessageSize`<sup>Required</sup> <a name="maxMessageSize" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.maxMessageSize"></a>

```typescript
public readonly maxMessageSize: number;
```

- *Type:* number

---

##### `messageRetentionSeconds`<sup>Required</sup> <a name="messageRetentionSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.messageRetentionSeconds"></a>

```typescript
public readonly messageRetentionSeconds: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `receiveWaitTimeSeconds`<sup>Required</sup> <a name="receiveWaitTimeSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.receiveWaitTimeSeconds"></a>

```typescript
public readonly receiveWaitTimeSeconds: number;
```

- *Type:* number

---

##### `redriveAllowPolicy`<sup>Required</sup> <a name="redriveAllowPolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.redriveAllowPolicy"></a>

```typescript
public readonly redriveAllowPolicy: string;
```

- *Type:* string

---

##### `redrivePolicy`<sup>Required</sup> <a name="redrivePolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.redrivePolicy"></a>

```typescript
public readonly redrivePolicy: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `sqsManagedSseEnabled`<sup>Required</sup> <a name="sqsManagedSseEnabled" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.sqsManagedSseEnabled"></a>

```typescript
public readonly sqsManagedSseEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `visibilityTimeoutSeconds`<sup>Required</sup> <a name="visibilityTimeoutSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.visibilityTimeoutSeconds"></a>

```typescript
public readonly visibilityTimeoutSeconds: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqsQueueConfig <a name="SqsQueueConfig" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.Initializer"></a>

```typescript
import { sqsQueue } from '@cdktf/provider-aws'

const sqsQueueConfig: sqsQueue.SqsQueueConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.contentBasedDeduplication">contentBasedDeduplication</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#content_based_deduplication SqsQueue#content_based_deduplication}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.deduplicationScope">deduplicationScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#deduplication_scope SqsQueue#deduplication_scope}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.delaySeconds">delaySeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#delay_seconds SqsQueue#delay_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.fifoQueue">fifoQueue</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#fifo_queue SqsQueue#fifo_queue}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.fifoThroughputLimit">fifoThroughputLimit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#fifo_throughput_limit SqsQueue#fifo_throughput_limit}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#id SqsQueue#id}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.kmsDataKeyReusePeriodSeconds">kmsDataKeyReusePeriodSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#kms_data_key_reuse_period_seconds SqsQueue#kms_data_key_reuse_period_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#kms_master_key_id SqsQueue#kms_master_key_id}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.maxMessageSize">maxMessageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#max_message_size SqsQueue#max_message_size}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.messageRetentionSeconds">messageRetentionSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#message_retention_seconds SqsQueue#message_retention_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#name SqsQueue#name}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#name_prefix SqsQueue#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.policy">policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#policy SqsQueue#policy}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.receiveWaitTimeSeconds">receiveWaitTimeSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#receive_wait_time_seconds SqsQueue#receive_wait_time_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.redriveAllowPolicy">redriveAllowPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#redrive_allow_policy SqsQueue#redrive_allow_policy}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.redrivePolicy">redrivePolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#redrive_policy SqsQueue#redrive_policy}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.sqsManagedSseEnabled">sqsManagedSseEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#sqs_managed_sse_enabled SqsQueue#sqs_managed_sse_enabled}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#tags SqsQueue#tags}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#tags_all SqsQueue#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts">SqsQueueTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.visibilityTimeoutSeconds">visibilityTimeoutSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#visibility_timeout_seconds SqsQueue#visibility_timeout_seconds}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contentBasedDeduplication`<sup>Optional</sup> <a name="contentBasedDeduplication" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.contentBasedDeduplication"></a>

```typescript
public readonly contentBasedDeduplication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#content_based_deduplication SqsQueue#content_based_deduplication}.

---

##### `deduplicationScope`<sup>Optional</sup> <a name="deduplicationScope" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.deduplicationScope"></a>

```typescript
public readonly deduplicationScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#deduplication_scope SqsQueue#deduplication_scope}.

---

##### `delaySeconds`<sup>Optional</sup> <a name="delaySeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.delaySeconds"></a>

```typescript
public readonly delaySeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#delay_seconds SqsQueue#delay_seconds}.

---

##### `fifoQueue`<sup>Optional</sup> <a name="fifoQueue" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.fifoQueue"></a>

```typescript
public readonly fifoQueue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#fifo_queue SqsQueue#fifo_queue}.

---

##### `fifoThroughputLimit`<sup>Optional</sup> <a name="fifoThroughputLimit" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.fifoThroughputLimit"></a>

```typescript
public readonly fifoThroughputLimit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#fifo_throughput_limit SqsQueue#fifo_throughput_limit}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#id SqsQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsDataKeyReusePeriodSeconds`<sup>Optional</sup> <a name="kmsDataKeyReusePeriodSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.kmsDataKeyReusePeriodSeconds"></a>

```typescript
public readonly kmsDataKeyReusePeriodSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#kms_data_key_reuse_period_seconds SqsQueue#kms_data_key_reuse_period_seconds}.

---

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="kmsMasterKeyId" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.kmsMasterKeyId"></a>

```typescript
public readonly kmsMasterKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#kms_master_key_id SqsQueue#kms_master_key_id}.

---

##### `maxMessageSize`<sup>Optional</sup> <a name="maxMessageSize" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.maxMessageSize"></a>

```typescript
public readonly maxMessageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#max_message_size SqsQueue#max_message_size}.

---

##### `messageRetentionSeconds`<sup>Optional</sup> <a name="messageRetentionSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.messageRetentionSeconds"></a>

```typescript
public readonly messageRetentionSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#message_retention_seconds SqsQueue#message_retention_seconds}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#name SqsQueue#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#name_prefix SqsQueue#name_prefix}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#policy SqsQueue#policy}.

---

##### `receiveWaitTimeSeconds`<sup>Optional</sup> <a name="receiveWaitTimeSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.receiveWaitTimeSeconds"></a>

```typescript
public readonly receiveWaitTimeSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#receive_wait_time_seconds SqsQueue#receive_wait_time_seconds}.

---

##### `redriveAllowPolicy`<sup>Optional</sup> <a name="redriveAllowPolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.redriveAllowPolicy"></a>

```typescript
public readonly redriveAllowPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#redrive_allow_policy SqsQueue#redrive_allow_policy}.

---

##### `redrivePolicy`<sup>Optional</sup> <a name="redrivePolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.redrivePolicy"></a>

```typescript
public readonly redrivePolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#redrive_policy SqsQueue#redrive_policy}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#region SqsQueue#region}

---

##### `sqsManagedSseEnabled`<sup>Optional</sup> <a name="sqsManagedSseEnabled" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.sqsManagedSseEnabled"></a>

```typescript
public readonly sqsManagedSseEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#sqs_managed_sse_enabled SqsQueue#sqs_managed_sse_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#tags SqsQueue#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#tags_all SqsQueue#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SqsQueueTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts">SqsQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#timeouts SqsQueue#timeouts}

---

##### `visibilityTimeoutSeconds`<sup>Optional</sup> <a name="visibilityTimeoutSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.visibilityTimeoutSeconds"></a>

```typescript
public readonly visibilityTimeoutSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#visibility_timeout_seconds SqsQueue#visibility_timeout_seconds}.

---

### SqsQueueTimeouts <a name="SqsQueueTimeouts" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts.Initializer"></a>

```typescript
import { sqsQueue } from '@cdktf/provider-aws'

const sqsQueueTimeouts: sqsQueue.SqsQueueTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#create SqsQueue#create}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#delete SqsQueue#delete}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#update SqsQueue#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#create SqsQueue#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#delete SqsQueue#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#update SqsQueue#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqsQueueTimeoutsOutputReference <a name="SqsQueueTimeoutsOutputReference" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.Initializer"></a>

```typescript
import { sqsQueue } from '@cdktf/provider-aws'

new sqsQueue.SqsQueueTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts">SqsQueueTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SqsQueueTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts">SqsQueueTimeouts</a>

---



