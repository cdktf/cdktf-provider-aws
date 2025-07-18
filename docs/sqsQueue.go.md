# `sqsQueue` Submodule <a name="`sqsQueue` Submodule" id="@cdktf/provider-aws.sqsQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqsQueue <a name="SqsQueue" id="@cdktf/provider-aws.sqsQueue.SqsQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue aws_sqs_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/sqsqueue"

sqsqueue.NewSqsQueue(scope Construct, id *string, config SqsQueueConfig) SqsQueue
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig">SqsQueueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.sqsQueue.SqsQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig">SqsQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetContentBasedDeduplication">ResetContentBasedDeduplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetDeduplicationScope">ResetDeduplicationScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetDelaySeconds">ResetDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetFifoQueue">ResetFifoQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetFifoThroughputLimit">ResetFifoThroughputLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetKmsDataKeyReusePeriodSeconds">ResetKmsDataKeyReusePeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetKmsMasterKeyId">ResetKmsMasterKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetMaxMessageSize">ResetMaxMessageSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetMessageRetentionSeconds">ResetMessageRetentionSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetReceiveWaitTimeSeconds">ResetReceiveWaitTimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetRedriveAllowPolicy">ResetRedriveAllowPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetRedrivePolicy">ResetRedrivePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetSqsManagedSseEnabled">ResetSqsManagedSseEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.resetVisibilityTimeoutSeconds">ResetVisibilityTimeoutSeconds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sqsQueue.SqsQueue.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sqsQueue.SqsQueue.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sqsQueue.SqsQueue.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sqsQueue.SqsQueue.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.sqsQueue.SqsQueue.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sqsQueue.SqsQueue.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sqsQueue.SqsQueue.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.sqsQueue.SqsQueue.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sqsQueue.SqsQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.sqsQueue.SqsQueue.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.sqsQueue.SqsQueue.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sqsQueue.SqsQueue.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.sqsQueue.SqsQueue.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sqsQueue.SqsQueue.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.sqsQueue.SqsQueue.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.sqsQueue.SqsQueue.putTimeouts"></a>

```go
func PutTimeouts(value SqsQueueTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sqsQueue.SqsQueue.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts">SqsQueueTimeouts</a>

---

##### `ResetContentBasedDeduplication` <a name="ResetContentBasedDeduplication" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetContentBasedDeduplication"></a>

```go
func ResetContentBasedDeduplication()
```

##### `ResetDeduplicationScope` <a name="ResetDeduplicationScope" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetDeduplicationScope"></a>

```go
func ResetDeduplicationScope()
```

##### `ResetDelaySeconds` <a name="ResetDelaySeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetDelaySeconds"></a>

```go
func ResetDelaySeconds()
```

##### `ResetFifoQueue` <a name="ResetFifoQueue" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetFifoQueue"></a>

```go
func ResetFifoQueue()
```

##### `ResetFifoThroughputLimit` <a name="ResetFifoThroughputLimit" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetFifoThroughputLimit"></a>

```go
func ResetFifoThroughputLimit()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsDataKeyReusePeriodSeconds` <a name="ResetKmsDataKeyReusePeriodSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetKmsDataKeyReusePeriodSeconds"></a>

```go
func ResetKmsDataKeyReusePeriodSeconds()
```

##### `ResetKmsMasterKeyId` <a name="ResetKmsMasterKeyId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetKmsMasterKeyId"></a>

```go
func ResetKmsMasterKeyId()
```

##### `ResetMaxMessageSize` <a name="ResetMaxMessageSize" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetMaxMessageSize"></a>

```go
func ResetMaxMessageSize()
```

##### `ResetMessageRetentionSeconds` <a name="ResetMessageRetentionSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetMessageRetentionSeconds"></a>

```go
func ResetMessageRetentionSeconds()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetName"></a>

```go
func ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetNamePrefix"></a>

```go
func ResetNamePrefix()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetPolicy"></a>

```go
func ResetPolicy()
```

##### `ResetReceiveWaitTimeSeconds` <a name="ResetReceiveWaitTimeSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetReceiveWaitTimeSeconds"></a>

