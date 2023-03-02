# `snsTopic` Submodule <a name="`snsTopic` Submodule" id="@cdktf/provider-aws.snsTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsTopic <a name="SnsTopic" id="@cdktf/provider-aws.snsTopic.SnsTopic"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_topic aws_sns_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SnsTopic(Construct Scope, string Id, SnsTopicConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig">SnsTopicConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig">SnsTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationFailureFeedbackRoleArn">ResetApplicationFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationSuccessFeedbackRoleArn">ResetApplicationSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationSuccessFeedbackSampleRate">ResetApplicationSuccessFeedbackSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetContentBasedDeduplication">ResetContentBasedDeduplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetDeliveryPolicy">ResetDeliveryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetFifoTopic">ResetFifoTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseFailureFeedbackRoleArn">ResetFirehoseFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseSuccessFeedbackRoleArn">ResetFirehoseSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseSuccessFeedbackSampleRate">ResetFirehoseSuccessFeedbackSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpFailureFeedbackRoleArn">ResetHttpFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpSuccessFeedbackRoleArn">ResetHttpSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpSuccessFeedbackSampleRate">ResetHttpSuccessFeedbackSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetKmsMasterKeyId">ResetKmsMasterKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaFailureFeedbackRoleArn">ResetLambdaFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaSuccessFeedbackRoleArn">ResetLambdaSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaSuccessFeedbackSampleRate">ResetLambdaSuccessFeedbackSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetSignatureVersion">ResetSignatureVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsFailureFeedbackRoleArn">ResetSqsFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsSuccessFeedbackRoleArn">ResetSqsSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsSuccessFeedbackSampleRate">ResetSqsSuccessFeedbackSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.resetTracingConfig">ResetTracingConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.snsTopic.SnsTopic.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.snsTopic.SnsTopic.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.snsTopic.SnsTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.snsTopic.SnsTopic.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.snsTopic.SnsTopic.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.snsTopic.SnsTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.snsTopic.SnsTopic.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.snsTopic.SnsTopic.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetApplicationFailureFeedbackRoleArn` <a name="ResetApplicationFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationFailureFeedbackRoleArn"></a>

```csharp
private void ResetApplicationFailureFeedbackRoleArn()
```

##### `ResetApplicationSuccessFeedbackRoleArn` <a name="ResetApplicationSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationSuccessFeedbackRoleArn"></a>

```csharp
private void ResetApplicationSuccessFeedbackRoleArn()
```

##### `ResetApplicationSuccessFeedbackSampleRate` <a name="ResetApplicationSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationSuccessFeedbackSampleRate"></a>

```csharp
private void ResetApplicationSuccessFeedbackSampleRate()
```

##### `ResetContentBasedDeduplication` <a name="ResetContentBasedDeduplication" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetContentBasedDeduplication"></a>

```csharp
private void ResetContentBasedDeduplication()
```

##### `ResetDeliveryPolicy` <a name="ResetDeliveryPolicy" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetDeliveryPolicy"></a>

```csharp
private void ResetDeliveryPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFifoTopic` <a name="ResetFifoTopic" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetFifoTopic"></a>

```csharp
private void ResetFifoTopic()
```

##### `ResetFirehoseFailureFeedbackRoleArn` <a name="ResetFirehoseFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseFailureFeedbackRoleArn"></a>

```csharp
private void ResetFirehoseFailureFeedbackRoleArn()
```

##### `ResetFirehoseSuccessFeedbackRoleArn` <a name="ResetFirehoseSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseSuccessFeedbackRoleArn"></a>

```csharp
private void ResetFirehoseSuccessFeedbackRoleArn()
```

##### `ResetFirehoseSuccessFeedbackSampleRate` <a name="ResetFirehoseSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseSuccessFeedbackSampleRate"></a>

```csharp
private void ResetFirehoseSuccessFeedbackSampleRate()
```

##### `ResetHttpFailureFeedbackRoleArn` <a name="ResetHttpFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpFailureFeedbackRoleArn"></a>

