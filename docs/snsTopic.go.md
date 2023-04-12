# `snsTopic` Submodule <a name="`snsTopic` Submodule" id="@cdktf/provider-aws.snsTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsTopic <a name="SnsTopic" id="@cdktf/provider-aws.snsTopic.SnsTopic"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_topic aws_sns_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/snstopic"

snstopic.NewSnsTopic(scope Construct, id *string, config SnsTopicConfig) SnsTopic
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig">SnsTopicConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.snsTopic.SnsTopic.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.snsTopic.SnsTopic.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.snsTopic.SnsTopic.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.snsTopic.SnsTopic.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.snsTopic.SnsTopic.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.snsTopic.SnsTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.snsTopic.SnsTopic.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.snsTopic.SnsTopic.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopic.SnsTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetApplicationFailureFeedbackRoleArn` <a name="ResetApplicationFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationFailureFeedbackRoleArn"></a>

```go
func ResetApplicationFailureFeedbackRoleArn()
```

##### `ResetApplicationSuccessFeedbackRoleArn` <a name="ResetApplicationSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationSuccessFeedbackRoleArn"></a>

```go
func ResetApplicationSuccessFeedbackRoleArn()
```

##### `ResetApplicationSuccessFeedbackSampleRate` <a name="ResetApplicationSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetApplicationSuccessFeedbackSampleRate"></a>

```go
func ResetApplicationSuccessFeedbackSampleRate()
```

##### `ResetContentBasedDeduplication` <a name="ResetContentBasedDeduplication" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetContentBasedDeduplication"></a>

```go
func ResetContentBasedDeduplication()
```

##### `ResetDeliveryPolicy` <a name="ResetDeliveryPolicy" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetDeliveryPolicy"></a>

```go
func ResetDeliveryPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFifoTopic` <a name="ResetFifoTopic" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetFifoTopic"></a>

```go
func ResetFifoTopic()
```

##### `ResetFirehoseFailureFeedbackRoleArn` <a name="ResetFirehoseFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseFailureFeedbackRoleArn"></a>

```go
func ResetFirehoseFailureFeedbackRoleArn()
```

##### `ResetFirehoseSuccessFeedbackRoleArn` <a name="ResetFirehoseSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseSuccessFeedbackRoleArn"></a>

```go
func ResetFirehoseSuccessFeedbackRoleArn()
```

##### `ResetFirehoseSuccessFeedbackSampleRate` <a name="ResetFirehoseSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetFirehoseSuccessFeedbackSampleRate"></a>

```go
func ResetFirehoseSuccessFeedbackSampleRate()
```

##### `ResetHttpFailureFeedbackRoleArn` <a name="ResetHttpFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpFailureFeedbackRoleArn"></a>

```go
func ResetHttpFailureFeedbackRoleArn()
```

##### `ResetHttpSuccessFeedbackRoleArn` <a name="ResetHttpSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpSuccessFeedbackRoleArn"></a>

```go
func ResetHttpSuccessFeedbackRoleArn()
```

##### `ResetHttpSuccessFeedbackSampleRate` <a name="ResetHttpSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetHttpSuccessFeedbackSampleRate"></a>

```go
func ResetHttpSuccessFeedbackSampleRate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsMasterKeyId` <a name="ResetKmsMasterKeyId" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetKmsMasterKeyId"></a>

```go
func ResetKmsMasterKeyId()
```

##### `ResetLambdaFailureFeedbackRoleArn` <a name="ResetLambdaFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaFailureFeedbackRoleArn"></a>

```go
func ResetLambdaFailureFeedbackRoleArn()
```

##### `ResetLambdaSuccessFeedbackRoleArn` <a name="ResetLambdaSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaSuccessFeedbackRoleArn"></a>

```go
func ResetLambdaSuccessFeedbackRoleArn()
```

##### `ResetLambdaSuccessFeedbackSampleRate` <a name="ResetLambdaSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetLambdaSuccessFeedbackSampleRate"></a>

```go
func ResetLambdaSuccessFeedbackSampleRate()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetName"></a>

```go
func ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetNamePrefix"></a>

