# `macie2ClassificationJob` Submodule <a name="`macie2ClassificationJob` Submodule" id="@cdktf/provider-aws.macie2ClassificationJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Macie2ClassificationJob <a name="Macie2ClassificationJob" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job aws_macie2_classification_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJob(scope Construct, id *string, config Macie2ClassificationJobConfig) Macie2ClassificationJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig">Macie2ClassificationJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig">Macie2ClassificationJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.putS3JobDefinition">PutS3JobDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.putScheduleFrequency">PutScheduleFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetCustomDataIdentifierIds">ResetCustomDataIdentifierIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetInitialRun">ResetInitialRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetJobStatus">ResetJobStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetSamplingPercentage">ResetSamplingPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetScheduleFrequency">ResetScheduleFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutS3JobDefinition` <a name="PutS3JobDefinition" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.putS3JobDefinition"></a>

```go
func PutS3JobDefinition(value Macie2ClassificationJobS3JobDefinition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.putS3JobDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition">Macie2ClassificationJobS3JobDefinition</a>

---

##### `PutScheduleFrequency` <a name="PutScheduleFrequency" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.putScheduleFrequency"></a>

```go
func PutScheduleFrequency(value Macie2ClassificationJobScheduleFrequency)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.putScheduleFrequency.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency">Macie2ClassificationJobScheduleFrequency</a>

---

##### `ResetCustomDataIdentifierIds` <a name="ResetCustomDataIdentifierIds" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetCustomDataIdentifierIds"></a>

```go
func ResetCustomDataIdentifierIds()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetId"></a>

```go
func ResetId()
```

##### `ResetInitialRun` <a name="ResetInitialRun" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetInitialRun"></a>

```go
func ResetInitialRun()
```

##### `ResetJobStatus` <a name="ResetJobStatus" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetJobStatus"></a>

```go
func ResetJobStatus()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetName"></a>

```go
func ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetNamePrefix"></a>

```go
func ResetNamePrefix()
```

##### `ResetSamplingPercentage` <a name="ResetSamplingPercentage" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetSamplingPercentage"></a>

```go
func ResetSamplingPercentage()
```

##### `ResetScheduleFrequency` <a name="ResetScheduleFrequency" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetScheduleFrequency"></a>

```go
func ResetScheduleFrequency()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.Macie2ClassificationJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.Macie2ClassificationJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.Macie2ClassificationJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.jobArn">JobArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.jobId">JobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.s3JobDefinition">S3JobDefinition</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference">Macie2ClassificationJobS3JobDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.scheduleFrequency">ScheduleFrequency</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference">Macie2ClassificationJobScheduleFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.userPausedDetails">UserPausedDetails</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList">Macie2ClassificationJobUserPausedDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.customDataIdentifierIdsInput">CustomDataIdentifierIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.initialRunInput">InitialRunInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.jobStatusInput">JobStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.jobTypeInput">JobTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.namePrefixInput">NamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.s3JobDefinitionInput">S3JobDefinitionInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition">Macie2ClassificationJobS3JobDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.samplingPercentageInput">SamplingPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.scheduleFrequencyInput">ScheduleFrequencyInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency">Macie2ClassificationJobScheduleFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.customDataIdentifierIds">CustomDataIdentifierIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.initialRun">InitialRun</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.jobStatus">JobStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.jobType">JobType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.samplingPercentage">SamplingPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `JobArn`<sup>Required</sup> <a name="JobArn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.jobArn"></a>

```go
func JobArn() *string
```

- *Type:* *string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.jobId"></a>

```go
func JobId() *string
```

- *Type:* *string

---

##### `S3JobDefinition`<sup>Required</sup> <a name="S3JobDefinition" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.s3JobDefinition"></a>

```go
func S3JobDefinition() Macie2ClassificationJobS3JobDefinitionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference">Macie2ClassificationJobS3JobDefinitionOutputReference</a>

---

##### `ScheduleFrequency`<sup>Required</sup> <a name="ScheduleFrequency" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.scheduleFrequency"></a>

```go
func ScheduleFrequency() Macie2ClassificationJobScheduleFrequencyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference">Macie2ClassificationJobScheduleFrequencyOutputReference</a>

---

##### `UserPausedDetails`<sup>Required</sup> <a name="UserPausedDetails" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.userPausedDetails"></a>

```go
func UserPausedDetails() Macie2ClassificationJobUserPausedDetailsList
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList">Macie2ClassificationJobUserPausedDetailsList</a>

---

##### `CustomDataIdentifierIdsInput`<sup>Optional</sup> <a name="CustomDataIdentifierIdsInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.customDataIdentifierIdsInput"></a>

```go
func CustomDataIdentifierIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InitialRunInput`<sup>Optional</sup> <a name="InitialRunInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.initialRunInput"></a>

```go
func InitialRunInput() interface{}
```

- *Type:* interface{}

---

##### `JobStatusInput`<sup>Optional</sup> <a name="JobStatusInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.jobStatusInput"></a>

```go
func JobStatusInput() *string
```

- *Type:* *string

---

##### `JobTypeInput`<sup>Optional</sup> <a name="JobTypeInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.jobTypeInput"></a>

```go
func JobTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.namePrefixInput"></a>

```go
func NamePrefixInput() *string
```

- *Type:* *string

---

##### `S3JobDefinitionInput`<sup>Optional</sup> <a name="S3JobDefinitionInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.s3JobDefinitionInput"></a>

```go
func S3JobDefinitionInput() Macie2ClassificationJobS3JobDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition">Macie2ClassificationJobS3JobDefinition</a>

---

##### `SamplingPercentageInput`<sup>Optional</sup> <a name="SamplingPercentageInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.samplingPercentageInput"></a>

```go
func SamplingPercentageInput() *f64
```

- *Type:* *f64

---

##### `ScheduleFrequencyInput`<sup>Optional</sup> <a name="ScheduleFrequencyInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.scheduleFrequencyInput"></a>

```go
func ScheduleFrequencyInput() Macie2ClassificationJobScheduleFrequency
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency">Macie2ClassificationJobScheduleFrequency</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CustomDataIdentifierIds`<sup>Required</sup> <a name="CustomDataIdentifierIds" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.customDataIdentifierIds"></a>

```go
func CustomDataIdentifierIds() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InitialRun`<sup>Required</sup> <a name="InitialRun" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.initialRun"></a>

```go
func InitialRun() interface{}
```

- *Type:* interface{}

---

##### `JobStatus`<sup>Required</sup> <a name="JobStatus" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.jobStatus"></a>

```go
func JobStatus() *string
```

- *Type:* *string

---

##### `JobType`<sup>Required</sup> <a name="JobType" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.jobType"></a>

