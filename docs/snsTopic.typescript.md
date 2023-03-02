# `snsTopic` Submodule <a name="`snsTopic` Submodule" id="@cdktf/provider-aws.snsTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsTopic <a name="SnsTopic" id="@cdktf/provider-aws.snsTopic.SnsTopic"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_topic aws_sns_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer"></a>

```typescript
import { snsTopic } from '@cdktf/provider-aws'

new snsTopic.SnsTopic(scope: Construct, id: string, config?: SnsTopicConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig">SnsTopicConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig">SnsTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationFailureFeedbackRoleArn">resetApplicationFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationSuccessFeedbackRoleArn">resetApplicationSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationSuccessFeedbackSampleRate">resetApplicationSuccessFeedbackSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetContentBasedDeduplication">resetContentBasedDeduplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetDeliveryPolicy">resetDeliveryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetFifoTopic">resetFifoTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseFailureFeedbackRoleArn">resetFirehoseFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseSuccessFeedbackRoleArn">resetFirehoseSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseSuccessFeedbackSampleRate">resetFirehoseSuccessFeedbackSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpFailureFeedbackRoleArn">resetHttpFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpSuccessFeedbackRoleArn">resetHttpSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpSuccessFeedbackSampleRate">resetHttpSuccessFeedbackSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetKmsMasterKeyId">resetKmsMasterKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaFailureFeedbackRoleArn">resetLambdaFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaSuccessFeedbackRoleArn">resetLambdaSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaSuccessFeedbackSampleRate">resetLambdaSuccessFeedbackSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetSignatureVersion">resetSignatureVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsFailureFeedbackRoleArn">resetSqsFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsSuccessFeedbackRoleArn">resetSqsSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsSuccessFeedbackSampleRate">resetSqsSuccessFeedbackSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetTracingConfig">resetTracingConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.snsTopic.SnsTopic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.snsTopic.SnsTopic.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.snsTopic.SnsTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.snsTopic.SnsTopic.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.snsTopic.SnsTopic.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.snsTopic.SnsTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.snsTopic.SnsTopic.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.snsTopic.SnsTopic.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetApplicationFailureFeedbackRoleArn` <a name="resetApplicationFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationFailureFeedbackRoleArn"></a>

```typescript
public resetApplicationFailureFeedbackRoleArn(): void
```

##### `resetApplicationSuccessFeedbackRoleArn` <a name="resetApplicationSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationSuccessFeedbackRoleArn"></a>

```typescript
public resetApplicationSuccessFeedbackRoleArn(): void
```

##### `resetApplicationSuccessFeedbackSampleRate` <a name="resetApplicationSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationSuccessFeedbackSampleRate"></a>

```typescript
public resetApplicationSuccessFeedbackSampleRate(): void
```

##### `resetContentBasedDeduplication` <a name="resetContentBasedDeduplication" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetContentBasedDeduplication"></a>

```typescript
public resetContentBasedDeduplication(): void
```

##### `resetDeliveryPolicy` <a name="resetDeliveryPolicy" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetDeliveryPolicy"></a>

```typescript
public resetDeliveryPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFifoTopic` <a name="resetFifoTopic" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetFifoTopic"></a>

```typescript
public resetFifoTopic(): void
```

##### `resetFirehoseFailureFeedbackRoleArn` <a name="resetFirehoseFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseFailureFeedbackRoleArn"></a>

```typescript
public resetFirehoseFailureFeedbackRoleArn(): void
```

##### `resetFirehoseSuccessFeedbackRoleArn` <a name="resetFirehoseSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseSuccessFeedbackRoleArn"></a>

```typescript
public resetFirehoseSuccessFeedbackRoleArn(): void
```

##### `resetFirehoseSuccessFeedbackSampleRate` <a name="resetFirehoseSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseSuccessFeedbackSampleRate"></a>

```typescript
public resetFirehoseSuccessFeedbackSampleRate(): void
```

##### `resetHttpFailureFeedbackRoleArn` <a name="resetHttpFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpFailureFeedbackRoleArn"></a>

```typescript
public resetHttpFailureFeedbackRoleArn(): void
```

##### `resetHttpSuccessFeedbackRoleArn` <a name="resetHttpSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpSuccessFeedbackRoleArn"></a>

```typescript
public resetHttpSuccessFeedbackRoleArn(): void
```