```go
func ResetNamePrefix()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetPolicy"></a>

```go
func ResetPolicy()
```

##### `ResetSignatureVersion` <a name="ResetSignatureVersion" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetSignatureVersion"></a>

```go
func ResetSignatureVersion()
```

##### `ResetSqsFailureFeedbackRoleArn` <a name="ResetSqsFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsFailureFeedbackRoleArn"></a>

```go
func ResetSqsFailureFeedbackRoleArn()
```

##### `ResetSqsSuccessFeedbackRoleArn` <a name="ResetSqsSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsSuccessFeedbackRoleArn"></a>

```go
func ResetSqsSuccessFeedbackRoleArn()
```

##### `ResetSqsSuccessFeedbackSampleRate` <a name="ResetSqsSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetSqsSuccessFeedbackSampleRate"></a>

```go
func ResetSqsSuccessFeedbackSampleRate()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTracingConfig` <a name="ResetTracingConfig" id="@cdktf/provider-aws.snsTopic.SnsTopic.resetTracingConfig"></a>

```go
func ResetTracingConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.snsTopic.SnsTopic.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/snstopic"

snstopic.SnsTopic_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/snstopic"

snstopic.SnsTopic_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/snstopic"

snstopic.SnsTopic_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsTopic.SnsTopic.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationFailureFeedbackRoleArnInput">ApplicationFailureFeedbackRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackRoleArnInput">ApplicationSuccessFeedbackRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackSampleRateInput">ApplicationSuccessFeedbackSampleRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.contentBasedDeduplicationInput">ContentBasedDeduplicationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.deliveryPolicyInput">DeliveryPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.fifoTopicInput">FifoTopicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseFailureFeedbackRoleArnInput">FirehoseFailureFeedbackRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackRoleArnInput">FirehoseSuccessFeedbackRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackSampleRateInput">FirehoseSuccessFeedbackSampleRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpFailureFeedbackRoleArnInput">HttpFailureFeedbackRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackRoleArnInput">HttpSuccessFeedbackRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackSampleRateInput">HttpSuccessFeedbackSampleRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.kmsMasterKeyIdInput">KmsMasterKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaFailureFeedbackRoleArnInput">LambdaFailureFeedbackRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackRoleArnInput">LambdaSuccessFeedbackRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackSampleRateInput">LambdaSuccessFeedbackSampleRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.namePrefixInput">NamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.signatureVersionInput">SignatureVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsFailureFeedbackRoleArnInput">SqsFailureFeedbackRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackRoleArnInput">SqsSuccessFeedbackRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackSampleRateInput">SqsSuccessFeedbackSampleRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tracingConfigInput">TracingConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationFailureFeedbackRoleArn">ApplicationFailureFeedbackRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackRoleArn">ApplicationSuccessFeedbackRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackSampleRate">ApplicationSuccessFeedbackSampleRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.contentBasedDeduplication">ContentBasedDeduplication</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.deliveryPolicy">DeliveryPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.fifoTopic">FifoTopic</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseFailureFeedbackRoleArn">FirehoseFailureFeedbackRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackRoleArn">FirehoseSuccessFeedbackRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackSampleRate">FirehoseSuccessFeedbackSampleRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpFailureFeedbackRoleArn">HttpFailureFeedbackRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackRoleArn">HttpSuccessFeedbackRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackSampleRate">HttpSuccessFeedbackSampleRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.kmsMasterKeyId">KmsMasterKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaFailureFeedbackRoleArn">LambdaFailureFeedbackRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackRoleArn">LambdaSuccessFeedbackRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackSampleRate">LambdaSuccessFeedbackSampleRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.signatureVersion">SignatureVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsFailureFeedbackRoleArn">SqsFailureFeedbackRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackRoleArn">SqsSuccessFeedbackRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackSampleRate">SqsSuccessFeedbackSampleRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tracingConfig">TracingConfig</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `ApplicationFailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="ApplicationFailureFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationFailureFeedbackRoleArnInput"></a>

```go
func ApplicationFailureFeedbackRoleArnInput() *string
```

- *Type:* *string

---

##### `ApplicationSuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="ApplicationSuccessFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackRoleArnInput"></a>

```go
func ApplicationSuccessFeedbackRoleArnInput() *string
```

- *Type:* *string

---

##### `ApplicationSuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="ApplicationSuccessFeedbackSampleRateInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackSampleRateInput"></a>

```go
func ApplicationSuccessFeedbackSampleRateInput() *f64
```

- *Type:* *f64

---

##### `ContentBasedDeduplicationInput`<sup>Optional</sup> <a name="ContentBasedDeduplicationInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.contentBasedDeduplicationInput"></a>

```go
func ContentBasedDeduplicationInput() interface{}
```

