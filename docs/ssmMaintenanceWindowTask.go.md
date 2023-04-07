# `ssmMaintenanceWindowTask` Submodule <a name="`ssmMaintenanceWindowTask` Submodule" id="@cdktf/provider-aws.ssmMaintenanceWindowTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmMaintenanceWindowTask <a name="SsmMaintenanceWindowTask" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task aws_ssm_maintenance_window_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

ssmmaintenancewindowtask.NewSsmMaintenanceWindowTask(scope Construct, id *string, config SsmMaintenanceWindowTaskConfig) SsmMaintenanceWindowTask
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig">SsmMaintenanceWindowTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig">SsmMaintenanceWindowTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.putTaskInvocationParameters">PutTaskInvocationParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetCutoffBehavior">ResetCutoffBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetMaxConcurrency">ResetMaxConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetMaxErrors">ResetMaxErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetServiceRoleArn">ResetServiceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetTargets">ResetTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetTaskInvocationParameters">ResetTaskInvocationParameters</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTargets` <a name="PutTargets" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.putTargets"></a>

```go
func PutTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.putTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTaskInvocationParameters` <a name="PutTaskInvocationParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.putTaskInvocationParameters"></a>

```go
func PutTaskInvocationParameters(value SsmMaintenanceWindowTaskTaskInvocationParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.putTaskInvocationParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters">SsmMaintenanceWindowTaskTaskInvocationParameters</a>

---

##### `ResetCutoffBehavior` <a name="ResetCutoffBehavior" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetCutoffBehavior"></a>

```go
func ResetCutoffBehavior()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxConcurrency` <a name="ResetMaxConcurrency" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetMaxConcurrency"></a>

```go
func ResetMaxConcurrency()
```

##### `ResetMaxErrors` <a name="ResetMaxErrors" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetMaxErrors"></a>

```go
func ResetMaxErrors()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetName"></a>

```go
func ResetName()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetServiceRoleArn` <a name="ResetServiceRoleArn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetServiceRoleArn"></a>

```go
func ResetServiceRoleArn()
```

##### `ResetTargets` <a name="ResetTargets" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetTargets"></a>

```go
func ResetTargets()
```

##### `ResetTaskInvocationParameters` <a name="ResetTaskInvocationParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.resetTaskInvocationParameters"></a>

```go
func ResetTaskInvocationParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

ssmmaintenancewindowtask.SsmMaintenanceWindowTask_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

ssmmaintenancewindowtask.SsmMaintenanceWindowTask_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

ssmmaintenancewindowtask.SsmMaintenanceWindowTask_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.targets">Targets</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList">SsmMaintenanceWindowTaskTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskInvocationParameters">TaskInvocationParameters</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.windowTaskId">WindowTaskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.cutoffBehaviorInput">CutoffBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.maxConcurrencyInput">MaxConcurrencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.maxErrorsInput">MaxErrorsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.serviceRoleArnInput">ServiceRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.targetsInput">TargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskArnInput">TaskArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskInvocationParametersInput">TaskInvocationParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters">SsmMaintenanceWindowTaskTaskInvocationParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskTypeInput">TaskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.windowIdInput">WindowIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.cutoffBehavior">CutoffBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.maxConcurrency">MaxConcurrency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.maxErrors">MaxErrors</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskArn">TaskArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskType">TaskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.windowId">WindowId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.targets"></a>

```go
func Targets() SsmMaintenanceWindowTaskTargetsList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList">SsmMaintenanceWindowTaskTargetsList</a>

---

##### `TaskInvocationParameters`<sup>Required</sup> <a name="TaskInvocationParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskInvocationParameters"></a>

```go
func TaskInvocationParameters() SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference</a>

---

##### `WindowTaskId`<sup>Required</sup> <a name="WindowTaskId" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.windowTaskId"></a>

```go
func WindowTaskId() *string
```

- *Type:* *string

---

##### `CutoffBehaviorInput`<sup>Optional</sup> <a name="CutoffBehaviorInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.cutoffBehaviorInput"></a>

```go
func CutoffBehaviorInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxConcurrencyInput`<sup>Optional</sup> <a name="MaxConcurrencyInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.maxConcurrencyInput"></a>

```go
func MaxConcurrencyInput() *string
```

- *Type:* *string

---

##### `MaxErrorsInput`<sup>Optional</sup> <a name="MaxErrorsInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.maxErrorsInput"></a>

```go
func MaxErrorsInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ServiceRoleArnInput`<sup>Optional</sup> <a name="ServiceRoleArnInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.serviceRoleArnInput"></a>

```go
func ServiceRoleArnInput() *string
```

- *Type:* *string

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.targetsInput"></a>

```go
func TargetsInput() interface{}
```

- *Type:* interface{}

---

##### `TaskArnInput`<sup>Optional</sup> <a name="TaskArnInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskArnInput"></a>

```go
func TaskArnInput() *string
```

- *Type:* *string

---

##### `TaskInvocationParametersInput`<sup>Optional</sup> <a name="TaskInvocationParametersInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskInvocationParametersInput"></a>

```go
func TaskInvocationParametersInput() SsmMaintenanceWindowTaskTaskInvocationParameters
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters">SsmMaintenanceWindowTaskTaskInvocationParameters</a>

