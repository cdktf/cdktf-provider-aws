# `s3BucketNotification` Submodule <a name="`s3BucketNotification` Submodule" id="@cdktf/provider-aws.s3BucketNotification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketNotification <a name="S3BucketNotification" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification aws_s3_bucket_notification}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer"></a>

```typescript
import { s3BucketNotification } from '@cdktf/provider-aws'

new s3BucketNotification.S3BucketNotification(scope: Construct, id: string, config: S3BucketNotificationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig">S3BucketNotificationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig">S3BucketNotificationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putLambdaFunction">putLambdaFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putQueue">putQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putTopic">putTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetEventbridge">resetEventbridge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetLambdaFunction">resetLambdaFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetQueue">resetQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetTopic">resetTopic</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putLambdaFunction` <a name="putLambdaFunction" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putLambdaFunction"></a>

```typescript
public putLambdaFunction(value: IResolvable | S3BucketNotificationLambdaFunction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putLambdaFunction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>[]

---

##### `putQueue` <a name="putQueue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putQueue"></a>

```typescript
public putQueue(value: IResolvable | S3BucketNotificationQueue[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putQueue.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>[]

---

##### `putTopic` <a name="putTopic" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putTopic"></a>

```typescript
public putTopic(value: IResolvable | S3BucketNotificationTopic[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.putTopic.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>[]

---

##### `resetEventbridge` <a name="resetEventbridge" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetEventbridge"></a>

```typescript
public resetEventbridge(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLambdaFunction` <a name="resetLambdaFunction" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetLambdaFunction"></a>

```typescript
public resetLambdaFunction(): void
```

##### `resetQueue` <a name="resetQueue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetQueue"></a>

```typescript
public resetQueue(): void
```

##### `resetTopic` <a name="resetTopic" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.resetTopic"></a>

```typescript
public resetTopic(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isConstruct"></a>

```typescript
import { s3BucketNotification } from '@cdktf/provider-aws'

s3BucketNotification.S3BucketNotification.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isTerraformElement"></a>

```typescript
import { s3BucketNotification } from '@cdktf/provider-aws'

s3BucketNotification.S3BucketNotification.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isTerraformResource"></a>

```typescript
import { s3BucketNotification } from '@cdktf/provider-aws'

s3BucketNotification.S3BucketNotification.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.lambdaFunction">lambdaFunction</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList">S3BucketNotificationLambdaFunctionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.queue">queue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList">S3BucketNotificationQueueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.topic">topic</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList">S3BucketNotificationTopicList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.eventbridgeInput">eventbridgeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.lambdaFunctionInput">lambdaFunctionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.queueInput">queueInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.topicInput">topicInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.eventbridge">eventbridge</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lambdaFunction`<sup>Required</sup> <a name="lambdaFunction" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.lambdaFunction"></a>

```typescript
public readonly lambdaFunction: S3BucketNotificationLambdaFunctionList;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList">S3BucketNotificationLambdaFunctionList</a>

---

##### `queue`<sup>Required</sup> <a name="queue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.queue"></a>

```typescript
public readonly queue: S3BucketNotificationQueueList;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList">S3BucketNotificationQueueList</a>

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.topic"></a>

```typescript
public readonly topic: S3BucketNotificationTopicList;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList">S3BucketNotificationTopicList</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `eventbridgeInput`<sup>Optional</sup> <a name="eventbridgeInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.eventbridgeInput"></a>

```typescript
public readonly eventbridgeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lambdaFunctionInput`<sup>Optional</sup> <a name="lambdaFunctionInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.lambdaFunctionInput"></a>

```typescript
public readonly lambdaFunctionInput: IResolvable | S3BucketNotificationLambdaFunction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>[]

---

##### `queueInput`<sup>Optional</sup> <a name="queueInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.queueInput"></a>

```typescript
public readonly queueInput: IResolvable | S3BucketNotificationQueue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>[]

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.topicInput"></a>

```typescript
public readonly topicInput: IResolvable | S3BucketNotificationTopic[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `eventbridge`<sup>Required</sup> <a name="eventbridge" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.eventbridge"></a>

```typescript
public readonly eventbridge: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotification.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketNotificationConfig <a name="S3BucketNotificationConfig" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.Initializer"></a>

```typescript
import { s3BucketNotification } from '@cdktf/provider-aws'

const s3BucketNotificationConfig: s3BucketNotification.S3BucketNotificationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#bucket S3BucketNotification#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.eventbridge">eventbridge</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#eventbridge S3BucketNotification#eventbridge}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.lambdaFunction">lambdaFunction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>[]</code> | lambda_function block. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.queue">queue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>[]</code> | queue block. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.topic">topic</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>[]</code> | topic block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#bucket S3BucketNotification#bucket}.

---

##### `eventbridge`<sup>Optional</sup> <a name="eventbridge" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.eventbridge"></a>

```typescript
public readonly eventbridge: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#eventbridge S3BucketNotification#eventbridge}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambdaFunction`<sup>Optional</sup> <a name="lambdaFunction" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.lambdaFunction"></a>

```typescript
public readonly lambdaFunction: IResolvable | S3BucketNotificationLambdaFunction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>[]

lambda_function block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#lambda_function S3BucketNotification#lambda_function}

---

##### `queue`<sup>Optional</sup> <a name="queue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.queue"></a>

```typescript
public readonly queue: IResolvable | S3BucketNotificationQueue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>[]

queue block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#queue S3BucketNotification#queue}

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationConfig.property.topic"></a>

```typescript
public readonly topic: IResolvable | S3BucketNotificationTopic[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>[]

topic block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#topic S3BucketNotification#topic}

---

### S3BucketNotificationLambdaFunction <a name="S3BucketNotificationLambdaFunction" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.Initializer"></a>

```typescript
import { s3BucketNotification } from '@cdktf/provider-aws'

const s3BucketNotificationLambdaFunction: s3BucketNotification.S3BucketNotificationLambdaFunction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.events">events</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.filterPrefix">filterPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.filterSuffix">filterSuffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.lambdaFunctionArn">lambdaFunctionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#lambda_function_arn S3BucketNotification#lambda_function_arn}. |

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}.

---

##### `filterPrefix`<sup>Optional</sup> <a name="filterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.filterPrefix"></a>

```typescript
public readonly filterPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}.

---

##### `filterSuffix`<sup>Optional</sup> <a name="filterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.filterSuffix"></a>

```typescript
public readonly filterSuffix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambdaFunctionArn`<sup>Optional</sup> <a name="lambdaFunctionArn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction.property.lambdaFunctionArn"></a>

```typescript
public readonly lambdaFunctionArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#lambda_function_arn S3BucketNotification#lambda_function_arn}.

---

### S3BucketNotificationQueue <a name="S3BucketNotificationQueue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.Initializer"></a>

```typescript
import { s3BucketNotification } from '@cdktf/provider-aws'

const s3BucketNotificationQueue: s3BucketNotification.S3BucketNotificationQueue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.events">events</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.queueArn">queueArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#queue_arn S3BucketNotification#queue_arn}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.filterPrefix">filterPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.filterSuffix">filterSuffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}. |

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}.

---

##### `queueArn`<sup>Required</sup> <a name="queueArn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.queueArn"></a>

```typescript
public readonly queueArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#queue_arn S3BucketNotification#queue_arn}.

---

##### `filterPrefix`<sup>Optional</sup> <a name="filterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.filterPrefix"></a>

```typescript
public readonly filterPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}.

---

##### `filterSuffix`<sup>Optional</sup> <a name="filterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.filterSuffix"></a>

```typescript
public readonly filterSuffix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### S3BucketNotificationTopic <a name="S3BucketNotificationTopic" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.Initializer"></a>

```typescript
import { s3BucketNotification } from '@cdktf/provider-aws'

const s3BucketNotificationTopic: s3BucketNotification.S3BucketNotificationTopic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.events">events</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.topicArn">topicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#topic_arn S3BucketNotification#topic_arn}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.filterPrefix">filterPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.filterSuffix">filterSuffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}. |

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#events S3BucketNotification#events}.

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#topic_arn S3BucketNotification#topic_arn}.

---

##### `filterPrefix`<sup>Optional</sup> <a name="filterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.filterPrefix"></a>

```typescript
public readonly filterPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_prefix S3BucketNotification#filter_prefix}.

---

##### `filterSuffix`<sup>Optional</sup> <a name="filterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.filterSuffix"></a>

```typescript
public readonly filterSuffix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#filter_suffix S3BucketNotification#filter_suffix}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification#id S3BucketNotification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketNotificationLambdaFunctionList <a name="S3BucketNotificationLambdaFunctionList" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer"></a>

```typescript
import { s3BucketNotification } from '@cdktf/provider-aws'

new s3BucketNotification.S3BucketNotificationLambdaFunctionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.get"></a>

```typescript
public get(index: number): S3BucketNotificationLambdaFunctionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3BucketNotificationLambdaFunction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a>[]

---


### S3BucketNotificationLambdaFunctionOutputReference <a name="S3BucketNotificationLambdaFunctionOutputReference" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer"></a>

```typescript
import { s3BucketNotification } from '@cdktf/provider-aws'

new s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetFilterPrefix">resetFilterPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetFilterSuffix">resetFilterSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetLambdaFunctionArn">resetLambdaFunctionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterPrefix` <a name="resetFilterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetFilterPrefix"></a>

```typescript
public resetFilterPrefix(): void
```

##### `resetFilterSuffix` <a name="resetFilterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetFilterSuffix"></a>

```typescript
public resetFilterSuffix(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLambdaFunctionArn` <a name="resetLambdaFunctionArn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.resetLambdaFunctionArn"></a>

```typescript
public resetLambdaFunctionArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.eventsInput">eventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterPrefixInput">filterPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterSuffixInput">filterSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.lambdaFunctionArnInput">lambdaFunctionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.events">events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterPrefix">filterPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterSuffix">filterSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.lambdaFunctionArn">lambdaFunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.eventsInput"></a>

```typescript
public readonly eventsInput: string[];
```

- *Type:* string[]

---

##### `filterPrefixInput`<sup>Optional</sup> <a name="filterPrefixInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterPrefixInput"></a>

```typescript
public readonly filterPrefixInput: string;
```

- *Type:* string

---

##### `filterSuffixInput`<sup>Optional</sup> <a name="filterSuffixInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterSuffixInput"></a>

```typescript
public readonly filterSuffixInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lambdaFunctionArnInput`<sup>Optional</sup> <a name="lambdaFunctionArnInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.lambdaFunctionArnInput"></a>

```typescript
public readonly lambdaFunctionArnInput: string;
```

- *Type:* string

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

---

##### `filterPrefix`<sup>Required</sup> <a name="filterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterPrefix"></a>

```typescript
public readonly filterPrefix: string;
```

- *Type:* string

---

##### `filterSuffix`<sup>Required</sup> <a name="filterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.filterSuffix"></a>

```typescript
public readonly filterSuffix: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lambdaFunctionArn`<sup>Required</sup> <a name="lambdaFunctionArn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.lambdaFunctionArn"></a>

```typescript
public readonly lambdaFunctionArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunctionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketNotificationLambdaFunction | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationLambdaFunction">S3BucketNotificationLambdaFunction</a> | cdktf.IResolvable

---


### S3BucketNotificationQueueList <a name="S3BucketNotificationQueueList" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer"></a>

```typescript
import { s3BucketNotification } from '@cdktf/provider-aws'

new s3BucketNotification.S3BucketNotificationQueueList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.get"></a>

```typescript
public get(index: number): S3BucketNotificationQueueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3BucketNotificationQueue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a>[]

---


### S3BucketNotificationQueueOutputReference <a name="S3BucketNotificationQueueOutputReference" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer"></a>

```typescript
import { s3BucketNotification } from '@cdktf/provider-aws'

new s3BucketNotification.S3BucketNotificationQueueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resetFilterPrefix">resetFilterPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resetFilterSuffix">resetFilterSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterPrefix` <a name="resetFilterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resetFilterPrefix"></a>

```typescript
public resetFilterPrefix(): void
```

##### `resetFilterSuffix` <a name="resetFilterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resetFilterSuffix"></a>

```typescript
public resetFilterSuffix(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.resetId"></a>

```typescript
public resetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.eventsInput">eventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterPrefixInput">filterPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterSuffixInput">filterSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.queueArnInput">queueArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.events">events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterPrefix">filterPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterSuffix">filterSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.queueArn">queueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.eventsInput"></a>

```typescript
public readonly eventsInput: string[];
```

- *Type:* string[]

---

##### `filterPrefixInput`<sup>Optional</sup> <a name="filterPrefixInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterPrefixInput"></a>

```typescript
public readonly filterPrefixInput: string;
```

- *Type:* string

---

##### `filterSuffixInput`<sup>Optional</sup> <a name="filterSuffixInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterSuffixInput"></a>

```typescript
public readonly filterSuffixInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `queueArnInput`<sup>Optional</sup> <a name="queueArnInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.queueArnInput"></a>

```typescript
public readonly queueArnInput: string;
```

- *Type:* string

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

---

##### `filterPrefix`<sup>Required</sup> <a name="filterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterPrefix"></a>

```typescript
public readonly filterPrefix: string;
```

- *Type:* string

---

##### `filterSuffix`<sup>Required</sup> <a name="filterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.filterSuffix"></a>

```typescript
public readonly filterSuffix: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `queueArn`<sup>Required</sup> <a name="queueArn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.queueArn"></a>

```typescript
public readonly queueArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketNotificationQueue | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationQueue">S3BucketNotificationQueue</a> | cdktf.IResolvable

---


### S3BucketNotificationTopicList <a name="S3BucketNotificationTopicList" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer"></a>

```typescript
import { s3BucketNotification } from '@cdktf/provider-aws'

new s3BucketNotification.S3BucketNotificationTopicList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.get"></a>

```typescript
public get(index: number): S3BucketNotificationTopicOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3BucketNotificationTopic[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a>[]

---


### S3BucketNotificationTopicOutputReference <a name="S3BucketNotificationTopicOutputReference" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer"></a>

```typescript
import { s3BucketNotification } from '@cdktf/provider-aws'

new s3BucketNotification.S3BucketNotificationTopicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resetFilterPrefix">resetFilterPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resetFilterSuffix">resetFilterSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterPrefix` <a name="resetFilterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resetFilterPrefix"></a>

```typescript
public resetFilterPrefix(): void
```

##### `resetFilterSuffix` <a name="resetFilterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resetFilterSuffix"></a>

```typescript
public resetFilterSuffix(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.resetId"></a>

```typescript
public resetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.eventsInput">eventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterPrefixInput">filterPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterSuffixInput">filterSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.events">events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterPrefix">filterPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterSuffix">filterSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.eventsInput"></a>

```typescript
public readonly eventsInput: string[];
```

- *Type:* string[]

---

##### `filterPrefixInput`<sup>Optional</sup> <a name="filterPrefixInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterPrefixInput"></a>

```typescript
public readonly filterPrefixInput: string;
```

- *Type:* string

---

##### `filterSuffixInput`<sup>Optional</sup> <a name="filterSuffixInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterSuffixInput"></a>

```typescript
public readonly filterSuffixInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.topicArnInput"></a>

```typescript
public readonly topicArnInput: string;
```

- *Type:* string

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

---

##### `filterPrefix`<sup>Required</sup> <a name="filterPrefix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterPrefix"></a>

```typescript
public readonly filterPrefix: string;
```

- *Type:* string

---

##### `filterSuffix`<sup>Required</sup> <a name="filterSuffix" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.filterSuffix"></a>

```typescript
public readonly filterSuffix: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketNotificationTopic | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketNotification.S3BucketNotificationTopic">S3BucketNotificationTopic</a> | cdktf.IResolvable

---