- *Type:* interface{}

---

##### `DeliveryPolicyInput`<sup>Optional</sup> <a name="DeliveryPolicyInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.deliveryPolicyInput"></a>

```go
func DeliveryPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FifoTopicInput`<sup>Optional</sup> <a name="FifoTopicInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.fifoTopicInput"></a>

```go
func FifoTopicInput() interface{}
```

- *Type:* interface{}

---

##### `FirehoseFailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="FirehoseFailureFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseFailureFeedbackRoleArnInput"></a>

```go
func FirehoseFailureFeedbackRoleArnInput() *string
```

- *Type:* *string

---

##### `FirehoseSuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="FirehoseSuccessFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackRoleArnInput"></a>

```go
func FirehoseSuccessFeedbackRoleArnInput() *string
```

- *Type:* *string

---

##### `FirehoseSuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="FirehoseSuccessFeedbackSampleRateInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackSampleRateInput"></a>

```go
func FirehoseSuccessFeedbackSampleRateInput() *f64
```

- *Type:* *f64

---

##### `HttpFailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="HttpFailureFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpFailureFeedbackRoleArnInput"></a>

```go
func HttpFailureFeedbackRoleArnInput() *string
```

- *Type:* *string

---

##### `HttpSuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="HttpSuccessFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackRoleArnInput"></a>

```go
func HttpSuccessFeedbackRoleArnInput() *string
```

- *Type:* *string

---

##### `HttpSuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="HttpSuccessFeedbackSampleRateInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackSampleRateInput"></a>

```go
func HttpSuccessFeedbackSampleRateInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsMasterKeyIdInput`<sup>Optional</sup> <a name="KmsMasterKeyIdInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.kmsMasterKeyIdInput"></a>

```go
func KmsMasterKeyIdInput() *string
```

- *Type:* *string

---

##### `LambdaFailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="LambdaFailureFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaFailureFeedbackRoleArnInput"></a>

```go
func LambdaFailureFeedbackRoleArnInput() *string
```

- *Type:* *string

---

##### `LambdaSuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="LambdaSuccessFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackRoleArnInput"></a>

```go
func LambdaSuccessFeedbackRoleArnInput() *string
```

- *Type:* *string

---

##### `LambdaSuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="LambdaSuccessFeedbackSampleRateInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackSampleRateInput"></a>

```go
func LambdaSuccessFeedbackSampleRateInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.namePrefixInput"></a>

```go
func NamePrefixInput() *string
```

- *Type:* *string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `SignatureVersionInput`<sup>Optional</sup> <a name="SignatureVersionInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.signatureVersionInput"></a>

```go
func SignatureVersionInput() *f64
```

- *Type:* *f64

---

##### `SqsFailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="SqsFailureFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsFailureFeedbackRoleArnInput"></a>

```go
func SqsFailureFeedbackRoleArnInput() *string
```

- *Type:* *string

---

##### `SqsSuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="SqsSuccessFeedbackRoleArnInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackRoleArnInput"></a>

```go
func SqsSuccessFeedbackRoleArnInput() *string
```

- *Type:* *string

---

##### `SqsSuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="SqsSuccessFeedbackSampleRateInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackSampleRateInput"></a>

```go
func SqsSuccessFeedbackSampleRateInput() *f64
```