---

##### `TaskTypeInput`<sup>Optional</sup> <a name="TaskTypeInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskTypeInput"></a>

```go
func TaskTypeInput() *string
```

- *Type:* *string

---

##### `WindowIdInput`<sup>Optional</sup> <a name="WindowIdInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.windowIdInput"></a>

```go
func WindowIdInput() *string
```

- *Type:* *string

---

##### `CutoffBehavior`<sup>Required</sup> <a name="CutoffBehavior" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.cutoffBehavior"></a>

```go
func CutoffBehavior() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxConcurrency`<sup>Required</sup> <a name="MaxConcurrency" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.maxConcurrency"></a>

```go
func MaxConcurrency() *string
```

- *Type:* *string

---

##### `MaxErrors`<sup>Required</sup> <a name="MaxErrors" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.maxErrors"></a>

```go
func MaxErrors() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `ServiceRoleArn`<sup>Required</sup> <a name="ServiceRoleArn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.serviceRoleArn"></a>

```go
func ServiceRoleArn() *string
```

- *Type:* *string

---

##### `TaskArn`<sup>Required</sup> <a name="TaskArn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskArn"></a>

```go
func TaskArn() *string
```

- *Type:* *string

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.taskType"></a>

```go
func TaskType() *string
```

- *Type:* *string

---

##### `WindowId`<sup>Required</sup> <a name="WindowId" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.windowId"></a>

```go
func WindowId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTask.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmMaintenanceWindowTaskConfig <a name="SsmMaintenanceWindowTaskConfig" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

&ssmmaintenancewindowtask.SsmMaintenanceWindowTaskConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	TaskArn: *string,
	TaskType: *string,
	WindowId: *string,
	CutoffBehavior: *string,
	Description: *string,
	Id: *string,
	MaxConcurrency: *string,
	MaxErrors: *string,
	Name: *string,
	Priority: *f64,
	ServiceRoleArn: *string,
	Targets: interface{},
	TaskInvocationParameters: github.com/cdktf/cdktf-provider-aws-go/aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.taskArn">TaskArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#task_arn SsmMaintenanceWindowTask#task_arn}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.taskType">TaskType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#task_type SsmMaintenanceWindowTask#task_type}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.windowId">WindowId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#window_id SsmMaintenanceWindowTask#window_id}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.cutoffBehavior">CutoffBehavior</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#cutoff_behavior SsmMaintenanceWindowTask#cutoff_behavior}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#description SsmMaintenanceWindowTask#description}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#id SsmMaintenanceWindowTask#id}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.maxConcurrency">MaxConcurrency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#max_concurrency SsmMaintenanceWindowTask#max_concurrency}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.maxErrors">MaxErrors</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#max_errors SsmMaintenanceWindowTask#max_errors}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#priority SsmMaintenanceWindowTask#priority}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#service_role_arn SsmMaintenanceWindowTask#service_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.targets">Targets</a></code> | <code>interface{}</code> | targets block. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.taskInvocationParameters">TaskInvocationParameters</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters">SsmMaintenanceWindowTaskTaskInvocationParameters</a></code> | task_invocation_parameters block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TaskArn`<sup>Required</sup> <a name="TaskArn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.taskArn"></a>

```go
TaskArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#task_arn SsmMaintenanceWindowTask#task_arn}.

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.taskType"></a>

```go
TaskType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#task_type SsmMaintenanceWindowTask#task_type}.

---

##### `WindowId`<sup>Required</sup> <a name="WindowId" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.windowId"></a>

```go
WindowId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#window_id SsmMaintenanceWindowTask#window_id}.

---

##### `CutoffBehavior`<sup>Optional</sup> <a name="CutoffBehavior" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.cutoffBehavior"></a>

```go
CutoffBehavior *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#cutoff_behavior SsmMaintenanceWindowTask#cutoff_behavior}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#description SsmMaintenanceWindowTask#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#id SsmMaintenanceWindowTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxConcurrency`<sup>Optional</sup> <a name="MaxConcurrency" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.maxConcurrency"></a>

```go
MaxConcurrency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#max_concurrency SsmMaintenanceWindowTask#max_concurrency}.

---

##### `MaxErrors`<sup>Optional</sup> <a name="MaxErrors" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.maxErrors"></a>

```go
MaxErrors *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#max_errors SsmMaintenanceWindowTask#max_errors}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#priority SsmMaintenanceWindowTask#priority}.

---

##### `ServiceRoleArn`<sup>Optional</sup> <a name="ServiceRoleArn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.serviceRoleArn"></a>