```csharp
private void ResetHttpFailureFeedbackRoleArn()
```

##### `ResetHttpSuccessFeedbackRoleArn` <a name="ResetHttpSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpSuccessFeedbackRoleArn"></a>

```csharp
private void ResetHttpSuccessFeedbackRoleArn()
```

##### `ResetHttpSuccessFeedbackSampleRate` <a name="ResetHttpSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpSuccessFeedbackSampleRate"></a>

```csharp
private void ResetHttpSuccessFeedbackSampleRate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsMasterKeyId` <a name="ResetKmsMasterKeyId" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetKmsMasterKeyId"></a>

```csharp
private void ResetKmsMasterKeyId()
```

##### `ResetLambdaFailureFeedbackRoleArn` <a name="ResetLambdaFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaFailureFeedbackRoleArn"></a>

```csharp
private void ResetLambdaFailureFeedbackRoleArn()
```

##### `ResetLambdaSuccessFeedbackRoleArn` <a name="ResetLambdaSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaSuccessFeedbackRoleArn"></a>

```csharp
private void ResetLambdaSuccessFeedbackRoleArn()
```

##### `ResetLambdaSuccessFeedbackSampleRate` <a name="ResetLambdaSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaSuccessFeedbackSampleRate"></a>

```csharp
private void ResetLambdaSuccessFeedbackSampleRate()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetNamePrefix"></a>

```csharp
private void ResetNamePrefix()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetPolicy"></a>

```csharp
private void ResetPolicy()
```

##### `ResetSignatureVersion` <a name="ResetSignatureVersion" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetSignatureVersion"></a>

```csharp
private void ResetSignatureVersion()
```

##### `ResetSqsFailureFeedbackRoleArn` <a name="ResetSqsFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsFailureFeedbackRoleArn"></a>

```csharp
private void ResetSqsFailureFeedbackRoleArn()
```

##### `ResetSqsSuccessFeedbackRoleArn` <a name="ResetSqsSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsSuccessFeedbackRoleArn"></a>

```csharp
private void ResetSqsSuccessFeedbackRoleArn()
```

##### `ResetSqsSuccessFeedbackSampleRate` <a name="ResetSqsSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsSuccessFeedbackSampleRate"></a>

```csharp
private void ResetSqsSuccessFeedbackSampleRate()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTracingConfig` <a name="ResetTracingConfig" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetTracingConfig"></a>

```csharp
private void ResetTracingConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.snsTopic.SnsTopic.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SnsTopic.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.snsTopic.SnsTopic.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SnsTopic.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SnsTopic.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationFailureFeedbackRoleArnInput">ApplicationFailureFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackRoleArnInput">ApplicationSuccessFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackSampleRateInput">ApplicationSuccessFeedbackSampleRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.contentBasedDeduplicationInput">ContentBasedDeduplicationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.deliveryPolicyInput">DeliveryPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.fifoTopicInput">FifoTopicInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseFailureFeedbackRoleArnInput">FirehoseFailureFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackRoleArnInput">FirehoseSuccessFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackSampleRateInput">FirehoseSuccessFeedbackSampleRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpFailureFeedbackRoleArnInput">HttpFailureFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackRoleArnInput">HttpSuccessFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackSampleRateInput">HttpSuccessFeedbackSampleRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.kmsMasterKeyIdInput">KmsMasterKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaFailureFeedbackRoleArnInput">LambdaFailureFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackRoleArnInput">LambdaSuccessFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackSampleRateInput">LambdaSuccessFeedbackSampleRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.namePrefixInput">NamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.signatureVersionInput">SignatureVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsFailureFeedbackRoleArnInput">SqsFailureFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackRoleArnInput">SqsSuccessFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackSampleRateInput">SqsSuccessFeedbackSampleRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tracingConfigInput">TracingConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationFailureFeedbackRoleArn">ApplicationFailureFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackRoleArn">ApplicationSuccessFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackSampleRate">ApplicationSuccessFeedbackSampleRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.contentBasedDeduplication">ContentBasedDeduplication</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.deliveryPolicy">DeliveryPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.fifoTopic">FifoTopic</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseFailureFeedbackRoleArn">FirehoseFailureFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackRoleArn">FirehoseSuccessFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackSampleRate">FirehoseSuccessFeedbackSampleRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpFailureFeedbackRoleArn">HttpFailureFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackRoleArn">HttpSuccessFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackSampleRate">HttpSuccessFeedbackSampleRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.kmsMasterKeyId">KmsMasterKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaFailureFeedbackRoleArn">LambdaFailureFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackRoleArn">LambdaSuccessFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackSampleRate">LambdaSuccessFeedbackSampleRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.namePrefix">NamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.signatureVersion">SignatureVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsFailureFeedbackRoleArn">SqsFailureFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackRoleArn">SqsSuccessFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackSampleRate">SqsSuccessFeedbackSampleRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tracingConfig">TracingConfig</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `ApplicationFailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="ApplicationFailureFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationFailureFeedbackRoleArnInput"></a>