```go
func ResetReceiveWaitTimeSeconds()
```

##### `ResetRedriveAllowPolicy` <a name="ResetRedriveAllowPolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetRedriveAllowPolicy"></a>

```go
func ResetRedriveAllowPolicy()
```

##### `ResetRedrivePolicy` <a name="ResetRedrivePolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetRedrivePolicy"></a>

```go
func ResetRedrivePolicy()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSqsManagedSseEnabled` <a name="ResetSqsManagedSseEnabled" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetSqsManagedSseEnabled"></a>

```go
func ResetSqsManagedSseEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVisibilityTimeoutSeconds` <a name="ResetVisibilityTimeoutSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.resetVisibilityTimeoutSeconds"></a>

```go
func ResetVisibilityTimeoutSeconds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SqsQueue resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/sqsqueue"

sqsqueue.SqsQueue_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/sqsqueue"

sqsqueue.SqsQueue_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/sqsqueue"

sqsqueue.SqsQueue_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sqsQueue.SqsQueue.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.sqsQueue.SqsQueue.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/sqsqueue"

sqsqueue.SqsQueue_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SqsQueue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sqsQueue.SqsQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SqsQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SqsQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sqsQueue.SqsQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SqsQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference">SqsQueueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.contentBasedDeduplicationInput">ContentBasedDeduplicationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.deduplicationScopeInput">DeduplicationScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.delaySecondsInput">DelaySecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoQueueInput">FifoQueueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoThroughputLimitInput">FifoThroughputLimitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSecondsInput">KmsDataKeyReusePeriodSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsMasterKeyIdInput">KmsMasterKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.maxMessageSizeInput">MaxMessageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.messageRetentionSecondsInput">MessageRetentionSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.namePrefixInput">NamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.receiveWaitTimeSecondsInput">ReceiveWaitTimeSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.redriveAllowPolicyInput">RedriveAllowPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.redrivePolicyInput">RedrivePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.sqsManagedSseEnabledInput">SqsManagedSseEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.visibilityTimeoutSecondsInput">VisibilityTimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.contentBasedDeduplication">ContentBasedDeduplication</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.deduplicationScope">DeduplicationScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.delaySeconds">DelaySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoQueue">FifoQueue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoThroughputLimit">FifoThroughputLimit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSeconds">KmsDataKeyReusePeriodSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsMasterKeyId">KmsMasterKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.maxMessageSize">MaxMessageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.messageRetentionSeconds">MessageRetentionSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.receiveWaitTimeSeconds">ReceiveWaitTimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.redriveAllowPolicy">RedriveAllowPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.redrivePolicy">RedrivePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.sqsManagedSseEnabled">SqsManagedSseEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.visibilityTimeoutSeconds">VisibilityTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.timeouts"></a>

```go
func Timeouts() SqsQueueTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference">SqsQueueTimeoutsOutputReference</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `ContentBasedDeduplicationInput`<sup>Optional</sup> <a name="ContentBasedDeduplicationInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.contentBasedDeduplicationInput"></a>

```go
func ContentBasedDeduplicationInput() interface{}
```

- *Type:* interface{}

---

##### `DeduplicationScopeInput`<sup>Optional</sup> <a name="DeduplicationScopeInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.deduplicationScopeInput"></a>

```go
func DeduplicationScopeInput() *string
```

- *Type:* *string

---

##### `DelaySecondsInput`<sup>Optional</sup> <a name="DelaySecondsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.delaySecondsInput"></a>

```go
func DelaySecondsInput() *f64
```

- *Type:* *f64

---

##### `FifoQueueInput`<sup>Optional</sup> <a name="FifoQueueInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoQueueInput"></a>

```go
func FifoQueueInput() interface{}
```

- *Type:* interface{}

---

##### `FifoThroughputLimitInput`<sup>Optional</sup> <a name="FifoThroughputLimitInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoThroughputLimitInput"></a>

```go
func FifoThroughputLimitInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsDataKeyReusePeriodSecondsInput`<sup>Optional</sup> <a name="KmsDataKeyReusePeriodSecondsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSecondsInput"></a>

