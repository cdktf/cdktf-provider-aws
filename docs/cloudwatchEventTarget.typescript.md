# `cloudwatchEventTarget` Submodule <a name="`cloudwatchEventTarget` Submodule" id="@cdktf/provider-aws.cloudwatchEventTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchEventTarget <a name="CloudwatchEventTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target aws_cloudwatch_event_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

new cloudwatchEventTarget.CloudwatchEventTarget(scope: Construct, id: string, config: CloudwatchEventTargetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig">CloudwatchEventTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig">CloudwatchEventTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putBatchTarget">putBatchTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putDeadLetterConfig">putDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putEcsTarget">putEcsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putHttpTarget">putHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putInputTransformer">putInputTransformer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putKinesisTarget">putKinesisTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRedshiftTarget">putRedshiftTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRetryPolicy">putRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRunCommandTargets">putRunCommandTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putSqsTarget">putSqsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetBatchTarget">resetBatchTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetDeadLetterConfig">resetDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetEcsTarget">resetEcsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetEventBusName">resetEventBusName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetHttpTarget">resetHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetInputPath">resetInputPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetInputTransformer">resetInputTransformer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetKinesisTarget">resetKinesisTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRedshiftTarget">resetRedshiftTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRetryPolicy">resetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRunCommandTargets">resetRunCommandTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetSqsTarget">resetSqsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetTargetId">resetTargetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putBatchTarget` <a name="putBatchTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putBatchTarget"></a>

```typescript
public putBatchTarget(value: CloudwatchEventTargetBatchTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putBatchTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a>

---

##### `putDeadLetterConfig` <a name="putDeadLetterConfig" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putDeadLetterConfig"></a>

```typescript
public putDeadLetterConfig(value: CloudwatchEventTargetDeadLetterConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putDeadLetterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a>

---

##### `putEcsTarget` <a name="putEcsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putEcsTarget"></a>

```typescript
public putEcsTarget(value: CloudwatchEventTargetEcsTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putEcsTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a>

---

##### `putHttpTarget` <a name="putHttpTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putHttpTarget"></a>

```typescript
public putHttpTarget(value: CloudwatchEventTargetHttpTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putHttpTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a>

---

##### `putInputTransformer` <a name="putInputTransformer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putInputTransformer"></a>

```typescript
public putInputTransformer(value: CloudwatchEventTargetInputTransformer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putInputTransformer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a>

---

##### `putKinesisTarget` <a name="putKinesisTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putKinesisTarget"></a>

```typescript
public putKinesisTarget(value: CloudwatchEventTargetKinesisTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putKinesisTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a>

---

##### `putRedshiftTarget` <a name="putRedshiftTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRedshiftTarget"></a>

```typescript
public putRedshiftTarget(value: CloudwatchEventTargetRedshiftTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRedshiftTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a>

---

##### `putRetryPolicy` <a name="putRetryPolicy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRetryPolicy"></a>

```typescript
public putRetryPolicy(value: CloudwatchEventTargetRetryPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a>

---

##### `putRunCommandTargets` <a name="putRunCommandTargets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRunCommandTargets"></a>

```typescript
public putRunCommandTargets(value: IResolvable | CloudwatchEventTargetRunCommandTargets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putRunCommandTargets.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>[]

---

##### `putSqsTarget` <a name="putSqsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putSqsTarget"></a>

```typescript
public putSqsTarget(value: CloudwatchEventTargetSqsTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.putSqsTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a>

---

##### `resetBatchTarget` <a name="resetBatchTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetBatchTarget"></a>

```typescript
public resetBatchTarget(): void
```

##### `resetDeadLetterConfig` <a name="resetDeadLetterConfig" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetDeadLetterConfig"></a>

```typescript
public resetDeadLetterConfig(): void
```

##### `resetEcsTarget` <a name="resetEcsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetEcsTarget"></a>

```typescript
public resetEcsTarget(): void
```

##### `resetEventBusName` <a name="resetEventBusName" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetEventBusName"></a>

```typescript
public resetEventBusName(): void
```

##### `resetHttpTarget` <a name="resetHttpTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetHttpTarget"></a>

```typescript
public resetHttpTarget(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInput` <a name="resetInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetInput"></a>

```typescript
public resetInput(): void
```

##### `resetInputPath` <a name="resetInputPath" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetInputPath"></a>

```typescript
public resetInputPath(): void
```

##### `resetInputTransformer` <a name="resetInputTransformer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetInputTransformer"></a>

```typescript
public resetInputTransformer(): void
```

##### `resetKinesisTarget` <a name="resetKinesisTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetKinesisTarget"></a>

```typescript
public resetKinesisTarget(): void
```

##### `resetRedshiftTarget` <a name="resetRedshiftTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRedshiftTarget"></a>

```typescript
public resetRedshiftTarget(): void
```

##### `resetRetryPolicy` <a name="resetRetryPolicy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRetryPolicy"></a>

```typescript
public resetRetryPolicy(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetRunCommandTargets` <a name="resetRunCommandTargets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetRunCommandTargets"></a>

```typescript
public resetRunCommandTargets(): void
```

##### `resetSqsTarget` <a name="resetSqsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetSqsTarget"></a>

```typescript
public resetSqsTarget(): void
```

##### `resetTargetId` <a name="resetTargetId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.resetTargetId"></a>

```typescript
public resetTargetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isConstruct"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

cloudwatchEventTarget.CloudwatchEventTarget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isTerraformElement"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

cloudwatchEventTarget.CloudwatchEventTarget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isTerraformResource"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

cloudwatchEventTarget.CloudwatchEventTarget.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.batchTarget">batchTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference">CloudwatchEventTargetBatchTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.deadLetterConfig">deadLetterConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference">CloudwatchEventTargetDeadLetterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.ecsTarget">ecsTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference">CloudwatchEventTargetEcsTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.httpTarget">httpTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference">CloudwatchEventTargetHttpTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputTransformer">inputTransformer</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference">CloudwatchEventTargetInputTransformerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.kinesisTarget">kinesisTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference">CloudwatchEventTargetKinesisTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.redshiftTarget">redshiftTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference">CloudwatchEventTargetRedshiftTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference">CloudwatchEventTargetRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.runCommandTargets">runCommandTargets</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList">CloudwatchEventTargetRunCommandTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.sqsTarget">sqsTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference">CloudwatchEventTargetSqsTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.batchTargetInput">batchTargetInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.deadLetterConfigInput">deadLetterConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.ecsTargetInput">ecsTargetInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.eventBusNameInput">eventBusNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.httpTargetInput">httpTargetInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputInput">inputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputPathInput">inputPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputTransformerInput">inputTransformerInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.kinesisTargetInput">kinesisTargetInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.redshiftTargetInput">redshiftTargetInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.retryPolicyInput">retryPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.ruleInput">ruleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.runCommandTargetsInput">runCommandTargetsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.sqsTargetInput">sqsTargetInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.eventBusName">eventBusName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.input">input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputPath">inputPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.rule">rule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `batchTarget`<sup>Required</sup> <a name="batchTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.batchTarget"></a>

```typescript
public readonly batchTarget: CloudwatchEventTargetBatchTargetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference">CloudwatchEventTargetBatchTargetOutputReference</a>

---

##### `deadLetterConfig`<sup>Required</sup> <a name="deadLetterConfig" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.deadLetterConfig"></a>

```typescript
public readonly deadLetterConfig: CloudwatchEventTargetDeadLetterConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference">CloudwatchEventTargetDeadLetterConfigOutputReference</a>

---

##### `ecsTarget`<sup>Required</sup> <a name="ecsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.ecsTarget"></a>

```typescript
public readonly ecsTarget: CloudwatchEventTargetEcsTargetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference">CloudwatchEventTargetEcsTargetOutputReference</a>

---

##### `httpTarget`<sup>Required</sup> <a name="httpTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.httpTarget"></a>

```typescript
public readonly httpTarget: CloudwatchEventTargetHttpTargetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference">CloudwatchEventTargetHttpTargetOutputReference</a>

---

##### `inputTransformer`<sup>Required</sup> <a name="inputTransformer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputTransformer"></a>

```typescript
public readonly inputTransformer: CloudwatchEventTargetInputTransformerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference">CloudwatchEventTargetInputTransformerOutputReference</a>

---

##### `kinesisTarget`<sup>Required</sup> <a name="kinesisTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.kinesisTarget"></a>

```typescript
public readonly kinesisTarget: CloudwatchEventTargetKinesisTargetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference">CloudwatchEventTargetKinesisTargetOutputReference</a>

---

##### `redshiftTarget`<sup>Required</sup> <a name="redshiftTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.redshiftTarget"></a>

```typescript
public readonly redshiftTarget: CloudwatchEventTargetRedshiftTargetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference">CloudwatchEventTargetRedshiftTargetOutputReference</a>

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: CloudwatchEventTargetRetryPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference">CloudwatchEventTargetRetryPolicyOutputReference</a>

---

##### `runCommandTargets`<sup>Required</sup> <a name="runCommandTargets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.runCommandTargets"></a>

```typescript
public readonly runCommandTargets: CloudwatchEventTargetRunCommandTargetsList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList">CloudwatchEventTargetRunCommandTargetsList</a>

---

##### `sqsTarget`<sup>Required</sup> <a name="sqsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.sqsTarget"></a>

```typescript
public readonly sqsTarget: CloudwatchEventTargetSqsTargetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference">CloudwatchEventTargetSqsTargetOutputReference</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `batchTargetInput`<sup>Optional</sup> <a name="batchTargetInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.batchTargetInput"></a>

```typescript
public readonly batchTargetInput: CloudwatchEventTargetBatchTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a>

---

##### `deadLetterConfigInput`<sup>Optional</sup> <a name="deadLetterConfigInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.deadLetterConfigInput"></a>

```typescript
public readonly deadLetterConfigInput: CloudwatchEventTargetDeadLetterConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a>

---

##### `ecsTargetInput`<sup>Optional</sup> <a name="ecsTargetInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.ecsTargetInput"></a>

```typescript
public readonly ecsTargetInput: CloudwatchEventTargetEcsTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a>

---

##### `eventBusNameInput`<sup>Optional</sup> <a name="eventBusNameInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.eventBusNameInput"></a>

```typescript
public readonly eventBusNameInput: string;
```

- *Type:* string

---

##### `httpTargetInput`<sup>Optional</sup> <a name="httpTargetInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.httpTargetInput"></a>

```typescript
public readonly httpTargetInput: CloudwatchEventTargetHttpTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputInput"></a>

```typescript
public readonly inputInput: string;
```

- *Type:* string

---

##### `inputPathInput`<sup>Optional</sup> <a name="inputPathInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputPathInput"></a>

```typescript
public readonly inputPathInput: string;
```

- *Type:* string

---

##### `inputTransformerInput`<sup>Optional</sup> <a name="inputTransformerInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputTransformerInput"></a>

```typescript
public readonly inputTransformerInput: CloudwatchEventTargetInputTransformer;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a>

---

##### `kinesisTargetInput`<sup>Optional</sup> <a name="kinesisTargetInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.kinesisTargetInput"></a>

```typescript
public readonly kinesisTargetInput: CloudwatchEventTargetKinesisTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a>

---

##### `redshiftTargetInput`<sup>Optional</sup> <a name="redshiftTargetInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.redshiftTargetInput"></a>

```typescript
public readonly redshiftTargetInput: CloudwatchEventTargetRedshiftTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a>

---

##### `retryPolicyInput`<sup>Optional</sup> <a name="retryPolicyInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.retryPolicyInput"></a>

```typescript
public readonly retryPolicyInput: CloudwatchEventTargetRetryPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.ruleInput"></a>

```typescript
public readonly ruleInput: string;
```

- *Type:* string

---

##### `runCommandTargetsInput`<sup>Optional</sup> <a name="runCommandTargetsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.runCommandTargetsInput"></a>

```typescript
public readonly runCommandTargetsInput: IResolvable | CloudwatchEventTargetRunCommandTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>[]

---

##### `sqsTargetInput`<sup>Optional</sup> <a name="sqsTargetInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.sqsTargetInput"></a>

```typescript
public readonly sqsTargetInput: CloudwatchEventTargetSqsTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a>

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `eventBusName`<sup>Required</sup> <a name="eventBusName" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.eventBusName"></a>

```typescript
public readonly eventBusName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

---

##### `inputPath`<sup>Required</sup> <a name="inputPath" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.inputPath"></a>

```typescript
public readonly inputPath: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTarget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchEventTargetBatchTarget <a name="CloudwatchEventTargetBatchTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

const cloudwatchEventTargetBatchTarget: cloudwatchEventTarget.CloudwatchEventTargetBatchTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.jobDefinition">jobDefinition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_definition CloudwatchEventTarget#job_definition}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.jobName">jobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_name CloudwatchEventTarget#job_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.arraySize">arraySize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#array_size CloudwatchEventTarget#array_size}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.jobAttempts">jobAttempts</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_attempts CloudwatchEventTarget#job_attempts}. |

---

##### `jobDefinition`<sup>Required</sup> <a name="jobDefinition" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.jobDefinition"></a>

```typescript
public readonly jobDefinition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_definition CloudwatchEventTarget#job_definition}.

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_name CloudwatchEventTarget#job_name}.

---

##### `arraySize`<sup>Optional</sup> <a name="arraySize" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.arraySize"></a>

```typescript
public readonly arraySize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#array_size CloudwatchEventTarget#array_size}.

---

##### `jobAttempts`<sup>Optional</sup> <a name="jobAttempts" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget.property.jobAttempts"></a>

```typescript
public readonly jobAttempts: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#job_attempts CloudwatchEventTarget#job_attempts}.

---

### CloudwatchEventTargetConfig <a name="CloudwatchEventTargetConfig" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

const cloudwatchEventTargetConfig: cloudwatchEventTarget.CloudwatchEventTargetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#arn CloudwatchEventTarget#arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.rule">rule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#rule CloudwatchEventTarget#rule}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.batchTarget">batchTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a></code> | batch_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.deadLetterConfig">deadLetterConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a></code> | dead_letter_config block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.ecsTarget">ecsTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a></code> | ecs_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.eventBusName">eventBusName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#event_bus_name CloudwatchEventTarget#event_bus_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.httpTarget">httpTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a></code> | http_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#id CloudwatchEventTarget#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.input">input</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input CloudwatchEventTarget#input}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.inputPath">inputPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_path CloudwatchEventTarget#input_path}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.inputTransformer">inputTransformer</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a></code> | input_transformer block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.kinesisTarget">kinesisTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a></code> | kinesis_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.redshiftTarget">redshiftTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a></code> | redshift_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#role_arn CloudwatchEventTarget#role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.runCommandTargets">runCommandTargets</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>[]</code> | run_command_targets block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.sqsTarget">sqsTarget</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a></code> | sqs_target block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#target_id CloudwatchEventTarget#target_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#arn CloudwatchEventTarget#arn}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#rule CloudwatchEventTarget#rule}.

---

##### `batchTarget`<sup>Optional</sup> <a name="batchTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.batchTarget"></a>

```typescript
public readonly batchTarget: CloudwatchEventTargetBatchTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a>

batch_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#batch_target CloudwatchEventTarget#batch_target}

---

##### `deadLetterConfig`<sup>Optional</sup> <a name="deadLetterConfig" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.deadLetterConfig"></a>

```typescript
public readonly deadLetterConfig: CloudwatchEventTargetDeadLetterConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a>

dead_letter_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#dead_letter_config CloudwatchEventTarget#dead_letter_config}

---

##### `ecsTarget`<sup>Optional</sup> <a name="ecsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.ecsTarget"></a>

```typescript
public readonly ecsTarget: CloudwatchEventTargetEcsTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a>

ecs_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#ecs_target CloudwatchEventTarget#ecs_target}

---

##### `eventBusName`<sup>Optional</sup> <a name="eventBusName" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.eventBusName"></a>

```typescript
public readonly eventBusName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#event_bus_name CloudwatchEventTarget#event_bus_name}.

---

##### `httpTarget`<sup>Optional</sup> <a name="httpTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.httpTarget"></a>

```typescript
public readonly httpTarget: CloudwatchEventTargetHttpTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a>

http_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#http_target CloudwatchEventTarget#http_target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#id CloudwatchEventTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input CloudwatchEventTarget#input}.

---

##### `inputPath`<sup>Optional</sup> <a name="inputPath" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.inputPath"></a>

```typescript
public readonly inputPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_path CloudwatchEventTarget#input_path}.

---

##### `inputTransformer`<sup>Optional</sup> <a name="inputTransformer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.inputTransformer"></a>

```typescript
public readonly inputTransformer: CloudwatchEventTargetInputTransformer;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a>

input_transformer block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_transformer CloudwatchEventTarget#input_transformer}

---

##### `kinesisTarget`<sup>Optional</sup> <a name="kinesisTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.kinesisTarget"></a>

```typescript
public readonly kinesisTarget: CloudwatchEventTargetKinesisTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a>

kinesis_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#kinesis_target CloudwatchEventTarget#kinesis_target}

---

##### `redshiftTarget`<sup>Optional</sup> <a name="redshiftTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.redshiftTarget"></a>

```typescript
public readonly redshiftTarget: CloudwatchEventTargetRedshiftTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a>

redshift_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#redshift_target CloudwatchEventTarget#redshift_target}

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: CloudwatchEventTargetRetryPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#retry_policy CloudwatchEventTarget#retry_policy}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#role_arn CloudwatchEventTarget#role_arn}.

---

##### `runCommandTargets`<sup>Optional</sup> <a name="runCommandTargets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.runCommandTargets"></a>

```typescript
public readonly runCommandTargets: IResolvable | CloudwatchEventTargetRunCommandTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>[]

run_command_targets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#run_command_targets CloudwatchEventTarget#run_command_targets}

---

##### `sqsTarget`<sup>Optional</sup> <a name="sqsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.sqsTarget"></a>

```typescript
public readonly sqsTarget: CloudwatchEventTargetSqsTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a>

sqs_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#sqs_target CloudwatchEventTarget#sqs_target}

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#target_id CloudwatchEventTarget#target_id}.

---

### CloudwatchEventTargetDeadLetterConfig <a name="CloudwatchEventTargetDeadLetterConfig" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

const cloudwatchEventTargetDeadLetterConfig: cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#arn CloudwatchEventTarget#arn}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#arn CloudwatchEventTarget#arn}.

---

### CloudwatchEventTargetEcsTarget <a name="CloudwatchEventTargetEcsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

const cloudwatchEventTargetEcsTarget: cloudwatchEventTarget.CloudwatchEventTargetEcsTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.taskDefinitionArn">taskDefinitionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#task_definition_arn CloudwatchEventTarget#task_definition_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a>[]</code> | capacity_provider_strategy block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#enable_ecs_managed_tags CloudwatchEventTarget#enable_ecs_managed_tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#enable_execute_command CloudwatchEventTarget#enable_execute_command}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.group">group</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#group CloudwatchEventTarget#group}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.launchType">launchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#launch_type CloudwatchEventTarget#launch_type}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.placementConstraint">placementConstraint</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a>[]</code> | placement_constraint block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.platformVersion">platformVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#platform_version CloudwatchEventTarget#platform_version}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.propagateTags">propagateTags</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#propagate_tags CloudwatchEventTarget#propagate_tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#tags CloudwatchEventTarget#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.taskCount">taskCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#task_count CloudwatchEventTarget#task_count}. |

---

##### `taskDefinitionArn`<sup>Required</sup> <a name="taskDefinitionArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.taskDefinitionArn"></a>

```typescript
public readonly taskDefinitionArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#task_definition_arn CloudwatchEventTarget#task_definition_arn}.

---

##### `capacityProviderStrategy`<sup>Optional</sup> <a name="capacityProviderStrategy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.capacityProviderStrategy"></a>

```typescript
public readonly capacityProviderStrategy: IResolvable | CloudwatchEventTargetEcsTargetCapacityProviderStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a>[]

capacity_provider_strategy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#capacity_provider_strategy CloudwatchEventTarget#capacity_provider_strategy}

---

##### `enableEcsManagedTags`<sup>Optional</sup> <a name="enableEcsManagedTags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.enableEcsManagedTags"></a>

```typescript
public readonly enableEcsManagedTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#enable_ecs_managed_tags CloudwatchEventTarget#enable_ecs_managed_tags}.

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#enable_execute_command CloudwatchEventTarget#enable_execute_command}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#group CloudwatchEventTarget#group}.

---

##### `launchType`<sup>Optional</sup> <a name="launchType" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.launchType"></a>

```typescript
public readonly launchType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#launch_type CloudwatchEventTarget#launch_type}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: CloudwatchEventTargetEcsTargetNetworkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#network_configuration CloudwatchEventTarget#network_configuration}

---

##### `placementConstraint`<sup>Optional</sup> <a name="placementConstraint" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.placementConstraint"></a>

```typescript
public readonly placementConstraint: IResolvable | CloudwatchEventTargetEcsTargetPlacementConstraint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a>[]

placement_constraint block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#placement_constraint CloudwatchEventTarget#placement_constraint}

---

##### `platformVersion`<sup>Optional</sup> <a name="platformVersion" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.platformVersion"></a>

```typescript
public readonly platformVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#platform_version CloudwatchEventTarget#platform_version}.

---

##### `propagateTags`<sup>Optional</sup> <a name="propagateTags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.propagateTags"></a>

```typescript
public readonly propagateTags: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#propagate_tags CloudwatchEventTarget#propagate_tags}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#tags CloudwatchEventTarget#tags}.

---

##### `taskCount`<sup>Optional</sup> <a name="taskCount" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget.property.taskCount"></a>

```typescript
public readonly taskCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#task_count CloudwatchEventTarget#task_count}.

---

### CloudwatchEventTargetEcsTargetCapacityProviderStrategy <a name="CloudwatchEventTargetEcsTargetCapacityProviderStrategy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

const cloudwatchEventTargetEcsTargetCapacityProviderStrategy: cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.property.capacityProvider">capacityProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#capacity_provider CloudwatchEventTarget#capacity_provider}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.property.base">base</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#base CloudwatchEventTarget#base}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#weight CloudwatchEventTarget#weight}. |

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.property.capacityProvider"></a>

```typescript
public readonly capacityProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#capacity_provider CloudwatchEventTarget#capacity_provider}.

---

##### `base`<sup>Optional</sup> <a name="base" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.property.base"></a>

```typescript
public readonly base: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#base CloudwatchEventTarget#base}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#weight CloudwatchEventTarget#weight}.

---

### CloudwatchEventTargetEcsTargetNetworkConfiguration <a name="CloudwatchEventTargetEcsTargetNetworkConfiguration" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

const cloudwatchEventTargetEcsTargetNetworkConfiguration: cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.property.subnets">subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#subnets CloudwatchEventTarget#subnets}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.property.assignPublicIp">assignPublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#assign_public_ip CloudwatchEventTarget#assign_public_ip}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#security_groups CloudwatchEventTarget#security_groups}. |

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#subnets CloudwatchEventTarget#subnets}.

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#assign_public_ip CloudwatchEventTarget#assign_public_ip}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#security_groups CloudwatchEventTarget#security_groups}.

---

### CloudwatchEventTargetEcsTargetPlacementConstraint <a name="CloudwatchEventTargetEcsTargetPlacementConstraint" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

const cloudwatchEventTargetEcsTargetPlacementConstraint: cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#type CloudwatchEventTarget#type}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#expression CloudwatchEventTarget#expression}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#type CloudwatchEventTarget#type}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#expression CloudwatchEventTarget#expression}.

---

### CloudwatchEventTargetHttpTarget <a name="CloudwatchEventTargetHttpTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

const cloudwatchEventTargetHttpTarget: cloudwatchEventTarget.CloudwatchEventTargetHttpTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.property.headerParameters">headerParameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#header_parameters CloudwatchEventTarget#header_parameters}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.property.pathParameterValues">pathParameterValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#path_parameter_values CloudwatchEventTarget#path_parameter_values}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.property.queryStringParameters">queryStringParameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#query_string_parameters CloudwatchEventTarget#query_string_parameters}. |

---

##### `headerParameters`<sup>Optional</sup> <a name="headerParameters" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.property.headerParameters"></a>

```typescript
public readonly headerParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#header_parameters CloudwatchEventTarget#header_parameters}.

---

##### `pathParameterValues`<sup>Optional</sup> <a name="pathParameterValues" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.property.pathParameterValues"></a>

```typescript
public readonly pathParameterValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#path_parameter_values CloudwatchEventTarget#path_parameter_values}.

---

##### `queryStringParameters`<sup>Optional</sup> <a name="queryStringParameters" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget.property.queryStringParameters"></a>

```typescript
public readonly queryStringParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#query_string_parameters CloudwatchEventTarget#query_string_parameters}.

---

### CloudwatchEventTargetInputTransformer <a name="CloudwatchEventTargetInputTransformer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

const cloudwatchEventTargetInputTransformer: cloudwatchEventTarget.CloudwatchEventTargetInputTransformer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer.property.inputTemplate">inputTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_template CloudwatchEventTarget#input_template}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer.property.inputPaths">inputPaths</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_paths CloudwatchEventTarget#input_paths}. |

---

##### `inputTemplate`<sup>Required</sup> <a name="inputTemplate" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer.property.inputTemplate"></a>

```typescript
public readonly inputTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_template CloudwatchEventTarget#input_template}.

---

##### `inputPaths`<sup>Optional</sup> <a name="inputPaths" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer.property.inputPaths"></a>

```typescript
public readonly inputPaths: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#input_paths CloudwatchEventTarget#input_paths}.

---

### CloudwatchEventTargetKinesisTarget <a name="CloudwatchEventTargetKinesisTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

const cloudwatchEventTargetKinesisTarget: cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget.property.partitionKeyPath">partitionKeyPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#partition_key_path CloudwatchEventTarget#partition_key_path}. |

---

##### `partitionKeyPath`<sup>Optional</sup> <a name="partitionKeyPath" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget.property.partitionKeyPath"></a>

```typescript
public readonly partitionKeyPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#partition_key_path CloudwatchEventTarget#partition_key_path}.

---

### CloudwatchEventTargetRedshiftTarget <a name="CloudwatchEventTargetRedshiftTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

const cloudwatchEventTargetRedshiftTarget: cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.database">database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#database CloudwatchEventTarget#database}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.dbUser">dbUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#db_user CloudwatchEventTarget#db_user}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.secretsManagerArn">secretsManagerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#secrets_manager_arn CloudwatchEventTarget#secrets_manager_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.sql">sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#sql CloudwatchEventTarget#sql}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.statementName">statementName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#statement_name CloudwatchEventTarget#statement_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.withEvent">withEvent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#with_event CloudwatchEventTarget#with_event}. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#database CloudwatchEventTarget#database}.

---

##### `dbUser`<sup>Optional</sup> <a name="dbUser" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.dbUser"></a>

```typescript
public readonly dbUser: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#db_user CloudwatchEventTarget#db_user}.

---

##### `secretsManagerArn`<sup>Optional</sup> <a name="secretsManagerArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.secretsManagerArn"></a>

```typescript
public readonly secretsManagerArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#secrets_manager_arn CloudwatchEventTarget#secrets_manager_arn}.

---

##### `sql`<sup>Optional</sup> <a name="sql" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#sql CloudwatchEventTarget#sql}.

---

##### `statementName`<sup>Optional</sup> <a name="statementName" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.statementName"></a>

```typescript
public readonly statementName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#statement_name CloudwatchEventTarget#statement_name}.

---

##### `withEvent`<sup>Optional</sup> <a name="withEvent" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget.property.withEvent"></a>

```typescript
public readonly withEvent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#with_event CloudwatchEventTarget#with_event}.

---

### CloudwatchEventTargetRetryPolicy <a name="CloudwatchEventTargetRetryPolicy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

const cloudwatchEventTargetRetryPolicy: cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy.property.maximumEventAgeInSeconds">maximumEventAgeInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#maximum_event_age_in_seconds CloudwatchEventTarget#maximum_event_age_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy.property.maximumRetryAttempts">maximumRetryAttempts</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#maximum_retry_attempts CloudwatchEventTarget#maximum_retry_attempts}. |

---

##### `maximumEventAgeInSeconds`<sup>Optional</sup> <a name="maximumEventAgeInSeconds" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy.property.maximumEventAgeInSeconds"></a>

```typescript
public readonly maximumEventAgeInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#maximum_event_age_in_seconds CloudwatchEventTarget#maximum_event_age_in_seconds}.

---

##### `maximumRetryAttempts`<sup>Optional</sup> <a name="maximumRetryAttempts" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy.property.maximumRetryAttempts"></a>

```typescript
public readonly maximumRetryAttempts: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#maximum_retry_attempts CloudwatchEventTarget#maximum_retry_attempts}.

---

### CloudwatchEventTargetRunCommandTargets <a name="CloudwatchEventTargetRunCommandTargets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

const cloudwatchEventTargetRunCommandTargets: cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#key CloudwatchEventTarget#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#values CloudwatchEventTarget#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#key CloudwatchEventTarget#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#values CloudwatchEventTarget#values}.

---

### CloudwatchEventTargetSqsTarget <a name="CloudwatchEventTargetSqsTarget" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

const cloudwatchEventTargetSqsTarget: cloudwatchEventTarget.CloudwatchEventTargetSqsTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget.property.messageGroupId">messageGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#message_group_id CloudwatchEventTarget#message_group_id}. |

---

##### `messageGroupId`<sup>Optional</sup> <a name="messageGroupId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget.property.messageGroupId"></a>

```typescript
public readonly messageGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target#message_group_id CloudwatchEventTarget#message_group_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchEventTargetBatchTargetOutputReference <a name="CloudwatchEventTargetBatchTargetOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

new cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resetArraySize">resetArraySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resetJobAttempts">resetJobAttempts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArraySize` <a name="resetArraySize" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resetArraySize"></a>

```typescript
public resetArraySize(): void
```

##### `resetJobAttempts` <a name="resetJobAttempts" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.resetJobAttempts"></a>

```typescript
public resetJobAttempts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.arraySizeInput">arraySizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobAttemptsInput">jobAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobDefinitionInput">jobDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobNameInput">jobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.arraySize">arraySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobAttempts">jobAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobDefinition">jobDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobName">jobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arraySizeInput`<sup>Optional</sup> <a name="arraySizeInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.arraySizeInput"></a>

```typescript
public readonly arraySizeInput: number;
```

- *Type:* number

---

##### `jobAttemptsInput`<sup>Optional</sup> <a name="jobAttemptsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobAttemptsInput"></a>

```typescript
public readonly jobAttemptsInput: number;
```

- *Type:* number

---

##### `jobDefinitionInput`<sup>Optional</sup> <a name="jobDefinitionInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobDefinitionInput"></a>

```typescript
public readonly jobDefinitionInput: string;
```

- *Type:* string

---

##### `jobNameInput`<sup>Optional</sup> <a name="jobNameInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobNameInput"></a>

```typescript
public readonly jobNameInput: string;
```

- *Type:* string

---

##### `arraySize`<sup>Required</sup> <a name="arraySize" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.arraySize"></a>

```typescript
public readonly arraySize: number;
```

- *Type:* number

---

##### `jobAttempts`<sup>Required</sup> <a name="jobAttempts" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobAttempts"></a>

```typescript
public readonly jobAttempts: number;
```

- *Type:* number

---

##### `jobDefinition`<sup>Required</sup> <a name="jobDefinition" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobDefinition"></a>

```typescript
public readonly jobDefinition: string;
```

- *Type:* string

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventTargetBatchTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetBatchTarget">CloudwatchEventTargetBatchTarget</a>

---


### CloudwatchEventTargetDeadLetterConfigOutputReference <a name="CloudwatchEventTargetDeadLetterConfigOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

new cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.resetArn">resetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventTargetDeadLetterConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetDeadLetterConfig">CloudwatchEventTargetDeadLetterConfig</a>

---


### CloudwatchEventTargetEcsTargetCapacityProviderStrategyList <a name="CloudwatchEventTargetEcsTargetCapacityProviderStrategyList" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

new cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.get"></a>

```typescript
public get(index: number): CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchEventTargetEcsTargetCapacityProviderStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a>[]

---


### CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference <a name="CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

new cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resetBase">resetBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBase` <a name="resetBase" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resetBase"></a>

```typescript
public resetBase(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.baseInput">baseInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.capacityProviderInput">capacityProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.capacityProvider">capacityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseInput`<sup>Optional</sup> <a name="baseInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.baseInput"></a>

```typescript
public readonly baseInput: number;
```

- *Type:* number

---

##### `capacityProviderInput`<sup>Optional</sup> <a name="capacityProviderInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```typescript
public readonly capacityProviderInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.base"></a>

```typescript
public readonly base: number;
```

- *Type:* number

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```typescript
public readonly capacityProvider: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventTargetEcsTargetCapacityProviderStrategy | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a> | cdktf.IResolvable

---


### CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference <a name="CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

new cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resetAssignPublicIp">resetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssignPublicIp` <a name="resetAssignPublicIp" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resetAssignPublicIp"></a>

```typescript
public resetAssignPublicIp(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.assignPublicIpInput">assignPublicIpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.assignPublicIp">assignPublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assignPublicIpInput`<sup>Optional</sup> <a name="assignPublicIpInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.assignPublicIpInput"></a>

```typescript
public readonly assignPublicIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventTargetEcsTargetNetworkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a>

---


### CloudwatchEventTargetEcsTargetOutputReference <a name="CloudwatchEventTargetEcsTargetOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

new cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putCapacityProviderStrategy">putCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putPlacementConstraint">putPlacementConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetCapacityProviderStrategy">resetCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetEnableEcsManagedTags">resetEnableEcsManagedTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetEnableExecuteCommand">resetEnableExecuteCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetLaunchType">resetLaunchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetPlacementConstraint">resetPlacementConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetPlatformVersion">resetPlatformVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetPropagateTags">resetPropagateTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetTaskCount">resetTaskCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapacityProviderStrategy` <a name="putCapacityProviderStrategy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putCapacityProviderStrategy"></a>

```typescript
public putCapacityProviderStrategy(value: IResolvable | CloudwatchEventTargetEcsTargetCapacityProviderStrategy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putCapacityProviderStrategy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a>[]

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putNetworkConfiguration"></a>

```typescript
public putNetworkConfiguration(value: CloudwatchEventTargetEcsTargetNetworkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a>

---

##### `putPlacementConstraint` <a name="putPlacementConstraint" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putPlacementConstraint"></a>

```typescript
public putPlacementConstraint(value: IResolvable | CloudwatchEventTargetEcsTargetPlacementConstraint[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.putPlacementConstraint.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a>[]

---

##### `resetCapacityProviderStrategy` <a name="resetCapacityProviderStrategy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetCapacityProviderStrategy"></a>

```typescript
public resetCapacityProviderStrategy(): void
```

##### `resetEnableEcsManagedTags` <a name="resetEnableEcsManagedTags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetEnableEcsManagedTags"></a>

```typescript
public resetEnableEcsManagedTags(): void
```

##### `resetEnableExecuteCommand` <a name="resetEnableExecuteCommand" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetEnableExecuteCommand"></a>

```typescript
public resetEnableExecuteCommand(): void
```

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetGroup"></a>

```typescript
public resetGroup(): void
```

##### `resetLaunchType` <a name="resetLaunchType" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetLaunchType"></a>

```typescript
public resetLaunchType(): void
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetNetworkConfiguration"></a>

```typescript
public resetNetworkConfiguration(): void
```

##### `resetPlacementConstraint` <a name="resetPlacementConstraint" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetPlacementConstraint"></a>

```typescript
public resetPlacementConstraint(): void
```

##### `resetPlatformVersion` <a name="resetPlatformVersion" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetPlatformVersion"></a>

```typescript
public resetPlatformVersion(): void
```

##### `resetPropagateTags` <a name="resetPropagateTags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetPropagateTags"></a>

```typescript
public resetPropagateTags(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTaskCount` <a name="resetTaskCount" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.resetTaskCount"></a>

```typescript
public resetTaskCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList">CloudwatchEventTargetEcsTargetCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference">CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.placementConstraint">placementConstraint</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList">CloudwatchEventTargetEcsTargetPlacementConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.capacityProviderStrategyInput">capacityProviderStrategyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableEcsManagedTagsInput">enableEcsManagedTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableExecuteCommandInput">enableExecuteCommandInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.launchTypeInput">launchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.placementConstraintInput">placementConstraintInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.platformVersionInput">platformVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.propagateTagsInput">propagateTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskCountInput">taskCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskDefinitionArnInput">taskDefinitionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.launchType">launchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.platformVersion">platformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.propagateTags">propagateTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskCount">taskCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskDefinitionArn">taskDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityProviderStrategy`<sup>Required</sup> <a name="capacityProviderStrategy" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.capacityProviderStrategy"></a>

```typescript
public readonly capacityProviderStrategy: CloudwatchEventTargetEcsTargetCapacityProviderStrategyList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategyList">CloudwatchEventTargetEcsTargetCapacityProviderStrategyList</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference">CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference</a>

---

##### `placementConstraint`<sup>Required</sup> <a name="placementConstraint" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.placementConstraint"></a>

```typescript
public readonly placementConstraint: CloudwatchEventTargetEcsTargetPlacementConstraintList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList">CloudwatchEventTargetEcsTargetPlacementConstraintList</a>

---

##### `capacityProviderStrategyInput`<sup>Optional</sup> <a name="capacityProviderStrategyInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.capacityProviderStrategyInput"></a>

```typescript
public readonly capacityProviderStrategyInput: IResolvable | CloudwatchEventTargetEcsTargetCapacityProviderStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetCapacityProviderStrategy">CloudwatchEventTargetEcsTargetCapacityProviderStrategy</a>[]

---

##### `enableEcsManagedTagsInput`<sup>Optional</sup> <a name="enableEcsManagedTagsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableEcsManagedTagsInput"></a>

```typescript
public readonly enableEcsManagedTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableExecuteCommandInput`<sup>Optional</sup> <a name="enableExecuteCommandInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableExecuteCommandInput"></a>

```typescript
public readonly enableExecuteCommandInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `launchTypeInput`<sup>Optional</sup> <a name="launchTypeInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.launchTypeInput"></a>

```typescript
public readonly launchTypeInput: string;
```

- *Type:* string

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.networkConfigurationInput"></a>

```typescript
public readonly networkConfigurationInput: CloudwatchEventTargetEcsTargetNetworkConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetNetworkConfiguration">CloudwatchEventTargetEcsTargetNetworkConfiguration</a>

---

##### `placementConstraintInput`<sup>Optional</sup> <a name="placementConstraintInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.placementConstraintInput"></a>

```typescript
public readonly placementConstraintInput: IResolvable | CloudwatchEventTargetEcsTargetPlacementConstraint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a>[]

---

##### `platformVersionInput`<sup>Optional</sup> <a name="platformVersionInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.platformVersionInput"></a>

```typescript
public readonly platformVersionInput: string;
```

- *Type:* string

---

##### `propagateTagsInput`<sup>Optional</sup> <a name="propagateTagsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.propagateTagsInput"></a>

```typescript
public readonly propagateTagsInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `taskCountInput`<sup>Optional</sup> <a name="taskCountInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskCountInput"></a>

```typescript
public readonly taskCountInput: number;
```

- *Type:* number

---

##### `taskDefinitionArnInput`<sup>Optional</sup> <a name="taskDefinitionArnInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskDefinitionArnInput"></a>

```typescript
public readonly taskDefinitionArnInput: string;
```

- *Type:* string

---

##### `enableEcsManagedTags`<sup>Required</sup> <a name="enableEcsManagedTags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableEcsManagedTags"></a>

```typescript
public readonly enableEcsManagedTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableExecuteCommand`<sup>Required</sup> <a name="enableExecuteCommand" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `launchType`<sup>Required</sup> <a name="launchType" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.launchType"></a>

```typescript
public readonly launchType: string;
```

- *Type:* string

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.platformVersion"></a>

```typescript
public readonly platformVersion: string;
```

- *Type:* string

---

##### `propagateTags`<sup>Required</sup> <a name="propagateTags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.propagateTags"></a>

```typescript
public readonly propagateTags: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `taskCount`<sup>Required</sup> <a name="taskCount" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskCount"></a>

```typescript
public readonly taskCount: number;
```

- *Type:* number

---

##### `taskDefinitionArn`<sup>Required</sup> <a name="taskDefinitionArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.taskDefinitionArn"></a>

```typescript
public readonly taskDefinitionArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventTargetEcsTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTarget">CloudwatchEventTargetEcsTarget</a>

---


### CloudwatchEventTargetEcsTargetPlacementConstraintList <a name="CloudwatchEventTargetEcsTargetPlacementConstraintList" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

new cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.get"></a>

```typescript
public get(index: number): CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchEventTargetEcsTargetPlacementConstraint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a>[]

---


### CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference <a name="CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

new cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.resetExpression">resetExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventTargetEcsTargetPlacementConstraint | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetEcsTargetPlacementConstraint">CloudwatchEventTargetEcsTargetPlacementConstraint</a> | cdktf.IResolvable

---


### CloudwatchEventTargetHttpTargetOutputReference <a name="CloudwatchEventTargetHttpTargetOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

new cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resetHeaderParameters">resetHeaderParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resetPathParameterValues">resetPathParameterValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resetQueryStringParameters">resetQueryStringParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderParameters` <a name="resetHeaderParameters" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resetHeaderParameters"></a>

```typescript
public resetHeaderParameters(): void
```

##### `resetPathParameterValues` <a name="resetPathParameterValues" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resetPathParameterValues"></a>

```typescript
public resetPathParameterValues(): void
```

##### `resetQueryStringParameters` <a name="resetQueryStringParameters" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.resetQueryStringParameters"></a>

```typescript
public resetQueryStringParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.headerParametersInput">headerParametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.pathParameterValuesInput">pathParameterValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.queryStringParametersInput">queryStringParametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.headerParameters">headerParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.pathParameterValues">pathParameterValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.queryStringParameters">queryStringParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerParametersInput`<sup>Optional</sup> <a name="headerParametersInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.headerParametersInput"></a>

```typescript
public readonly headerParametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pathParameterValuesInput`<sup>Optional</sup> <a name="pathParameterValuesInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.pathParameterValuesInput"></a>

```typescript
public readonly pathParameterValuesInput: string[];
```

- *Type:* string[]

---

##### `queryStringParametersInput`<sup>Optional</sup> <a name="queryStringParametersInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.queryStringParametersInput"></a>

```typescript
public readonly queryStringParametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `headerParameters`<sup>Required</sup> <a name="headerParameters" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.headerParameters"></a>

```typescript
public readonly headerParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pathParameterValues`<sup>Required</sup> <a name="pathParameterValues" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.pathParameterValues"></a>

```typescript
public readonly pathParameterValues: string[];
```

- *Type:* string[]

---

##### `queryStringParameters`<sup>Required</sup> <a name="queryStringParameters" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.queryStringParameters"></a>

```typescript
public readonly queryStringParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventTargetHttpTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetHttpTarget">CloudwatchEventTargetHttpTarget</a>

---


### CloudwatchEventTargetInputTransformerOutputReference <a name="CloudwatchEventTargetInputTransformerOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

new cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.resetInputPaths">resetInputPaths</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInputPaths` <a name="resetInputPaths" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.resetInputPaths"></a>

```typescript
public resetInputPaths(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputPathsInput">inputPathsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputTemplateInput">inputTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputPaths">inputPaths</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputTemplate">inputTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputPathsInput`<sup>Optional</sup> <a name="inputPathsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputPathsInput"></a>

```typescript
public readonly inputPathsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `inputTemplateInput`<sup>Optional</sup> <a name="inputTemplateInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputTemplateInput"></a>

```typescript
public readonly inputTemplateInput: string;
```

- *Type:* string

---

##### `inputPaths`<sup>Required</sup> <a name="inputPaths" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputPaths"></a>

```typescript
public readonly inputPaths: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `inputTemplate`<sup>Required</sup> <a name="inputTemplate" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.inputTemplate"></a>

```typescript
public readonly inputTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventTargetInputTransformer;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetInputTransformer">CloudwatchEventTargetInputTransformer</a>

---


### CloudwatchEventTargetKinesisTargetOutputReference <a name="CloudwatchEventTargetKinesisTargetOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

new cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.resetPartitionKeyPath">resetPartitionKeyPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPartitionKeyPath` <a name="resetPartitionKeyPath" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.resetPartitionKeyPath"></a>

```typescript
public resetPartitionKeyPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.partitionKeyPathInput">partitionKeyPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.partitionKeyPath">partitionKeyPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `partitionKeyPathInput`<sup>Optional</sup> <a name="partitionKeyPathInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.partitionKeyPathInput"></a>

```typescript
public readonly partitionKeyPathInput: string;
```

- *Type:* string

---

##### `partitionKeyPath`<sup>Required</sup> <a name="partitionKeyPath" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.partitionKeyPath"></a>

```typescript
public readonly partitionKeyPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventTargetKinesisTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetKinesisTarget">CloudwatchEventTargetKinesisTarget</a>

---


### CloudwatchEventTargetRedshiftTargetOutputReference <a name="CloudwatchEventTargetRedshiftTargetOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

new cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetDbUser">resetDbUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetSecretsManagerArn">resetSecretsManagerArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetSql">resetSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetStatementName">resetStatementName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetWithEvent">resetWithEvent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDbUser` <a name="resetDbUser" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetDbUser"></a>

```typescript
public resetDbUser(): void
```

##### `resetSecretsManagerArn` <a name="resetSecretsManagerArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetSecretsManagerArn"></a>

```typescript
public resetSecretsManagerArn(): void
```

##### `resetSql` <a name="resetSql" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetSql"></a>

```typescript
public resetSql(): void
```

##### `resetStatementName` <a name="resetStatementName" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetStatementName"></a>

```typescript
public resetStatementName(): void
```

##### `resetWithEvent` <a name="resetWithEvent" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.resetWithEvent"></a>

```typescript
public resetWithEvent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.dbUserInput">dbUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.secretsManagerArnInput">secretsManagerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.sqlInput">sqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.statementNameInput">statementNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.withEventInput">withEventInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.dbUser">dbUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.secretsManagerArn">secretsManagerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.sql">sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.statementName">statementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.withEvent">withEvent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `dbUserInput`<sup>Optional</sup> <a name="dbUserInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.dbUserInput"></a>

```typescript
public readonly dbUserInput: string;
```

- *Type:* string

---

##### `secretsManagerArnInput`<sup>Optional</sup> <a name="secretsManagerArnInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.secretsManagerArnInput"></a>

```typescript
public readonly secretsManagerArnInput: string;
```

- *Type:* string

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.sqlInput"></a>

```typescript
public readonly sqlInput: string;
```

- *Type:* string

---

##### `statementNameInput`<sup>Optional</sup> <a name="statementNameInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.statementNameInput"></a>

```typescript
public readonly statementNameInput: string;
```

- *Type:* string

---

##### `withEventInput`<sup>Optional</sup> <a name="withEventInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.withEventInput"></a>

```typescript
public readonly withEventInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `dbUser`<sup>Required</sup> <a name="dbUser" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.dbUser"></a>

```typescript
public readonly dbUser: string;
```

- *Type:* string

---

##### `secretsManagerArn`<sup>Required</sup> <a name="secretsManagerArn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.secretsManagerArn"></a>

```typescript
public readonly secretsManagerArn: string;
```

- *Type:* string

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

---

##### `statementName`<sup>Required</sup> <a name="statementName" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.statementName"></a>

```typescript
public readonly statementName: string;
```

- *Type:* string

---

##### `withEvent`<sup>Required</sup> <a name="withEvent" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.withEvent"></a>

```typescript
public readonly withEvent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventTargetRedshiftTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRedshiftTarget">CloudwatchEventTargetRedshiftTarget</a>

---


### CloudwatchEventTargetRetryPolicyOutputReference <a name="CloudwatchEventTargetRetryPolicyOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

new cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resetMaximumEventAgeInSeconds">resetMaximumEventAgeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resetMaximumRetryAttempts">resetMaximumRetryAttempts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumEventAgeInSeconds` <a name="resetMaximumEventAgeInSeconds" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resetMaximumEventAgeInSeconds"></a>

```typescript
public resetMaximumEventAgeInSeconds(): void
```

##### `resetMaximumRetryAttempts` <a name="resetMaximumRetryAttempts" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.resetMaximumRetryAttempts"></a>

```typescript
public resetMaximumRetryAttempts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumEventAgeInSecondsInput">maximumEventAgeInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumRetryAttemptsInput">maximumRetryAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumEventAgeInSeconds">maximumEventAgeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumRetryAttempts">maximumRetryAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumEventAgeInSecondsInput`<sup>Optional</sup> <a name="maximumEventAgeInSecondsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumEventAgeInSecondsInput"></a>

```typescript
public readonly maximumEventAgeInSecondsInput: number;
```

- *Type:* number

---

##### `maximumRetryAttemptsInput`<sup>Optional</sup> <a name="maximumRetryAttemptsInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumRetryAttemptsInput"></a>

```typescript
public readonly maximumRetryAttemptsInput: number;
```

- *Type:* number

---

##### `maximumEventAgeInSeconds`<sup>Required</sup> <a name="maximumEventAgeInSeconds" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumEventAgeInSeconds"></a>

```typescript
public readonly maximumEventAgeInSeconds: number;
```

- *Type:* number

---

##### `maximumRetryAttempts`<sup>Required</sup> <a name="maximumRetryAttempts" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.maximumRetryAttempts"></a>

```typescript
public readonly maximumRetryAttempts: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventTargetRetryPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRetryPolicy">CloudwatchEventTargetRetryPolicy</a>

---


### CloudwatchEventTargetRunCommandTargetsList <a name="CloudwatchEventTargetRunCommandTargetsList" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

new cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.get"></a>

```typescript
public get(index: number): CloudwatchEventTargetRunCommandTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchEventTargetRunCommandTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a>[]

---


### CloudwatchEventTargetRunCommandTargetsOutputReference <a name="CloudwatchEventTargetRunCommandTargetsOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

new cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventTargetRunCommandTargets | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetRunCommandTargets">CloudwatchEventTargetRunCommandTargets</a> | cdktf.IResolvable

---


### CloudwatchEventTargetSqsTargetOutputReference <a name="CloudwatchEventTargetSqsTargetOutputReference" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventTarget } from '@cdktf/provider-aws'

new cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.resetMessageGroupId">resetMessageGroupId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessageGroupId` <a name="resetMessageGroupId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.resetMessageGroupId"></a>

```typescript
public resetMessageGroupId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.messageGroupIdInput">messageGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.messageGroupId">messageGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageGroupIdInput`<sup>Optional</sup> <a name="messageGroupIdInput" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.messageGroupIdInput"></a>

```typescript
public readonly messageGroupIdInput: string;
```

- *Type:* string

---

##### `messageGroupId`<sup>Required</sup> <a name="messageGroupId" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.messageGroupId"></a>

```typescript
public readonly messageGroupId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventTargetSqsTarget;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventTarget.CloudwatchEventTargetSqsTarget">CloudwatchEventTargetSqsTarget</a>

---