```csharp
public string ApplicationFailureFeedbackRoleArnInput { get; }
```

- *Type:* string

---

##### `ApplicationSuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="ApplicationSuccessFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackRoleArnInput"></a>

```csharp
public string ApplicationSuccessFeedbackRoleArnInput { get; }
```

- *Type:* string

---

##### `ApplicationSuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="ApplicationSuccessFeedbackSampleRateInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackSampleRateInput"></a>

```csharp
public double ApplicationSuccessFeedbackSampleRateInput { get; }
```

- *Type:* double

---

##### `ContentBasedDeduplicationInput`<sup>Optional</sup> <a name="ContentBasedDeduplicationInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.contentBasedDeduplicationInput"></a>

```csharp
public object ContentBasedDeduplicationInput { get; }
```

- *Type:* object

---

##### `DeliveryPolicyInput`<sup>Optional</sup> <a name="DeliveryPolicyInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.deliveryPolicyInput"></a>

```csharp
public string DeliveryPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FifoTopicInput`<sup>Optional</sup> <a name="FifoTopicInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.fifoTopicInput"></a>

```csharp
public object FifoTopicInput { get; }
```

- *Type:* object

---

##### `FirehoseFailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="FirehoseFailureFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseFailureFeedbackRoleArnInput"></a>

```csharp
public string FirehoseFailureFeedbackRoleArnInput { get; }
```

- *Type:* string

---

##### `FirehoseSuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="FirehoseSuccessFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackRoleArnInput"></a>

```csharp
public string FirehoseSuccessFeedbackRoleArnInput { get; }
```

- *Type:* string

---

##### `FirehoseSuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="FirehoseSuccessFeedbackSampleRateInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackSampleRateInput"></a>

```csharp
public double FirehoseSuccessFeedbackSampleRateInput { get; }
```

- *Type:* double

---

##### `HttpFailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="HttpFailureFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpFailureFeedbackRoleArnInput"></a>

```csharp
public string HttpFailureFeedbackRoleArnInput { get; }
```

- *Type:* string

---

##### `HttpSuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="HttpSuccessFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackRoleArnInput"></a>

```csharp
public string HttpSuccessFeedbackRoleArnInput { get; }
```

- *Type:* string

---

##### `HttpSuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="HttpSuccessFeedbackSampleRateInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackSampleRateInput"></a>

```csharp
public double HttpSuccessFeedbackSampleRateInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsMasterKeyIdInput`<sup>Optional</sup> <a name="KmsMasterKeyIdInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.kmsMasterKeyIdInput"></a>

```csharp
public string KmsMasterKeyIdInput { get; }
```

- *Type:* string

---

##### `LambdaFailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="LambdaFailureFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaFailureFeedbackRoleArnInput"></a>