```go
func JobType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `SamplingPercentage`<sup>Required</sup> <a name="SamplingPercentage" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.samplingPercentage"></a>

```go
func SamplingPercentage() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Macie2ClassificationJobConfig <a name="Macie2ClassificationJobConfig" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	JobType: *string,
	S3JobDefinition: github.com/cdktf/cdktf-provider-aws-go/aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition,
	CustomDataIdentifierIds: *[]*string,
	Description: *string,
	Id: *string,
	InitialRun: interface{},
	JobStatus: *string,
	Name: *string,
	NamePrefix: *string,
	SamplingPercentage: *f64,
	ScheduleFrequency: github.com/cdktf/cdktf-provider-aws-go/aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.jobType">JobType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#job_type Macie2ClassificationJob#job_type}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.s3JobDefinition">S3JobDefinition</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition">Macie2ClassificationJobS3JobDefinition</a></code> | s3_job_definition block. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.customDataIdentifierIds">CustomDataIdentifierIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#custom_data_identifier_ids Macie2ClassificationJob#custom_data_identifier_ids}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#description Macie2ClassificationJob#description}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#id Macie2ClassificationJob#id}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.initialRun">InitialRun</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#initial_run Macie2ClassificationJob#initial_run}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.jobStatus">JobStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#job_status Macie2ClassificationJob#job_status}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#name Macie2ClassificationJob#name}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#name_prefix Macie2ClassificationJob#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.samplingPercentage">SamplingPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#sampling_percentage Macie2ClassificationJob#sampling_percentage}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.scheduleFrequency">ScheduleFrequency</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency">Macie2ClassificationJobScheduleFrequency</a></code> | schedule_frequency block. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tags Macie2ClassificationJob#tags}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tags_all Macie2ClassificationJob#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `JobType`<sup>Required</sup> <a name="JobType" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.jobType"></a>

```go
JobType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#job_type Macie2ClassificationJob#job_type}.

---

##### `S3JobDefinition`<sup>Required</sup> <a name="S3JobDefinition" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.s3JobDefinition"></a>

```go
S3JobDefinition Macie2ClassificationJobS3JobDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition">Macie2ClassificationJobS3JobDefinition</a>

s3_job_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#s3_job_definition Macie2ClassificationJob#s3_job_definition}

---

##### `CustomDataIdentifierIds`<sup>Optional</sup> <a name="CustomDataIdentifierIds" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.customDataIdentifierIds"></a>

```go
CustomDataIdentifierIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#custom_data_identifier_ids Macie2ClassificationJob#custom_data_identifier_ids}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#description Macie2ClassificationJob#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#id Macie2ClassificationJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialRun`<sup>Optional</sup> <a name="InitialRun" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.initialRun"></a>

```go
InitialRun interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#initial_run Macie2ClassificationJob#initial_run}.

---

##### `JobStatus`<sup>Optional</sup> <a name="JobStatus" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.jobStatus"></a>

```go
JobStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#job_status Macie2ClassificationJob#job_status}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#name Macie2ClassificationJob#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.namePrefix"></a>

```go
NamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#name_prefix Macie2ClassificationJob#name_prefix}.

---

##### `SamplingPercentage`<sup>Optional</sup> <a name="SamplingPercentage" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.samplingPercentage"></a>

```go
SamplingPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#sampling_percentage Macie2ClassificationJob#sampling_percentage}.

---

##### `ScheduleFrequency`<sup>Optional</sup> <a name="ScheduleFrequency" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.scheduleFrequency"></a>

```go
ScheduleFrequency Macie2ClassificationJobScheduleFrequency
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency">Macie2ClassificationJobScheduleFrequency</a>

schedule_frequency block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#schedule_frequency Macie2ClassificationJob#schedule_frequency}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tags Macie2ClassificationJob#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tags_all Macie2ClassificationJob#tags_all}.

---

### Macie2ClassificationJobS3JobDefinition <a name="Macie2ClassificationJobS3JobDefinition" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobS3JobDefinition {
	BucketCriteria: github.com/cdktf/cdktf-provider-aws-go/aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria,
	BucketDefinitions: interface{},
	Scoping: github.com/cdktf/cdktf-provider-aws-go/aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition.property.bucketCriteria">BucketCriteria</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria">Macie2ClassificationJobS3JobDefinitionBucketCriteria</a></code> | bucket_criteria block. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition.property.bucketDefinitions">BucketDefinitions</a></code> | <code>interface{}</code> | bucket_definitions block. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition.property.scoping">Scoping</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping">Macie2ClassificationJobS3JobDefinitionScoping</a></code> | scoping block. |

---

##### `BucketCriteria`<sup>Optional</sup> <a name="BucketCriteria" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition.property.bucketCriteria"></a>

```go
BucketCriteria Macie2ClassificationJobS3JobDefinitionBucketCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria">Macie2ClassificationJobS3JobDefinitionBucketCriteria</a>

bucket_criteria block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#bucket_criteria Macie2ClassificationJob#bucket_criteria}

---

##### `BucketDefinitions`<sup>Optional</sup> <a name="BucketDefinitions" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition.property.bucketDefinitions"></a>

```go
BucketDefinitions interface{}
```

- *Type:* interface{}

bucket_definitions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#bucket_definitions Macie2ClassificationJob#bucket_definitions}

---

##### `Scoping`<sup>Optional</sup> <a name="Scoping" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition.property.scoping"></a>

```go
Scoping Macie2ClassificationJobS3JobDefinitionScoping
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping">Macie2ClassificationJobS3JobDefinitionScoping</a>

scoping block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#scoping Macie2ClassificationJob#scoping}

---

### Macie2ClassificationJobS3JobDefinitionBucketCriteria <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteria" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobS3JobDefinitionBucketCriteria {
	Excludes: github.com/cdktf/cdktf-provider-aws-go/aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes,
	Includes: github.com/cdktf/cdktf-provider-aws-go/aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria.property.excludes">Excludes</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes</a></code> | excludes block. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria.property.includes">Includes</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes</a></code> | includes block. |

---

##### `Excludes`<sup>Optional</sup> <a name="Excludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria.property.excludes"></a>

```go
Excludes Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes</a>

excludes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#excludes Macie2ClassificationJob#excludes}

---

##### `Includes`<sup>Optional</sup> <a name="Includes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria.property.includes"></a>

```go
Includes Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes</a>

includes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#includes Macie2ClassificationJob#includes}

---

### Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes {
	And: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes.property.and">And</a></code> | <code>interface{}</code> | and block. |

---

##### `And`<sup>Optional</sup> <a name="And" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes.property.and"></a>

```go
And interface{}
```

- *Type:* interface{}

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#and Macie2ClassificationJob#and}

---

### Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd {
	SimpleCriterion: github.com/cdktf/cdktf-provider-aws-go/aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion,
	TagCriterion: github.com/cdktf/cdktf-provider-aws-go/aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd.property.simpleCriterion">SimpleCriterion</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion</a></code> | simple_criterion block. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd.property.tagCriterion">TagCriterion</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion</a></code> | tag_criterion block. |

---

##### `SimpleCriterion`<sup>Optional</sup> <a name="SimpleCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd.property.simpleCriterion"></a>

```go
SimpleCriterion Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion</a>

