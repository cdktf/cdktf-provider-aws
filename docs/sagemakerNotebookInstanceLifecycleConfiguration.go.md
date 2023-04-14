# `sagemakerNotebookInstanceLifecycleConfiguration` Submodule <a name="`sagemakerNotebookInstanceLifecycleConfiguration` Submodule" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerNotebookInstanceLifecycleConfiguration <a name="SagemakerNotebookInstanceLifecycleConfiguration" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration aws_sagemaker_notebook_instance_lifecycle_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakernotebookinstancelifecycleconfiguration"

sagemakernotebookinstancelifecycleconfiguration.NewSagemakerNotebookInstanceLifecycleConfiguration(scope Construct, id *string, config SagemakerNotebookInstanceLifecycleConfigurationConfig) SagemakerNotebookInstanceLifecycleConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig">SagemakerNotebookInstanceLifecycleConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig">SagemakerNotebookInstanceLifecycleConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetOnCreate">ResetOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetOnStart">ResetOnStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetName"></a>

```go
func ResetName()
```

##### `ResetOnCreate` <a name="ResetOnCreate" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetOnCreate"></a>

```go
func ResetOnCreate()
```

##### `ResetOnStart` <a name="ResetOnStart" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetOnStart"></a>

```go
func ResetOnStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakernotebookinstancelifecycleconfiguration"

sagemakernotebookinstancelifecycleconfiguration.SagemakerNotebookInstanceLifecycleConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakernotebookinstancelifecycleconfiguration"

sagemakernotebookinstancelifecycleconfiguration.SagemakerNotebookInstanceLifecycleConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakernotebookinstancelifecycleconfiguration"

sagemakernotebookinstancelifecycleconfiguration.SagemakerNotebookInstanceLifecycleConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.onCreateInput">OnCreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.onStartInput">OnStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.onCreate">OnCreate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.onStart">OnStart</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OnCreateInput`<sup>Optional</sup> <a name="OnCreateInput" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.onCreateInput"></a>

```go
func OnCreateInput() *string
```

- *Type:* *string

---

##### `OnStartInput`<sup>Optional</sup> <a name="OnStartInput" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.onStartInput"></a>

```go
func OnStartInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OnCreate`<sup>Required</sup> <a name="OnCreate" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.onCreate"></a>

```go
func OnCreate() *string
```

- *Type:* *string

---

##### `OnStart`<sup>Required</sup> <a name="OnStart" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.onStart"></a>

```go
func OnStart() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerNotebookInstanceLifecycleConfigurationConfig <a name="SagemakerNotebookInstanceLifecycleConfigurationConfig" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakernotebookinstancelifecycleconfiguration"

&sagemakernotebookinstancelifecycleconfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Name: *string,
	OnCreate: *string,
	OnStart: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration#id SagemakerNotebookInstanceLifecycleConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration#name SagemakerNotebookInstanceLifecycleConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.onCreate">OnCreate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration#on_create SagemakerNotebookInstanceLifecycleConfiguration#on_create}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.onStart">OnStart</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration#on_start SagemakerNotebookInstanceLifecycleConfiguration#on_start}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration#id SagemakerNotebookInstanceLifecycleConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration#name SagemakerNotebookInstanceLifecycleConfiguration#name}.

---

##### `OnCreate`<sup>Optional</sup> <a name="OnCreate" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.onCreate"></a>

```go
OnCreate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration#on_create SagemakerNotebookInstanceLifecycleConfiguration#on_create}.

---

##### `OnStart`<sup>Optional</sup> <a name="OnStart" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.onStart"></a>

```go
OnStart *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration#on_start SagemakerNotebookInstanceLifecycleConfiguration#on_start}.

---



