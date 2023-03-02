# `datasyncTask` Submodule <a name="`datasyncTask` Submodule" id="@cdktf/provider-aws.datasyncTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncTask <a name="DatasyncTask" id="@cdktf/provider-aws.datasyncTask.DatasyncTask"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_task aws_datasync_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynctask"

datasynctask.NewDatasyncTask(scope Construct, id *string, config DatasyncTaskConfig) DatasyncTask
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig">DatasyncTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig">DatasyncTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.putExcludes">PutExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.putIncludes">PutIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetCloudwatchLogGroupArn">ResetCloudwatchLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetExcludes">ResetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetIncludes">ResetIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutExcludes` <a name="PutExcludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putExcludes"></a>

```go
func PutExcludes(value DatasyncTaskExcludes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putExcludes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>

---

##### `PutIncludes` <a name="PutIncludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putIncludes"></a>

```go
func PutIncludes(value DatasyncTaskIncludes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putIncludes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>

---

##### `PutOptions` <a name="PutOptions" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putOptions"></a>

```go
func PutOptions(value DatasyncTaskOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putSchedule"></a>

```go
func PutSchedule(value DatasyncTaskSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putTimeouts"></a>

```go
func PutTimeouts(value DatasyncTaskTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a>

---

##### `ResetCloudwatchLogGroupArn` <a name="ResetCloudwatchLogGroupArn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetCloudwatchLogGroupArn"></a>

```go
func ResetCloudwatchLogGroupArn()
```

##### `ResetExcludes` <a name="ResetExcludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetExcludes"></a>

```go
func ResetExcludes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludes` <a name="ResetIncludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetIncludes"></a>

```go
func ResetIncludes()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetName"></a>

```go
func ResetName()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynctask"

datasynctask.DatasyncTask_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynctask"

datasynctask.DatasyncTask_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynctask"

datasynctask.DatasyncTask_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.excludes">Excludes</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference">DatasyncTaskExcludesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.includes">Includes</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference">DatasyncTaskIncludesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.options">Options</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference">DatasyncTaskOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference">DatasyncTaskScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference">DatasyncTaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArnInput">CloudwatchLogGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.destinationLocationArnInput">DestinationLocationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.excludesInput">ExcludesInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.includesInput">IncludesInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.optionsInput">OptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.sourceLocationArnInput">SourceLocationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.destinationLocationArn">DestinationLocationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.sourceLocationArn">SourceLocationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Excludes`<sup>Required</sup> <a name="Excludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.excludes"></a>

```go
func Excludes() DatasyncTaskExcludesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference">DatasyncTaskExcludesOutputReference</a>

---

##### `Includes`<sup>Required</sup> <a name="Includes" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.includes"></a>

```go
func Includes() DatasyncTaskIncludesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference">DatasyncTaskIncludesOutputReference</a>

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.options"></a>

```go
func Options() DatasyncTaskOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference">DatasyncTaskOptionsOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.schedule"></a>

```go
func Schedule() DatasyncTaskScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference">DatasyncTaskScheduleOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.timeouts"></a>

```go
func Timeouts() DatasyncTaskTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference">DatasyncTaskTimeoutsOutputReference</a>

---

##### `CloudwatchLogGroupArnInput`<sup>Optional</sup> <a name="CloudwatchLogGroupArnInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArnInput"></a>

```go
func CloudwatchLogGroupArnInput() *string
```

- *Type:* *string

---

##### `DestinationLocationArnInput`<sup>Optional</sup> <a name="DestinationLocationArnInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.destinationLocationArnInput"></a>

```go
func DestinationLocationArnInput() *string
```

- *Type:* *string

---

##### `ExcludesInput`<sup>Optional</sup> <a name="ExcludesInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.excludesInput"></a>

```go
func ExcludesInput() DatasyncTaskExcludes
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludesInput`<sup>Optional</sup> <a name="IncludesInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.includesInput"></a>

```go
func IncludesInput() DatasyncTaskIncludes
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.optionsInput"></a>

```go
func OptionsInput() DatasyncTaskOptions
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.scheduleInput"></a>

```go
func ScheduleInput() DatasyncTaskSchedule
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

---

##### `SourceLocationArnInput`<sup>Optional</sup> <a name="SourceLocationArnInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.sourceLocationArnInput"></a>

```go
func SourceLocationArnInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CloudwatchLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogGroupArn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArn"></a>

```go
func CloudwatchLogGroupArn() *string
```

- *Type:* *string

---

##### `DestinationLocationArn`<sup>Required</sup> <a name="DestinationLocationArn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.destinationLocationArn"></a>

```go
func DestinationLocationArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SourceLocationArn`<sup>Required</sup> <a name="SourceLocationArn" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.sourceLocationArn"></a>

```go
func SourceLocationArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.datasyncTask.DatasyncTask.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncTaskConfig <a name="DatasyncTaskConfig" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynctask"

&datasynctask.DatasyncTaskConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DestinationLocationArn: *string,
	SourceLocationArn: *string,
	CloudwatchLogGroupArn: *string,
	Excludes: github.com/cdktf/cdktf-provider-aws-go/aws.datasyncTask.DatasyncTaskExcludes,
	Id: *string,
	Includes: github.com/cdktf/cdktf-provider-aws-go/aws.datasyncTask.DatasyncTaskIncludes,
	Name: *string,
	Options: github.com/cdktf/cdktf-provider-aws-go/aws.datasyncTask.DatasyncTaskOptions,
	Schedule: github.com/cdktf/cdktf-provider-aws-go/aws.datasyncTask.DatasyncTaskSchedule,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.datasyncTask.DatasyncTaskTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.destinationLocationArn">DestinationLocationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#destination_location_arn DatasyncTask#destination_location_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.sourceLocationArn">SourceLocationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#source_location_arn DatasyncTask#source_location_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.excludes">Excludes</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a></code> | excludes block. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#id DatasyncTask#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.includes">Includes</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a></code> | includes block. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#name DatasyncTask#name}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.options">Options</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#tags DatasyncTask#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#tags_all DatasyncTask#tags_all}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DestinationLocationArn`<sup>Required</sup> <a name="DestinationLocationArn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.destinationLocationArn"></a>

```go
DestinationLocationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#destination_location_arn DatasyncTask#destination_location_arn}.

---

##### `SourceLocationArn`<sup>Required</sup> <a name="SourceLocationArn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.sourceLocationArn"></a>

```go
SourceLocationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#source_location_arn DatasyncTask#source_location_arn}.

---

##### `CloudwatchLogGroupArn`<sup>Optional</sup> <a name="CloudwatchLogGroupArn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.cloudwatchLogGroupArn"></a>

```go
CloudwatchLogGroupArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}.

---

##### `Excludes`<sup>Optional</sup> <a name="Excludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.excludes"></a>

```go
Excludes DatasyncTaskExcludes
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>

excludes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#excludes DatasyncTask#excludes}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#id DatasyncTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Includes`<sup>Optional</sup> <a name="Includes" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.includes"></a>

```go
Includes DatasyncTaskIncludes
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>

includes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#includes DatasyncTask#includes}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#name DatasyncTask#name}.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.options"></a>

```go
Options DatasyncTaskOptions
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#options DatasyncTask#options}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.schedule"></a>

```go
Schedule DatasyncTaskSchedule
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#schedule DatasyncTask#schedule}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#tags DatasyncTask#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#tags_all DatasyncTask#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskConfig.property.timeouts"></a>

```go
Timeouts DatasyncTaskTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#timeouts DatasyncTask#timeouts}

---

### DatasyncTaskExcludes <a name="DatasyncTaskExcludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynctask"

&datasynctask.DatasyncTaskExcludes {
	FilterType: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes.property.filterType">FilterType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#filter_type DatasyncTask#filter_type}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#value DatasyncTask#value}. |

---

##### `FilterType`<sup>Optional</sup> <a name="FilterType" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes.property.filterType"></a>

```go
FilterType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#filter_type DatasyncTask#filter_type}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#value DatasyncTask#value}.

---

### DatasyncTaskIncludes <a name="DatasyncTaskIncludes" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynctask"

&datasynctask.DatasyncTaskIncludes {
	FilterType: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes.property.filterType">FilterType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#filter_type DatasyncTask#filter_type}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#value DatasyncTask#value}. |

---

##### `FilterType`<sup>Optional</sup> <a name="FilterType" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes.property.filterType"></a>

```go
FilterType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#filter_type DatasyncTask#filter_type}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#value DatasyncTask#value}.

---

### DatasyncTaskOptions <a name="DatasyncTaskOptions" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynctask"

&datasynctask.DatasyncTaskOptions {
	Atime: *string,
	BytesPerSecond: *f64,
	Gid: *string,
	LogLevel: *string,
	Mtime: *string,
	OverwriteMode: *string,
	PosixPermissions: *string,
	PreserveDeletedFiles: *string,
	PreserveDevices: *string,
	SecurityDescriptorCopyFlags: *string,
	TaskQueueing: *string,
	TransferMode: *string,
	Uid: *string,
	VerifyMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.atime">Atime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#atime DatasyncTask#atime}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.bytesPerSecond">BytesPerSecond</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#bytes_per_second DatasyncTask#bytes_per_second}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.gid">Gid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#gid DatasyncTask#gid}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.logLevel">LogLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#log_level DatasyncTask#log_level}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.mtime">Mtime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#mtime DatasyncTask#mtime}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.overwriteMode">OverwriteMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#overwrite_mode DatasyncTask#overwrite_mode}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.posixPermissions">PosixPermissions</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#posix_permissions DatasyncTask#posix_permissions}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.preserveDeletedFiles">PreserveDeletedFiles</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#preserve_deleted_files DatasyncTask#preserve_deleted_files}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.preserveDevices">PreserveDevices</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#preserve_devices DatasyncTask#preserve_devices}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.securityDescriptorCopyFlags">SecurityDescriptorCopyFlags</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#security_descriptor_copy_flags DatasyncTask#security_descriptor_copy_flags}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.taskQueueing">TaskQueueing</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#task_queueing DatasyncTask#task_queueing}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.transferMode">TransferMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#transfer_mode DatasyncTask#transfer_mode}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.uid">Uid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#uid DatasyncTask#uid}. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.verifyMode">VerifyMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#verify_mode DatasyncTask#verify_mode}. |

---

##### `Atime`<sup>Optional</sup> <a name="Atime" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.atime"></a>

```go
Atime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#atime DatasyncTask#atime}.

---

##### `BytesPerSecond`<sup>Optional</sup> <a name="BytesPerSecond" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.bytesPerSecond"></a>

```go
BytesPerSecond *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#bytes_per_second DatasyncTask#bytes_per_second}.

---

##### `Gid`<sup>Optional</sup> <a name="Gid" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.gid"></a>

```go
Gid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#gid DatasyncTask#gid}.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.logLevel"></a>

```go
LogLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#log_level DatasyncTask#log_level}.

---

##### `Mtime`<sup>Optional</sup> <a name="Mtime" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.mtime"></a>

```go
Mtime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#mtime DatasyncTask#mtime}.

---

##### `OverwriteMode`<sup>Optional</sup> <a name="OverwriteMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.overwriteMode"></a>

```go
OverwriteMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#overwrite_mode DatasyncTask#overwrite_mode}.

---

##### `PosixPermissions`<sup>Optional</sup> <a name="PosixPermissions" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.posixPermissions"></a>

```go
PosixPermissions *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#posix_permissions DatasyncTask#posix_permissions}.

---

##### `PreserveDeletedFiles`<sup>Optional</sup> <a name="PreserveDeletedFiles" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.preserveDeletedFiles"></a>

```go
PreserveDeletedFiles *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#preserve_deleted_files DatasyncTask#preserve_deleted_files}.

---

##### `PreserveDevices`<sup>Optional</sup> <a name="PreserveDevices" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.preserveDevices"></a>

```go
PreserveDevices *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#preserve_devices DatasyncTask#preserve_devices}.

---

##### `SecurityDescriptorCopyFlags`<sup>Optional</sup> <a name="SecurityDescriptorCopyFlags" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.securityDescriptorCopyFlags"></a>

```go
SecurityDescriptorCopyFlags *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#security_descriptor_copy_flags DatasyncTask#security_descriptor_copy_flags}.

---

##### `TaskQueueing`<sup>Optional</sup> <a name="TaskQueueing" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.taskQueueing"></a>

```go
TaskQueueing *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#task_queueing DatasyncTask#task_queueing}.

---

##### `TransferMode`<sup>Optional</sup> <a name="TransferMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.transferMode"></a>

```go
TransferMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#transfer_mode DatasyncTask#transfer_mode}.

---

##### `Uid`<sup>Optional</sup> <a name="Uid" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.uid"></a>

```go
Uid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#uid DatasyncTask#uid}.

---

##### `VerifyMode`<sup>Optional</sup> <a name="VerifyMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions.property.verifyMode"></a>

```go
VerifyMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#verify_mode DatasyncTask#verify_mode}.

---

### DatasyncTaskSchedule <a name="DatasyncTaskSchedule" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynctask"

&datasynctask.DatasyncTaskSchedule {
	ScheduleExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#schedule_expression DatasyncTask#schedule_expression}. |

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule.property.scheduleExpression"></a>

```go
ScheduleExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#schedule_expression DatasyncTask#schedule_expression}.

---

### DatasyncTaskTimeouts <a name="DatasyncTaskTimeouts" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynctask"

&datasynctask.DatasyncTaskTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#create DatasyncTask#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task#create DatasyncTask#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncTaskExcludesOutputReference <a name="DatasyncTaskExcludesOutputReference" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynctask"

datasynctask.NewDatasyncTaskExcludesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncTaskExcludesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resetFilterType">ResetFilterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilterType` <a name="ResetFilterType" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resetFilterType"></a>

```go
func ResetFilterType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterTypeInput">FilterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterType">FilterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilterTypeInput`<sup>Optional</sup> <a name="FilterTypeInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterTypeInput"></a>

```go
func FilterTypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterType"></a>

```go
func FilterType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludesOutputReference.property.internalValue"></a>

```go
func InternalValue() DatasyncTaskExcludes
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>

---


### DatasyncTaskIncludesOutputReference <a name="DatasyncTaskIncludesOutputReference" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynctask"

datasynctask.NewDatasyncTaskIncludesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncTaskIncludesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resetFilterType">ResetFilterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilterType` <a name="ResetFilterType" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resetFilterType"></a>

```go
func ResetFilterType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterTypeInput">FilterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterType">FilterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilterTypeInput`<sup>Optional</sup> <a name="FilterTypeInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterTypeInput"></a>

```go
func FilterTypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterType"></a>

```go
func FilterType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludesOutputReference.property.internalValue"></a>

```go
func InternalValue() DatasyncTaskIncludes
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskIncludes">DatasyncTaskIncludes</a>

---


### DatasyncTaskOptionsOutputReference <a name="DatasyncTaskOptionsOutputReference" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynctask"

datasynctask.NewDatasyncTaskOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncTaskOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetAtime">ResetAtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetBytesPerSecond">ResetBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetGid">ResetGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetMtime">ResetMtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetOverwriteMode">ResetOverwriteMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetPosixPermissions">ResetPosixPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDeletedFiles">ResetPreserveDeletedFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDevices">ResetPreserveDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetSecurityDescriptorCopyFlags">ResetSecurityDescriptorCopyFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetTaskQueueing">ResetTaskQueueing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetTransferMode">ResetTransferMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetUid">ResetUid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetVerifyMode">ResetVerifyMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAtime` <a name="ResetAtime" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetAtime"></a>

```go
func ResetAtime()
```

##### `ResetBytesPerSecond` <a name="ResetBytesPerSecond" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetBytesPerSecond"></a>

```go
func ResetBytesPerSecond()
```

##### `ResetGid` <a name="ResetGid" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetGid"></a>

```go
func ResetGid()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetLogLevel"></a>

```go
func ResetLogLevel()
```

##### `ResetMtime` <a name="ResetMtime" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetMtime"></a>

```go
func ResetMtime()
```

##### `ResetOverwriteMode` <a name="ResetOverwriteMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetOverwriteMode"></a>

```go
func ResetOverwriteMode()
```

##### `ResetPosixPermissions` <a name="ResetPosixPermissions" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetPosixPermissions"></a>

```go
func ResetPosixPermissions()
```

##### `ResetPreserveDeletedFiles` <a name="ResetPreserveDeletedFiles" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDeletedFiles"></a>

```go
func ResetPreserveDeletedFiles()
```

##### `ResetPreserveDevices` <a name="ResetPreserveDevices" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDevices"></a>

```go
func ResetPreserveDevices()
```

##### `ResetSecurityDescriptorCopyFlags` <a name="ResetSecurityDescriptorCopyFlags" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetSecurityDescriptorCopyFlags"></a>

```go
func ResetSecurityDescriptorCopyFlags()
```

##### `ResetTaskQueueing` <a name="ResetTaskQueueing" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetTaskQueueing"></a>

```go
func ResetTaskQueueing()
```

##### `ResetTransferMode` <a name="ResetTransferMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetTransferMode"></a>

```go
func ResetTransferMode()
```

##### `ResetUid` <a name="ResetUid" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetUid"></a>

```go
func ResetUid()
```

##### `ResetVerifyMode` <a name="ResetVerifyMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.resetVerifyMode"></a>

```go
func ResetVerifyMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.atimeInput">AtimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecondInput">BytesPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.gidInput">GidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtimeInput">MtimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteModeInput">OverwriteModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissionsInput">PosixPermissionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFilesInput">PreserveDeletedFilesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevicesInput">PreserveDevicesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlagsInput">SecurityDescriptorCopyFlagsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueingInput">TaskQueueingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferModeInput">TransferModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.uidInput">UidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyModeInput">VerifyModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.atime">Atime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecond">BytesPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.gid">Gid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtime">Mtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteMode">OverwriteMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissions">PosixPermissions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFiles">PreserveDeletedFiles</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevices">PreserveDevices</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlags">SecurityDescriptorCopyFlags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueing">TaskQueueing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferMode">TransferMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyMode">VerifyMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AtimeInput`<sup>Optional</sup> <a name="AtimeInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.atimeInput"></a>

```go
func AtimeInput() *string
```

- *Type:* *string

---

##### `BytesPerSecondInput`<sup>Optional</sup> <a name="BytesPerSecondInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecondInput"></a>

```go
func BytesPerSecondInput() *f64
```

- *Type:* *f64

---

##### `GidInput`<sup>Optional</sup> <a name="GidInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.gidInput"></a>

```go
func GidInput() *string
```

- *Type:* *string

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevelInput"></a>

```go
func LogLevelInput() *string
```

- *Type:* *string

---

##### `MtimeInput`<sup>Optional</sup> <a name="MtimeInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtimeInput"></a>

```go
func MtimeInput() *string
```

- *Type:* *string

---

##### `OverwriteModeInput`<sup>Optional</sup> <a name="OverwriteModeInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteModeInput"></a>

```go
func OverwriteModeInput() *string
```

- *Type:* *string

---

##### `PosixPermissionsInput`<sup>Optional</sup> <a name="PosixPermissionsInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissionsInput"></a>

```go
func PosixPermissionsInput() *string
```

- *Type:* *string

---

##### `PreserveDeletedFilesInput`<sup>Optional</sup> <a name="PreserveDeletedFilesInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFilesInput"></a>

```go
func PreserveDeletedFilesInput() *string
```

- *Type:* *string

---

##### `PreserveDevicesInput`<sup>Optional</sup> <a name="PreserveDevicesInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevicesInput"></a>

```go
func PreserveDevicesInput() *string
```

- *Type:* *string

---

##### `SecurityDescriptorCopyFlagsInput`<sup>Optional</sup> <a name="SecurityDescriptorCopyFlagsInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlagsInput"></a>

```go
func SecurityDescriptorCopyFlagsInput() *string
```

- *Type:* *string

---

##### `TaskQueueingInput`<sup>Optional</sup> <a name="TaskQueueingInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueingInput"></a>

```go
func TaskQueueingInput() *string
```

- *Type:* *string

---

##### `TransferModeInput`<sup>Optional</sup> <a name="TransferModeInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferModeInput"></a>

```go
func TransferModeInput() *string
```

- *Type:* *string

---

##### `UidInput`<sup>Optional</sup> <a name="UidInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.uidInput"></a>

```go
func UidInput() *string
```

- *Type:* *string

---

##### `VerifyModeInput`<sup>Optional</sup> <a name="VerifyModeInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyModeInput"></a>

```go
func VerifyModeInput() *string
```

- *Type:* *string

---

##### `Atime`<sup>Required</sup> <a name="Atime" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.atime"></a>

```go
func Atime() *string
```

- *Type:* *string

---

##### `BytesPerSecond`<sup>Required</sup> <a name="BytesPerSecond" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecond"></a>

```go
func BytesPerSecond() *f64
```

- *Type:* *f64

---

##### `Gid`<sup>Required</sup> <a name="Gid" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.gid"></a>

```go
func Gid() *string
```

- *Type:* *string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `Mtime`<sup>Required</sup> <a name="Mtime" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtime"></a>

```go
func Mtime() *string
```

- *Type:* *string

---

##### `OverwriteMode`<sup>Required</sup> <a name="OverwriteMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteMode"></a>

```go
func OverwriteMode() *string
```

- *Type:* *string

---

##### `PosixPermissions`<sup>Required</sup> <a name="PosixPermissions" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissions"></a>

```go
func PosixPermissions() *string
```

- *Type:* *string

---

##### `PreserveDeletedFiles`<sup>Required</sup> <a name="PreserveDeletedFiles" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFiles"></a>

```go
func PreserveDeletedFiles() *string
```

- *Type:* *string

---

##### `PreserveDevices`<sup>Required</sup> <a name="PreserveDevices" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevices"></a>

```go
func PreserveDevices() *string
```

- *Type:* *string

---

##### `SecurityDescriptorCopyFlags`<sup>Required</sup> <a name="SecurityDescriptorCopyFlags" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlags"></a>

```go
func SecurityDescriptorCopyFlags() *string
```

- *Type:* *string

---

##### `TaskQueueing`<sup>Required</sup> <a name="TaskQueueing" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueing"></a>

```go
func TaskQueueing() *string
```

- *Type:* *string

---

##### `TransferMode`<sup>Required</sup> <a name="TransferMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferMode"></a>

```go
func TransferMode() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `VerifyMode`<sup>Required</sup> <a name="VerifyMode" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyMode"></a>

```go
func VerifyMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatasyncTaskOptions
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

---


### DatasyncTaskScheduleOutputReference <a name="DatasyncTaskScheduleOutputReference" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynctask"

datasynctask.NewDatasyncTaskScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncTaskScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpressionInput"></a>

```go
func ScheduleExpressionInput() *string
```

- *Type:* *string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpression"></a>

```go
func ScheduleExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DatasyncTaskSchedule
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

---


### DatasyncTaskTimeoutsOutputReference <a name="DatasyncTaskTimeoutsOutputReference" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/datasynctask"

datasynctask.NewDatasyncTaskTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncTaskTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