simple_criterion block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#simple_criterion Macie2ClassificationJob#simple_criterion}

---

##### `TagCriterion`<sup>Optional</sup> <a name="TagCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAnd.property.tagCriterion"></a>

```go
TagCriterion Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion</a>

tag_criterion block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tag_criterion Macie2ClassificationJob#tag_criterion}

---

### Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion {
	Comparator: *string,
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion.property.comparator">Comparator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#values Macie2ClassificationJob#values}. |

---

##### `Comparator`<sup>Optional</sup> <a name="Comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion.property.comparator"></a>

```go
Comparator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#values Macie2ClassificationJob#values}.

---

### Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion {
	Comparator: *string,
	TagValues: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion.property.comparator">Comparator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion.property.tagValues">TagValues</a></code> | <code>interface{}</code> | tag_values block. |

---

##### `Comparator`<sup>Optional</sup> <a name="Comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion.property.comparator"></a>

```go
Comparator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}.

---

##### `TagValues`<sup>Optional</sup> <a name="TagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion.property.tagValues"></a>

```go
TagValues interface{}
```

- *Type:* interface{}

tag_values block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tag_values Macie2ClassificationJob#tag_values}

---

### Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#value Macie2ClassificationJob#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#value Macie2ClassificationJob#value}.

---

### Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes {
	And: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes.property.and">And</a></code> | <code>interface{}</code> | and block. |

---

##### `And`<sup>Optional</sup> <a name="And" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes.property.and"></a>

```go
And interface{}
```

- *Type:* interface{}

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#and Macie2ClassificationJob#and}

---

### Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd {
	SimpleCriterion: github.com/cdktf/cdktf-provider-aws-go/aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion,
	TagCriterion: github.com/cdktf/cdktf-provider-aws-go/aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd.property.simpleCriterion">SimpleCriterion</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion</a></code> | simple_criterion block. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd.property.tagCriterion">TagCriterion</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion</a></code> | tag_criterion block. |

---

##### `SimpleCriterion`<sup>Optional</sup> <a name="SimpleCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd.property.simpleCriterion"></a>

```go
SimpleCriterion Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion</a>

simple_criterion block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#simple_criterion Macie2ClassificationJob#simple_criterion}

---

##### `TagCriterion`<sup>Optional</sup> <a name="TagCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd.property.tagCriterion"></a>

```go
TagCriterion Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion</a>

tag_criterion block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tag_criterion Macie2ClassificationJob#tag_criterion}

---

### Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion {
	Comparator: *string,
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion.property.comparator">Comparator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#values Macie2ClassificationJob#values}. |

---

##### `Comparator`<sup>Optional</sup> <a name="Comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion.property.comparator"></a>

```go
Comparator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#values Macie2ClassificationJob#values}.

---

### Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion {
	Comparator: *string,
	TagValues: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion.property.comparator">Comparator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion.property.tagValues">TagValues</a></code> | <code>interface{}</code> | tag_values block. |

---

##### `Comparator`<sup>Optional</sup> <a name="Comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion.property.comparator"></a>

```go
Comparator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}.

---

##### `TagValues`<sup>Optional</sup> <a name="TagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion.property.tagValues"></a>

```go
TagValues interface{}
```

- *Type:* interface{}

tag_values block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tag_values Macie2ClassificationJob#tag_values}

---

### Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#value Macie2ClassificationJob#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#value Macie2ClassificationJob#value}.

---

### Macie2ClassificationJobS3JobDefinitionBucketDefinitions <a name="Macie2ClassificationJobS3JobDefinitionBucketDefinitions" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions {
	AccountId: *string,
	Buckets: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#account_id Macie2ClassificationJob#account_id}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions.property.buckets">Buckets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#buckets Macie2ClassificationJob#buckets}. |

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#account_id Macie2ClassificationJob#account_id}.

---

##### `Buckets`<sup>Required</sup> <a name="Buckets" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions.property.buckets"></a>

```go
Buckets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#buckets Macie2ClassificationJob#buckets}.

---

### Macie2ClassificationJobS3JobDefinitionScoping <a name="Macie2ClassificationJobS3JobDefinitionScoping" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobS3JobDefinitionScoping {
	Excludes: github.com/cdktf/cdktf-provider-aws-go/aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes,
	Includes: github.com/cdktf/cdktf-provider-aws-go/aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping.property.excludes">Excludes</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes">Macie2ClassificationJobS3JobDefinitionScopingExcludes</a></code> | excludes block. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping.property.includes">Includes</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes">Macie2ClassificationJobS3JobDefinitionScopingIncludes</a></code> | includes block. |

---

##### `Excludes`<sup>Optional</sup> <a name="Excludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping.property.excludes"></a>

```go
Excludes Macie2ClassificationJobS3JobDefinitionScopingExcludes
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes">Macie2ClassificationJobS3JobDefinitionScopingExcludes</a>

excludes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#excludes Macie2ClassificationJob#excludes}

---

##### `Includes`<sup>Optional</sup> <a name="Includes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping.property.includes"></a>

```go
Includes Macie2ClassificationJobS3JobDefinitionScopingIncludes
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes">Macie2ClassificationJobS3JobDefinitionScopingIncludes</a>

includes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#includes Macie2ClassificationJob#includes}

---

### Macie2ClassificationJobS3JobDefinitionScopingExcludes <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobS3JobDefinitionScopingExcludes {
	And: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes.property.and">And</a></code> | <code>interface{}</code> | and block. |

---

##### `And`<sup>Optional</sup> <a name="And" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes.property.and"></a>

```go
And interface{}
```

- *Type:* interface{}

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#and Macie2ClassificationJob#and}

---

### Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd {
	SimpleScopeTerm: github.com/cdktf/cdktf-provider-aws-go/aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm,
	TagScopeTerm: github.com/cdktf/cdktf-provider-aws-go/aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd.property.simpleScopeTerm">SimpleScopeTerm</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm</a></code> | simple_scope_term block. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd.property.tagScopeTerm">TagScopeTerm</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm</a></code> | tag_scope_term block. |

---

##### `SimpleScopeTerm`<sup>Optional</sup> <a name="SimpleScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd.property.simpleScopeTerm"></a>

```go
SimpleScopeTerm Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm</a>

simple_scope_term block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#simple_scope_term Macie2ClassificationJob#simple_scope_term}

---

##### `TagScopeTerm`<sup>Optional</sup> <a name="TagScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd.property.tagScopeTerm"></a>

```go
TagScopeTerm Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm</a>

tag_scope_term block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tag_scope_term Macie2ClassificationJob#tag_scope_term}

---

### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm {
	Comparator: *string,
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm.property.comparator">Comparator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#values Macie2ClassificationJob#values}. |

---

##### `Comparator`<sup>Optional</sup> <a name="Comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm.property.comparator"></a>