- *Type:* *f64

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TracingConfigInput`<sup>Optional</sup> <a name="TracingConfigInput" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tracingConfigInput"></a>

```go
func TracingConfigInput() *string
```

- *Type:* *string

---

##### `ApplicationFailureFeedbackRoleArn`<sup>Required</sup> <a name="ApplicationFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationFailureFeedbackRoleArn"></a>

```go
func ApplicationFailureFeedbackRoleArn() *string
```

- *Type:* *string

---

##### `ApplicationSuccessFeedbackRoleArn`<sup>Required</sup> <a name="ApplicationSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackRoleArn"></a>

```go
func ApplicationSuccessFeedbackRoleArn() *string
```

- *Type:* *string

---

##### `ApplicationSuccessFeedbackSampleRate`<sup>Required</sup> <a name="ApplicationSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackSampleRate"></a>

```go
func ApplicationSuccessFeedbackSampleRate() *f64
```

- *Type:* *f64

---

##### `ContentBasedDeduplication`<sup>Required</sup> <a name="ContentBasedDeduplication" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.contentBasedDeduplication"></a>

```go
func ContentBasedDeduplication() interface{}
```

- *Type:* interface{}

---

##### `DeliveryPolicy`<sup>Required</sup> <a name="DeliveryPolicy" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.deliveryPolicy"></a>

```go
func DeliveryPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FifoTopic`<sup>Required</sup> <a name="FifoTopic" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.fifoTopic"></a>

```go
func FifoTopic() interface{}
```

- *Type:* interface{}

---

##### `FirehoseFailureFeedbackRoleArn`<sup>Required</sup> <a name="FirehoseFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseFailureFeedbackRoleArn"></a>

```go
func FirehoseFailureFeedbackRoleArn() *string
```

- *Type:* *string

---

##### `FirehoseSuccessFeedbackRoleArn`<sup>Required</sup> <a name="FirehoseSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackRoleArn"></a>

```go
func FirehoseSuccessFeedbackRoleArn() *string
```

- *Type:* *string

---

##### `FirehoseSuccessFeedbackSampleRate`<sup>Required</sup> <a name="FirehoseSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackSampleRate"></a>

```go
func FirehoseSuccessFeedbackSampleRate() *f64
```

- *Type:* *f64

---

##### `HttpFailureFeedbackRoleArn`<sup>Required</sup> <a name="HttpFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpFailureFeedbackRoleArn"></a>

```go
func HttpFailureFeedbackRoleArn() *string
```

- *Type:* *string

---

##### `HttpSuccessFeedbackRoleArn`<sup>Required</sup> <a name="HttpSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackRoleArn"></a>

```go
func HttpSuccessFeedbackRoleArn() *string
```

- *Type:* *string

---

##### `HttpSuccessFeedbackSampleRate`<sup>Required</sup> <a name="HttpSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackSampleRate"></a>

```go
func HttpSuccessFeedbackSampleRate() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsMasterKeyId`<sup>Required</sup> <a name="KmsMasterKeyId" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.kmsMasterKeyId"></a>

```go
func KmsMasterKeyId() *string
```

- *Type:* *string

---

##### `LambdaFailureFeedbackRoleArn`<sup>Required</sup> <a name="LambdaFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaFailureFeedbackRoleArn"></a>

```go
func LambdaFailureFeedbackRoleArn() *string
```

- *Type:* *string

---

##### `LambdaSuccessFeedbackRoleArn`<sup>Required</sup> <a name="LambdaSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackRoleArn"></a>

```go
func LambdaSuccessFeedbackRoleArn() *string
```

- *Type:* *string

---

##### `LambdaSuccessFeedbackSampleRate`<sup>Required</sup> <a name="LambdaSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackSampleRate"></a>

```go
func LambdaSuccessFeedbackSampleRate() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `SignatureVersion`<sup>Required</sup> <a name="SignatureVersion" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.signatureVersion"></a>

```go
func SignatureVersion() *f64
```

- *Type:* *f64

---

##### `SqsFailureFeedbackRoleArn`<sup>Required</sup> <a name="SqsFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsFailureFeedbackRoleArn"></a>

```go
func SqsFailureFeedbackRoleArn() *string
```

- *Type:* *string

---

##### `SqsSuccessFeedbackRoleArn`<sup>Required</sup> <a name="SqsSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackRoleArn"></a>

```go
func SqsSuccessFeedbackRoleArn() *string
```

- *Type:* *string

---

##### `SqsSuccessFeedbackSampleRate`<sup>Required</sup> <a name="SqsSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackSampleRate"></a>

```go
func SqsSuccessFeedbackSampleRate() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TracingConfig`<sup>Required</sup> <a name="TracingConfig" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tracingConfig"></a>

