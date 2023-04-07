# `dataAwsBatchJobQueue` Submodule <a name="`dataAwsBatchJobQueue` Submodule" id="@cdktf/provider-aws.dataAwsBatchJobQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBatchJobQueue <a name="DataAwsBatchJobQueue" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/batch_job_queue aws_batch_job_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsbatchjobqueue"

dataawsbatchjobqueue.NewDataAwsBatchJobQueue(scope Construct, id *string, config DataAwsBatchJobQueueConfig) DataAwsBatchJobQueue
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueConfig">DataAwsBatchJobQueueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueConfig">DataAwsBatchJobQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsbatchjobqueue"

dataawsbatchjobqueue.DataAwsBatchJobQueue_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsbatchjobqueue"

dataawsbatchjobqueue.DataAwsBatchJobQueue_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsbatchjobqueue"

dataawsbatchjobqueue.DataAwsBatchJobQueue_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.computeEnvironmentOrder">ComputeEnvironmentOrder</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderList">DataAwsBatchJobQueueComputeEnvironmentOrderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.schedulingPolicyArn">SchedulingPolicyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.statusReason">StatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ComputeEnvironmentOrder`<sup>Required</sup> <a name="ComputeEnvironmentOrder" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.computeEnvironmentOrder"></a>

```go
func ComputeEnvironmentOrder() DataAwsBatchJobQueueComputeEnvironmentOrderList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderList">DataAwsBatchJobQueueComputeEnvironmentOrderList</a>

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `SchedulingPolicyArn`<sup>Required</sup> <a name="SchedulingPolicyArn" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.schedulingPolicyArn"></a>

```go
func SchedulingPolicyArn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.statusReason"></a>

```go
func StatusReason() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueue.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBatchJobQueueComputeEnvironmentOrder <a name="DataAwsBatchJobQueueComputeEnvironmentOrder" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrder.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsbatchjobqueue"

&dataawsbatchjobqueue.DataAwsBatchJobQueueComputeEnvironmentOrder {

}
```


### DataAwsBatchJobQueueConfig <a name="DataAwsBatchJobQueueConfig" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsbatchjobqueue"

&dataawsbatchjobqueue.DataAwsBatchJobQueueConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_job_queue#name DataAwsBatchJobQueue#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_job_queue#id DataAwsBatchJobQueue#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_job_queue#tags DataAwsBatchJobQueue#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_job_queue#name DataAwsBatchJobQueue#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_job_queue#id DataAwsBatchJobQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_job_queue#tags DataAwsBatchJobQueue#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsBatchJobQueueComputeEnvironmentOrderList <a name="DataAwsBatchJobQueueComputeEnvironmentOrderList" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsbatchjobqueue"

dataawsbatchjobqueue.NewDataAwsBatchJobQueueComputeEnvironmentOrderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsBatchJobQueueComputeEnvironmentOrderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderList.get"></a>

```go
func Get(index *f64) DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference <a name="DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsbatchjobqueue"

dataawsbatchjobqueue.NewDataAwsBatchJobQueueComputeEnvironmentOrderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.property.computeEnvironment">ComputeEnvironment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.property.order">Order</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrder">DataAwsBatchJobQueueComputeEnvironmentOrder</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeEnvironment`<sup>Required</sup> <a name="ComputeEnvironment" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.property.computeEnvironment"></a>

```go
func ComputeEnvironment() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.property.order"></a>

```go
func Order() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsBatchJobQueueComputeEnvironmentOrder
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBatchJobQueue.DataAwsBatchJobQueueComputeEnvironmentOrder">DataAwsBatchJobQueueComputeEnvironmentOrder</a>

---