```go
func KmsDataKeyReusePeriodSecondsInput() *f64
```

- *Type:* *f64

---

##### `KmsMasterKeyIdInput`<sup>Optional</sup> <a name="KmsMasterKeyIdInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsMasterKeyIdInput"></a>

```go
func KmsMasterKeyIdInput() *string
```

- *Type:* *string

---

##### `MaxMessageSizeInput`<sup>Optional</sup> <a name="MaxMessageSizeInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.maxMessageSizeInput"></a>

```go
func MaxMessageSizeInput() *f64
```

- *Type:* *f64

---

##### `MessageRetentionSecondsInput`<sup>Optional</sup> <a name="MessageRetentionSecondsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.messageRetentionSecondsInput"></a>

```go
func MessageRetentionSecondsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.namePrefixInput"></a>

```go
func NamePrefixInput() *string
```

- *Type:* *string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `ReceiveWaitTimeSecondsInput`<sup>Optional</sup> <a name="ReceiveWaitTimeSecondsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.receiveWaitTimeSecondsInput"></a>

```go
func ReceiveWaitTimeSecondsInput() *f64
```

- *Type:* *f64

---

##### `RedriveAllowPolicyInput`<sup>Optional</sup> <a name="RedriveAllowPolicyInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.redriveAllowPolicyInput"></a>

```go
func RedriveAllowPolicyInput() *string
```

- *Type:* *string

---

##### `RedrivePolicyInput`<sup>Optional</sup> <a name="RedrivePolicyInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.redrivePolicyInput"></a>

```go
func RedrivePolicyInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SqsManagedSseEnabledInput`<sup>Optional</sup> <a name="SqsManagedSseEnabledInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.sqsManagedSseEnabledInput"></a>

```go
func SqsManagedSseEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VisibilityTimeoutSecondsInput`<sup>Optional</sup> <a name="VisibilityTimeoutSecondsInput" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.visibilityTimeoutSecondsInput"></a>

```go
func VisibilityTimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `ContentBasedDeduplication`<sup>Required</sup> <a name="ContentBasedDeduplication" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.contentBasedDeduplication"></a>

```go
func ContentBasedDeduplication() interface{}
```

- *Type:* interface{}

---

##### `DeduplicationScope`<sup>Required</sup> <a name="DeduplicationScope" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.deduplicationScope"></a>

```go
func DeduplicationScope() *string
```

- *Type:* *string

---

##### `DelaySeconds`<sup>Required</sup> <a name="DelaySeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.delaySeconds"></a>

```go
func DelaySeconds() *f64
```

- *Type:* *f64

---

##### `FifoQueue`<sup>Required</sup> <a name="FifoQueue" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoQueue"></a>

```go
func FifoQueue() interface{}
```

- *Type:* interface{}

---

##### `FifoThroughputLimit`<sup>Required</sup> <a name="FifoThroughputLimit" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.fifoThroughputLimit"></a>

```go
func FifoThroughputLimit() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsDataKeyReusePeriodSeconds`<sup>Required</sup> <a name="KmsDataKeyReusePeriodSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsDataKeyReusePeriodSeconds"></a>

```go
func KmsDataKeyReusePeriodSeconds() *f64
```

- *Type:* *f64

---

##### `KmsMasterKeyId`<sup>Required</sup> <a name="KmsMasterKeyId" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.kmsMasterKeyId"></a>

```go
func KmsMasterKeyId() *string
```

- *Type:* *string

---

##### `MaxMessageSize`<sup>Required</sup> <a name="MaxMessageSize" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.maxMessageSize"></a>

```go
func MaxMessageSize() *f64
```

- *Type:* *f64

---

##### `MessageRetentionSeconds`<sup>Required</sup> <a name="MessageRetentionSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.messageRetentionSeconds"></a>