##### `resetHttpSuccessFeedbackSampleRate` <a name="resetHttpSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpSuccessFeedbackSampleRate"></a>

```typescript
public resetHttpSuccessFeedbackSampleRate(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsMasterKeyId` <a name="resetKmsMasterKeyId" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetKmsMasterKeyId"></a>

```typescript
public resetKmsMasterKeyId(): void
```

##### `resetLambdaFailureFeedbackRoleArn` <a name="resetLambdaFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaFailureFeedbackRoleArn"></a>

```typescript
public resetLambdaFailureFeedbackRoleArn(): void
```

##### `resetLambdaSuccessFeedbackRoleArn` <a name="resetLambdaSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaSuccessFeedbackRoleArn"></a>

```typescript
public resetLambdaSuccessFeedbackRoleArn(): void
```

##### `resetLambdaSuccessFeedbackSampleRate` <a name="resetLambdaSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaSuccessFeedbackSampleRate"></a>

```typescript
public resetLambdaSuccessFeedbackSampleRate(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetPolicy"></a>

```typescript
public resetPolicy(): void
```

##### `resetSignatureVersion` <a name="resetSignatureVersion" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetSignatureVersion"></a>

```typescript
public resetSignatureVersion(): void
```

##### `resetSqsFailureFeedbackRoleArn` <a name="resetSqsFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsFailureFeedbackRoleArn"></a>

```typescript
public resetSqsFailureFeedbackRoleArn(): void
```

##### `resetSqsSuccessFeedbackRoleArn` <a name="resetSqsSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsSuccessFeedbackRoleArn"></a>

```typescript
public resetSqsSuccessFeedbackRoleArn(): void
```

##### `resetSqsSuccessFeedbackSampleRate` <a name="resetSqsSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsSuccessFeedbackSampleRate"></a>

```typescript
public resetSqsSuccessFeedbackSampleRate(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTracingConfig` <a name="resetTracingConfig" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetTracingConfig"></a>

```typescript
public resetTracingConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.snsTopic.SnsTopic.isConstruct"></a>

```typescript
import { snsTopic } from '@cdktf/provider-aws'

snsTopic.SnsTopic.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsTopic.SnsTopic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformElement"></a>

```typescript
import { snsTopic } from '@cdktf/provider-aws'

snsTopic.SnsTopic.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformResource"></a>

```typescript
import { snsTopic } from '@cdktf/provider-aws'

snsTopic.SnsTopic.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationFailureFeedbackRoleArnInput">applicationFailureFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackRoleArnInput">applicationSuccessFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackSampleRateInput">applicationSuccessFeedbackSampleRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.contentBasedDeduplicationInput">contentBasedDeduplicationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.deliveryPolicyInput">deliveryPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.fifoTopicInput">fifoTopicInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseFailureFeedbackRoleArnInput">firehoseFailureFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackRoleArnInput">firehoseSuccessFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackSampleRateInput">firehoseSuccessFeedbackSampleRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpFailureFeedbackRoleArnInput">httpFailureFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackRoleArnInput">httpSuccessFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackSampleRateInput">httpSuccessFeedbackSampleRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.kmsMasterKeyIdInput">kmsMasterKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaFailureFeedbackRoleArnInput">lambdaFailureFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackRoleArnInput">lambdaSuccessFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackSampleRateInput">lambdaSuccessFeedbackSampleRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.signatureVersionInput">signatureVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsFailureFeedbackRoleArnInput">sqsFailureFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackRoleArnInput">sqsSuccessFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackSampleRateInput">sqsSuccessFeedbackSampleRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tracingConfigInput">tracingConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationFailureFeedbackRoleArn">applicationFailureFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackRoleArn">applicationSuccessFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackSampleRate">applicationSuccessFeedbackSampleRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.contentBasedDeduplication">contentBasedDeduplication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.deliveryPolicy">deliveryPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.fifoTopic">fifoTopic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseFailureFeedbackRoleArn">firehoseFailureFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackRoleArn">firehoseSuccessFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackSampleRate">firehoseSuccessFeedbackSampleRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpFailureFeedbackRoleArn">httpFailureFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackRoleArn">httpSuccessFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackSampleRate">httpSuccessFeedbackSampleRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaFailureFeedbackRoleArn">lambdaFailureFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackRoleArn">lambdaSuccessFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackSampleRate">lambdaSuccessFeedbackSampleRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.signatureVersion">signatureVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsFailureFeedbackRoleArn">sqsFailureFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackRoleArn">sqsSuccessFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackSampleRate">sqsSuccessFeedbackSampleRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tracingConfig">tracingConfig</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `applicationFailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="applicationFailureFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationFailureFeedbackRoleArnInput"></a>

```typescript
public readonly applicationFailureFeedbackRoleArnInput: string;
```

- *Type:* string

---

##### `applicationSuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="applicationSuccessFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackRoleArnInput"></a>

```typescript
public readonly applicationSuccessFeedbackRoleArnInput: string;
```

- *Type:* string

---

##### `applicationSuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="applicationSuccessFeedbackSampleRateInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackSampleRateInput"></a>

```typescript
public readonly applicationSuccessFeedbackSampleRateInput: number;
```

- *Type:* number

---

##### `contentBasedDeduplicationInput`<sup>Optional</sup> <a name="contentBasedDeduplicationInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.contentBasedDeduplicationInput"></a>

```typescript
public readonly contentBasedDeduplicationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deliveryPolicyInput`<sup>Optional</sup> <a name="deliveryPolicyInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.deliveryPolicyInput"></a>

```typescript
public readonly deliveryPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `fifoTopicInput`<sup>Optional</sup> <a name="fifoTopicInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.fifoTopicInput"></a>

```typescript
public readonly fifoTopicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firehoseFailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="firehoseFailureFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseFailureFeedbackRoleArnInput"></a>

```typescript
public readonly firehoseFailureFeedbackRoleArnInput: string;
```

- *Type:* string

---

##### `firehoseSuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="firehoseSuccessFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackRoleArnInput"></a>

```typescript
public readonly firehoseSuccessFeedbackRoleArnInput: string;
```

- *Type:* string

---

##### `firehoseSuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="firehoseSuccessFeedbackSampleRateInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackSampleRateInput"></a>

```typescript
public readonly firehoseSuccessFeedbackSampleRateInput: number;
```

- *Type:* number

---

##### `httpFailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="httpFailureFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpFailureFeedbackRoleArnInput"></a>

```typescript
public readonly httpFailureFeedbackRoleArnInput: string;
```

- *Type:* string

---

##### `httpSuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="httpSuccessFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackRoleArnInput"></a>

```typescript
public readonly httpSuccessFeedbackRoleArnInput: string;
```

- *Type:* string

---

##### `httpSuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="httpSuccessFeedbackSampleRateInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackSampleRateInput"></a>

```typescript
public readonly httpSuccessFeedbackSampleRateInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsMasterKeyIdInput`<sup>Optional</sup> <a name="kmsMasterKeyIdInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.kmsMasterKeyIdInput"></a>

```typescript
public readonly kmsMasterKeyIdInput: string;
```

- *Type:* string

---

##### `lambdaFailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="lambdaFailureFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaFailureFeedbackRoleArnInput"></a>

```typescript
public readonly lambdaFailureFeedbackRoleArnInput: string;
```

- *Type:* string

---

##### `lambdaSuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="lambdaSuccessFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackRoleArnInput"></a>

```typescript
public readonly lambdaSuccessFeedbackRoleArnInput: string;
```

- *Type:* string

---

##### `lambdaSuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="lambdaSuccessFeedbackSampleRateInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackSampleRateInput"></a>

```typescript
public readonly lambdaSuccessFeedbackSampleRateInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `signatureVersionInput`<sup>Optional</sup> <a name="signatureVersionInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.signatureVersionInput"></a>

```typescript
public readonly signatureVersionInput: number;
```

- *Type:* number

---

##### `sqsFailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="sqsFailureFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsFailureFeedbackRoleArnInput"></a>

```typescript
public readonly sqsFailureFeedbackRoleArnInput: string;
```

- *Type:* string

---

##### `sqsSuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="sqsSuccessFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackRoleArnInput"></a>

```typescript
public readonly sqsSuccessFeedbackRoleArnInput: string;
```

- *Type:* string

---

##### `sqsSuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="sqsSuccessFeedbackSampleRateInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackSampleRateInput"></a>

```typescript
public readonly sqsSuccessFeedbackSampleRateInput: number;
```

- *Type:* number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tracingConfigInput`<sup>Optional</sup> <a name="tracingConfigInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tracingConfigInput"></a>

```typescript
public readonly tracingConfigInput: string;
```

- *Type:* string

---

##### `applicationFailureFeedbackRoleArn`<sup>Required</sup> <a name="applicationFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationFailureFeedbackRoleArn"></a>

```typescript
public readonly applicationFailureFeedbackRoleArn: string;
```

- *Type:* string

---

##### `applicationSuccessFeedbackRoleArn`<sup>Required</sup> <a name="applicationSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackRoleArn"></a>

```typescript
public readonly applicationSuccessFeedbackRoleArn: string;
```

- *Type:* string

---

##### `applicationSuccessFeedbackSampleRate`<sup>Required</sup> <a name="applicationSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackSampleRate"></a>

```typescript
public readonly applicationSuccessFeedbackSampleRate: number;
```

- *Type:* number

---

##### `contentBasedDeduplication`<sup>Required</sup> <a name="contentBasedDeduplication" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.contentBasedDeduplication"></a>

```typescript
public readonly contentBasedDeduplication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deliveryPolicy`<sup>Required</sup> <a name="deliveryPolicy" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.deliveryPolicy"></a>

```typescript
public readonly deliveryPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `fifoTopic`<sup>Required</sup> <a name="fifoTopic" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.fifoTopic"></a>

```typescript
public readonly fifoTopic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firehoseFailureFeedbackRoleArn`<sup>Required</sup> <a name="firehoseFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseFailureFeedbackRoleArn"></a>

```typescript
public readonly firehoseFailureFeedbackRoleArn: string;
```

- *Type:* string

---

##### `firehoseSuccessFeedbackRoleArn`<sup>Required</sup> <a name="firehoseSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackRoleArn"></a>

```typescript
public readonly firehoseSuccessFeedbackRoleArn: string;
```

- *Type:* string

---

##### `firehoseSuccessFeedbackSampleRate`<sup>Required</sup> <a name="firehoseSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackSampleRate"></a>

```typescript
public readonly firehoseSuccessFeedbackSampleRate: number;
```

- *Type:* number

---

##### `httpFailureFeedbackRoleArn`<sup>Required</sup> <a name="httpFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpFailureFeedbackRoleArn"></a>

```typescript
public readonly httpFailureFeedbackRoleArn: string;
```

- *Type:* string

---

##### `httpSuccessFeedbackRoleArn`<sup>Required</sup> <a name="httpSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackRoleArn"></a>

```typescript
public readonly httpSuccessFeedbackRoleArn: string;
```

- *Type:* string

---

##### `httpSuccessFeedbackSampleRate`<sup>Required</sup> <a name="httpSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackSampleRate"></a>

```typescript
public readonly httpSuccessFeedbackSampleRate: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsMasterKeyId`<sup>Required</sup> <a name="kmsMasterKeyId" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.kmsMasterKeyId"></a>

```typescript
public readonly kmsMasterKeyId: string;
```

- *Type:* string

---

##### `lambdaFailureFeedbackRoleArn`<sup>Required</sup> <a name="lambdaFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaFailureFeedbackRoleArn"></a>

```typescript
public readonly lambdaFailureFeedbackRoleArn: string;
```

- *Type:* string

---

##### `lambdaSuccessFeedbackRoleArn`<sup>Required</sup> <a name="lambdaSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackRoleArn"></a>

```typescript
public readonly lambdaSuccessFeedbackRoleArn: string;
```

- *Type:* string

---

##### `lambdaSuccessFeedbackSampleRate`<sup>Required</sup> <a name="lambdaSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackSampleRate"></a>

```typescript
public readonly lambdaSuccessFeedbackSampleRate: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `signatureVersion`<sup>Required</sup> <a name="signatureVersion" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.signatureVersion"></a>

```typescript
public readonly signatureVersion: number;
```

- *Type:* number

---

##### `sqsFailureFeedbackRoleArn`<sup>Required</sup> <a name="sqsFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsFailureFeedbackRoleArn"></a>

```typescript
public readonly sqsFailureFeedbackRoleArn: string;
```

- *Type:* string

---

##### `sqsSuccessFeedbackRoleArn`<sup>Required</sup> <a name="sqsSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackRoleArn"></a>

```typescript
public readonly sqsSuccessFeedbackRoleArn: string;
```

- *Type:* string

---

##### `sqsSuccessFeedbackSampleRate`<sup>Required</sup> <a name="sqsSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackSampleRate"></a>

```typescript
public readonly sqsSuccessFeedbackSampleRate: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tracingConfig`<sup>Required</sup> <a name="tracingConfig" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tracingConfig"></a>

```typescript
public readonly tracingConfig: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SnsTopicConfig <a name="SnsTopicConfig" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.Initializer"></a>

```typescript
import { snsTopic } from '@cdktf/provider-aws'

const snsTopicConfig: snsTopic.SnsTopicConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationFailureFeedbackRoleArn">applicationFailureFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_failure_feedback_role_arn SnsTopic#application_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationSuccessFeedbackRoleArn">applicationSuccessFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_role_arn SnsTopic#application_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationSuccessFeedbackSampleRate">applicationSuccessFeedbackSampleRate</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_sample_rate SnsTopic#application_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.contentBasedDeduplication">contentBasedDeduplication</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#content_based_deduplication SnsTopic#content_based_deduplication}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.deliveryPolicy">deliveryPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#delivery_policy SnsTopic#delivery_policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#display_name SnsTopic#display_name}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.fifoTopic">fifoTopic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#fifo_topic SnsTopic#fifo_topic}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseFailureFeedbackRoleArn">firehoseFailureFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_failure_feedback_role_arn SnsTopic#firehose_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseSuccessFeedbackRoleArn">firehoseSuccessFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_role_arn SnsTopic#firehose_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseSuccessFeedbackSampleRate">firehoseSuccessFeedbackSampleRate</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_sample_rate SnsTopic#firehose_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpFailureFeedbackRoleArn">httpFailureFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_failure_feedback_role_arn SnsTopic#http_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpSuccessFeedbackRoleArn">httpSuccessFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_role_arn SnsTopic#http_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpSuccessFeedbackSampleRate">httpSuccessFeedbackSampleRate</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_sample_rate SnsTopic#http_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#id SnsTopic#id}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.kmsMasterKeyId">kmsMasterKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#kms_master_key_id SnsTopic#kms_master_key_id}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaFailureFeedbackRoleArn">lambdaFailureFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_failure_feedback_role_arn SnsTopic#lambda_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaSuccessFeedbackRoleArn">lambdaSuccessFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_role_arn SnsTopic#lambda_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaSuccessFeedbackSampleRate">lambdaSuccessFeedbackSampleRate</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_sample_rate SnsTopic#lambda_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name SnsTopic#name}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name_prefix SnsTopic#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.policy">policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#policy SnsTopic#policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.signatureVersion">signatureVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#signature_version SnsTopic#signature_version}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsFailureFeedbackRoleArn">sqsFailureFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_failure_feedback_role_arn SnsTopic#sqs_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsSuccessFeedbackRoleArn">sqsSuccessFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_role_arn SnsTopic#sqs_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsSuccessFeedbackSampleRate">sqsSuccessFeedbackSampleRate</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_sample_rate SnsTopic#sqs_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags SnsTopic#tags}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags_all SnsTopic#tags_all}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tracingConfig">tracingConfig</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tracing_config SnsTopic#tracing_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationFailureFeedbackRoleArn`<sup>Optional</sup> <a name="applicationFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationFailureFeedbackRoleArn"></a>

```typescript
public readonly applicationFailureFeedbackRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_failure_feedback_role_arn SnsTopic#application_failure_feedback_role_arn}.

---

##### `applicationSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="applicationSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationSuccessFeedbackRoleArn"></a>

```typescript
public readonly applicationSuccessFeedbackRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_role_arn SnsTopic#application_success_feedback_role_arn}.

---

##### `applicationSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="applicationSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationSuccessFeedbackSampleRate"></a>

```typescript
public readonly applicationSuccessFeedbackSampleRate: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_sample_rate SnsTopic#application_success_feedback_sample_rate}.

---

##### `contentBasedDeduplication`<sup>Optional</sup> <a name="contentBasedDeduplication" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.contentBasedDeduplication"></a>

```typescript
public readonly contentBasedDeduplication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#content_based_deduplication SnsTopic#content_based_deduplication}.

---

##### `deliveryPolicy`<sup>Optional</sup> <a name="deliveryPolicy" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.deliveryPolicy"></a>

```typescript
public readonly deliveryPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#delivery_policy SnsTopic#delivery_policy}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#display_name SnsTopic#display_name}.

---

##### `fifoTopic`<sup>Optional</sup> <a name="fifoTopic" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.fifoTopic"></a>

```typescript
public readonly fifoTopic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#fifo_topic SnsTopic#fifo_topic}.

---

##### `firehoseFailureFeedbackRoleArn`<sup>Optional</sup> <a name="firehoseFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseFailureFeedbackRoleArn"></a>

```typescript
public readonly firehoseFailureFeedbackRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_failure_feedback_role_arn SnsTopic#firehose_failure_feedback_role_arn}.

---

##### `firehoseSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="firehoseSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseSuccessFeedbackRoleArn"></a>

```typescript
public readonly firehoseSuccessFeedbackRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_role_arn SnsTopic#firehose_success_feedback_role_arn}.

---

##### `firehoseSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="firehoseSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseSuccessFeedbackSampleRate"></a>

```typescript
public readonly firehoseSuccessFeedbackSampleRate: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_sample_rate SnsTopic#firehose_success_feedback_sample_rate}.

---

##### `httpFailureFeedbackRoleArn`<sup>Optional</sup> <a name="httpFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpFailureFeedbackRoleArn"></a>

```typescript
public readonly httpFailureFeedbackRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_failure_feedback_role_arn SnsTopic#http_failure_feedback_role_arn}.

---

##### `httpSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="httpSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpSuccessFeedbackRoleArn"></a>

```typescript
public readonly httpSuccessFeedbackRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_role_arn SnsTopic#http_success_feedback_role_arn}.

---

##### `httpSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="httpSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpSuccessFeedbackSampleRate"></a>

```typescript
public readonly httpSuccessFeedbackSampleRate: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_sample_rate SnsTopic#http_success_feedback_sample_rate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#id SnsTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsMasterKeyId`<sup>Optional</sup> <a name="kmsMasterKeyId" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.kmsMasterKeyId"></a>

```typescript
public readonly kmsMasterKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#kms_master_key_id SnsTopic#kms_master_key_id}.

---

##### `lambdaFailureFeedbackRoleArn`<sup>Optional</sup> <a name="lambdaFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaFailureFeedbackRoleArn"></a>

```typescript
public readonly lambdaFailureFeedbackRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_failure_feedback_role_arn SnsTopic#lambda_failure_feedback_role_arn}.

---

##### `lambdaSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="lambdaSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaSuccessFeedbackRoleArn"></a>

```typescript
public readonly lambdaSuccessFeedbackRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_role_arn SnsTopic#lambda_success_feedback_role_arn}.

---

##### `lambdaSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="lambdaSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaSuccessFeedbackSampleRate"></a>

```typescript
public readonly lambdaSuccessFeedbackSampleRate: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_sample_rate SnsTopic#lambda_success_feedback_sample_rate}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name SnsTopic#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name_prefix SnsTopic#name_prefix}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#policy SnsTopic#policy}.

---

##### `signatureVersion`<sup>Optional</sup> <a name="signatureVersion" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.signatureVersion"></a>

```typescript
public readonly signatureVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#signature_version SnsTopic#signature_version}.

---

##### `sqsFailureFeedbackRoleArn`<sup>Optional</sup> <a name="sqsFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsFailureFeedbackRoleArn"></a>

```typescript
public readonly sqsFailureFeedbackRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_failure_feedback_role_arn SnsTopic#sqs_failure_feedback_role_arn}.

---

##### `sqsSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="sqsSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsSuccessFeedbackRoleArn"></a>

```typescript
public readonly sqsSuccessFeedbackRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_role_arn SnsTopic#sqs_success_feedback_role_arn}.

---

##### `sqsSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="sqsSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsSuccessFeedbackSampleRate"></a>

```typescript
public readonly sqsSuccessFeedbackSampleRate: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_sample_rate SnsTopic#sqs_success_feedback_sample_rate}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags SnsTopic#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags_all SnsTopic#tags_all}.

---

##### `tracingConfig`<sup>Optional</sup> <a name="tracingConfig" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tracingConfig"></a>

```typescript
public readonly tracingConfig: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tracing_config SnsTopic#tracing_config}.

---



