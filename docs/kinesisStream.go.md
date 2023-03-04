# `kinesisStream` Submodule <a name="`kinesisStream` Submodule" id="@cdktf/provider-aws.kinesisStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KinesisStream <a name="KinesisStream" id="@cdktf/provider-aws.kinesisStream.KinesisStream"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream aws_kinesis_stream}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kinesisstream"

kinesisstream.NewKinesisStream(scope Construct, id *string, config KinesisStreamConfig) KinesisStream
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig">KinesisStreamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig">KinesisStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.putStreamModeDetails">PutStreamModeDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.resetEnforceConsumerDeletion">ResetEnforceConsumerDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.resetRetentionPeriod">ResetRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.resetShardCount">ResetShardCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.resetShardLevelMetrics">ResetShardLevelMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.resetStreamModeDetails">ResetStreamModeDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisStream.KinesisStream.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.kinesisStream.KinesisStream.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kinesisStream.KinesisStream.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kinesisStream.KinesisStream.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.kinesisStream.KinesisStream.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.kinesisStream.KinesisStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.kinesisStream.KinesisStream.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.kinesisStream.KinesisStream.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.kinesisStream.KinesisStream.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutStreamModeDetails` <a name="PutStreamModeDetails" id="@cdktf/provider-aws.kinesisStream.KinesisStream.putStreamModeDetails"></a>

```go
func PutStreamModeDetails(value KinesisStreamStreamModeDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kinesisStream.KinesisStream.putStreamModeDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.kinesisStream.KinesisStream.putTimeouts"></a>

```go
func PutTimeouts(value KinesisStreamTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kinesisStream.KinesisStream.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts">KinesisStreamTimeouts</a>

---

##### `ResetArn` <a name="ResetArn" id="@cdktf/provider-aws.kinesisStream.KinesisStream.resetArn"></a>

```go
func ResetArn()
```

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktf/provider-aws.kinesisStream.KinesisStream.resetEncryptionType"></a>

```go
func ResetEncryptionType()
```

##### `ResetEnforceConsumerDeletion` <a name="ResetEnforceConsumerDeletion" id="@cdktf/provider-aws.kinesisStream.KinesisStream.resetEnforceConsumerDeletion"></a>

```go
func ResetEnforceConsumerDeletion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.kinesisStream.KinesisStream.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.kinesisStream.KinesisStream.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetRetentionPeriod` <a name="ResetRetentionPeriod" id="@cdktf/provider-aws.kinesisStream.KinesisStream.resetRetentionPeriod"></a>

```go
func ResetRetentionPeriod()
```

##### `ResetShardCount` <a name="ResetShardCount" id="@cdktf/provider-aws.kinesisStream.KinesisStream.resetShardCount"></a>

```go
func ResetShardCount()
```

##### `ResetShardLevelMetrics` <a name="ResetShardLevelMetrics" id="@cdktf/provider-aws.kinesisStream.KinesisStream.resetShardLevelMetrics"></a>

```go
func ResetShardLevelMetrics()
```

##### `ResetStreamModeDetails` <a name="ResetStreamModeDetails" id="@cdktf/provider-aws.kinesisStream.KinesisStream.resetStreamModeDetails"></a>

```go
func ResetStreamModeDetails()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.kinesisStream.KinesisStream.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.kinesisStream.KinesisStream.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.kinesisStream.KinesisStream.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.kinesisStream.KinesisStream.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kinesisstream"

kinesisstream.KinesisStream_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kinesisStream.KinesisStream.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.kinesisStream.KinesisStream.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kinesisstream"

kinesisstream.KinesisStream_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kinesisStream.KinesisStream.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.kinesisStream.KinesisStream.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kinesisstream"

kinesisstream.KinesisStream_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kinesisStream.KinesisStream.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.streamModeDetails">StreamModeDetails</a></code> | <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference">KinesisStreamStreamModeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference">KinesisStreamTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.enforceConsumerDeletionInput">EnforceConsumerDeletionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.retentionPeriodInput">RetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.shardCountInput">ShardCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.shardLevelMetricsInput">ShardLevelMetricsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.streamModeDetailsInput">StreamModeDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.enforceConsumerDeletion">EnforceConsumerDeletion</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.retentionPeriod">RetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.shardCount">ShardCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.shardLevelMetrics">ShardLevelMetrics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `StreamModeDetails`<sup>Required</sup> <a name="StreamModeDetails" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.streamModeDetails"></a>

```go
func StreamModeDetails() KinesisStreamStreamModeDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference">KinesisStreamStreamModeDetailsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.timeouts"></a>

```go
func Timeouts() KinesisStreamTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference">KinesisStreamTimeoutsOutputReference</a>

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.encryptionTypeInput"></a>

```go
func EncryptionTypeInput() *string
```

- *Type:* *string

---

##### `EnforceConsumerDeletionInput`<sup>Optional</sup> <a name="EnforceConsumerDeletionInput" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.enforceConsumerDeletionInput"></a>

```go
func EnforceConsumerDeletionInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RetentionPeriodInput`<sup>Optional</sup> <a name="RetentionPeriodInput" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.retentionPeriodInput"></a>

```go
func RetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `ShardCountInput`<sup>Optional</sup> <a name="ShardCountInput" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.shardCountInput"></a>

```go
func ShardCountInput() *f64
```

- *Type:* *f64

---

##### `ShardLevelMetricsInput`<sup>Optional</sup> <a name="ShardLevelMetricsInput" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.shardLevelMetricsInput"></a>

```go
func ShardLevelMetricsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StreamModeDetailsInput`<sup>Optional</sup> <a name="StreamModeDetailsInput" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.streamModeDetailsInput"></a>

```go
func StreamModeDetailsInput() KinesisStreamStreamModeDetails
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `EnforceConsumerDeletion`<sup>Required</sup> <a name="EnforceConsumerDeletion" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.enforceConsumerDeletion"></a>

```go
func EnforceConsumerDeletion() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.retentionPeriod"></a>

```go
func RetentionPeriod() *f64
```

- *Type:* *f64

---

##### `ShardCount`<sup>Required</sup> <a name="ShardCount" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.shardCount"></a>

```go
func ShardCount() *f64
```

- *Type:* *f64

---

##### `ShardLevelMetrics`<sup>Required</sup> <a name="ShardLevelMetrics" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.shardLevelMetrics"></a>

```go
func ShardLevelMetrics() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStream.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.kinesisStream.KinesisStream.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KinesisStreamConfig <a name="KinesisStreamConfig" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kinesisstream"

&kinesisstream.KinesisStreamConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Arn: *string,
	EncryptionType: *string,
	EnforceConsumerDeletion: interface{},
	Id: *string,
	KmsKeyId: *string,
	RetentionPeriod: *f64,
	ShardCount: *f64,
	ShardLevelMetrics: *[]*string,
	StreamModeDetails: github.com/cdktf/cdktf-provider-aws-go/aws.kinesisStream.KinesisStreamStreamModeDetails,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.kinesisStream.KinesisStreamTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#name KinesisStream#name}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#arn KinesisStream#arn}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#encryption_type KinesisStream#encryption_type}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.enforceConsumerDeletion">EnforceConsumerDeletion</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#enforce_consumer_deletion KinesisStream#enforce_consumer_deletion}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#id KinesisStream#id}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#kms_key_id KinesisStream#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.retentionPeriod">RetentionPeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#retention_period KinesisStream#retention_period}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.shardCount">ShardCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#shard_count KinesisStream#shard_count}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.shardLevelMetrics">ShardLevelMetrics</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#shard_level_metrics KinesisStream#shard_level_metrics}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.streamModeDetails">StreamModeDetails</a></code> | <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a></code> | stream_mode_details block. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#tags KinesisStream#tags}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#tags_all KinesisStream#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts">KinesisStreamTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#name KinesisStream#name}.

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#arn KinesisStream#arn}.

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.encryptionType"></a>

```go
EncryptionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#encryption_type KinesisStream#encryption_type}.

---

##### `EnforceConsumerDeletion`<sup>Optional</sup> <a name="EnforceConsumerDeletion" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.enforceConsumerDeletion"></a>

```go
EnforceConsumerDeletion interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#enforce_consumer_deletion KinesisStream#enforce_consumer_deletion}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#id KinesisStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#kms_key_id KinesisStream#kms_key_id}.

---

##### `RetentionPeriod`<sup>Optional</sup> <a name="RetentionPeriod" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.retentionPeriod"></a>

```go
RetentionPeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#retention_period KinesisStream#retention_period}.

---

##### `ShardCount`<sup>Optional</sup> <a name="ShardCount" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.shardCount"></a>

```go
ShardCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#shard_count KinesisStream#shard_count}.

---

##### `ShardLevelMetrics`<sup>Optional</sup> <a name="ShardLevelMetrics" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.shardLevelMetrics"></a>

```go
ShardLevelMetrics *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#shard_level_metrics KinesisStream#shard_level_metrics}.

---

##### `StreamModeDetails`<sup>Optional</sup> <a name="StreamModeDetails" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.streamModeDetails"></a>

```go
StreamModeDetails KinesisStreamStreamModeDetails
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a>

stream_mode_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#stream_mode_details KinesisStream#stream_mode_details}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#tags KinesisStream#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#tags_all KinesisStream#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.kinesisStream.KinesisStreamConfig.property.timeouts"></a>

```go
Timeouts KinesisStreamTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts">KinesisStreamTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#timeouts KinesisStream#timeouts}

---

### KinesisStreamStreamModeDetails <a name="KinesisStreamStreamModeDetails" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kinesisstream"

&kinesisstream.KinesisStreamStreamModeDetails {
	StreamMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetails.property.streamMode">StreamMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#stream_mode KinesisStream#stream_mode}. |

---

##### `StreamMode`<sup>Required</sup> <a name="StreamMode" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetails.property.streamMode"></a>

```go
StreamMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#stream_mode KinesisStream#stream_mode}.

---

### KinesisStreamTimeouts <a name="KinesisStreamTimeouts" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kinesisstream"

&kinesisstream.KinesisStreamTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#create KinesisStream#create}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#delete KinesisStream#delete}. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#update KinesisStream#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#create KinesisStream#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#delete KinesisStream#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream#update KinesisStream#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KinesisStreamStreamModeDetailsOutputReference <a name="KinesisStreamStreamModeDetailsOutputReference" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kinesisstream"

kinesisstream.NewKinesisStreamStreamModeDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KinesisStreamStreamModeDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.streamModeInput">StreamModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.streamMode">StreamMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StreamModeInput`<sup>Optional</sup> <a name="StreamModeInput" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.streamModeInput"></a>

```go
func StreamModeInput() *string
```

- *Type:* *string

---

##### `StreamMode`<sup>Required</sup> <a name="StreamMode" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.streamMode"></a>

```go
func StreamMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() KinesisStreamStreamModeDetails
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a>

---


### KinesisStreamTimeoutsOutputReference <a name="KinesisStreamTimeoutsOutputReference" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kinesisstream"

kinesisstream.NewKinesisStreamTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KinesisStreamTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