```csharp
public string LambdaFailureFeedbackRoleArnInput { get; }
```

- *Type:* string

---

##### `LambdaSuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="LambdaSuccessFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackRoleArnInput"></a>

```csharp
public string LambdaSuccessFeedbackRoleArnInput { get; }
```

- *Type:* string

---

##### `LambdaSuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="LambdaSuccessFeedbackSampleRateInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackSampleRateInput"></a>

```csharp
public double LambdaSuccessFeedbackSampleRateInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.namePrefixInput"></a>

```csharp
public string NamePrefixInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `SignatureVersionInput`<sup>Optional</sup> <a name="SignatureVersionInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.signatureVersionInput"></a>

```csharp
public double SignatureVersionInput { get; }
```

- *Type:* double

---

##### `SqsFailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="SqsFailureFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsFailureFeedbackRoleArnInput"></a>

```csharp
public string SqsFailureFeedbackRoleArnInput { get; }
```

- *Type:* string

---

##### `SqsSuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="SqsSuccessFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackRoleArnInput"></a>

```csharp
public string SqsSuccessFeedbackRoleArnInput { get; }
```

- *Type:* string

---

##### `SqsSuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="SqsSuccessFeedbackSampleRateInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackSampleRateInput"></a>

```csharp
public double SqsSuccessFeedbackSampleRateInput { get; }
```

