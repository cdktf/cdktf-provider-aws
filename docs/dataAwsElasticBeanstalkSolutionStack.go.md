# `dataAwsElasticBeanstalkSolutionStack` Submodule <a name="`dataAwsElasticBeanstalkSolutionStack` Submodule" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsElasticBeanstalkSolutionStack <a name="DataAwsElasticBeanstalkSolutionStack" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack aws_elastic_beanstalk_solution_stack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawselasticbeanstalksolutionstack"

dataawselasticbeanstalksolutionstack.NewDataAwsElasticBeanstalkSolutionStack(scope Construct, id *string, config DataAwsElasticBeanstalkSolutionStackConfig) DataAwsElasticBeanstalkSolutionStack
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig">DataAwsElasticBeanstalkSolutionStackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig">DataAwsElasticBeanstalkSolutionStackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.resetMostRecent">ResetMostRecent</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.resetId"></a>

```go
func ResetId()
```

##### `ResetMostRecent` <a name="ResetMostRecent" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.resetMostRecent"></a>

```go
func ResetMostRecent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawselasticbeanstalksolutionstack"

dataawselasticbeanstalksolutionstack.DataAwsElasticBeanstalkSolutionStack_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawselasticbeanstalksolutionstack"

dataawselasticbeanstalksolutionstack.DataAwsElasticBeanstalkSolutionStack_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawselasticbeanstalksolutionstack"

dataawselasticbeanstalksolutionstack.DataAwsElasticBeanstalkSolutionStack_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.mostRecentInput">MostRecentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.nameRegexInput">NameRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.mostRecent">MostRecent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.nameRegex">NameRegex</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MostRecentInput`<sup>Optional</sup> <a name="MostRecentInput" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.mostRecentInput"></a>

```go
func MostRecentInput() interface{}
```

- *Type:* interface{}

---

##### `NameRegexInput`<sup>Optional</sup> <a name="NameRegexInput" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.nameRegexInput"></a>

```go
func NameRegexInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MostRecent`<sup>Required</sup> <a name="MostRecent" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.mostRecent"></a>

```go
func MostRecent() interface{}
```

- *Type:* interface{}

---

##### `NameRegex`<sup>Required</sup> <a name="NameRegex" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.nameRegex"></a>

```go
func NameRegex() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsElasticBeanstalkSolutionStackConfig <a name="DataAwsElasticBeanstalkSolutionStackConfig" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawselasticbeanstalksolutionstack"

&dataawselasticbeanstalksolutionstack.DataAwsElasticBeanstalkSolutionStackConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	NameRegex: *string,
	Id: *string,
	MostRecent: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.nameRegex">NameRegex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack#name_regex DataAwsElasticBeanstalkSolutionStack#name_regex}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack#id DataAwsElasticBeanstalkSolutionStack#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.mostRecent">MostRecent</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack#most_recent DataAwsElasticBeanstalkSolutionStack#most_recent}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NameRegex`<sup>Required</sup> <a name="NameRegex" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.nameRegex"></a>

```go
NameRegex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack#name_regex DataAwsElasticBeanstalkSolutionStack#name_regex}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack#id DataAwsElasticBeanstalkSolutionStack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MostRecent`<sup>Optional</sup> <a name="MostRecent" id="@cdktf/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.mostRecent"></a>

```go
MostRecent interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack#most_recent DataAwsElasticBeanstalkSolutionStack#most_recent}.

---