```go
func MessageRetentionSeconds() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `ReceiveWaitTimeSeconds`<sup>Required</sup> <a name="ReceiveWaitTimeSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.receiveWaitTimeSeconds"></a>

```go
func ReceiveWaitTimeSeconds() *f64
```

- *Type:* *f64

---

##### `RedriveAllowPolicy`<sup>Required</sup> <a name="RedriveAllowPolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.redriveAllowPolicy"></a>

```go
func RedriveAllowPolicy() *string
```

- *Type:* *string

---

##### `RedrivePolicy`<sup>Required</sup> <a name="RedrivePolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.redrivePolicy"></a>

```go
func RedrivePolicy() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SqsManagedSseEnabled`<sup>Required</sup> <a name="SqsManagedSseEnabled" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.sqsManagedSseEnabled"></a>

```go
func SqsManagedSseEnabled() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VisibilityTimeoutSeconds`<sup>Required</sup> <a name="VisibilityTimeoutSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.visibilityTimeoutSeconds"></a>

```go
func VisibilityTimeoutSeconds() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueue.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sqsQueue.SqsQueue.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SqsQueueConfig <a name="SqsQueueConfig" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/sqsqueue"

&sqsqueue.SqsQueueConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ContentBasedDeduplication: interface{},
	DeduplicationScope: *string,
	DelaySeconds: *f64,
	FifoQueue: interface{},
	FifoThroughputLimit: *string,
	Id: *string,
	KmsDataKeyReusePeriodSeconds: *f64,
	KmsMasterKeyId: *string,
	MaxMessageSize: *f64,
	MessageRetentionSeconds: *f64,
	Name: *string,
	NamePrefix: *string,
	Policy: *string,
	ReceiveWaitTimeSeconds: *f64,
	RedriveAllowPolicy: *string,
	RedrivePolicy: *string,
	Region: *string,
	SqsManagedSseEnabled: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.sqsQueue.SqsQueueTimeouts,
	VisibilityTimeoutSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.contentBasedDeduplication">ContentBasedDeduplication</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#content_based_deduplication SqsQueue#content_based_deduplication}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.deduplicationScope">DeduplicationScope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#deduplication_scope SqsQueue#deduplication_scope}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.delaySeconds">DelaySeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#delay_seconds SqsQueue#delay_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.fifoQueue">FifoQueue</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#fifo_queue SqsQueue#fifo_queue}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.fifoThroughputLimit">FifoThroughputLimit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#fifo_throughput_limit SqsQueue#fifo_throughput_limit}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#id SqsQueue#id}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.kmsDataKeyReusePeriodSeconds">KmsDataKeyReusePeriodSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#kms_data_key_reuse_period_seconds SqsQueue#kms_data_key_reuse_period_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.kmsMasterKeyId">KmsMasterKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#kms_master_key_id SqsQueue#kms_master_key_id}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.maxMessageSize">MaxMessageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#max_message_size SqsQueue#max_message_size}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.messageRetentionSeconds">MessageRetentionSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#message_retention_seconds SqsQueue#message_retention_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#name SqsQueue#name}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#name_prefix SqsQueue#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.policy">Policy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#policy SqsQueue#policy}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.receiveWaitTimeSeconds">ReceiveWaitTimeSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#receive_wait_time_seconds SqsQueue#receive_wait_time_seconds}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.redriveAllowPolicy">RedriveAllowPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#redrive_allow_policy SqsQueue#redrive_allow_policy}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.redrivePolicy">RedrivePolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#redrive_policy SqsQueue#redrive_policy}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.sqsManagedSseEnabled">SqsManagedSseEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#sqs_managed_sse_enabled SqsQueue#sqs_managed_sse_enabled}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#tags SqsQueue#tags}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#tags_all SqsQueue#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts">SqsQueueTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.visibilityTimeoutSeconds">VisibilityTimeoutSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#visibility_timeout_seconds SqsQueue#visibility_timeout_seconds}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContentBasedDeduplication`<sup>Optional</sup> <a name="ContentBasedDeduplication" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.contentBasedDeduplication"></a>

```go
ContentBasedDeduplication interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#content_based_deduplication SqsQueue#content_based_deduplication}.

---

##### `DeduplicationScope`<sup>Optional</sup> <a name="DeduplicationScope" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.deduplicationScope"></a>

```go
DeduplicationScope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#deduplication_scope SqsQueue#deduplication_scope}.