```go
func TracingConfig() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopic.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.snsTopic.SnsTopic.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SnsTopicConfig <a name="SnsTopicConfig" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/snstopic"

&snstopic.SnsTopicConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationFailureFeedbackRoleArn: *string,
	ApplicationSuccessFeedbackRoleArn: *string,
	ApplicationSuccessFeedbackSampleRate: *f64,
	ContentBasedDeduplication: interface{},
	DeliveryPolicy: *string,
	DisplayName: *string,
	FifoTopic: interface{},
	FirehoseFailureFeedbackRoleArn: *string,
	FirehoseSuccessFeedbackRoleArn: *string,
	FirehoseSuccessFeedbackSampleRate: *f64,
	HttpFailureFeedbackRoleArn: *string,
	HttpSuccessFeedbackRoleArn: *string,
	HttpSuccessFeedbackSampleRate: *f64,
	Id: *string,
	KmsMasterKeyId: *string,
	LambdaFailureFeedbackRoleArn: *string,
	LambdaSuccessFeedbackRoleArn: *string,
	LambdaSuccessFeedbackSampleRate: *f64,
	Name: *string,
	NamePrefix: *string,
	Policy: *string,
	SignatureVersion: *f64,
	SqsFailureFeedbackRoleArn: *string,
	SqsSuccessFeedbackRoleArn: *string,
	SqsSuccessFeedbackSampleRate: *f64,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	TracingConfig: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationFailureFeedbackRoleArn">ApplicationFailureFeedbackRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_failure_feedback_role_arn SnsTopic#application_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationSuccessFeedbackRoleArn">ApplicationSuccessFeedbackRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_role_arn SnsTopic#application_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationSuccessFeedbackSampleRate">ApplicationSuccessFeedbackSampleRate</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_sample_rate SnsTopic#application_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.contentBasedDeduplication">ContentBasedDeduplication</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#content_based_deduplication SnsTopic#content_based_deduplication}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.deliveryPolicy">DeliveryPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#delivery_policy SnsTopic#delivery_policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#display_name SnsTopic#display_name}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.fifoTopic">FifoTopic</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#fifo_topic SnsTopic#fifo_topic}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseFailureFeedbackRoleArn">FirehoseFailureFeedbackRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_failure_feedback_role_arn SnsTopic#firehose_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseSuccessFeedbackRoleArn">FirehoseSuccessFeedbackRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_role_arn SnsTopic#firehose_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseSuccessFeedbackSampleRate">FirehoseSuccessFeedbackSampleRate</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_sample_rate SnsTopic#firehose_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpFailureFeedbackRoleArn">HttpFailureFeedbackRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_failure_feedback_role_arn SnsTopic#http_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpSuccessFeedbackRoleArn">HttpSuccessFeedbackRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_role_arn SnsTopic#http_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpSuccessFeedbackSampleRate">HttpSuccessFeedbackSampleRate</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_sample_rate SnsTopic#http_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#id SnsTopic#id}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.kmsMasterKeyId">KmsMasterKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#kms_master_key_id SnsTopic#kms_master_key_id}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaFailureFeedbackRoleArn">LambdaFailureFeedbackRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_failure_feedback_role_arn SnsTopic#lambda_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaSuccessFeedbackRoleArn">LambdaSuccessFeedbackRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_role_arn SnsTopic#lambda_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaSuccessFeedbackSampleRate">LambdaSuccessFeedbackSampleRate</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_sample_rate SnsTopic#lambda_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name SnsTopic#name}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name_prefix SnsTopic#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.policy">Policy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#policy SnsTopic#policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.signatureVersion">SignatureVersion</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#signature_version SnsTopic#signature_version}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsFailureFeedbackRoleArn">SqsFailureFeedbackRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_failure_feedback_role_arn SnsTopic#sqs_failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsSuccessFeedbackRoleArn">SqsSuccessFeedbackRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_role_arn SnsTopic#sqs_success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsSuccessFeedbackSampleRate">SqsSuccessFeedbackSampleRate</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_sample_rate SnsTopic#sqs_success_feedback_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags SnsTopic#tags}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags_all SnsTopic#tags_all}. |
| <code><a href="#@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tracingConfig">TracingConfig</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tracing_config SnsTopic#tracing_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationFailureFeedbackRoleArn`<sup>Optional</sup> <a name="ApplicationFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationFailureFeedbackRoleArn"></a>

```go
ApplicationFailureFeedbackRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_failure_feedback_role_arn SnsTopic#application_failure_feedback_role_arn}.

---

##### `ApplicationSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="ApplicationSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationSuccessFeedbackRoleArn"></a>

```go
ApplicationSuccessFeedbackRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_role_arn SnsTopic#application_success_feedback_role_arn}.

---

##### `ApplicationSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="ApplicationSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.applicationSuccessFeedbackSampleRate"></a>

```go
ApplicationSuccessFeedbackSampleRate *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#application_success_feedback_sample_rate SnsTopic#application_success_feedback_sample_rate}.

---

##### `ContentBasedDeduplication`<sup>Optional</sup> <a name="ContentBasedDeduplication" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.contentBasedDeduplication"></a>

```go
ContentBasedDeduplication interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#content_based_deduplication SnsTopic#content_based_deduplication}.

---