```go
Comparator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#values Macie2ClassificationJob#values}.

---

### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm {
	Comparator: *string,
	Key: *string,
	TagValues: interface{},
	Target: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.property.comparator">Comparator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.property.tagValues">TagValues</a></code> | <code>interface{}</code> | tag_values block. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.property.target">Target</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#target Macie2ClassificationJob#target}. |

---

##### `Comparator`<sup>Optional</sup> <a name="Comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.property.comparator"></a>

```go
Comparator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}.

---

##### `TagValues`<sup>Optional</sup> <a name="TagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.property.tagValues"></a>

```go
TagValues interface{}
```

- *Type:* interface{}

tag_values block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tag_values Macie2ClassificationJob#tag_values}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.property.target"></a>

```go
Target *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#target Macie2ClassificationJob#target}.

---

### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#value Macie2ClassificationJob#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#value Macie2ClassificationJob#value}.

---

### Macie2ClassificationJobS3JobDefinitionScopingIncludes <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobS3JobDefinitionScopingIncludes {
	And: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes.property.and">And</a></code> | <code>interface{}</code> | and block. |

---

##### `And`<sup>Optional</sup> <a name="And" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes.property.and"></a>

```go
And interface{}
```

- *Type:* interface{}

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#and Macie2ClassificationJob#and}

---

### Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd {
	SimpleScopeTerm: github.com/cdktf/cdktf-provider-aws-go/aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm,
	TagScopeTerm: github.com/cdktf/cdktf-provider-aws-go/aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd.property.simpleScopeTerm">SimpleScopeTerm</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm</a></code> | simple_scope_term block. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd.property.tagScopeTerm">TagScopeTerm</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm</a></code> | tag_scope_term block. |

---

##### `SimpleScopeTerm`<sup>Optional</sup> <a name="SimpleScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd.property.simpleScopeTerm"></a>

```go
SimpleScopeTerm Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm</a>

simple_scope_term block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#simple_scope_term Macie2ClassificationJob#simple_scope_term}

---

##### `TagScopeTerm`<sup>Optional</sup> <a name="TagScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd.property.tagScopeTerm"></a>

```go
TagScopeTerm Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm</a>

tag_scope_term block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tag_scope_term Macie2ClassificationJob#tag_scope_term}

---

### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm {
	Comparator: *string,
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm.property.comparator">Comparator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#values Macie2ClassificationJob#values}. |

---

##### `Comparator`<sup>Optional</sup> <a name="Comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm.property.comparator"></a>

```go
Comparator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#values Macie2ClassificationJob#values}.

---

### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm {
	Comparator: *string,
	Key: *string,
	TagValues: interface{},
	Target: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.property.comparator">Comparator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.property.tagValues">TagValues</a></code> | <code>interface{}</code> | tag_values block. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.property.target">Target</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#target Macie2ClassificationJob#target}. |

---

##### `Comparator`<sup>Optional</sup> <a name="Comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.property.comparator"></a>

```go
Comparator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#comparator Macie2ClassificationJob#comparator}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}.

---

##### `TagValues`<sup>Optional</sup> <a name="TagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.property.tagValues"></a>

```go
TagValues interface{}
```

- *Type:* interface{}

tag_values block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#tag_values Macie2ClassificationJob#tag_values}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.property.target"></a>

```go
Target *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#target Macie2ClassificationJob#target}.

---

### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#value Macie2ClassificationJob#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#key Macie2ClassificationJob#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#value Macie2ClassificationJob#value}.

---

### Macie2ClassificationJobScheduleFrequency <a name="Macie2ClassificationJobScheduleFrequency" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobScheduleFrequency {
	DailySchedule: interface{},
	MonthlySchedule: *f64,
	WeeklySchedule: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency.property.dailySchedule">DailySchedule</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#daily_schedule Macie2ClassificationJob#daily_schedule}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency.property.monthlySchedule">MonthlySchedule</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#monthly_schedule Macie2ClassificationJob#monthly_schedule}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency.property.weeklySchedule">WeeklySchedule</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#weekly_schedule Macie2ClassificationJob#weekly_schedule}. |

---

##### `DailySchedule`<sup>Optional</sup> <a name="DailySchedule" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency.property.dailySchedule"></a>

```go
DailySchedule interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#daily_schedule Macie2ClassificationJob#daily_schedule}.

---

##### `MonthlySchedule`<sup>Optional</sup> <a name="MonthlySchedule" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency.property.monthlySchedule"></a>

```go
MonthlySchedule *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#monthly_schedule Macie2ClassificationJob#monthly_schedule}.

---

##### `WeeklySchedule`<sup>Optional</sup> <a name="WeeklySchedule" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency.property.weeklySchedule"></a>