---

##### `DelaySeconds`<sup>Optional</sup> <a name="DelaySeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.delaySeconds"></a>

```go
DelaySeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#delay_seconds SqsQueue#delay_seconds}.

---

##### `FifoQueue`<sup>Optional</sup> <a name="FifoQueue" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.fifoQueue"></a>

```go
FifoQueue interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#fifo_queue SqsQueue#fifo_queue}.

---

##### `FifoThroughputLimit`<sup>Optional</sup> <a name="FifoThroughputLimit" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.fifoThroughputLimit"></a>

```go
FifoThroughputLimit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#fifo_throughput_limit SqsQueue#fifo_throughput_limit}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#id SqsQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsDataKeyReusePeriodSeconds`<sup>Optional</sup> <a name="KmsDataKeyReusePeriodSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.kmsDataKeyReusePeriodSeconds"></a>

```go
KmsDataKeyReusePeriodSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#kms_data_key_reuse_period_seconds SqsQueue#kms_data_key_reuse_period_seconds}.

---

##### `KmsMasterKeyId`<sup>Optional</sup> <a name="KmsMasterKeyId" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.kmsMasterKeyId"></a>

```go
KmsMasterKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#kms_master_key_id SqsQueue#kms_master_key_id}.

---

##### `MaxMessageSize`<sup>Optional</sup> <a name="MaxMessageSize" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.maxMessageSize"></a>

```go
MaxMessageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#max_message_size SqsQueue#max_message_size}.

---

##### `MessageRetentionSeconds`<sup>Optional</sup> <a name="MessageRetentionSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.messageRetentionSeconds"></a>

```go
MessageRetentionSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#message_retention_seconds SqsQueue#message_retention_seconds}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#name SqsQueue#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.namePrefix"></a>

```go
NamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#name_prefix SqsQueue#name_prefix}.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#policy SqsQueue#policy}.

---

##### `ReceiveWaitTimeSeconds`<sup>Optional</sup> <a name="ReceiveWaitTimeSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.receiveWaitTimeSeconds"></a>

```go
ReceiveWaitTimeSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#receive_wait_time_seconds SqsQueue#receive_wait_time_seconds}.

---

##### `RedriveAllowPolicy`<sup>Optional</sup> <a name="RedriveAllowPolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.redriveAllowPolicy"></a>

```go
RedriveAllowPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#redrive_allow_policy SqsQueue#redrive_allow_policy}.

---

##### `RedrivePolicy`<sup>Optional</sup> <a name="RedrivePolicy" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.redrivePolicy"></a>

```go
RedrivePolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#redrive_policy SqsQueue#redrive_policy}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#region SqsQueue#region}

---

##### `SqsManagedSseEnabled`<sup>Optional</sup> <a name="SqsManagedSseEnabled" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.sqsManagedSseEnabled"></a>

```go
SqsManagedSseEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#sqs_managed_sse_enabled SqsQueue#sqs_managed_sse_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#tags SqsQueue#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#tags_all SqsQueue#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.timeouts"></a>

```go
Timeouts SqsQueueTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts">SqsQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#timeouts SqsQueue#timeouts}

---

##### `VisibilityTimeoutSeconds`<sup>Optional</sup> <a name="VisibilityTimeoutSeconds" id="@cdktf/provider-aws.sqsQueue.SqsQueueConfig.property.visibilityTimeoutSeconds"></a>

```go
VisibilityTimeoutSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#visibility_timeout_seconds SqsQueue#visibility_timeout_seconds}.

---

### SqsQueueTimeouts <a name="SqsQueueTimeouts" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/sqsqueue"

&sqsqueue.SqsQueueTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#create SqsQueue#create}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#delete SqsQueue#delete}. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#update SqsQueue#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#create SqsQueue#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#delete SqsQueue#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sqs_queue#update SqsQueue#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqsQueueTimeoutsOutputReference <a name="SqsQueueTimeoutsOutputReference" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/sqsqueue"

sqsqueue.NewSqsQueueTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqsQueueTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sqsQueue.SqsQueueTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