##### `DeliveryPolicy`<sup>Optional</sup> <a name="DeliveryPolicy" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.deliveryPolicy"></a>

```go
DeliveryPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#delivery_policy SnsTopic#delivery_policy}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#display_name SnsTopic#display_name}.

---

##### `FifoTopic`<sup>Optional</sup> <a name="FifoTopic" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.fifoTopic"></a>

```go
FifoTopic interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#fifo_topic SnsTopic#fifo_topic}.

---

##### `FirehoseFailureFeedbackRoleArn`<sup>Optional</sup> <a name="FirehoseFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseFailureFeedbackRoleArn"></a>

```go
FirehoseFailureFeedbackRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_failure_feedback_role_arn SnsTopic#firehose_failure_feedback_role_arn}.

---

##### `FirehoseSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="FirehoseSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseSuccessFeedbackRoleArn"></a>

```go
FirehoseSuccessFeedbackRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_role_arn SnsTopic#firehose_success_feedback_role_arn}.

---

##### `FirehoseSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="FirehoseSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.firehoseSuccessFeedbackSampleRate"></a>

```go
FirehoseSuccessFeedbackSampleRate *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#firehose_success_feedback_sample_rate SnsTopic#firehose_success_feedback_sample_rate}.

---

##### `HttpFailureFeedbackRoleArn`<sup>Optional</sup> <a name="HttpFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpFailureFeedbackRoleArn"></a>

```go
HttpFailureFeedbackRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_failure_feedback_role_arn SnsTopic#http_failure_feedback_role_arn}.

---

##### `HttpSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="HttpSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpSuccessFeedbackRoleArn"></a>

```go
HttpSuccessFeedbackRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_role_arn SnsTopic#http_success_feedback_role_arn}.

---

##### `HttpSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="HttpSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.httpSuccessFeedbackSampleRate"></a>

```go
HttpSuccessFeedbackSampleRate *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#http_success_feedback_sample_rate SnsTopic#http_success_feedback_sample_rate}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#id SnsTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsMasterKeyId`<sup>Optional</sup> <a name="KmsMasterKeyId" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.kmsMasterKeyId"></a>

```go
KmsMasterKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#kms_master_key_id SnsTopic#kms_master_key_id}.

---

##### `LambdaFailureFeedbackRoleArn`<sup>Optional</sup> <a name="LambdaFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaFailureFeedbackRoleArn"></a>

```go
LambdaFailureFeedbackRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_failure_feedback_role_arn SnsTopic#lambda_failure_feedback_role_arn}.

---

##### `LambdaSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="LambdaSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaSuccessFeedbackRoleArn"></a>

```go
LambdaSuccessFeedbackRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_role_arn SnsTopic#lambda_success_feedback_role_arn}.

---

##### `LambdaSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="LambdaSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.lambdaSuccessFeedbackSampleRate"></a>

```go
LambdaSuccessFeedbackSampleRate *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#lambda_success_feedback_sample_rate SnsTopic#lambda_success_feedback_sample_rate}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name SnsTopic#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.namePrefix"></a>

```go
NamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#name_prefix SnsTopic#name_prefix}.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#policy SnsTopic#policy}.

---

##### `SignatureVersion`<sup>Optional</sup> <a name="SignatureVersion" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.signatureVersion"></a>

```go
SignatureVersion *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#signature_version SnsTopic#signature_version}.

---

##### `SqsFailureFeedbackRoleArn`<sup>Optional</sup> <a name="SqsFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsFailureFeedbackRoleArn"></a>

```go
SqsFailureFeedbackRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_failure_feedback_role_arn SnsTopic#sqs_failure_feedback_role_arn}.

---

##### `SqsSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="SqsSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsSuccessFeedbackRoleArn"></a>

```go
SqsSuccessFeedbackRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_role_arn SnsTopic#sqs_success_feedback_role_arn}.

---

##### `SqsSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="SqsSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.sqsSuccessFeedbackSampleRate"></a>

```go
SqsSuccessFeedbackSampleRate *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#sqs_success_feedback_sample_rate SnsTopic#sqs_success_feedback_sample_rate}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags SnsTopic#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tags_all SnsTopic#tags_all}.

---

##### `TracingConfig`<sup>Optional</sup> <a name="TracingConfig" id="@cdktf/provider-aws.snsTopic.SnsTopicConfig.property.tracingConfig"></a>

```go
TracingConfig *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic#tracing_config SnsTopic#tracing_config}.

---