```go
WeeklySchedule *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job#weekly_schedule Macie2ClassificationJob#weekly_schedule}.

---

### Macie2ClassificationJobUserPausedDetails <a name="Macie2ClassificationJobUserPausedDetails" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

&macie2classificationjob.Macie2ClassificationJobUserPausedDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.get"></a>

```go
func Get(index *f64) Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.putSimpleCriterion">PutSimpleCriterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.putTagCriterion">PutTagCriterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.resetSimpleCriterion">ResetSimpleCriterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.resetTagCriterion">ResetTagCriterion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSimpleCriterion` <a name="PutSimpleCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.putSimpleCriterion"></a>

```go
func PutSimpleCriterion(value Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.putSimpleCriterion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion</a>

---

##### `PutTagCriterion` <a name="PutTagCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.putTagCriterion"></a>

```go
func PutTagCriterion(value Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.putTagCriterion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion</a>

---

##### `ResetSimpleCriterion` <a name="ResetSimpleCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.resetSimpleCriterion"></a>

```go
func ResetSimpleCriterion()
```

##### `ResetTagCriterion` <a name="ResetTagCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.resetTagCriterion"></a>

```go
func ResetTagCriterion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.simpleCriterion">SimpleCriterion</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.tagCriterion">TagCriterion</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.simpleCriterionInput">SimpleCriterionInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.tagCriterionInput">TagCriterionInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SimpleCriterion`<sup>Required</sup> <a name="SimpleCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.simpleCriterion"></a>

```go
func SimpleCriterion() Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference</a>

---

##### `TagCriterion`<sup>Required</sup> <a name="TagCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.tagCriterion"></a>

```go
func TagCriterion() Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference</a>

---

##### `SimpleCriterionInput`<sup>Optional</sup> <a name="SimpleCriterionInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.simpleCriterionInput"></a>

```go
func SimpleCriterionInput() Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion</a>

---

##### `TagCriterionInput`<sup>Optional</sup> <a name="TagCriterionInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.tagCriterionInput"></a>

```go
func TagCriterionInput() Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.resetComparator">ResetComparator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComparator` <a name="ResetComparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.resetComparator"></a>

```go
func ResetComparator()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.comparatorInput">ComparatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.comparator">Comparator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComparatorInput`<sup>Optional</sup> <a name="ComparatorInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.comparatorInput"></a>

```go
func ComparatorInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Comparator`<sup>Required</sup> <a name="Comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.comparator"></a>

```go
func Comparator() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterionOutputReference.property.internalValue"></a>

```go
func InternalValue() Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion</a>

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.putTagValues">PutTagValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.resetComparator">ResetComparator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.resetTagValues">ResetTagValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTagValues` <a name="PutTagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.putTagValues"></a>

```go
func PutTagValues(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.putTagValues.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetComparator` <a name="ResetComparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.resetComparator"></a>

```go
func ResetComparator()
```

##### `ResetTagValues` <a name="ResetTagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.resetTagValues"></a>

```go
func ResetTagValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.tagValues">TagValues</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.comparatorInput">ComparatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.tagValuesInput">TagValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.comparator">Comparator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagValues`<sup>Required</sup> <a name="TagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.tagValues"></a>

```go
func TagValues() Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList</a>

---

##### `ComparatorInput`<sup>Optional</sup> <a name="ComparatorInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.comparatorInput"></a>

```go
func ComparatorInput() *string
```

- *Type:* *string

---

##### `TagValuesInput`<sup>Optional</sup> <a name="TagValuesInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.tagValuesInput"></a>

```go
func TagValuesInput() interface{}
```

- *Type:* interface{}

---

##### `Comparator`<sup>Required</sup> <a name="Comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.comparator"></a>

```go
func Comparator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionOutputReference.property.internalValue"></a>

```go
func InternalValue() Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion</a>

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.get"></a>

```go
func Get(index *f64) Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.putAnd">PutAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.resetAnd">ResetAnd</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnd` <a name="PutAnd" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.putAnd"></a>

```go
func PutAnd(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.putAnd.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnd` <a name="ResetAnd" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.resetAnd"></a>

```go
func ResetAnd()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.property.and">And</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.property.andInput">AndInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `And`<sup>Required</sup> <a name="And" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.property.and"></a>

```go
func And() Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndList</a>

---

##### `AndInput`<sup>Optional</sup> <a name="AndInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.property.andInput"></a>

```go
func AndInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference.property.internalValue"></a>

```go
func InternalValue() Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes</a>

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.get"></a>

```go
func Get(index *f64) Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.putSimpleCriterion">PutSimpleCriterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.putTagCriterion">PutTagCriterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.resetSimpleCriterion">ResetSimpleCriterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.resetTagCriterion">ResetTagCriterion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSimpleCriterion` <a name="PutSimpleCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.putSimpleCriterion"></a>

```go
func PutSimpleCriterion(value Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.putSimpleCriterion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion</a>

---

##### `PutTagCriterion` <a name="PutTagCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.putTagCriterion"></a>

```go
func PutTagCriterion(value Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.putTagCriterion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion</a>

---

##### `ResetSimpleCriterion` <a name="ResetSimpleCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.resetSimpleCriterion"></a>

```go
func ResetSimpleCriterion()
```

##### `ResetTagCriterion` <a name="ResetTagCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.resetTagCriterion"></a>

```go
func ResetTagCriterion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.simpleCriterion">SimpleCriterion</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.tagCriterion">TagCriterion</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.simpleCriterionInput">SimpleCriterionInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.tagCriterionInput">TagCriterionInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SimpleCriterion`<sup>Required</sup> <a name="SimpleCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.simpleCriterion"></a>

```go
func SimpleCriterion() Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference</a>

---

##### `TagCriterion`<sup>Required</sup> <a name="TagCriterion" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.tagCriterion"></a>

```go
func TagCriterion() Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference</a>

---

##### `SimpleCriterionInput`<sup>Optional</sup> <a name="SimpleCriterionInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.simpleCriterionInput"></a>

```go
func SimpleCriterionInput() Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion</a>

---

##### `TagCriterionInput`<sup>Optional</sup> <a name="TagCriterionInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.tagCriterionInput"></a>

```go
func TagCriterionInput() Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.resetComparator">ResetComparator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComparator` <a name="ResetComparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.resetComparator"></a>

```go
func ResetComparator()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.comparatorInput">ComparatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.comparator">Comparator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComparatorInput`<sup>Optional</sup> <a name="ComparatorInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.comparatorInput"></a>

```go
func ComparatorInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Comparator`<sup>Required</sup> <a name="Comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.comparator"></a>

```go
func Comparator() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterionOutputReference.property.internalValue"></a>

```go
func InternalValue() Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion</a>

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.putTagValues">PutTagValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.resetComparator">ResetComparator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.resetTagValues">ResetTagValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTagValues` <a name="PutTagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.putTagValues"></a>

```go
func PutTagValues(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.putTagValues.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetComparator` <a name="ResetComparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.resetComparator"></a>

```go
func ResetComparator()
```

##### `ResetTagValues` <a name="ResetTagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.resetTagValues"></a>

```go
func ResetTagValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.tagValues">TagValues</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.comparatorInput">ComparatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.tagValuesInput">TagValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.comparator">Comparator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagValues`<sup>Required</sup> <a name="TagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.tagValues"></a>

```go
func TagValues() Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList</a>

---

##### `ComparatorInput`<sup>Optional</sup> <a name="ComparatorInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.comparatorInput"></a>

```go
func ComparatorInput() *string
```

- *Type:* *string

---

##### `TagValuesInput`<sup>Optional</sup> <a name="TagValuesInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.tagValuesInput"></a>

```go
func TagValuesInput() interface{}
```

- *Type:* interface{}

---

##### `Comparator`<sup>Required</sup> <a name="Comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.comparator"></a>

```go
func Comparator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionOutputReference.property.internalValue"></a>

```go
func InternalValue() Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion</a>

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.get"></a>

```go
func Get(index *f64) Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.putAnd">PutAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.resetAnd">ResetAnd</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnd` <a name="PutAnd" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.putAnd"></a>

```go
func PutAnd(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.putAnd.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnd` <a name="ResetAnd" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.resetAnd"></a>

```go
func ResetAnd()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.property.and">And</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.property.andInput">AndInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `And`<sup>Required</sup> <a name="And" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.property.and"></a>

```go
func And() Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndList</a>

---

##### `AndInput`<sup>Optional</sup> <a name="AndInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.property.andInput"></a>

```go
func AndInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference.property.internalValue"></a>

```go
func InternalValue() Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes</a>

---


### Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference <a name="Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.putExcludes">PutExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.putIncludes">PutIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.resetExcludes">ResetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.resetIncludes">ResetIncludes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExcludes` <a name="PutExcludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.putExcludes"></a>

```go
func PutExcludes(value Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.putExcludes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes</a>

---

##### `PutIncludes` <a name="PutIncludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.putIncludes"></a>

```go
func PutIncludes(value Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.putIncludes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes</a>

---

##### `ResetExcludes` <a name="ResetExcludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.resetExcludes"></a>

```go
func ResetExcludes()
```

##### `ResetIncludes` <a name="ResetIncludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.resetIncludes"></a>

```go
func ResetIncludes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.excludes">Excludes</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.includes">Includes</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.excludesInput">ExcludesInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.includesInput">IncludesInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria">Macie2ClassificationJobS3JobDefinitionBucketCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Excludes`<sup>Required</sup> <a name="Excludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.excludes"></a>

```go
func Excludes() Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludesOutputReference</a>

---

##### `Includes`<sup>Required</sup> <a name="Includes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.includes"></a>

```go
func Includes() Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludesOutputReference</a>

---

##### `ExcludesInput`<sup>Optional</sup> <a name="ExcludesInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.excludesInput"></a>

```go
func ExcludesInput() Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaExcludes</a>

---

##### `IncludesInput`<sup>Optional</sup> <a name="IncludesInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.includesInput"></a>

```go
func IncludesInput() Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes">Macie2ClassificationJobS3JobDefinitionBucketCriteriaIncludes</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() Macie2ClassificationJobS3JobDefinitionBucketCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria">Macie2ClassificationJobS3JobDefinitionBucketCriteria</a>

---


### Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList <a name="Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionBucketDefinitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.get"></a>

```go
func Get(index *f64) Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference <a name="Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.bucketsInput">BucketsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.buckets">Buckets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `BucketsInput`<sup>Optional</sup> <a name="BucketsInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.bucketsInput"></a>

```go
func BucketsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Buckets`<sup>Required</sup> <a name="Buckets" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.buckets"></a>

```go
func Buckets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Macie2ClassificationJobS3JobDefinitionOutputReference <a name="Macie2ClassificationJobS3JobDefinitionOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Macie2ClassificationJobS3JobDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.putBucketCriteria">PutBucketCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.putBucketDefinitions">PutBucketDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.putScoping">PutScoping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.resetBucketCriteria">ResetBucketCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.resetBucketDefinitions">ResetBucketDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.resetScoping">ResetScoping</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBucketCriteria` <a name="PutBucketCriteria" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.putBucketCriteria"></a>

```go
func PutBucketCriteria(value Macie2ClassificationJobS3JobDefinitionBucketCriteria)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.putBucketCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria">Macie2ClassificationJobS3JobDefinitionBucketCriteria</a>

---

##### `PutBucketDefinitions` <a name="PutBucketDefinitions" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.putBucketDefinitions"></a>

```go
func PutBucketDefinitions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.putBucketDefinitions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScoping` <a name="PutScoping" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.putScoping"></a>

```go
func PutScoping(value Macie2ClassificationJobS3JobDefinitionScoping)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.putScoping.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping">Macie2ClassificationJobS3JobDefinitionScoping</a>

---

##### `ResetBucketCriteria` <a name="ResetBucketCriteria" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.resetBucketCriteria"></a>

```go
func ResetBucketCriteria()
```

##### `ResetBucketDefinitions` <a name="ResetBucketDefinitions" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.resetBucketDefinitions"></a>

```go
func ResetBucketDefinitions()
```

##### `ResetScoping` <a name="ResetScoping" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.resetScoping"></a>

```go
func ResetScoping()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.bucketCriteria">BucketCriteria</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.bucketDefinitions">BucketDefinitions</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList">Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.scoping">Scoping</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference">Macie2ClassificationJobS3JobDefinitionScopingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.bucketCriteriaInput">BucketCriteriaInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria">Macie2ClassificationJobS3JobDefinitionBucketCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.bucketDefinitionsInput">BucketDefinitionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.scopingInput">ScopingInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping">Macie2ClassificationJobS3JobDefinitionScoping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition">Macie2ClassificationJobS3JobDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketCriteria`<sup>Required</sup> <a name="BucketCriteria" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.bucketCriteria"></a>

```go
func BucketCriteria() Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference">Macie2ClassificationJobS3JobDefinitionBucketCriteriaOutputReference</a>

---

##### `BucketDefinitions`<sup>Required</sup> <a name="BucketDefinitions" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.bucketDefinitions"></a>

```go
func BucketDefinitions() Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList">Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList</a>

---

##### `Scoping`<sup>Required</sup> <a name="Scoping" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.scoping"></a>

```go
func Scoping() Macie2ClassificationJobS3JobDefinitionScopingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference">Macie2ClassificationJobS3JobDefinitionScopingOutputReference</a>

---

##### `BucketCriteriaInput`<sup>Optional</sup> <a name="BucketCriteriaInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.bucketCriteriaInput"></a>

```go
func BucketCriteriaInput() Macie2ClassificationJobS3JobDefinitionBucketCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketCriteria">Macie2ClassificationJobS3JobDefinitionBucketCriteria</a>

---

##### `BucketDefinitionsInput`<sup>Optional</sup> <a name="BucketDefinitionsInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.bucketDefinitionsInput"></a>

```go
func BucketDefinitionsInput() interface{}
```

- *Type:* interface{}

---

##### `ScopingInput`<sup>Optional</sup> <a name="ScopingInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.scopingInput"></a>

```go
func ScopingInput() Macie2ClassificationJobS3JobDefinitionScoping
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping">Macie2ClassificationJobS3JobDefinitionScoping</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() Macie2ClassificationJobS3JobDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition">Macie2ClassificationJobS3JobDefinition</a>

---


### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionScopingExcludesAndList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.get"></a>

```go
func Get(index *f64) Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.putSimpleScopeTerm">PutSimpleScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.putTagScopeTerm">PutTagScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.resetSimpleScopeTerm">ResetSimpleScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.resetTagScopeTerm">ResetTagScopeTerm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSimpleScopeTerm` <a name="PutSimpleScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.putSimpleScopeTerm"></a>

```go
func PutSimpleScopeTerm(value Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.putSimpleScopeTerm.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm</a>

---

##### `PutTagScopeTerm` <a name="PutTagScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.putTagScopeTerm"></a>

```go
func PutTagScopeTerm(value Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.putTagScopeTerm.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm</a>

---

##### `ResetSimpleScopeTerm` <a name="ResetSimpleScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.resetSimpleScopeTerm"></a>

```go
func ResetSimpleScopeTerm()
```

##### `ResetTagScopeTerm` <a name="ResetTagScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.resetTagScopeTerm"></a>

```go
func ResetTagScopeTerm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.simpleScopeTerm">SimpleScopeTerm</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.tagScopeTerm">TagScopeTerm</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.simpleScopeTermInput">SimpleScopeTermInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.tagScopeTermInput">TagScopeTermInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SimpleScopeTerm`<sup>Required</sup> <a name="SimpleScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.simpleScopeTerm"></a>

```go
func SimpleScopeTerm() Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference</a>

---

##### `TagScopeTerm`<sup>Required</sup> <a name="TagScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.tagScopeTerm"></a>

```go
func TagScopeTerm() Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference</a>

---

##### `SimpleScopeTermInput`<sup>Optional</sup> <a name="SimpleScopeTermInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.simpleScopeTermInput"></a>

```go
func SimpleScopeTermInput() Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm</a>

---

##### `TagScopeTermInput`<sup>Optional</sup> <a name="TagScopeTermInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.tagScopeTermInput"></a>

```go
func TagScopeTermInput() Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resetComparator">ResetComparator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComparator` <a name="ResetComparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resetComparator"></a>

```go
func ResetComparator()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.comparatorInput">ComparatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.comparator">Comparator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComparatorInput`<sup>Optional</sup> <a name="ComparatorInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.comparatorInput"></a>

```go
func ComparatorInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Comparator`<sup>Required</sup> <a name="Comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.comparator"></a>

```go
func Comparator() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.internalValue"></a>

```go
func InternalValue() Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm</a>

---


### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.putTagValues">PutTagValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resetComparator">ResetComparator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resetTagValues">ResetTagValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTagValues` <a name="PutTagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.putTagValues"></a>

```go
func PutTagValues(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.putTagValues.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetComparator` <a name="ResetComparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resetComparator"></a>

```go
func ResetComparator()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetTagValues` <a name="ResetTagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resetTagValues"></a>

```go
func ResetTagValues()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resetTarget"></a>

```go
func ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.tagValues">TagValues</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.comparatorInput">ComparatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.tagValuesInput">TagValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.comparator">Comparator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagValues`<sup>Required</sup> <a name="TagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.tagValues"></a>

```go
func TagValues() Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList</a>

---

##### `ComparatorInput`<sup>Optional</sup> <a name="ComparatorInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.comparatorInput"></a>

```go
func ComparatorInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `TagValuesInput`<sup>Optional</sup> <a name="TagValuesInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.tagValuesInput"></a>

```go
func TagValuesInput() interface{}
```

- *Type:* interface{}

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `Comparator`<sup>Required</sup> <a name="Comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.comparator"></a>

```go
func Comparator() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.internalValue"></a>

```go
func InternalValue() Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm</a>

---


### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.get"></a>

```go
func Get(index *f64) Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.putAnd">PutAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.resetAnd">ResetAnd</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnd` <a name="PutAnd" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.putAnd"></a>

```go
func PutAnd(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.putAnd.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnd` <a name="ResetAnd" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.resetAnd"></a>

```go
func ResetAnd()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.and">And</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.andInput">AndInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes">Macie2ClassificationJobS3JobDefinitionScopingExcludes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `And`<sup>Required</sup> <a name="And" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.and"></a>

```go
func And() Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList</a>

---

##### `AndInput`<sup>Optional</sup> <a name="AndInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.andInput"></a>

```go
func AndInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.internalValue"></a>

```go
func InternalValue() Macie2ClassificationJobS3JobDefinitionScopingExcludes
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes">Macie2ClassificationJobS3JobDefinitionScopingExcludes</a>

---


### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionScopingIncludesAndList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.get"></a>

```go
func Get(index *f64) Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.putSimpleScopeTerm">PutSimpleScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.putTagScopeTerm">PutTagScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.resetSimpleScopeTerm">ResetSimpleScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.resetTagScopeTerm">ResetTagScopeTerm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSimpleScopeTerm` <a name="PutSimpleScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.putSimpleScopeTerm"></a>

```go
func PutSimpleScopeTerm(value Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.putSimpleScopeTerm.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm</a>

---

##### `PutTagScopeTerm` <a name="PutTagScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.putTagScopeTerm"></a>

```go
func PutTagScopeTerm(value Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.putTagScopeTerm.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm</a>

---

##### `ResetSimpleScopeTerm` <a name="ResetSimpleScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.resetSimpleScopeTerm"></a>

```go
func ResetSimpleScopeTerm()
```

##### `ResetTagScopeTerm` <a name="ResetTagScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.resetTagScopeTerm"></a>

```go
func ResetTagScopeTerm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.simpleScopeTerm">SimpleScopeTerm</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.tagScopeTerm">TagScopeTerm</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.simpleScopeTermInput">SimpleScopeTermInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.tagScopeTermInput">TagScopeTermInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SimpleScopeTerm`<sup>Required</sup> <a name="SimpleScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.simpleScopeTerm"></a>

```go
func SimpleScopeTerm() Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference</a>

---

##### `TagScopeTerm`<sup>Required</sup> <a name="TagScopeTerm" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.tagScopeTerm"></a>

```go
func TagScopeTerm() Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference</a>

---

##### `SimpleScopeTermInput`<sup>Optional</sup> <a name="SimpleScopeTermInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.simpleScopeTermInput"></a>

```go
func SimpleScopeTermInput() Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm</a>

---

##### `TagScopeTermInput`<sup>Optional</sup> <a name="TagScopeTermInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.tagScopeTermInput"></a>

```go
func TagScopeTermInput() Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resetComparator">ResetComparator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComparator` <a name="ResetComparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resetComparator"></a>

```go
func ResetComparator()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.comparatorInput">ComparatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.comparator">Comparator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComparatorInput`<sup>Optional</sup> <a name="ComparatorInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.comparatorInput"></a>

```go
func ComparatorInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Comparator`<sup>Required</sup> <a name="Comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.comparator"></a>

```go
func Comparator() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.internalValue"></a>

```go
func InternalValue() Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm</a>

---


### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.putTagValues">PutTagValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resetComparator">ResetComparator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resetTagValues">ResetTagValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTagValues` <a name="PutTagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.putTagValues"></a>

```go
func PutTagValues(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.putTagValues.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetComparator` <a name="ResetComparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resetComparator"></a>

```go
func ResetComparator()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetTagValues` <a name="ResetTagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resetTagValues"></a>

```go
func ResetTagValues()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resetTarget"></a>

```go
func ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.tagValues">TagValues</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.comparatorInput">ComparatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.tagValuesInput">TagValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.comparator">Comparator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagValues`<sup>Required</sup> <a name="TagValues" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.tagValues"></a>

```go
func TagValues() Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList</a>

---

##### `ComparatorInput`<sup>Optional</sup> <a name="ComparatorInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.comparatorInput"></a>

```go
func ComparatorInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `TagValuesInput`<sup>Optional</sup> <a name="TagValuesInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.tagValuesInput"></a>

```go
func TagValuesInput() interface{}
```

- *Type:* interface{}

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `Comparator`<sup>Required</sup> <a name="Comparator" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.comparator"></a>

```go
func Comparator() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.internalValue"></a>

```go
func InternalValue() Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm</a>

---


### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.get"></a>

```go
func Get(index *f64) Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.putAnd">PutAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.resetAnd">ResetAnd</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnd` <a name="PutAnd" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.putAnd"></a>

```go
func PutAnd(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.putAnd.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnd` <a name="ResetAnd" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.resetAnd"></a>

```go
func ResetAnd()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.and">And</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.andInput">AndInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes">Macie2ClassificationJobS3JobDefinitionScopingIncludes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `And`<sup>Required</sup> <a name="And" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.and"></a>

```go
func And() Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList</a>

---

##### `AndInput`<sup>Optional</sup> <a name="AndInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.andInput"></a>

```go
func AndInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.internalValue"></a>

```go
func InternalValue() Macie2ClassificationJobS3JobDefinitionScopingIncludes
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes">Macie2ClassificationJobS3JobDefinitionScopingIncludes</a>

---


### Macie2ClassificationJobS3JobDefinitionScopingOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobS3JobDefinitionScopingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Macie2ClassificationJobS3JobDefinitionScopingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.putExcludes">PutExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.putIncludes">PutIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.resetExcludes">ResetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.resetIncludes">ResetIncludes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExcludes` <a name="PutExcludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.putExcludes"></a>

```go
func PutExcludes(value Macie2ClassificationJobS3JobDefinitionScopingExcludes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.putExcludes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes">Macie2ClassificationJobS3JobDefinitionScopingExcludes</a>

---

##### `PutIncludes` <a name="PutIncludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.putIncludes"></a>

```go
func PutIncludes(value Macie2ClassificationJobS3JobDefinitionScopingIncludes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.putIncludes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes">Macie2ClassificationJobS3JobDefinitionScopingIncludes</a>

---

##### `ResetExcludes` <a name="ResetExcludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.resetExcludes"></a>

```go
func ResetExcludes()
```

##### `ResetIncludes` <a name="ResetIncludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.resetIncludes"></a>

```go
func ResetIncludes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.excludes">Excludes</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference">Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.includes">Includes</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference">Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.excludesInput">ExcludesInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes">Macie2ClassificationJobS3JobDefinitionScopingExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.includesInput">IncludesInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes">Macie2ClassificationJobS3JobDefinitionScopingIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping">Macie2ClassificationJobS3JobDefinitionScoping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Excludes`<sup>Required</sup> <a name="Excludes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.excludes"></a>

```go
func Excludes() Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference">Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference</a>

---

##### `Includes`<sup>Required</sup> <a name="Includes" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.includes"></a>

```go
func Includes() Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference">Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference</a>

---

##### `ExcludesInput`<sup>Optional</sup> <a name="ExcludesInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.excludesInput"></a>

```go
func ExcludesInput() Macie2ClassificationJobS3JobDefinitionScopingExcludes
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes">Macie2ClassificationJobS3JobDefinitionScopingExcludes</a>

---

##### `IncludesInput`<sup>Optional</sup> <a name="IncludesInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.includesInput"></a>

```go
func IncludesInput() Macie2ClassificationJobS3JobDefinitionScopingIncludes
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes">Macie2ClassificationJobS3JobDefinitionScopingIncludes</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.internalValue"></a>

```go
func InternalValue() Macie2ClassificationJobS3JobDefinitionScoping
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping">Macie2ClassificationJobS3JobDefinitionScoping</a>

---


### Macie2ClassificationJobScheduleFrequencyOutputReference <a name="Macie2ClassificationJobScheduleFrequencyOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobScheduleFrequencyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Macie2ClassificationJobScheduleFrequencyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resetDailySchedule">ResetDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resetMonthlySchedule">ResetMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resetWeeklySchedule">ResetWeeklySchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDailySchedule` <a name="ResetDailySchedule" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resetDailySchedule"></a>

```go
func ResetDailySchedule()
```

##### `ResetMonthlySchedule` <a name="ResetMonthlySchedule" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resetMonthlySchedule"></a>

```go
func ResetMonthlySchedule()
```

##### `ResetWeeklySchedule` <a name="ResetWeeklySchedule" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resetWeeklySchedule"></a>

```go
func ResetWeeklySchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.dailyScheduleInput">DailyScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.monthlyScheduleInput">MonthlyScheduleInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.weeklyScheduleInput">WeeklyScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.dailySchedule">DailySchedule</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.monthlySchedule">MonthlySchedule</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.weeklySchedule">WeeklySchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency">Macie2ClassificationJobScheduleFrequency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DailyScheduleInput`<sup>Optional</sup> <a name="DailyScheduleInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.dailyScheduleInput"></a>

```go
func DailyScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `MonthlyScheduleInput`<sup>Optional</sup> <a name="MonthlyScheduleInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.monthlyScheduleInput"></a>

```go
func MonthlyScheduleInput() *f64
```

- *Type:* *f64

---

##### `WeeklyScheduleInput`<sup>Optional</sup> <a name="WeeklyScheduleInput" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.weeklyScheduleInput"></a>

```go
func WeeklyScheduleInput() *string
```

- *Type:* *string

---

##### `DailySchedule`<sup>Required</sup> <a name="DailySchedule" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.dailySchedule"></a>

```go
func DailySchedule() interface{}
```

- *Type:* interface{}

---

##### `MonthlySchedule`<sup>Required</sup> <a name="MonthlySchedule" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.monthlySchedule"></a>

```go
func MonthlySchedule() *f64
```

- *Type:* *f64

---

##### `WeeklySchedule`<sup>Required</sup> <a name="WeeklySchedule" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.weeklySchedule"></a>

```go
func WeeklySchedule() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.internalValue"></a>

```go
func InternalValue() Macie2ClassificationJobScheduleFrequency
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency">Macie2ClassificationJobScheduleFrequency</a>

---


### Macie2ClassificationJobUserPausedDetailsList <a name="Macie2ClassificationJobUserPausedDetailsList" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobUserPausedDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Macie2ClassificationJobUserPausedDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.get"></a>

```go
func Get(index *f64) Macie2ClassificationJobUserPausedDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### Macie2ClassificationJobUserPausedDetailsOutputReference <a name="Macie2ClassificationJobUserPausedDetailsOutputReference" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2classificationjob"

macie2classificationjob.NewMacie2ClassificationJobUserPausedDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Macie2ClassificationJobUserPausedDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.jobExpiresAt">JobExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.jobImminentExpirationHealthEventArn">JobImminentExpirationHealthEventArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.jobPausedAt">JobPausedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetails">Macie2ClassificationJobUserPausedDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JobExpiresAt`<sup>Required</sup> <a name="JobExpiresAt" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.jobExpiresAt"></a>

```go
func JobExpiresAt() *string
```

- *Type:* *string

---

##### `JobImminentExpirationHealthEventArn`<sup>Required</sup> <a name="JobImminentExpirationHealthEventArn" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.jobImminentExpirationHealthEventArn"></a>

```go
func JobImminentExpirationHealthEventArn() *string
```

- *Type:* *string

---

##### `JobPausedAt`<sup>Required</sup> <a name="JobPausedAt" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.jobPausedAt"></a>

```go
func JobPausedAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() Macie2ClassificationJobUserPausedDetails
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetails">Macie2ClassificationJobUserPausedDetails</a>

---



