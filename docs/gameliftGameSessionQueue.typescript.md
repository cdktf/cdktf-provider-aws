# `gameliftGameSessionQueue` Submodule <a name="`gameliftGameSessionQueue` Submodule" id="@cdktf/provider-aws.gameliftGameSessionQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftGameSessionQueue <a name="GameliftGameSessionQueue" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue aws_gamelift_game_session_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktf/provider-aws'

new gameliftGameSessionQueue.GameliftGameSessionQueue(scope: Construct, id: string, config: GameliftGameSessionQueueConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig">GameliftGameSessionQueueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig">GameliftGameSessionQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.putPlayerLatencyPolicy">putPlayerLatencyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetNotificationTarget">resetNotificationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetPlayerLatencyPolicy">resetPlayerLatencyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putPlayerLatencyPolicy` <a name="putPlayerLatencyPolicy" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.putPlayerLatencyPolicy"></a>

```typescript
public putPlayerLatencyPolicy(value: IResolvable | GameliftGameSessionQueuePlayerLatencyPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.putPlayerLatencyPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy">GameliftGameSessionQueuePlayerLatencyPolicy</a>[]

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetDestinations"></a>

```typescript
public resetDestinations(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNotificationTarget` <a name="resetNotificationTarget" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetNotificationTarget"></a>

```typescript
public resetNotificationTarget(): void
```

##### `resetPlayerLatencyPolicy` <a name="resetPlayerLatencyPolicy" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetPlayerLatencyPolicy"></a>

```typescript
public resetPlayerLatencyPolicy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTimeoutInSeconds"></a>

```typescript
public resetTimeoutInSeconds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isConstruct"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktf/provider-aws'

gameliftGameSessionQueue.GameliftGameSessionQueue.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformElement"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktf/provider-aws'

gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformResource"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktf/provider-aws'

gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPolicy">playerLatencyPolicy</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList">GameliftGameSessionQueuePlayerLatencyPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinationsInput">destinationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTargetInput">notificationTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPolicyInput">playerLatencyPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy">GameliftGameSessionQueuePlayerLatencyPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinations">destinations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTarget">notificationTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `playerLatencyPolicy`<sup>Required</sup> <a name="playerLatencyPolicy" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPolicy"></a>

```typescript
public readonly playerLatencyPolicy: GameliftGameSessionQueuePlayerLatencyPolicyList;
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList">GameliftGameSessionQueuePlayerLatencyPolicyList</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationTargetInput`<sup>Optional</sup> <a name="notificationTargetInput" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTargetInput"></a>

```typescript
public readonly notificationTargetInput: string;
```

- *Type:* string

---

##### `playerLatencyPolicyInput`<sup>Optional</sup> <a name="playerLatencyPolicyInput" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPolicyInput"></a>

```typescript
public readonly playerLatencyPolicyInput: IResolvable | GameliftGameSessionQueuePlayerLatencyPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy">GameliftGameSessionQueuePlayerLatencyPolicy</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSecondsInput"></a>

```typescript
public readonly timeoutInSecondsInput: number;
```

- *Type:* number

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinations"></a>

```typescript
public readonly destinations: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notificationTarget`<sup>Required</sup> <a name="notificationTarget" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTarget"></a>

```typescript
public readonly notificationTarget: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftGameSessionQueueConfig <a name="GameliftGameSessionQueueConfig" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.Initializer"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktf/provider-aws'

const gameliftGameSessionQueueConfig: gameliftGameSessionQueue.GameliftGameSessionQueueConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#name GameliftGameSessionQueue#name}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.destinations">destinations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#destinations GameliftGameSessionQueue#destinations}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#id GameliftGameSessionQueue#id}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.notificationTarget">notificationTarget</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#notification_target GameliftGameSessionQueue#notification_target}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.playerLatencyPolicy">playerLatencyPolicy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy">GameliftGameSessionQueuePlayerLatencyPolicy</a>[]</code> | player_latency_policy block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#tags GameliftGameSessionQueue#tags}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#tags_all GameliftGameSessionQueue#tags_all}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#timeout_in_seconds GameliftGameSessionQueue#timeout_in_seconds}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#name GameliftGameSessionQueue#name}.

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.destinations"></a>

```typescript
public readonly destinations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#destinations GameliftGameSessionQueue#destinations}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#id GameliftGameSessionQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notificationTarget`<sup>Optional</sup> <a name="notificationTarget" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.notificationTarget"></a>

```typescript
public readonly notificationTarget: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#notification_target GameliftGameSessionQueue#notification_target}.

---

##### `playerLatencyPolicy`<sup>Optional</sup> <a name="playerLatencyPolicy" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.playerLatencyPolicy"></a>

```typescript
public readonly playerLatencyPolicy: IResolvable | GameliftGameSessionQueuePlayerLatencyPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy">GameliftGameSessionQueuePlayerLatencyPolicy</a>[]

player_latency_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#player_latency_policy GameliftGameSessionQueue#player_latency_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#tags GameliftGameSessionQueue#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#tags_all GameliftGameSessionQueue#tags_all}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#timeout_in_seconds GameliftGameSessionQueue#timeout_in_seconds}.

---

### GameliftGameSessionQueuePlayerLatencyPolicy <a name="GameliftGameSessionQueuePlayerLatencyPolicy" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy.Initializer"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktf/provider-aws'

const gameliftGameSessionQueuePlayerLatencyPolicy: gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy.property.maximumIndividualPlayerLatencyMilliseconds">maximumIndividualPlayerLatencyMilliseconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#maximum_individual_player_latency_milliseconds GameliftGameSessionQueue#maximum_individual_player_latency_milliseconds}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy.property.policyDurationSeconds">policyDurationSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#policy_duration_seconds GameliftGameSessionQueue#policy_duration_seconds}. |

---

##### `maximumIndividualPlayerLatencyMilliseconds`<sup>Required</sup> <a name="maximumIndividualPlayerLatencyMilliseconds" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy.property.maximumIndividualPlayerLatencyMilliseconds"></a>

```typescript
public readonly maximumIndividualPlayerLatencyMilliseconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#maximum_individual_player_latency_milliseconds GameliftGameSessionQueue#maximum_individual_player_latency_milliseconds}.

---

##### `policyDurationSeconds`<sup>Optional</sup> <a name="policyDurationSeconds" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy.property.policyDurationSeconds"></a>

```typescript
public readonly policyDurationSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#policy_duration_seconds GameliftGameSessionQueue#policy_duration_seconds}.

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftGameSessionQueuePlayerLatencyPolicyList <a name="GameliftGameSessionQueuePlayerLatencyPolicyList" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.Initializer"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktf/provider-aws'

new gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.get"></a>

```typescript
public get(index: number): GameliftGameSessionQueuePlayerLatencyPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy">GameliftGameSessionQueuePlayerLatencyPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameliftGameSessionQueuePlayerLatencyPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy">GameliftGameSessionQueuePlayerLatencyPolicy</a>[]

---


### GameliftGameSessionQueuePlayerLatencyPolicyOutputReference <a name="GameliftGameSessionQueuePlayerLatencyPolicyOutputReference" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer"></a>

```typescript
import { gameliftGameSessionQueue } from '@cdktf/provider-aws'

new gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.resetPolicyDurationSeconds">resetPolicyDurationSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPolicyDurationSeconds` <a name="resetPolicyDurationSeconds" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.resetPolicyDurationSeconds"></a>

```typescript
public resetPolicyDurationSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.maximumIndividualPlayerLatencyMillisecondsInput">maximumIndividualPlayerLatencyMillisecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.policyDurationSecondsInput">policyDurationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.maximumIndividualPlayerLatencyMilliseconds">maximumIndividualPlayerLatencyMilliseconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.policyDurationSeconds">policyDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy">GameliftGameSessionQueuePlayerLatencyPolicy</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumIndividualPlayerLatencyMillisecondsInput`<sup>Optional</sup> <a name="maximumIndividualPlayerLatencyMillisecondsInput" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.maximumIndividualPlayerLatencyMillisecondsInput"></a>

```typescript
public readonly maximumIndividualPlayerLatencyMillisecondsInput: number;
```

- *Type:* number

---

##### `policyDurationSecondsInput`<sup>Optional</sup> <a name="policyDurationSecondsInput" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.policyDurationSecondsInput"></a>

```typescript
public readonly policyDurationSecondsInput: number;
```

- *Type:* number

---

##### `maximumIndividualPlayerLatencyMilliseconds`<sup>Required</sup> <a name="maximumIndividualPlayerLatencyMilliseconds" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.maximumIndividualPlayerLatencyMilliseconds"></a>

```typescript
public readonly maximumIndividualPlayerLatencyMilliseconds: number;
```

- *Type:* number

---

##### `policyDurationSeconds`<sup>Required</sup> <a name="policyDurationSeconds" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.policyDurationSeconds"></a>

```typescript
public readonly policyDurationSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GameliftGameSessionQueuePlayerLatencyPolicy | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy">GameliftGameSessionQueuePlayerLatencyPolicy</a> | cdktf.IResolvable

---