```go
ServiceRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#service_role_arn SsmMaintenanceWindowTask#service_role_arn}.

---

##### `Targets`<sup>Optional</sup> <a name="Targets" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.targets"></a>

```go
Targets interface{}
```

- *Type:* interface{}

targets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#targets SsmMaintenanceWindowTask#targets}

---

##### `TaskInvocationParameters`<sup>Optional</sup> <a name="TaskInvocationParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskConfig.property.taskInvocationParameters"></a>

```go
TaskInvocationParameters SsmMaintenanceWindowTaskTaskInvocationParameters
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters">SsmMaintenanceWindowTaskTaskInvocationParameters</a>

task_invocation_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#task_invocation_parameters SsmMaintenanceWindowTask#task_invocation_parameters}

---

### SsmMaintenanceWindowTaskTargets <a name="SsmMaintenanceWindowTaskTargets" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

&ssmmaintenancewindowtask.SsmMaintenanceWindowTaskTargets {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#key SsmMaintenanceWindowTask#key}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#values SsmMaintenanceWindowTask#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#key SsmMaintenanceWindowTask#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargets.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#values SsmMaintenanceWindowTask#values}.

---

### SsmMaintenanceWindowTaskTaskInvocationParameters <a name="SsmMaintenanceWindowTaskTaskInvocationParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

&ssmmaintenancewindowtask.SsmMaintenanceWindowTaskTaskInvocationParameters {
	AutomationParameters: github.com/cdktf/cdktf-provider-aws-go/aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters,
	LambdaParameters: github.com/cdktf/cdktf-provider-aws-go/aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters,
	RunCommandParameters: github.com/cdktf/cdktf-provider-aws-go/aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters,
	StepFunctionsParameters: github.com/cdktf/cdktf-provider-aws-go/aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.property.automationParameters">AutomationParameters</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters</a></code> | automation_parameters block. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.property.lambdaParameters">LambdaParameters</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters">SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters</a></code> | lambda_parameters block. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.property.runCommandParameters">RunCommandParameters</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters</a></code> | run_command_parameters block. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.property.stepFunctionsParameters">StepFunctionsParameters</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters">SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters</a></code> | step_functions_parameters block. |

---

##### `AutomationParameters`<sup>Optional</sup> <a name="AutomationParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.property.automationParameters"></a>

```go
AutomationParameters SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters</a>

automation_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#automation_parameters SsmMaintenanceWindowTask#automation_parameters}

---

##### `LambdaParameters`<sup>Optional</sup> <a name="LambdaParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.property.lambdaParameters"></a>

```go
LambdaParameters SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters">SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters</a>

lambda_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#lambda_parameters SsmMaintenanceWindowTask#lambda_parameters}

---

##### `RunCommandParameters`<sup>Optional</sup> <a name="RunCommandParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.property.runCommandParameters"></a>

```go
RunCommandParameters SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters</a>

run_command_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#run_command_parameters SsmMaintenanceWindowTask#run_command_parameters}

---

##### `StepFunctionsParameters`<sup>Optional</sup> <a name="StepFunctionsParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters.property.stepFunctionsParameters"></a>

```go
StepFunctionsParameters SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters">SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters</a>

step_functions_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#step_functions_parameters SsmMaintenanceWindowTask#step_functions_parameters}

---

### SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters <a name="SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

&ssmmaintenancewindowtask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters {
	DocumentVersion: *string,
	Parameter: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters.property.documentVersion">DocumentVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#document_version SsmMaintenanceWindowTask#document_version}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters.property.parameter">Parameter</a></code> | <code>interface{}</code> | parameter block. |

---

##### `DocumentVersion`<sup>Optional</sup> <a name="DocumentVersion" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters.property.documentVersion"></a>

```go
DocumentVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#document_version SsmMaintenanceWindowTask#document_version}.

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters.property.parameter"></a>

```go
Parameter interface{}
```

- *Type:* interface{}

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#parameter SsmMaintenanceWindowTask#parameter}

---

### SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter <a name="SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

&ssmmaintenancewindowtask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#values SsmMaintenanceWindowTask#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#values SsmMaintenanceWindowTask#values}.

---

### SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters <a name="SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

&ssmmaintenancewindowtask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters {
	ClientContext: *string,
	Payload: *string,
	Qualifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters.property.clientContext">ClientContext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#client_context SsmMaintenanceWindowTask#client_context}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters.property.payload">Payload</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#payload SsmMaintenanceWindowTask#payload}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters.property.qualifier">Qualifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#qualifier SsmMaintenanceWindowTask#qualifier}. |

---

##### `ClientContext`<sup>Optional</sup> <a name="ClientContext" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters.property.clientContext"></a>

```go
ClientContext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#client_context SsmMaintenanceWindowTask#client_context}.

---

##### `Payload`<sup>Optional</sup> <a name="Payload" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters.property.payload"></a>

```go
Payload *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#payload SsmMaintenanceWindowTask#payload}.

---

##### `Qualifier`<sup>Optional</sup> <a name="Qualifier" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters.property.qualifier"></a>

```go
Qualifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#qualifier SsmMaintenanceWindowTask#qualifier}.

---

### SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters <a name="SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

&ssmmaintenancewindowtask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters {
	CloudwatchConfig: github.com/cdktf/cdktf-provider-aws-go/aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig,
	Comment: *string,
	DocumentHash: *string,
	DocumentHashType: *string,
	DocumentVersion: *string,
	NotificationConfig: github.com/cdktf/cdktf-provider-aws-go/aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig,
	OutputS3Bucket: *string,
	OutputS3KeyPrefix: *string,
	Parameter: interface{},
	ServiceRoleArn: *string,
	TimeoutSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.cloudwatchConfig">CloudwatchConfig</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig</a></code> | cloudwatch_config block. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#comment SsmMaintenanceWindowTask#comment}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.documentHash">DocumentHash</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#document_hash SsmMaintenanceWindowTask#document_hash}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.documentHashType">DocumentHashType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#document_hash_type SsmMaintenanceWindowTask#document_hash_type}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.documentVersion">DocumentVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#document_version SsmMaintenanceWindowTask#document_version}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.outputS3Bucket">OutputS3Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#output_s3_bucket SsmMaintenanceWindowTask#output_s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.outputS3KeyPrefix">OutputS3KeyPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#output_s3_key_prefix SsmMaintenanceWindowTask#output_s3_key_prefix}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.parameter">Parameter</a></code> | <code>interface{}</code> | parameter block. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#service_role_arn SsmMaintenanceWindowTask#service_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#timeout_seconds SsmMaintenanceWindowTask#timeout_seconds}. |

---

##### `CloudwatchConfig`<sup>Optional</sup> <a name="CloudwatchConfig" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.cloudwatchConfig"></a>

```go
CloudwatchConfig SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig</a>

cloudwatch_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#cloudwatch_config SsmMaintenanceWindowTask#cloudwatch_config}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#comment SsmMaintenanceWindowTask#comment}.

---

##### `DocumentHash`<sup>Optional</sup> <a name="DocumentHash" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.documentHash"></a>

```go
DocumentHash *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#document_hash SsmMaintenanceWindowTask#document_hash}.

---

##### `DocumentHashType`<sup>Optional</sup> <a name="DocumentHashType" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.documentHashType"></a>

```go
DocumentHashType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#document_hash_type SsmMaintenanceWindowTask#document_hash_type}.

---

##### `DocumentVersion`<sup>Optional</sup> <a name="DocumentVersion" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.documentVersion"></a>

```go
DocumentVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#document_version SsmMaintenanceWindowTask#document_version}.

---

##### `NotificationConfig`<sup>Optional</sup> <a name="NotificationConfig" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.notificationConfig"></a>

```go
NotificationConfig SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#notification_config SsmMaintenanceWindowTask#notification_config}

---

##### `OutputS3Bucket`<sup>Optional</sup> <a name="OutputS3Bucket" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.outputS3Bucket"></a>

```go
OutputS3Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#output_s3_bucket SsmMaintenanceWindowTask#output_s3_bucket}.

---

##### `OutputS3KeyPrefix`<sup>Optional</sup> <a name="OutputS3KeyPrefix" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.outputS3KeyPrefix"></a>

```go
OutputS3KeyPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#output_s3_key_prefix SsmMaintenanceWindowTask#output_s3_key_prefix}.

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.parameter"></a>

```go
Parameter interface{}
```

- *Type:* interface{}

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#parameter SsmMaintenanceWindowTask#parameter}

---

##### `ServiceRoleArn`<sup>Optional</sup> <a name="ServiceRoleArn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.serviceRoleArn"></a>

```go
ServiceRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#service_role_arn SsmMaintenanceWindowTask#service_role_arn}.

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters.property.timeoutSeconds"></a>

```go
TimeoutSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#timeout_seconds SsmMaintenanceWindowTask#timeout_seconds}.

---

### SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig <a name="SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

&ssmmaintenancewindowtask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig {
	CloudwatchLogGroupName: *string,
	CloudwatchOutputEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig.property.cloudwatchLogGroupName">CloudwatchLogGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#cloudwatch_log_group_name SsmMaintenanceWindowTask#cloudwatch_log_group_name}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig.property.cloudwatchOutputEnabled">CloudwatchOutputEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#cloudwatch_output_enabled SsmMaintenanceWindowTask#cloudwatch_output_enabled}. |

---

##### `CloudwatchLogGroupName`<sup>Optional</sup> <a name="CloudwatchLogGroupName" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig.property.cloudwatchLogGroupName"></a>

```go
CloudwatchLogGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#cloudwatch_log_group_name SsmMaintenanceWindowTask#cloudwatch_log_group_name}.

---

##### `CloudwatchOutputEnabled`<sup>Optional</sup> <a name="CloudwatchOutputEnabled" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig.property.cloudwatchOutputEnabled"></a>

```go
CloudwatchOutputEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#cloudwatch_output_enabled SsmMaintenanceWindowTask#cloudwatch_output_enabled}.

---

### SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig <a name="SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

&ssmmaintenancewindowtask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig {
	NotificationArn: *string,
	NotificationEvents: *[]*string,
	NotificationType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig.property.notificationArn">NotificationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#notification_arn SsmMaintenanceWindowTask#notification_arn}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig.property.notificationEvents">NotificationEvents</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#notification_events SsmMaintenanceWindowTask#notification_events}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig.property.notificationType">NotificationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#notification_type SsmMaintenanceWindowTask#notification_type}. |

---

##### `NotificationArn`<sup>Optional</sup> <a name="NotificationArn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig.property.notificationArn"></a>

```go
NotificationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#notification_arn SsmMaintenanceWindowTask#notification_arn}.

---

##### `NotificationEvents`<sup>Optional</sup> <a name="NotificationEvents" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig.property.notificationEvents"></a>

```go
NotificationEvents *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#notification_events SsmMaintenanceWindowTask#notification_events}.

---

##### `NotificationType`<sup>Optional</sup> <a name="NotificationType" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig.property.notificationType"></a>

```go
NotificationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#notification_type SsmMaintenanceWindowTask#notification_type}.

---

### SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter <a name="SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

&ssmmaintenancewindowtask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#values SsmMaintenanceWindowTask#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#values SsmMaintenanceWindowTask#values}.

---

### SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters <a name="SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

&ssmmaintenancewindowtask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters {
	Input: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters.property.input">Input</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#input SsmMaintenanceWindowTask#input}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}. |

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters.property.input"></a>

```go
Input *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#input SsmMaintenanceWindowTask#input}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmMaintenanceWindowTaskTargetsList <a name="SsmMaintenanceWindowTaskTargetsList" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

ssmmaintenancewindowtask.NewSsmMaintenanceWindowTaskTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmMaintenanceWindowTaskTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.get"></a>

```go
func Get(index *f64) SsmMaintenanceWindowTaskTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmMaintenanceWindowTaskTargetsOutputReference <a name="SsmMaintenanceWindowTaskTargetsOutputReference" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

ssmmaintenancewindowtask.NewSsmMaintenanceWindowTaskTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmMaintenanceWindowTaskTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference <a name="SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

ssmmaintenancewindowtask.NewSsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.resetDocumentVersion">ResetDocumentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.resetParameter">ResetParameter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.putParameter"></a>

```go
func PutParameter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.putParameter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDocumentVersion` <a name="ResetDocumentVersion" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.resetDocumentVersion"></a>

```go
func ResetDocumentVersion()
```

##### `ResetParameter` <a name="ResetParameter" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.resetParameter"></a>

```go
func ResetParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.documentVersionInput">DocumentVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.parameterInput">ParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.documentVersion">DocumentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.parameter"></a>

```go
func Parameter() SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList</a>

---

##### `DocumentVersionInput`<sup>Optional</sup> <a name="DocumentVersionInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.documentVersionInput"></a>

```go
func DocumentVersionInput() *string
```

- *Type:* *string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.parameterInput"></a>

```go
func ParameterInput() interface{}
```

- *Type:* interface{}

---

##### `DocumentVersion`<sup>Required</sup> <a name="DocumentVersion" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.documentVersion"></a>

```go
func DocumentVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters</a>

---


### SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList <a name="SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

ssmmaintenancewindowtask.NewSsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.get"></a>

```go
func Get(index *f64) SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference <a name="SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

ssmmaintenancewindowtask.NewSsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference <a name="SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

ssmmaintenancewindowtask.NewSsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.resetClientContext">ResetClientContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.resetPayload">ResetPayload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.resetQualifier">ResetQualifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientContext` <a name="ResetClientContext" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.resetClientContext"></a>

```go
func ResetClientContext()
```

##### `ResetPayload` <a name="ResetPayload" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.resetPayload"></a>

```go
func ResetPayload()
```

##### `ResetQualifier` <a name="ResetQualifier" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.resetQualifier"></a>

```go
func ResetQualifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.clientContextInput">ClientContextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.payloadInput">PayloadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.qualifierInput">QualifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.clientContext">ClientContext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.payload">Payload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.qualifier">Qualifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters">SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientContextInput`<sup>Optional</sup> <a name="ClientContextInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.clientContextInput"></a>

```go
func ClientContextInput() *string
```

- *Type:* *string

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.payloadInput"></a>

```go
func PayloadInput() *string
```

- *Type:* *string

---

##### `QualifierInput`<sup>Optional</sup> <a name="QualifierInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.qualifierInput"></a>

```go
func QualifierInput() *string
```

- *Type:* *string

---

##### `ClientContext`<sup>Required</sup> <a name="ClientContext" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.clientContext"></a>

```go
func ClientContext() *string
```

- *Type:* *string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.payload"></a>

```go
func Payload() *string
```

- *Type:* *string

---

##### `Qualifier`<sup>Required</sup> <a name="Qualifier" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.qualifier"></a>

```go
func Qualifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters">SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters</a>

---


### SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference <a name="SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

ssmmaintenancewindowtask.NewSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putAutomationParameters">PutAutomationParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putLambdaParameters">PutLambdaParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putRunCommandParameters">PutRunCommandParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putStepFunctionsParameters">PutStepFunctionsParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resetAutomationParameters">ResetAutomationParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resetLambdaParameters">ResetLambdaParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resetRunCommandParameters">ResetRunCommandParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resetStepFunctionsParameters">ResetStepFunctionsParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutomationParameters` <a name="PutAutomationParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putAutomationParameters"></a>

```go
func PutAutomationParameters(value SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putAutomationParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters</a>

---

##### `PutLambdaParameters` <a name="PutLambdaParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putLambdaParameters"></a>

```go
func PutLambdaParameters(value SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putLambdaParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters">SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters</a>

---

##### `PutRunCommandParameters` <a name="PutRunCommandParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putRunCommandParameters"></a>

```go
func PutRunCommandParameters(value SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putRunCommandParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters</a>

---

##### `PutStepFunctionsParameters` <a name="PutStepFunctionsParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putStepFunctionsParameters"></a>

```go
func PutStepFunctionsParameters(value SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.putStepFunctionsParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters">SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters</a>

---

##### `ResetAutomationParameters` <a name="ResetAutomationParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resetAutomationParameters"></a>

```go
func ResetAutomationParameters()
```

##### `ResetLambdaParameters` <a name="ResetLambdaParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resetLambdaParameters"></a>

```go
func ResetLambdaParameters()
```

##### `ResetRunCommandParameters` <a name="ResetRunCommandParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resetRunCommandParameters"></a>

```go
func ResetRunCommandParameters()
```

##### `ResetStepFunctionsParameters` <a name="ResetStepFunctionsParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resetStepFunctionsParameters"></a>

```go
func ResetStepFunctionsParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.automationParameters">AutomationParameters</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.lambdaParameters">LambdaParameters</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.runCommandParameters">RunCommandParameters</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.stepFunctionsParameters">StepFunctionsParameters</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.automationParametersInput">AutomationParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.lambdaParametersInput">LambdaParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters">SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.runCommandParametersInput">RunCommandParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.stepFunctionsParametersInput">StepFunctionsParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters">SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters">SsmMaintenanceWindowTaskTaskInvocationParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutomationParameters`<sup>Required</sup> <a name="AutomationParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.automationParameters"></a>

```go
func AutomationParameters() SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference</a>

---

##### `LambdaParameters`<sup>Required</sup> <a name="LambdaParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.lambdaParameters"></a>

```go
func LambdaParameters() SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference</a>

---

##### `RunCommandParameters`<sup>Required</sup> <a name="RunCommandParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.runCommandParameters"></a>

```go
func RunCommandParameters() SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference</a>

---

##### `StepFunctionsParameters`<sup>Required</sup> <a name="StepFunctionsParameters" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.stepFunctionsParameters"></a>

```go
func StepFunctionsParameters() SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference</a>

---

##### `AutomationParametersInput`<sup>Optional</sup> <a name="AutomationParametersInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.automationParametersInput"></a>

```go
func AutomationParametersInput() SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters">SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters</a>

---

##### `LambdaParametersInput`<sup>Optional</sup> <a name="LambdaParametersInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.lambdaParametersInput"></a>

```go
func LambdaParametersInput() SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters">SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters</a>

---

##### `RunCommandParametersInput`<sup>Optional</sup> <a name="RunCommandParametersInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.runCommandParametersInput"></a>

```go
func RunCommandParametersInput() SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters</a>

---

##### `StepFunctionsParametersInput`<sup>Optional</sup> <a name="StepFunctionsParametersInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.stepFunctionsParametersInput"></a>

```go
func StepFunctionsParametersInput() SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters">SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() SsmMaintenanceWindowTaskTaskInvocationParameters
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParameters">SsmMaintenanceWindowTaskTaskInvocationParameters</a>

---


### SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference <a name="SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

ssmmaintenancewindowtask.NewSsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.resetCloudwatchLogGroupName">ResetCloudwatchLogGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.resetCloudwatchOutputEnabled">ResetCloudwatchOutputEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudwatchLogGroupName` <a name="ResetCloudwatchLogGroupName" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.resetCloudwatchLogGroupName"></a>

```go
func ResetCloudwatchLogGroupName()
```

##### `ResetCloudwatchOutputEnabled` <a name="ResetCloudwatchOutputEnabled" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.resetCloudwatchOutputEnabled"></a>

```go
func ResetCloudwatchOutputEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.cloudwatchLogGroupNameInput">CloudwatchLogGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.cloudwatchOutputEnabledInput">CloudwatchOutputEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.cloudwatchLogGroupName">CloudwatchLogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.cloudwatchOutputEnabled">CloudwatchOutputEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogGroupNameInput`<sup>Optional</sup> <a name="CloudwatchLogGroupNameInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.cloudwatchLogGroupNameInput"></a>

```go
func CloudwatchLogGroupNameInput() *string
```

- *Type:* *string

---

##### `CloudwatchOutputEnabledInput`<sup>Optional</sup> <a name="CloudwatchOutputEnabledInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.cloudwatchOutputEnabledInput"></a>

```go
func CloudwatchOutputEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CloudwatchLogGroupName`<sup>Required</sup> <a name="CloudwatchLogGroupName" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.cloudwatchLogGroupName"></a>

```go
func CloudwatchLogGroupName() *string
```

- *Type:* *string

---

##### `CloudwatchOutputEnabled`<sup>Required</sup> <a name="CloudwatchOutputEnabled" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.cloudwatchOutputEnabled"></a>

```go
func CloudwatchOutputEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig</a>

---


### SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference <a name="SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

ssmmaintenancewindowtask.NewSsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.resetNotificationArn">ResetNotificationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.resetNotificationEvents">ResetNotificationEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.resetNotificationType">ResetNotificationType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNotificationArn` <a name="ResetNotificationArn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.resetNotificationArn"></a>

```go
func ResetNotificationArn()
```

##### `ResetNotificationEvents` <a name="ResetNotificationEvents" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.resetNotificationEvents"></a>

```go
func ResetNotificationEvents()
```

##### `ResetNotificationType` <a name="ResetNotificationType" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.resetNotificationType"></a>

```go
func ResetNotificationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.notificationArnInput">NotificationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.notificationEventsInput">NotificationEventsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.notificationTypeInput">NotificationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.notificationArn">NotificationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.notificationEvents">NotificationEvents</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.notificationType">NotificationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotificationArnInput`<sup>Optional</sup> <a name="NotificationArnInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.notificationArnInput"></a>

```go
func NotificationArnInput() *string
```

- *Type:* *string

---

##### `NotificationEventsInput`<sup>Optional</sup> <a name="NotificationEventsInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.notificationEventsInput"></a>

```go
func NotificationEventsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NotificationTypeInput`<sup>Optional</sup> <a name="NotificationTypeInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.notificationTypeInput"></a>

```go
func NotificationTypeInput() *string
```

- *Type:* *string

---

##### `NotificationArn`<sup>Required</sup> <a name="NotificationArn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.notificationArn"></a>

```go
func NotificationArn() *string
```

- *Type:* *string

---

##### `NotificationEvents`<sup>Required</sup> <a name="NotificationEvents" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.notificationEvents"></a>

```go
func NotificationEvents() *[]*string
```

- *Type:* *[]*string

---

##### `NotificationType`<sup>Required</sup> <a name="NotificationType" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.notificationType"></a>

```go
func NotificationType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig</a>

---


### SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference <a name="SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

ssmmaintenancewindowtask.NewSsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.putCloudwatchConfig">PutCloudwatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.putNotificationConfig">PutNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetCloudwatchConfig">ResetCloudwatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetDocumentHash">ResetDocumentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetDocumentHashType">ResetDocumentHashType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetDocumentVersion">ResetDocumentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetNotificationConfig">ResetNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetOutputS3Bucket">ResetOutputS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetOutputS3KeyPrefix">ResetOutputS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetParameter">ResetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetServiceRoleArn">ResetServiceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchConfig` <a name="PutCloudwatchConfig" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.putCloudwatchConfig"></a>

```go
func PutCloudwatchConfig(value SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.putCloudwatchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig</a>

---

##### `PutNotificationConfig` <a name="PutNotificationConfig" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.putNotificationConfig"></a>

```go
func PutNotificationConfig(value SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.putNotificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig</a>

---

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.putParameter"></a>

```go
func PutParameter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.putParameter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCloudwatchConfig` <a name="ResetCloudwatchConfig" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetCloudwatchConfig"></a>

```go
func ResetCloudwatchConfig()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetDocumentHash` <a name="ResetDocumentHash" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetDocumentHash"></a>

```go
func ResetDocumentHash()
```

##### `ResetDocumentHashType` <a name="ResetDocumentHashType" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetDocumentHashType"></a>

```go
func ResetDocumentHashType()
```

##### `ResetDocumentVersion` <a name="ResetDocumentVersion" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetDocumentVersion"></a>

```go
func ResetDocumentVersion()
```

##### `ResetNotificationConfig` <a name="ResetNotificationConfig" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetNotificationConfig"></a>

```go
func ResetNotificationConfig()
```

##### `ResetOutputS3Bucket` <a name="ResetOutputS3Bucket" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetOutputS3Bucket"></a>

```go
func ResetOutputS3Bucket()
```

##### `ResetOutputS3KeyPrefix` <a name="ResetOutputS3KeyPrefix" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetOutputS3KeyPrefix"></a>

```go
func ResetOutputS3KeyPrefix()
```

##### `ResetParameter` <a name="ResetParameter" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetParameter"></a>

```go
func ResetParameter()
```

##### `ResetServiceRoleArn` <a name="ResetServiceRoleArn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetServiceRoleArn"></a>

```go
func ResetServiceRoleArn()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.resetTimeoutSeconds"></a>

```go
func ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.cloudwatchConfig">CloudwatchConfig</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.cloudwatchConfigInput">CloudwatchConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.documentHashInput">DocumentHashInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.documentHashTypeInput">DocumentHashTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.documentVersionInput">DocumentVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.notificationConfigInput">NotificationConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.outputS3BucketInput">OutputS3BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.outputS3KeyPrefixInput">OutputS3KeyPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.parameterInput">ParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.serviceRoleArnInput">ServiceRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.documentHash">DocumentHash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.documentHashType">DocumentHashType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.documentVersion">DocumentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.outputS3Bucket">OutputS3Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.outputS3KeyPrefix">OutputS3KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchConfig`<sup>Required</sup> <a name="CloudwatchConfig" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.cloudwatchConfig"></a>

```go
func CloudwatchConfig() SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference</a>

---

##### `NotificationConfig`<sup>Required</sup> <a name="NotificationConfig" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.notificationConfig"></a>

```go
func NotificationConfig() SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference</a>

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.parameter"></a>

```go
func Parameter() SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList</a>

---

##### `CloudwatchConfigInput`<sup>Optional</sup> <a name="CloudwatchConfigInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.cloudwatchConfigInput"></a>

```go
func CloudwatchConfigInput() SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DocumentHashInput`<sup>Optional</sup> <a name="DocumentHashInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.documentHashInput"></a>

```go
func DocumentHashInput() *string
```

- *Type:* *string

---

##### `DocumentHashTypeInput`<sup>Optional</sup> <a name="DocumentHashTypeInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.documentHashTypeInput"></a>

```go
func DocumentHashTypeInput() *string
```

- *Type:* *string

---

##### `DocumentVersionInput`<sup>Optional</sup> <a name="DocumentVersionInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.documentVersionInput"></a>

```go
func DocumentVersionInput() *string
```

- *Type:* *string

---

##### `NotificationConfigInput`<sup>Optional</sup> <a name="NotificationConfigInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.notificationConfigInput"></a>

```go
func NotificationConfigInput() SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig</a>

---

##### `OutputS3BucketInput`<sup>Optional</sup> <a name="OutputS3BucketInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.outputS3BucketInput"></a>

```go
func OutputS3BucketInput() *string
```

- *Type:* *string

---

##### `OutputS3KeyPrefixInput`<sup>Optional</sup> <a name="OutputS3KeyPrefixInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.outputS3KeyPrefixInput"></a>

```go
func OutputS3KeyPrefixInput() *string
```

- *Type:* *string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.parameterInput"></a>

```go
func ParameterInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceRoleArnInput`<sup>Optional</sup> <a name="ServiceRoleArnInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.serviceRoleArnInput"></a>

```go
func ServiceRoleArnInput() *string
```

- *Type:* *string

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.timeoutSecondsInput"></a>

```go
func TimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `DocumentHash`<sup>Required</sup> <a name="DocumentHash" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.documentHash"></a>

```go
func DocumentHash() *string
```

- *Type:* *string

---

##### `DocumentHashType`<sup>Required</sup> <a name="DocumentHashType" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.documentHashType"></a>

```go
func DocumentHashType() *string
```

- *Type:* *string

---

##### `DocumentVersion`<sup>Required</sup> <a name="DocumentVersion" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.documentVersion"></a>

```go
func DocumentVersion() *string
```

- *Type:* *string

---

##### `OutputS3Bucket`<sup>Required</sup> <a name="OutputS3Bucket" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.outputS3Bucket"></a>

```go
func OutputS3Bucket() *string
```

- *Type:* *string

---

##### `OutputS3KeyPrefix`<sup>Required</sup> <a name="OutputS3KeyPrefix" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.outputS3KeyPrefix"></a>

```go
func OutputS3KeyPrefix() *string
```

- *Type:* *string

---

##### `ServiceRoleArn`<sup>Required</sup> <a name="ServiceRoleArn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.serviceRoleArn"></a>

```go
func ServiceRoleArn() *string
```

- *Type:* *string

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.timeoutSeconds"></a>

```go
func TimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters">SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters</a>

---


### SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList <a name="SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

ssmmaintenancewindowtask.NewSsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.get"></a>

```go
func Get(index *f64) SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference <a name="SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

ssmmaintenancewindowtask.NewSsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference <a name="SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmmaintenancewindowtask"

ssmmaintenancewindowtask.NewSsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInput` <a name="ResetInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.resetInput"></a>

```go
func ResetInput()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.inputInput">InputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.input">Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters">SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.inputInput"></a>

```go
func InputInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.input"></a>

```go
func Input() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTask.SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters">SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters</a>

---