- *Type:* double

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TracingConfigInput`<sup>Optional</sup> <a name="TracingConfigInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tracingConfigInput"></a>

```csharp
public string TracingConfigInput { get; }
```

- *Type:* string

---

##### `ApplicationFailureFeedbackRoleArn`<sup>Required</sup> <a name="ApplicationFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationFailureFeedbackRoleArn"></a>

```csharp
public string ApplicationFailureFeedbackRoleArn { get; }
```

- *Type:* string

---

##### `ApplicationSuccessFeedbackRoleArn`<sup>Required</sup> <a name="ApplicationSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackRoleArn"></a>

```csharp
public string ApplicationSuccessFeedbackRoleArn { get; }
```

- *Type:* string

---

##### `ApplicationSuccessFeedbackSampleRate`<sup>Required</sup> <a name="ApplicationSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackSampleRate"></a>

```csharp
public double ApplicationSuccessFeedbackSampleRate { get; }
```

- *Type:* double

---

##### `ContentBasedDeduplication`<sup>Required</sup> <a name="ContentBasedDeduplication" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.contentBasedDeduplication"></a>

```csharp
public object ContentBasedDeduplication { get; }
```

- *Type:* object

---

##### `DeliveryPolicy`<sup>Required</sup> <a name="DeliveryPolicy" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.deliveryPolicy"></a>

```csharp
public string DeliveryPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FifoTopic`<sup>Required</sup> <a name="FifoTopic" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.fifoTopic"></a>

```csharp
public object FifoTopic { get; }
```

- *Type:* object

---

##### `FirehoseFailureFeedbackRoleArn`<sup>Required</sup> <a name="FirehoseFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseFailureFeedbackRoleArn"></a>

```csharp
public string FirehoseFailureFeedbackRoleArn { get; }
```

- *Type:* string

---

##### `FirehoseSuccessFeedbackRoleArn`<sup>Required</sup> <a name="FirehoseSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackRoleArn"></a>

```csharp
public string FirehoseSuccessFeedbackRoleArn { get; }
```

- *Type:* string

---

##### `FirehoseSuccessFeedbackSampleRate`<sup>Required</sup> <a name="FirehoseSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackSampleRate"></a>

```csharp
public double FirehoseSuccessFeedbackSampleRate { get; }
```

- *Type:* double

---

##### `HttpFailureFeedbackRoleArn`<sup>Required</sup> <a name="HttpFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpFailureFeedbackRoleArn"></a>

```csharp
public string HttpFailureFeedbackRoleArn { get; }
```

- *Type:* string

---

##### `HttpSuccessFeedbackRoleArn`<sup>Required</sup> <a name="HttpSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackRoleArn"></a>

```csharp
public string HttpSuccessFeedbackRoleArn { get; }
```

- *Type:* string

---

##### `HttpSuccessFeedbackSampleRate`<sup>Required</sup> <a name="HttpSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackSampleRate"></a>

```csharp
public double HttpSuccessFeedbackSampleRate { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsMasterKeyId`<sup>Required</sup> <a name="KmsMasterKeyId" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.kmsMasterKeyId"></a>

```csharp
public string KmsMasterKeyId { get; }
```

- *Type:* string

---

##### `LambdaFailureFeedbackRoleArn`<sup>Required</sup> <a name="LambdaFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaFailureFeedbackRoleArn"></a>

```csharp
public string LambdaFailureFeedbackRoleArn { get; }
```

- *Type:* string

---

##### `LambdaSuccessFeedbackRoleArn`<sup>Required</sup> <a name="LambdaSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackRoleArn"></a>

```csharp
public string LambdaSuccessFeedbackRoleArn { get; }
```

- *Type:* string

---

##### `LambdaSuccessFeedbackSampleRate`<sup>Required</sup> <a name="LambdaSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackSampleRate"></a>

```csharp
public double LambdaSuccessFeedbackSampleRate { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.namePrefix"></a>

```csharp
public string NamePrefix { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `SignatureVersion`<sup>Required</sup> <a name="SignatureVersion" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.signatureVersion"></a>

```csharp
public double SignatureVersion { get; }
```

- *Type:* double

---

##### `SqsFailureFeedbackRoleArn`<sup>Required</sup> <a name="SqsFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsFailureFeedbackRoleArn"></a>

```csharp
public string SqsFailureFeedbackRoleArn { get; }
```

- *Type:* string

---

##### `SqsSuccessFeedbackRoleArn`<sup>Required</sup> <a name="SqsSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackRoleArn"></a>

```csharp
public string SqsSuccessFeedbackRoleArn { get; }
```

- *Type:* string

---

##### `SqsSuccessFeedbackSampleRate`<sup>Required</sup> <a name="SqsSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackSampleRate"></a>

```csharp
public double SqsSuccessFeedbackSampleRate { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TracingConfig`<sup>Required</sup> <a name="TracingConfig" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tracingConfig"></a>

```csharp
public string TracingConfig { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SnsTopicConfig <a name="SnsTopicConfig" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SnsTopicConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApplicationFailureFeedbackRoleArn = null,
    string ApplicationSuccessFeedbackRoleArn = null,
    double ApplicationSuccessFeedbackSampleRate = null,
    object ContentBasedDeduplication = null,
    string DeliveryPolicy = null,
    string DisplayName = null,
    object FifoTopic = null,
    string FirehoseFailureFeedbackRoleArn = null,
    string FirehoseSuccessFeedbackRoleArn = null,
    double FirehoseSuccessFeedbackSampleRate = null,
    string HttpFailureFeedbackRoleArn = null,
    string HttpSuccessFeedbackRoleArn = null,
    double HttpSuccessFeedbackSampleRate = null,
    string Id = null,
    string KmsMasterKeyId = null,
    string LambdaFailureFeedbackRoleArn = null,
    string LambdaSuccessFeedbackRoleArn = null,
    double LambdaSuccessFeedbackSampleRate = null,
    string Name = null,
    string NamePrefix = null,
    string Policy = null,
    double SignatureVersion = null,
    string SqsFailureFeedbackRoleArn = null,
    string SqsSuccessFeedbackRoleArn = null,
    double SqsSuccessFeedbackSampleRate = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string TracingConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationFailureFeedbackRoleArn">ApplicationFailureFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_failure_feedback_role_arn SnsTopic#application_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationSuccessFeedbackRoleArn">ApplicationSuccessFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_role_arn SnsTopic#application_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationSuccessFeedbackSampleRate">ApplicationSuccessFeedbackSampleRate</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_sample_rate SnsTopic#application_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.contentBasedDeduplication">ContentBasedDeduplication</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#content_based_deduplication SnsTopic#content_based_deduplication}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.deliveryPolicy">DeliveryPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#delivery_policy SnsTopic#delivery_policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#display_name SnsTopic#display_name}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.fifoTopic">FifoTopic</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#fifo_topic SnsTopic#fifo_topic}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseFailureFeedbackRoleArn">FirehoseFailureFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_failure_feedback_role_arn SnsTopic#firehose_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseSuccessFeedbackRoleArn">FirehoseSuccessFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_role_arn SnsTopic#firehose_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseSuccessFeedbackSampleRate">FirehoseSuccessFeedbackSampleRate</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_sample_rate SnsTopic#firehose_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpFailureFeedbackRoleArn">HttpFailureFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_failure_feedback_role_arn SnsTopic#http_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpSuccessFeedbackRoleArn">HttpSuccessFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_role_arn SnsTopic#http_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpSuccessFeedbackSampleRate">HttpSuccessFeedbackSampleRate</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_sample_rate SnsTopic#http_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#id SnsTopic#id}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.kmsMasterKeyId">KmsMasterKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#kms_master_key_id SnsTopic#kms_master_key_id}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaFailureFeedbackRoleArn">LambdaFailureFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_failure_feedback_role_arn SnsTopic#lambda_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaSuccessFeedbackRoleArn">LambdaSuccessFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_role_arn SnsTopic#lambda_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaSuccessFeedbackSampleRate">LambdaSuccessFeedbackSampleRate</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_sample_rate SnsTopic#lambda_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name SnsTopic#name}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.namePrefix">NamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name_prefix SnsTopic#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.policy">Policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#policy SnsTopic#policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.signatureVersion">SignatureVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#signature_version SnsTopic#signature_version}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsFailureFeedbackRoleArn">SqsFailureFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_failure_feedback_role_arn SnsTopic#sqs_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsSuccessFeedbackRoleArn">SqsSuccessFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_role_arn SnsTopic#sqs_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsSuccessFeedbackSampleRate">SqsSuccessFeedbackSampleRate</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_sample_rate SnsTopic#sqs_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags SnsTopic#tags}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags_all SnsTopic#tags_all}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tracingConfig">TracingConfig</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tracing_config SnsTopic#tracing_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationFailureFeedbackRoleArn`<sup>Optional</sup> <a name="ApplicationFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationFailureFeedbackRoleArn"></a>

```csharp
public string ApplicationFailureFeedbackRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_failure_feedback_role_arn SnsTopic#application_failure_feedback_role_arn}.

---

##### `ApplicationSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="ApplicationSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationSuccessFeedbackRoleArn"></a>

```csharp
public string ApplicationSuccessFeedbackRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_role_arn SnsTopic#application_success_feedback_role_arn}.

---

##### `ApplicationSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="ApplicationSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationSuccessFeedbackSampleRate"></a>

```csharp
public double ApplicationSuccessFeedbackSampleRate { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_sample_rate SnsTopic#application_success_feedback_sample_rate}.

---

##### `ContentBasedDeduplication`<sup>Optional</sup> <a name="ContentBasedDeduplication" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.contentBasedDeduplication"></a>

```csharp
public object ContentBasedDeduplication { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#content_based_deduplication SnsTopic#content_based_deduplication}.

---

##### `DeliveryPolicy`<sup>Optional</sup> <a name="DeliveryPolicy" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.deliveryPolicy"></a>

```csharp
public string DeliveryPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#delivery_policy SnsTopic#delivery_policy}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#display_name SnsTopic#display_name}.

---

##### `FifoTopic`<sup>Optional</sup> <a name="FifoTopic" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.fifoTopic"></a>

```csharp
public object FifoTopic { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#fifo_topic SnsTopic#fifo_topic}.

---

##### `FirehoseFailureFeedbackRoleArn`<sup>Optional</sup> <a name="FirehoseFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseFailureFeedbackRoleArn"></a>

```csharp
public string FirehoseFailureFeedbackRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_failure_feedback_role_arn SnsTopic#firehose_failure_feedback_role_arn}.

---

##### `FirehoseSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="FirehoseSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseSuccessFeedbackRoleArn"></a>

```csharp
public string FirehoseSuccessFeedbackRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_role_arn SnsTopic#firehose_success_feedback_role_arn}.

---

##### `FirehoseSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="FirehoseSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseSuccessFeedbackSampleRate"></a>

```csharp
public double FirehoseSuccessFeedbackSampleRate { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_sample_rate SnsTopic#firehose_success_feedback_sample_rate}.

---

##### `HttpFailureFeedbackRoleArn`<sup>Optional</sup> <a name="HttpFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpFailureFeedbackRoleArn"></a>

```csharp
public string HttpFailureFeedbackRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_failure_feedback_role_arn SnsTopic#http_failure_feedback_role_arn}.

---

##### `HttpSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="HttpSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpSuccessFeedbackRoleArn"></a>

```csharp
public string HttpSuccessFeedbackRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_role_arn SnsTopic#http_success_feedback_role_arn}.

---

##### `HttpSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="HttpSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpSuccessFeedbackSampleRate"></a>

```csharp
public double HttpSuccessFeedbackSampleRate { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_sample_rate SnsTopic#http_success_feedback_sample_rate}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#id SnsTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsMasterKeyId`<sup>Optional</sup> <a name="KmsMasterKeyId" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.kmsMasterKeyId"></a>

```csharp
public string KmsMasterKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#kms_master_key_id SnsTopic#kms_master_key_id}.

---

##### `LambdaFailureFeedbackRoleArn`<sup>Optional</sup> <a name="LambdaFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaFailureFeedbackRoleArn"></a>

```csharp
public string LambdaFailureFeedbackRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_failure_feedback_role_arn SnsTopic#lambda_failure_feedback_role_arn}.

---

##### `LambdaSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="LambdaSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaSuccessFeedbackRoleArn"></a>

```csharp
public string LambdaSuccessFeedbackRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_role_arn SnsTopic#lambda_success_feedback_role_arn}.

---

##### `LambdaSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="LambdaSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaSuccessFeedbackSampleRate"></a>

```csharp
public double LambdaSuccessFeedbackSampleRate { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_sample_rate SnsTopic#lambda_success_feedback_sample_rate}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name SnsTopic#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.namePrefix"></a>

```csharp
public string NamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name_prefix SnsTopic#name_prefix}.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#policy SnsTopic#policy}.

---

##### `SignatureVersion`<sup>Optional</sup> <a name="SignatureVersion" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.signatureVersion"></a>

```csharp
public double SignatureVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#signature_version SnsTopic#signature_version}.

---

##### `SqsFailureFeedbackRoleArn`<sup>Optional</sup> <a name="SqsFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsFailureFeedbackRoleArn"></a>

```csharp
public string SqsFailureFeedbackRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_failure_feedback_role_arn SnsTopic#sqs_failure_feedback_role_arn}.

---

##### `SqsSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="SqsSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsSuccessFeedbackRoleArn"></a>

```csharp
public string SqsSuccessFeedbackRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_role_arn SnsTopic#sqs_success_feedback_role_arn}.

---

##### `SqsSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="SqsSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsSuccessFeedbackSampleRate"></a>

```csharp
public double SqsSuccessFeedbackSampleRate { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_sample_rate SnsTopic#sqs_success_feedback_sample_rate}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags SnsTopic#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags_all SnsTopic#tags_all}.

---

##### `TracingConfig`<sup>Optional</sup> <a name="TracingConfig" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tracingConfig"></a>

```csharp
public string TracingConfig { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tracing_config SnsTopic#tracing_config}.

---



